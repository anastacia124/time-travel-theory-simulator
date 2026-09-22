import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateEarthTime, calculateLorentzFactor } from '../lib/physics.ts';
import { handleOracleRequest } from '../lib/oracle.ts';
const request = (value) => new Request('http://localhost/api/oracle', {method:'POST', body:JSON.stringify(value)});
test('relativity reference values and rest', () => {
 assert.ok(Math.abs(calculateEarthTime(5, .9)-11.47078669352809)<1e-10);
 assert.equal(calculateEarthTime(5, 0),5);
 for(const speed of [NaN,Infinity,-.1,1,2]) assert.throws(()=>calculateLorentzFactor(speed));
 for(const time of [NaN,Infinity,-1,0]) assert.throws(()=>calculateEarthTime(time,.9));
 assert.throws(()=>calculateEarthTime(Number.MAX_VALUE,.99));
});
test('invalid questions are rejected before calling provider', async()=>{
 for(const value of [null,{}, {question:3},{question:''},{question:'   '},{question:'x'.repeat(2001)}]) {
  const r=await handleOracleRequest(request(value),()=>assert.fail('provider called'));
  assert.equal(r.status,400);
 }
 const r=await handleOracleRequest(new Request('http://localhost',{method:'POST',body:'{'}));
 assert.equal(r.status,400);
});
test('provider success is labeled and question trimmed',async()=>{
 const r=await handleOracleRequest(request({question:'  wormholes?  '}),async q=>{assert.equal(q,'wormholes?');return ' Generated answer ';});
 assert.deepEqual(await r.json(),{answer:'Generated answer',source:'gemini'});
});
test('missing key, empty response, and provider failure return fallback',async()=>{
 for(const provider of [undefined,async()=> '  ',async()=>{throw new Error('fake provider failure');}]){
  const r=await handleOracleRequest(request({question:'wormholes?'}),provider);
  assert.equal(r.status,200);
  const data=await r.json(); assert.equal(data.source,'fallback');assert.match(data.answer,/Wormholes could/);
 }
});

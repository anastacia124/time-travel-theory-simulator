export default function PortalVisual() {
  return <div className="portal-stage" aria-hidden="true">
    <div className="portal-orbit orbit-one" /><div className="portal-orbit orbit-two" />
    <div className="portal-disc"><div className="portal-inner" /></div>
    <div className="portal-crosshair horizontal" /><div className="portal-crosshair vertical" />
    <span className="portal-label label-top">SPACETIME / CONCEPT VISUAL</span>
    <span className="portal-label label-bottom">NO PHYSICAL PORTAL DETECTED</span>
    <span className="portal-coordinate">α / 00.000</span>
  </div>;
}

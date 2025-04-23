import * as React from 'react';

export interface IFooterProps {
}
export default function Footer (props: IFooterProps) {
  return (
    <footer id="footer">
  <div className="inner">
    <ul className="icons">
      <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
      <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
      <li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">Portfolio</span></a></li>
    </ul>
    <ul className="copyright">
      <li>&copy; All CopyRight are reserved.</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
    </ul>
  </div>
</footer>
  );
}

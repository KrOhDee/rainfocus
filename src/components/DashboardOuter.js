import logo from '../assets/logo.svg';
import r from '../assets/r.svg';

export default function DashboardOuter() {
  return (
    <div className="outer--main">
      <img className="outer--icon" src={r}></img>
      <img className="outer--icon" src={logo}></img>
    </div>
  );
}

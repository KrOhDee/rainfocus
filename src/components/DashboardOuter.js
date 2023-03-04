import logo from '../assets/logo.svg';
import r from '../assets/r.svg';
import user from '../assets/user.svg';

export default function DashboardOuter() {
  return (
    <div className="outer--main">
      <div className="outer--sub">
        <img alt="RainFocus logo" className="outer--icon" src={r}></img>
        <img
          alt="RainFocus Summit logo"
          className="outer--icon"
          src={logo}
        ></img>
      </div>
      <div className="teste2">
        <img alt="Current user" className="outer--profile" src={user}></img>
      </div>
    </div>
  );
}

import swan2 from '../assets/swan2.png';
import swan from '../assets/swan.png';
import user from '../assets/user.svg';

export default function DashboardOuter() {
  return (
    <div className="outer--main">
      <div className="outer--sub">
        <img alt="RainFocus logo" className="outer--icon" src={swan}></img>
        <img
          alt="RainFocus Summit logo"
          className="outer--icon"
          src={swan2}
        ></img>
      </div>
      <div className="teste2">
        <img alt="Current user" className="outer--profile" src={user}></img>
      </div>
    </div>
  );
}

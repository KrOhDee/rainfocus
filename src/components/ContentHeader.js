import logo from '../assets/logo.svg';

export default function ContentHeader() {
  return (
    <div className="hcontainer">
      <div className="content-header--header">
        <img className="content-header--icon" src={logo}></img>
        <div>
          <h2>RainFocus Summit</h2>
          <p>December 15th</p>
          <p>Lehi, Utah</p>
        </div>
        <button>Edit event</button>
      </div>
      <div className="content-header--footer">
        <h2>Event setup guide</h2>
        <p>
          See the available list of modules below. We suggest you start with the
          attendee module.
        </p>
      </div>
    </div>
  );
}

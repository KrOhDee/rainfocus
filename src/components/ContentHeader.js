import logo from '../assets/logo.svg';

export default function ContentHeader() {
  return (
    <div className="content-header--container">
      <div className="content-header--header">
        <img
          alt="RainFocus Summit logo"
          className="content-header--icon"
          src={logo}
        ></img>
        <div>
          <h1>RainFocus Summit</h1>
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

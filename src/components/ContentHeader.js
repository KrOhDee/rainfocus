import swan from '../assets/swan.svg';

export default function ContentHeader() {
  return (
    <div className="content-header--container">
      <div className="content-header--header">
        <img
          alt="RainFocus Summit logo"
          className="content-header--icon"
          src={swan}
        ></img>
        <div>
          <h1>Swan Events</h1>
          <p>August 25th</p>
          <p>Miami, Florida</p>
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

import InnerSelections from './InnerSelections';
import AttendeesDropdown from './AttendeesDropdown';
import hamburger from '../assets/hamburger.svg';

export default function DashboardInner() {
  return (
    <div className="inner--main">
      <div>
        <p className="inner--title">Swan Events</p>
        <img className="hamburger" src={hamburger}></img>
        <p className="inner--location">
          Miami, FL{' '}
          <span style={{ fontWeight: '700', fontSize: '0.8rem' }}>•</span>{' '}
          August 25th
        </p>
        <input className="inner--input" readOnly value="     Search"></input>

        <div className="inner--selections">
          <InnerSelections name="Guide" />

          <InnerSelections
            classNameCircle="inner--attendee-circle"
            classNameBg="inner--attendee-bg"
            name="Attendees"
          />
          <AttendeesDropdown />

          <InnerSelections name="Content" />
          <InnerSelections name="Exhibitors" />
        </div>
      </div>
    </div>
  );
}

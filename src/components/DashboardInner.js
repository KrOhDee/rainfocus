import InnerSelections from './InnerSelections';
import AttendeesDropdown from './AttendeesDropdown';
import hamburger from '../assets/hamburger.svg';

export default function DashboardInner() {
  return (
    <div className="inner--main">
      <div>
        <p className="inner--title">RainFocus Summit</p>
        <img className="hamburger" src={hamburger}></img>
        <p className="inner--location">
          Lehi, UT{' '}
          <span style={{ fontWeight: '700', fontSize: '0.8rem' }}>•</span>{' '}
          December 15th
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

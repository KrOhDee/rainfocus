import InnerSelections from './InnerSelections';
import AttendeesDropdown from './AttendeesDropdown';

export default function DashboardInner() {
  return (
    <div className="inner--main">
      <div>
        <p className="inner--title">RainFocus Summit</p>
        <p className="inner--location">Lehi, UT * December 15th</p>
        <input className="inner--input" placeholder="Search"></input>
        <div className="inner--selections">
          <InnerSelections name="Guide" />

          <InnerSelections
            classNameCircle="inner--attendee-circle"
            classNameBg="inner--attendee-bg"
            name="Attendees"
          />
          <AttendeesDropdown />

          <InnerSelections name="Content" />
          <InnerSelections name="Exhibitor" />
        </div>
      </div>
    </div>
  );
}

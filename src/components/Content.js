import ContentHeader from './ContentHeader';
import ContentMain from './ContentMain';
import person from '../assets/person.svg';

export default function Content() {
  return (
    <div className="content--container">
      <ContentHeader />
      <div className="content--subheader">
        <img
          alt="An icon of a person"
          className="content--subheader-icon"
          src={person}
        ></img>
        <p>Attendee</p>
      </div>
      <ContentMain />
    </div>
  );
}

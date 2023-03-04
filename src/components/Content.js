import ContentHeader from './ContentHeader';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import person from '../assets/person.svg';

export default function Content() {
  return (
    <div className="content--container">
      <ContentHeader />
      <div className="content--subheader">
        <img className="content--subheader-icon" src={person}></img>
        <p>Attendee</p>
      </div>
      <StepOne />
      <StepTwo />
      <StepThree />
    </div>
  );
}

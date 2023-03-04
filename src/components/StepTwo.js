import Blocks from './Blocks';
import arrow from '../assets/arrow.svg';

export default function StepTwo() {
  return (
    <div className="step-two--container">
      <p className="step-two--step">Step 2: Build registration workflows.</p>
      <div className="blocks-container">
        <Blocks
          title="Attendee Registration"
          description="Start by creating a general registration."
          image={arrow}
        />
        <Blocks
          title="Attendee Registration"
          description="Start by creating a general registration."
          image={arrow}
        />
        <Blocks
          title="Attendee Registration"
          description="Start by creating a general registration."
          image={arrow}
        />
        <Blocks
          title="Attendee Registration"
          description="Start by creating a general registration."
          image={arrow}
        />
      </div>
    </div>
  );
}

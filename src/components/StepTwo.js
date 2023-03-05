import Blocks from './Blocks';
import arrow from '../assets/arrow.svg';
import plus from '../assets/plus.svg';

export default function StepTwo() {
  return (
    <div className="step-two--container">
      <p className="step-two--step">
        <span style={{ fontWeight: '700' }}>Step 2:</span> Build registration
        workflows.
      </p>
      <div className="blocks-container">
        <Blocks
          title="Attendee Registration"
          description="Start by creating a general registration workflow"
          image={arrow}
        />
        <Blocks
          title="Attendee Registration"
          description="Start by creating a general registration workflow"
          image={arrow}
        />
        <Blocks
          title="Attendee Registration"
          description="Start by creating a general registration workflow"
          image={arrow}
        />
        <Blocks
          description="Add Registration Workflow"
          image={plus}
          className="blocks--add"
        />
      </div>
    </div>
  );
}

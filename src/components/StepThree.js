import Blocks from './Blocks';
import pc from '../assets/pc.svg';

export default function StepTwo() {
  return (
    <div className="step-two--container">
      <p className="step-three--step">
        <span style={{ fontWeight: '700' }}>Step 3:</span> Build registration
        workflows.
      </p>
      <div className="blocks-container">
        <Blocks
          title="Attendee Portal"
          description="Manage the portal that attendees will see after they've registered for your event."
          image={pc}
        />
      </div>
    </div>
  );
}

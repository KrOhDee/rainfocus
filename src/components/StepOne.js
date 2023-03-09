export default function StepOne() {
  return (
    <div className="step-one--container">
      <p className="step-one--step">
        <span style={{ fontWeight: '700' }}>Step 1:</span> Base settings.
      </p>
      <div className="step-one--content">
        <div className="step-one--containers">
          <p style={{ fontWeight: '700', marginBottom: '-8px' }}>General</p>
          <p style={{ fontSize: '0.9rem' }}>
            Define Attendee types & attributes
          </p>
        </div>
        <div className="step-one--containers">
          <p style={{ fontWeight: '700', marginBottom: '-8px' }}>Title</p>
          <p style={{ fontSize: '0.9rem' }}>
            Description that explains the value goes here. Description that
            explains the value goes here.
          </p>
        </div>
        <div className="step-one--containers">
          <p style={{ fontWeight: '700', marginBottom: '-8px' }}>Title</p>
          <p style={{ fontSize: '0.9rem' }}>
            Description that explains the value goes here. Description that
            explains the value goes here.
          </p>
        </div>
      </div>
    </div>
  );
}

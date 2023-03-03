export default function InnerSelections(props) {
  return (
    <div className={`inner-selections--container ${props.classNameBg}`}>
      <div
        style={{
          backgroundColor: props.classNameCircle === undefined ? 'gray' : '',
          width: '25px',
          height: '25px',
          borderRadius: '50%',
          padding: '0',
          margin: '0',
        }}
        className={`${props.classNameCircle}`}
      ></div>
      <p
        style={{
          padding: '10px',
          margin: '1px',
        }}
      >
        {props.name}
      </p>
    </div>
  );
}

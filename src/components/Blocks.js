export default function Blocks(props) {
  return (
    <div className={`blocks--block ${props.className}`}>
      <div className="blocks--title">
        <img
          style={{ marginTop: '10px' }}
          className="blocks--icon"
          src={props.image}
        ></img>
        <p style={{ fontWeight: '700', marginBottom: '0' }}>{props.title}</p>
      </div>
      <p>{props.description}</p>
    </div>
  );
}

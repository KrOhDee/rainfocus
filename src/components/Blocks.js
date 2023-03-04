export default function Blocks(props) {
  return (
    <div className="blocks--block">
      <div className="blocks--title">
        <img className="blocks--icon" src={props.image}></img>
        <p>{props.title}</p>
      </div>
      <p>{props.description}</p>
    </div>
  );
}

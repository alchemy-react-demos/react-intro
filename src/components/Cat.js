import './Cat.css';
export default function Cat(props) {
  return (
    <div className="cat-container">
      <img src={props.url} />
      <h2>{props.name}</h2>
    </div>
  );
}

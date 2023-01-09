import './Cat.css';
export default function Cat(props) {
  return (
    <div className="cat-container">
      <img src="benny.png" />
      <img src={props.image} />
      <h2>{props.name}</h2>
    </div>
  );
}

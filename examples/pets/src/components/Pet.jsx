export default function Pet(props) {
  return (
    <div className="pet">
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
}

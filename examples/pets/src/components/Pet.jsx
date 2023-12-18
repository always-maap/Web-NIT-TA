import { Card } from "react-bootstrap";

export default function Pet(props) {
  const { image, name, animal, breed } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} height="286px" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {animal} - {breed}
        </Card.Text>
        {props.description && <Card.Text>📝 {props.description}</Card.Text>}
        <Card.Text>
          {props.location && <Card.Text>🌍 {props.location}</Card.Text>}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

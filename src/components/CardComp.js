import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardComp(props) {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{props.id}</Card.Title>
        <Card.Text>
          {props.title}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.name && props.name}</ListGroup.Item>
        <ListGroup.Item>{props.email && props.email}</ListGroup.Item>
        <ListGroup.Item>{props.body && props.body}</ListGroup.Item>
      </ListGroup>
      
    </Card>
  );
}

export default CardComp;
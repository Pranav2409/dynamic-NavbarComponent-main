import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';

function CommentsComp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [comdata, setcomdata] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(data => setcomdata(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
     
     
     {comdata && comdata.map((comdata) => (
    <Card style={{  width: '18rem' }}>
    <Card.Body>
      <Card.Title>{comdata.id}</Card.Title>
      
      <Card.Text>
       Name: {comdata.name}
      </Card.Text>
      <Card.Text>
       Email: {comdata.email}
      </Card.Text>
      <Card.Text>
       Body: {comdata.body}
      </Card.Text>
     
     
    </Card.Body>
  </Card>
     ))}
     
    </div>
  )
}

export default CommentsComp
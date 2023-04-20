import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';

function PostsComp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postdata, setpostdata] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setpostdata(data))
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
       {postdata.map((postdata) => (
      <Card style={{  width: '18rem' }}>
      <Card.Body>
        <Card.Title>{postdata.id}</Card.Title>
        
        <Card.Text>
          Title: {postdata.title}
        </Card.Text>
        <Card.Text>
          Body: {postdata.body}
        </Card.Text>
       
      </Card.Body>
    </Card>
       ))}
     </div>   
    
  )
}

export default PostsComp
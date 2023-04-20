import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';



const Albumscomp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [aldata, setAldata] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(data => setAldata(data))
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
    <div >
      
       {aldata && aldata.map((aldata) => (
      <Card style={{  width: '18rem' }}>
      <Card.Body>
        <Card.Title>{aldata.id}</Card.Title>
        
        <Card.Text>
          {aldata.title}
        </Card.Text>
       
      </Card.Body>
    </Card>
       ))}
       
     </div>  
    
  )
       
}

export default Albumscomp
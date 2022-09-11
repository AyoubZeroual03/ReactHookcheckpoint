import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Carte = ({movie}) => {
  return (
    <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='m-1 '  style={{width:"277px", height:"190px"}} src={movie.link} />
      <Card.Body>
        <Card.Title>{movie.titre}</Card.Title>
        <Card.Text>
         {movie.etoile}
        </Card.Text>
        <Button variant="primary">Visionner</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

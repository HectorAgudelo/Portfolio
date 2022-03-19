import React from 'react';
import { Card } from 'react-bootstrap';

export const ProjectModalRender = (props) => {
  return (
    <>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant='top' src={props.img} />
        <Card.Body>
          <Card.Title>{props.tittle}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        
            {props.codeButton}
            {props.appButton}
        
        </Card.Body>
      </Card>
    </>
  );
};

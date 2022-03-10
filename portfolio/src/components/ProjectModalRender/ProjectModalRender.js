import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { ProjectModal } from './../ProjectModal/ProjectModal';

export const ProjectModalRender = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Card style={{ width: '32rem' }}>
        <Card.Img variant='top' src={props.Img} />
        <Card.Body>
          <Card.Title>{props.tittle}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary' onClick={() => setModalShow(true)}>
            Launch vertically centered modal
          </Button>

          <ProjectModal show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
      </Card>
    </>
  );
};

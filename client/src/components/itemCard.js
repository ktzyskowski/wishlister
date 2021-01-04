import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import EditItem from './editItem';

const ItemCard = ({ item }) => {
  return (
    <Card key={item.id}>
      <Accordion.Toggle as={Card.Header} eventKey={item.id}>
        {item.name} - ${item.price}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={item.id}>
        <Card.Body>
          <EditItem item={item} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default ItemCard
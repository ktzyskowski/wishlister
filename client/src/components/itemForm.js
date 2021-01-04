import React from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ItemForm = ({ initialName, onNameChange, initialPrice, onPriceChange, children }) => (
  <Form>
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" value={initialName} onChange={onNameChange} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Price</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="number" value={initialPrice} onChange={onPriceChange} />
      </InputGroup>
    </Form.Group>
    {children}
  </Form>
);

export default ItemForm;
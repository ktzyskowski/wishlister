import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import NEW_ITEM from '../queries/newItem';
import GET_ITEMS from '../queries/allItems';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemForm from './itemForm';

const NewItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [newItem] = useMutation(NEW_ITEM, { errorPolicy: 'ignore' });

  const handleNameChange = event => setName(event.target.value);
  const handlePriceChange = event => setPrice(event.target.value);

  const updateCache = (cache, mutation) => {
    if (!mutation.data.response.success) return;
    const item = mutation.data.response.item;
    const cachedQuery = cache.readQuery({ query: GET_ITEMS });
    cache.writeQuery({
      query: GET_ITEMS,
      data: {
        ...cachedQuery,
        response: {
          ...cachedQuery.response,
          items: [...cachedQuery.response.items, item]
        }
      }
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!name || price < 0) return;
    newItem({
      variables: {
        name: name,
        price: Number.parseFloat(price)
      },
        update: updateCache
    });
    setName('');
    setPrice('');
  };

  return (
    <Card className="mt-3">
      <Card.Header>New Item</Card.Header>
      <Card.Body>
        <ItemForm
          initialName={name}
          onNameChange={handleNameChange}
          initialPrice={price}
          onPriceChange={handlePriceChange}
        >
          <Button className="mr-3" onClick={handleSubmit}>Create</Button>
        </ItemForm>
      </Card.Body>
    </Card>
  );
};

export default NewItem;
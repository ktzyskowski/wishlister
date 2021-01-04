import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import UPDATE_ITEM from '../queries/updateItem';
import GET_ITEMS from '../queries/allItems';
import DELETE_ITEM from '../queries/deleteItem';

import Button from 'react-bootstrap/Button';
import ItemForm from './itemForm';

const EditItem = ({ item }) => {
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [updateItem] = useMutation(UPDATE_ITEM);
  const [deleteItem] = useMutation(DELETE_ITEM);

  const handleNameChange = event => setName(event.target.value);
  const handlePriceChange = event => setPrice(event.target.value);

  const updateCache = (cache, mutation) => {
    if (!mutation.data.response.success) return;
    const cachedQuery = cache.readQuery({ query: GET_ITEMS });
    cache.writeQuery({
      query: GET_ITEMS,
      data: {
        ...cachedQuery,
        response: {
          ...cachedQuery.response,
          items: cachedQuery.response.items.filter(candidate => item.id !== candidate.id)
        }
      }
    });
  };

  const handleSave = event => {
    event.preventDefault();
    if (!name || price < 0) return;
    updateItem({
      variables: {
        id: item.id,
        name: name,
        price: Number.parseFloat(price)
      }
    });
    setName('');
    setPrice('');
  }

  const handleDelete = event => {
    event.preventDefault();
    deleteItem({
      variables: {
        id: item.id
      },
      update: updateCache
    });
  }

  return (
    <ItemForm
      initialName={name}
      onNameChange={handleNameChange}
      initialPrice={price}
      onPriceChange={handlePriceChange}
    >
      <Button className="mr-3" onClick={handleSave}>Save</Button>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </ItemForm>
  );
};

export default EditItem;
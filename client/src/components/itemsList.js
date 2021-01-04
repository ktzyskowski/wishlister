import React from 'react';
import { useQuery } from '@apollo/client';
import GET_ITEMS from '../queries/allItems';

import { LoadingAlert, ErrorAlert, NoItemsAlert } from './alerts';
import Accordion from 'react-bootstrap/Accordion';
import ItemCard from './itemCard';

const ItemsList = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <LoadingAlert />;
  if (error || (data && !data.response.success)) return <ErrorAlert />
  if (data.response.items.length === 0) return <NoItemsAlert />;

  return (
    <Accordion>
      {data.response.items.map(item => <ItemCard item={item} />)}
    </Accordion>
  );
};  

export default ItemsList;

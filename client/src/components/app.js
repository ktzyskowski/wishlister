import React from 'react';

import Container from 'react-bootstrap/Container';
import ItemsList from './itemsList';
import NewItem from './newItem';

const App = () => (
  <Container className="p-3">
    <h1>Wishlister v1.0</h1>
    <ItemsList />
    <NewItem />
  </Container>
);

export default App;

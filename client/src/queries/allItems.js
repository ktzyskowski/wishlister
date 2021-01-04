import { gql } from '@apollo/client';

const GET_ITEMS = gql`
  query GetItems {
    response: allItems {
      success
      error
      items {
        id
        name
        price
      }
    }
  }
`;

export default GET_ITEMS;
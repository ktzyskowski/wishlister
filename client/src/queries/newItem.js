import { gql } from '@apollo/client';

const NEW_ITEM = gql`
  mutation NewItem($name: String!, $price: Int!) {
    response: newItem(name: $name, price: $price) {
      success
      error
      item {
        id
        name
        price
      }
    }
  }
`;

export default NEW_ITEM;
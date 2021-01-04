import { gql } from '@apollo/client';

const UPDATE_ITEM = gql`
  mutation UpdateItem($id: ID!, $name: String, $price: Int) {
    response: updateItem(id: $id, name: $name, price: $price) {
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

export default UPDATE_ITEM;
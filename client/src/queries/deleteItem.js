import { gql } from '@apollo/client';

const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    response: deleteItem(id: $id) {
      success
      error
    }
  }
`;

export default DELETE_ITEM;
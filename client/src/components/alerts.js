import React from 'react';

import Alert from 'react-bootstrap/Alert';

export const LoadingAlert = () => <Alert variant="primary">Loading items...</Alert>;
export const ErrorAlert = () => <Alert variant="danger">There was an error fetching the items.</Alert>;
export const NoItemsAlert = () => <Alert variant="primary">There are no items yet!</Alert>;
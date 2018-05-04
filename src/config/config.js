import React from 'react';

import Button from '../components/Button';
import Heading from '../components/Heading';

const COMPONENTS = [
  'Button',
  'Card',
  'Heading',
];

const onClickNull = () => {};

export const getElement = (s, i) => {
  let result;
  switch (s) {
    case 'Button':
      result = <Button key={i} label="button" color="primary" onClick={onClickNull} />;
      break;
    case 'Card':
      result = <Button key={i} label="card" color="primary" onClick={onClickNull} />;
      break;
    case 'Heading':
      result = <Heading key={i} label="header" color="primary" onClick={onClickNull}/>;
      break;
    default:
      result = <Button key={i} label="default" color="primary" onClick={onClickNull} />;
      break;
  }

  return result;
};

export default COMPONENTS;

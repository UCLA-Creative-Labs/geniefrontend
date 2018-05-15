import React from 'react';

import Button from '../components/Button';
import Heading from '../components/Heading';

const COMPONENTS = [
  'Button',
  'Card',
  'h1',
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
    case 'h1':
      result = <Heading key={i} headingLevel={1} content="Heading 1" label="header" color="primary" onClick={onClickNull} />;
      break;
    case 'h2':
      result = <Heading key={i} headingLevel={2} content="Heading 2" label="header" color="primary" onClick={onClickNull} />;
      break;
    case 'h3':
      result = <Heading key={i} headingLevel={3} content="Heading 3" label="header" color="primary" onClick={onClickNull} />;
      break;
    default:
      result = <Button key={i} label="default" color="primary" onClick={onClickNull} />;
      break;
  }

  return result;
};

export default COMPONENTS;

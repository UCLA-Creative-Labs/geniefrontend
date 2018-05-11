import React from 'react';

import Button from '../components/Button';
import InlineStepper from '../components/InlineStepper';

const COMPONENTS = [
  'Button',
  'Card',
  'InlineStepper',
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
    case 'InlineStepper':
      result = <InlineStepper key={i} label="inline stepper" />;
      break;
    default:
      result = <Button key={i} label="default" color="primary" onClick={onClickNull} />;
      break;
  }

  return result;
};

export default COMPONENTS;

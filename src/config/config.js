import React from 'react';

import Button from '../components/Button';
import Image from '../components/Image';
import InlineStepper from '../components/InlineStepper';
import Paragraph from '../components/Paragraph';

const COMPONENTS = [
  'Button',
  'Card',
  'InlineStepper',
  'Image',
  'Paragraph'
];

const onClickNull = () => {};

const pgText = 'Lorem ipsum dolor sit amet, vis populo laoreet indoctum ne, per ad minim feugiat omittam, quas habeo numquam ad eam. Eu invidunt expetenda usu. No tollit utamur adolescens vel. No vocibus placerat sapientem mei, ei vix nemore accusata patrioque. Impetus concludaturque cu qui, veri prima qui ut, causae scripserit ne pro.';

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
    case 'Image':
      result = <Image key={i} />;
      break;
    case 'Paragraph':
      result = <Paragraph key={i} text={pgText} />;
      break;
    default:
      result = <Button key={i} label="default" color="primary" onClick={onClickNull} />;
      break;
  }

  return result;
};

export default COMPONENTS;

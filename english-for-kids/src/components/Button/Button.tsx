import React from 'react';

import './Button.scss';

type ButtonProps = {
  text: string;
  onClickHandler: (e: React.MouseEvent<Element>) => void;
};

export default function Button({ text, onClickHandler }: ButtonProps) {
  return (
    <button onClick={onClickHandler} type="button" className="btn">
      {text}
    </button>
  );
}

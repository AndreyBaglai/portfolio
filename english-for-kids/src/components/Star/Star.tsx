import React from 'react';

import './Star.scss';

type StarProps = {
  typeStar: boolean;
};

export default function Star({ typeStar }: StarProps) {
  return (
    <img
      className="star"
      src={typeStar ? './images/icons/star-win.svg' : './images/icons/star.svg'}
      alt="Star"
    />
  );
}

import React from 'react';

import './Category.scss';

type CategoryProps = {
  name: string;
  imgSrc: string;
};

export default function Category({ name, imgSrc }: CategoryProps) {
  return (
    <div className="category">
      <img className="category-img" src={imgSrc} alt={name}></img>
      <span className="category-name">{name}</span>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import './Category.scss';

type CategoryProps = {
  name: string;
  imgSrc: string;
  path: string;
};

export default function Category({ name, imgSrc, path }: CategoryProps): JSX.Element {
  return (
    <Link to={path}>
      <div className="category">
        <img className="category-img" src={imgSrc} alt={name}></img>
        <span className="category-name">{name}</span>
      </div>
    </Link>
  );
}

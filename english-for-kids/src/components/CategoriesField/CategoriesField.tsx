import React from 'react';
import Category from '../Category/Category';

import { CATEGORIES_DATA } from '../../variables/variables';

import './CategoriesField.scss';

export default function CategoriesField(): JSX.Element {
  return (
    <div className="categories-field">
      {CATEGORIES_DATA.map(({ name, imgSrc, path }) => {
        return <Category name={name} imgSrc={imgSrc} path={path} key={name} />;
      })}
    </div>
  );
}

import React, { useState } from 'react';
import Category from '../Category/Category';

import './CategoriesField.scss';

export default function CategoriesField() {
  const [categories, setCategories] = useState([
    { name: 'Action (set A)', imgSrc: '/images/categories/draw.jpg', path: '/action-a' },
    { name: 'Action (set B)', imgSrc: '/images/categories/play.jpg', path: '/action-b' },
    { name: 'Animal (set A)', imgSrc: '/images/categories/horse.jpg', path: '/animal-a' },
    { name: 'Animal (set B)', imgSrc: '/images/categories/lion.jpg', path: '/animal-b' },
    { name: 'Clothes', imgSrc: '/images/categories/dress.jpg', path: '/clothes' },
    { name: 'Emotions', imgSrc: '/images/categories/smile.jpg', path: '/emotions' },
  ]);

  return (
    <div className="categories-field">
      {categories.map(({ name, imgSrc, path }, i) => {
        return <Category name={name} imgSrc={imgSrc} path={path} key={name} />;
      })}
    </div>
  );
}

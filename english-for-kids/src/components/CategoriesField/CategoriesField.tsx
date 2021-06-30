import React, { useState } from 'react';
import Category from '../Category/Category';

import './CategoriesField.scss';

export default function CategoriesField() {
  const [categories, setCategories] = useState([
    { name: 'Action (set A)', imgSrc: '/images/categories/action-a.jpg', path: '/action-a' },
    { name: 'Action (set B)', imgSrc: '/images/categories/action-b.jpg', path: '/action-b' },
    { name: 'Animal (set A)', imgSrc: '/images/categories/animal-a.jpg', path: '/animal-a' },
    { name: 'Animal (set B)', imgSrc: '/images/categories/animal-b.jpg', path: '/animal-b' },
    { name: 'Clothes', imgSrc: '/images/categories/clothes.jpg', path: '/clothes' },
    { name: 'Emotions', imgSrc: '/images/categories/emotions.jpg', path: '/emotions' },
    { name: 'Trees', imgSrc: '/images/categories/trees.jpg', path: '/trees' },
    { name: 'Sport', imgSrc: '/images/categories/sport.jpg', path: '/sport' },
  ]);

  return (
    <div className="categories-field">
      {categories.map(({ name, imgSrc, path }, i) => {
        return <Category name={name} imgSrc={imgSrc} path={path} key={name} />;
      })}
    </div>
  );
}

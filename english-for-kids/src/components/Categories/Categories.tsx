import React, { useState } from 'react';
import Category from '../Category/Category';

import './Categories.scss';

export default function Categories() {
  const [categories, setCategories] = useState([
    { name: 'Action (set A)', imgSrc: '/images/categories/draw.jpg' },
    { name: 'Action (set B)', imgSrc: '/images/categories/play.jpg' },
    { name: 'Animal (set A)', imgSrc: '/images/categories/horse.jpg' },
    { name: 'Animal (set B)', imgSrc: '/images/categories/lion.jpg' },
    { name: 'Clothes', imgSrc: '/images/categories/dress.jpg' },
    { name: 'Emotions', imgSrc: '/images/categories/smile.jpg' },
  ]);

  return (
    <div className="categories-field">
      {categories.map(({ name, imgSrc }, i) => {
        return <Category name={name} imgSrc={imgSrc} key={name} />;
      })}
    </div>
  );
}

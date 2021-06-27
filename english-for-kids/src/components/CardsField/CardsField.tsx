import React from 'react';

import './CardsField.scss';

type CardsFieldProps = {
  typeCards: string;
};

export default function CardsField({ typeCards }: CardsFieldProps) {
  return <div className="cards-field">{typeCards}</div>;
}

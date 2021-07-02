import React, { useEffect, useState } from 'react';
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../services/localStorage';

import './Card.scss';

type CardProps = {
  word: string;
  translation: string;
  imgSrc: string;
  audioSrc: string;
  isGameMode: boolean;
  isStartGame: boolean;
  onPlayAudioWord: (e: React.MouseEvent<Element>, src: string) => void;
  onTryAnswer: (e: React.MouseEvent<Element>) => void;
  onFlip: (e: React.MouseEvent<Element>, toBack: boolean) => void;
};

export default function Card({
  word,
  translation,
  imgSrc,
  audioSrc,
  isGameMode,
  isStartGame,
  onPlayAudioWord,
  onTryAnswer,
  onFlip,
}: CardProps) {
  const countClicks = () => {
    const card = getItemFromLocalStorage(word);
    card.clicks += 1;
    setItemToLocalStorage(card);
  };

  return (
    <div
      data-word={word}
      className="card-container"
      aria-hidden="true"
      onClick={(e: React.MouseEvent<Element>) => {
        if (!isGameMode) {
          onPlayAudioWord(e, audioSrc);
          countClicks();
        } else if (isStartGame) {
          onTryAnswer(e);
          countClicks();
        }
      }}
      onMouseLeave={(e: React.MouseEvent<Element>) => onFlip(e, false)}
    >
      <div className="card">
        <div className="card__front">
          <div
            className={`card__front-img ${isGameMode ? 'game' : ''}`}
            style={{ backgroundImage: `url(${imgSrc})` }}
          ></div>
          {!isGameMode ? (
            <div className="card__front-content">
              <span>{word}</span>
              <div
                className="flip-icon-wrapper"
                aria-hidden="true"
                onClick={(e: React.MouseEvent<Element>) => onFlip(e, true)}
              >
                <svg
                  className="flip-icon"
                  width="30"
                  height="30"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0417 3.33332L11.875 6.49999H14.25C14.25 9.12041 12.1204 11.25 9.49999 11.25C8.70041 11.25 7.94041 11.0521 7.28332 10.6958L6.12749 11.8517C7.10124 12.4692 8.25707 12.8333 9.49999 12.8333C12.9992 12.8333 15.8333 9.99916 15.8333 6.49999H18.2083L15.0417 3.33332ZM4.74999 6.49999C4.74999 3.87957 6.87957 1.74999 9.49999 1.74999C10.2996 1.74999 11.0596 1.94791 11.7167 2.30416L12.8725 1.14832C11.8987 0.530823 10.7429 0.166656 9.49999 0.166656C6.00082 0.166656 3.16666 3.00082 3.16666 6.49999H0.791656L3.95832 9.66666L7.12499 6.49999H4.74999Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="card__back">
          <div className="card__back-img" style={{ backgroundImage: `url(${imgSrc})` }}></div>
          <div className="card__back-text">{translation}</div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
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
}: CardProps): JSX.Element {
  const countClicks = (): void => {
    const card = getItemFromLocalStorage(word);
    card.clicks += 1;
    setItemToLocalStorage(card);
  };

  const setOnClickHandler = (e: React.MouseEvent<Element>): void => {
    if (!isGameMode) {
      onPlayAudioWord(e, audioSrc);
      countClicks();
    } else if (isStartGame) {
      onTryAnswer(e);
      countClicks();
    }
  };

  return (
    <div
      data-word={word}
      className="card-container"
      aria-hidden="true"
      onClick={setOnClickHandler}
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
                <img src="./images/icons/flip.svg" alt="flip icon" />
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

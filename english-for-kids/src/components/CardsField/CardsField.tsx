import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button/Button';
import Card from '../Card/Card';
import Star from '../Star/Star';

import { CardModel } from '../../models/card-model';
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../services/localStorage';

import { CARDS_DATA, MAX_WORD_INDEX } from '../../variables/variables';
import { countWrongPercentWord, parseSrc, playAudio, shuffleArray } from '../../shared/shared';

import './CardsField.scss';

type CardsFieldProps = {
  typeCards?: string;
  isGameMode?: boolean;
  repeatWords?: CardModel[];
};

export default function CardsField({
  typeCards,
  isGameMode = false,
  repeatWords = [],
}: CardsFieldProps): JSX.Element {
  const [audioWords, setAudioWords] = useState<string[]>([]);
  const [isStartGame, setIsStartGame] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFinishGame, setIsFinishGame] = useState(false);
  const [stars, setStars] = useState<boolean[]>([]);
  const [errors, setErrors] = useState(0);

  const history = useHistory();

  const getCardsDataByCategory = (category: string | undefined) => {
    return CARDS_DATA.filter((collection) => collection.category === category)
      .map((currentCollection) => currentCollection.info)
      .flat();
  };

  useEffect(() => {
    const tempArr = getCardsDataByCategory(typeCards).map((item) => item.audioSrc);
    setAudioWords(shuffleArray(tempArr));
  }, []);

  useEffect(() => {
    playAudio(audioWords[wordIndex]);
  }, [wordIndex]);

  const flip = (isFront = false, card: HTMLElement): Promise<void> => {
    return new Promise((resolve) => {
      card.classList.toggle('flipped', isFront);
      card.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  };

  const checkCorrectAnswer = (word: string): boolean => {
    const currentWord = parseSrc(audioWords[wordIndex]);
    return currentWord.toLowerCase() === word.toLowerCase();
  };

  const updateCardData = (word: string): void => {
    const card = getItemFromLocalStorage(word);
    card.correct += 1;
    card.percent = countWrongPercentWord(card);
    setItemToLocalStorage(card);
  };

  const onPlayAudioWord = (e: React.MouseEvent<Element>, src: string) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('card__front-img')) {
      playAudio(src);
    }
  };

  const onFlip = async (e: React.MouseEvent<Element>, toBack: boolean) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const cardContainer = target.closest('.card-container') as HTMLElement;

    if (toBack && target.closest('.flip-icon-wrapper') && cardContainer) {
      await flip(true, cardContainer);
    } else {
      await flip(false, cardContainer);
    }
  };

  const onStartGame = () => {
    playAudio(audioWords[wordIndex]);
    setIsStartGame(true);
  };

  const onTryAnswer = (e: React.MouseEvent<Element>) => {
    const target = e.target as HTMLElement;
    const clickedCard = target.closest('.card-container') as HTMLElement;
    const clickedWord = clickedCard.dataset.word;
    const singWord = parseSrc(audioWords[wordIndex]);

    if (clickedWord && checkCorrectAnswer(clickedWord)) {
      if (wordIndex === MAX_WORD_INDEX) {
        setIsFinishGame(true);
        const finishAudioSrc = errors > 0 ? './audio/failure.mp3' : './audio/success.mp3';
        playAudio(finishAudioSrc);

        setTimeout(() => {
          history.push('/');
        }, 3000);
      } else {
        playAudio('./audio/correct.mp3');
        clickedCard.classList.add('correct');

        updateCardData(singWord);

        setStars([...stars, true]);
        setWordIndex(wordIndex + 1);
      }
    } else {
      setErrors(errors + 1);
      playAudio('./audio/error.mp3');

      updateCardData(singWord);

      setStars([...stars, false]);
    }
  };

  const onRepeatWord = () => {
    playAudio(audioWords[wordIndex]);
  };

  return (
    <div className="cards-field">
      {repeatWords.length > 0
        ? repeatWords.map(({ word, translation, imgSrc, audioSrc }) => {
            return (
              <Card
                word={word}
                translation={translation}
                imgSrc={imgSrc}
                audioSrc={audioSrc}
                onPlayAudioWord={onPlayAudioWord}
                onFlip={onFlip}
                onTryAnswer={onTryAnswer}
                isGameMode={isGameMode}
                isStartGame={isStartGame}
                key={word + translation}
              />
            );
          })
        : ''}
      {isFinishGame ? (
        <div className="end-game">
          <span className={errors > 0 ? 'fail-text' : 'success-text'}>Errors: {errors}</span>
          <img
            className="avatar-end-game"
            src={errors > 0 ? './images/failure.jpg' : './images/success.jpg'}
            alt="Avatar end game"
          />
        </div>
      ) : (
        <>
          {isStartGame ? (
            <div className="stars-wrapper">
              {stars.map((typeStar) => (
                <Star typeStar={typeStar} key={`key ${Math.random()}`} />
              ))}
            </div>
          ) : (
            ''
          )}
          {getCardsDataByCategory(typeCards).map(({ word, translation, imgSrc, audioSrc }) => {
            return (
              <Card
                word={word}
                translation={translation}
                imgSrc={imgSrc}
                audioSrc={audioSrc}
                onPlayAudioWord={onPlayAudioWord}
                onFlip={onFlip}
                onTryAnswer={onTryAnswer}
                isGameMode={isGameMode}
                isStartGame={isStartGame}
                key={word + translation}
              />
            );
          })}
          {isGameMode && !isStartGame ? (
            <Button text="Start game" onClickHandler={onStartGame} />
          ) : (
            ''
          )}
          {isStartGame ? <Button text="Repeat word" onClickHandler={onRepeatWord} /> : ''}
        </>
      )}
    </div>
  );
}

CardsField.defaultProps = {
  typeCards: '',
  isGameMode: false,
  repeatWords: [],
};

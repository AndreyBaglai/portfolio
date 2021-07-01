import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card/Card';
import Star from '../Star/Star';

import './CardsField.scss';

type CardsFieldProps = {
  typeCards: string;
  isGameMode: boolean;
};

export default function CardsField({ typeCards, isGameMode }: CardsFieldProps) {
  const [cardsData, setCardsData] = useState([
    {
      category: 'action-a',
      info: [
        {
          word: 'cry',
          translation: 'плакать',
          imgSrc: './images/cards/action-a/cry.jpg',
          audioSrc: './audio/cards/action-a/cry.mp3',
        },
        {
          word: 'dance',
          translation: 'танцевать',
          imgSrc: './images/cards/action-a/dance.jpg',
          audioSrc: './audio/cards/action-a/dance.mp3',
        },
        {
          word: 'dive',
          translation: 'нырять',
          imgSrc: './images/cards/action-a/dive.jpg',
          audioSrc: './audio/cards/action-a/dive.mp3',
        },
        {
          word: 'draw',
          translation: 'рисовать',
          imgSrc: './images/cards/action-a/draw.jpg',
          audioSrc: './audio/cards/action-a/draw.mp3',
        },
        {
          word: 'fish',
          translation: 'ловить рыбу',
          imgSrc: './images/cards/action-a/fish.jpg',
          audioSrc: './audio/cards/action-a/fish.mp3',
        },
        {
          word: 'fly',
          translation: 'летать',
          imgSrc: './images/cards/action-a/fly.jpg',
          audioSrc: './audio/cards/action-a/fly.mp3',
        },
        {
          word: 'hug',
          translation: 'обнимать',
          imgSrc: './images/cards/action-a/hug.jpg',
          audioSrc: './audio/cards/action-a/hug.mp3',
        },
        {
          word: 'jump',
          translation: 'прыгать',
          imgSrc: './images/cards/action-a/jump.jpg',
          audioSrc: './audio/cards/action-a/jump.mp3',
        },
      ],
    },
    {
      category: 'action-b',
      info: [
        {
          word: 'open',
          translation: 'открывать',
          imgSrc: './images/cards/action-b/open.jpg',
          audioSrc: './audio/cards/action-b/open.mp3',
        },
        {
          word: 'play',
          translation: 'играть',
          imgSrc: './images/cards/action-b/play.jpg',
          audioSrc: './audio/cards/action-b/play.mp3',
        },
        {
          word: 'point',
          translation: 'указывать',
          imgSrc: './images/cards/action-b/point.jpg',
          audioSrc: './audio/cards/action-b/point.mp3',
        },
        {
          word: 'ride',
          translation: 'ездить',
          imgSrc: './images/cards/action-b/ride.jpg',
          audioSrc: './audio/cards/action-b/ride.mp3',
        },
        {
          word: 'run',
          translation: 'бегать',
          imgSrc: './images/cards/action-b/run.jpg',
          audioSrc: './audio/cards/action-b/run.mp3',
        },
        {
          word: 'sing',
          translation: 'петь',
          imgSrc: './images/cards/action-b/sing.jpg',
          audioSrc: './audio/cards/action-b/sing.mp3',
        },
        {
          word: 'skip',
          translation: 'пропускать, прыгать',
          imgSrc: './images/cards/action-b/skip.jpg',
          audioSrc: './audio/cards/action-b/skip.mp3',
        },
        {
          word: 'swim',
          translation: 'плавать',
          imgSrc: './images/cards/action-b/swim.jpg',
          audioSrc: './audio/cards/action-b/swim.mp3',
        },
      ],
    },
    {
      category: 'animal-a',
      info: [
        {
          word: 'cat',
          translation: 'кот',
          imgSrc: './images/cards/animal-a/cat.jpg',
          audioSrc: './audio/cards/animal-a/cat.mp3',
        },
        {
          word: 'chick',
          translation: 'цыплёнок',
          imgSrc: './images/cards/animal-a/chick.jpg',
          audioSrc: './audio/cards/animal-a/chick.mp3',
        },
        {
          word: 'chicken',
          translation: 'курица',
          imgSrc: './images/cards/animal-a/chicken.jpg',
          audioSrc: './audio/cards/animal-a/chicken.mp3',
        },
        {
          word: 'dog',
          translation: 'собака',
          imgSrc: './images/cards/animal-a/dog.jpg',
          audioSrc: './audio/cards/animal-a/dog.mp3',
        },
        {
          word: 'horse',
          translation: 'лошадь',
          imgSrc: './images/cards/animal-a/horse.jpg',
          audioSrc: './audio/cards/animal-a/horse.mp3',
        },
        {
          word: 'pig',
          translation: 'свинья',
          imgSrc: './images/cards/animal-a/pig.jpg',
          audioSrc: './audio/cards/animal-a/pig.mp3',
        },
        {
          word: 'rabbit',
          translation: 'кролик',
          imgSrc: './images/cards/animal-a/rabbit.jpg',
          audioSrc: './audio/cards/animal-a/rabbit.mp3',
        },
        {
          word: 'sheep',
          translation: 'овца',
          imgSrc: './images/cards/animal-a/sheep.jpg',
          audioSrc: './audio/cards/animal-a/sheep.mp3',
        },
      ],
    },
    {
      category: 'animal-b',
      info: [
        {
          word: 'bird',
          translation: 'птица',
          imgSrc: './images/cards/animal-b/bird.jpg',
          audioSrc: './audio/cards/animal-b/bird.mp3',
        },
        {
          word: 'fish',
          translation: 'рыба',
          imgSrc: './images/cards/animal-b/fish1.jpg',
          audioSrc: './audio/cards/animal-b/fish.mp3',
        },
        {
          word: 'frog',
          translation: 'жаба',
          imgSrc: './images/cards/animal-b/frog.jpg',
          audioSrc: './audio/cards/animal-b/frog.mp3',
        },
        {
          word: 'giraffe',
          translation: 'жирафа',
          imgSrc: './images/cards/animal-b/giraffe.jpg',
          audioSrc: './audio/cards/animal-b/giraffe.mp3',
        },
        {
          word: 'lion',
          translation: 'лев',
          imgSrc: './images/cards/animal-b/lion.jpg',
          audioSrc: './audio/cards/animal-b/lion.mp3',
        },
        {
          word: 'mouse',
          translation: 'мышь',
          imgSrc: './images/cards/animal-b/mouse.jpg',
          audioSrc: './audio/cards/animal-b/mouse.mp3',
        },
        {
          word: 'turtle',
          translation: 'черепаха',
          imgSrc: './images/cards/animal-b/turtle.jpg',
          audioSrc: './audio/cards/animal-b/turtle.mp3',
        },
        {
          word: 'dolphin',
          translation: 'дельфин',
          imgSrc: './images/cards/animal-b/dolphin.jpg',
          audioSrc: './audio/cards/animal-b/dolphin.mp3',
        },
      ],
    },
    {
      category: 'clothes',
      info: [
        {
          word: 'skirt',
          translation: 'юбка',
          imgSrc: './images/cards/clothes/skirt.jpg',
          audioSrc: './audio/cards/clothes/skirt.mp3',
        },
        {
          word: 'pants',
          translation: 'брюки',
          imgSrc: './images/cards/clothes/pants.jpg',
          audioSrc: './audio/cards/clothes/pants.mp3',
        },
        {
          word: 'blouse',
          translation: 'блузка',
          imgSrc: './images/cards/clothes/blouse.jpg',
          audioSrc: './audio/cards/clothes/blouse.mp3',
        },
        {
          word: 'dress',
          translation: 'платье',
          imgSrc: './images/cards/clothes/dress.jpg',
          audioSrc: './audio/cards/clothes/dress.mp3',
        },
        {
          word: 'boot',
          translation: 'ботинок',
          imgSrc: './images/cards/clothes/boot.jpg',
          audioSrc: './audio/cards/clothes/boot.mp3',
        },
        {
          word: 'shirt',
          translation: 'рубашка',
          imgSrc: './images/cards/clothes/shirt.jpg',
          audioSrc: './audio/cards/clothes/shirt.mp3',
        },
        {
          word: 'coat',
          translation: 'пальто',
          imgSrc: './images/cards/clothes/coat.jpg',
          audioSrc: './audio/cards/clothes/coat.mp3',
        },
        {
          word: 'shoe',
          translation: 'туфли',
          imgSrc: './images/cards/clothes/shoe.jpg',
          audioSrc: './audio/cards/clothes/shoe.mp3',
        },
      ],
    },
    {
      category: 'emotions',
      info: [
        {
          word: 'sad',
          translation: 'грустный',
          imgSrc: './images/cards/emotions/sad.jpg',
          audioSrc: './audio/cards/emotions/sad.mp3',
        },
        {
          word: 'angry',
          translation: 'сердитый',
          imgSrc: './images/cards/emotions/angry.jpg',
          audioSrc: './audio/cards/emotions/angry.mp3',
        },
        {
          word: 'happy',
          translation: 'счастливый',
          imgSrc: './images/cards/emotions/happy.jpg',
          audioSrc: './audio/cards/emotions/happy.mp3',
        },
        {
          word: 'tired',
          translation: 'уставший',
          imgSrc: './images/cards/emotions/tired.jpg',
          audioSrc: './audio/cards/emotions/tired.mp3',
        },
        {
          word: 'surprised',
          translation: 'удивлённый',
          imgSrc: './images/cards/emotions/surprised.jpg',
          audioSrc: './audio/cards/emotions/surprised.mp3',
        },
        {
          word: 'scared',
          translation: 'испуганный',
          imgSrc: './images/cards/emotions/scared.jpg',
          audioSrc: './audio/cards/emotions/scared.mp3',
        },
        {
          word: 'smile',
          translation: 'улыбка',
          imgSrc: './images/cards/emotions/smile.jpg',
          audioSrc: './audio/cards/emotions/smile.mp3',
        },
        {
          word: 'laugh',
          translation: 'смех',
          imgSrc: './images/cards/emotions/laugh.jpg',
          audioSrc: './audio/cards/emotions/laugh.mp3',
        },
      ],
    },
    {
      category: 'trees',
      info: [
        {
          word: 'acacia',
          translation: 'акация',
          imgSrc: './images/cards/trees/acacia.jpg',
          audioSrc: './audio/cards/trees/acacia.mp3',
        },
        {
          word: 'ash',
          translation: 'ясень',
          imgSrc: './images/cards/trees/ash.jpg',
          audioSrc: './audio/cards/trees/ash.mp3',
        },
        {
          word: 'birch',
          translation: 'берёза',
          imgSrc: './images/cards/trees/birch.jpg',
          audioSrc: './audio/cards/trees/birch.mp3',
        },
        {
          word: 'oak',
          translation: 'дуб',
          imgSrc: './images/cards/trees/oak.jpg',
          audioSrc: './audio/cards/trees/oak.mp3',
        },
        {
          word: 'palm',
          translation: 'пальма',
          imgSrc: './images/cards/trees/palm.jpg',
          audioSrc: './audio/cards/trees/palm.mp3',
        },
        {
          word: 'pine',
          translation: 'сосна',
          imgSrc: './images/cards/trees/pine.jpg',
          audioSrc: './audio/cards/trees/pine.mp3',
        },
        {
          word: 'spruce',
          translation: 'ель',
          imgSrc: './images/cards/trees/spruce.jpg',
          audioSrc: './audio/cards/trees/spruce.mp3',
        },
        {
          word: 'willow',
          translation: 'ива',
          imgSrc: './images/cards/trees/willow.jpg',
          audioSrc: './audio/cards/trees/willow.mp3',
        },
      ],
    },
    {
      category: 'sport',
      info: [
        {
          word: 'baseball',
          translation: 'бейсбол',
          imgSrc: './images/cards/sport/baseball.jpg',
          audioSrc: './audio/cards/sport/baseball.mp3',
        },
        {
          word: 'basketball',
          translation: 'баскетбол',
          imgSrc: './images/cards/sport/basketball.jpg',
          audioSrc: './audio/cards/sport/basketball.mp3',
        },
        {
          word: 'chess',
          translation: 'шахматы',
          imgSrc: './images/cards/sport/chess.jpg',
          audioSrc: './audio/cards/sport/chess.mp3',
        },
        {
          word: 'cricket',
          translation: 'крикет',
          imgSrc: './images/cards/sport/cricket.jpg',
          audioSrc: './audio/cards/sport/cricket.mp3',
        },
        {
          word: 'football',
          translation: 'футбол',
          imgSrc: './images/cards/sport/football.jpg',
          audioSrc: './audio/cards/sport/football.mp3',
        },
        {
          word: 'golf',
          translation: 'гольф',
          imgSrc: './images/cards/sport/golf.jpg',
          audioSrc: './audio/cards/sport/golf.mp3',
        },
        {
          word: 'karate',
          translation: 'каратэ',
          imgSrc: './images/cards/sport/karate.jpg',
          audioSrc: './audio/cards/sport/karate.mp3',
        },
        {
          word: 'tennis',
          translation: 'большой теннис',
          imgSrc: './images/cards/sport/tennis.jpg',
          audioSrc: './audio/cards/sport/tennis.mp3',
        },
      ],
    },
  ]);
  const [audioWords, setAudioWords] = useState<string[]>([]);
  const [isStartGame, setIsStartGame] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFinishGame, setIsFinishGame] = useState(false);
  const [stars, setStars] = useState<boolean[]>([]);
  const [errors, setErrors] = useState(0);

  const history = useHistory();

  const playAudio = (src: string) => {
    const audioEl = new Audio();
    audioEl.src = src;
    audioEl.currentTime = 0;
    audioEl.play().catch((error) => {
      return error;
    });
  };

  useEffect(() => {
    const temp = cardsData
      .filter((collection) => collection.category === typeCards)
      .map((currentCollection) => currentCollection.info)
      .flat()
      .map((item) => item.audioSrc);

    setAudioWords(temp);
  }, []);

  useEffect(() => {
    playAudio(audioWords[wordIndex]);
  }, [wordIndex]);

  const onPlayAudioWord = (e: React.MouseEvent<Element>, src: string) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('card__front-img')) {
      playAudio(src);
    }
  };

  const flip = (isFront = false, card: HTMLElement): Promise<void> => {
    return new Promise((resolve) => {
      card.classList.toggle('flipped', isFront);
      card.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
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

  const checkCorrectAnswer = (word: string): boolean => {
    const temp = audioWords[wordIndex].split('/');
    const currentWord = temp[temp.length - 1].split('.')[0];

    return currentWord.toLowerCase() === word.toLowerCase();
  };

  const onTryAnswer = (e: React.MouseEvent<Element>) => {
    const target = e.target as HTMLElement;
    const clickedCard = target.closest('.card-container') as HTMLElement;
    const clickedWord = clickedCard.dataset.word;

    if (clickedWord && checkCorrectAnswer(clickedWord)) {
      if (wordIndex === 7) {
        setIsFinishGame(true);
        const finishAudioSrc = errors > 3 ? './audio/failure.mp3' : './audio/success.mp3';
        playAudio(finishAudioSrc);

        setTimeout(() => {
          history.push('/');
        }, 3000);
      } else {
        playAudio('./audio/correct.mp3');
        clickedCard.classList.add('correct');
        setStars([...stars, true]);
        setWordIndex(wordIndex + 1);
      }
    } else {
      setErrors(errors + 1);
      playAudio('./audio/error.mp3');
      setStars([...stars, false]);
    }
  };

  const onRepeatWord = () => {
    playAudio(audioWords[wordIndex]);
  };

  return (
    <div className="cards-field">
      {isFinishGame ? (
        <div className="end-game">
          <span className={errors > 3 ? 'fail-text' : 'success-text'}>Errors: {errors}</span>
          <img
            className="avatar-end-game"
            src={errors > 3 ? './images/failure.jpg' : './images/success.jpg'}
            alt="Avatar end game"
          />
        </div>
      ) : (
        <>
          {isStartGame ? (
            <div className="stars-wrapper">
              {stars.map((typeStar, i) => (
                <Star typeStar={typeStar} key={`key ${Math.random()}`} />
              ))}
            </div>
          ) : (
            ''
          )}
          {cardsData
            .filter((collection) => collection.category === typeCards)
            .map((currentCollection) => currentCollection.info)
            .flat()
            .map(({ word, translation, imgSrc, audioSrc }) => {
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
            <button onClick={onStartGame} type="button" className="btn">
              Start game
            </button>
          ) : (
            ''
          )}
          {isStartGame ? (
            <button onClick={onRepeatWord} type="button" className="btn">
              Repeat word
            </button>
          ) : (
            ''
          )}
        </>
      )}
    </div>
  );
}

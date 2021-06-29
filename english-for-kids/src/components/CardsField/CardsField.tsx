import React, { useState } from 'react';
import { CardInfo } from '../../models/CardInfo';
import Card from '../Card/Card';

import './CardsField.scss';

type CardsFieldProps = {
  typeCards: string;
};

export default function CardsField({ typeCards }: CardsFieldProps) {
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
  ]);

  const playAudio = (src: string) => {
    const audioEl = new Audio();
    audioEl.src = src;
    audioEl.currentTime = 0;
    audioEl.play();
  };

  // const selectCategory = () => {
  //   const [name, cards] = cardsData.filter((collection) => collection.category === typeCards);
  //   return cards;
  // };

  return (
    <div className="cards-field">
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
              key={word + translation}
            />
          );
        })}
    </div>
  );
}

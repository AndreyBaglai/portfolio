import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navigation from './components/Navigation/Navigation';
import { setBaseStatistics } from './services/localStorage';

const App = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isGameMode, setIsGameMode] = useState(false);

  const baseStatistics = [
    {
      word: 'cry',
      category: 'action-a',
      translation: 'плакать',
      imgSrc: './images/cards/action-a/cry.jpg',
      audioSrc: './audio/cards/action-a/cry.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'dance',
      category: 'action-a',
      translation: 'танцевать',
      imgSrc: './images/cards/action-a/dance.jpg',
      audioSrc: './audio/cards/action-a/dance.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'dive',
      category: 'action-a',
      translation: 'нырять',
      imgSrc: './images/cards/action-a/dive.jpg',
      audioSrc: './audio/cards/action-a/dive.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'draw',
      category: 'action-a',
      translation: 'рисовать',
      imgSrc: './images/cards/action-a/draw.jpg',
      audioSrc: './audio/cards/action-a/draw.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'fish',
      category: 'action-a',
      translation: 'ловить рыбу',
      imgSrc: './images/cards/action-a/fish.jpg',
      audioSrc: './audio/cards/action-a/fish.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'fly',
      category: 'action-a',
      translation: 'летать',
      imgSrc: './images/cards/action-a/fly.jpg',
      audioSrc: './audio/cards/action-a/fly.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'hug',
      category: 'action-a',
      translation: 'обнимать',
      imgSrc: './images/cards/action-a/hug.jpg',
      audioSrc: './audio/cards/action-a/hug.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'jump',
      category: 'action-a',
      translation: 'прыгать',
      imgSrc: './images/cards/action-a/jump.jpg',
      audioSrc: './audio/cards/action-a/jump.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },

    {
      word: 'open',
      category: 'action-b',
      translation: 'открывать',
      imgSrc: './images/cards/action-b/open.jpg',
      audioSrc: './audio/cards/action-b/open.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'play',
      category: 'action-b',
      translation: 'играть',
      imgSrc: './images/cards/action-b/play.jpg',
      audioSrc: './audio/cards/action-b/play.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'point',
      category: 'action-b',
      translation: 'указывать',
      imgSrc: './images/cards/action-b/point.jpg',
      audioSrc: './audio/cards/action-b/point.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'ride',
      category: 'action-b',
      translation: 'ездить',
      imgSrc: './images/cards/action-b/ride.jpg',
      audioSrc: './audio/cards/action-b/ride.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'run',
      category: 'action-b',
      translation: 'бегать',
      imgSrc: './images/cards/action-b/run.jpg',
      audioSrc: './audio/cards/action-b/run.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'sing',
      category: 'action-b',
      translation: 'петь',
      imgSrc: './images/cards/action-b/sing.jpg',
      audioSrc: './audio/cards/action-b/sing.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'skip',
      category: 'action-b',
      translation: 'пропускать, прыгать',
      imgSrc: './images/cards/action-b/skip.jpg',
      audioSrc: './audio/cards/action-b/skip.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'swim',
      category: 'action-b',
      translation: 'плавать',
      imgSrc: './images/cards/action-b/swim.jpg',
      audioSrc: './audio/cards/action-b/swim.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },

    {
      word: 'cat',
      category: 'animal-a',
      translation: 'кот',
      imgSrc: './images/cards/animal-a/cat.jpg',
      audioSrc: './audio/cards/animal-a/cat.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'chick',
      category: 'animal-a',
      translation: 'цыплёнок',
      imgSrc: './images/cards/animal-a/chick.jpg',
      audioSrc: './audio/cards/animal-a/chick.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'chicken',
      category: 'animal-a',
      translation: 'курица',
      imgSrc: './images/cards/animal-a/chicken.jpg',
      audioSrc: './audio/cards/animal-a/chicken.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'dog',
      category: 'animal-a',
      translation: 'собака',
      imgSrc: './images/cards/animal-a/dog.jpg',
      audioSrc: './audio/cards/animal-a/dog.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'horse',
      category: 'animal-a',
      translation: 'лошадь',
      imgSrc: './images/cards/animal-a/horse.jpg',
      audioSrc: './audio/cards/animal-a/horse.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'pig',
      category: 'animal-a',
      translation: 'свинья',
      imgSrc: './images/cards/animal-a/pig.jpg',
      audioSrc: './audio/cards/animal-a/pig.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'rabbit',
      category: 'animal-a',
      translation: 'кролик',
      imgSrc: './images/cards/animal-a/rabbit.jpg',
      audioSrc: './audio/cards/animal-a/rabbit.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'sheep',
      category: 'animal-a',
      translation: 'овца',
      imgSrc: './images/cards/animal-a/sheep.jpg',
      audioSrc: './audio/cards/animal-a/sheep.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },

    {
      word: 'bird',
      category: 'animal-b',
      translation: 'птица',
      imgSrc: './images/cards/animal-b/bird.jpg',
      audioSrc: './audio/cards/animal-b/bird.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'fish',
      category: 'animal-b',
      translation: 'рыба',
      imgSrc: './images/cards/animal-b/fish1.jpg',
      audioSrc: './audio/cards/animal-b/fish.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'frog',
      category: 'animal-b',
      translation: 'жаба',
      imgSrc: './images/cards/animal-b/frog.jpg',
      audioSrc: './audio/cards/animal-b/frog.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'giraffe',
      category: 'animal-b',
      translation: 'жирафа',
      imgSrc: './images/cards/animal-b/giraffe.jpg',
      audioSrc: './audio/cards/animal-b/giraffe.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'lion',
      category: 'animal-b',
      translation: 'лев',
      imgSrc: './images/cards/animal-b/lion.jpg',
      audioSrc: './audio/cards/animal-b/lion.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'mouse',
      category: 'animal-b',
      translation: 'мышь',
      imgSrc: './images/cards/animal-b/mouse.jpg',
      audioSrc: './audio/cards/animal-b/mouse.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'turtle',
      category: 'animal-b',
      translation: 'черепаха',
      imgSrc: './images/cards/animal-b/turtle.jpg',
      audioSrc: './audio/cards/animal-b/turtle.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'dolphin',
      category: 'animal-b',
      translation: 'дельфин',
      imgSrc: './images/cards/animal-b/dolphin.jpg',
      audioSrc: './audio/cards/animal-b/dolphin.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },

    {
      word: 'skirt',
      category: 'clothes',
      translation: 'юбка',
      imgSrc: './images/cards/clothes/skirt.jpg',
      audioSrc: './audio/cards/clothes/skirt.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'pants',
      category: 'clothes',
      translation: 'брюки',
      imgSrc: './images/cards/clothes/pants.jpg',
      audioSrc: './audio/cards/clothes/pants.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'blouse',
      category: 'clothes',
      translation: 'блузка',
      imgSrc: './images/cards/clothes/blouse.jpg',
      audioSrc: './audio/cards/clothes/blouse.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'dress',
      category: 'clothes',
      translation: 'платье',
      imgSrc: './images/cards/clothes/dress.jpg',
      audioSrc: './audio/cards/clothes/dress.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'boot',
      category: 'clothes',
      translation: 'ботинок',
      imgSrc: './images/cards/clothes/boot.jpg',
      audioSrc: './audio/cards/clothes/boot.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'shirt',
      category: 'clothes',
      translation: 'рубашка',
      imgSrc: './images/cards/clothes/shirt.jpg',
      audioSrc: './audio/cards/clothes/shirt.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'coat',
      category: 'clothes',
      translation: 'пальто',
      imgSrc: './images/cards/clothes/coat.jpg',
      audioSrc: './audio/cards/clothes/coat.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'shoe',
      category: 'clothes',
      translation: 'туфли',
      imgSrc: './images/cards/clothes/shoe.jpg',
      audioSrc: './audio/cards/clothes/shoe.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },

    {
      word: 'sad',
      category: 'emotions',
      translation: 'грустный',
      imgSrc: './images/cards/emotions/sad.jpg',
      audioSrc: './audio/cards/emotions/sad.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'angry',
      category: 'emotions',
      translation: 'сердитый',
      imgSrc: './images/cards/emotions/angry.jpg',
      audioSrc: './audio/cards/emotions/angry.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'happy',
      category: 'emotions',
      translation: 'счастливый',
      imgSrc: './images/cards/emotions/happy.jpg',
      audioSrc: './audio/cards/emotions/happy.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'tired',
      category: 'emotions',
      translation: 'уставший',
      imgSrc: './images/cards/emotions/tired.jpg',
      audioSrc: './audio/cards/emotions/tired.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'surprised',
      category: 'emotions',
      translation: 'удивлённый',
      imgSrc: './images/cards/emotions/surprised.jpg',
      audioSrc: './audio/cards/emotions/surprised.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'scared',
      category: 'emotions',
      translation: 'испуганный',
      imgSrc: './images/cards/emotions/scared.jpg',
      audioSrc: './audio/cards/emotions/scared.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'smile',
      category: 'emotions',
      translation: 'улыбка',
      imgSrc: './images/cards/emotions/smile.jpg',
      audioSrc: './audio/cards/emotions/smile.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'laugh',
      category: 'emotions',
      translation: 'смех',
      imgSrc: './images/cards/emotions/laugh.jpg',
      audioSrc: './audio/cards/emotions/laugh.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },

    {
      word: 'acacia',
      category: 'trees',
      translation: 'акация',
      imgSrc: './images/cards/trees/acacia.jpg',
      audioSrc: './audio/cards/trees/acacia.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'ash',
      category: 'trees',
      translation: 'ясень',
      imgSrc: './images/cards/trees/ash.jpg',
      audioSrc: './audio/cards/trees/ash.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'birch',
      category: 'trees',
      translation: 'берёза',
      imgSrc: './images/cards/trees/birch.jpg',
      audioSrc: './audio/cards/trees/birch.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'oak',
      category: 'trees',
      translation: 'дуб',
      imgSrc: './images/cards/trees/oak.jpg',
      audioSrc: './audio/cards/trees/oak.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'palm',
      category: 'trees',
      translation: 'пальма',
      imgSrc: './images/cards/trees/palm.jpg',
      audioSrc: './audio/cards/trees/palm.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'pine',
      category: 'trees',
      translation: 'сосна',
      imgSrc: './images/cards/trees/pine.jpg',
      audioSrc: './audio/cards/trees/pine.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'spruce',
      category: 'trees',
      translation: 'ель',
      imgSrc: './images/cards/trees/spruce.jpg',
      audioSrc: './audio/cards/trees/spruce.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'willow',
      category: 'trees',
      translation: 'ива',
      imgSrc: './images/cards/trees/willow.jpg',
      audioSrc: './audio/cards/trees/willow.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },

    {
      word: 'baseball',
      category: 'sport',
      translation: 'бейсбол',
      imgSrc: './images/cards/sport/baseball.jpg',
      audioSrc: './audio/cards/sport/baseball.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'basketball',
      category: 'sport',
      translation: 'баскетбол',
      imgSrc: './images/cards/sport/basketball.jpg',
      audioSrc: './audio/cards/sport/basketball.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'chess',
      category: 'sport',
      translation: 'шахматы',
      imgSrc: './images/cards/sport/chess.jpg',
      audioSrc: './audio/cards/sport/chess.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'cricket',
      category: 'sport',
      translation: 'крикет',
      imgSrc: './images/cards/sport/cricket.jpg',
      audioSrc: './audio/cards/sport/cricket.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'football',
      category: 'sport',
      translation: 'футбол',
      imgSrc: './images/cards/sport/football.jpg',
      audioSrc: './audio/cards/sport/football.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'golf',
      category: 'sport',
      translation: 'гольф',
      imgSrc: './images/cards/sport/golf.jpg',
      audioSrc: './audio/cards/sport/golf.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'karate',
      category: 'sport',
      translation: 'каратэ',
      imgSrc: './images/cards/sport/karate.jpg',
      audioSrc: './audio/cards/sport/karate.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
    {
      word: 'tennis',
      category: 'sport',
      translation: 'большой теннис',
      imgSrc: './images/cards/sport/tennis.jpg',
      audioSrc: './audio/cards/sport/tennis.mp3',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
  ];

  useEffect(() => {
    setBaseStatistics(baseStatistics);
  });

  const onToggleMenu = (e: React.MouseEvent<Element>) => {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains('open-menu-icon') ||
      target.closest('.nav-link') ||
      target.closest('.close-menu-icon') ||
      (!target.closest('.nav-wrapper') && isOpenMenu)
    ) {
      setIsOpenMenu(!isOpenMenu);
    }
  };

  const onToggleGameMode = () => {
    setIsGameMode(!isGameMode);
  };

  return (
    <Router>
      <div
        className="App"
        onClick={(e: React.MouseEvent<Element>) => onToggleMenu(e)}
        aria-hidden="true"
      >
        <Header onToggleMenu={onToggleMenu} onToggleGameMode={onToggleGameMode} />
        <Navigation isOpen={isOpenMenu} onToggleMenu={onToggleMenu} />
        <Main isGameMode={isGameMode} />
      </div>
    </Router>
  );
};

export default App;

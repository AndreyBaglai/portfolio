import { LocalStorageItem } from '../models/localStorageItem';

export const playAudio = (src: string): void => {
  const audioEl = new Audio();
  audioEl.src = src;
  audioEl.currentTime = 0;
  audioEl.play().catch((error) => {
    return error;
  });
};

export const shuffleArray = (arr: string[]): string[] => {
  return arr.sort((a, b) => {
    return Math.random() - 0.5;
  });
};

export const parseSrc = (str: string): string => {
  const tempArr = str.split('/');
  const [word] = tempArr[tempArr.length - 1].split('.');
  return word;
};

export const countWrongPercentWord = (card: LocalStorageItem): number => {
  return Number(((card.wrong / (card.correct + card.wrong)) * 100).toFixed(2));
};

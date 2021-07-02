import { LocalStorageItem } from '../models/localStorageItem';

export const setStatisticsToLocalStorage = (data: LocalStorageItem[]) => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem('statistics', jsonData);
};

export const getStatisticsFromLocalStorage = (): LocalStorageItem[] => {
  const data = localStorage.getItem('statistics');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

export const getItemFromLocalStorage = (word: string): LocalStorageItem => {
  const jsonData = localStorage.getItem('statistics');
  let item = [];

  if (jsonData) {
    const data = JSON.parse(jsonData);
    item = data.filter((statsItem: LocalStorageItem) => statsItem.word === word);
  }

  return item[0];
};

export const setItemToLocalStorage = (item: LocalStorageItem) => {
  const jsonData = localStorage.getItem('statistics');
  const card = { ...item };

  if (jsonData) {
    let data = JSON.parse(jsonData);
    const updateDate = data.filter((el: LocalStorageItem) => el.word !== card.word);
    data = [card, ...updateDate];
    setStatisticsToLocalStorage(data);
  }
};

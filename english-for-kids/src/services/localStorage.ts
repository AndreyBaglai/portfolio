import { LocalStorageItem } from '../models/localStorageItem';

export const setBaseStatistics = (data: LocalStorageItem[]) => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem('statistics', jsonData);
};

export const getStatistics = (): LocalStorageItem[] => {
  const data = localStorage.getItem('statistics');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import { CardModel } from '../../models/card-model';
import { LocalStorageItem } from '../../models/localStorageItem';
import {
  getStatisticsFromLocalStorage,
  setStatisticsToLocalStorage,
} from '../../services/localStorage';

import { INIT_STATISTICS_STATE, MAX_CARDS_ON_PAGE } from '../../variables/variables';

import './Statistics.scss';

type StatisticsProps = {
  baseStatistics: LocalStorageItem[];
  onSetRepeatWords: (cards: CardModel[]) => void;
};

export default function Statistics({
  baseStatistics,
  onSetRepeatWords,
}: StatisticsProps): JSX.Element {
  const [stats, setStats] = useState<LocalStorageItem[]>(INIT_STATISTICS_STATE);
  const [isASC, setIsASC] = useState(false);

  useEffect(() => {
    setStats([...getStatisticsFromLocalStorage()]);
  }, []);

  const onResetStatistics = () => {
    setStatisticsToLocalStorage(baseStatistics);
    setStats(baseStatistics);
  };

  const sortedBy = (statsItems: LocalStorageItem[], field: string) => {
    let sortedStats: LocalStorageItem[] = [];

    if (field === 'word' || field === 'category' || field === 'translation') {
      sortedStats = statsItems.sort((a: LocalStorageItem, b: LocalStorageItem) =>
        a[field].localeCompare(b[field])
      );
      sortedStats = isASC ? sortedStats : sortedStats.reverse();
    } else if (
      field === 'correct' ||
      field === 'wrong' ||
      field === 'clicks' ||
      field === 'percent'
    ) {
      sortedStats = statsItems.sort(
        (a: LocalStorageItem, b: LocalStorageItem) => a[field] - b[field]
      );
      sortedStats = isASC ? sortedStats : sortedStats.reverse();
    }

    setStats(sortedStats);
  };

  const onSort = (e: React.MouseEvent<Element>) => {
    setIsASC(!isASC);

    const target = e.target as HTMLElement;
    const sortBy = target.dataset.sort;
    const unSortedStats = [...getStatisticsFromLocalStorage()];

    if (sortBy) {
      sortedBy(unSortedStats, sortBy);
    }
  };

  const onRepeatWords = (e: React.MouseEvent<Element>) => {
    const unSortedStats = [...getStatisticsFromLocalStorage()];

    const repeatWords = unSortedStats
      .sort((a: LocalStorageItem, b: LocalStorageItem) => b.wrong - a.wrong)
      .filter((item, i) => item.percent > 0 && i < MAX_CARDS_ON_PAGE)
      .reduce((acc: CardModel[], next) => {
        const card: CardModel = {
          word: next.word,
          translation: next.translation,
          imgSrc: next.imgSrc,
          audioSrc: next.audioSrc,
        };

        acc.push(card);
        return acc;
      }, []);

    onSetRepeatWords(repeatWords);
  };

  return (
    <div className="statistics-wrapper">
      <div className="buttons-wrapper">
        <Link to="/repeat-words" className="repeat-link">
          <Button text="Repeat difficult words" onClickHandler={onRepeatWords} />
        </Link>
        <Button text="Reset statistics" onClickHandler={onResetStatistics} />
      </div>

      <table>
        <caption>Statistics</caption>
        <thead onClick={onSort} aria-hidden="true">
          <tr>
            <th data-sort="word" scope="col">
              Word
            </th>
            <th data-sort="translation" scope="col">
              Translation
            </th>
            <th data-sort="category" scope="col">
              Category
            </th>
            <th data-sort="clicks" scope="col">
              Clicks
            </th>
            <th data-sort="correct" scope="col">
              Correct
            </th>
            <th data-sort="wrong" scope="col">
              Wrong
            </th>
            <th data-sort="percent" scope="col">
              % Wrong
            </th>
          </tr>
        </thead>
        <tbody>
          {stats.map(({ word, translation, category, clicks, correct, wrong, percent }) => {
            return (
              <tr key={`${word}${translation}`}>
                <td data-label="Word">{word}</td>
                <td data-label="Translation">{translation}</td>
                <td data-label="Category">{category}</td>
                <td data-label="Clicks">{clicks}</td>
                <td data-label="Correct">{correct}</td>
                <td data-label="Wrong">{wrong}</td>
                <td data-label="% Wrong">{percent}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

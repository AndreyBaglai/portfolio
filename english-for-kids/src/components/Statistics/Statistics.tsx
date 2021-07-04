import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardModel } from '../../models/card-model';
import { LocalStorageItem } from '../../models/localStorageItem';
import {
  getStatisticsFromLocalStorage,
  setStatisticsToLocalStorage,
} from '../../services/localStorage';
import Button from '../Button/Button';

import './Statistics.scss';

type StatisticsProps = {
  baseStatistics: LocalStorageItem[];
  onSetRepeatWords: (cards: CardModel[]) => void;
};

export default function Statistics({
  baseStatistics,
  onSetRepeatWords,
}: StatisticsProps): JSX.Element {
  const initStats = [
    {
      word: '',
      category: '',
      translation: '',
      imgSrc: '',
      audioSrc: '',
      clicks: 0,
      correct: 0,
      wrong: 0,
      percent: 0,
    },
  ];

  const [stats, setStats] = useState<LocalStorageItem[]>(initStats);
  const [isASC, setIsASC] = useState(false);

  useEffect(() => {
    setStats([...getStatisticsFromLocalStorage()]);
  }, []);

  const onResetStatistics = () => {
    setStatisticsToLocalStorage(baseStatistics);
    setStats(baseStatistics);
  };

  const onSort = (e: React.MouseEvent<Element>) => {
    setIsASC(!isASC);
    const target = e.target as HTMLElement;
    const sortBy = target.dataset.sort;

    const unSortedStats = [...getStatisticsFromLocalStorage()];

    if (sortBy) {
      switch (sortBy) {
        case 'clicks': {
          let sortedStats = unSortedStats.sort(
            (a: LocalStorageItem, b: LocalStorageItem) => a.clicks - b.clicks
          );
          sortedStats = isASC ? sortedStats : sortedStats.reverse();
          setStats(sortedStats);
          break;
        }
        case 'wrong': {
          let sortedStats = unSortedStats.sort(
            (a: LocalStorageItem, b: LocalStorageItem) => a.wrong - b.wrong
          );
          sortedStats = isASC ? sortedStats : sortedStats.reverse();
          setStats(sortedStats);
          break;
        }
        case 'percent': {
          let sortedStats = unSortedStats.sort(
            (a: LocalStorageItem, b: LocalStorageItem) => a.percent - b.percent
          );
          sortedStats = isASC ? sortedStats : sortedStats.reverse();
          setStats(sortedStats);
          break;
        }
        case 'correct': {
          let sortedStats = unSortedStats.sort(
            (a: LocalStorageItem, b: LocalStorageItem) => a.correct - b.correct
          );
          sortedStats = isASC ? sortedStats : sortedStats.reverse();
          setStats(sortedStats);
          break;
        }
        case 'word': {
          let sortedStats = unSortedStats.sort((a: LocalStorageItem, b: LocalStorageItem) =>
            a.word.localeCompare(b.word)
          );
          sortedStats = isASC ? sortedStats : sortedStats.reverse();
          setStats(sortedStats);
          break;
        }
        case 'translation': {
          let sortedStats = unSortedStats.sort((a: LocalStorageItem, b: LocalStorageItem) =>
            a.translation.localeCompare(b.translation)
          );
          sortedStats = isASC ? sortedStats : sortedStats.reverse();
          setStats(sortedStats);
          break;
        }
        case 'category': {
          let sortedStats = unSortedStats.sort((a: LocalStorageItem, b: LocalStorageItem) =>
            a.category.localeCompare(b.category)
          );
          sortedStats = isASC ? sortedStats : sortedStats.reverse();
          setStats(sortedStats);
          break;
        }
        default:
          break;
      }
    }
  };

  const onRepeatWords = (e: React.MouseEvent<Element>) => {
    const unSortedStats = [...getStatisticsFromLocalStorage()];

    const repeatWords = unSortedStats
      .sort((a: LocalStorageItem, b: LocalStorageItem) => b.wrong - a.wrong)
      .filter((item) => item.percent > 0)
      .filter((item, i) => i < 8)
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

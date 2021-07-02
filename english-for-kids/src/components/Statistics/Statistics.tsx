import React, { useEffect, useState } from 'react';
import { LocalStorageItem } from '../../models/localStorageItem';
import { getStatisticsFromLocalStorage } from '../../services/localStorage';

import './Statistics.scss';

export default function Statistics() {
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

  useEffect(() => {
    setStats([...getStatisticsFromLocalStorage()]);
  }, []);

  return (
    <div className="statistics-wrapper">
      <div className="buttons-wrapper">
        <button type="button" className="btn">
          Repeat difficult words
        </button>
        <button type="button" className="btn">
          Reset
        </button>
      </div>

      <table>
        <caption>Statistics</caption>
        <thead>
          <tr>
            <th scope="col">Word</th>
            <th scope="col">Translate</th>
            <th scope="col">Category</th>
            <th scope="col">Clicks</th>
            <th scope="col">Correct</th>
            <th scope="col">Wrong</th>
            <th scope="col">% Wrong</th>
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

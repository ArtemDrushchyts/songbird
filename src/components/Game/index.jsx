import React from 'react';
import './index.scss';
import Answers from '../Answers';
import Description from '../Description';

const Game = () => (
  <div className="game-content">
    <Answers />
    <Description />
  </div>
);

export default Game;

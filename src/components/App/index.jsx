import React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import Header from '../Header';
import Question from '../Question';
import Game from '../Game';
import Next from '../Next';
import Gameover from '../Gameover';

const App = () => {
  const isGameEnding = useSelector((state) => state.app.isGameEnding);

  return (
    <div className="app">
      <Header />
      {!isGameEnding ? (
        <>
          <Question />
          <Game />
          <Next />
        </>
      ) : <Gameover />}
    </div>
  );
};
export default App;

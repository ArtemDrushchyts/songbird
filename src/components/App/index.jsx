import React from 'react';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../containers/App/actions';
import Header from '../Header';
import Question from '../Question';
import Game from '../Game';
import Next from '../Next';

const App = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.app.data);
  console.log(game);

  return (
    <div className="app">
      <Header />
      <Question />
      <Game />
      <Next />
      {/* hello
      {' '}
      {game}
      <button onClick={() => dispatch(update(3))}>Click</button> */}
    </div>
  );
};
export default App;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetGame } from '../../containers/App/actions';
import './index.scss';

const Gameover = () => {
  const dispatch = useDispatch();
  const gameScore = useSelector((state) => state.app.gameScore);

  return (
    <div className="game-over">
      <h1 className="game-over__title">Поздравляем!</h1>
      <p className="game-over__description">
        Вы прошли викторину и набрали
        {gameScore}
        {' '}
        из 30 возможных баллов
      </p>
      <button type="button" className="game-over__btn" onClick={() => dispatch(resetGame())}>Попробовать еще раз!</button>
    </div>
  );
};

export default Gameover;

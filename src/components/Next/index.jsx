import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  nextRound, rightAnswer, updateDataRound, gameOver, updateMistakeRound,
} from '../../containers/App/actions';
import './index.scss';

const Next = () => {
  const dispatch = useDispatch();
  const isRightAnswer = useSelector((state) => state.app.isRightAnswer);
  const round = useSelector((state) => state.app.round);

  const nextLevel = () => {
    if (round < 5) {
      dispatch(nextRound());
      dispatch(updateDataRound(round));
      dispatch(rightAnswer(false));
      dispatch(updateMistakeRound());
    } else {
      dispatch(gameOver(true));
    }
  };

  return (
    <button
      type="button"
      className={isRightAnswer ? 'next-level' : 'next-level disabled'}
      onClick={isRightAnswer ? () => nextLevel() : null}
    >
      Next level
    </button>
  );
};

export default Next;

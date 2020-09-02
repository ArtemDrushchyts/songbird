import {
  ACTIVE_ANSWER, CORRECT_ANSWER, MISTAKE_ANSWER, RIGHT_ANSWER,
  NEXT_ROUND, UPDATE_DATA_ROUND, GAME_OVER, RESET_GAME, ADD_MISTAKE,
  UPDATE_SCORE, UPDATE_MITAKE_ROUND,
} from './constans';

export const updateActiveAnswer = (answer) => ({
  type: ACTIVE_ANSWER,
  payload: answer,
});

export const correctAnswer = (answer) => ({
  type: CORRECT_ANSWER,
  payload: answer,
});

export const mistakeAnswer = (answer) => ({
  type: MISTAKE_ANSWER,
  payload: answer,
});

export const rightAnswer = (elem) => ({
  type: RIGHT_ANSWER,
  payload: elem,
});

export const nextRound = () => ({
  type: NEXT_ROUND,
});

export const updateDataRound = (data) => ({
  type: UPDATE_DATA_ROUND,
  payload: data,
});

export const gameOver = (boolean) => ({
  type: GAME_OVER,
  payload: boolean,
});

export const resetGame = () => ({
  type: RESET_GAME,
});

export const mistakeAdd = () => ({
  type: ADD_MISTAKE,
});

export const updateScore = (num) => ({
  type: UPDATE_SCORE,
  payload: num,
});

export const updateMistakeRound = () => ({
  type: UPDATE_MITAKE_ROUND,
});

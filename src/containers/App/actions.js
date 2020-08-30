import { ACTIVE_ANSWER } from './constans';

export const updateActiveAnswer = (answer) => ({
  type: ACTIVE_ANSWER,
  payload: answer,
});

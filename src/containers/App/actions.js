import { HELLO } from './constans';

export const update = (num) => ({
  type: HELLO,
  payload: num,
});

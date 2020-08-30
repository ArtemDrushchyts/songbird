import { ACTIVE_ANSWER } from './constans';
import data from '../../assets/data/index';

const initialState = {
  data: [...data],
  round: 0,
  gameScore: 0,
  roundMistakes: 0,
  roundWord: data[0][Math.floor(Math.random() * data.length)],
  activeAnswer: null,
  isRightAnswer: false,
  isGameEnding: false,
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_ANSWER:
      return { ...state, activeAnswer: action.payload };
    default: return state;
  }
};

export default helloReducer;

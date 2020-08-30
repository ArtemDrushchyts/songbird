import {
  ACTIVE_ANSWER, CORRECT_ANSWER, MISTAKE_ANSWER, ADD_MISTAKE,
  RIGHT_ANSWER, NEXT_ROUND, UPDATE_DATA_ROUND, GAME_OVER, RESET_GAME,
  UPDATE_SCORE, UPDATE_MITAKE_ROUND,
} from './constans';
import data from '../../assets/data/index';

const initialState = {
  data: [...data],
  round: 0,
  roundData: [...data[0]],
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
    case CORRECT_ANSWER:
      return {
        ...state,
        roundData: state.roundData.map(
          (el) => ((el.name === action.payload) ? { ...el, win: true } : el),
        ),
      };
    case MISTAKE_ANSWER:
      return {
        ...state,
        roundData: state.roundData.map(
          (el) => ((el.name === action.payload) ? { ...el, mistake: true } : el),
        ),
      };
    case RIGHT_ANSWER:
      return {
        ...state,
        isRightAnswer: action.payload,
      };
    case NEXT_ROUND:
      return { ...state, round: state.round + 1 };
    case UPDATE_DATA_ROUND:
      return {
        ...state,
        roundData: data[state.round],
        roundWord: data[state.round][Math.floor(Math.random() * data.length)],
      };
    case GAME_OVER:
      return { ...state, isGameEnding: action.payload };
    case RESET_GAME:
      return {
        ...state,
        data: [...data],
        round: 0,
        roundData: [...data[0]],
        gameScore: 0,
        roundMistakes: 0,
        roundWord: data[0][Math.floor(Math.random() * data.length)],
        activeAnswer: null,
        isRightAnswer: false,
        isGameEnding: false,
      };
    case ADD_MISTAKE:
      return { ...state, roundMistakes: state.roundMistakes + 1 };
    case UPDATE_SCORE:
      return { ...state, gameScore: state.gameScore + action.payload };
    case UPDATE_MITAKE_ROUND:
      return { ...state, roundMistakes: 0 };
    default: return state;
  }
};

export default helloReducer;

import { HELLO } from './constans';

const initialState = {
  group: 1,
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case HELLO:
      return { ...state, group: action.payload };
    default: return state;
  }
};

export default helloReducer;

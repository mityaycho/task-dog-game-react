const GET_RANDOM_IMAGE_INDEX = 'GET_RANDOM_IMAGE_INDEX';
const SET_COUNT = 'SET_COUNT';
const RESET_COUNTER = 'RESET_COUNTER';


const initialState = {
  randomImageIndex: 4,
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_IMAGE_INDEX:
      return {
        ...state,
        randomImageIndex: Math.floor(Math.random() * 9)
      };
    case SET_COUNT:
      return {
        ...state,
        counter: action.counter + 1
      };
    case RESET_COUNTER:
      return {
        ...state,
        counter: action.counter
      };
    default:
      return state;
  }
};

export default reducer;

export const getRandomImageIndexAC = () => ({type: GET_RANDOM_IMAGE_INDEX});

export const setCounterAC = (counter) => ({type: SET_COUNT, counter});

export const resetCounterAC = (counter) => ({type: RESET_COUNTER, counter});
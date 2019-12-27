const GET_RANDOM_IMAGE_INDEX = 'GET_RANDOM_IMAGE_INDEX';
const SET_COUNT = 'SET_COUNT';

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
        counter: action.counter
      };
    default:
      return state;
  }
};

export default reducer;

export const getRandomImageIndexAC = () => ({type: GET_RANDOM_IMAGE_INDEX});
export const setCounterAC = (counter) => ({type: GET_RANDOM_IMAGE_INDEX, counter});
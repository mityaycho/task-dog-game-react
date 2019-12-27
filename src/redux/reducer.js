const GET_RANDOM_IMAGE_INDEX = 'GET_RANDOM_IMAGE_INDEX';


const initialState = {
  randomImageIndex: 4,
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_IMAGE_INDEX:
      return {
        ...state,
        getRandomImageIndex: Math.floor(Math.random() * 9)
      };
    default:
      return state;
  }
};

export default reducer;

export const getRandomImageIndexAC = () => ({type: GET_RANDOM_IMAGE_INDEX});
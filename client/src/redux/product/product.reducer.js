const INITIAL_STATE = {
  count: 0,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT_COUNT":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;

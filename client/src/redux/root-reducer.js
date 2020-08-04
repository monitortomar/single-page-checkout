import { combineReducers } from "redux";

import productReducre from "./product/product.reducer";
import totalReducer from "./total/total.reducer";

export default combineReducers({
  product: productReducre,
  total: totalReducer,
});

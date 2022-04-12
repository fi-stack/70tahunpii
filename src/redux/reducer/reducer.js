import { combineReducers } from "redux";
import { user } from "./user";
import { provinces, cities, districts, villages } from "./address";

const reducer = combineReducers({
  user,
  provinces,
  cities,
  districts,
  villages,
});

export default reducer;

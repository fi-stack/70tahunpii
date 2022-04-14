import { combineReducers } from "redux";
import { user, userDetail } from "./user";
import { provinces, cities, districts, villages } from "./address";
import { participantsByUserId } from "./participant";

const reducer = combineReducers({
  user,
  userDetail,
  provinces,
  cities,
  districts,
  villages,
  participantsByUserId,
});

export default reducer;

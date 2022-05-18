import { combineReducers } from "redux";
import { user, userDetail } from "./user";
import {
  provinces,
  cities,
  districts,
  villages,
  citiesBySearch,
} from "./address";
import {
  participantDetails,
  participantsByUserId,
  participantDetailsByUserId,
  listParticipantDetailsByType,
} from "./participant";
import { athleteByUserId } from "./athlete";
import { team, listTeamsByType } from "./team";
import {
  leaderboards,
  athleteActivities,
  leaderboardTeams,
} from "./leaderboard";

const reducer = combineReducers({
  user,
  userDetail,
  provinces,
  cities,
  districts,
  villages,
  citiesBySearch,
  participantDetails,
  participantsByUserId,
  participantDetailsByUserId,
  listParticipantDetailsByType,
  athleteByUserId,
  team,
  listTeamsByType,
  leaderboards,
  athleteActivities,
  leaderboardTeams,
});

export default reducer;

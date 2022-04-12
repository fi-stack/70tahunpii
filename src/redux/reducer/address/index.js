const stateProvinces = {
  provinces: [],
};

const stateCities = {
  cities: [],
};

const stateDistricts = {
  districts: [],
};

const stateVillages = {
  villages: [],
};

const provinces = (state = stateProvinces, action) => {
  if (action.type === "GET_PROVINCES") {
    return {
      ...state,
      provinces: action.payload,
    };
  }

  return state;
};

const cities = (state = stateCities, action) => {
  if (action.type === "GET_CITIES") {
    return {
      ...state,
      cities: action.payload,
    };
  }

  return state;
};

const districts = (state = stateDistricts, action) => {
  if (action.type === "GET_DISTRICTS") {
    return {
      ...state,
      districts: action.payload,
    };
  }

  return state;
};

const villages = (state = stateVillages, action) => {
  if (action.type === "GET_VILLAGES") {
    return {
      ...state,
      villages: action.payload,
    };
  }

  return state;
};

export { provinces, cities, districts, villages };

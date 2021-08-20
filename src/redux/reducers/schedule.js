import { scheduleAPI } from "../api";

const initialState = {
  schedule: [],
  date: null,
  loaded: false,
};

export const schedule = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SCHEDULE": {
      return {
        ...state,
        schedule: action.payload.data,
        date: action.payload.date,
      };
    }
    case "RESET_DATE": {
      return {
        ...state,
        date: null,
      };
    }
    case "TOGGLE_LOADED": {
      return {
        ...state,
        loaded: !state.loaded,
      };
    }
    default:
      return state;
  }
};

const setSchedule = (data, date) => ({
  type: "SET_SCHEDULE",
  payload: { data, date },
});

export const resetDate = () => ({
  type: "RESET_DATE",
});

export const toggleLoaded = () => ({
  type: "TOGGLE_LOADED",
});

export const fetchItems = (date) => (dispatch) => {
  scheduleAPI.getSchedule(date).then((resData) => {
    const data = resData.data;
    dispatch(setSchedule(data, date));
    dispatch(toggleLoaded());
  });
};

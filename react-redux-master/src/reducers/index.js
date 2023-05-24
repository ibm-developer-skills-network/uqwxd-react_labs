import { combineReducers } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.inc;

    default:
      return state;
  }
};

const myReducers = combineReducers({ counter });

export default myReducers;

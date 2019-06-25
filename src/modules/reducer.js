import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  latestSelectionDateTime: "",
  currentView: "",
};

const seasonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.SELECT_REG_SEASON: {
      console.log(action);

      let situation = action.payload;
      let newState = _.cloneDeep(state);
      newState.latestSelectionDateTime = situation;
      newState.currentView = "Regular Season";
      return newState;
    }

    case ACTIONS.Types.SELECT_PLAYOFFS: {
      console.log(action);

      let situation = action.payload;
      let newState = _.cloneDeep(state);
      newState.latestSelectionDateTime = situation;
      newState.currentView = "Playoffs";
      return newState;
    }

    default:
      return state;
  }
};

export default seasonReducer;

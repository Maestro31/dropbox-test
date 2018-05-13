import { FETCH_FILES } from '../actions/constants';

const initialState = {
  files: []
};

export default function dropboxReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILES:
      return {
        ...state
      };
    default:
      return state;
  }
  return state;
}

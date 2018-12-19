import {
  ITEMS_FETCHING, ITEMS_FETCHED, ACTIVE_ITEM_UPDATED, FAILED_FETCH,
} from './actionTypes';

const initialState = {
  fetching: false,
  fetched: false,
  failedFetch: false,
  list: [],
  activeItem: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_FETCHING:
      return { ...state, fetching: true };
    case ITEMS_FETCHED:
      return {
        ...state,
        fetched: true,
        fetching: false,
        list: action.payload,
      };
    case ACTIVE_ITEM_UPDATED:
      const active = state.list.find(item => item.id.toString() === action.payload); // eslint-disable-line
      return { ...state, activeItem: { ...active } };
    case FAILED_FETCH:
      return {
        ...state, failedFetch: true, fetching: false,
      };
    default:
      return state;
  }
};

import { ITEMS_FETCHING, ITEMS_FETCHED, ACTIVE_ITEM_UPDATED } from './actionTypes';

const initialState = { fetching: false,
  fetched: false,
  list: [],
  activeItem: {} };

export default (state = initialState, action) => {console.log(action);
  switch (action.type) {
    case ITEMS_FETCHING:
      return { ...state, fetching: true };
    case ITEMS_FETCHED:
      return { ...state, fetched: true, fetching: false, list: action.payload };
    case ACTIVE_ITEM_UPDATED:
      const active = state.list.find(l => l.id === id); // eslint-disable-line
      return { ...state, activeItem: { ...state.activeItem, ...active } };
    default:
      return state;
  }
};

import {
  ITEMS_FETCHING, ITEMS_FETCHED, ACTIVE_ITEM_UPDATED, FAILED_FETCH, ACTIVE_CLEAR
} from './actionTypes';

const startFetchingItems = () => ({ type: ITEMS_FETCHING }),
  itemsFetched = list => ({ type: ITEMS_FETCHED, payload: list }),
  activeChanged = id => ({ type: ACTIVE_ITEM_UPDATED, payload: id }),
  clearActive = () => ({ type: ACTIVE_CLEAR }),
  failedFetch = () => ({ type: FAILED_FETCH });

export {
  startFetchingItems, itemsFetched, activeChanged, failedFetch, clearActive
};

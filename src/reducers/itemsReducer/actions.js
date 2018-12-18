import { ITEMS_FETCHING, ITEMS_FETCHED, ACTIVE_ITEM_UPDATED } from './actionTypes';

const startFetchingItems = () => ({ type: ITEMS_FETCHING }),
  itemsFetched = list => ({ type: ITEMS_FETCHED, payload: list }),
  activeChanged = id => ({ type: ACTIVE_ITEM_UPDATED, payload: id });

export { startFetchingItems, itemsFetched, activeChanged };

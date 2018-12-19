import {
  startFetchingItems, itemsFetched, failedFetch,
} from '../../reducers/itemsReducer/actions';

const mapStateToProps = ({ items }) => ({ items }),

  mapDispatchToProps = dispatch => ({
    startFetchingItems: () => dispatch(startFetchingItems()),
    itemsFetched: list => dispatch(itemsFetched(list)),
    failedFetch: () => dispatch(failedFetch()),
  });

export { mapStateToProps, mapDispatchToProps };

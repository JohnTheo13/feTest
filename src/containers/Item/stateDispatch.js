import {
  activeChanged, startFetchingItems, failedFetch, itemsFetched, clearActive
} from '../../reducers/itemsReducer/actions';

const mapStateToProps = ({ location: { payload: { id } }, items }) => ({ activeId: id, items });

const mapDispatchToProps = dispatch => ({
  activeChanged: id => dispatch(activeChanged(id)),
  failedFetch: () => dispatch(failedFetch()),
  startFetchingItems: () => dispatch(startFetchingItems()),
  itemsFetched: list => dispatch(itemsFetched(list)),
  clearActive: () => dispatch(clearActive())
});

export { mapStateToProps, mapDispatchToProps };

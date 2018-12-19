import { activeChanged, startFetchingItems, failedFetch, itemsFetched } from '../../reducers/itemsReducer/actions';

const mapStateToProps = ({ location: { payload: { id } }, items }) => ({ activeId: id, items });

const mapDispatchToProps = dispatch => ({
  activeChanged: id => dispatch(activeChanged(id)),
  failedFetch: () => dispatch(failedFetch()),
  startFetchingItems: () => dispatch(startFetchingItems()),
  itemsFetched: list => dispatch(itemsFetched(list)),
});

export { mapStateToProps, mapDispatchToProps };

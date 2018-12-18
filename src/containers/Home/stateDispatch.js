import { startFetchingItems, itemsFetched, activeChanged } from '../../reducers/itemsReducer/actions';

const mapStateToProps = ({ items }) => ({ items }),

  mapDispatchToProps = dispatch => ({
    startFetchingItems: () => dispatch(startFetchingItems),
  });

export { mapStateToProps, mapDispatchToProps };

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './stateDispatch';
import api from '../../api';

class Item extends Component {
  async componentDidMount() {
    const {
      activeId,
      activeChanged,
      items,
      failedFetch,
      startFetchingItems,
      itemsFetched,
    } = this.props;
    if (items.list.length === 0) {
      startFetchingItems();
      const list = await api.get('products');
      if (typeof list === 'number') {
        failedFetch();
      } else {
        itemsFetched(list);
        activeChanged(activeId);
      }
    } else {
      activeChanged(activeId);
    }
  }

  render() {
    const { activeItem } = this.props;
    return (
      <div>item</div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);

// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './stateDispatch';
import api from '../../api';
import ListItem from '../../components/ListItem';
import { ItemType } from '../../types';

type HomeType = {
  startFetchingItems: Function,
  itemsFetched: Function,
  failedFetch: Function,
  items: {
    fetching: boolean,
    fetched: boolean,
    failedFetch: boolean,
    list: ItemType[],
  }
}

class Home extends Component<HomeType> {
  async componentDidMount() {
    const {
      startFetchingItems, itemsFetched, failedFetch,
    } = this.props;
    startFetchingItems();
    const list = await api.get('products');
    if (typeof list === 'number') {
      failedFetch();
    } else {
      itemsFetched(list);
    }
  }

  render() {
    const { items: {
      fetching, fetched, failedFetch, list,
    } } = this.props;
    return (
      <div>
        {fetching && <h1>Loading...</h1>}
        {failedFetch && <h2>OUPS..</h2>}
        {fetched && list.length > 0 && <ListItem list={list} />}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

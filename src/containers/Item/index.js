// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './stateDispatch';
import api from '../../api';
import ItemComtainer from './ItemContainer';
import Gallery from '../../components/Gallery';
import Comments from '../../components/Comments';
import { ItemType } from '../../types';

type ComponentType = {
  activeId: number,
  items: {
    activeItem: ItemType,
  },
  failedFetch: Function,
  startFetchingItems: Function,
  itemsFetched: Function }

class Item extends Component<ComponentType> {
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

  componentWillUnmount() {
    // needed for back button 
    this.props.clearActive();
  }

  render() {
    const { items: { activeItem: {
      title, description, specification, images, id,
    } } } = this.props;
    return (
      <ItemComtainer>
        <h2>{title}</h2>
        <div className="gallery">
          {images && images.length > 0 && (
            <Gallery
              images={images.map(image => ({ src: image.original, thumbnail: image.original }))}
            />
          )}
          <div>
            <h4>Specs</h4>
            <p>{specification}</p>
          </div>
        </div>
        <h4>Description</h4>
        <p>{description}</p>
        {id && <Comments id={id} />}
      </ItemComtainer>
    );
  }
}

export default
(connect((mapStateToProps: Function), (mapDispatchToProps: Function)): Function)(Item);

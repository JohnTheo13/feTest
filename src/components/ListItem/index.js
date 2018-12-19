// @flow
import React from 'react';
import Link from 'redux-first-router-link';
import ListContainer from './ListContainer';
import { ItemType } from '../../types';

type ListType = {
  list: ItemType[] }

const ListItem = ({ list }: ListType) => (
  <ListContainer>
    {list.map(item => (
      <div key={item.id}>
        <Link to={`/item/${item.id}`}>{item.title}</Link>
        <span>
          {item.price}
           €
        </span>
        <img src={item.images[0].thumb} alt="thumball" />
      </div>
    ))}
  </ListContainer>
);

export default ListItem;

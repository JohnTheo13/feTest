import React from 'react';
import Link from 'redux-first-router-link'

const style = {
  height: '100px',
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
}

const ItemsList = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item.id} style={style}>
        <Link to={`/item/${item.id}`}>{item.title}</Link>
        <span>{item.price} €</span>
        <img src={item.images[0].thumb} alt="thumball" />
      </li>
    ))}
  </ul>
);

export default ItemsList;

import styled from 'styled-components';

const ItemContainer = styled.div`
  text-align: center;
  .gallery {
    display: flex;
    div:last-child {
      margin: auto;
      flex-basis: 60%;
    }
  }
`;

export default ItemContainer;

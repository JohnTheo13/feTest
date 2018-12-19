import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    > a {
      flex-basis: 40%;
    }
  }
`;

export default ListContainer;

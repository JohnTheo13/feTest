import styled from 'styled-components';

const CommentsContainer = styled.div`
  textarea {
    margin-top: 12px;
  }
  label {
    display: inherit;
  }
  button {
    display: block;
    margin: 10px auto;
    &:disabled {
      opacity: 0.6;
    }
  }
`;

export default CommentsContainer;

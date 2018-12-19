import styled from 'styled-components';

const GalleryContainer = styled.div`
  > div {
     margin-right: -2px;
     overflow: hidden;
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
     align-items: center;
     align-content: stretch;
      border: 1px solid;
     > a {
       -moz-box-sizing: border-box;
       box-sizing: border-box;
       display: block;
       float: left;
       line-height: 0;
       padding-right: 0px;
       padding-bottom: 0px;
       overflow: hidden;
       > img {
         border: 0px;
         height: auto;
         max-width: 140px;
         width: auto;
       }
     }
   }
`;

export default GalleryContainer;

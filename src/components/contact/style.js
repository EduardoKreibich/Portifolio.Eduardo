import styled from "styled-components";

export const StyledContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding-bottom: 40px;
  width: 50%;

    p{
      font-size: 15px;
      font-family: monospace;
      font-weight: 700;
    }


`


export const StyledIcons = styled.img`
  width: 50px;
  margin-left: 10px;
  
   &:hover{
    border: solid 1px transparent;
   }
`;
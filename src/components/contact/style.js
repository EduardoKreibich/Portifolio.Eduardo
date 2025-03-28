import styled from "styled-components";

export const StyledContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  padding-top: 50px;

    p{
      font-size: 15px;
      font-family: monospace;
      font-weight: 700;
    }

    @media (max-width: 880px) {
    flex-direction:column-reverse ;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;

    
  }

`

export const StyledIcons = styled.img`
  width: 50px;
  margin-left: 10px;
  
   &:hover{
    scale: 1.1;
    transition: all.5s;
   }
`;

export const StyledSvg = styled.img`
    width: 35px;
    margin: 15px;
    border-bottom: 2px solid transparent;
    padding: 5px;
    cursor: pointer;

    &:hover{
      border-bottom: 2px solid rgba(211,24,240,1);
      border-radius: 50px;

      
    }

`
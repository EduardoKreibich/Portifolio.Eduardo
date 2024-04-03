import styled from "styled-components";

export const StyledContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding-bottom: 40px;
  padding-top: 40px;
  width: 70%;

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
    scale: 1.1;
    transition: all.5s;
   }
`;

// export const StyledContainer = styled.section`
//     display: flex;
//     flex-direction: row;
//     justify-content:space-around;
//     flex-wrap: wrap;
    
//     width: 100%;
//     padding: 50px 0px 40px 0px;

//     cursor: pointer;
// `

export const StyledSvg = styled.img`
    width: 30px;
    margin: 15px;
    border-bottom: 2px solid transparent;
    padding: 5px;
    cursor: pointer;

    &:hover{
      border-bottom: 2px solid black;
      border-radius: 50px;

      
    }

`
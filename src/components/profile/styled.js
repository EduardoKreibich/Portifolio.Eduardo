import styled from "styled-components";


export const StyledContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  width: 100%;

  @media (max-width: 913px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }


    .name{
      font-size: 50px;
      padding-left: 10px;
      font-family: monospace;
    }

    .bio{
      padding: 20px;
      width: 400px;

      font-family: monospace;
      font-size: 15px;
      font-weight: 600;
    }


`


export const StyledImg = styled.img`
  width: 300px;
  border-radius: 100px;
  
`;
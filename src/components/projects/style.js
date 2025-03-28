import styled from "styled-components";

export const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;

    

    h2{
      font-family: monospace;
      font-size: 30px;
      font-weight: 900;
    }


    .links{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .projects{
        display: flex;
        width: 415px;
        height: max-content;
        flex-direction: column;
        align-items: center;
        padding: 30px;

        p{
            padding: 20px;
            font-family: monospace;
            text-align: center;
        }
    }

    .img-project{
        width: 350px;
        height: 200px;
        border-radius: 10px;
        cursor: pointer;
        
        &:hover{
            scale: 1.05;
            transition: 1000ms;

        }
    }

    .iconsProject{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

export const StyledButtonGithub = styled.img`
    width: 30px;
    margin-left: 20px;
    border-radius: 50%;
    color: transparent;
    background-color: rgb(24, 240, 107);

    &:hover {
        scale:1.2;
        transition: 1000ms;
        border: 1px solid transparent;
        border-radius: 50%;
        -webkit-box-shadow: var(--Webkit-Box-Shadow);
        -moz-box-shadow: var(--Woz-Box-Shadow);
        box-shadow: var(--Box-Shadow);
  }
`
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
        align-items: center;
        justify-content: center;

        width: 100%;
        flex-wrap: wrap;
    }

    .projects{
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 30px;

        p{
            padding: 20px;
            font-family: monospace;
        }
    }

    .iconsProject{
        display: flex;
        align-items: center;
        
    }
`

export const StyledButtonGithub = styled.img`
    width: 30px;
    margin-left: 10px;
`
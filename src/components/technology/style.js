import styled from "styled-components";


export const StyledContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content:center;
    flex-wrap: wrap;
    
    width: 100%;

    cursor: pointer;
`

export const StyledTec = styled.img`
    width: 40px;
    margin: 15px;

    &:hover{
        scale: 1.3;
        transition: 1000ms;
    }
`
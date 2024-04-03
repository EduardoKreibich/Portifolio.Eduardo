import styled from "styled-components";


export const StyledContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content:start;
    flex-wrap: wrap;
    
    width: 100%;
    padding: 50px 0px 40px 0px;

    cursor: pointer;
`

export const StyledTec = styled.img`
    width: 40px;
    margin: 15px;

    &:hover{
        scale: 1.2;
        transition: all.5s;
    }
`
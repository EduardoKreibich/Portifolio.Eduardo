import styled from "styled-components";


export const StyledButtonPrimary = styled.a`
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-size:16px;
    font-weight: 600;
    font-family: monospace;


    padding: 0px 22px;
    width: max-content;
    height: 26px;

    text-decoration: none;


    background: transparent;
    border: 1.2182px solid transparent;
    border-radius: 100px;
    color:rgba(211,24,240,1);

    &:hover {
        color: rgba(211,24,240,1);
        transition: 1000ms;
        border: 1px solid transparent;
        -webkit-box-shadow: var(--Webkit-Box-Shadow);
        -moz-box-shadow: var(--Woz-Box-Shadow);
        box-shadow: var(--Box-Shadow);
        scale:1.03;
  }
`
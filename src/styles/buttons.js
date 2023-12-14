import styled from "styled-components";


export const StyledButtonPrimary = styled.a`
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size:16px;
    font-weight: 600;
    font-family: monospace;


    padding: 0px 22px;
    width: max-content;
    height: 46px;

    text-decoration: none;


    background: white;
    border: 1.2182px solid var(--Color-Grey-1);
    border-radius: 4.06066px;
    color:black;

    &:hover {
        color: black;
        transition: 1000ms;
        border: 1px solid var(--Color-Focus);
        -webkit-box-shadow: 3px 3px 21px 17px rgba(158,200,242,1);
        -moz-box-shadow: 3px 3px 21px 17px rgba(158,200,242,1);
        box-shadow: 3px 3px 21px 17px rgba(158,200,242,1);
  }
`
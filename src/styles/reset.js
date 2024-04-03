import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-family: var(--Font-Primary);
    
    }
    
    #root{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--Color-Grey-4);
    }

    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    a{
        text-decoration: none;
    }

    ul, ol{
        list-style: none;
    }

    input{
        background-color: transparent;
        border: 0;
    }

`;

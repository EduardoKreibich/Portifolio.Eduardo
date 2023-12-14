import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-family: var(--Font-Primary);
    
    }

    body{
        width: 100%;
        background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(198,200,201,1) 47%, rgba(255,255,255,1) 100%);
    }
    
    #root{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
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

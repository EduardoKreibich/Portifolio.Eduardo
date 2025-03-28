import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --Color-Focus: #1864ab;
        --Color-Hover: #a5d8ff;

        --Color-Grey-0: #F8F9FA;
        --Color-Grey-1: #868E96;
        --Color-Grey-2: #343B41;
        --Color-Grey-3: #212529;
        --Color-Grey-4: #343B41;

        --Webkit-Box-Shadow: 0px 0px 63px -7px rgba(211,24,240,1);  
        --Woz-Box-Shadow:  0px 0px 63px -7px rgba(211,24,240,1);
        --Box-Shadow:  0px 0px 63px -7px rgba(211,24,240,1);        

    }

`

export const DarkStyle = createGlobalStyle`
    :root{

        --Color-Hover: #a5d8ff;

        --Color-Grey-0: #F8F9FA;
        --Color-Grey-1: #868E96;
        --Color-Grey-2: #343B41;
        --Color-Grey-3: #212529;
        --Color-Grey-4: #343B41;

        --Webkit-Box-Shadow: 0px 0px 63px -7px rgba(211,24,240,1);  
        --Woz-Box-Shadow:  0px 0px 63px -7px rgba(211,24,240,1);
        --Box-Shadow:  0px 0px 63px -7px rgba(211,24,240,1);  

       
    }

`
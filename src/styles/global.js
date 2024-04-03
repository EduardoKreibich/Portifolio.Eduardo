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

        --Color-Grey-4: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(198,200,201,1) 47%, rgba(255,255,255,1) 100%);
        --Color-Grey-3: #868E96;
        --Color-Grey-2: #343B41;
        --Color-Grey-1: #212529;
        --Color-Grey-0: #121214;

        --Webkit-Box-Shadow:3px 3px 21px 17px rgba(158,200,242,1);  
        --Woz-Box-Shadow: 3px 3px 21px 17px rgba(158,200,242,1);
        --Box-Shadow: 3px 3px 21px 17px rgba(158,200,242,1);

       
    }

`
import htlm from "../../assets/img/html.svg"
import css from "../../assets/img/css-3.svg"
import javaScript from "../../assets/img/javascript.svg"
import react from "../../assets/img/react.svg"
import styled from "../../assets/img/styled-components.svg"
import node from "../../assets/img/node-js.svg"
import express from "../../assets/img/express.svg"
import postgre from "../../assets/img/postgresql.svg"
import python from "../../assets/img/python.svg"
import vite from "../../assets/img/vitejs.svg"
import django from "../../assets/img/django.svg"
import nest from "../../assets/img/nestjs.svg"
import java from "../../assets/img/java.svg"
import sb from "../../assets/img/spring-boot.svg"
// import php from "../../assets/img/php.svg"
// import laravel from "../../assets/img/laravel.svg"
import csharp from "../../assets/img/c-sharp.svg"

import { StyledContainer, StyledTec } from "./style"


export const Technology = () => {
    return(
        <StyledContainer>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="blank"><StyledTec src={htlm} alt=""/></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank"><StyledTec src={css} alt="" /></a>   
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank"><StyledTec src={javaScript} alt="" /></a>
            <a href="https://react.dev/" target="blank"><StyledTec src={react} alt="" /></a>
            <a href="https://styled-components.com/docs" target="blank"><StyledTec src={styled} alt="" /></a>
            <a href="https://vite.dev/" target="blank"><StyledTec src={vite} alt="" /></a>
            <a href="https://nodejs.org/docs/latest/api/" target="blank"><StyledTec src={node} alt="" /></a>
            <a href="https://expressjs.com/" target="blank"><StyledTec src={express} alt="" /></a>
            <a href="https://www.postgresql.org/docs/" target="blank"><StyledTec src={postgre} alt="" /></a>
            <a href="https://docs.python.org/3/" target="blank"><StyledTec src={python} alt="" /></a>
            <a href="https://docs.djangoproject.com/en/5.1/" target="blank"><StyledTec src={django} alt="" /></a>
            <a href="https://docs.nestjs.com/" target="blank"><StyledTec src={nest} alt="" /></a>
            <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="blank"><StyledTec src={csharp} alt="" /></a>
            <a href="https://docs.oracle.com/en/java/" target="blank"><StyledTec src={java} alt="" /></a>
            <a href="https://docs.spring.io/spring-boot/index.html" target="blank"><StyledTec src={sb} alt="" /></a>
            {/* <a href="https://www.php.net/docs.php"><StyledTec src={php} alt="" /></a> */}
            {/* <a href=""><StyledTec src={laravel} alt="" /></a> */}
        </StyledContainer>
    )
}
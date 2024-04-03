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
import php from "../../assets/img/php.svg"
import laravel from "../../assets/img/laravel.svg"
import { StyledContainer, StyledTec } from "./style"


export const Technology = () => {
    return(
        <StyledContainer>
            <StyledTec src={htlm} alt="" />
            <StyledTec src={css} alt="" />
            <StyledTec src={javaScript} alt="" />
            <StyledTec src={react} alt="" />
            <StyledTec src={styled} alt="" />
            <StyledTec src={vite} alt="" />
            <StyledTec src={node} alt="" />
            <StyledTec src={express} alt="" />
            <StyledTec src={postgre} alt="" />
            <StyledTec src={python} alt="" />
            <StyledTec src={django} alt="" />
            <StyledTec src={nest} alt="" />
            <StyledTec src={java} alt="" />
            <StyledTec src={sb} alt="" />
            <StyledTec src={php} alt="" />
            <StyledTec src={laravel} alt="" />
        </StyledContainer>
    )
}
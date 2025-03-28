import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 880px) {
    flex-direction:column-reverse ;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .name{
      margin-top: 35px;
    }

  }

  .name {
    font-size: 40px;
    padding-left: 10px;
    font-family: monospace;
  }

  .bio {
    padding: 20px;
    margin-right: 20px;
    font-family: monospace;
    font-size: 15px;
    font-weight: 600;

      p{
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 500;
        width: 70%;

      }
  }

  .typing {
    font-size: 18px;
    padding-left: 15px;
    margin-right: 20px;
    font-family: monospace;
    width: 26ch;

    border-right: 4px;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 2s steps(25), blinking 0.5s infinite step-end alternate;

    @keyframes typing {
      from {
        width: 0;
      }
    }

    @keyframes blinking {
      50% {
        border-color: transparent;
      }
    }
  }
`;

export const StyledImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 1000px;
  -webkit-box-shadow: 0px 0px 63px -7px rgba(211, 24, 240, 1);
  -moz-box-shadow: 0px 0px 63px -7px rgba(211, 24, 240, 1);
  box-shadow: 0px 0px 63px -7px rgba(211, 24, 240, 1);
`;

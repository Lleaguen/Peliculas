import styled, { keyframes } from "styled-components";


export const AnimBlur = keyframes`
  0%{
    transform: translate(0, -110%);
    opacity: 0;
  }
  100%{
    transform: translate(0, 0%);
    opacity: 1;
  }
`

export const Nav = styled.div`
    width: 100%;
    height: 10vh;
    position: absolute;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    animation: ${AnimBlur} 3s;
    z-index: 99px;
    display: flex;
    justify-content: space-between;
`

export const Title = styled.h1 `
    color: white;
    font-size: 6vh;
    display: flex;
    align-items: center;
`


export const Contact = styled.a`
    background-color: #F5C518;
    height: 5vh;
    text-decoration: none;
    margin: 1.5vh;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 3vh;
    color: #fff;
    font-weight: bolder;
    &:hover{
      background: rgba( 255, 255, 255, 0.25  );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    cursor: none!important;
    }
`
import styled, { keyframes } from "styled-components";


export const rotate = keyframes`
    0%{
        transform: rotate(405deg);
        transition: 1s;
    }
    25%{
        transform: rotate(45deg);
        transition: 10s;
    }
    75%{
        transform: rotate(-315deg);
        transition: 1s;
    }
    100%{
        transform: rotate(45deg);
        transition: 10s;
    }
`


export const Arrow = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: absolute;
   right: 3vh;
   top: 80vh;
`

export const Line = styled.div`
   display: flex;
   justify-content: center;
   width: 7vh;
   height: 7vh;
   border-radius: 10px;
   transform: rotate(45deg);
   background-color: #EA8B42;
   animation: ${rotate} 10s infinite backwards;

`
export const Edge = styled.div`
  font-size: 6vh;
  color: white;
  position: absolute;
`



export const Text1 = styled.p`
    width: 90px;
    color: white;

`
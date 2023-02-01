import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const AnimPurple = keyframes` 
 0% {
    transform: translate(110%,0);
    opacity: 0;
  }
  50% {
    transform: translate(0%,0);
    opacity: 1;
  }
  100% {
    transform: translate(0%,0);
    opacity: 1;
  }

`
export const AnimOrange = keyframes` 
 0% {
    transform: translate(-110%,0);
    opacity: 0;
  }
  50% {
    transform: translate(0%,0);
    opacity: 1;
  }
  100% {
    transform: translate(0%,0);
    opacity: 1;
  }

`

export const AnimBlue = keyframes`
  0%{
    transform: translate(0, 110%);
    opacity: 0;
  }
  100%{
    transform: translate(0, 0%);
    opacity: 1;
  }
`
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

export const Landing = styled.div`
  overflow-x: hidden;
`

export const SeccionBlue = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(37,35,60);
  background: linear-gradient(90deg, rgba(37,35,60,1) 0%, rgba(56,62,164,1) 44%, rgba(0,114,255,1) 100%); 
  animation: ${AnimBlue} 0.4s;
  border-radius: 0% 0% 50% 50%;
  z-index: 3px;
`


export const SeccionOrgange = styled.div`
    border-radius: 0% 100% 72% 28% / 100% 0% 100% 0% ;
    background: linear-gradient( #f26900, #b5560d 20%, #7a3500 100%); 
    width:50%;
    height: 100vh;
    float: left;
    animation: ${AnimOrange} 5s;
    z-index: 30px;
`

export const SeccionPurple = styled.div`
    background: linear-gradient(90deg, #E4059C, #9312A4 20%, #621AA9 100%); 
    width:50%;
    height: 100vh;
    border-radius: 100% 0% 34% 66% / 0% 100% 0% 100% ;
    float: right;
    animation: ${AnimPurple} 5s;
    z-index: 30px;

`


export const LandingContent = styled.div`
    width: 50%;
    position: absolute;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    margin: 20%;
    animation: ${AnimBlur} 5s;
    padding: 10vh;
    
  &:hover{
    background: rgba( 245, 197, 24, 0.75 );
  }
`

export const Enter = styled(Link)`
  text-decoration: none;
  font-size: 10vh;
  font-family: monospace;
  color: white;
  font-weight: bolder;
  cursor: none!important;
`
export const HorizontalLine = styled.div`
  width: 90%;
  margin: 80px auto;
  border: 1px solid #F3B622;
  border-radius: 50%;
`
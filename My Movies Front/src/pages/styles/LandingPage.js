import styled, { keyframes } from 'styled-components';

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
export const Container = styled.div`
    width: 100%;
    position: relative;
`

export const SeccionOrgange = styled.div`
    border-radius: 0% 100% 72% 28% / 100% 0% 100% 0% ;
    background: linear-gradient( #f26900, #b5560d 20%, #7a3500 100%); 
    width:50%;
    height: 100vh;
    float: left;
    animation: ${AnimOrange} 3s;
`

export const SeccionPurple = styled.div`
    background: linear-gradient(90deg, #E4059C, #9312A4 20%, #621AA9 100%); 
    width:50%;
    height: 100vh;
    border-radius: 100% 0% 34% 66% / 0% 100% 0% 100% ;
    float: right;
    animation: ${AnimPurple} 3s;
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
    margin: 25%;
`


export const Title = styled.h1 `
    color: white;
    font-size: 10vh;
`

export const Yellow = styled.span`
    background-color: #F5C518;
    padding: 2vh;
    border-radius: 50px;
    color: #000;
    
`

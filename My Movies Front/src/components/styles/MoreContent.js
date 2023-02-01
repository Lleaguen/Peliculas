import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const VerticalLine = styled.div`
    height: 120vh;
    margin: 2vh;
    border: 1px solid #F3B622;
    border-radius: 50%;
`
export const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

`
export const Article = styled.div`
    width: 100%;
    margin-left:2vh;
    margin-bottom: 77vh;
    background-color: #fff;
    padding: 3vh;

 
`

export const Article2 = styled.div`
    width: 100%;
    margin-top: 80vh;
    background-color: #fff;
    padding: 3vh;
    margin-right: 2vh;
    
   
`
export const Image = styled.img`
    width: 70%;
    transition: 3s;
    &:hover{
        transform: scale(1.1);
        transition: 3s;
    }
`

export const Title = styled.h2`
    color:   #232222 ;
    font-family:  'Alfa Slab One';
    font-size: 3vh;
`
export const SubTitle = styled.p`
    width: 70%;
    margin: 3vh;
    text-align: start;
    color: #a7a6a6 ;
    font-style: oblique;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 2vh;
    margin-left: 10vh;
`

export const Highlight = styled.span`
    color: #EA8B42;
`

export const ContactForm = styled.form`
    width: 90%;
    background-color: #fff;
    margin: auto;
`
export const Cajas = styled.input`
    padding: 10px 40px;
    
`

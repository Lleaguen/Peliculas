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


export const ContentForm = styled.div`
    width: 90%;
    background-color: #fff;
    margin:  100px auto;
    cursor:none;

    &:hover{
        cursor:none;
    }

`   

export const ContactForm = styled.form`
    display: flex;
    justify-content: center;
    margin: auto;
    cursor:none;

    &:hover{
        cursor:none;
    }

`
export const FullName = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    cursor:none;

    &:hover{
        cursor:none;
    }
`
export const First = styled.div`
    display: flex;
    flex-direction: column;
    cursor:none;

    &:hover{
        cursor:none;
    }
`


export const Cajas = styled.input`
    padding: 15px 10px;
    width: 50%;
    margin: 10px auto;
    border-radius: 10px;
    border-style:none;
    font-size: 2vh;
    border: 2px solid #F5C518;
    cursor:none;

    &:focus{
        border:2px solid transparent;
    }
    &:hover{
        cursor:none;
    }
`

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor:none;

    &:hover{
        cursor:none;
    }
    
`
export const Email = styled.input.attrs({ type: 'email' })`
    padding: 15px 10px;
    font-size: 2vh;
    width: 50%;
    margin:10px auto;
    border-radius: 10px;
    border-style:none;
    border: 2px solid #F5C518;
    cursor:none;

    &:focus{
        border:2px solid transparent;
    }
    &:hover{
        cursor:none;
    }
    `
export const MessageContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    cursor:none;

    &:hover{
        cursor:none;
    }
`

export const CajaMensaje = styled.textarea`
    width: 90%;
    margin: auto;
    height: 15vh;
    max-height: 15vh;
    min-height: 15vh;
    max-width: 90%;
    min-width: 90%;
    border-radius: 10px;
    border-style:none;
    border: 2px solid #F5C518;
    padding: 15px 10px;
    font-size: 2vh;
    cursor:none;
    
    &:focus{
        border:2px solid transparent;
    }
    &:hover{
        cursor:none;
    }
`
export const Button = styled.input.attrs({ type: 'submit' })`
    margin: 3vh;
    width: 30%;
    margin: auto;
    padding: 15px 0px;
    letter-spacing: 1vh;
    font-weight: bolder;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:white;
    background-color: #EA8B42;
    border-radius: 10px;
    border: none;
    cursor:none;

    &:hover{
        background-color: #A87FCF;
        cursor:none;
    }

`

export const Label = styled.label`
    font-family:  'Alfa Slab One';
    margin: 1.5vh 0px;
    color: #535363;
    cursor:none;

    &:hover{
        cursor:none;
    }
`
import React, { useRef } from "react";
import { Container, VerticalLine, Section, Article, Article2,  Image, SubTitle, Title, Highlight } from "./styles/MoreContent";
import { ContactForm, Cajas, Email, CajaMensaje, Button, FullName, First, ContentForm, MessageContent, Label } from './styles/MoreContent';
import { HorizontalLine } from "../pages/styles/LandingPage";
import emailjs from '@emailjs/browser';


export default function MoreContent(){
    const Reset = () =>{
        const form = document.getElementById("contact");
        form.addEventListener("submit", (e) => {
            setTimeout(() => { 
                e.preventDefault();
                form.reset();
            }, 4000);
        })
    }
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
            emailjs.sendForm("service_x99077l", "template_f6iqayq", form.current, 
            "9Rgh8y6Xd1nGkj-2S")
            .then(Response => alert(Response))
            .catch(error => alert(error))
    } 
    return(
        <div>
            <Container>
                <Section>
                    <Article id="article" data-aos="fade-right">
                        <Title><Highlight>O</Highlight>n this page you can find <Highlight>countless movies</Highlight></Title>
                        <SubTitle><i>You can see the trailers, add to Favorites, rate them, and you can even add comments so that other users can see them...</i></SubTitle>
                        <Image src="https://d500.epimg.net/cincodias/imagenes/2020/12/31/lifestyle/1609408585_467254_1609408795_noticia_normal.jpg" alt="pelis" />
                    </Article>
                </Section>
                <VerticalLine/>
                <Section>
                    <Article2 id="article2" data-aos="fade-left">
                        <Title><Highlight>Information on Movies</Highlight> of all tastes for everyone</Title>
                        <SubTitle><i>A place where anyone can give their opinion and see which movies are most acclaimed by the public!</i></SubTitle>
                        <Image src="https://i.blogs.es/d8d917/las-mejores-peliculas-de-2018/450_1000.jpg" alt="mas pelis" />
                    </Article2>
                </Section>
            </Container>
            <HorizontalLine/>
            <ContentForm data-aos="fade-up" >
                <ContactForm ref={form} onSubmit={sendEmail} id="contact">
                    <FullName data-aos="fade-up">
                        <First data-aos="fade-up">
                            <Label htmlFor="FirstName" data-aos="fade-up"><Highlight>First</Highlight> Name</Label>
                            <Cajas type="text"  name="user_Fname" placeholder="First Name" data-aos="fade-up"/>
                        </First>
                        <First data-aos="fade-up">    
                            <Label htmlFor="LastName" data-aos="fade-up"><Highlight>Last</Highlight> Name</Label>
                            <Cajas type="text"  name="user_Lname" placeholder="Last Name" />
                        </First>
                        <Label htmlFor="email" data-aos="fade-up"><Highlight>E-</Highlight>mail</Label>
                        <Email type="email" id="email" name="user_email" placeholder="example@mail.com" data-aos="fade-up"/>
                    </FullName>
                    <MessageContent data-aos="fade-up">
                        <Label htmlFor="Message" data-aos="fade-up"><Highlight>Your</Highlight> Message</Label>
                        <CajaMensaje type="text" name="user_message" placeholder="Your message..." data-aos="fade-up"/>
                    <Button type="submit" value="SUBMIT" onClick={() => Reset()} />
                    </MessageContent>
                </ContactForm>
            </ContentForm>
        </div>
    )
}
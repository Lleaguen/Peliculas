import React from "react";
import { Container, VerticalLine, Section, Article, Article2,  Image, SubTitle, Title, Highlight } from "./styles/MoreContent";
import { ContactForm, Cajas } from './styles/MoreContent';
import { HorizontalLine } from "../pages/styles/LandingPage";

export default function MoreContent(){
    
    return(
        <div>
            <Container>
                <Section>
                    <Article id="article" data-aos="fade-right">
                        <Title><Highlight>E</Highlight>n esta pagina podras encontrar <Highlight>innumerables peliculas</Highlight></Title>
                        <SubTitle><i>Podras ver los trailers, añadir a Favoritos, puntuarlos, y hasta podras agregar comentarios para que los demas usuarios puedan verlos...</i></SubTitle>
                        <Image src="https://d500.epimg.net/cincodias/imagenes/2020/12/31/lifestyle/1609408585_467254_1609408795_noticia_normal.jpg" alt="pelis" />
                    </Article>
                </Section>
                <VerticalLine/>
                <Section>
                    <Article2 id="article2" data-aos="fade-left">
                        <Title><Highlight>Informacion de Peliculas</Highlight> de todos los gustos para todo el mundo</Title>
                        <SubTitle><i>Un lugar donde cualquiera pueda dar su opinion y ver que peliculas son mas aclamadas por el publico!</i></SubTitle>
                        <Image src="https://i.blogs.es/d8d917/las-mejores-peliculas-de-2018/450_1000.jpg" alt="mas pelis" />
                    </Article2>
                </Section>
            </Container>
            <HorizontalLine/>
            <ContactForm>
                <label htmlFor="">First Name</label>
                <Cajas type="text"/>
                <label htmlFor="">Last Name</label>
                <Cajas type="text"/>
                <label htmlFor="">E-mail</label>
                <Cajas type="email"/>
                <label htmlFor="">Date of birth</label>
                <Cajas type="date"/>
                <label htmlFor="">Your Message</label>
                <Cajas type="text" />
            </ContactForm>
        </div>
    )
}
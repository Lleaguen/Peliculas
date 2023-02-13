import React from "react";
import { Title, Nav, Contact, Img } from "./styles/Navbar";
import Logo from "./assets/logo.png"

export default function NavBarLanding(){
    return(
        <Nav>
             <Title><Img src={Logo} alt="logo" /> Movies</Title>
             <Contact to="contact" activeClass="active"  spy={true} smooth={true} offset={0} duration={3000}>Contact</Contact>
        </Nav>
    )
}
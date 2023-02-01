import React from "react";
import { Title, Nav, Contact } from "./styles/Navbar";
import Logo from "./Logo";

export default function NavBarLanding(){
    return(
        <Nav>
             <Title><Logo /> Movies</Title>
             <Contact href="mailto:lleaguen99@gmail.com">Contact</Contact>
        </Nav>
    )
}
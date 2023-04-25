import React, { useState } from "react";
import { Header, SeccionPurple, LandingContent,  SeccionOrgange, SeccionBlue, FormAccount, HorizontalLine, Landing, FormLogin } from "../styles/LandingPage";
import { ChangeForm, ContentButton, LabelLogin, FirstLetter, RegisterButton, LoginButton, Box } from "../styles/LandingPage";
import NavBarLanding from "../../components/NavBar";
import IndicateScroll from "../../components/IndicateScroll";
import  MoreContent from '../../components/MoreContentForLanding';
import Footer from "../../components/Footer";

 function LandingPage(){

    const [ login, setLogin ] = useState(true);
    const [ create, setCreate ] = useState(false);

    const handleChangeFormCreate = (e) => {
        e.preventDefault();
        setLogin(false);
        setCreate(true);
    }
    const handleChangeFormLogin = (e) => {
        e.preventDefault();
        setCreate(false);
        setLogin(true);
    }
    return(
        <Landing>
            <Header>
                <SeccionOrgange/>
                <IndicateScroll/>
                <SeccionPurple/>
                <LandingContent>
                    <FormAccount>
                        <ContentButton>
                            <ChangeForm onClick={handleChangeFormLogin}>Login</ChangeForm>
                            <ChangeForm onClick={handleChangeFormCreate}>SingUp</ChangeForm>
                        </ContentButton>   
                        {login && 
                            <FormLogin>
                                <LabelLogin><FirstLetter>E-</FirstLetter>mail</LabelLogin>
                                <Box type="email" placeholder="Your mail..."/>
                                <LabelLogin><FirstLetter>P</FirstLetter>assword</LabelLogin>
                                <Box type="password"  placeholder="Your password..."/>
                                <LoginButton>Login</LoginButton>
                            </FormLogin>
                        }
                        {create && 
                            <FormLogin>
                                <LabelLogin htmlFor=""><FirstLetter>E-</FirstLetter>mail</LabelLogin>
                                <Box type="text" name="" id="" placeholder="Your mail..."/>
                                <LabelLogin htmlFor=""><FirstLetter>P</FirstLetter>assword</LabelLogin>
                                <Box type="text" name="" id="" placeholder="Your password..."/>
                                <LabelLogin htmlFor=""><FirstLetter>Confirm</FirstLetter> password</LabelLogin>
                                <Box type="text" name="" id="" placeholder="Your confirmation..."/>
                                <RegisterButton>Register</RegisterButton>
                            </FormLogin>
                        }
                    </FormAccount>
                </LandingContent>
                <NavBarLanding/>
                <SeccionBlue/>
            </Header>
            <HorizontalLine/>
            <MoreContent/>
            <Footer/>
        </Landing>
    )
}

export default LandingPage;
import React, { useState } from "react";
import { Header, SeccionPurple, LandingContent,  SeccionOrgange, SeccionBlue, FormAccount, HorizontalLine, Landing, FormLogin } from "../styles/LandingPage";
import { ChangeForm, ContentButton, LabelLogin, FirstLetter } from "../styles/LandingPage";
import NavBarLanding from "../../components/NavBar";
import IndicateScroll from "../../components/IndicateScroll";
import  MoreContent from '../../components/MoreContentForLanding';
import Footer from "../../components/Footer";
import { Cajas } from "../../components/styles/MoreContent";

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
                                <LabelLogin><FirstLetter>E</FirstLetter>-mail</LabelLogin>
                                <Cajas type="email" placeholder="Your mail..."/>
                                <LabelLogin><FirstLetter>P</FirstLetter>assword</LabelLogin>
                                <Cajas type="password"  placeholder="Your password..."/>
                            </FormLogin>
                        }
                        {create && 
                            <div>
                                <label htmlFor="">First Name</label>
                                <input type="text" name="" id="" />
                                <label htmlFor="">Last Name</label>
                                <input type="text" name="" id="" />
                                <label htmlFor="">email</label>
                                <input type="text" name="" id="" />
                                <label htmlFor="">password</label>
                                <input type="text" name="" id="" />
                                <label htmlFor="">confirm password</label>
                                <input type="text" name="" id="" />
                            </div>
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
import React from "react";
import {  SeccionPurple, LandingContent,  SeccionOrgange, SeccionBlue, Enter, HorizontalLine, Landing } from "../styles/LandingPage";
import NavBarLanding from "../../components/NavBar";
import IndicateScroll from "../../components/IndicateScroll";
import  MoreContent from '../../components/MoreContentForLanding';

 function LandingPage(){
    return(
        <Landing>
            <div>
                <SeccionOrgange/>
                <IndicateScroll/>
                <SeccionPurple/>
                <LandingContent>
                    <Enter>Enter Now!</Enter>
                </LandingContent>
                <NavBarLanding/>
                <SeccionBlue/>
            </div>
            <HorizontalLine/>
            <MoreContent/>

        </Landing>
    )
}

export default LandingPage;
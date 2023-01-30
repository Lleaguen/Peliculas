import React from "react";
import { Title, SeccionPurple, LandingContent, Yellow, SeccionOrgange } from "../styles/LandingPage";


 function LandingPage(){
    return(
        <div>
            <SeccionOrgange/>
            <SeccionPurple/>
            <LandingContent>
                 <Title>API <Yellow> IMDb</Yellow></Title>
            </LandingContent>
        </div>
    )
}

export default LandingPage;
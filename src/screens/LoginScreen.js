import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import ArrowDropDownIcon from "@material-ui/icons/AddBox";


function LoginScreen() {
  const [ signIn,setSignIn]= useState(false);
return (
 


 <div className="loginScreen">
<div className="loginBackground">
<img className="loginScreen__logo " src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

<button  onClick={()=>setSignIn(true)} className="loginScreen__button">Sign In</button>
<div className="loginScreen__gradient"></div>
</div>









<div className="loginScreen__body">
{signIn ? (
                <SignupScreen />
            ):(   <>
    
                <h1>
                    Unlimited films, TV programs & more
                </h1>
                <h2>
                    Watch anywhere, cancel at any time.
                </h2>
                <h3>
                    Ready to watch ? Enter your email to create or restart your membership.
                </h3>
    <div className='LoginScreen_Input'>
        <form>
            <input className="LoginScreen_Input" type={'email'} placeholder="Email Adress" />
            <button onClick={()=>setSignIn(true)}  className='LoginScreen_GetStarted'> GET STARTED </button>
        </form>
    </div>
    </>
    )}

<div className="moreSignUpScreen">
<div className="moreScreenSection">
<div className="smallLoginScreenSection">
<h1>Enjoy on your TV.</h1>
<h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
</div>
<video autoPlay="" loop=""><source type="video/mp4" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" /></video>
</div>

<div className="moreScreenSection">
<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />

<div className="smallLoginScreenSection">
<h1>Download your shows to watch offline.</h1>
<h2>Save your favorites easily and always have something to watch.</h2>
</div>
</div>
<div className="moreScreenSection">
<div className="smallLoginScreenSection">
<h1>Watch everywhere.</h1>
<h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
</div>

<video autoPlay="" loop="">
<source type="video/mp4" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"/>
</video>
</div>
<div className="faqSection">
<h1>Frequently Asked Questions</h1>
<div className="faqContainer">
<div className="questionActual">
<h2>What is Netflix?</h2>
<ArrowDropDownIcon className="plus" style={{ color: "white", size: 40 }} />

</div>

<div className="questionActual">
<h2>How much does Netflix cost?</h2>
<ArrowDropDownIcon className="plus" style={{ color: "white", size: 40 }} />
</div>

<div className="questionActual">
<h2>Where can I watch?</h2>
<ArrowDropDownIcon className="plus" style={{ color: "white", size: 40 }} />
</div>


<div className="questionActual">
<h2>How do I cancel?</h2>
<ArrowDropDownIcon className="plus" style={{ color: "white", size: 40 }} />
</div>

<div className="questionActual">
<h2>What can I watch on Netflix?</h2>
<ArrowDropDownIcon className="plus" style={{ color: "white", size: 40 }} />
</div>
<div className="questionActual">
<h2>Why am I seeing this language?</h2>
<ArrowDropDownIcon className="plus" style={{ color: "white", size: 40 }} />
</div>
</div>
</div>

<div className="readyToWatchContainer">
<h4>Ready to watch? Enter your email to create or restart your membership.</h4>

<div className='LoginScreen_Input'>
        <form>
            <input className="LoginScreen_Input" type={'email'} placeholder="Email Adress" />
            <button className='LoginScreen_GetStarted'> GET STARTED </button>
        </form>
    </div>
</div>


<div className="loginPageFooter">

<h5>Questions? Contact us.</h5>

<div className="loginScreenFooterRowContainer">
<div className="loginPageFooterLinkRow">
<p>FAQ</p>
<p>Investor Relations</p>
<p>Privacy</p>
<p>Speed Test</p>
</div>

<div className="loginPageFooterLinkRow">
<p>Help Center</p>
<p>Jobs</p>
<p>Cookie Preferences</p>
<p>Legal Notices</p>
</div>

<div className="loginPageFooterLinkRow">
<p>Account</p>
<p>Ways to Watch</p>
<p>Corporate Information</p>
<p>Netflix Originals</p>
</div>

<div className="loginPageFooterLinkRow">
<p>Media Center</p>
<p>Terms of Use</p>
<p>Contact Us</p>
</div>
</div>
<div className="loginPageFooterLinkParagraph">
  <p>
    Created by Devansh Shah ❤
  </p>
</div>


<div className="loginPageLanguageSelection">
<svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z">

</path>
</svg>

<p>English</p>

<svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
<path d="M7 10l5 5 5-5z">
</path>
</svg>

</div>
</div>
</div>
</div>

</div>


);
}

export default LoginScreen;
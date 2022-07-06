import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { FaUserAlt } from "react-icons/fa";
import logo from "../../Images/logo.jpg"

const Header = () => {
    return <ReactNavbar

        navColor1="white"                   //first one will follow this
        navColor2="hsl(219, 48%, 8%)"      // all other will also follow this
        burgerColor="hsl(250, 100%, 75%)"   //for three lines navbar
        burgerColorHover="hsl(250, 100%, 75%)" // on hover over three lines
        logo={logo}
        logoWidth="100px"
        nav2justifyContent="space-around"       // space btwn text1 and text 2
        nav3justifyContent="space-around"       // space btwn text3 and text 4
        link1Text="Home"                        // gives name to texts
        link2Text="About"
        link3Text="Projects"
        link4Text="Contact"
        link1Url="/"                                // changing text in url
        link2Url="/about"
        link3Url="/projects"
        link4Url="/contact"
        link1ColorHover="white"                       //color on hovering over text
        link1Color="HSL(250, 100%, 75%)"                 //color of text normally
        link1Size="1.5rem"                                // sizes increase
        link1Padding="3vmax"
        profileIcon={true}                                    // we have to pass icon with it otherwise will crash
        ProfileIconElement={FaUserAlt}                        //for icon of profile  we can choose  
        profileIconColor="HSL(250, 100%, 75%)"                 // color normally of profile logo
        profileIconColorHover="white"                             //color on hover  
    />;
};

export default Header;
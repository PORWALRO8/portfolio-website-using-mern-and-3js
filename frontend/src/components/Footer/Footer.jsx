import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin,BsInstagram  } from "react-icons/bs";
import "./Footer.css";

const Footer = ()=> {
    return (
        <div className="footer">
        <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Rohit Porwal. I am pursuing my B.Tech in Electronics And Communications 
          from MANIT Bhopal
        </Typography>
        <Link to="/contact" className="footerContactBtn">
        <Typography>Contact Us</Typography>
        </Link>
        </div>
        <div>
        <a href="https://github.com/PORWALRO8" target="black">
          <BsGithub />
        </a>
        <a href="www.linkedin.com/in/rohit-porwal-a762671a1" target="black">
          <BsLinkedin />
        </a>
        <a href="https://instagram.com/meabhisingh/" target="black">
          <BsInstagram />
        </a>
        </div>
        </div>
    );
};

export default Footer;
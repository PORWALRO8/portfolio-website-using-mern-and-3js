import React, { useEffect } from "react";
import "./Home.css"
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../Timeline/Timeline";
import { MouseOutlined } from "@mui/icons-material";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import { Link } from "react-router-dom";

const Home = ({timelines,skills}) => {
  // whole 3.js code is in useffect so that it will no re render again and again
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();       // create scene
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);  // now box is created basically a structure
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });   // it is just like css over html -material
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);   // now passing both moon is created

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshStandardMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointlight = new THREE.PointLight(0xffffff, 1);  // now we will add light to see
    const pointlight2 = new THREE.PointLight(0xffffff, 1);

    pointlight.position.set(8, 5, 5);
    pointlight2.position.set(-8, -5, -5);

    scene.add(moon);   // now moon is added to scene
    scene.add(venus);
    scene.add(pointlight);
    scene.add(pointlight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });
    //now calling recursion so it will render again again 
    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += .01;     // for rotating
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    }

    animate();      // calling function
   return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;
      const skillsBox = document.getElementById("homeskillsBox");
      
      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }});
  }, []);
  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
      <Typography variant="h1">
          <p>R</p>
          <p>O</p>
          <p>H</p>
          <p>I</p>
          <p>T</p>
        </Typography>
        <div className="homeCanvasBox">
         
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">STUDENT</Typography>
          
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url} alt="Face6" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
      </div>
    </div>
    
       
    </div >
  );
};

export default Home;
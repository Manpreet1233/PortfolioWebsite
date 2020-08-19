<template>
    <div id="app">
      <div class="menu">
        <div class="menu-item menu-text">
          <a href="#about-me"> About Me</a>
        </div>
        <div class="menu-item menu-text">
          <a href="#portfolio">Portfolio</a>
        </div>
        <div class="menu-item menu-text">
          <a href="#hobbies">Hobbies</a>
        </div> 
          <div class="menu-item menu-text">
            <a href="#contact">Contact</a>
          </div>
       </div>
      <!-- Favicon -->
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous">
      <div class="wrap-banner" >
        <div class="main-title">
           <h2>Manpreet Rajpal</h2> 
           <br>
           <a class="button"  href="./assets/resume/Rajpal_Manpreet_Resume.pdf">Resume</a>
        </div>
          <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="false"
            hoverMode="grab"
            :clickEffect="false"
            clickMode="push"
          >
          </vue-particles> 
        </div>
        <about-content></about-content>
        <portfolio-content></portfolio-content>
        <router-link to="/ArtGallery" class="gallery-link">Click Here to view my Art Gallery</router-link>
        <hobbies-content></hobbies-content>
        <router-view/>
        <contact-content></contact-content>
        <footer-content></footer-content>
    </div>
 </template>

<script>
//import test from './components/test.vue'
import AboutContent from './components/About.vue'
import PortfolioContent from './components/portfolio.vue'
import HobbiesContent from './components/Hobbies.vue'
import ContactContent from './components/contact.vue'
import FooterContent from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    AboutContent,
    PortfolioContent,
    HobbiesContent,
    ContactContent,
    FooterContent
  }
}
</script>

<style lang="scss">
 *, :after, :before {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0; 
    background: #34393f;
    background-image: url("./assets/img/bg-body.jpg");
    max-width: 100%;
  }

  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Calisto MT;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    text-size-adjust: auto;
  }

  h1 h2 {
    font-weight: normal;
  }
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  
  .menu-item {
    flex:1;
    text-align: center;
  }

  .menu-text a {
    font-size: 1.5vw; 
    color: #fff;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
  }

  .menu-text a:hover {
    border-bottom: 2px solid #fff;
    width: fit-content;
  }

  #particles-js { 
    background-image: url("./assets/img/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .wrap-banner {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  .main-title {
    top: 50%;
    left: 0;
    right: 0;
    height: 100%; 
    width: 100%;
    position: absolute;
    text-align: center;
    background-position: fixed;
    justify-content: center;
    align-items: center;
    background-size: cover;
    color:white;

  }

  .main-title {  
    color: #fff;
      h2 {
        font-size: 5vw;
        text-align: center;
        font-family: Calisto MT;
        text-shadow: 8px 8px #000000;
        text-transform: uppercase;
        margin: 0;
      }
    }

  .a {
    text-decoration: none;
    color: #eee;
  }
  .button {
    color: #fff;
  }
  .button:link{
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    position: center;
    top: 3rem;
    border: 0.1px solid white;
    padding: 1rem; 
    transition: ease-in-out all 350ms;
    color: #fff;
}

.button:hover{
    color: rgba(238, 238, 238, 0.664);
    opacity: 0.5;
}
  
  h3 {
    font-weight: 100;
  }
  .white {
    color: #ffffff;
  }
  .teko {
    font-family: 'Teko', sans-serif;
  }

  .main-section {
    max-width: 650px;
    margin: auto;
    padding: 2rem 2rem 2rem;
    position: relative;
    
  }

  .about-heading {
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin: auto;
    color: white;
    text-align: center;
  }
  
  .about-heading h1{
    font-size: 9rem;
    opacity: 0.4;
  }

  .about-heading h6{
    font-size: 1.6rem;
    font-weight: 300;
    margin-top: -3.7rem;
  }

  .about-heading h1{
    font-size: 5rem;
    color: rgba(255,255,255,.3);
    text-transform: uppercase;
    font-weight: 300;
    position: relative;
    margin-bottom: 1rem;  
  } 

  .about-heading h1::before,
  .about-heading h1::after{
    content: "";
    position: absolute;
    bottom: -.5rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255,255,255,.75);
  }

  .about-heading h1::before{
    width: 10rem;
    height: 3px;
    border-radius: .8rem;

  }

  .about-heading h1::after{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
    bottom: -1rem;
  }

  .profile-img {
    background-image: url("./assets/img/profilePic.png");
    background-repeat: no-repeat;  
  }

  .image-responsive {
    margin-left: -15%;
    max-width:100%
  }

.about-description p{
  position: relative;
  opacity:0.7;
  background: #292929;
  border-radius: 3px;
  box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
  margin-top: 50%;
  display: inline-block;
  font-family: Calisto MT;
  padding-top: 2%;
  margin-top: -35%;
}


  .portfolio h1{
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    position: relative;
    margin-top: 10%;
    font-size: 1.5rem;
  }

  .portfolio-heading::after {
    content: '';
    display: inline-block;
    left: 42.5%;
    width: 15%;
    height: 2px;
    position: absolute;
    bottom: 0;
    background: rgba(255,255,255,.3);
  }

  .portfolio h6 {
    font-family: Calisto MT;
    color: #fff;
    font-size:20px;
    font-weight: 10;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
  #github {
    color: #fff;
  }

  .github {
    margin-top: 5px;
    list-style: none;
    width: 100%;
    height: 100%;
    align-items: center;
    color: #fff;
    margin-bottom: 5rem;
  
  }
  .github i{
    font-size: 4rem;
    transition: all 350ms;  
  }

  #github:hover{
    color: #FFd544;
    transform: scale(1.1);
  }

.hobbies {
  text-transform: uppercase;
  font-family: Calisto MT;
  color: #fff;
  font-size: 7vw;
  margin: 0;
  padding: 0;
  width: 100%;
}

.hobby-content h1 {
  z-index: -1;
  opacity: 10%;
}

.hobbies h1 {
  z-index: 1;
  margin: 0;
}

.gallery-link {
  color: white;
  z-index: 2;
  margin-top: 60px;
}

.art-description {
  opacity:10%;
  background: #292929;
  color: #fff;
  width: 35%;
  margin-top: -10%;
  margin-bottom: 10%; 
  text-align: left;
  padding-left: 10px;
  font-family: Calisto MT;
  position: relative;
}

@media only screen and (max-width: 479px){
    .art-description { width: 100%; 
    margin-top: 0.5%;
    text-align: center;
    
    }
}

.contact {
  margin-bottom: 0%;
  position: center;
}

.contact h1{
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  position: relative;
  font-size: 1.5rem;
  border-bottom: 1px white;
}

.contact-heading::after {
  content: '';
  display: inline-block;
  left: 42.5%;
  width: 15%;
  height: 2px;
  position: absolute;
  bottom: 0;
  background: rgba(255,255,255,.3);
}

.contact-form{
  background-color: #34393f;
  color: white;
  text-align: left;
  width: 50%;
  
} 

input,
select,
textarea{
    width: 100%;
    padding: 1rem;
    margin-top: 5px;
    border: none;
    outline-color: rgb(74, 90, 85);
    margin-bottom: 5px;
}

form{
    width: 70%;
    margin: 0 auto;
}

input[type="submit"]{
  width: initial;
  background-color: rgb(20, 21, 22);
  color: #eee;
  padding: 1rem 2rem;
  border-radius: .8rem;
  cursor: pointer;
  transition: background-color 650ms;
}

input[type="submit"]:hover{
  color: #221e3f;
  background-color: #FFd544;
}

.copyright{
width: 100%;
text-align: center;
background-color: #17191b;
padding: 1rem 0;
position: relative;
margin-bottom: 0;
color: #34393f;
}

.copyright p{
  font-size: 1.3rem;
}


</style>

import ContentSection from "../../components/ContentSection/ContentSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/NavBar";
import Box from '@mui/material/Box';
import AboutSection from "../../components/AboutSection/AboutSection";

function About() {
  return (
    <Box>
        <Navbar/>
        <AboutSection/>
        <Footer/>
    </Box>
  );
}

export default About;
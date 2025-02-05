import ContentSection from "../../components/ContentSection/ContentSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/NavBar";
import "./Home.css";
import Box from '@mui/material/Box';


function Home() {
  return (
    <Box>
        <Navbar/>
        <HeroSection/>
        <ContentSection/>
        <Footer/>
    </Box>
  );
}

export default Home;

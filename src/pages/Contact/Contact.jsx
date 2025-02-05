import ContentSection from "../../components/ContentSection/ContentSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/NavBar";
import Box from '@mui/material/Box';
import AboutSection from "../../components/AboutSection/AboutSection";
import { Typography } from "@mui/material";

function Contact() {
  return (
    <Box>
        <Navbar/>
        <Box sx={{height:"1200px", width: "100vw", display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center", paddingTop: "80px"  }}>
            <Typography variant="h1">This is a contact page</Typography>
        </Box>
        <Footer/>
    </Box>
  );
}

export default Contact;
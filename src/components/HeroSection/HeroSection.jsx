import { Box,Typography } from "@mui/material";
import myimg from "../../assets/home-tablet.jpg"

function HeroSection() { 
  return ( 
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center", paddingTop: "80px"  }}> 
      {/* <Box component="img" sx={{border: '10px solid black', width: "1000px", marginTop: "200px"}} src={myimg} /> */}
      <Typography variant="h3" gutterBottom sx={{ marginLeft: "20px", color: "black" }}>Hi, willkommen auf meiner Webseite</Typography> 
    </Box> 
  ); 
}

export default HeroSection;









import { Box, Button} from "@mui/material";
import Card from "../Card/Card";
//import Button from "@mui/material/Button";







function ContentSection() { 
  return ( 
    <Box>
      <Box className="container" sx={{display:"flex", p:3, flexWrap:"wrap", gap:5, justifyContent: 'center'}}>
        <Card className="card"/>
      </Box>
    </Box>
  ); 
}

export default ContentSection;




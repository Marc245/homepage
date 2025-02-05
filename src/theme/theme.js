{/*
  Farbschemata:
    #2e5902
    #88A61C
    #0D2601
    #C5D92B
    #D9D271 
*/}


// theme.js
import { createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#80A4ED", 
    },
    secondary: {
      main: '#88A61C',  
    },
    fancyblue: {
      main: "#0b03fc",
      light:"#0356fc"
    },
    background: {
      default: '#F0F0F0',  
    },
    text: {
      primary: '#0D2601',  // Dark text for primary content
      secondary: '#C5D92B',  // Lighter text for secondary content
    },
    

  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',  // Custom font family
    h1: {
      fontSize: '2.5rem',  // Large font for headings
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  spacing: 8,  // Default spacing unit
  shape: {
    borderRadius: 8,  // Rounded corners for components
  },
  components: {
    // Customizing MUI components (like Button)
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',  // Customize Button's border radius
          padding: '10px 20px',  // Customize padding
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '8px',  // Customize TextField border radius
          marginBottom: '16px',  // Add margin to TextField
        },
      },
    },
  },
});

export default theme;



import "./App.css";
import Home from "./pages/Home/Home";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/theme";  // Import the custom theme
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;

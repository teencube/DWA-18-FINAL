
import styled,{ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "./Theme";
import { useState } from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Search from "./Components/Pages/Search";
import Favorites from "./Components/Pages/Favorites";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/Signup";


const Container = styled.div `
display : flex;
background : ${({theme})=> theme.bg};
width : 100%;
height : 100vh;
overflow-x : hidden;
overflow-y:hidden;
`
function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    
      <Container>
        <Router>
          <Navbar toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/Search" element={<Search />} />
            <Route path="/" element={<Home />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;




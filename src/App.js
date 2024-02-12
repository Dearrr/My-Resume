import { ThemeProvider, styled } from "@mui/material/styles";
import "./App.css";
import { darkTheme } from "./Utils/theme";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import Skill from "./component/Skill";
import Experience from "./component/Experience";
import Education from "./component/Education";
import Footer from "./component/Footer";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
      <Body>
        <Hero />
        <BgWrapper>
          <Skill />
          <Experience />
          <Education />
        </BgWrapper>
        <Footer />
      </Body>
      
    </ThemeProvider>
  );
}

export default App;

const Body = styled("div")`
  background-color: ${(props) => props.theme.palette.bg};
  width: 100%;
  overflow-x: hidden;
`;

const BgWrapper = styled("div")`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

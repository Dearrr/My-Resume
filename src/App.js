import { Stack, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import SideBar from "./component/SideBar/SideBar";
import Profile from "./component/Profile/Profile";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Prompt', sans-serif",
    },
    palette: {
      primary: { main: "#ffff" },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Stack
        flexDirection={{ xs: "column", sm: "row" }}
        width={{ xs: "100%", md: "1170px" }}
        padding={{ xs: "20px" }}
        className="App"
      >
        <SideBar />
        <Profile />
      </Stack>
    </ThemeProvider>
  );
}

export default App;

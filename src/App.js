import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple, deepPurple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import myPalette from "./ColorPalette";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./header/Header";
import Navbar from "./header/Navbar";
import Divider from "@mui/material/Divider";
const lightTheme = createTheme({
  palette: {
    mode: "light", // Light theme mode
    background: {
      default: "#F1F1F1", // Change the background color for dark mode
    },
    primary: {
      main: "#00A1A1",
      light: "#D8F4F5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#770332",
      light: "#FDF2F8",
      contrastText: "#fff",
    },
    success: {
      main: "#69CB1C",
      light: "#F0FAE8",
      contrastText: "#fff",
    },
    info: {
      main: "#5780FF",
      light: "#EEF2FF",
      contrastText: "#fff",
    },
    warning: {
      main: "#FFC700",
      light: "#FFF9E6",
      contrastText: "#fff",
    },
    error: {
      main: "#FF3938",
      light: "#FFEBEB",
      contrastText: "#fff",
    },
    text: {
      main: "#222222",
      light: "#555555",
      fade: "#BBBBBB",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem", //48px
      lineHeight: "3.625rem", // 58px
    },
    h2: {
      fontSize: "2.5rem", //40px
      lineHeight: "3.125rem", // 50px
    },
    h3: {
      fontSize: "2rem", //32px
      lineHeight: "2.625rem", // 42px
    },
    h4: {
      fontSize: "1.75rem", //28px
      lineHeight: "2.375rem", // 38px
    },
    h5: {
      fontSize: "1.5rem", //24px
      lineHeight: "2.125rem", // 34px
    },
    h6: {
      fontSize: "1.25rem", //20px
      lineHeight: "1.875rem", // 30px
    },
    subtitle1: {
      fontSize: "1rem", //16px
      lineHeight: "1.625rem", // 26px
    },
    subtitle2: {
      fontSize: "0.875rem", //14px
      lineHeight: "1.25rem", // 20px
    },
    body1: {
      fontSize: "0.75rem", //12px
      lineHeight: "1.125rem", // 18px
    },
    body2: {
      fontSize: "0.625rem", //10px
      lineHeight: "1rem", // 16px
    },
    caption: {
      fontSize: "0.5rem", //10px
      lineHeight: "0.625rem", // 16px
    },
  },
  components: {
    MuiPaper: {
      // Dark theme paper color
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          boxShadow:
            "0px 2px 3px 0px rgba(0, 34, 66, 0.05), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "0.875rem",
          padding: "8px 10px",
          borderRadius: "6px",
          textTransform: "none",
        },
      },
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark", // Dark theme mode
    background: {
      default: "#111", // Change the background color for dark mode
    },
    primary: {
      main: "#00A1A1",
      light: "#016363",
      contrastText: "#fff",
    },
    secondary: {
      main: "#770332",
      light: "#380117",
      contrastText: "#fff",
    },
    success: {
      main: "#69CB1C",
      light: "#132603",
      contrastText: "#fff",
    },
    info: {
      main: "#5780FF",
      light: "#050E28",
      contrastText: "#fff",
    },
    warning: {
      main: "#FFC700",
      light: "#271F02",
      contrastText: "#fff",
    },
    error: {
      main: "#FF3938",
      light: "#370C0C",
      contrastText: "#fff",
    },
    text: {
      main: "#FFFFFF",
      light: "#BBBBBB",
      fade: "#555555",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem", //48px
      lineHeight: "3.625rem", // 58px
    },
    h2: {
      fontSize: "2.5rem", //40px
      lineHeight: "3.125rem", // 50px
    },
    h3: {
      fontSize: "2rem", //32px
      lineHeight: "2.625rem", // 42px
    },
    h4: {
      fontSize: "1.75rem", //28px
      lineHeight: "2.375rem", // 38px
    },
    h5: {
      fontSize: "1.5rem", //24px
      lineHeight: "2.125rem", // 34px
    },
    h6: {
      fontSize: "1.25rem", //20px
      lineHeight: "1.875rem", // 30px
    },
    subtitle1: {
      fontSize: "1rem", //16px
      lineHeight: "1.625rem", // 26px
    },
    subtitle2: {
      fontSize: "0.875rem", //14px
      lineHeight: "1.25rem", // 20px
    },
    body1: {
      fontSize: "0.75rem", //12px
      lineHeight: "1.125rem", // 18px
    },
    body2: {
      fontSize: "0.625rem", //10px
      lineHeight: "1rem", // 16px
    },
    caption: {
      fontSize: "0.5rem", //10px
      lineHeight: "0.625rem", // 16px
    },
  },
  components: {
    MuiPaper: {
      // Dark theme paper color
      styleOverrides: {
        root: {
          backgroundColor: "#171717",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot

        root: {
          // Some CSS
          fontSize: "0.875rem",
          padding: "8px 10px",
          borderRadius: "6px",
          textTransform: "none",
        },
      },
    },
  },
});
function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    // Toggle between light and dark themes
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  // theme.typography.h1 = {
  //   fontSize: "2.375rem", //38px
  //   fontWeight: 400,
  //   lineHeight: "2.875rem", //46px,

  //   [theme.breakpoints.up("md")]: {
  //     fontSize: "2rem",
  //   },
  // };
  // theme.typography.h2 = {
  //   fontSize: "1.875rem", //30px
  //   fontWeight: 400,
  // };
  // theme.typography.poster = {
  //   fontSize: "5rem", //30px
  //   fontWeight: 500,
  // };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper>
        <Container maxWidth="xl">
          <Header toggleTheme={toggleTheme} />
        </Container>
        <Divider />
        <Container maxWidth="xl">
          <Navbar />
        </Container>
      </Paper>
      <Container maxWidth="xl">
        <Button
          variant="contained"
          onClick={toggleTheme}
          disableElevation
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M9.23076 2.585L2.87825 7.67249C2.16325 8.24082 1.70492 9.44169 1.86075 10.34L3.07992 17.6367C3.29992 18.9383 4.54658 19.9925 5.86658 19.9925H16.1333C17.4441 19.9925 18.6999 18.9292 18.9199 17.6367L20.1391 10.34C20.2858 9.44169 19.8274 8.24082 19.1216 7.67249L12.7691 2.59418C11.7882 1.80584 10.2024 1.80583 9.23076 2.585Z"
                stroke="#555555"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9999 14.2083C12.2656 14.2083 13.2916 13.1823 13.2916 11.9167C13.2916 10.651 12.2656 9.625 10.9999 9.625C9.73427 9.625 8.70825 10.651 8.70825 11.9167C8.70825 13.1823 9.73427 14.2083 10.9999 14.2083Z"
                stroke="#555555"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          change theme
        </Button>
        <Button variant="outlined" color="success" sx={{ ml: 2 }}>
          Secondary
        </Button>

        <br />
        <br />
        <Card sx={{ minWidth: 275 }}>
          <br />
          <Box
            style={{
              // padding: "6px",
              background: `${theme.palette.success.light}`,

              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "6px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
            >
              <path
                d="M15.9167 18.7917H6.75008C4.00008 18.7917 2.16675 17.4167 2.16675 14.2083V7.79166C2.16675 4.58333 4.00008 3.20833 6.75008 3.20833H15.9167C18.6667 3.20833 20.5001 4.58333 20.5001 7.79166V14.2083C20.5001 17.4167 18.6667 18.7917 15.9167 18.7917Z"
                stroke={theme.palette.success.main}
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.9169 8.25L13.0477 10.5417C12.1036 11.2933 10.5544 11.2933 9.61024 10.5417L6.75024 8.25"
                stroke={theme.palette.success.main}
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="success.light"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be nev o lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography variant="h1">h1. Heading</Typography>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text asddasd
          </Typography>
          <Typography variant="poster" display="block" gutterBottom>
            overline text poster
          </Typography>
        </Box>
      </Container>
      {/* <Test /> */}
    </ThemeProvider>
  );
}

export default App;

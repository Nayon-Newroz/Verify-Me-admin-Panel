import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple, deepPurple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import ColorPalette from "./color-palette/ColorPalette";
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
import Navigation from "./pages/navigation/Navigation";
const lightTheme = createTheme({
  palette: {
    mode: "light", // Light theme mode
    background: {
      default: ColorPalette.light.background.default, // Change the background color for dark mode
    },
    primary: {
      main: ColorPalette.light.primary.main,
      light: ColorPalette.light.primary.light,
      contrastText: ColorPalette.light.primary.contrastText,
    },
    secondary: {
      main: ColorPalette.light.secondary.main,
      light: ColorPalette.light.secondary.light,
      contrastText: ColorPalette.light.secondary.contrastText,
    },
    success: {
      main: ColorPalette.light.success.main,
      light: ColorPalette.light.success.light,
      contrastText: ColorPalette.light.success.contrastText,
    },
    info: {
      main: ColorPalette.light.info.main,
      light: ColorPalette.light.info.light,
      contrastText: ColorPalette.light.info.contrastText,
    },
    warning: {
      main: ColorPalette.light.warning.main,
      light: ColorPalette.light.warning.light,
      contrastText: ColorPalette.light.warning.contrastText,
    },
    error: {
      main: ColorPalette.light.error.main,
      light: ColorPalette.light.error.light,
      contrastText: ColorPalette.light.error.contrastText,
    },
    text: {
      main: ColorPalette.light.text.main,
      light: ColorPalette.light.text.light,
      fade: ColorPalette.light.text.fade,
      contrastText: ColorPalette.light.text.contrastText,
    },
    border: {
      main: ColorPalette.light.border.main,
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",

    h1: {
      fontSize: "3rem", //48px
      lineHeight: "3.625rem", // 58px
      fontWeight: 400,
    },
    h2: {
      fontSize: "2.5rem", //40px
      lineHeight: "3.125rem", // 50px
      fontWeight: 400,
    },
    h3: {
      fontSize: "2rem", //32px
      lineHeight: "2.625rem", // 42px
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.75rem", //28px
      lineHeight: "2.375rem", // 38px
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.5rem", //24px
      lineHeight: "2.125rem", // 34px
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.25rem", //20px
      lineHeight: "1.875rem", // 30px
      fontWeight: 400,
    },
    base: {
      fontSize: "1rem", //16px
      lineHeight: "1.625rem", // 26px
      display: "block",
      fontWeight: 400,
    },
    medium: {
      fontSize: "0.875rem", //14px
      lineHeight: "1.25rem", // 20px
      display: "block",
      fontWeight: 400,
    },
    small: {
      fontSize: "0.75rem", //12px
      lineHeight: "1.125rem", // 18px
      display: "block",
      fontWeight: 400,
    },
    xsmall: {
      fontSize: "0.625rem", //10px
      lineHeight: "1rem", // 16px
      display: "block",
      fontWeight: 400,
    },
    xxsmall: {
      fontSize: "0.5rem", //10px
      lineHeight: "0.625rem", // 16px
      display: "block",
      fontWeight: 400,
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
          padding: "24px",
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
    // MuiIconButton: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       // Some CSS

    //     },
    //   },
    // },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: ColorPalette.light.border.main, // Change the background color to your desired color
          height: "1px", // Change the height as needed
          margin: "0px", // Change the margin as needed
        },
      },
    },
    MuiAvatar: {
      variants: [
        // {
        //   props: { variant: "rounded" },
        //   style: {
        //     borderRadius: "50%", // You can adjust the value for the desired border radius
        //     width: "36px",
        //     height: "36px",
        //   },
        // },
        {
          props: { variant: "rounded" },
          style: {
            borderRadius: "6px", // You can adjust the value for the desired border radius
            width: "24px",
            height: "24px",
          },
        },
      ],
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: "50px", // Adjust the border-radius value as needed
          backgroundColor: ColorPalette.light.border.main, // Change the background color as needed
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Adjust the border-radius value as needed
        },
        standardSuccess: {
          backgroundColor: ColorPalette.light.success.light, // Change the background color for success alerts
          color: ColorPalette.light.success.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardError: {
          backgroundColor: ColorPalette.light.error.light, // Change the background color for error alerts
          color: ColorPalette.light.error.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardWarning: {
          backgroundColor: ColorPalette.light.warning.light, // Change the background color for warning alerts
          color: ColorPalette.light.warning.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardInfo: {
          backgroundColor: ColorPalette.light.info.light, // Change the background color for info alerts
          color: ColorPalette.light.info.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: "14px",
          fontWeight: 500,
          padding: "6px 10px 6px 0px",
          borderBottom: "1px solid #E5E5E5",
        },
        body: {
          fontSize: "14px",
          fontWeight: 400,
          padding: "6px 10px 6px 0px",
        },
      },
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark", // Dark theme mode
    background: {
      default: ColorPalette.dark.background.default, // Change the background color for dark mode
    },
    primary: {
      main: ColorPalette.dark.primary.main,
      light: ColorPalette.dark.primary.light,
      contrastText: ColorPalette.dark.primary.contrastText,
    },
    secondary: {
      main: ColorPalette.dark.secondary.main,
      light: ColorPalette.dark.secondary.light,
      contrastText: ColorPalette.dark.secondary.contrastText,
    },
    success: {
      main: ColorPalette.dark.success.main,
      light: ColorPalette.dark.success.light,
      contrastText: ColorPalette.dark.success.contrastText,
    },
    info: {
      main: ColorPalette.dark.info.main,
      light: ColorPalette.dark.info.light,
      contrastText: ColorPalette.dark.info.contrastText,
    },
    warning: {
      main: ColorPalette.dark.warning.main,
      light: ColorPalette.dark.warning.light,
      contrastText: ColorPalette.dark.warning.contrastText,
    },
    error: {
      main: ColorPalette.dark.error.main,
      light: ColorPalette.dark.error.light,
      contrastText: ColorPalette.dark.error.contrastText,
    },
    text: {
      main: ColorPalette.dark.text.main,
      light: ColorPalette.dark.text.light,
      fade: ColorPalette.dark.text.fade,
      contrastText: ColorPalette.dark.text.contrastText,
    },
    border: {
      main: ColorPalette.dark.border.main,
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem", //48px
      lineHeight: "3.625rem", // 58px
      fontWeight: 400,
    },
    h2: {
      fontSize: "2.5rem", //40px
      lineHeight: "3.125rem", // 50px
      fontWeight: 400,
    },
    h3: {
      fontSize: "2rem", //32px
      lineHeight: "2.625rem", // 42px
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.75rem", //28px
      lineHeight: "2.375rem", // 38px
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.5rem", //24px
      lineHeight: "2.125rem", // 34px
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.25rem", //20px
      lineHeight: "1.875rem", // 30px
      fontWeight: 400,
    },
    base: {
      fontSize: "1rem", //16px
      lineHeight: "1.625rem", // 26px
      display: "block",
      fontWeight: 400,
    },
    medium: {
      fontSize: "0.875rem", //14px
      lineHeight: "1.25rem", // 20px
      display: "block",
      fontWeight: 400,
    },
    small: {
      fontSize: "0.75rem", //12px
      lineHeight: "1.125rem", // 18px
      display: "block",
      fontWeight: 400,
    },
    xsmall: {
      fontSize: "0.625rem", //10px
      lineHeight: "1rem", // 16px
      display: "block",
      fontWeight: 400,
    },
    xxsmall: {
      fontSize: "0.5rem", //10px
      lineHeight: "0.625rem", // 16px
      display: "block",
      fontWeight: 400,
    },
  },
  components: {
    MuiPaper: {
      // Dark theme paper color
      styleOverrides: {
        root: {
          backgroundColor: "#171717",
          boxShadow:
            "0px 2px 3px 0px rgba(0, 34, 66, 0.05), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
          padding: "24px",
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
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: ColorPalette.dark.border.main, // Change the background color to your desired color
          height: "1px", // Change the height as needed
          margin: "0px", // Change the margin as needed
        },
      },
    },
    MuiAvatar: {
      variants: [
        // {
        //   props: { variant: "rounded" },
        //   style: {
        //     borderRadius: "50%", // You can adjust the value for the desired border radius
        //     width: "36px",
        //     height: "36px",
        //   },
        // },
        {
          props: { variant: "rounded" },
          style: {
            borderRadius: "6px", // You can adjust the value for the desired border radius
            width: "22px",
            height: "22px",
          },
        },
      ],
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: "50px", // Adjust the border-radius value as needed
          backgroundColor: ColorPalette.dark.border.main, // Change the background color as needed
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Adjust the border-radius value as needed
        },
        standardSuccess: {
          backgroundColor: ColorPalette.dark.success.light, // Change the background color for success alerts
          color: ColorPalette.dark.success.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardError: {
          backgroundColor: ColorPalette.dark.error.light, // Change the background color for error alerts
          color: ColorPalette.dark.error.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardWarning: {
          backgroundColor: ColorPalette.dark.warning.light, // Change the background color for warning alerts
          color: ColorPalette.dark.warning.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardInfo: {
          backgroundColor: ColorPalette.dark.info.light, // Change the background color for info alerts
          color: ColorPalette.dark.info.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: "14px",
          fontWeight: 500,
          padding: "6px 10px 6px 0px",
          borderBottom: "1px solid #E5E5E5",
        },
        body: {
          fontSize: "14px",
          fontWeight: 400,
          padding: "6px 10px 6px 0px",
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
      <Paper sx={{ padding: "0px" }}>
        <Container maxWidth="xl">
          <Header toggleTheme={toggleTheme} />
        </Container>
        <Divider />
        <Container maxWidth="xl">
          <Navbar />
        </Container>
      </Paper>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Navigation />
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
            <Typography variant="xsmall">
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
          <Typography variant="h1" color="text.main">
            h1. Heading
          </Typography>
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
          <Typography variant="base" gutterBottom>
            base. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
          <Typography variant="medium" gutterBottom>
            medium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="small" gutterBottom>
            small. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="xsmall" gutterBottom>
            xsmall. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="xxsmall" display="block" gutterBottom>
            xxsmall text
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

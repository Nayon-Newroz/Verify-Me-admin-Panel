import React from "react";
import {
  Badge,
  Container,
  FormControl,
  Grid,
  Paper,
  Typography,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const Dashboard = () => {
  const theme = useTheme();
  const [progress, setProgress] = React.useState(50);
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 50 ? 10 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={9}>
          <Paper sx={{ px: 0, height: "174px" }}>
            {" "}
            <Grid container alignItems="center" sx={{ mb: 1.125, px: 3 }}>
              <Grid item xs={6}>
                <Typography
                  variant="subtitle1"
                  color="text.main"
                  className="fw5"
                >
                  Statistics
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="subtitle2"
                  color="text.main"
                  className="right fw4"
                >
                  Updated 1 month ago
                </Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container alignItems="center" sx={{ mt: 2.5, px: 3 }}>
              <Grid item xs={3}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs="auto">
                    {" "}
                    <Avatar
                      sx={{ bgcolor: `${theme.palette.secondary.light}` }}
                      variant="rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10.4899 2.23L5.49991 4.09999C4.34991 4.52999 3.40991 5.88998 3.40991 7.11998V14.55C3.40991 15.73 4.18992 17.28 5.13992 17.99L9.43991 21.2C10.8499 22.26 13.1699 22.26 14.5799 21.2L18.8799 17.99C19.8299 17.28 20.6099 15.73 20.6099 14.55V7.11998C20.6099 5.88998 19.6699 4.52999 18.5199 4.09999L13.5299 2.23C12.6799 1.92 11.3199 1.92 10.4899 2.23Z"
                          stroke={theme.palette.secondary.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.9999 10.92C11.9599 10.92 11.9099 10.92 11.8699 10.92C10.9299 10.89 10.1799 10.11 10.1799 9.16C10.1799 8.19 10.9699 7.39999 11.9399 7.39999C12.9099 7.39999 13.7 8.19 13.7 9.16C13.69 10.12 12.9399 10.89 11.9999 10.92Z"
                          stroke={theme.palette.secondary.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.01 13.72C9.05004 14.36 9.05004 15.41 10.01 16.05C11.1 16.78 12.89 16.78 13.98 16.05C14.94 15.41 14.94 14.36 13.98 13.72C12.9 12.99 11.11 12.99 10.01 13.72Z"
                          stroke={theme.palette.secondary.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Avatar>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography
                      variant="h5"
                      color="text.light"
                      className="  fw5"
                    >
                      168119
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.main"
                      className="  fw4"
                    >
                      e-KYC Attempted
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs="auto">
                    {" "}
                    <Avatar
                      sx={{ bgcolor: `${theme.palette.info.light}` }}
                      variant="rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M6.75 12L10.7453 16L18.75 8"
                          stroke={theme.palette.info.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Avatar>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography
                      variant="h5"
                      color="text.light"
                      className="  fw5"
                    >
                      91825
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.main"
                      className="  fw4"
                    >
                      Verified e-KYC
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs="auto">
                    {" "}
                    <Avatar
                      sx={{ bgcolor: `${theme.palette.warning.light}` }}
                      variant="rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
                          stroke={theme.palette.warning.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.25 9H8.75"
                          stroke={theme.palette.warning.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.25 15H8.75"
                          stroke={theme.palette.warning.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Avatar>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography
                      variant="h5"
                      color="text.light"
                      className="  fw5"
                    >
                      $16926.8
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.main"
                      className="  fw4"
                    >
                      Due Bill
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs="auto">
                    {" "}
                    <Avatar
                      sx={{ bgcolor: `${theme.palette.success.light}` }}
                      variant="rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M16.95 8C16.5428 6.84458 15.4739 6.05285 14.25 6H10.25C8.59315 6 7.25 7.34315 7.25 9C7.25 10.6569 8.59315 12 10.25 12H14.25C15.9069 12 17.25 13.3431 17.25 15C17.25 16.6569 15.9069 18 14.25 18H10.25C9.02606 17.9472 7.95722 17.1554 7.55 16"
                          stroke={theme.palette.success.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13 3C13 2.58579 12.6642 2.25 12.25 2.25C11.8358 2.25 11.5 2.58579 11.5 3H13ZM11.5 6C11.5 6.41421 11.8358 6.75 12.25 6.75C12.6642 6.75 13 6.41421 13 6H11.5ZM13 18C13 17.5858 12.6642 17.25 12.25 17.25C11.8358 17.25 11.5 17.5858 11.5 18H13ZM11.5 21C11.5 21.4142 11.8358 21.75 12.25 21.75C12.6642 21.75 13 21.4142 13 21H11.5ZM11.5 3V6H13V3H11.5ZM11.5 18V21H13V18H11.5Z"
                          fill={theme.palette.success.main}
                        />
                      </svg>
                    </Avatar>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography
                      variant="h5"
                      color="text.light"
                      className="  fw5"
                    >
                      $862.6
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.main"
                      className="  fw4"
                    >
                      Paid
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ height: "174px", display: "flex" }}>
            <Grid container alignItems="center" spacing={2.5}>
              <Grid item xs="auto">
                <Badge
                  badgeContent={4}
                  color="primary"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  sx={{
                    "& .MuiBadge-badge": {
                      right: "15px",
                      bottom: "7px",
                      minWidth: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
                    },
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/images/user.svg"
                    sx={{
                      width: "96px",
                      height: "96px",
                      border: `2px solid ${theme.palette.text.fade}`,
                    }}
                  />
                </Badge>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="subtitle1"
                  color="text.main"
                  className="fw5"
                >
                  Cameron Williamson
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.main"
                  className="fw4"
                >
                  User Type Goes Here
                </Typography>
                <Box sx={{ mt: 1.5 }}>
                  <IconButton
                    sx={{
                      mr: 0.75,
                      border: `1px solid ${theme.palette.border.main}`,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M14.6666 7.33334V11.3333C14.6666 14 13.9999 14.6667 11.3333 14.6667H4.66659C1.99992 14.6667 1.33325 14 1.33325 11.3333V4.66668C1.33325 2.00001 1.99992 1.33334 4.66659 1.33334H5.66659C6.66659 1.33334 6.88659 1.62668 7.26659 2.13334L8.26659 3.46668C8.51992 3.80001 8.66659 4.00001 9.33325 4.00001H11.3333C13.9999 4.00001 14.6666 4.66668 14.6666 7.33334Z"
                        stroke={theme.palette.primary.main}
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M5.33325 1.33334H11.3333C12.6666 1.33334 13.3333 2.00001 13.3333 3.33334V4.25334"
                        stroke={theme.palette.primary.main}
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                  <IconButton
                    sx={{
                      mr: 0.75,
                      border: `1px solid ${theme.palette.border.main}`,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8 1.33334V6.00001L9.33333 4.66668"
                        stroke={theme.palette.primary.main}
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.00008 5.99999L6.66675 4.66666"
                        stroke={theme.palette.primary.main}
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.32007 8.66666H4.26007C4.5134 8.66666 4.74007 8.80666 4.8534 9.03332L5.6334 10.5933C5.86007 11.0467 6.32007 11.3333 6.82674 11.3333H9.18007C9.68674 11.3333 10.1467 11.0467 10.3734 10.5933L11.1534 9.03332C11.2667 8.80666 11.5001 8.66666 11.7467 8.66666H14.6534"
                        stroke={theme.palette.primary.main}
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.66659 2.75333C2.30659 3.09999 1.33325 4.48666 1.33325 7.33333V9.99999C1.33325 13.3333 2.66659 14.6667 5.99992 14.6667H9.99992C13.3333 14.6667 14.6666 13.3333 14.6666 9.99999V7.33333C14.6666 4.48666 13.6933 3.09999 11.3333 2.75333"
                        stroke={theme.palette.primary.main}
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                  <IconButton
                    sx={{
                      mr: 0.75,
                      border: `1px solid ${theme.palette.border.main}`,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.66659 12.6667H5.33325C2.66659 12.6667 1.33325 12 1.33325 8.66668V5.33334C1.33325 2.66668 2.66659 1.33334 5.33325 1.33334H10.6666C13.3333 1.33334 14.6666 2.66668 14.6666 5.33334V8.66668C14.6666 11.3333 13.3333 12.6667 10.6666 12.6667H10.3333C10.1266 12.6667 9.92659 12.7667 9.79992 12.9333L8.79992 14.2667C8.35992 14.8533 7.63992 14.8533 7.19992 14.2667L6.19992 12.9333C6.09325 12.7867 5.84659 12.6667 5.66659 12.6667Z"
                        stroke={theme.palette.primary.main}
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.6644 7.33333H10.6704"
                        stroke={theme.palette.primary.main}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.99691 7.33333H8.0029"
                        stroke={theme.palette.primary.main}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.32967 7.33333H5.33566"
                        stroke={theme.palette.primary.main}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                  <IconButton
                    sx={{
                      mr: 0.75,
                      border: `1px solid ${theme.palette.border.main}`,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M1.35331 8.28C1.59331 11.7133 4.50664 14.5067 7.99331 14.66C10.4533 14.7667 12.6533 13.62 13.9733 11.8133C14.52 11.0733 14.2266 10.58 13.3133 10.7467C12.8666 10.8267 12.4066 10.86 11.9266 10.84C8.66664 10.7067 5.99998 7.98 5.98664 4.76C5.97998 3.89334 6.15998 3.07334 6.48664 2.32667C6.84664 1.5 6.41331 1.10667 5.57998 1.46C2.93998 2.57334 1.13331 5.23334 1.35331 8.28Z"
                        stroke={theme.palette.primary.main}
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            {" "}
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs="auto">
                {" "}
                <Typography
                  variant="subtitle1"
                  color="text.main"
                  className="fw5"
                >
                  e-KYC Attempted
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.main"
                  className="fw4"
                >
                  Weekly Attempted Overview
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <IconButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11.4583 5.49999C12.2176 5.49999 12.8333 4.88438 12.8333 4.12499C12.8333 3.36559 12.2176 2.74998 11.4583 2.74998C10.6989 2.74998 10.0833 3.36559 10.0833 4.12499C10.0833 4.88438 10.6989 5.49999 11.4583 5.49999Z"
                      stroke={theme.palette.text.light}
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.4583 19.25C12.2176 19.25 12.8333 18.6344 12.8333 17.875C12.8333 17.1156 12.2176 16.5 11.4583 16.5C10.6989 16.5 10.0833 17.1156 10.0833 17.875C10.0833 18.6344 10.6989 19.25 11.4583 19.25Z"
                      stroke={theme.palette.text.light}
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.4583 11.9167C12.2176 11.9167 12.8333 11.301 12.8333 10.5417C12.8333 9.78227 12.2176 9.16666 11.4583 9.16666C10.6989 9.16666 10.0833 9.78227 10.0833 10.5417C10.0833 11.301 10.6989 11.9167 11.4583 11.9167Z"
                      stroke={theme.palette.text.light}
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </IconButton>
              </Grid>
            </Grid>
            <Grid container alignItems="end" spacing={3} sx={{ mb: 3 }}>
              <Grid item xs={4}>
                <Typography
                  variant="h2"
                  color="text.main"
                  className="fw6"
                  sx={{ mb: 1.5 }}
                >
                  168.5K
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.main"
                  className="fw4"
                >
                  You informed of this week compared to last week
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <img
                  src={
                    theme.palette.mode === "light"
                      ? "/images/Chart1_Light.png"
                      : "/images/Chart1_Dark.png"
                  }
                  width="100%"
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                px: 2.5,
                py: 2,
                borderRadius: "6px",
                border: `1px solid ${theme.palette.border.main}`,
              }}
            >
              <Grid container alignItems="center" spacing={3}>
                <Grid item xs={4}>
                  <Grid
                    container
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 1.125 }}
                  >
                    <Grid item xs="auto">
                      {" "}
                      <Avatar
                        sx={{ bgcolor: `${theme.palette.success.light}` }}
                        variant="square"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M4.5 9L7.49647 12L13.5 6"
                            stroke={theme.palette.success.main}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Avatar>
                    </Grid>
                    <Grid item xs="auto">
                      <Typography
                        variant="h5"
                        color="text.light"
                        className="fw6"
                      >
                        84042
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography
                    variant="subtitle2"
                    color="text.light"
                    className="fw5"
                    sx={{ mb: 1.125 }}
                  >
                    Success
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      color="primary"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Grid
                    container
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 1.125 }}
                  >
                    <Grid item xs="auto">
                      {" "}
                      <Avatar
                        sx={{ bgcolor: `${theme.palette.warning.light}` }}
                        variant="square"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M2.91675 13.485L4.82924 13.4925C5.51174 13.4925 6.14925 13.155 6.52425 12.5925L11.3168 5.4075C11.6918 4.845 12.3292 4.49999 13.0117 4.50749L16.4243 4.5225"
                            stroke={theme.palette.warning.main}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.9167 14.985L16.4167 13.485"
                            stroke={theme.palette.warning.main}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.33426 6.46499L6.52425 5.33999C6.14175 4.80749 5.52674 4.49249 4.87424 4.49999L2.91675 4.5075"
                            stroke={theme.palette.warning.main}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.3943 11.535L11.3093 12.7125C11.6918 13.2075 12.2918 13.5 12.9218 13.5L16.4243 13.485"
                            stroke={theme.palette.warning.main}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.4167 4.51501L14.9167 3.01501"
                            stroke={theme.palette.warning.main}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Avatar>
                    </Grid>
                    <Grid item xs="auto">
                      <Typography
                        variant="h5"
                        color="text.light"
                        className="fw6"
                      >
                        42,021
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography
                    variant="subtitle2"
                    color="text.light"
                    className="fw5"
                    sx={{ mb: 1.125 }}
                  >
                    Not Completed
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={25}
                      color="warning"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Grid
                    container
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 1.125 }}
                  >
                    <Grid item xs="auto">
                      {" "}
                      <Avatar
                        sx={{ bgcolor: `${theme.palette.error.light}` }}
                        variant="square"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <circle
                            cx="4.83325"
                            cy="13.5"
                            r="1.5"
                            stroke={theme.palette.error.main}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <circle
                            cx="4.83325"
                            cy="4.5"
                            r="1.5"
                            stroke={theme.palette.error.main}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <circle
                            cx="13.8333"
                            cy="13.5"
                            r="1.5"
                            stroke={theme.palette.error.main}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.83325 6V12"
                            stroke={theme.palette.error.main}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.8333 8.25V12"
                            stroke={theme.palette.error.main}
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.8636 2.46967C12.5707 2.17678 12.0958 2.17678 11.8029 2.46967C11.51 2.76256 11.51 3.23744 11.8029 3.53033L12.8636 2.46967ZM14.8029 6.53033C15.0958 6.82322 15.5707 6.82322 15.8636 6.53033C16.1565 6.23744 16.1565 5.76256 15.8636 5.46967L14.8029 6.53033ZM15.8636 3.53033C16.1565 3.23744 16.1565 2.76256 15.8636 2.46967C15.5707 2.17678 15.0958 2.17678 14.8029 2.46967L15.8636 3.53033ZM11.8029 5.46967C11.51 5.76256 11.51 6.23744 11.8029 6.53033C12.0958 6.82322 12.5707 6.82322 12.8636 6.53033L11.8029 5.46967ZM11.8029 3.53033L14.8029 6.53033L15.8636 5.46967L12.8636 2.46967L11.8029 3.53033ZM14.8029 2.46967L11.8029 5.46967L12.8636 6.53033L15.8636 3.53033L14.8029 2.46967Z"
                            fill={theme.palette.error.main}
                          />
                        </svg>
                      </Avatar>
                    </Grid>
                    <Grid item xs="auto">
                      <Typography
                        variant="h5"
                        color="text.light"
                        className="fw6"
                      >
                        42,021
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography
                    variant="subtitle2"
                    color="text.light"
                    className="fw5"
                    sx={{ mb: 1.125 }}
                  >
                    Failed
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={25}
                      color="error"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            {" "}
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 1.125 }}
            >
              <Grid item xs="auto">
                {" "}
                <Typography
                  variant="subtitle1"
                  color="text.main"
                  className="fw5"
                >
                  Store Credentials
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.main"
                  className="fw4"
                >
                  Weekly Attempted Overview
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <IconButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11.4583 5.49999C12.2176 5.49999 12.8333 4.88438 12.8333 4.12499C12.8333 3.36559 12.2176 2.74998 11.4583 2.74998C10.6989 2.74998 10.0833 3.36559 10.0833 4.12499C10.0833 4.88438 10.6989 5.49999 11.4583 5.49999Z"
                      stroke={theme.palette.text.light}
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.4583 19.25C12.2176 19.25 12.8333 18.6344 12.8333 17.875C12.8333 17.1156 12.2176 16.5 11.4583 16.5C10.6989 16.5 10.0833 17.1156 10.0833 17.875C10.0833 18.6344 10.6989 19.25 11.4583 19.25Z"
                      stroke={theme.palette.text.light}
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.4583 11.9167C12.2176 11.9167 12.8333 11.301 12.8333 10.5417C12.8333 9.78227 12.2176 9.16666 11.4583 9.16666C10.6989 9.16666 10.0833 9.78227 10.0833 10.5417C10.0833 11.301 10.6989 11.9167 11.4583 11.9167Z"
                      stroke={theme.palette.text.light}
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </IconButton>
              </Grid>
            </Grid>
            <Alert severity="" color="warning" sx={{ mb: 1.125 }}>
              <Typography
                variant="subtitle2"
                color="warning.main"
                className="fw4"
              >
                Important: Please do not share your Store ID or Store Password
                with anyone.
              </Typography>
            </Alert>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead sx={{ borderTop: "1px solid #E5E5E5" }}>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>STORE ID</TableCell>
                    <TableCell>PASSWORD</TableCell>
                    <TableCell>UPDATE</TableCell>
                    <TableCell align="right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                          stroke="#555555"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                          stroke="#555555"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                          stroke="#555555"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4, 5].map(() => (
                    <TableRow
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        Cameron Williamson
                      </TableCell>
                      <TableCell>ZYN5i1643310414733ODWe7</TableCell>
                      <TableCell>******</TableCell>
                      <TableCell>17 June 2022</TableCell>
                      <TableCell align="right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                            stroke="#555555"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                            stroke="#555555"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                            stroke="#555555"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Typography
                  variant="subtitle2"
                  color="text.light"
                  className="fw4"
                >
                  Showing 1 to 7 of 32 entries
                </Typography>
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>My paper</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>My paper</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>My paper</Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

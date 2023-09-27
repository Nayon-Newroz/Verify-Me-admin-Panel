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
import TablePagination from "@mui/material/TablePagination";
const Dashboard = () => {
  const theme = useTheme();
  const [progress, setProgress] = React.useState(50);
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 1.125, px: 3 }}
            >
              <Grid item xs="auto">
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 500 }}
                >
                  Statistics
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
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
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: `${theme.palette.secondary.light}`,
                      }}
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
                      sx={{ fontWeight: 500 }}
                    >
                      168119
                    </Typography>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 400 }}
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
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: `${theme.palette.info.light}`,
                      }}
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
                      sx={{ fontWeight: 500 }}
                    >
                      91825
                    </Typography>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 400 }}
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
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: `${theme.palette.warning.light}`,
                      }}
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
                      sx={{ fontWeight: 500 }}
                    >
                      $16926.8
                    </Typography>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 400 }}
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
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: `${theme.palette.success.light}`,
                      }}
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
                      sx={{ fontWeight: 500 }}
                    >
                      $862.6
                    </Typography>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 400 }}
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
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 500 }}
                >
                  Cameron Williamson
                </Typography>
                <Typography
                  variant="medium"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
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
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              sx={{ minHeight: "410px" }}
            >
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item xs="auto">
                  {" "}
                  <Typography
                    variant="base"
                    color="text.main"
                    sx={{ fontWeight: 500 }}
                  >
                    e-KYC Attempted
                  </Typography>
                  <Typography
                    variant="medium"
                    color="text.main"
                    sx={{ fontWeight: 400 }}
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
                    sx={{ mb: 1.5, fontWeight: 600 }}
                  >
                    168.5K
                  </Typography>
                  <Typography
                    variant="medium"
                    color="text.main"
                    sx={{ fontWeight: 400 }}
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
                  width: "100%",
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
                          variant="rounded"
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
                      variant="medium"
                      color="text.light"
                      sx={{ mb: 1.125, fontWeight: 500 }}
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
                          variant="rounded"
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
                      variant="medium"
                      color="text.light"
                      sx={{ mb: 1.125, fontWeight: 500 }}
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
                          variant="rounded"
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
                      variant="medium"
                      color="text.light"
                      sx={{ mb: 1.125, fontWeight: 500 }}
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
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ pb: 0 }}>
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
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 500 }}
                >
                  Store Credentials
                </Typography>
                <Typography
                  variant="medium"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
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
              Important: Please do not share your Store ID or Store Password
              with anyone.
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
                      <TableCell
                        sx={{
                          color: `${theme.palette.primary.main}`,
                          fontWeight: 500,
                        }}
                      >
                        Cameron Williamson
                      </TableCell>
                      <TableCell>ZYN5i1643310414733ODWe7</TableCell>
                      <TableCell>******</TableCell>
                      <TableCell
                        sx={{
                          color: `${theme.palette.text.light}`,
                        }}
                      >
                        17 June 2022
                      </TableCell>
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
              <Grid item xs={12}>
                <TablePagination
                  component="div"
                  count={100}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ minHeight: "380px" }}>
            {" "}
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 3 }}
            >
              <Grid item xs="auto">
                {" "}
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 500 }}
                >
                  Sales by Countries
                </Typography>
                <Typography
                  variant="medium"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  Monthly Sales Overview
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
            <Table aria-label="simple table">
              <TableBody>
                {[1, 2, 3, 4, 5].map(() => (
                  <TableRow sx={{ "& td": { border: 0 } }}>
                    <TableCell sx={{ width: "30px" }}>
                      <Avatar
                        variant="rounded"
                        src="/images/flag.png"
                        sx={{ width: 32, height: 32 }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="medium"
                        color="text.main"
                        sx={{ fontWeight: 500 }}
                      >
                        $8.45k
                      </Typography>
                      <Typography
                        variant="medium"
                        color="text.light"
                        sx={{ fontWeight: 400 }}
                      >
                        United Arab Emirates
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="medium"
                        color="success.main"
                        sx={{ fontWeight: 400 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="9"
                          viewBox="0 0 16 9"
                          fill="none"
                        >
                          <path
                            d="M14.5999 7.54158L9.16657 2.10825C8.5249 1.46658 7.4749 1.46658 6.83324 2.10825L1.3999 7.54158"
                            stroke="#69CB1C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>{" "}
                        &nbsp; 25.8%
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ minHeight: "380px" }}>
            {" "}
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs="auto">
                {" "}
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 500 }}
                >
                  Total Demo Requested
                </Typography>
                <Grid container alignItems="center" spacing={1} sx={{ mb: 3 }}>
                  <Grid item xs="auto">
                    <Typography
                      variant="h2"
                      color="text.main"
                      sx={{ fontWeight: 600 }}
                    >
                      298.5k
                    </Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography
                      variant="medium"
                      color="success.main"
                      sx={{ fontWeight: 400 }}
                    >
                      0.3%
                    </Typography>
                  </Grid>
                </Grid>
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
            <img src="/images/Chart.png" alt="" width="100%" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ minHeight: "380px" }}>
            {" "}
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 3 }}
            >
              <Grid item xs="auto">
                {" "}
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 500 }}
                >
                  Monthly Requested State
                </Typography>
                <Typography
                  variant="medium"
                  color="text.main"
                  sx={{ fontWeight: 400 }}
                >
                  8.52k requested
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
            <Table aria-label="simple table">
              <TableBody>
                <TableRow sx={{ "& td": { border: 0 } }}>
                  <TableCell sx={{ width: "30px" }}>
                    <Avatar
                      sx={{ bgcolor: `${theme.palette.success.light}` }}
                      variant="rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M12.75 15.375H5.25C3 15.375 1.5 14.25 1.5 11.625V6.375C1.5 3.75 3 2.625 5.25 2.625H12.75C15 2.625 16.5 3.75 16.5 6.375V11.625C16.5 14.25 15 15.375 12.75 15.375Z"
                          stroke={theme.palette.success.main}
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.75 6.75L10.4025 8.625C9.63 9.24 8.3625 9.24 7.59 8.625L5.25 6.75"
                          stroke={theme.palette.success.main}
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 500 }}
                    >
                      Emails
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="text.light"
                      sx={{ fontWeight: 400 }}
                    >
                      12,346
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="success.main"
                      sx={{ fontWeight: 400 }}
                    >
                      0.3%
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { border: 0 } }}>
                  <TableCell sx={{ width: "30px" }}>
                    <Avatar
                      sx={{ bgcolor: `${theme.palette.info.light}` }}
                      variant="rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.8524 12.6225L14.1449 14.9925C14.2199 15.615 13.5524 16.05 13.0199 15.7275L9.87738 13.86C9.53238 13.86 9.19489 13.8375 8.86489 13.7925C9.41989 13.14 9.74989 12.315 9.74989 11.4225C9.74989 9.29249 7.90489 7.56752 5.62489 7.56752C4.75489 7.56752 3.95239 7.815 3.28489 8.25C3.26239 8.0625 3.25488 7.87499 3.25488 7.67999C3.25488 4.26749 6.21738 1.5 9.87738 1.5C13.5374 1.5 16.4999 4.26749 16.4999 7.67999C16.4999 9.70499 15.4574 11.4975 13.8524 12.6225Z"
                          stroke={theme.palette.info.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.75 11.4225C9.75 12.315 9.42001 13.14 8.86501 13.7925C8.12251 14.6925 6.945 15.27 5.625 15.27L3.6675 16.4325C3.3375 16.635 2.9175 16.3575 2.9625 15.975L3.15 14.4975C2.145 13.8 1.5 12.6825 1.5 11.4225C1.5 10.1025 2.205 8.93998 3.285 8.24998C3.9525 7.81498 4.755 7.5675 5.625 7.5675C7.905 7.5675 9.75 9.29247 9.75 11.4225Z"
                          stroke={theme.palette.info.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 500 }}
                    >
                      Direct massage
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="text.light"
                      sx={{ fontWeight: 400 }}
                    >
                      8,734
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="success.main"
                      sx={{ fontWeight: 400 }}
                    >
                      2.1%
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { border: 0 } }}>
                  <TableCell sx={{ width: "30px" }}>
                    <Avatar
                      sx={{ bgcolor: `${theme.palette.warning.light}` }}
                      variant="rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M16.4775 13.7475C16.4775 14.0175 16.4175 14.295 16.29 14.565C16.1625 14.835 15.9975 15.09 15.78 15.33C15.4125 15.735 15.0075 16.0275 14.55 16.215C14.1 16.4025 13.6125 16.5 13.0875 16.5C12.3225 16.5 11.505 16.32 10.6425 15.9525C9.78 15.585 8.9175 15.09 8.0625 14.4675C7.2 13.8375 6.3825 13.14 5.6025 12.3675C4.83 11.5875 4.1325 10.77 3.51 9.915C2.895 9.06 2.4 8.205 2.04 7.3575C1.68 6.5025 1.5 5.685 1.5 4.905C1.5 4.395 1.59 3.9075 1.77 3.4575C1.95 3 2.235 2.58 2.6325 2.205C3.1125 1.7325 3.6375 1.5 4.1925 1.5C4.4025 1.5 4.6125 1.545 4.8 1.635C4.995 1.725 5.1675 1.86 5.3025 2.055L7.0425 4.5075C7.1775 4.695 7.275 4.8675 7.3425 5.0325C7.41 5.19 7.4475 5.3475 7.4475 5.49C7.4475 5.67 7.395 5.85 7.29 6.0225C7.1925 6.195 7.05 6.375 6.87 6.555L6.3 7.1475C6.2175 7.23 6.18 7.3275 6.18 7.4475C6.18 7.5075 6.1875 7.56 6.2025 7.62C6.225 7.68 6.2475 7.725 6.2625 7.77C6.3975 8.0175 6.63 8.34 6.96 8.73C7.2975 9.12 7.6575 9.5175 8.0475 9.915C8.4525 10.3125 8.8425 10.68 9.24 11.0175C9.63 11.3475 9.9525 11.5725 10.2075 11.7075C10.245 11.7225 10.29 11.745 10.3425 11.7675C10.4025 11.79 10.4625 11.7975 10.53 11.7975C10.6575 11.7975 10.755 11.7525 10.8375 11.67L11.4075 11.1075C11.595 10.92 11.775 10.7775 11.9475 10.6875C12.12 10.5825 12.2925 10.53 12.48 10.53C12.6225 10.53 12.7725 10.56 12.9375 10.6275C13.1025 10.695 13.275 10.7925 13.4625 10.92L15.945 12.6825C16.14 12.8175 16.275 12.975 16.3575 13.1625C16.4325 13.35 16.4775 13.5375 16.4775 13.7475Z"
                          stroke={theme.palette.warning.main}
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M13.875 6.75C13.875 6.3 13.5225 5.61 12.9975 5.0475C12.5175 4.53 11.88 4.125 11.25 4.125"
                          stroke={theme.palette.warning.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.5 6.75C16.5 3.8475 14.1525 1.5 11.25 1.5"
                          stroke={theme.palette.warning.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 500 }}
                    >
                      Phone Call
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="text.light"
                      sx={{ fontWeight: 400 }}
                    >
                      967
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="error.main"
                      sx={{ fontWeight: 400 }}
                    >
                      1.4%
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { border: 0 } }}>
                  <TableCell sx={{ width: "30px" }}>
                    <Avatar
                      sx={{ bgcolor: `${theme.palette.error.light}` }}
                      variant="rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                      >
                        <path
                          d="M12.75 0.999969H3.25C2.14543 0.999969 1.25 1.8954 1.25 2.99997V11C1.25 12.1045 2.14543 13 3.25 13H12.75C13.8546 13 14.75 12.1045 14.75 11V2.99997C14.75 1.8954 13.8546 0.999969 12.75 0.999969Z"
                          stroke={theme.palette.error.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.75 3.99997H1.25"
                          stroke={theme.palette.error.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.75 2.5H5.75"
                          stroke={theme.palette.error.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 500 }}
                    >
                      Via Portal
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="text.light"
                      sx={{ fontWeight: 400 }}
                    >
                      345
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="success.main"
                      sx={{ fontWeight: 400 }}
                    >
                      8.5%
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { border: 0 } }}>
                  <TableCell sx={{ width: "30px" }}>
                    <Avatar
                      sx={{ bgcolor: `${theme.palette.success.light}` }}
                      variant="rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M12.75 15.375H5.25C3 15.375 1.5 14.25 1.5 11.625V6.375C1.5 3.75 3 2.625 5.25 2.625H12.75C15 2.625 16.5 3.75 16.5 6.375V11.625C16.5 14.25 15 15.375 12.75 15.375Z"
                          stroke={theme.palette.success.main}
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.75 6.75L10.4025 8.625C9.63 9.24 8.3625 9.24 7.59 8.625L5.25 6.75"
                          stroke={theme.palette.success.main}
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 500 }}
                    >
                      Emails
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="text.light"
                      sx={{ fontWeight: 400 }}
                    >
                      12,346
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="success.main"
                      sx={{ fontWeight: 400 }}
                    >
                      0.3%
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { border: 0 } }}>
                  <TableCell sx={{ width: "30px" }}>
                    <Avatar
                      sx={{ bgcolor: `${theme.palette.info.light}` }}
                      variant="rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.8524 12.6225L14.1449 14.9925C14.2199 15.615 13.5524 16.05 13.0199 15.7275L9.87738 13.86C9.53238 13.86 9.19489 13.8375 8.86489 13.7925C9.41989 13.14 9.74989 12.315 9.74989 11.4225C9.74989 9.29249 7.90489 7.56752 5.62489 7.56752C4.75489 7.56752 3.95239 7.815 3.28489 8.25C3.26239 8.0625 3.25488 7.87499 3.25488 7.67999C3.25488 4.26749 6.21738 1.5 9.87738 1.5C13.5374 1.5 16.4999 4.26749 16.4999 7.67999C16.4999 9.70499 15.4574 11.4975 13.8524 12.6225Z"
                          stroke={theme.palette.info.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.75 11.4225C9.75 12.315 9.42001 13.14 8.86501 13.7925C8.12251 14.6925 6.945 15.27 5.625 15.27L3.6675 16.4325C3.3375 16.635 2.9175 16.3575 2.9625 15.975L3.15 14.4975C2.145 13.8 1.5 12.6825 1.5 11.4225C1.5 10.1025 2.205 8.93998 3.285 8.24998C3.9525 7.81498 4.755 7.5675 5.625 7.5675C7.905 7.5675 9.75 9.29247 9.75 11.4225Z"
                          stroke={theme.palette.info.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 500 }}
                    >
                      Direct massage
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="text.light"
                      sx={{ fontWeight: 400 }}
                    >
                      8,734
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="success.main"
                      sx={{ fontWeight: 400 }}
                    >
                      2.1%
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ "& td": { border: 0 } }}>
                  <TableCell sx={{ width: "30px" }}>
                    <Avatar
                      sx={{ bgcolor: `${theme.palette.warning.light}` }}
                      variant="rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M16.4775 13.7475C16.4775 14.0175 16.4175 14.295 16.29 14.565C16.1625 14.835 15.9975 15.09 15.78 15.33C15.4125 15.735 15.0075 16.0275 14.55 16.215C14.1 16.4025 13.6125 16.5 13.0875 16.5C12.3225 16.5 11.505 16.32 10.6425 15.9525C9.78 15.585 8.9175 15.09 8.0625 14.4675C7.2 13.8375 6.3825 13.14 5.6025 12.3675C4.83 11.5875 4.1325 10.77 3.51 9.915C2.895 9.06 2.4 8.205 2.04 7.3575C1.68 6.5025 1.5 5.685 1.5 4.905C1.5 4.395 1.59 3.9075 1.77 3.4575C1.95 3 2.235 2.58 2.6325 2.205C3.1125 1.7325 3.6375 1.5 4.1925 1.5C4.4025 1.5 4.6125 1.545 4.8 1.635C4.995 1.725 5.1675 1.86 5.3025 2.055L7.0425 4.5075C7.1775 4.695 7.275 4.8675 7.3425 5.0325C7.41 5.19 7.4475 5.3475 7.4475 5.49C7.4475 5.67 7.395 5.85 7.29 6.0225C7.1925 6.195 7.05 6.375 6.87 6.555L6.3 7.1475C6.2175 7.23 6.18 7.3275 6.18 7.4475C6.18 7.5075 6.1875 7.56 6.2025 7.62C6.225 7.68 6.2475 7.725 6.2625 7.77C6.3975 8.0175 6.63 8.34 6.96 8.73C7.2975 9.12 7.6575 9.5175 8.0475 9.915C8.4525 10.3125 8.8425 10.68 9.24 11.0175C9.63 11.3475 9.9525 11.5725 10.2075 11.7075C10.245 11.7225 10.29 11.745 10.3425 11.7675C10.4025 11.79 10.4625 11.7975 10.53 11.7975C10.6575 11.7975 10.755 11.7525 10.8375 11.67L11.4075 11.1075C11.595 10.92 11.775 10.7775 11.9475 10.6875C12.12 10.5825 12.2925 10.53 12.48 10.53C12.6225 10.53 12.7725 10.56 12.9375 10.6275C13.1025 10.695 13.275 10.7925 13.4625 10.92L15.945 12.6825C16.14 12.8175 16.275 12.975 16.3575 13.1625C16.4325 13.35 16.4775 13.5375 16.4775 13.7475Z"
                          stroke={theme.palette.warning.main}
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M13.875 6.75C13.875 6.3 13.5225 5.61 12.9975 5.0475C12.5175 4.53 11.88 4.125 11.25 4.125"
                          stroke={theme.palette.warning.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.5 6.75C16.5 3.8475 14.1525 1.5 11.25 1.5"
                          stroke={theme.palette.warning.main}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="medium"
                      color="text.main"
                      sx={{ fontWeight: 500 }}
                    >
                      Phone Call
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="text.light"
                      sx={{ fontWeight: 400 }}
                    >
                      967
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="medium"
                      color="error.main"
                      sx={{ fontWeight: 400 }}
                    >
                      1.4%
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

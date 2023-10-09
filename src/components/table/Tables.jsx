import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MenuIcon from "../icons/MenuIcon";
import { useTheme } from "@mui/material/styles";
import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles";
import ListIcon from "../icons/ListIcon";
const useStyles = makeStyles((theme) => ({
  breadcrumbsStyle: {
    // "& li a": {
    //   textDecoration: "none",
    //   fontSize: "14px",
    //   color: theme.palette.text.main,
    // },
    // "& li:last-child": {
    //   "& a": {
    //     color: theme.palette.text.fade,
    //     cursor:"default"
    //   },
    // },
  },
}));

const Tables = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div>
      <Paper sx={{ mb: 3 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs="auto">
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs="auto">
                {" "}
                <Avatar
                  sx={{
                    width: 44,
                    height: 44,
                    bgcolor: `${theme.palette.success.light}`,
                  }}
                >
                  <ListIcon color={theme.palette.success.main} />
                </Avatar>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="base"
                  color="text.main"
                  sx={{ fontWeight: 500 }}
                >
                  e-KYC Attempted
                </Typography>

                <Breadcrumbs
                  aria-label="breadcrumb"
                  className={classes.breadcrumbsStyle}
                >
                  <Link to="/">MUI</Link>
                  <Link to="/">Core</Link>
                  <Link to="#">Breadcrumbs</Link>
                </Breadcrumbs>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs="auto">
            <IconButton>
              <MenuIcon color={theme.palette.text.light} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ pb: 0 }}>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>STORE ID</TableCell>
                <TableCell>PASSWORD</TableCell>
                <TableCell>UPDATE</TableCell>
                <TableCell align="right">
                  <MenuIcon color={theme.palette.text.light} />
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
                    <MenuIcon color={theme.palette.text.light} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Grid container alignItems="center">
              <Grid item xs={12}> */}
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {/* </Grid>
            </Grid> */}
      </Paper>
    </div>
  );
};

export default Tables;

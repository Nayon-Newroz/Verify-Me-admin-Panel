import React from "react";
import { Badge, Container, FormControl, Grid, Paper } from "@mui/material";
const Dashboard = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper> My paper</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>My paper</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>My paper</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>My paper</Paper>
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

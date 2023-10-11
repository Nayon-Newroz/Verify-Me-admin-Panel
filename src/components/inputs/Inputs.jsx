import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import makeStyles from "@mui/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
  customInput: {
    "& label.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E0E3E7",
        borderRadius: 6,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
}));
const Inputs = () => {
  const classes = useStyles();
  return (
    <Paper sx={{ p: 3 }}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />

      <TextField
        id="outlined-basic"
        className={classes.customInput}
        label="Outlined"
        variant="outlined"
      />
    </Paper>
  );
};

export default Inputs;

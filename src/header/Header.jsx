import React from "react";
import { Badge, Container, FormControl, Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useTheme } from "@mui/material/styles";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Header = ({ toggleTheme }) => {
  const theme = useTheme();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        // component={Paper}
      >
        <Grid item xs={3}>
          <img src="/images/Logo.png" alt="logo" />
        </Grid>
        <Grid item xs={9} sx={{ textAlign: "right" }}>
          <FormControl
            sx={{ m: 1, width: "100ch" }}
            variant="outlined"
            size="small"
          >
            <OutlinedInput
              id="outlined-adornment-password"
              //   type={showPassword ? "text" : "password"}
              placeholder="Search (Ctrl+/)"
              startAdornment={
                <InputAdornment position="start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7.66659 14C11.1644 14 13.9999 11.1644 13.9999 7.66665C13.9999 4.16884 11.1644 1.33331 7.66659 1.33331C4.16878 1.33331 1.33325 4.16884 1.33325 7.66665C1.33325 11.1644 4.16878 14 7.66659 14Z"
                      stroke="#555555"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.6666 14.6666L13.3333 13.3333"
                      stroke="#555555"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="7"
                      viewBox="0 0 13 7"
                      fill="none"
                    >
                      <path
                        d="M11.7206 0.966614L7.37398 5.31328C6.86064 5.82661 6.02064 5.82661 5.50731 5.31328L1.16064 0.966614"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <IconButton onClick={toggleTheme}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
            >
              <path
                d="M2.63977 13.455C3.02978 19.0341 7.76394 23.5733 13.4298 23.8225C17.4273 23.9958 21.0023 22.1325 23.1473 19.1966C24.0356 17.9941 23.5589 17.1925 22.0748 17.4633C21.3489 17.5933 20.6014 17.6475 19.8214 17.615C14.5239 17.3983 10.1906 12.9675 10.1689 7.73496C10.1581 6.32662 10.4506 4.99412 10.9814 3.78079C11.5664 2.43746 10.8623 1.79829 9.50811 2.37246C5.21811 4.18162 2.28227 8.50412 2.63977 13.455Z"
                stroke="#555555"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </IconButton>

          <IconButton>
            <Badge badgeContent={4} color="error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
              >
                <path
                  d="M13.4409 6.97668V10.5842"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M13.4625 2.16663C9.47581 2.16663 6.24747 5.39496 6.24747 9.38163V11.6566C6.24747 12.3933 5.94414 13.4983 5.56497 14.1266L4.18914 16.4233C3.34414 17.8425 3.92914 19.4241 5.48914 19.9441C10.6675 21.6666 16.2683 21.6666 21.4466 19.9441C22.9091 19.4566 23.5375 17.745 22.7466 16.4233L21.3708 14.1266C20.9916 13.4983 20.6883 12.3825 20.6883 11.6566V9.38163C20.6775 5.41663 17.4275 2.16663 13.4625 2.16663Z"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M17.0485 20.3883C17.0485 22.3708 15.4235 23.9958 13.441 23.9958C12.4552 23.9958 11.5452 23.5841 10.8952 22.9341C10.2452 22.2841 9.8335 21.3741 9.8335 20.3883"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
            </Badge>
          </IconButton>
          {/* <Tooltip title="Open settings"> */}
          <Button
            onClick={handleOpenUserMenu}
            sx={{ textTransform: "none" }}
            startIcon={
              <Badge
                variant="dot"
                color="success"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Avatar alt="Remy Sharp" src="/images/user.png" />
              </Badge>
            }
            endIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  d="M12.9401 1.71246L8.05006 6.60246C7.47256 7.17996 6.52756 7.17996 5.95006 6.60246L1.06006 1.71246"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          >
            <Typography
              variant="subtitle2"
              sx={{ color: `${theme.palette.text.main}` }}
            >
              &nbsp;username
              <br />
              <label
                style={{
                  fontSize: "12px",
                  color: `${theme.palette.text.light}`,
                }}
              >
                User Type
              </label>
            </Typography>
          </Button>
          {/* </Tooltip> */}
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;

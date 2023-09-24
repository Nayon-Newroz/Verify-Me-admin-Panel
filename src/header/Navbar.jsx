import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Button from "@mui/material/Button";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
// import RefreshToken from "../../services/RefreshToken";

const useStyles = makeStyles((theme) => ({
  button_style: {
    color: `${theme.palette.text.main} !important`,
    fontWeight: "500 !important",
  },

  active_button_style: {
    background: `${theme.palette.primary.main} !important`,
    color: `#fff !important`,
    "& span svg path": { stroke: "#fff !important" },
  },
}));
const Navbar = () => {
  const theme = useTheme();
  let pathname = useLocation().pathname;
  const classes = useStyles();
  const [active, setActive] = useState("Dashboard");

  const checkSupportsRoute = () => {
    const userPathname = [
      "/request-ticket",
      "/ticket-details",
      "/service-history",
      "/incident-list",
    ];
    if (userPathname.includes(pathname)) {
      return true;
    } else {
      return false;
    }
  };
  const checkUserRoute = () => {
    const userPathname = [
      "/user-list",
      "/profile-creation",
      "/user-access-control",
    ];
    if (userPathname.includes(pathname)) {
      return true;
    } else {
      return false;
    }
  };
  const checkConfigurationRoute = () => {
    const userPathname = [
      "/country",
      "/role",
      "/department",
      "/category",
      "/quick-list",
      "/urgency",
      "/company",
    ];
    if (userPathname.includes(pathname)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.dropdown}>
          <Button
            disableRipple
            disableElevation
            className={`${classes.button_style} ${
              pathname === "/dashboard" ? classes.active_button_style : null
            }`}
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
                  stroke={`${theme.palette.text.light}`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9999 14.2083C12.2656 14.2083 13.2916 13.1823 13.2916 11.9167C13.2916 10.651 12.2656 9.625 10.9999 9.625C9.73427 9.625 8.70825 10.651 8.70825 11.9167C8.70825 13.1823 9.73427 14.2083 10.9999 14.2083Z"
                  stroke={`${theme.palette.text.light}`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            component={Link}
            to="/dashboard"
          >
            Dashboard
          </Button>
        </div>
        <div className={styles.dropdown}>
          <Button
            disableRipple
            disableElevation
            className={`${classes.button_style} ${
              checkSupportsRoute() ? classes.active_button_style : null
            }`}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M5.16398 14.5842C5.10071 12.3546 5.33656 10.1114 6.06783 8.25781C7.15769 5.49525 9.785 3.6869 12.6536 4.45553C15.5221 5.22416 17.2245 8.1727 16.4559 11.0413C16.0245 12.6509 15.6009 14.0447 15.7604 15.7355M11.2614 9.64958C9.91711 12.7863 10.3652 15.4749 10.8135 17.7154M13.2973 16.8247C12.6885 13.8953 13.122 12.5801 13.8526 10.3636L13.8586 10.3454C14.2429 8.91114 13.3918 7.43687 11.9575 7.05255C10.5232 6.66824 9.04894 7.51941 8.66462 8.95369C7.94388 11.8116 7.39245 13.6082 7.84521 16.3766M16.6019 0.916687L18.8427 0.916687C20.0802 0.916687 21.0834 1.9199 21.0834 3.15743V5.39817M16.6019 21.0834H18.8427C20.0802 21.0834 21.0834 20.0801 21.0834 18.8426V16.6019M5.39823 0.916687L3.15749 0.916687C1.91996 0.916687 0.916748 1.9199 0.916748 3.15743L0.916748 5.39817M5.39823 21.0834H3.15749C1.91996 21.0834 0.916748 20.0801 0.916748 18.8426L0.916748 16.6019"
                  stroke={`${theme.palette.text.light}`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            endIcon={<KeyboardArrowDownOutlinedIcon />}
          >
            E-KYC Profile
          </Button>
          <div className={styles.dropdown_content}>
            <Link to="/request-ticket" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>Request ticket</div>
              </section>
            </Link>
            <Link to="/ticket-details" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>Ticket details</div>
              </section>
            </Link>
            <Link to="/service-history" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Service history
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/incident-list" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Incident list
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>
              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Demo 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>demo 2</div>
                </Link>
              </section>
            </Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Button
            disableRipple
            disableElevation
            className={`${classes.button_style} ${
              checkUserRoute() ? classes.active_button_style : null
            }`}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M3.36426 2.29169V13.2642C3.36426 14.1625 3.78592 15.015 4.51009 15.5559L9.28592 19.1309C10.3034 19.8917 11.7059 19.8917 12.7234 19.1309L17.4992 15.5559C18.2234 15.015 18.6451 14.1625 18.6451 13.2642V2.29169H3.36426Z"
                  stroke={`${theme.palette.text.light}`}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M1.83325 2.29169H20.1666"
                  stroke={`${theme.palette.text.light}`}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M7.33325 7.33331H14.6666"
                  stroke={`${theme.palette.text.light}`}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.33325 11.9167H14.6666"
                  stroke={`${theme.palette.text.light}`}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            endIcon={<KeyboardArrowDownOutlinedIcon />}
          >
            Billing
          </Button>
          <div className={styles.dropdown_content}>
            <Link to="/user-list" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  User list
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/profile-creation" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Profile creation
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/user-access-control" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  User access control
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Button
            disableRipple
            disableElevation
            className={`${classes.button_style} ${
              checkConfigurationRoute() ? classes.active_button_style : null
            }`}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M1.83325 11.5591H17.4166"
                  stroke={`${theme.palette.text.light}`}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.4166 9.42332V15.9775C17.3891 18.59 16.6741 19.25 13.9516 19.25H5.29828C2.52995 19.25 1.83325 18.5625 1.83325 15.8308V9.42332C1.83325 6.94832 2.41075 6.15082 4.58325 6.02248C4.80325 6.01332 5.04161 6.00415 5.29828 6.00415H13.9516C16.7199 6.00415 17.4166 6.69165 17.4166 9.42332Z"
                  stroke={`${theme.palette.text.light}`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.1666 6.16917V12.5767C20.1666 15.0517 19.5891 15.8492 17.4166 15.9775V9.42333C17.4166 6.69167 16.7199 6.00417 13.9516 6.00417H5.29828C5.04161 6.00417 4.80325 6.01333 4.58325 6.0225C4.61075 3.41 5.32578 2.75 8.04828 2.75H16.7016C19.4699 2.75 20.1666 3.4375 20.1666 6.16917Z"
                  stroke={`${theme.palette.text.light}`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.8125 16.3258H6.38914"
                  stroke={`${theme.palette.text.light}`}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.35083 16.3258H11.5042"
                  stroke={`${theme.palette.text.light}`}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            endIcon={<KeyboardArrowDownOutlinedIcon />}
          >
            My Card’s
          </Button>
          <div className={styles.dropdown_content}>
            <Link to="/country" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Counery
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/role" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Role
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/department" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Department
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/category" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Category
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/quick-list" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Quick list
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/urgency" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Urgency
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
            <Link to="/company" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Copmany
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Test 1</div>
                </Link>
                <Link to="#" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>test 2</div>
                </Link>
              </section>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

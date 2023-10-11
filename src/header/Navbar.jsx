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
import HomeIcon from "../components/icons/HomeIcon";
import FingerPrintIcon from "../components/icons/FingerPrintIcon";
import BillIcon from "../components/icons/BillIcon";
import CardsIcon from "../components/icons/CardsIcon";
// import RefreshToken from "../../services/RefreshToken";

const useStyles = makeStyles((theme) => ({
  button_style: {
    color: `${theme.palette.text.main} !important`,
    fontWeight: "500 !important",
    padding: "8px 10px",
    borderRadius: "6px",
    fontSize: "0.875rem",
    textTransform: "none",
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
  const [active, setActive] = useState("");

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
  const checkPagesRoute = () => {
    const userPathname = [
      "/fonts",
      "/buttons",
      "/cards",
      "/inputs",
      "/accordions",
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
              pathname === "/" ? classes.active_button_style : null
            }`}
            startIcon={<HomeIcon color={theme.palette.text.light} />}
            component={Link}
            to="/"
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
            startIcon={<FingerPrintIcon color={theme.palette.text.light} />}
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
            startIcon={<BillIcon color={theme.palette.text.light} />}
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
            startIcon={<CardsIcon color={theme.palette.text.light} />}
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
        <div className={styles.dropdown}>
          <Button
            disableRipple
            disableElevation
            className={`${classes.button_style} ${
              checkPagesRoute() ? classes.active_button_style : null
            }`}
            startIcon={<BillIcon color={theme.palette.text.light} />}
            endIcon={<KeyboardArrowDownOutlinedIcon />}
          >
            Pages
          </Button>
          <div className={styles.dropdown_content}>
            <Link to="/fonts" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Fonts
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
            <Link to="/buttons" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Buttons
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
            <Link to="/table" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Table
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
            <Link to="/cards" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Cards
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
            <Link to="/inputs" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Inputs
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
            <Link to="/accordions" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Accordions
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
            <Link to="/charts" className={styles.nav_container}>
              <section className={styles.nav_item}>
                <div className={styles.left_Icon}>
                  <AcUnitOutlinedIcon />
                </div>
                <div className={styles.list_item_title}>
                  Charts
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </section>

              <section className={styles.nav_subitem_dropdown_content}>
                <Link to="/column-chart" className={styles.nav_item}>
                  <div className={styles.left_Icon}>
                    <AcUnitOutlinedIcon />
                  </div>
                  <div className={styles.list_item_title}>Column Chart</div>
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

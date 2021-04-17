import { Avatar, Tooltip } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import HistoryIcon from "@material-ui/icons/History";
import "./HomeHeader.css";
import { Login } from "../MainComponents/Login";
import LogoutModal from "../MainComponents/Logout";
import UserContext from "../Context/UserContext";
import AlertModal from "../MainComponents/Alert";

const HomeHeader = (props) => {
  const [userInfo, setUserInfo] = useContext(UserContext);
  const [modal, setmodal] = useState(false);
  const [open, setopen] = useState(false);
  const [alert, setAlert] = useState(false);
  const { push } = useHistory();
  const navigate = () => {
    if (props.images) push("/home");
    else push("/home/images");
  };
  const toggle = () => setmodal(!modal);
  const toggleLogout = () => setopen(!open);
  const toggleAlert = () => setAlert(!alert);
  const seeHistory = () => {
    if (userInfo.userEmail !== "" && userInfo.userEmail !== null) {
      push("/history");
    } else {
      toggleAlert();
    }
  };
  return (
    <>
      <nav className="navbar homeHeader">
        <ul className="navbar nav ml-auto">
          <li className="nav-item pointer">
            <a className="nav-link hnl" onClick={navigate}>
              {props.images ? "Search" : "Images"}
            </a>
          </li>
          <li className="nav-item pointer">
            <a
              className="nav-link hnl"
              onClick={
                userInfo.userEmail === "" || userInfo.userEmail === null
                  ? toggle
                  : toggleLogout
              }
            >
              <Tooltip
                title={
                  userInfo.userEmail === "" || userInfo.userEmail === null
                    ? "login"
                    : "logout"
                }
              >
                <Avatar />
              </Tooltip>
            </a>
          </li>
          <li className="nav-item pointer">
            <a className="nav-link hnl">
              <Tooltip title="My History">
                <HistoryIcon onClick={seeHistory} />
              </Tooltip>
            </a>
          </li>
        </ul>
      </nav>
      <Login modal={modal} toggle={toggle} />
      <LogoutModal modal={open} toggle={toggleLogout} />
      <AlertModal
        modal={alert}
        toggle={toggleAlert}
        text={"Please login/Signup to access history"}
      />
    </>
  );
};

export default HomeHeader;

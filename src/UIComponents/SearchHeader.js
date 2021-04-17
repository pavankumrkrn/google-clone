import { Avatar, Tooltip } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HistoryIcon from "@material-ui/icons/History";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import React, { useContext, useState } from "react";
import "./searchHeader.css";
import { useHistory, useParams } from "react-router-dom";
import UserContext from "../Context/UserContext";
import AlertModal from "../MainComponents/Alert";
import LogoutModal from "../MainComponents/Logout";
import { Login } from "../MainComponents/Login";

const SearchHeader = () => {
  const [userInfo, setUserInfo] = useContext(UserContext);
  const [modal, setmodal] = useState(false);
  const [open, setopen] = useState(false);
  const [alert, setAlert] = useState(false);
  const params = useParams();
  const { push } = useHistory();
  const [text, setText] = React.useState(params.text);
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
  const handleText = () => {
    if (text !== "") {
    }
    // push("/search/" + text + "/" + params.type);
  };
  React.useEffect(() => {}, [params.type, params.text]);
  return (
    <div className="searchNavbar sticky-top">
      <nav className="navbar">
        <a href="#" className="navbar-brand mb-auto" onClick={() => push("/")}>
          <img
            src="https://download.logo.wine/logo/Google/Google-Logo.wine.png"
            alt=""
            className="gg"
          />
        </a>
        <ul className="navbar nav ml-auto mr-auto">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              push("/search/" + text + "/" + params.type);
            }}
          >
            <div className="searchHead">
              <div className="p-1">
                <SearchIcon />
              </div>

              <input
                type="text"
                className="gInput"
                required
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  handleText();
                }}
              />
            </div>
            <button type="submit" hidden></button>
          </form>
        </ul>
        <ul className="navbar nav ml-auto mb-auto notchange">
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
      <nav className="navbar bottomNavbar container">
        <div className="items mr-auto">
          <div
            className={params.type === "all" ? "item mt-1 active" : "item mt-1"}
            onClick={() => push("/search/" + params.text + "/all")}
          >
            <SearchIcon className="p-1" />
            <p className="ml-1">All</p>
          </div>
          <div
            className={
              params.type === "news" ? "item mt-1 active" : "item mt-1"
            }
            onClick={() => push("/search/" + params.text + "/news")}
          >
            <ReceiptIcon className="p-1" />
            <p className="ml-1">News</p>
          </div>
          <div
            className={
              params.type === "imagesearch" ? "item mt-1 active" : "item mt-1"
            }
            onClick={() => push("/search/" + params.text + "/imagesearch")}
          >
            <ImageSearchIcon className="p-1" />
            <p className="ml-1">Images</p>
          </div>
          <div
            className={
              params.type === "video" ? "item mt-1 active" : "item mt-1"
            }
            onClick={() => push("/search/" + params.text + "/video")}
          >
            <PlayCircleFilledIcon className="p-1" />
            <p className="ml-1">Videos</p>
          </div>
        </div>
      </nav>
      <Login modal={modal} toggle={toggle} />
      <LogoutModal modal={open} toggle={toggleLogout} />
      <AlertModal
        modal={alert}
        toggle={toggleAlert}
        text={"Please login/Signup to access history"}
      />
    </div>
  );
};

export default SearchHeader;

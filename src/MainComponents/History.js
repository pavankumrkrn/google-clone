import { Tooltip } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import UserContext from "../Context/UserContext";
import { getHistory } from "../APICalls/userOperations";
import LogoutModal from "./Logout";
import "./History.css";

const History = () => {
  const { push } = useHistory();
  const [userInfo] = useContext(UserContext);
  const [history, sethistory] = useState([]);
  const [open, setopen] = useState(false);
  const [text, settext] = useState("");

  // const findItems = () => {
  //   console.log(text);
  //   if (text !== "") {
  //     sethistory(
  //       history.map((i) => {
  //         if (i.title.includes(text)) {
  //           return i;
  //         }
  //       })
  //     );
  //   } else {
  //     getHistry();
  //   }
  // };

  const getHistry = async () => {
    const resp = await getHistory(userInfo.userEmail);
    console.log(resp);
    if (resp.code === "green") sethistory(resp.data);
  };
  useEffect(getHistry, []);
  const toggleLogout = () => setopen(!open);
  console.log(history);
  return (
    <>
      <nav class="navbar navbar-expand bg-primary">
        <a class="navbar-brand text-white" href="#">
          History
        </a>
        {/* <ul class="m-auto">
          <div className="row">
            <div className="col-sm-12">
              <input
                class="form-control historyInput"
                type="search"
                placeholder="Search History"
                aria-label="Search"
                value={text}
                onChange={(e) => {
                  settext(e.target.value);
                  findItems();
                }}
              />
            </div>
          </div>
        </ul> */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item pointer text-white history">
            <Tooltip title="back to Search">
              <ArrowBackIcon onClick={() => push("/home")} />
            </Tooltip>
          </li>
          <li className="nav-item pointer text-white history">
            <Tooltip title="Log-Out">
              <ExitToAppIcon onClick={toggleLogout} />
            </Tooltip>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="card mt-3">
          <div className="card-body">
            <div className="card-title">My History</div>
            <hr />
            <div className="card-text">
              {history.length ? (
                <>
                  {history.map((i, index) => {
                    return (
                      <>
                        <div className="row hisEntry" key={"his" + index}>
                          <div className="col-4">
                            <p className="text-center">
                              <b>{i.title}</b>
                            </p>
                          </div>
                          <div className="col-8">
                            <p
                              className="text-left pointer"
                              onClick={() => window.open(i.link)}
                            >
                              {i.link}
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <LogoutModal modal={open} toggle={toggleLogout} />
    </>
  );
};

export default History;

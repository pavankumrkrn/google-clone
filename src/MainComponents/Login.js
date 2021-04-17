import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import AlertModal from "./Alert";
import { authenticate } from "../APICalls/userOperations";
import UserContext from "../Context/UserContext";

export const Login = (props) => {
  const [userInfo, setUserInfo] = useContext(UserContext);
  const [mode, setMode] = React.useState(false);
  const [match, setMatch] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cPassword, setCPassword] = React.useState("");
  const { push } = useHistory();
  const [modal, setModal] = React.useState(false);
  const [text, setText] = React.useState("");
  const toggle = () => setModal(!modal);
  const handleSubmit = async (e, value) => {
    e.preventDefault();
    if (mode) {
      if (password !== cPassword) {
        setMatch(true);
        setTimeout(() => {
          setMatch(false);
        }, 1000);
      } else {
        let response = await authenticate({ name, email, password }, "signup");
        console.log(response);
        if (response.code === "green") {
          setMode(!mode);
        } else {
          alert("SignUp Failed");
          props.toggle();
        }
      }
    } else {
      let response = await authenticate({ email, password }, "login");
      console.log(response);
      if (response.code === "green") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userEmail", response.data.userEmail);
        setUserInfo({
          userEmail: response.data.userEmail,
          token: response.data.token,
        });
        alert("Login SuccessFul");
        props.toggle();
      } else {
        alert("Login Failed");
        props.toggle();
      }
    }
  };
  return (
    <div>
      <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>
          {!mode ? "Login" : "SignUp"}
        </ModalHeader>
        <ModalBody>
          <form
            action=""
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            {mode ? (
              <>
                <div className="row ml-2 mr-2 mb-3">
                  <div className="col-sm-12">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      placeholder="Please enter username"
                      value={name}
                      required
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </>
            ) : null}
            <div className="row ml-2 mr-2 mb-3">
              <div className="col-sm-12">
                <label htmlFor="email">Email Id</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  placeholder="Please enter your email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row ml-2 mr-2 mb-3">
              <div className="col-sm-12">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  placeholder="Please enter your password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            {mode ? (
              <>
                <div className="row ml-2 mr-2 mb-3">
                  <div className="col-sm-12">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control"
                      value={cPassword}
                      placeholder="Please enter your email"
                      required
                      onChange={(e) => {
                        setCPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </>
            ) : null}
            {match && mode ? (
              <div className="row ml-2 mr-2 mb-3 mt-5">
                <div className="col-sm-12">
                  <p className="text-center text-danger">
                    Passwords didnot match
                  </p>
                </div>
              </div>
            ) : null}
            <div className="row ml-2 mr-2 mb-5 mt-5">
              <div className="col-sm-12 text-center">
                <button className="btn btn-outline-primary" type="submit">
                  {!mode ? "Login" : "SignUp"}
                </button>
              </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
              <a href="#" onClick={() => setMode(!mode)}>
                Switch to {mode ? "Login" : "SignUp"}
              </a>
            </div>
          </form>
          <AlertModal modal={modal} toggle={toggle} text={text} />
        </ModalBody>
      </Modal>
    </div>
  );
};

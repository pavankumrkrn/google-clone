import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { MyContext } from "./Context/MyContext";
import UserContext from "./Context/UserContext";
import History from "./MainComponents/History";
import Home from "./MainComponents/Home";
import Search from "./MainComponents/Search";

function App() {
  const [context, setContext] = React.useState([]);
  const [userContext, setuserContext] = useState({
    userEmail: localStorage.getItem("userEmail"),
    token: localStorage.getItem("token"),
  });

  return (
    <UserContext.Provider value={[userContext, setuserContext]}>
      <MyContext.Provider value={[context, setContext]}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path={"/home"} exact={true} component={Home} />
              <Route path={"/home/:images"} exact={true} component={Home} />
              <Route
                path={"/search/:text/:type"}
                exact={true}
                component={Search}
              />
              <Route path={"/history"} exact={true} component={History} />
              <Route path={"/"} exact={true} component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
      </MyContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

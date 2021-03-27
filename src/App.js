import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { MyContext } from './Context/MyContext';
import Home from './MainComponents/Home';
import Search from './MainComponents/Search';

function App() {
  const [context, setContext] = React.useState([])
  return (
    <MyContext.Provider value={[context, setContext]}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path={'/home'} exact={true} component={Home} />
            <Route path={'/home/:images'} exact={true} component={Home} />
            <Route path={'/search/:text/:type'} exact={true} component={Search} />
            <Route path={'/'} exact={true} component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App;

import React from 'react';
import './App.css';
import Home from './routes/home-page/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './routes/login-page/Login';
import Friend from './routes/friends/Friend';
import Groups from './routes/groups/Groups';
import Profil from './routes/profil/Profil';
import Messenger from './routes/messenger/Messenger';


function App() {
  const user = true;
  return (
    <Router>
    <div className="app">
      <Switch>
         {
           user ?
           <>
           <Route exact path="/" component={Home} />
           <Route exact path="/friend" component={Friend} />
           <Route exact path="/groups" component={Groups} />
           <Route exact path="/profill" component={Profil} />
           <Route exact path="/messenger" component={Messenger} />
           </>
           :
           <Login/>
            
         }
      </Switch>
    </div>
    </Router>
  );
};

export default App;

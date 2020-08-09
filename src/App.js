import React from 'react'
import './App.scss'
import './components/animation/hover.scss'
import {HashRouter as Router , Route , Switch} from 'react-router-dom'
import {Home} from './Home.js'
import {ProfileNav} from './components/ProfileNav.js'
import {ProfileFooter} from './components/ProfileFooter.js'

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <ProfileNav />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <ProfileFooter />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;

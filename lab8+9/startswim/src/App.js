import React,{Component} from 'react';


import TopNavBar from './components/TopNavBar';
import Welcome from './components/Welcome';
import Course from './components/Course';
import Team from './components/Team';
import Register from './components/Register';



import Mistake from './components/Mistake';
import Footer from './components/Footer';


import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {

  render () {
    return (

      <div className = "App" key={Math.random} >

      <BrowserRouter>
            
          <TopNavBar className="navigation"/>

            <Switch>
              <Route exact path='/welcome' component={Welcome} />
              <Route exact path='/course' component={Course} />
              <Route exact path='/team' component={Team} />
              <Route exact path='/register' component={Register} />
             
              
              <Route exact path='/mistake' component={Mistake} />
              
              <Route exact path='/' component={Welcome} />
              <Route render={() => <Redirect to="/mistake"/>} />
            </Switch>

      </BrowserRouter> 

      <Footer />

      </div>

    );
  }
}

export default App

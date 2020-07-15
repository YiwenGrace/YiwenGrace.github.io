import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import Logo from "../img/favicon.jpg";
//Logo from https://www.vectorstock.com/royalty-free-vector/cartoon-swimming-pool-interior-card-poster-vector-20994010

class TopNavBar extends Component {
    render() {
        return (
            <Navbar bg="info" variant="grey" key={Math.random}>
            <div className="navbrand"><NavLink to='/welcome' className="link"><img src={Logo} alt="Logo" width="250px" height="250px"/>  Start Swim</NavLink></div>
            <Nav className="mr-auto">
              
              <div className="navlink"><NavLink to='/course' className="link">Swimming Courses</NavLink></div>
              
              <div className="navlink"><NavLink to='/team' className="link">Instructor Team</NavLink></div>
             
              <div className="navlink"><NavLink to='/register' className="link">Register</NavLink></div>
              
              
            </Nav>

            
          </Navbar>
          
        )
    }
}

export default TopNavBar
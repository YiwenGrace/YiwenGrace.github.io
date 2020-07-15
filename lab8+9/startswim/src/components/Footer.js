import React from 'react'
import {Navbar} from 'react-bootstrap';


const Footer = () => {

    return (
        <div className="bottom" key={Math.random}> 
        <br/><br/><br/><br/><br/>
            <Navbar sticky="bottom" bg="info" variant="dark">
                <Navbar.Text><b>Website by: </b>Yiwen Liu 8943192</Navbar.Text>
            </Navbar>
        </div>
    )
}

export default Footer
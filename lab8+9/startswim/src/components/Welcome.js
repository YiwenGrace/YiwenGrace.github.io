import React from 'react'
import {Link} from "react-router-dom"
import {Container,Jumbotron} from 'react-bootstrap'

const Welcome = () => {
    return (
        <Container key={Math.random}>
        <br/><br/>
            <Jumbotron>
                <Link to="/WelcomeF">
                    <button type="button">French</button>
                </Link>
                <h1>Welcome to <i>Start Swim</i>,</h1>
                <br/>
                <p>Srart Swim has been offering swimming course for over 20 years. We have help many people enjoy swimming. The swimming courses are offered every afternoon from 1pm to 3pm. Our instructors will teach you based on your skill. So do not worry if you cannot come to class everyday. Just register a course and come. Good luck!</p> 
                <br/><br/>
            </Jumbotron> 
        </Container>
    )
}

export default Welcome
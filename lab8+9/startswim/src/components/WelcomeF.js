import React from 'react'
import {Link} from "react-router-dom"
import {Container,Jumbotron} from 'react-bootstrap'

const WelcomeF = () => {
    return (
        <Container key={Math.random}>
        <br/><br/>
            <Jumbotron>
                <Link to="/Welcome">
                    <button type="button">English</button>
                </Link>
                <h1>Bienvenue à <i>Start Swim</i>,</h1>
                <br/>
                <p>Srart Swim propose des cours de natation depuis plus de 20 ans. Nous avons aidé de nombreuses personnes à profiter de la natation. Les cours de natation sont proposés tous les après-midi de 13h à 15h. Nos instructeurs vous apprendront en fonction de vos compétences. Alors ne vous inquiétez pas si vous ne pouvez pas venir en classe tous les jours. Inscrivez-vous simplement un cours et venez. Bonne chance!</p> 
                <br/><br/>
            </Jumbotron> 
        </Container>
    )
}

export default WelcomeF
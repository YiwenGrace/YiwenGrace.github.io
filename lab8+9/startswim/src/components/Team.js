import React,{Component} from 'react';
import {Container,Jumbotron, Table} from 'react-bootstrap'
import Amy from "../img/amy.jpg";
import Bob from "../img/bob.png";
import Cindy from "../img/cindy.png";
//amy from https://www.google.com/imgres?imgurl=http%3A%2F%2Fclipart-library.com%2Fimages%2FAcbjreKc4.jpg&imgrefurl=http%3A%2F%2Fclipart-library.com%2Ffemale-cartoon-pictures.html&tbnid=ZexRPY91uJwCOM&vet=12ahUKEwjApMTqms7qAhUyAp0JHaFGDwcQMygUegUIARDhAQ..i&docid=iRoQ-BukgrEB9M&w=626&h=971&q=female%20cartoon&hl=en&ved=2ahUKEwjApMTqms7qAhUyAp0JHaFGDwcQMygUegUIARDhAQ
//bob from https://www.pinterest.ca/pin/57209857749829740/
//cindy from https://www.shutterstock.com/zh/image-vector/beautiful-young-strong-powerful-woman-winking-425306593

class Team extends Component {
    
    render() {
        return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1> Instructors Team</h1>
                    <p>Below are the instructors:</p> 
                    <Table striped bordered="1" hover size="sm" variant="dark">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Instructor Name</th>
                            <th>Course teached</th>
                            <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Amy</td>
                            <td>Butterfly Stroke</td>
                            <td><img src={Amy} alt="amy" width="200px" height="200px"/></td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Bob</td>
                            <td>Breast Stroke</td>
                            <td><img src={Bob} alt="bob" width="200px" height="200px"/></td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Cindy</td>
                            <td>Back Stroke</td>
                            <td><img src={Cindy} alt="cindy" width="200px" height="200px"/></td>
                            </tr>
                        </tbody>
                    </Table>
                </Jumbotron> 


            </Container>
        )
    }
}

export default Team
import React,{Component} from 'react';
import {Container,Jumbotron, Table} from 'react-bootstrap'
import Butterfly from "../img/butterfly.jpg";
import Breast from "../img/breast.jpg";
import Back from "../img/back.jpg";

//Butterfly from https://www.cleanpng.com/free/butterfly-stroke.html
//Breast from https://favpng.com/png_view/swim-cap-recreation-swimming-cartoon-png/psjT3Xwe
//Back from https://www.kissclipart.com/cartoon-clipart-backstroke-clip-art-nxb7ay/

class Course extends Component {
    
    render() {
        return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1> Swimming Courses</h1>
                    <p>Below are the swimming courses we offer: </p> 
                    <Table striped bordered="1" hover size="sm" variant="dark">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Course Type</th>
                            <th>Price</th>
                            <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Butterfly Stroke</td>
                            <td>$300</td>
                            <td><img src={Butterfly} alt="butterfly" width="200px" height="200px"/></td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Breast Stroke</td>
                            <td>$270</td>
                            <td><img src={Breast} alt="breast" width="200px" height="200px"/></td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Back Stroke</td>
                            <td>$260</td>
                            <td><img src={Back} alt="back" width="200px" height="200px"/></td>
                            </tr>
                        </tbody>
                    </Table>
                </Jumbotron> 

              

            </Container>
        )
    }
}

export default Course
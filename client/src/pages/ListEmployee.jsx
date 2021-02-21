import React from 'react';

//components
import ShowOneEmployee from './ShowOneEmployee';

//BootStrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
export default class ListEmployee extends React.Component {


    render(){
       
        return(
            <React.Fragment>
                <h1>All Employees</h1>
                <Container>
                <Row >
                    <Col className ={'showOneEmp'} lg = {5}>
                    <ShowOneEmployee fname= 'Koushik'  lname= 'Debnath' age= '26' 
                        grade= 'A' sex= 'M' salary= '*****' joinning_date='11-11-2042' 
                        email = 'kd@mail.com'  mobile= '0000000000' />
                    </Col>
                    <Col lg = {2}></Col>
                    <Col lg = {5}>
                    <ShowOneEmployee fname= 'Supratim'  lname= 'Chakraborty' 
                        age= '26' grade= 'A' sex= 'M' salary= '*****'
                        joinning_date='11-11-2042' email = 'kd@mail.com'  mobile= '0000000000' />
                    </Col>
                   
                    
                   
                </Row>
                </Container>
            </React.Fragment> 
        );
    }
}
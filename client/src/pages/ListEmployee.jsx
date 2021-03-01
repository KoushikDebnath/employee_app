import React from 'react';
import styled from 'styled-components';
//components
import ShowOneEmployee from './ShowOneEmployee';
//api
import {getAllEmployee} from '../api';
//BootStrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from 'react-bootstrap/Container';

export default class ListEmployee extends React.Component {

    state = {employees:[]};


    componentDidMount(){
        getAllEmployee()
            .then(response=>{
                    this.setState(()=>({
                        employees: response.data.data
                    }));
            })
            .catch(err => console.error(err));
    }

    

    render(){
       const Employee = styled.div`
            padding: 0;
       `;
  
        return(
            <React.Fragment>
                <h1 style={{textAlign:'center'}}>All Employees</h1>
                <Container>
                <Row >
                   { this.state.employees.map((emp,index) => ( 
                        <Col key = {index} className ={'showOneEmp'} lg = {5} 
                        style={{padding:'0',minWidth: '31rem',
                        margin: '1rem', height: '19rem'}}>
                        <Employee>                  
                            <ShowOneEmployee 
                            id = {emp._id}
                            fname = {emp.fname} 
                            lname= {emp.lname} 
                            age= {`${new Date(emp.DOB).getDate()}.${new Date(emp.DOB).getMonth() +1}.${new Date(emp.DOB).getFullYear()}`}
                            grade= {emp.grade}
                            gender= {emp.gender}
                            salary= {emp.salary}
                            joinning_date= {`${new Date(emp.joining_date).getDate()}.${new Date(emp.joining_date).getMonth() +1}.${new Date(emp.joining_date).getFullYear()}`} 
                            email = {emp.email}  
                            mobile= {emp.mobile}
                            history= {this.props.history} />
                        </Employee>
  
                    </Col> 
                    ))}
                </Row>
                </Container>
            </React.Fragment> 
        );
    }
}
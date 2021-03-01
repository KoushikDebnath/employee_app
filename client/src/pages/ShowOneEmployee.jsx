import React from 'react';
//styled-components
import styled from 'styled-components';
//Bootstrap
import Button from 'react-bootstrap/Button';

//api
import {deleteEmployee} from '../api';

export default class ShowOneEmployee extends React.Component {
    
   

    handleUpdate(id, history){
        history.push(`/updateemployee/${id}`);
    }

    handleDel(id){
        deleteEmployee(id)
            .then(()=>{
                window.location.reload();
                return;
            })
            .catch(e=> console.error(e));
    }

    render() {
        const ECard = styled.div`
        min-width: 30rem;
        display: grid;
        grid-template-column:auto auto;
        grid-template-row: auto auto auto auto auto auto;
        grid-gap: 1rem;
        padding: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `;
        const Name = styled.h3`
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        margin: auto;
    `;
        const Email = styled.div`
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
    `;
        const Mobile = styled.div`
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    `;
        const Grade = styled.div`
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 4;
    `;
        const Gender = styled.div`
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
    `;
        const Age = styled.div`
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 4;
        grid-row-end: 5;
    `;
        const Salary = styled.div`
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 5;
    `;
        const JDate = styled.div`
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 5;
        grid-row-end: 6;
    `;

        const UpdateBtn = styled.div`
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 6;
        grid-row-end: 7;
        margin:auto
    `;
        const DeleteBtn = styled.div`
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 6;
        grid-row-end: 7;
    `;



        return (
            <ECard>
                <Name>{this.props.fname + " " + this.props.lname}</Name>
                <Email><b>Email: </b>{this.props.email}</Email>
                <Mobile><b>Mobile: </b>{this.props.mobile}</Mobile>
                <Grade><b>Grade:</b> {this.props.grade}</Grade>
                <Gender><b>Gender:</b> {this.props.gender}</Gender>
                <Age><b>Date of Birth:</b> {this.props.age}</Age>
                <Salary> <b>Salary:</b> {this.props.salary}</Salary>
                <JDate> <b>Joining Date:</b> {this.props.joinning_date} </JDate>
                <UpdateBtn onClick = {() => this.handleUpdate(this.props.id,this.props.history)}><Button variant="info" href="#">Update</Button></UpdateBtn>
                <DeleteBtn onClick= {() =>this.handleDel(this.props.id)}><Button variant="danger" href="#">Delete</Button></DeleteBtn>
            </ECard>
        );

    }

}
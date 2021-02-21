import React from 'react';
//styled-components
import styled from 'styled-components';
//Bootstrap
import Button from 'react-bootstrap/Button';

export default class ShowOneEmployee extends React.Component {

    render() {

        const ECard = styled.div`
        min-width: 30rem;
        display: grid;
        grid-template-column:auto auto;
        grid-template-row: auto auto auto auto auto auto;
        grid-gap: 1rem;
        margin: 1rem;
        padding: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `;
        const Name = styled.div`
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
        margin: auto;
    `;
        const Mobile = styled.div`
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
        margin: auto;
    `;
        const Grade = styled.div`
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 4;
        margin: auto;
    `;
        const Gender = styled.div`
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
        margin: auto;
    `;
        const Age = styled.div`
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 4;
        grid-row-end: 5;
        margin: auto;
    `;
        const Salary = styled.div`
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 5;
        margin: auto;
    `;
        const JDate = styled.div`
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 5;
        grid-row-end: 6;
        margin: auto;
    `;

        const UpdateBtn = styled.div`
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 6;
        grid-row-end: 7;
        margin: auto;
    `;
        const DeleteBtn = styled.div`
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 6;
        grid-row-end: 7;
        margin: auto;
    `;



        return (
            <ECard>
                <Name>{this.props.fname + " " + this.props.lname}</Name>
                <Email>Email: {this.props.email}</Email>
                <Mobile>Mobile: {this.props.mobile}</Mobile>
                <Grade><span>Grade:</span> {this.props.grade}</Grade>
                <Gender><span>Gender:</span> {this.props.sex}</Gender>
                <Age><span>Age:</span> {this.props.age}</Age>
                <Salary> <span>Salary:</span> {this.props.salary}</Salary>
                <JDate> <span>Joining Date:</span> {this.props.joinning_date} </JDate>
                <UpdateBtn><Button variant="info" href="#">Update</Button></UpdateBtn>
                <DeleteBtn><Button variant="danger" href="#">Delete</Button></DeleteBtn>
            </ECard>
        );

    }

}
import React from 'react';
// import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class ShowOneEmployee extends React.Component{

render(){
    // const span = styled.span`
    //     font-size: 1.5em;
    //     font-weight: bold;
    //     padding: 0 5px;
    
    // `;
    return(

    <Row>
        <Row>
            <h2>{this.props.fname +" "+this.props.lname}</h2>
        </Row>
        <Row>
            <Col>
                <div className="key">Age: </div>
                <div className="value">{this.props.age}</div>
            </Col>
            <Col>
                <div className="key">Grade: </div>
                <div className="value">{this.props.grade}</div>
            </Col>
            <Col>
                <div className="key">Sex: </div>
                <div className="value">{this.props.sex}</div>
            </Col>


            <Row>
                <Col>
                    <div className="key">Salary: </div>
                    <div className="value">{this.props.salary}</div>
                </Col>
                <Col>
                    <div className="key">Joining Date: </div>
                    <div className="value">{this.props.joinning_date}</div>
                </Col>
            </Row>


            <Row>
                <Col>
                    <div className="key">Email: </div>
                    <div className="value">{this.props.email}</div>
                </Col>
                <Col>
                    <div className="key">Mobile: </div>
                    <div className="value">{this.props.mobile}</div>
                </Col>
            </Row>
        </Row>
    </Row>



   /* <div className = "card" style = {{width : '18 rem'}}>
        <div className="card-body">
             <h5 className="cart-span">{this.props.fname +" "+this.props.lname}</h5>
             <pre className="card-text">
                {this.props.email}
                {this.props.mobile}
            </pre>
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item"><span>Age:</span> {this.props.age}</li>
        <li className="list-group-item"><span>Grade:</span> {this.props.grade}</li>
        <li className="list-group-item"><span>Sex:</span> {this.props.sex}</li>     
        <li className="list-group-item"><span>Salary:</span> {this.props.salary}</li>     
        <li className="list-group-item"><span>Joining Date:</span> {this.props.joinning_date}</li>   
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Update</a>
          <a href="#" className="card-link">Delete</a>
        </div>
   
    </div>*/

    

    );

}

}
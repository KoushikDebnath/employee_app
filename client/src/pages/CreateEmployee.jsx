import React from 'react';
import {updateEmployee, getEmployee, createEmployee} from '../api';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
export default class CreateEmployee extends React.Component {

constructor(props){
super(props);
this.state ={
    fname:"",
    lname: "",
    age: "",
    grade: "",
    sex: "",
    salary: "",
    joining_date: "",
    email: "",
    mobile: ""
};

this.isLoaded = false;
this.empId= this.props.id;
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}


handleChange(event) {
    const name = event.target.name;
    const val = event.target.value;
 this.setState((prevState) => {
    prevState[name] = val;
    return prevState;
 });

}
handleSubmit(event) {
    event.preventDefault();
    if(this.isLoaded){
        updateEmployee(this.id, this.state);
    }
    else{
        createEmployee(this.state);
    }


}

conponentDidMount() {
    if(this.props.option === 'update'){
        const empDetails = getEmployee(this.props.id);
        if(empDetails) {
           this.isLoaded = true;
           this.setState({
            fname: empDetails.fname,
            lname: empDetails.lname,
            age: empDetails.age,
            grade: empDetails.grade,
            sex: empDetails.sex,
            salary: empDetails.salary,
            joining_date: empDetails.joining_date,
            email: empDetails.email,
            mobile: empDetails.mobile
           }); 
        }

    }
}



    render(){

        let title = "";

        if(this.props.option === 'update') {
           title =  'Update Employee Details'}
        else {
            title = 'Create New Employee' }

        return(
            <React.Fragment>
            <Container>
             <h1>{title}</h1> 
            <Form>
                <Form.Group controlId = "fname" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"  name="fname"  value={this.state.fname} onChange= {this.handleChange}/>
                </Form.Group>
                <Form.Group controlId = "lname">
                    <Form.Label>last Name</Form.Label>
                    <Form.Control type="text" className="form-control" name="lname" value={this.state.lname} onChange= {this.handleChange}/>
                </Form.Group>

                <Form.Group controlId = "age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" min= "20" max= "60" className="form-control" name="age" value={this.state.age} onChange= {this.handleChange}/>
                </Form.Group>

                <Form.Group controlId = "grade">
                    <Form.Label>Grade</Form.Label>
                    <Form.Control as="select" name = "grade" defaultValue = {this.state.grade}  onChange={this.handleChange}>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId = "sex">
                    <Form.Label>Sex</Form.Label>
                    <Form.Control as="select" name = "sex" defaultValue = {this.state.sex} onChange={this.handleChange}>
                    <option>M</option>
                    <option>F</option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group controlId = "salary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="number" className="form-control" name="salary" value={this.state.salary} onChange= {this.handleChange}/>
                </Form.Group>
                <Form.Group controlId = "joining_date">
                    <Form.Label>Joining Date</Form.Label>
                    <Form.Control type="date" className="form-control" name="joining_date" value={this.state.joining_date} onChange= {this.handleChange}/>
                </Form.Group>
                <Form.Group controlId = "email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" className="form-control" name="email" value={this.state.email} onChange= {this.handleChange}/>
                </Form.Group>
                <Form.Group controlId = "mobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" min= "7000000000" max ="9000000000" className="form-control" name="mobile" value={this.state.mobile} onChange= {this.handleChange}/>
                </Form.Group>

                <button type="submit" className="btn btn-primary" onClick = {this.handleSubmit}>Submit</button>
            </Form>
            </Container>
          
            </React.Fragment>
        );
    }
}
import React from 'react';
//api
import {updateEmployee, getEmployee, createEmployee} from '../api';
//Bootstrap
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


export default class CreateEmployee extends React.Component {

constructor(props){
super(props);
this.state ={
    fname:"",
    lname: "",
    DOB: "",
    grade: "A",
    gender: "M",
    salary: "",
    joining_date: "",
    email: "",
    mobile: ""
};

this.isUpdate = false;
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
    if(this.isUpdate){
        updateEmployee(this.props.match.params.id, this.state)
        .then(() => this.props.history.push('/'))
        .catch(e=>console.error(e));
    }
    else{
        createEmployee(this.state)
        .then(() => this.props.history.push('/'))
        .catch(e=> console.error(e));
    }


}

componentDidMount() {
    if(this.props.option === 'update'){
        getEmployee(this.props.match.params.id)
            .then((response) => {
                const empDetails = response.data.data;
                this.isUpdate = true;
                this.setState({
                 fname: empDetails.fname,
                 lname: empDetails.lname,
                 DOB:`${new Date(empDetails.DOB).getFullYear()}-${new Date(empDetails.DOB).getMonth() +1>9 ? new Date(empDetails.DOB).getMonth()+1:`0${new Date(empDetails.DOB).getMonth()+1}`}-${new Date(empDetails.DOB).getDate()>9?new Date(empDetails.DOB).getDate():`0${new Date(empDetails.DOB).getDate()}`}`,
                 grade: empDetails.grade,
                 gender: empDetails.gender,
                 salary: empDetails.salary,
                 joining_date: `${new Date(empDetails.joining_date).getFullYear()}-${new Date(empDetails.joining_date).getMonth() +1?new Date(empDetails.joining_date).getMonth() +1:`0${new Date(empDetails.joining_date).getMonth() +1}`}-${new Date(empDetails.joining_date).getDate()?new Date(empDetails.joining_date).getDate():`0${new Date(empDetails.joining_date).getDate()}`}`,
                 email: empDetails.email,
                 mobile: empDetails.mobile
                }); 
                
                return;
             })
             .catch((e) => console.error(e));
        

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
                    <Form.Control type="text" className="form-control" name="lname" 
                    value={this.state.lname} onChange= {this.handleChange}/>
                </Form.Group>

                <Form.Group controlId = "DOB">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" className="form-control" name="DOB" 
                    value={this.state.DOB} onChange= {this.handleChange}/>
                </Form.Group>

              
                <Form.Group controlId = "grade">
                    <Form.Label>Grade</Form.Label>
                    <Form.Control as="select" name = "grade" defaultValue = {this.state.grade}  onChange={this.handleChange}>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId = "gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" name = "gender" defaultValue = {this.state.gender} onChange={this.handleChange}>
                    <option>M</option>
                    <option>F</option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group controlId = "salary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="number" className="form-control" name="salary" 
                    value={this.state.salary} onChange= {this.handleChange}/>
                </Form.Group>
                <Form.Group controlId = "joining_date">
                    <Form.Label>Joining Date</Form.Label>
                    <Form.Control type="date" className="form-control" name="joining_date" 
                    value={this.state.joining_date} onChange= {this.handleChange}/>
                </Form.Group>

                <Form.Group controlId = "email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" className="form-control" name="email" 
                    value={this.state.email} onChange= {this.handleChange}/>
                </Form.Group>
                <Form.Group controlId = "mobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" min= "7000000000" max ="9000000000" 
                    className="form-control" name="mobile" value={this.state.mobile} onChange= {this.handleChange}/>
                </Form.Group>

                <button type="submit" className="btn btn-primary" onClick = {this.handleSubmit}>Submit</button>
            </Form>
            </Container>
          
            </React.Fragment>
        );
    }
}
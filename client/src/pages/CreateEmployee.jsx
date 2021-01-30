import React from 'react';
import {updateEmployee, getEmployee, createEmployee} from '../api';

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

 this.setState((prevState) => {
    prevState[event.target.name] = event.target.value;
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
             <h1>{title}</h1> 
            <form  class= "container">
                    <div class="form-group">
                        <label for="fname">First Name</label>
                        <input type="text" class="form-control" name="fname" id="fname" value={this.state.fname} onChange= {this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="lname">last Name</label>
                        <input type="text" class="form-control" name="lname" id="lname" value={this.state.lname} onChange= {this.handleChange}/>
                    </div>

                    <div class="form-group">
                        <label for="age">Age</label>
                        <input type="number" min= "20" max= "60" class="form-control" name="age" id="fname" value={this.state.age} onChange= {this.handleChange}/>
                    </div>

                    <div class="form-group">
                        <label for="grade">Grade</label>
                        <select  class="form-control" id="grade" value = {this.state.grade}  onChange={this.handleChange}>
                        <option value= "A">A</option>
                        <option value= "B">B</option>
                        <option value= "C">C</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="sex">Sex</label>
                       <select class="form-control" id="sex" value = {this.state.sex} onChange={this.handleChange}>
                        <option value="M">M</option>
                        <option value= "F">F</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="salary">Salary</label>
                        <input type="number" class="form-control" name="salary" id="salary" value={this.state.salary} onChange= {this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="joining_date">Joining Date</label>
                        <input type="date" class="form-control" name="joining_date" id="joining_date" value={this.state.joining_date} onChange= {this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" name="email" id="email" value={this.state.email} onChange= {this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="mobile">Mobile</label>
                        <input type="number" min= "7000000000" max ="9000000000" class="form-control" name="mobile" id="mobile" value={this.state.mobile} onChange= {this.handleChange}/>
                    </div>

                    <button type="submit" class="btn btn-primary" onClick = {this.handleSubmit}>Submit</button>
            </form>

          
            </React.Fragment>
        );
    }
}
import React from 'react';
import ShowOneEmployee from './ShowOneEmployee';

export default class ListEmployee extends React.Component {


    render(){

        return(
            <React.Fragment>
                <h1>All Employees</h1>
           <ShowOneEmployee fname= 'Koushik'  lname= 'Debnath' age= '26' grade= 'A' sex= 'M' salary= '*****' joinning_date='11-11-2042' email = 'kd@mail.com'  mobile= '0000000000' />
           <ShowOneEmployee fname= 'Supratim'  lname= 'Chakraborty' age= '26' grade= 'A' sex= 'M' salary= '*****' joinning_date='11-11-2042' email = 'kd@mail.com'  mobile= '0000000000' />
            </React.Fragment> 
        );
    }
}
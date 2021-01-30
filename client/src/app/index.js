import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Home, CreateEmployee, ListEmployee,} from '../pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



export default class App extends React.Component {
 
 render(){
  return (
   <Router>
     <Header />

      <Switch>
        <Route path = '/' exact component = {Home}/>
        
        <Route path = '/createemployee' exact component = {CreateEmployee}/>
        
        <Route path = '/listemployee' exact component = {ListEmployee}/>
         
      </Switch>

     <Footer />
   </Router>

     );
}
}

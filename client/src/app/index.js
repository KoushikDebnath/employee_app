import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Home, CreateEmployee} from '../pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



export default class App extends React.Component {
 
 render(){
  return (
   <Router>
     <Header />

      <Switch>
        <Route path = '/' exact component = {Home}/>
        
        <Route path = '/createemployee' exact component = {CreateEmployee}/>
        <Route path = '/updateemployee/:id' exact render = {(props) => <CreateEmployee {...props} option='update'/>}/>
      </Switch>

     <Footer />
   </Router>

     );
}
}

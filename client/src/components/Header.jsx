import React from 'react';
import {Link} from 'react-router-dom';


export default class Header extends React.Component {

render() {

return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to = '/' className="navbar-brand">Employee Details</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link to = '/' className="nav-link" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to = '/createemployee' className="nav-link" >Create Employee</Link>
      </li>      
    </ul>
  </div>
</nav>
);

}
}
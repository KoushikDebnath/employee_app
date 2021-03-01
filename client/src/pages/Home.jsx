import React from 'react';
import ListEmployee from './ListEmployee';

export default class Home extends React.Component {


    render(){

        return(
            <ListEmployee history={this.props.history}></ListEmployee>
            
        );
    }
}
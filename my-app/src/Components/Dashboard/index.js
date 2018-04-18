import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

class Dashboard extends Component{
    constructor(props) {
        super(props);
    }
    render (){
        console.log(this.props, '/////');
        return(
        <div>
            Dashboard
        </div>);
    }
}

export default Dashboard;
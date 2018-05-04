import React, {Component} from 'react';

import './StylesButtonSelectedSubject.css';


export default class ButtonSelectedSubject extends Component{
    constructor(props) {
        super(props);
        this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    }

    onClickDeleteButton(){
        this.props.deleteSelectedSubject(this.props.subjectID);
    }

    render(){ console.log(this);
        return ( <input type="button"  onClick={this.onClickDeleteButton} value= { 'X ' + this.props.subjectID.name} className="borderRadius5px" />);
    }
}
import React, {Component} from 'react';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import axios from 'axios';
import { connect } from 'react-redux';//присоединяем компонент к Redux


import InputClass from './InputClass';
import InputShool from './InputShool';
import './../styles.css';

let fakeDataClassesSelected ={school:['5-A', '9-o', '12-I']};

export default class ShoolData extends Component {
    constructor(props){
        super(props);
        this.state = {schools:[{}], clases:[{}], Clas:''};
        this.addClassOnClick = this.addClassOnClick.bind(this);
        this.ClasOnChange = this.ClasOnChange.bind(this);
        this.addSchoolOnClick = this.addSchoolOnClick.bind(this);
    }

    componentDidMount(){//запрос к серверу на получение данных для списка школ, классов

        //запрос на получение списка школ по умолчанию
        //запрос на получение списка классов , если школа уже созданна и есть созданные классы
        //запрос на получение списка предметов
       /* axios({
            method:'POST',
            url:'',
        }).then(response =>
            //записываем в REDUX обьект полученный со всеми данными
        ).catch(responseError =>)*/
    }

    ClasOnChange(event){
        this.setState({Clas: event.target.value});
    }


    addClassOnClick(){
        this.setState((prevState)=>{
            let arr = prevState.clases;
            arr.push({});
            console.log(arr);
            return {isFormMaster: this.state.isFormMaster, clases: arr};
        });
    }

    addSchoolOnClick(){
        this.setState((prevState)=>{
            let arr = prevState.schools;
            arr.push({});
            console.log(arr);
            return {isFormMaster: this.state.isFormMaster, schools: arr};
        });
    }

    render(){

return (
 <Row>
    <Col>

        {this.state.schools.map((elem, index)=>//в зависимости от того сколько школ выводим блоки
        <Row key={index}>
            <Col>
                <Row className="paddingTop20">
                    <Col xs={{size:8, offset:2}}>
                        <InputShool index={index} key={index} addSchoolOnClick={this.addSchoolOnClick} />
                    </Col>
                 </Row>

                <Row className="paddingTopBottom20">
                    <Col xs={{size:8, offset:2}}>
                        {this.state.clases.map((elem, index)=>
                            <InputClass index={index} key={index} addClassOnClick={this.addClassOnClick} />
                        )}
                    </Col>
                </Row>

                <hr/>
            </Col>
        </Row>
        )}

    </Col>
</Row>);
    }
}
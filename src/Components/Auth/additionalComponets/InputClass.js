import React, {Component} from 'react';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import SearchSubjects from  './SearchSubjects';


let fakeDataClassesSelected ={school:['5-A', '9-o', '12-I']};




export default class InputClass extends Component{
    constructor(props){
        super(props);
        this.state = {Clas:'', isFormMaster:false, clases:[{}]};
        this.isFormMasterOnChange = this.isFormMasterOnChange.bind(this);
        this.addClassOnClick = this.addClassOnClick.bind(this);
    }

    isFormMasterOnChange(){
        this.setState({isFormMaster: !this.state.isFormMaster});
    }

    addClassOnClick(event){
        //this.setState({Clas: event.target.value});
        this.props.addClassOnClick();
    }

render(){ console.log(this.props);

    const classesSelected = fakeDataClassesSelected.school.map((elem, key)=>//формирует инпуты из выбранных классов
        <FormGroup check inline>
            <Label check>
                <Input key={key} type="checkbox" /> {elem}
            </Label>
        </FormGroup>
    );

    const FormMasterData = (this.state.isFormMaster ?//из выбранных классов предлагает выбрать где классное руководство
            <Row className="marginTop10">
                <Col xs="6">
                    {classesSelected }
                </Col>
            </Row>
            : ''
    );


    return(
<Row>
    <Col>
        <Row>
            <Col xs="12">
                <FormGroup>
                    <Label for="exampleSelect">Выберите класс</Label>
                    <Row>
                        <Col xs="5">
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Ср. №2</option>
                                <option>Ср. №4</option>
                                <option>Ср. №5</option>
                                <option>Ср. №9</option>
                                <option>Ср. №88</option>
                            </Input>
                        </Col>

                        <Col xs="2">
                            <Button color="warning"> Other </Button>{' '}
                        </Col>
                    </Row>

                </FormGroup>
            </Col>
        </Row>

        <Row>
            <Col xs="12" className="marginTop20">
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" checked={this.state.isFormMaster} onChange={this.isFormMasterOnChange}/>{' '}
                        Я класний керівник
                    </Label>
                </FormGroup>
            </Col>
        </Row>

        {FormMasterData}


        <Row className="marginTop20">
            <Col xs="12">
                <FormGroup className='paddingBottom'>
                    <Label for="exampleSelect">Введите предмет(ты)</Label>
                </FormGroup>

                <SearchSubjects/>
            </Col>
        </Row>


    </Col>
</Row>
        );
    }
}
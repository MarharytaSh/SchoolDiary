import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//import './styles.css';
import SelectDate from './additionalComponets/SelectDate';
import ShoolData from './additionalComponets/ShoolData';


export default class RegisterMain extends Component{
    render() {
        return (
            <Container>
                <Col>
                 <Row>
                       <Col className="marginTop10 border border-info rounded paddingBottom20" xs={{size:8, offset:2}} >
                                <h5 className="marginTop10">Персональні дані</h5>
                                <Row>
                                    <Col xs="4" className="margin10">
                                        <FormGroup>
                                            <Input type="text" name="name" id="exampleName" placeholder="Имя" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" name="surname" id="examplesurname" placeholder="фамилия" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" name="patronymic" id="examplePatronymic" placeholder="отчество" />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="8" className="marginTop10">
                                        <SelectDate />
                                    </Col>
                                </Row>
                        </Col>
                </Row>

                <Row className="marginTop50">
                    <Col xs={{size:4, offset:4}}>
                            <Button color="success" size="lg" href="/RegisterTeacher" block>
                                Я УЧИТЕТЕЛЬ
                            </Button>

                            <Button color="info" href="/RegisterParentChildren" size="lg" block>
                               РОДИТЕЛИ/ ДЕТИ
                            </Button>

                    </Col>
                </Row>
             </Col>
            </Container>
        );
    }
}

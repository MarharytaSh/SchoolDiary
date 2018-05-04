import React, {Component} from 'react';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default  class SelectDate extends Component{

 render(){
        return (
        <Row>
            <Col>
                <Row>
                    <Col xs="6" lg="3">
                        <FormGroup>
                            <Label for="exampleSelect">День</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>11</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Label for="exampleSelect">Месяц</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Январь</option>
                                <option>Февраль</option>
                                <option>Март</option>
                                <option>Апрель</option>
                                <option>Май</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col xs="6" lg="3">
                        <FormGroup>
                            <Label for="exampleSelect">Год</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </Col>
            </Row>

            <Row className="marginTop10">
                <Col xs="5">
                    <Input type="text" name="Telephon" id="exampleTelephon" placeholder="телефон" />
                </Col>

                <Col xs="7">
                    <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                </Col>
            </Row>
        </Col>
    </Row>
        );
    }
}
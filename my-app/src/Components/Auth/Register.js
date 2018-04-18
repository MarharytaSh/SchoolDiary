import React, {Component} from 'react';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




export default class Register extends Component{
    render() {
        return (
        <Container>
            <Row>
                <Col xs={{size:10, offset:1}}>


                    <Row>
                        <Col xs="4">
                            <h5>Персональні дані</h5>
                            <Form>
                                <FormGroup>
                                    <Input type="text" name="name" id="exampleName" placeholder="Имя" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="surname" id="examplesurname" placeholder="фамилия" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="patronymic" id="examplePatronymic" placeholder="отчество" />
                                </FormGroup>
                            </Form>
                        </Col>

                         <Col lg="6">
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


                             <Row>
                                 <Col xs="12">
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="checkbox" />{' '}
                                             Я учитель
                                         </Label>
                                     </FormGroup>
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="checkbox" />{' '}
                                             Я ученик/родители
                                         </Label>
                                     </FormGroup>
                                 </Col>
                             </Row>

                         </Col>
                    </Row>




                    <Row>
                        <Col>
                            <hr/>
                            <h5>Шкільні дані</h5>
                        </Col>
                    </Row>



                    <Row>
                        <Col>
                            <Row>
                                <Col lg="4">
                                    <Form inline>
                                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                                <Input type="text" name="shool" id="exampleShool" placeholder="Школа" />
                                            </FormGroup>
                                        <Button color="success">Add</Button>{' '}
                                    </Form>
                                </Col>
                                <Col lg="4">
                                    <Form inline>
                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                            <Input type="text" name="ClassYour" id="exampleClassYour" placeholder="Класс" />
                                        </FormGroup>

                                        <Button color="success">Add</Button>{' '}
                                    </Form>
                                </Col>
                            </Row>
                <br/>
                            <Row>
                                <Col lg="4">
                                    <Form inline>
                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                            <Input type="text" name="shool" id="exampleShool" placeholder="Школа" />
                                        </FormGroup>
                                        <Button color="success">Add</Button>{' '}
                                    </Form>
                                </Col>
                                <Col lg="4">
                                    <Form inline>
                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                            <Input type="text" name="ClassYour" id="exampleClassYour" placeholder="Класс" />
                                        </FormGroup>

                                        <Button color="success">Add</Button>{' '}
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <hr/>
                        </Col>
                    </Row>



                    <Row>
                        <Col xs="3">
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Я учитель
                                </Label>
                            </FormGroup>
                        </Col>
                    </Row>
            <br/>
                    <Row>
                        <Col xs="3">
                           <Input type="text" name="Telephon" id="exampleTelephon" placeholder="телефон" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Col  lg={{ size: 2, offset: 5 }}>
                                <Button color="secondary">SUBMIT</Button>{' '}
                            </Col>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
        );
    }
}

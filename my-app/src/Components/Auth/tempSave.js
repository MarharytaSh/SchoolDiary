<Container>
    <Row>
        <Col xs="8"
        <Row>/*1 */
            <Col>
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
            <Col>

                <Row>
                    <Col lg="3">
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
                    <Col lg="5">
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
                    <Col lg="3">
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
            </Col>

        </Row>/*1 */

        <Row>/*2 */
            <Col>
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
        <hr />
        <Row>
            <Col>
                <h5>Шкільні дані</h5>
            </Col>
        </Row>



        <Row>
            <Col>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" name="shool" id="exampleShool" placeholder="Школа" />
                    </FormGroup>
                    <Button color="success">Add</Button>{' '}
                </Form>
            </Col>
            <Col>
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
            <Col>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" name="Subject" id="exampleSubject" placeholder="Предмет" />
                    </FormGroup>

                    <Button color="success">Add</Button>{' '}
                </Form>
            </Col>

            <Col xs="4">
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" name="ClassYouTeach" id="exampleClassYouTeach" placeholder="Класс" />
                    </FormGroup>

                    <Button color="success">Add</Button>{' '}
                </Form>
            </Col>
        </Row>
        <hr/>
        <FormGroup check>
            <Label check>
                <Input type="checkbox" />{' '}
                Класное руководство
            </Label>
        </FormGroup>
        <br/>
        <Col xs="2">
            <FormGroup lg="4" className="mb-2 mr-sm-2 mb-sm-0">
                <Input type="text" name="Telephon" id="exampleTelephon" placeholder="телефон" />
            </FormGroup>
        </Col>



        <Col  lg={{ size: 2, offset: 5 }}>
            <Button color="secondary">SUBMIT</Button>{' '}
        </Col>



    </Row>
</Col>
</Row>
</Container>
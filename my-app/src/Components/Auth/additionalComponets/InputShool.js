import React, {Component} from 'react';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class InputShool extends Component{
    constructor(props){
        super(props);
        this.state = {School : ''};
        this.SchoollOnChange = this.SchoollOnChange.bind(this);
        this.addSchoolOnClick = this.addSchoolOnClick.bind(this);
    }

    SchoollOnChange(event){
        this.setState({School: event.target.value});
    }

    addSchoolOnClick(){
        this.props.addSchoolOnClick();
    }

render(){ console.log(this.props);
return(
<Row>
    <Col xs="12">
        <FormGroup>
            <Label for="exampleSelect">Выберите школу</Label>
            <Row>
                <Col xs="8">
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Ср. №2</option>
                        <option>Ср. №4</option>
                        <option>Ср. №5</option>
                        <option>Ср. №9</option>
                        <option>Ср. №88</option>
                    </Input>
                </Col>

                <Col>
                    <Button color="warning"> Other </Button>{' '}
                </Col>
            </Row>

        </FormGroup>
    </Col>
</Row>);
    }
}
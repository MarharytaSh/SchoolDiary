import React, {Component} from 'react';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './styles.css';
import SelectDate from './additionalComponets/SelectDate';
import ShoolData from './additionalComponets/ShoolData';

export default class RegisterTeacher extends Component{
    render(){
        return (
    <Container>
        <Row>
                <Col xs="12" md={{size:8, offset:2}} lg={{size:6, offset:3}} className="border border-success rounded marginTop10 paddingBottom20">
                <Form>

                    <ShoolData />

                     <Row>
                         <Col className="marginTop10" xs={{size:4, offset:4}}>
                             <Button color="success" size="lg" href="/RegisterTeacher" block>
                                    СОХРАНИТЬ
                             </Button>
                         </Col>
                     </Row>

                </Form>
                </Col>
        </Row>
    </Container>
        );
    }
}
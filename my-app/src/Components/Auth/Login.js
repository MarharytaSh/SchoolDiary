import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect, BrowserRouter, Route } from 'react-router-dom';
import { Form, FormGroup, Label, Input,Container, Row, Col, Button } from 'reactstrap';
//import axios from 'axios';


import { connect } from 'react-redux';//присоединяем компонент к Redux

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// тестовые данные (при необходимости)
import { USE_FAKE } from '../../generals/config';
//import Register from './Register';


 class Login extends Component {
    constructor (props){
        super(props);
        this.state = {valueEmail:'', valuePass:''};
        this.onSignIn = this.onSignIn.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
    }


    onChangeEmail(event){
        let value = event.target.value;
        this.setState({valueEmail: value});
    }
    onChangePass(event){
        let value = event.target.value;
        this.setState({valuePass : value});
    }

    checkData(){//оправка данных на сервер
      let email = this.state.valueEmail,//почта
          pass = this.state.valuePass;//пасс

        if(!USE_FAKE){//то готовим данные для отправки
          /*  axios({
                method:'POST',
                url: '',
                data:{
                    UserEmail: email,
                    UserPAss : pass
                }
            })
                .then((response)=>{
                     //меняем в REDUX cостояние  на  isUserLoggedIn=true что бы роуты были пересмотрены
                })
                .catch((response)=>{
                    console.log('No such user');
                })*/
        }else{
            //меняем в REDUX cостояние  на  isUserLoggedIn=true
        }

    }
    onSignIn(event){//отправляет на сервак данные почта и пароль польз. для проверки зареган ли он
        console.log(event.target);
        this.checkData();

    }


    render() {console.log(this.props);
        return (
            <Container>
            <Row>
            <Col xs='12' sm={{size:6,offset:3}}  lg={{size:4, offset:4}}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" value={this.state.valueEmail} onChange={this.onChangeEmail} name="email" id="exampleEmail" placeholder="type email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" value={this.state.valuePass} onChange={this.onChangePass} name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>

                    <FormGroup>
                       <a href="#">Forgot PASS</a>
                    </FormGroup>

                    <div>
                        <Button color="success" onClick={this.onSignIn}>Sign in</Button>{' '}
                        <Link to="/register">
                            <Button color="primary" onClick={this.onSignUp}>Sign up</Button>{' '}
                        </Link>
                    </div>
                 </Form>
            </Col>
            </Row>
            </Container>
        );
    }
}
//если юзер зареган одну форму если нет другую


const mapStateToProps = function (state){//весь Store из Redux
    return {
        authToken: state.authToken,
        isADMIN:  state.isADMIN,
    }
}

Login = connect(mapStateToProps)(Login);
// Первый вызов connect с одним параметром возвращает обьект, во второй вызов в компонент  Login передается в виде пропсов данные из Store на выходе <Connected <Login/> />


export default Login// компонент доступен извне по умолчанию
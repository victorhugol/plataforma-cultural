import React from 'react';
import {Card,Row,Col, Input, CardTitle, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styles/Sign/SignIn.css';



const SignIn = ()=>{





    return(
        <Row xs='1'>

            <Col md={{size:6,offset:3}}>
                <section>
                    <Card>
                        <h3>Ola Novamente!</h3>
                        <Link to='/SignUp'>Novo Usuario? Cadastre-se</Link>
                        <Input type='text' placeholder="usuario"></Input>
                        <Input type='password' placeholder="senha"></Input>
                        <p>Mínimo de 8 caracteres</p>
                        <Link to='RecuperarSenha'>Esqueceu a senha?</Link>
                        <Button> ENTRAR</Button>
                    </Card>
                </section>
            </Col>
        </Row>
    )
}


export default SignIn;
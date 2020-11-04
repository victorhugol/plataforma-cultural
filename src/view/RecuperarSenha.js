import React from 'react';
import {Row,Card, CardBody, CardSubtitle, CardTitle, Col,Input, Button} from 'reactstrap';

const RecuperarSenha = ()=>{
    return(
        <Col md={{size : 4,offset:4}}>
            <section>
                <Card>
                    <CardBody>
                        <CardTitle>
                            Primeiro, vamos localizar sua conta
                        </CardTitle>
                        <CardSubtitle>
                            Insira seu email
                        </CardSubtitle>
                        <Input type="text"></Input>
                    </CardBody>
                    <Row xs='2'>
                        <Col>
                            <Button outline >Cancelar</Button>
                        </Col>
                        <Col>
                            <Button outline>Continuar</Button>
                        </Col>
                    </Row>
                </Card>

            </section>
        </Col>
    )
}


export default RecuperarSenha;
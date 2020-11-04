import React from 'react';
import {Col, Form, FormGroup, Input, Label, Row,} from 'reactstrap';
import '../styles/Sign/SignUp.css';


const SignUp = ()=>{
    return(
        <Col md={{size:6,offset:3}}>
            <div className="inicioCadastro">
                <h3 className="titulo">Cartografia da Cultura - Campo Grande</h3>
                <section>
                    Para o Fórum Municipal de Cultura é muito importante que você, 
                    sendo classe artística, produtor cultural, instituição ou 
                    responsável por estabelecimento, que promova arte e cultura 
                    na cidade, participe desta plataforma. A cartografia da 
                    cultura é uma maneira de dar voz e visibilidade a todos que 
                    produzem arte e cultura, sem hierarquias e com transparência. 
                </section>
                <ul>
                    <li>
                        <h4 className="subtitulo">O cadastro permitirá :</h4>
                        <ul>
                            <li><h5 className="subtitulo">Mapa</h5></li>
                            <li>
                                Adicionar um pin no mapa (sua localização e 
                                informações que inserir serão vistos por todos). 
                                Cada cadastro permitirá que você insira um pin. 
                            </li>
                        </ul>
                        <ul>
                            <li><h5 className="subtitulo">agenda cultural</h5></li>
                            <li>
                                Inserir na agenda os eventos que você irá participar 
                                ou produzir em Campo Grande. Além de ser mais um 
                                local de divulgação do seu trabalho, o visitante ao 
                                acessar a plataforma, poderá visualizar os eventos 
                                que acontecerão nos próximos dias, reunidos num só lugar. 
                            </li>
                        </ul>
                        <ul>
                            <li><h5 className="subtitulo">diálogos</h5></li>
                            <li>
                                Propor ou participar de debates que acontecem 
                                online, proposto pelo Fórum Municipal de Cultura 
                                ou pelos participantes, entre produtores artísticos
                                e culturais da cidade.
                            </li>
                        </ul>
                    </li>
                </ul>

                <Form>
                    <Row xs='2'>
                        <Col>
                            <FormGroup>
                                <Label>Nome</Label>
                                <Input placeholder="Nome*"></Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>Sobrenome</Label>
                                <Input placeholder='Sobrenome*'></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label>Senha</Label>
                        <Input type='password' placeholder="Senha*"></Input>

                    </FormGroup>
                    
                    <FormGroup>
                        <Label> Email</Label>
                        <Input type="email" placeholder="Email*"></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label> Confirmar Email</Label>
                        <Input type="email" name="email" placeholder="confirme o email*"></Input>
                    </FormGroup>

                </Form>


                <section>
                    <h5 className="subtitulo">Identifique sua categoria</h5>
                    <p>
                        A categoria escolhida aparecerá no mapa quando você
                        criar seu pin. Escolha sabiamente, não será possível
                        mudar posteriormente.
                    </p>
                </section>
            </div>
            
        </Col>
    )
}


export default SignUp;
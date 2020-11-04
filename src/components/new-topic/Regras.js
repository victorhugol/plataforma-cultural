import React from 'react';
import {Col,Input} from 'reactstrap';
import '../../styles/topic/AboutTopic.css';
import Buttons from './Buttons';
const Regras = ()=>{















    
    return(
        <div>
            <Col sm='12' md={{size:5,offset : 3}}>
                <h3 className="titulo">Regras para iniciar um diálogo</h3>
                <section>
                    <ol>
                        <li>
                            <p>Uma vez feito o login, você poderá:</p>
                            <ol style={{listStyleType: 'lower-alpha'}}>
                                <li>Iniciar um debate</li>
                                <li>
                                    Participar de um debate ja iniciado por
                                    outro usuário
                                </li>
                                <li>
                                    Concordar ou não concordar ao votar em um
                                    debate iniciado.
                                </li>
                            </ol>
                        </li>

                        <li>
                            <p>Para iniciar o debate:</p>
                            <ol style={{listStyleType: 'lower-alpha'}}>
                                <li>insira um título que represente o assunto 
                                    principal da discussão.
                                </li>

                                <li>
                                    insira um texto com sua argumentação 
                                    diretamente na plataforma.
                                </li>
                                <li>
                                    escolha uma ou mais categorias relacionada ao 
                                    assunto que quer discutir. 
                                </li>
                            </ol>
                        </li>

                        <li>
                            <p>Uma vez iniciado o debate, você não poderá :</p>
                            <ol style={{listStyleType: 'lower-alpha'}}>
                                <li>
                                    deletar o debate que você iniciou
                                </li>

                                <li>
                                    deletar um comentario em um debate que você
                                    participou
                                </li>
                            </ol>
                        </li>

                        <li>
                            <p>Serão deletados :</p>
                            <ol style={{listStyleType: 'lower-alpha'}}>
                                <li>
                                    os comentários ofensivos, com discurso de ódio 
                                    ou qualquer ato de comunicação que inferiorize 
                                    ou incite contra uma pessoa ou grupo, tendo por
                                    base características como raça, gênero, etnia, 
                                    nacionalidade, religião, orientação sexual ou 
                                    outro aspecto passível de discriminação.
                                </li>

                                <li>
                                    qualquer comentário que implique em uma ação 
                                    ilegal ou que tenham a intenção de sabotar o 
                                    espaço de debate. 
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p>Recomendamos que :</p>
                            <ol style={{listStyleType: 'lower-alpha'}}>
                                <li>
                                    Insira um texto revisado por você. Veja se
                                    está claro e objetivo.
                                </li>

                                <li>
                                    Seja gentil ao dialogar com as outras vozes
                                    que têm pontos de vista diferente do seu
                                </li>
                            </ol>
                        </li>
                    </ol>
                    <Col>
                        <Input type="checkbox"></Input>
                        Concordo com as Regras da Plataforma.
                        <span>(Esta Opção deve ser marcada*)</span>
                    </Col>
                </section>
                <Buttons></Buttons>
            </Col>
        </div>
    )
}

export default Regras;
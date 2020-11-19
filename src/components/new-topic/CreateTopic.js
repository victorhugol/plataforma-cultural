import React, {useState,useRef} from 'react';
import {Button, Col,Form,Input,ListGroup,ListGroupItem,Row} from 'reactstrap';
import '../../styles/topic/AboutTopic.css';

const CreateTopic = (props)=>{
    const [lista, setLista] = useState([1,2,3]);
    const itemDialogo = useRef(null)
    const [listaDialogo, setListaDialogo] = useState([1,2]);

    const nextPage = ()=>{
        console.log(props)
    }

    const pushListaDialogo = ()=>{
        listaDialogo.push(itemDialogo.current.value);
    }


    return(
        <Col sm="12" md={{size : 5,offset :3}}>
            <h3 className="titulo">Crie seu diálogo</h3>
            <ul className="criarDialogo">
                <li>
                    <h6 className="subtitulo">Título do seu diálogo</h6>
                    <p>Insira um título que representa o assunto
                        principal da discussão
                    </p>
                    <Input type="text"></Input>
                </li>
                <li>
                    <h6 className="subtitulo">Texto de Diálogo</h6>
                    <p>Insira um texto revisado por você. Veja de está claro e
                        objetivo.
                    </p>
                    <Input type="textarea"></Input>
                </li>
                <li>
                    <h6 className="subtitulo">Categoria do Diálogo</h6>
                    <p> 
                        1. Marque a opção que representa o tema principal do seu
                        diálogo.
                    </p>
                    <p>
                        2. Marque as opções que se relacionam ao seu diálogo
                    </p>
                    <Row xs='2'>

                        <Col>
                            <ListGroup>
                                {lista.map((item,key)=>{
                                    return(
                                        <Button ref={itemDialogo} onClick={pushListaDialogo}  outline key={key}>
                                                {item}
                                        </Button>
                                    )
                                })}
                            </ListGroup>
                        </Col>
                    </Row>
                </li>
            </ul>

            <Row xs='3'>
                <Col>
                    <Button outline size="sm"> VOLTAR</Button>
                </Col>
                <Col>
                    <Button outline size='sm'> CANCELAR</Button>
                </Col>
                <Col>
                    <Button onClick={nextPage} outline size='sm'>INICIAR DIALOGO</Button>
                </Col>
            </Row>
        </Col>
    );
}


export default CreateTopic;
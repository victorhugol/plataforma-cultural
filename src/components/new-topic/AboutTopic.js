import React from 'react';
import {Col} from 'reactstrap';
import '../../styles/topic/AboutTopic.css';
import Buttons from './Buttons'

export const AboutTopic = ()=>{



    return(
        <Col sm='12' md={{ size: 5, offset: 3 }} className="bodyCol">
            <h3 className="titulo">Sobre os Diálogos</h3>
            <h5 className="subtitulo">Diálogos abertos</h5>
            <section>
            Você poderá iniciar um debate, que aqui chamamos de diálogo, para
            compartilhar pontos de vista com outras pessoas sobre os assuntos 
            que te preocupam em relação à cultura em Campo Grande. O espaço de 
            diálogos abertos é destinado aos gestores, produtores, promotores 
            da cultura local e também à comunidade artística. Sendo um desses 
            agentes, você poderá expor seus argumentos e abrir uma conversa 
            com todos. Considere que o debate não aciona nenhum mecanismo de 
            atuação concreta. Mas alimenta as tomadas de decisão do Fórum 
            Municipal de Cultura, identifica a necessidade de encontros 
            presenciais específicos (assembleias, reuniões) como também 
            contribui para a compreensão das necessidades da comunidade 
            artística de Campo Grande. 
            </section>
            <h5 className="subtitulo"> Recomendações para participar de um diálogo aberto</h5>
            <section>
                <ol>
                    <li>
                        Para iniciar um debate é necessário que você faça um 
                        cadastro na Os usuários cadastrados também podem 
                        participar das discussões já iniciadas através dos 
                        comentários e/ ou indicar se concorda ou não concorda 
                        clicando nos botões “👍” ou “👎” encontrados em 
                        cada debate proposto.
                    </li>
                    <li>
                        Não escreva o título do debate ou frases inteiras em 
                        letras maiúsculas. Na Internet, isso é considerado o 
                        mesmo que gritar. E ninguém gosta disso. 
                    </li>

                    <li>
                        Qualquer debate ou comentário que implique em uma ação 
                        ilegal será deletado. Também serão deletados 
                        comentários que tenham a intenção de sabotar o 
                        espaço de debate. 
                    </li>
                    <li>
                        As críticas duras são bem vindas. Este é um espaço de 
                        pensamento livre, mas recomendamos que, ainda que a 
                        crítica seja dura, também seja gentil e inteligente. 
                    </li>
                    <li>
                        Desfrute deste espaço, das vozes que o preenchem, ele 
                        também é seu. 
                    </li>
                </ol>
            </section>
            <Buttons></Buttons>
        </Col>
    )
}
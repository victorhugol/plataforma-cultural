import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import '../styles/topic/Topic.css'
import garotaPc from '../assets/garota-pc.png';
import {Link} from 'react-router-dom';

const Topic = ()=>{
    return(
        <div className="topic">
            <Row>
                <Col md={{size:2}} className="left">
                    <Button><Link to="/newTopic">Iniciar Dialogo</Link></Button>
                </Col>
                <Col md={{size:10}} className="right">
                    <img alt="garotaNoPc" src={garotaPc} width={300} height={240}>
                    </img>
                </Col>
            </Row>
        </div>
    )
}


export default Topic;
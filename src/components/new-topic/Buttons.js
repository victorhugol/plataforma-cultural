import React from 'react';
import {Row,Col,Button} from 'reactstrap';



const Buttons = ()=>{
    return(
        <section className="buttons">
            <Row xs='2'>
                <Col>
                    <Button outline>Cancelar</Button>
                </Col>
                <Col>
                    <Button outline> Continuar</Button>
                </Col>
            </Row>
        </section>
    )
}

export default Buttons;
import React, {useState,useEffect} from 'react';
import {Col, Form, FormFeedback, FormGroup, Input, Label, Row,} from 'reactstrap';
import '../styles/Sign/SignUp.css';
import BeginSignUp from '../textualComponents/signup-text/BeginSignUp';











const SignUp = ()=>{

    const erros = {
        nome: 'Nome é obrigatório',
        sobrenome : 'Sobrenome é obrigatório',
        senha : 'Senha é obrigatória',
        email : 'Email é obrigatório',
        confirmaEmail : 'O email de confirmação é obrigatório'
    }
    
    const [nome, setNome] = useState('');
    const [sobrenome,setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaEmail,setConfirmaEmail] = useState('');
    const [touched,setTouched] = useState({
        nome : false,
        sobrenome : false,
        senha : false,
        email : false,
        confirmaEmail : false
    });



    const handleBlur = (event,field)=>{
        setTouched(()=>{
            return {...touched,[field] : true}
        })

    }

    const validation = (field,campo)=>{


        if(touched[field] === true && campo.length === 0){
            return true;
        }else{
            return false;
        }
    }


    return(
        <Col md={{size:6,offset:3}}>
                    {`${touched.nome}`}

            <div className="inicioCadastro">
                <BeginSignUp></BeginSignUp>
                <Form>
                    <Row xs='2'>
                        <Col>
                            <FormGroup>
                                <Label>Nome</Label>
                                <Input 
                                placeholder="Nome*"
                                value={nome}
                                invalid={validation('nome',nome)}
                                onChange={(e)=>setNome(e.target.value)}
                                onBlur={(event)=>handleBlur(event,'nome')}
                                >
                                
                                </Input>
                                <FormFeedback>{erros.nome}</FormFeedback>
                                
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label>Sobrenome</Label>
                                <Input 
                                placeholder="Sobrenome*"
                                value={sobrenome}
                                invalid={validation('sobrenome',sobrenome)}
                                onChange={(e)=>setSobrenome(e.target.value)}
                                onBlur={(event)=>handleBlur(event,'sobrenome')}
                                >
                                
                                </Input>
                                <FormFeedback>{erros.sobrenome}</FormFeedback>
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
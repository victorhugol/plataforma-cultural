import React, {useState} from 'react';
import {Card,Row,Col, Input, Button, FormGroup, Label,Form, FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styles/Sign/SignIn.css';



const SignIn = ()=>{
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [touched, setTouched] = useState({
        senha : false,

    });

    const [erros,setErros] = useState({
        usuario : '',
        senha : ''
    });



    const handleBlur = (field)=>{
        setTouched(()=>{
            return {...touched,[field] : true};
        })
        if(touched.senha === true && senha.length < 8){
            setErros((previousErro)=>{
                return {...previousErro,[field]: 'Minimo 8 Caracteres'}
            })
        }else{
            setErros((previousErro)=>{
                return {...previousErro,[field]:''};
            })
        }
    }



    return(
        <Row xs='1'>

            <Col md={{size:4,offset:4}}>
                <section>
                    <Card>
                        <h3>Ola Novamente!</h3>
                        <Link to='/SignUp'>Novo Usuario? Cadastre-se</Link>
                        <Form>
                            <FormGroup>
                                <Label>Usuario</Label>
                                <Input
                                type='text'
                                placeholder="usuario"
                                value={usuario}
                                onChange={(e)=>setUsuario(e.target.value)}
                                >
                                </Input>
                            </FormGroup>
                            
                            <FormGroup>
                                <Label>Senha</Label>
                                <Input
                                type='password'
                                placeholder="senha"
                                value={senha}
                                invalid={erros.senha !== ''}
                                onChange={(e)=>setSenha(e.target.value)}
                                onBlur={(e)=>handleBlur('senha')}
                                >
                                </Input>
                                <FormFeedback>{erros.senha}</FormFeedback>
                            </FormGroup>
                        </Form>
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
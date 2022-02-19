import React, { Component, useEffect  ,useState } from 'react';
import '../css/comun.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import axios from 'axios';

export default function Calculadora(){
    const [valor,setvalue] = useState('');
    
    const Operar = () =>{
        var valor1 =0;
        var valor2 =0;
        var signo = '';
        var resultado = 0;
        const operacion = valor.split(' ')
        
        if (operacion[1] == '+') {
            const aux = valor.split('+');
            valor1 = parseFloat( aux[0]);
            valor2 = parseFloat( aux[1]);
            signo = "+";
            resultado = valor1 + valor2;
            setvalue(resultado)
        }
        else if (operacion[1] == '-') {
            const aux = valor.split('-');
            valor1 = parseFloat( aux[0]);
            valor2 = parseFloat( aux[1]);
            signo = "-";
            resultado = valor1 - valor2;
            setvalue(resultado)
        }
        else if (operacion[1] == '/') {
            const aux = valor.split('/');
            valor1 = parseFloat( aux[0]);
            valor2 = parseFloat( aux[1]);
            signo = "/";
            resultado = valor1 / valor2;
            setvalue(resultado)
        }
        else if (operacion[1] == '*') {
            const aux = valor.split('*');
            valor1 = parseFloat( aux[0]);
            valor2 = parseFloat( aux[1]);
            signo = "*";
            resultado = valor1 * valor2;
            setvalue(resultado)
        }
    }
    
    return(

        <Form>
            <Container> <Row>
                        <Col>
                        <div className="form">
                        <center> <Form.Label style={{ color: 'white' }} column="lg" lg={3}>Calculadora</Form.Label></center>
                        <center><input type={"text"}  name="analizador" value = {valor}  />  <Button variant="danger" onClick = {()=> setvalue('')} >Del </Button></center>
                        <center> <Button variant="primary" onClick = {()=> setvalue(valor + '1')} > 1 </Button> <Button variant="primary" onClick = {()=> setvalue(valor + '2')} > 2</Button> <Button variant="primary" onClick = {()=> setvalue(valor + '3')} > 3</Button> <Button variant="danger" onClick = {()=> setvalue(valor + ' / ')}> /</Button> </center><br />
                        <center> <Button variant="primary" onClick = {()=> setvalue(valor + '4')}> 4</Button> <Button variant="primary" onClick = {()=> setvalue(valor + '5')}> 5</Button> <Button variant="primary" onClick = {()=> setvalue(valor + '6')}> 6</Button> <Button variant="danger" onClick = {()=> setvalue(valor + ' + ')}> +</Button> </center><br />
                        <center> <Button variant="primary" onClick = {()=> setvalue(valor + '7')}> 7</Button> <Button variant="primary"onClick = {()=> setvalue(valor + '8')} > 8</Button> <Button variant="primary" onClick = {()=> setvalue(valor + '9')}> 9</Button>  <Button variant="danger" onClick = {()=> setvalue(valor + ' - ')}> -</Button> </center><br />
                        <center> <Button variant="primary" onClick = {()=> setvalue(valor + '.')}> .</Button> <Button variant="primary" onClick = {()=> setvalue(valor + '0')}> 0</Button> <Button variant="primary" onClick = {()=> setvalue(Operar )} > =</Button>  <Button variant="danger" onClick = {()=> setvalue(valor + ' * ')}> *</Button></center><br />
                      
                        </div>
                        </Col>
                        
                    </Row>
                    
                    
                </Container>
    </Form>
 
    )
}
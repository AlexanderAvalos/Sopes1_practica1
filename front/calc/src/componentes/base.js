import React, { useState } from 'react';
import '../css/comun.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


export default function base() {


    return (
        <>
            <Container>
                <Form.Group controlId="formGridEmail">
                    <Table responsive striped bordered hover size="sm" variant="dark">
                        <thead>
                            <tr>
                                <th>Numero21</th>
                                <th>Numero 2</th>
                                <th>Signo</th>
                                <th>Resultado</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>1</td>
                                <td>2</td>
                                <td>+</td>
                                <td>3</td>
                                <td>a</td>
                            </tr>
                        </tbody>
                    </Table>
                </Form.Group>

            </Container>



        </>
    );

}
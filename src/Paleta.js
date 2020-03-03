import React, { useState } from 'react';
import './color.css';
import './paleta.css';
import './divpadre.css';
import './listgroup.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const Paleta = () => {

    const [color, setColor] = useState("");
    const [colores, setColores] = useState([]);

    const handleChangeColor = event => setColor(event.target.value);

    const handleSubmit = () => {
        setColores([...colores, color]);
        console.log(colores);
        setColor("");
    }


    return (
        <>
            <div className="divpadre">
                <h1>Administrar colores</h1>
                <div className="paleta">
                    <div className="color">
                    </div>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control onChange={handleChangeColor} value={color} type="email" placeholder="Ingresar un color Ej. blue" />
                    </Form.Group>

                </div>
                <Button variant="primary" onClick={handleSubmit}>Guardar</Button>
            </div>

            <div className="listgroup">
                                 
                <ListGroup>{
                    colores.map(color => {
                        return  <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                          <Card.Title>{color}</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    })
                }
                </ListGroup>
              
            </div>
        </>
    )
}

export default Paleta;
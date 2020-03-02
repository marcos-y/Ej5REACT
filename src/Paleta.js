import React, { useState } from 'react';
import './color.css';
import './paleta.css';
import './divpadre.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Paleta = () => {

    const [color,setColor] = useState("");
    const [colores, setColores] = useState([]);

    const handleChangeColor = event => setColor(event.target.value);
    
    const handleSubmit = () =>{
        setColores([...colores,color]);
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
        </>
    )
}

export default Paleta;
import React, { useState } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Swal from 'sweetalert2';

function Registro() {
    const [values, setValues] = useState({
        nombres: "",
        apellidos: "",
        identificacion: "",
        direccion: "",
        telefono: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => { //cuando se cambie de Input entonces se guarda la información en la variables.
        const { name, value } = e.target;
        const newValues = {
            ...values,
            [name]: value,
        };
        setValues(newValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.nombres || values.nombres.length < 3) {
            Swal.fire({
                title: 'El nombre debe tener 3 caracteres como minimo',
                icon: 'error'
            });
            return;
        }
        else if (!values.apellidos || values.apellidos.length < 3) {
            Swal.fire({
                title: 'El apellido debe tener 3 caracteres como minimo',
                icon: 'error'
            });
            return;
        }

        else if (!values.identificacion || values.identificacion.length < 5 || values.identificacion.length > 10) {
            Swal.fire({
                title: 'La identificación debe tener entre 5 y 10 números.',
                icon: 'error'
            });
            return;
        }
        else if (!values.direccion || values.direccion.length < 15) {
            Swal.fire({
                title: 'La dirección debe ser mínimo 15 caracteres',
                icon: 'error'
            });
            return;
        } else if (!values.telefono || values.telefono.length < 10 || values.telefono.length > 10) {
            Swal.fire({
                title: 'Debe tener 10 números',
                icon: 'error'
            });
            
        } else if (values.password &&
            values.password.length >= 8 &&
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
              values.password)){
                fetch('http://localhost:3001/registro-usuario', {
                method: 'POST',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
                body: JSON.stringify(values)
            })
                .then(response => {
                    if (response.status === 200) {
                        Swal.fire({
                            title: 'Usuario creado con éxito',
                            icon: 'success',
                            customClass: {
                                popup: 'my-custom-popup-class',
                            },
                            showConfirmButton: false,
                            timer: 1500
                        });
                    } else {
                        Swal.fire({
                            title: 'No fue posible crear el usuario',
                            text: `Error: ${response.status}`,
                            icon: 'error',
                            customClass: {
                                popup: 'my-custom-popup-class',
                            },
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'No fue posible finalizar el proceso de registro por un error',
                        text: `Error: ${error}`,
                        icon: 'error',
                        customClass: {
                            popup: 'my-custom-popup-class',
                        },
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
        } else
        {Swal.fire({
            title: 'Debe ser mínimo de 8 caracteres, tener almenos una letra en mayúscula, almenos un número y almenos un caracter especial.',
            icon: 'error'
        });} 



    };

    return (
        <div>
            <Header />
            <div className="container my-5 py-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNombre">Nombre</label>
                            <input type="text" className="form-control" id="inputNombre" placeholder="Nombre" name="nombres" onChange={handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputApellidos">Apellidos</label>
                            <input type="text" className="form-control" id="inputApellidos" placeholder="Apellidos" name="apellidos" onChange={handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputIdentificación">Identificación</label>
                            <input type="text" className="form-control" id="inputIdentificacion" placeholder="Identificacion" name="identificacion" onChange={handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputDireccion">Dirección</label>
                            <input type="text" className="form-control" id="inputDireccion" placeholder="Direccion" name="direccion" onChange={handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTelefono">Teléfono</label>
                            <input type="text" className="form-control" id="inputTelefono" placeholder="Telefono" name="telefono" onChange={handleChange} />
                        </div>


                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email" onChange={handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" onChange={handleChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Registro;




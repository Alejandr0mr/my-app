import React, { useRef, useState } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Swal from 'sweetalert2';

const ciudadesColombia = [
    'Bogotá',
    'Medellín',
    'Cali',
    'Barranquilla',
    'Cartagena',
    'Cúcuta',
    'Bucaramanga',
    'Ibagué',
    'Santa Marta',
    'Pasto',
    'Manizales',
    'Pereira',
    'Villavicencio',
    'Neiva',
    'Armenia',
    'Sincelejo',
    'Popayán',
    'Valledupar'
    // Puedes agregar más ciudades aquí...
];

function Registro() {
    const [values, setValues] = useState({
        nombres: "",
        apellidos: "",
        identificacion: "",
        direccion: "",
        telefono: "",
        email: "",
        password: "",
        genero: "",
        ciudadNacimiento: "",
        fechaNacimiento: ""
    });

    const form = useRef();

    // Nuevo estado para controlar la visibilidad de la contraseña
    const [showPassword, setShowPassword] = useState(false);

    // Estado para almacenar los mensajes de error
    const [errors, setErrors] = useState({
        nombres: "",
        apellidos: "",
        identificacion: "",
        direccion: "",
        telefono: "",
        email: "",
        password: "",
        genero: "",
        ciudadNacimiento: "",
        fechaNacimiento: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValues = {
            ...values,
            [name]: value,
        };
        setValues(newValues);
        // Almacenar mensaje de error en el estado 'errors'
        // Según la validación correspondiente
        validateField(name, value);
    };

    const validateField = (name, value) => {
        switch (name) {
            case 'nombres':
                if (!value || value.length < 3) {
                    setErrors({ ...errors, nombres: 'El nombre debe tener al menos 3 caracteres' });
                } else {
                    setErrors({ ...errors, nombres: '' });
                }
                break;
            case 'apellidos':
                if (!value || value.length < 3) {
                    setErrors({ ...errors, apellidos: 'El apellido debe tener al menos 3 caracteres' });
                } else {
                    setErrors({ ...errors, apellidos: '' });
                }
                break;
            case 'identificacion':
                if (!value || value.length < 5 || value.length > 10) {
                    setErrors({ ...errors, identificacion: 'La identificación debe tener entre 5 y 10 números' });
                } else {
                    setErrors({ ...errors, identificacion: '' });
                }
                break;
            case 'direccion':
                if (!value || value.length < 15) {
                    setErrors({ ...errors, direccion: 'La dirección debe tener al menos 15 caracteres' });
                } else {
                    setErrors({ ...errors, direccion: '' });
                }
                break;
            case 'telefono':
                if (!value || value.length !== 10) {
                    setErrors({ ...errors, telefono: 'El teléfono debe tener 10 dígitos' });
                } else {
                    setErrors({ ...errors, telefono: '' });
                }
                break;
            case 'email':
                if (!value || !/^([a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value)) {
                    setErrors({ ...errors, email: 'El email debe tener el formato de una dirección de correo válida' });
                } else {
                    setErrors({ ...errors, email: '' });
                }
                break;
            case 'password':
                if (!value || value.length < 8 || !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}/.test(value)) {
                    setErrors({ ...errors, password: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial' });
                } else {
                    setErrors({ ...errors, password: '' });
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Verificar si hay algún mensaje de error en el estado 'errors'
        const isError = Object.values(errors).some(error => error !== "");
            // Verificar si hay algún campo vacío
    const isEmpty = Object.values(values).some(value => value.trim() === "");

    
        // Si no hay errores, enviar los datos
        if (!isError && !isEmpty ) {
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
                    form.current.reset()
                } else {
                    Swal.fire({
                        title: 'No fue posible crear el usuario',
                        text: `Error: ${response.status} - Correo o identificación invalidas`,
                        icon: 'error',
                        customClass: {
                            popup: 'my-custom-popup-class',
                        },
                        showConfirmButton: true,
                        timer: 4500
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
        } else {
            // Mostrar un mensaje de error indicando que hay campos inválidos
            Swal.fire({
                title: 'Hay campos inválidos. Por favor, corríjalos.',
                icon: 'error',
                customClass: {
                    popup: 'my-custom-popup-class',
                },
                showConfirmButton: false,
                timer: 2000
            });
        }
    };

    return (
        <div>
            <Header />
            <div className="container my-5 py-5">
                <form onSubmit={handleSubmit} ref={form}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNombre">Nombre</label>
                            <input type="text" className="form-control" id="inputNombre" placeholder="Nombre" name="nombres" onChange={handleChange} />
                            <span style={{ color: 'red' }}>{errors.nombres}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputApellidos">Apellidos</label>
                            <input type="text" className="form-control" id="inputApellidos" placeholder="Apellidos" name="apellidos" onChange={handleChange} />
                            <span style={{ color: 'red' }}>{errors.apellidos}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputIdentificación">Identificación</label>
                            <input type="text" className="form-control" id="inputIdentificacion" placeholder="Identificacion" name="identificacion" onChange={handleChange} />
                            <span style={{ color: 'red' }}>{errors.identificacion}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputDireccion">Dirección</label>
                            <input type="text" className="form-control" id="inputDireccion" placeholder="Direccion" name="direccion" onChange={handleChange} />
                            <span style={{ color: 'red' }}>{errors.direccion}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTelefono">Teléfono</label>
                            <input type="text" className="form-control" id="inputTelefono" placeholder="Telefono" name="telefono" onChange={handleChange} />
                            <span style={{ color: 'red' }}>{errors.telefono}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputGenero">Género</label>
                            <select className="form-control" id="inputGenero" name="genero" onChange={handleChange}>
                                <option value="">Seleccionar</option>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                                <option value="otro">Otro</option>
                            </select>
                            <span style={{ color: 'red' }}>{errors.genero}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCiudadNacimiento">Ciudad de Nacimiento</label>
                            <select className="form-control" id="inputCiudadNacimiento" name="ciudadNacimiento" onChange={handleChange}>
                                <option value="">Seleccionar</option>
                                {ciudadesColombia.map((ciudad, index) => (
                                    <option key={index} value={ciudad}>{ciudad}</option>
                                ))}
                            </select>
                            <span style={{ color: 'red' }}>{errors.ciudadNacimiento}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputFechaNacimiento">Fecha de Nacimiento</label>
                            <input type="date" className="form-control" id="inputFechaNacimiento" name="fechaNacimiento" onChange={handleChange} />
                            <span style={{ color: 'red' }}>{errors.fechaNacimiento}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email" onChange={handleChange} />
                            <span style={{ color: 'red' }}>{errors.email}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword">Password</label>
                            <div className="input-group">
                                <input type={showPassword ? "text" : "password"} className="form-control" id="inputPassword" placeholder="Password" name="password" onChange={handleChange} />
                                <div className="input-group-append">
                                    <button
                                        className={showPassword ? "btn btn-primary" : "btn btn-outline-primary"}
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? "Ocultar" : "Ver"}
                                    </button>
                                </div>
                            </div>
                            <span style={{ color: 'red' }}>{errors.password}</span>
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
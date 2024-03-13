
import Header from './header/Header'
import Footer from './footer/Footer'
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie' //https://www.npmjs.com/package/universal-cookie
import Swal from 'sweetalert2';

function Login() {

    const cookies = new Cookies()
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    //const [userName, setUserName] = useState("")
    const [showPassword, setShowPassword] = useState(true)

    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    //Guarda en la variable newValues los valores ingresados en el formulario de sesión
    const handleChange = (e) => {        
        const { name, value } = e.target
        const newValues = {
            ...values,
            [name]: value,
        }
        setValues(newValues)
    }
    

    const handleClickPassword = (e) => {
        setErrorPassword(false)
    }

    const handleClickEmail = (e) => {
        setErrorEmail(false)
    }

    const handleShowPassword = (e) => {
        setShowPassword(!showPassword)
    }

    const iniciarSesion = (e) => {
        e.preventDefault()
        console.log(values.email, values.password)
        
        if (values.password.length === 0 && values.email.length === 0) {
            setErrorEmail(true)
            setErrorPassword(true)
            return
        }
        if (values.password.length === 0) {
            setErrorPassword(true)
            return
        }
        if (values.email.length === 0) {
            setErrorEmail(true)
            return
        }
        fetch("http://localhost:3001/login",{
            method: 'POST',
            headers:{"Content-Type":"Application/json","Acept":"application/json"},
            body:JSON.stringify(values)
        })
        .then(response => {           
            if(response.status === 200) {
                cookies.set('email',values.email,{
                    secure:true,
                    sameSite:'None',
                    path:'/'
                })
                window.location.hash = '/sesion'
            }
            else{
                console.log("sdfd" ,response.status)
                Swal.fire({
                    title:"Las credenciales ingresadas no son correctas",
                    icon: "error"
                })
                window.location.hash = '/login'
            }
        })
        .catch(()=> Swal.fire({
            title:"No se puede iniciar sesión por un problema en el servidor",
            icon:"error"
        }),
        window.location.hash = '/login'
        )
    }

    //Si ya se inició sesión y escriben en la barra de direcciones '/login' entonces lo redirige al componente InicioSesionIniciada.
    useEffect(()=>{
        if(cookies.get('email')){
            window.location.hash = '/sesion'
        }
    })

    return (
        <div>
            <Header />
            <div class="container my-5 py-5">
                    <div class="container-fluid h-custom">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    class="img-fluid" alt="Sample image" />
                            </div>
                            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form onSubmit={iniciarSesion}>
                                    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                        <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                                        <button type="button" class="btn btn-primary btn-floating mx-1">
                                            <i class="fab fa-facebook-f"></i>
                                        </button>

                                        <button type="button" class="btn btn-primary btn-floating mx-1">
                                            <i class="fab fa-twitter"></i>
                                        </button>

                                        <button type="button" class="btn btn-primary btn-floating mx-1">
                                            <i class="fab fa-linkedin-in"></i>
                                        </button>
                                    </div>

                                    <div class="divider d-flex align-items-center my-4">
                                        <p class="text-center fw-bold mx-3 mb-0">Or</p>
                                    </div>

                                    <div class="form-outline mb-4">
                                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" name='email' onChange={handleChange} onClick={handleClickEmail}/>
                                            {errorEmail ? <p>Debe ingresar un email</p> : ""}

                                        <label class="form-label" for="form3Example3">Email address</label>
                                    </div>

                                    <div class="form-outline mb-3">
                                         <input type="password" id="typePasswordX-2" className="form-control form-control-lg" name='password' onChange={handleChange} onClick={handleClickPassword}/>
                                            {errorPassword ? <p>Debe ingresar una contraseña</p> : ""}
                                        <label class="form-label" for="form3Example4">Password</label>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="form-check mb-0">
                                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                            <label class="form-check-label" for="form2Example3">
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="#!" class="text-body">Forgot password?</a>
                                    </div>

                                    <div class="text-center text-lg-start mt-4 pt-2">
                                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                        <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                            class="link-danger">Register</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login
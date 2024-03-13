import React, { useEffect } from 'react'
import CardList from './body/CardList';
import Header from './header/Header'
import Footer from './footer/Footer';
import Cookie from 'js-cookie';
import Swal from 'sweetalert2'


function InicioSesionIniciada() {
    const cerraSesion = () => {
        Swal.fire({
            title: "¿Está seguro que desea cerrar la sesión?",
            icon: "question",
            buttons: true,
            dangerMode: true,
            showCancelButton: true,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Cookie.remove('email', { path: "/" })
                    window.location.hash = '/login'
                }
            })
    }
    //Si no se está logueado y en la barra de direcciones digitan /sesion entonces redirige al login
    useEffect(()=>{
        if(!Cookie.get('email')){
            window.location.hash = '/login'
        }
    })
    return (
        <div>
            <h4>Bienvenido {Cookie.get('email')}</h4>
            <button onClick={cerraSesion}>Cerrar sesión</button>
            {/* <img  className="w-3/4" src={logo} alt='logo' /> */}
            <Header />
            <CardList />
            <Footer />
        </div>
    )
}

export default InicioSesionIniciada
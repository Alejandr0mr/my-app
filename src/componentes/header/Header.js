import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='contenedor'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src='logo.jpg' className='logo' alt='Logo'></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>

                            <Link to='/tutoriales'>
                            <li className="nav-item">
                                <a className="nav-link" >Tutoriales</a>
                            </li>
                            </Link>
                            <Link to='/referencias'>
                            <li className="nav-item">
                                <a className="nav-link">Referencias</a>
                            </li>
                            </Link>
                            <Link to='/recursos'>
                            <li className="nav-item">
                                <a className="nav-link">Recursos</a>
                            </li>
                            </Link>
                            <Link to='/contacto'>
                            <li className="nav-item">
                                <a className="nav-link">Contacto</a>
                            </li>
                            </Link>
                            <Link to='/registro'>
                                <li className="nav-item">

                                    <a className="nav-link">Registrarse</a>
                                </li>
                            </Link>
                            <Link to='/login'>
                            <li className="nav-item">
                                <a className="nav-link ">Iniciar sesión</a>
                            </li>
                            </Link>

                            <Link to='/usuarios-registrados'>
                            <li className="nav-item">
                                <a className="nav-link">Ver usuarios</a>
                            </li>
                            </Link>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
import React from "react";
import Header from './header/Header'
import Footer from './footer/Footer'
import usuarios from './usuariosRegistrados.json'

function UsuariosRegistrados() {

    return (
        <div>
            <Header/>

            <div className="container">
            <h1 className="display-4 mt-3 text-center">Usuarios Registrados</h1> 
                <table className="table mt-5 shadow-lg">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Email</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Teléfono</th>
                            
                        </tr>
                    </thead>    
                    <tbody>

                        {usuarios.map(user => {
                            return (
                                <tr scope="row" key={user.nombres}>
                                    <td>{user.nombres}</td>
                                    <td>{user.apellidos}</td>
                                    <td>{user.email}</td>
                                    <td>{user.direccion}</td>
                                    <td>{user.telefono}</td>
                                </tr>
                            );
                        })}

                    </tbody>

                </table>

            </div>

            <Footer/>
        </div>
    )

}

export default UsuariosRegistrados
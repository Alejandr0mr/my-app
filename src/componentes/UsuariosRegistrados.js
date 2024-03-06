import React from "react";

import usuarios from './usuariosRegistrados.json'

function UsuariosRegistrados() {

    return (
        <div>
            <div className="container">
                <table class="table">
                    <thead>
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
        </div>
    )

}

export default UsuariosRegistrados
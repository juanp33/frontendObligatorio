import React from 'react';
import './IniciarSesion.css';

const IniciarSesion = () => {
    return (
        <div className="desktop">
            <div className="pagina-iniciar-sesion">
                <div className="rectangle-2"></div>
                <div className="tarjeta-usuario">
                    <div className="icon-person-add"></div>
                    <div className="preguntados">preguntI.Ados</div>
                    <div className="datos">
                        <div className="rectangle-3">
                            <div className="nombre-usuario">Nombre Usuario</div>
                        </div>
                        <div className="rectangle-4">
                            <div className="contrasena">Contraseña</div>
                        </div>
                    </div>
                    <div className="frame-5">
                        <div className="iniciar-sesion">Iniciar Sesión</div>
                    </div>
                    <div className="frame-6">
                        <div className="registrarse">Registrarse</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IniciarSesion;

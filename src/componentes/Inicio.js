import React from 'react';
import './Inicio.css';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

import MarkEmailRead from '@mui/icons-material/MarkEmailRead';

import Dispositivo from './elementos/Dispositivo';

function Inicio() {
    const generarEnlace = (enlace, isModal) => {
        if(isModal)
            window.open(enlace, 'name', 'height=805,width=650,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no ,modal=yes');
        else
            window.open(enlace, '_blank');
    }
    return (
        <div className="inicio" id="Inicio">
            <div className='inicio__container'>
                <div className='inicio__row'>
                    <div className='inicio__contenedorUno'>
                        <h1>Jonathan Macias</h1>
                        <h2>Full Stack Developer</h2>
                        <p></p>
                       
                        <div className='inicio__redes'>
                            
                            <LinkedIn className='inicio__icono' onClick={() => generarEnlace("https://www.linkedin.com/in/jonathan-eduardo-macias-mora-4425661b8/", false)} />                            
                            {/*<WhatsApp className='inicio__icono' /> */}
                            <MarkEmailRead className='inicio__icono' onClick={() => generarEnlace("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jthmacias1995@gmail.com", true)} />
                            <GitHub className='inicio__icono' onClick={() => generarEnlace("https://github.com/elprogramador2024", false)} />
                            
                        </div>
                    </div>
                    <div className='inicio__contenedorDos'>
                        <Dispositivo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio

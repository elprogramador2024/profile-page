import React from 'react';
import './Modal.css';

function Modal({img, titulo}) {
  
  return (
    <div id="ModalImage" className='modal'>
        <div className='modal-content'>
            <div className='modal-header'>
                <span id="Cerrar" className='close' onClick={() => document.getElementById("ModalImage").style.display = "none"}>
                    &times;
                </span>
                <h2>{titulo}</h2>
            </div>
            <div className='modal-body'>
                <img src={img} alt="Imagen Proyecto" />
            </div>
        </div>
    </div>
  )
}

export default Modal
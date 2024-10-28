import React, { useState, useEffect } from 'react';
import './Header.css';
import LogoDev from '@mui/icons-material/DeveloperMode';
import Menu from '@mui/icons-material/Menu';
import MenuOpen from '@mui/icons-material/MenuOpen';

function Header() {
    const [menu, setMenu] = useState(false);
    const mostrarMenu = (abrir) => {    
        //console.log(abrir);    
        if(window.innerWidth < 601)
        {            
            if(abrir)
                document.getElementsByClassName('header__navbar')[0].style.display = 'flex';
            else
                document.getElementsByClassName('header__navbar')[0].style.display = 'none';
        }else{
            
            document.getElementsByClassName('header__navbar')[0].style.display = 'flex';
            setMenu(false);
        }
         
    }

    useEffect(() => {
        window.addEventListener('resize', () =>mostrarMenu(false));
        return () => {
            window.removeEventListener('resize', () =>mostrarMenu(false));
        };
    }, [])
    return (
        <div className='header'>
            <div className='header__logo' >
                <LogoDev className='header__icono' />
                <span className='header_option'>DevJm</span>
            </div>

            <div className='header__navbar'>
                <div className='header__option' onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>
                    <span>Home</span>
                </div>
                <div className='header__option' onClick={() => {document.location.href = "#Perfil";}}>
                    <span>Profile</span>
                </div>
                <div className='header__option' onClick={() => {document.location.href = "#Proyectos";}}>
                    <span>Projects</span>
                </div>
                <div className='header__option' onClick={() => {document.location.href = "#Tecnologias";}}>
                    <span>Technologies</span>
                </div>
                <div className='header__option' onClick={() => { window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jemacias464@gmail.com', 'name', 'height=805,width=650,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no ,modal=yes')}}>
                    <button>Contacts</button>
                </div>                
            </div>
            {/* SOLO MOVILES */}
            <div className='header__menuMovil'>
                <button onClick={ () =>{
                    setMenu(!menu);
                    mostrarMenu( !menu );
                    }}>
                
                {!menu ? <Menu /> : <MenuOpen />}
                </button>
            </div>

        </div>
    )
}

export default Header

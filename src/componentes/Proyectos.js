import React, {useState} from 'react'
import './Proyectos.css';
import Modal from './elementos/Modal';

function Proyectos() {
    const [imagenActual, setImagenActual] = useState('');
    const [tituloActual, setTituloActual] = useState('');

    const verImagen = (img, titulo) => {
        setImagenActual(img);
        setTituloActual(titulo);

        let modalImg = document.getElementById("ModalImage");
        modalImg.style.display = "block";
    }
    return (
        <div className='proyectos' id="Proyectos">
            <div className='proyectos__container'>
            <h2>Projects</h2>
                <div className='proyectos__row'>                    

                    <div className='proyectos__tarjeta'>                        
                        <img src='proyectoUno.jpeg' onClick={()=> verImagen('proyectoUno.jpeg', 'Project | One')} />
                        <div className='proyectos__tarjetaCuerpo'>
                        <p>
                            Mobile application developed in React Native, focused on order-taking, with API integration and SQLite database, 
                            enabling offline functionality on both Android and iOS devices.
                        </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/reactnt-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='ecommerceClone.png' onClick={()=> verImagen('ecommerceClone.png', 'Ecommerce Clone')} />
                        <div className='proyectos__tarjetaCuerpo'>
                        <p>
                            Web sales system developed and implemented with React.js, 
                            Redux, and Firebase, offering a streamlined system for processing sales orders.
                        </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/reactjs-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='SQLiteProject.jpeg' onClick={()=> verImagen('SQLiteProject.jpeg', 'SQLite Project')} />
                        <div className='proyectos__tarjetaCuerpo'>
                        <p>
                            Mobile application developed in React Native for user management, implementing SQLite.
                        </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/reactnt-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='PortafolioProject.jpg' onClick={()=> verImagen('PortafolioProject.jpg', 'Portfolio')}  />
                        <div className='proyectos__tarjetaCuerpo'>
                        <p>
                            Responsive web portfolio developed and implemented with React, Tailwind CSS, and Firebase.
                        </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/reactjs-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='RedSocial.jpg' onClick={()=> verImagen('RedSocial.jpg', 'Social Network')}  />
                        <div className='proyectos__tarjetaCuerpo'>
                        <p>
                            Web application for generating reports, developed in ASP.NET Core and Razor Pages, 
                            which incorporates API consumption and PostgreSQL database connectivity 
                            through EntityFrameworkCore.
                        </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/net-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='TicketsApp.jpg' onClick={()=> verImagen('TicketsApp.jpg', 'Virtual Printer')} />
                        <div className='proyectos__tarjetaCuerpo'>
                        <p>
                            Web application developed with ASP.NET Core, designed to function as a virtual printer or ticketing system.
                        </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/net-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='SoporteForm.jpg' onClick={()=> verImagen('SoporteForm.jpg', 'Forms')} />
                        <div className='proyectos__tarjetaCuerpo'>
                        <p>
                            Web application for service registration and documentation, including a module 
                            for client signatures, developed in ASP.NET Core.
                        </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/net-icon.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>                        
                        <img src='nfts.png' onClick={()=> verImagen('nfts.png', 'NFT Collection')} />
                        <div className='proyectos__tarjetaCuerpo'>
                        <p>
                            Dynamic NFT creation project developed with Hardhat and Solidity, implementing Pinata.cloud and using the Rinkeby test network 
                            for deployment and automation with Keepers. The frontend was built with Next.js and React Moralis for interaction with the deployed contract.
                        </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/smart-contract.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>                        
                        <img src='pokemon-factory.jpg' onClick={()=> verImagen('pokemon-factory.jpg', 'Pokemon Factory')} />
                        <div className='proyectos__tarjetaCuerpo'>
                        <p>
                            Challenge project for creating Pokemons, developed with Hardhat and Solidity, 
                            and using Next.js, React Moralis, Tailwind CSS, Web3uikit for the frontend. It is published 
                            through the IPFS protocol, using MetaMask and the Rinkeby test network for project connection.
                        </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/smart-contract.png' />
                        </span>
                    </div>

                    <div className='proyectos__tarjeta'>
                        <img src='PrimerosProyectos.png' onClick={()=> verImagen('PrimerosProyectos.png', 'First Projects')}  />
                        <div className='proyectos__tarjetaCuerpo'>
                        <p>
                            Early desktop and web projects developed in Java with MySQL databases.
                        </p>
                        </div>
                        <span className='badge'>
                            <img src='/iconos/java-icon.png' />
                        </span>
                    </div>

                </div>
            </div>

            <Modal img={imagenActual} titulo={tituloActual} />

        </div>
    )
}

export default Proyectos

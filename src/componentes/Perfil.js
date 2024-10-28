import React from 'react';
import './Perfil.css';
import Language from '@mui/icons-material/Language';
import InstallMobile from '@mui/icons-material/InstallMobile';
import Storage from '@mui/icons-material/Storage';
import Cloud from '@mui/icons-material/Cloud';

import ReceiptLong from "@mui/icons-material/ReceiptLong";
import HubIcon from '@mui/icons-material/Hub';

function Perfil() {
    return (
        <div className='perfil' id="Perfil">
            <div className='perfil__container'>
                <h2>Profile</h2>                
                <div className='perfil__row'>
                    <div className='perfil__habilidad'>
                        <div className='perfil_icono'>
                            <Language className='icono' />
                        </div>
                        <div className='perfil__descripcion'>
                        <h3>Web Development</h3>
                        <p>Development and maintenance of web applications using languages such as C#, JavaScript, and Java, 
                            databases, REST and SOAP Web Services, utilizing models like MVC, Broker Pattern, 
                            MVVM, component-oriented, JDBC, and frameworks such as .NET, ASP.NET, 
                            React, and React Native.</p>
                        </div>
                    </div>

                    <div className='perfil__habilidad'>
                        <div className='perfil_icono'>
                            <InstallMobile className='icono' />
                        </div>
                        <div className='perfil__descripcion'>
                            <h3>Mobile and Hybrid Applications</h3>
                            <p>I have experience with React and React Native for cross-platform applications 
                                (Android & iOS), API consumption, 
                                Firebase integration, and SQLite integration for 
                                managing local databases in mobile applications.</p>
                        </div>
                    </div>
                </div>

                <div className='perfil__row'>
                    <div className='perfil__habilidad'>
                        <div className='perfil_icono'>
                            <Storage className='icono' />
                        </div>
                        <div className='perfil__descripcion'>
                            <h3>Databases</h3>
                            <p>I have worked with database management systems such as PostgreSQL, 
                                SQLite, and MySQL, for application development and integration, 
                                APIs, and database migration projects.</p>
                        </div>
                    </div>

                    <div className='perfil__habilidad'>
                        <div className='perfil_icono'>
                            <Cloud className='icono' />
                        </div>
                        <div className='perfil__descripcion'>
                        <   h3>Cloud</h3>
                        <p>I have integrated solutions for authentication, storage, and application deployment 
                            using Azure services like App Services, Virtual Machines, and Azure SQL Databases, 
                            as well as Firebase for authentication and storage, and DigitalOcean for Virtual Machine deployment.</p>
                        </div>
                    </div>
                </div>

                <div className='perfil__row'>
                    <div className='perfil__habilidad'>
                        <div className='perfil_icono'>
                            <HubIcon className='icono' />
                        </div>
                        <div className='perfil__descripcion'>
                            <h3>Web 3</h3>
                            <p>I have experience developing Dapps using frameworks like React/Next.js, and implementing technologies 
                                such as React Moralis, Ethers.js, and Web3.js, 
                                interacting with smart contracts and using injected providers like MetaMask, along with IPFS for 
                                application deployment and data persistence.</p>
                        </div>
                    </div>
                    <div className='perfil__habilidad'>
                        <div className='perfil_icono'>
                            <ReceiptLong className='icono' />
                        </div>
                        <div className='perfil__descripcion'>
                            <h3>Smart Contracts</h3>
                            <p>I have worked on projects using Solidity and Hardhat for developing and deploying 
                                contracts on Ethereum testnets, implementing libraries from OpenZeppelin and using Chainlink oracles 
                                for automation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil

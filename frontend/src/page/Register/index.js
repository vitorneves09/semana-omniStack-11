import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import LogoImg from '../../assest/logo.svg';


import './styles.css'

export default function Register(){
    const [name,setName] =useState();

    /**
     * asing user 
     */
    async function handleRegister(e){
    
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero"/>
                
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro,entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className = 'back-link' to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
               
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"/>
                    <input placeholder="E-mail" type="email"/>
                    <input placeholder="whatsapp"/>
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{width:80}}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';

import LogoImg from '../../assest/logo.svg';
import heroesImg from '../../assest/heroes.png';





export default function(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Be The Hero"/>
                <form >
                    <h1> Faça seu logon</h1>
                    <input placeholder="Sua ID"/>
                    <button className ="button" type="submit">Entrar</button>  

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            
            

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}
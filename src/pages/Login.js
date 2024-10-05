import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className='gradientBG'>
            <div className='loginForm'>
                <h1>Login</h1><br />
                <input type="text" placeholder="Nome" className='textInput'/><br /><br />
                <input type="password" placeholder="Senha" className='textInput'/><br /><br />
                <button onClick={() => navigate('/about')}>Entrar</button>
            </div>
        </div>
    );
};

export default Login;
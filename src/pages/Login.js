import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const users = {
        "Admin": "123",
        "Zac": "321"
    };

    const validateUser = () => {
        const userPassword = users[username];
        if (userPassword && userPassword === password) {
            navigate('/about');
        } else {
            alert('Login incorreto');
        }
    };

    return (
        <div className='gradientBG'>
            <div className='loginForm'>
                <h1>Login</h1><br />
                <input 
                    type="text" 
                    placeholder="Nome" 
                    className='textInput' 
                    value={username} 
                    onChange={(name) => setUsername(name.target.value)}
                /><br /><br />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    className='textInput' 
                    value={password} 
                    onChange={(pass) => setPassword(pass.target.value)}
                /><br /><br />
                <button onClick={validateUser}>Entrar</button>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
            <input type="text" placeholder="Nome" /><br />
            <input type="password" placeholder="Senha" /><br />
            <button onClick={() => navigate('/about')}>Fazer Login</button>
        </div>
    );
};

export default Login;
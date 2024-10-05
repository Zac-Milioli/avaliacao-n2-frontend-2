import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
            <h1 className="fade-in">Bem-vindo!</h1>
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    );
};

export default Home;
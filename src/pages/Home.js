import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='gradientBG'>
            <h1 className="fade-in">Bem-vindo!</h1>
            <button onClick={() => navigate('/login')}><strong>Login</strong></button>
        </div>
    );
};

export default Home;
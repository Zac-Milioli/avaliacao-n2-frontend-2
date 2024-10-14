import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <nav>
            <Link to="/about">Sobre o Zac</Link>
            <Link to="/evaluation">Avaliação N2</Link>
            <Link to="/development">Desenvolvimento</Link>
        </nav>
    </header>
);

export default Header;
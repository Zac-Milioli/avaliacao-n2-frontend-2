import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Evaluation = () => (
    <div>
        <Header />
        <div className='wikiPage'>
            <h1>Avaliação N2</h1>
            <p>
                A "Avaliação N2" da matéria de "Frontend 2" consiste em criar uma aplicação em ReactJS com base nos conteúdos vistos até o momento na disciplina. A aplicação deve atender aos seguintes requisitos:
            </p>
            <ul>
                <li>A aplicação deve ter menu e páginas.</li>
                <li>Uma das páginas deve ter um formulário.</li>
                <li>O trabalho pode ser algo relacionado ao PMI (Projeto Multidisciplinar Integrador).</li>
            </ul>
            <p>
                No entanto, as páginas desenvolvidas nesta aplicação não são referentes ao PMI. A aplicação desenvolvida é simples e contém as seguintes páginas:
            </p>
            <ul>
                <li>Uma página de boas-vindas.</li>
                <li>Uma página de login.</li>
                <li>Três páginas de wiki, acessíveis apenas após o login.</li>
            </ul>
        </div>
        <Footer />
    </div>
);

export default Evaluation;
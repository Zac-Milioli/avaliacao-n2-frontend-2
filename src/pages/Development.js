import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Development = () => (
    <div>
        <Header />
        <div className='wikiPage'>
            <h1>Desenvolvimento</h1>
            <div className='wikiTextCard'>
                <p>
                    O desenvolvimento do meu site com múltiplas páginas foi um processo meticuloso e organizado, seguindo uma sequência lógica para garantir a consistência e a funcionalidade da aplicação. Abaixo está uma descrição detalhada do processo de desenvolvimento:
                </p>
                <h2>Design Inicial das Páginas</h2>
                <p>
                    O primeiro passo foi desenvolver o design de todas as páginas. Comecei pela página de boas-vindas, que é a primeira interação do usuário com o site. Esta página foi projetada para ser simples e acolhedora, com uma animação de fade-in para o título de boas-vindas e um botão de login.
                </p>
                <p>
                    Em seguida, desenvolvi a página de login, que inclui campos de entrada para o nome e a senha do usuário, além de um botão para fazer login. A lógica para redirecionar o usuário para a página "Sobre o Zac" após o login foi implementada posteriormente. Seu desenvolvimento foi a parte 
                    mais complexa, pois as funções vistas em aula tornavam os códigos muito extensos e propensos à erros dada a pouca experiência com React do desenvolvedor. Após um pouco de pesquisa, alternativas mais fáceis foram encontradas e implementadas no projeto
                </p>
                <p>
                    Após a página de login, criei a página "Sobre o Zac", que inclui um cabeçalho e um rodapé fixos, além de links de navegação para as outras páginas. Esta página foi preenchida com a história acadêmica e profissional resumida do Zac.
                </p>
                <p>
                    A próxima página desenvolvida foi a "Avaliação N2", que segue o mesmo layout da página "Sobre o Zac", com cabeçalho e rodapé fixos e como conteúdo a explicação da avaliação N2 de Frontend 2.
                </p>
                <p>
                    A última página a ser projetada foi a página "Desenvolvimento", que também segue o mesmo layout das páginas anteriores e inclui uma descrição detalhada do processo de desenvolvimento do site.
                </p>
                <h2>Implementação da Lógica de Login</h2>
                <p>
                    Após o design inicial de todas as páginas, implementei a lógica para o login. Esta é apenas uma lógica simples que verifica se o usuário e senha se igualam aos registrados previamente em um JSON do sistema, permitindo que o usuário visualize as wikis caso válido.
                </p>
                <h2>Estrutura do Projeto</h2>
                <p>
                    Todo o projeto foi construído utilizando React, com as páginas separadas em diferentes arquivos para facilitar a manutenção e a escalabilidade. Além disso, os componentes reutilizáveis, como o cabeçalho (Header) e o rodapé (Footer), foram criados separadamente e importados nas páginas conforme necessário.
                </p>
                <h2>Design e Estilo</h2>
                <p>
                    O design escolhido para o site foi baseado em um tema escuro, utilizando uma paleta de cores que inclui preto, #2D0029, #cf3097 e #ecafd7. Algumas páginas apresentam um fundo com gradiente para adicionar um toque visual atraente. A consistência nas cores e no estilo foi mantida em todas as páginas para proporcionar uma experiência de usuário coesa.
                </p>
            </div>
        </div>
        <Footer />
    </div>
);

export default Development;
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => (
    <div>
        <Header />
            <div className='wikiPage'>
                <h1>Sobre o Zac</h1>
                <p>
                    Despertou seu primeiro interesse pela área de desenvolvimento de software em 2021, após sua nota no vestibular não ser 
                    suficiente para passar no curso que desejava (Engenharia Civil UFSC), contudo, suficiente para o curso de Sistemas para 
                    Internet (IFSC).
                </p>
                <br />
                <p>
                    Após 2 semestres do curso, já apaixonado pela área, teve a oportunidade de ingressar em seu primeiro estágio
                    na área, como desenvolvedor backend para a GSurf. Após cerca de 1 mês e meio de estágio, foi chamado para uma conversa pelo
                    chefe da empresa, que ofereceu um contrato CLT para permanecer na empresa de forma fixa. 
                </p>
                <p className='wikiTextCard'>
                    Este período foi onde as aulas presenciais da faculdade iriam retornar, e Zac não seria capaz de ir morar em Garopaba para
                    frequentas às aulas do curso, se vendo obrigado a tracá-lo. Contudo, por causa de um vestibular que havia feito há algum tempo,
                    teve nota suficiente para ingressar no curso de Engenharia Civil na UFSC, onde tomou parte das aulas por 5 semestres.
                </p> 
                <p>
                    Com 11 meses de trabalho, a empresa
                    foi vendida e os funcionários de mais baixo cargo foram todos demitidos. 
                </p>
                <br />
                <p>
                    Zac então decide buscar novas oportunidades, e em março do ano seguinte ele se junta ao Laboratório de Eficiência Energética 
                    da UFSC, onde trabalhou por quase 2 anos com engenharia de software e solução de problemas com desenvolvimento. O LabEEE foi
                    o seu espaço de maior desenvolvimento pessoal e profissional ao longo de sua carreira, onde conheceu verdadeiramente do que a
                    tecnologia é capaz, refinando suas habilidades e aprendendo a valorizar-se como profissional. 
                </p>
                <p className='wikiTextCard'>
                    Pouco tempo após iniciar o trabalho com o LabEEE, Zac iniciou paralelamente o curso de Análise e Desenvolvimento de Sistemas no
                    Cesusc, onde está atualmente. Nos primeiros dois semestres, Zac esteve cursando simultaneamente Engenharia Civil, ADS e trabalhando
                    no LabEEE. Porém, por não sentir que Engenharia Civil seria uma área onde poderia encontrar realização profissional e pessoal, trancou
                    o curso na metade de 2023.
                </p> 
                <p>
                    Ainda com o laboratório, publicou
                    diversos softwares de código aberto utilizados para funções específicas referentes à eficiência energética, ambiente construído e
                    conforto térmico, além de artigos científicos aceitos em grandes convenções de tecnologia e construção civil. A mais recente onde
                    esteve presente ocorreu no ENTAC 2024, em Maceió, onde esteve presente para apresentar seus 3 artigos publicados.
                </p>
                <br />
                <p>
                    Atualmente, Zac está estagiando no grupo AG Capital com expectativa de fazer carreira na empresa, ou, alternativamente, receber reconhecimento
                    no mercado para conseguir salários e condições cada vez melhores.
                </p>
            </div>
        <Footer />
    </div>
);

export default About;
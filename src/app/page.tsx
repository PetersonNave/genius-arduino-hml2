import React from "react";
import BaseSection from "./widgets/BasicSection";
import StudentsSection from "./widgets/studentsSection";
import NameProjectSection from "./components/nameProjectSection";
import AboutProjectSection from "./components/aboutProjectSection";
import SectionContainer from "./components/widthContainer";
import ArduinoExplainedArea from "./widgets/arduinoExplainedArea";

const Home = () => {
 

  return (
    <>
      <NameProjectSection title="GENIUS GAME! 🤖"></NameProjectSection>
      <hr />
      <BaseSection
        id="introducao"
        bgColor="#e0e0e0"
        tag="caiu de paraquedas? 🪂"
        title="Antes de tudo!"
        description="Este projeto é uma aplicação prática na área de eletrônica e programação para iniciantes e entusiastas em Arduino. Ele simula um jogo de memorização onde LEDs coloridos representam as cores do jogo original, e os botões servem para reproduzir as sequências geradas pelo Arduino. A cada nível concluído, o desafio aumenta, exigindo mais do jogador e promovendo o aprendizado contínuo de uma forma divertida e envolvente."
        component={AboutProjectSection}
      ></BaseSection>
      <hr />
      <BaseSection
        id="como-jogar"
        bgColor="rgba(229, 210, 57, 0.2)"
        tag="Tá! E como jogar?! 🎮"
        title="Confira a explicação que fizemos para você!"
        description="Nossa designer Gabi te mostra o passo a passo de como funciona o nosso jogo. Saca só!"
      ></BaseSection>
      <SectionContainer bgColor="rgba(229, 210, 57, 0.2)">
        <div style={{
          width: 'fit-content',
          display: 'flex',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '5px solid rgba(0, 170, 153, 0.8)',
          marginBottom: '48px'
        }}>
          <video loop controls height="500px">
            <source src="/explicando-o-jogo.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
      </SectionContainer>
      <hr />
      <BaseSection
        id="como-funciona"
        bgColor="rgba(86, 218, 59, 0.2)"
        tag="Mão na massa! 🤖"
        title="Veja um pouco de como fizemos a montagem do nosso projeto!"
        description="Nosso desenvolvedor Matias te mostra detalhadamente como o protótipo foi feito, confira!"
      ></BaseSection>
      <SectionContainer bgColor="rgba(86, 218, 59, 0.2)">
        <div style={{
          width: 'fit-content',
          display: 'flex',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '5px solid rgba(0, 170, 153, 0.8)',
          marginBottom: '48px'
        }}>
       <iframe width="900px" height="500px" src="https://www.youtube.com/embed/VwEwNmzxp3M?si=z3bLR3LRFCFhIH4b" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </SectionContainer>
        <ArduinoExplainedArea/>
        <hr />
      <BaseSection
      bgColor="#e0e0e0"
        tag="desafios e lições 📝"
        title="Nossa equipe venceu muitos desafios nessa jornada, se liga!"
        split
        description={`No início, enfrentamos muitas dificuldades para decidir o que, de fato, iríamos fazer. Precisávamos de um projeto que fosse simples e interessante. Com o tempo, as ideias dos integrantes foram convergindo, e assim nasceu o nosso projeto. Depois disso, enfrentamos alguns desafios técnicos, especialmente relacionados à prototipação com Arduino e programação em geral. No entanto, a equipe, com muita resiliência, conseguiu superar essas questões. A principal lição aprendida foi o reforço da ideia de que "a união faz a força". Conseguimos combinar os conhecimentos de todos, em áreas distintas, para realizar este projeto. Todos ajudaram uns aos outros, e, juntos, alcançamos um resultado final satisfatório`}
      ></BaseSection>
      <hr />
      <BaseSection
      id="equipe"
      bgColor="rgba(208, 47, 47, 0.2)"
        tag="desenvolvedores 🧑🏽‍💻"
        title="Confira nossa equipe!"
        description="Equipe super engajada e responsável pelo desenvolvimento do projeto."
      ></BaseSection>
      <StudentsSection />
      <footer style={{height: '56px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: "#1f1f1f", color: "#FFF", fontWeight: 'bold', fontSize: "2rem"}}>VOLTE SEMPRE ❤️</footer>
    </>
  );
};

export default Home;

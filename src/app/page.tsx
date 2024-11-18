import React from "react";
import BaseSection from "./widgets/BasicSection";
import StudentsSection from "./widgets/studentsSection";
import NameProjectSection from "./components/nameProjectSection";
import AboutProjectSection from "./components/aboutProjectSection";

const Home = () =>{
    return (
      <>
      <NameProjectSection title="Genius Game"></NameProjectSection>
      <BaseSection tag="descrição do projeto" title="Sobre o projeto" description="Boas-vindas a descriçãi lorem ipsum donore" component={AboutProjectSection}>
      </BaseSection>
      <BaseSection bgColor="#e0e0e0" tag="passo a passo" title="Confira como conseguímos realizar esse projeto com maestria" description="nossa equipe trabalhou bastante para conseguirmos esse tal feito, teste teste teste teste ">
      </BaseSection>
      <BaseSection tag="estudantes" title="Confira nossa equipe" description="Autores responsáveis pelo desenvolvimeto do projeto.">
      </BaseSection>
      <StudentsSection/>
      </>

    )
}

export default Home
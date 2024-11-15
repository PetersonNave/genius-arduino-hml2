import React from "react";
import SectionContainer from "./components/widthContainer";
import BaseSection from "./widgets/BasicSection";
import StudentsSection from "./widgets/studentsSection";

const Home = () =>{
    return (
      <>
      <BaseSection title="DESCRIÇÃO DO PROJETO" description="Boas-vindas a descriçãi lorem ipsum donore">
      </BaseSection>
      <BaseSection bgColor="#e0e0e0" tag="passo a passo" title="Confira como conseguímos realizar esse projeto com maestria" description="nossa equipe trabalhou bastante para conseguirmos esse tal feito, teste teste teste teste ">
      </BaseSection>
      <BaseSection tag="os melhores" title="Confira nossa equipe" description="Nossa equipe maravilhosa e linda">
      </BaseSection>
      <StudentsSection/>
      </>

    )
}

export default Home
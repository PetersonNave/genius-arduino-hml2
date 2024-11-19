import React from "react";
import styles from "./name-project.module.scss";
import SectionContainer from "@/app/components/widthContainer";

const NameProjectSection = ({title}: {title:string}) => {
    return  (
        <SectionContainer>
            <div className={styles.nameProjectContainer} id="inicio">
                <h1 className="animated-text">
                    {title}
                </h1>
                <h2 className={styles.subtitle}><i>Desafie sua Memória e Prove que Você é um Gênio!</i></h2>
            </div>
        </SectionContainer>
    )
}

export default NameProjectSection
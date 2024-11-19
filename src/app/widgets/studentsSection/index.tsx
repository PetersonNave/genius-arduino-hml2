import React from "react";
import CardWithImage from "@/app/components/cardWithImage";
import SectionContainer from "@/app/components/widthContainer";
import styles from "./style.module.scss"

const students = [
    {
        name: 'Maria Gabriela Damásio Bezerra',
        image: '/gabi.png',
        link: 'https://github.com/gabidamasio',
        surname: "Gabi",
        linkedin: "https://www.linkedin.com/in/gabriela-dam%C3%A1sio-719b6b323"
    },
    {
        name: 'Paulo Victor Gomes Aguiar',
        image: '/paulo.png',
        link: 'https://github.com/pauloaguiar99',
        surname: "PV",
        linkedin: "https://br.linkedin.com/in/paulo-aguiarmv"
    },
    {
        name: 'Peterson Jesus Feitosa de Melo',
        image: '/peterson.png',
        link: 'https://github.com/PetersonNave',
         surname: "Pet",
         linkedin: "https://www.linkedin.com/in/peterson-melo/"
    },
    {
        name: 'Rayane Cavalcanti da Silva',
        image: '/rayane.png',
        link: 'https://github.com/Rayane32',
         surname: "Ray",
         linkedin: "https://www.linkedin.com/in/rayane-cavalcanti-da-silva-31aa79243/"
    },
    {
        name: 'Victor César Matias da Silva',
        image: '/matias.png',
        link: 'https://github.com/victorrmatiass',
         surname: "Matias",
         linkedin: "https://www.linkedin.com/in/vcms/"
    }

]

const StudentsSection = () => {
    return <SectionContainer bgColor="rgba(208, 47, 47, 0.2)">
            <div className={styles.container}>
                {
                    students.map((item, index) => {
                        return <CardWithImage linkedin={item.linkedin} surname={item.surname} key={`s-${index}`} nome={item.name} caminho={item.image} link={item.link}/>
                    })
                }
            </div>
        </SectionContainer>
}

export default StudentsSection;
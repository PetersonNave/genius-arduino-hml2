import React from "react";
import CardWithImage from "@/app/components/cardWithImage";
import SectionContainer from "@/app/components/widthContainer";
import styles from "./style.module.scss"

const students = [
    {
        name: 'Maria Gabriela Damásio Bezerra',
        image: '/gabi.png',
        link: 'https://www.linkedin.com/in/gabriela-dam%C3%A1sio-719b6b323/',
        surname: "Gabi",
        linkedin: "/"
    },
    {
        name: 'Paulo Victor Gomes Aguiar',
        image: '/paulo.png',
        link: '',
        surname: "PV",
        linkedin: "/"
    },
    {
        name: 'Peterson Jesus Feitosa de Melo',
        image: '/peterson.png',
        link: 'https://www.linkedin.com/in/peterson-melo/',
         surname: "Pet",
         linkedin: "https://www.linkedin.com/in/peterson-melo/"
    },
    {
        name: 'Rayane Cavalcanti da Silva',
        image: '/rayane.png',
        link: 'https://www.linkedin.com/in/rayane-cavalcanti-da-silva-31aa79243/',
         surname: "Ray",
         linkedin: "https://www.linkedin.com/in/rayane-cavalcanti-da-silva-31aa79243/"
    },
    {
        name: 'Victor César Matias da Silva',
        image: '/matias.png',
        link: 'https://www.linkedin.com/in/vcms/',
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
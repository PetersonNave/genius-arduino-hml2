import React from "react";
import CardWithImage from "@/app/components/cardWithImage";
import SectionContainer from "@/app/components/widthContainer";
import styles from "./style.module.scss"

const students = [
    {
        name: 'Rayane Silva',
        image: '/download.jpg'
    },
    {
        name: 'Paulo victor',
        image: '/download.jpg'
    },
    {
        name: 'Peterson Melo',
        image: '/download.jpg'
    }

]

const StudentsSection = () => {
    return <SectionContainer>
            <div className={styles.container}>
                {
                    students.map((item, index) => {
                        return <CardWithImage key={index} nome={item.name} caminho={item.image}/>
                    })
                }
            </div>
        </SectionContainer>
}

export default StudentsSection;
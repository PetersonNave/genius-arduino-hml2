import SectionContainer from "@/app/components/widthContainer";
import React from "react";
import styles from './index.module.scss'

const BaseSection = ({tag, title, description, bgColor}:{bgColor?: string, tag?: string, title: string, description: string}) =>{
  return  (
        <SectionContainer bgColor={bgColor}>
            <div className={styles.content}>
            {
                tag && <span className={styles.tag}>{tag}</span>
            }
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>
                {description}
            </p>

            </div>
        </SectionContainer>
    )
}

export default BaseSection
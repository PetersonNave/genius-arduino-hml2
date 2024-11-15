import React from "react";
import styles from './index.module.scss'

const SectionContainer = ({children, bgColor}:{children: any, bgColor?: string}) =>{
    return <section style={{...(bgColor && {backgroundColor: bgColor})}} className={styles.container}>
        <div className={styles.widthContainer}>
        {children}
        </div>
    </section>  
}

export default SectionContainer
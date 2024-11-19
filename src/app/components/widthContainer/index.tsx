import React from "react";
import styles from './index.module.scss'

const SectionContainer = ({children, bgColor, className, id}:{children: any, bgColor?: string, className?: any, id?: string}) =>{
    return <section id={id?id:""} style={{...(bgColor && {backgroundColor: bgColor})}} className={styles.container}>
        <div className={`${styles.widthContainer} ${className && className}`}>
        {children}
        </div>
    </section>  
}

export default SectionContainer
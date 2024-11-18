import SectionContainer from "@/app/components/widthContainer";
import React from "react";
import styles from './index.module.scss'

const BaseSection = ({tag, title, description, bgColor, component}:{bgColor?: string, tag?: string, title: string, description: string, component?:any}) =>{

    const DynamicComponent = component;

    const renderContent = () => {
        if (DynamicComponent) {
          return (
            <div className={styles.component}>
              {DynamicComponent && <DynamicComponent />}
            </div>
          );
        }
      };

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

                {renderContent()}
            </div>
        </SectionContainer>
    )
}

export default BaseSection
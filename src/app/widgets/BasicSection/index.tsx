import SectionContainer from "@/app/components/widthContainer";
import React from "react";
import styles from "./index.module.scss";

const BaseSection = ({
  split = false,
  tag,
  title,
  description,
  bgColor,
  component,
  id,
}: {
  split?: boolean;
  id?: string;
  bgColor?: string;
  tag?: string;
  title: string;
  description: string;
  component?: any;
}) => {
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

  return (
    <SectionContainer id={id ? id : ""} bgColor={bgColor}>
      <div className={styles.content}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <h2 className={styles.title}>{title}</h2>

        {split ? (
          <>
            {description.split(".").map((item, key) => {
              return (
                <p style={{maxWidth: "60%"}} key={key}>
                  <i>{item}.</i>
                </p>
              );
            })}
          </>
        ) : (
          <p className={styles.description}>{description}</p>
        )}

        {renderContent()}
      </div>
    </SectionContainer>
  );
};

export default BaseSection;

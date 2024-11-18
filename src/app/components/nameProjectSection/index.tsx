import React from "react";
import Style from "./name-project.module.scss";
import SectionContainer from "@/app/components/widthContainer";

const NameProjectSection = ({title}: {title:string}) => {
    return  (
        <SectionContainer>
            <div id={Style.nameProjectContainer}>
                <h1>
                    {title}
                </h1>

            </div>
        </SectionContainer>
    )
}

export default NameProjectSection
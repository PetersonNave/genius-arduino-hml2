"use client";
import React from "react";
import SectionContainer from "@/app/components/widthContainer";
import styles from "./about-section.module.scss";
import { title } from "process";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutProjectSection = () => {
  const projectTabs: { tabTitle: string; tabContent: string }[] = [
    {
      tabTitle: "Resuminho do Game",
      tabContent: "- Nosso jogo é composto por um dispositivo com cinco botões coloridos.- A cada rodada, o jogo acende os botões em uma sequência que o jogador deve memorizar.- Após o jogo exibir a sequência, o jogador deve repetir os botões na mesma ordem, tocando nos botões correspondentes.- A cada rodada, a sequência aumenta em um botão, ficando progressivamente mais difícil",
    },
    {
      tabTitle: "Objetivo do projeto",
      tabContent:
        "O principal objetivo deste projeto é desenvolver um jogo interativo inspirado no clássico 'Simon' (ou 'Genius'), que desafia o jogador a reproduzir sequências de cores crescentes. Além de testar a memória do jogador, o projeto visa aprofundar o conhecimento sobre componentes do Arduino, controle de estruturas condicionais e de repetição em C++",
    },
    {
      tabTitle: "Motivação",
      tabContent:
        "O projeto Genius em Arduino é importante pois combina aprendizado de eletrônica e programação com o desenvolvimento cognitivo. Esse projeto oferece uma oportunidade prática para aprimorar habilidades em montagem de circuitos e programação no Arduino, incentivando o aprendizado de forma interativa. Além disso, o jogo promove o exercício de memorização, que é uma habilidade mental essencial",
    },
  ];

  return (
    <div style={{height: '253px'}}>
 <Tabs>
        <TabList className={styles.tabHeader}>
            {
                projectTabs.map((item, key)=>{
                    return(
                        <Tab className={styles.tabTitle} key={key}>{item.tabTitle}</Tab>
                    )
                })
            }

        </TabList>

        {
                projectTabs.map((item, key)=>{
                    return(
                        <TabPanel className={styles.tabContent} key={key}>
                        <span>
                            {item.tabContent.split(".").map((item, key)=>{
                                return (<p key={key}><i>{item}.</i></p>)
                            })}
                        </span>
                      </TabPanel>
                    )
                })
            }
       
      </Tabs>
    </div>
     
  );
};

export default AboutProjectSection;

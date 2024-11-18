import React from "react";
import SectionContainer from "@/app/components/widthContainer";
import Style from "./about-section.module.scss";
import { title } from "process";

const AboutProjectSection = () => {
    return  (
        <SectionContainer>
            <div id={Style.aboutProjetcContainer}>
                <div className={Style.aboutProjetcContent}>
                    <h1 className={Style.title}>
                        Contextualização
                    </h1>

                    <div className={Style.aboutProjetcCard}>
                        <span> Este projeto é uma aplicação prática na área de eletrônica e programação para iniciantes e entusiastas em Arduino. Ele simula um jogo de memorização onde LEDs coloridos representam as cores do jogo original, e os botões servem para reproduzir as sequências geradas pelo Arduino. A cada nível concluído, o desafio aumenta, exigindo mais do jogador e promovendo o aprendizado contínuo de uma forma divertida e envolvente.
                        </span>
                    </div>
                </div>

                <div>
                    <h1>
                        Objetivo do projeto
                    </h1>

                    <span> O principal objetivo deste projeto é desenvolver um jogo interativo inspirado no clássico "Simon" (ou "Genius"), que desafia o jogador a reproduzir sequências de cores crescentes. Além de testar a memória do jogador, o projeto visa aprofundar o conhecimento sobre componentes do Arduino, controle de estruturas condicionais e de repetição em C++.
                    </span>
                </div>

                <div>
                    <h1>
                        Motivação
                    </h1>

                    <span> O projeto Genius em Arduino é importante pois combina aprendizado de eletrônica e programação com o desenvolvimento cognitivo. Esse projeto oferece uma oportunidade prática para aprimorar habilidades em montagem de circuitos e programação no Arduino, incentivando o aprendizado de forma interativa. Além disso, o jogo promove o exercício de memorização, que é uma habilidade mental essencial.
                    </span>
                </div>

            </div>
        </SectionContainer>
    )
}

export default AboutProjectSection
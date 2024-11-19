'use client'
import SectionContainer from "@/app/components/widthContainer";
import React, { useEffect } from "react";
import ImgProposito from "../ImgProposito";
import styles from './arduinoExplained.module.scss'
import BaseSection from "../BasicSection";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const ArduinoExplainedArea = () =>{
    const imgs = [
        {
          "src": "/arduino-montagem/001.jpg",
          "title": "Mesa vazia! Início do projeto!",
          
        },
        {
          "src": "/arduino-montagem/002.jpg",
          "title": "Adicionando o Arduino UNO",
        },
        {
          "src": "/arduino-montagem/003.jpg",
          "title": "Adicionando a protoboard",
        },
        {
          "src": "/arduino-montagem/004.jpg",
          "title": "Adicionando cinco botões em sequência na protoboard",
        },
        {
          "src": "/arduino-montagem/005.jpg",
          "title": "Adicionando resistores de 300Ω aos terminais 2a dos botões",
        },
        {
          "src": "/arduino-montagem/006.jpg",
          "title": "Conectando os resistores dos botões à porta GND (Terra) do Arduino UNO através da trilha negativa inferior da protoboard",
        },
        {
          "src": "/arduino-montagem/007.jpg",
          "title": "Conectando os resistores dos botões à porta GND (Terra) do Arduino UNO através da trilha negativa inferior da protoboard",
        },
        {
          "src": "/arduino-montagem/008.jpg",
          "title": "Conectando a trilha positiva inferior da protoboard à porta de 5V do Arduino UNO",
        },
        {
          "src": "/arduino-montagem/009.jpg",
          "title": "Conectando os botões 1, 2, 3, 4 e 5 às respectivas portas digitais 13, 12, 11, 10 e 9 do Arduino UNO",
        },
        {
          "src": "/arduino-montagem/010.jpg",
          "title": "Adicionando resistores de 220Ω para iniciar a construção dos circuitos dos LEDs",
        },
        {
          "src": "/arduino-montagem/011.jpg",
          "title": "Conectando os resistores dos LEDs à porta GND (Terra) do Arduino UNO através da trilha negativa superior da protoboard",
        },
        {
          "src": "/arduino-montagem/012.jpg",
          "title": "Adicionando os LEDs em série com seus respectivos resistores.",
        },
        {
          "src": "/arduino-montagem/013.jpg",
          "title": "Conectando os LEDs 1, 2, 3, 4 e 5 às respectivas portas digitais 7, 6, 5, 4 e 3 do Arduino UNO",
        },
        {
          "src": "/arduino-montagem/014.jpg",
          "title": "Adicionando o buzzer, conectando seu terminal negativo à trilha negativa superior da protoboard em série com um resistor de 220Ω e seu terminal positivo à porta digital 8 do Arduino UNO.",
        }
      ]

      const codeString = `
     // Definições de pinos para LEDs e botões
const int led_vermelho_1 = 7;
const int led_verde_1 = 6;
const int led_amarelo_1 = 5;
const int led_verde_2 = 4;
const int led_vermelho_2 = 3;

const int botao1 = 13;
const int botao2 = 12;
const int botao3 = 11;
const int botao4 = 10;
const int botao5 = 9;

const int buzzer = 8;

// Sequência e nível do jogo
int sequencia[100];  // Capacidade para até 100 níveis
int resposta[100];
int nivel = 1;

// Frequências dos sons para cada LED
const int frequencias[5] = {400, 480, 570, 660, 750};

void setup() {
  // Define a semente aleatória usando ruído de um pino analógico desconectado
  randomSeed(analogRead(0));
  
  // Configurar pinos de LEDs como saída
  pinMode(led_vermelho_1, OUTPUT);
  pinMode(led_verde_1, OUTPUT);
  pinMode(led_amarelo_1, OUTPUT);
  pinMode(led_verde_2, OUTPUT);
  pinMode(led_vermelho_2, OUTPUT);

  // Configurar pinos de botões como entrada
  pinMode(botao1, INPUT);
  pinMode(botao2, INPUT);
  pinMode(botao3, INPUT);
  pinMode(botao4, INPUT);
  pinMode(botao5, INPUT);

  // Configurar o buzzer como saída
  pinMode(buzzer, OUTPUT);

  // Gerar a primeira sequência
  gerarSequencia();
  
  // Indicar o início do jogo
  digitalWrite(led_vermelho_1, HIGH);
  digitalWrite(led_verde_1, HIGH);
  digitalWrite(led_amarelo_1, HIGH);
  digitalWrite(led_verde_2, HIGH);
  digitalWrite(led_vermelho_2, HIGH);
  delay(2000);
  digitalWrite(led_vermelho_1, LOW);
  digitalWrite(led_verde_1, LOW);
  digitalWrite(led_amarelo_1, LOW);
  digitalWrite(led_verde_2, LOW);
  digitalWrite(led_vermelho_2, LOW);
  delay(500);
  tocarSomAcerto();
  delay(1000);
}

void loop() {
  // Exibir a sequência para o jogador
  mostrarSequencia();

  // Esperar o jogador inserir a sequência
  if (verificarResposta()) {
    // Jogador acertou a sequência
    nivel++;
    delay(1000);
    tocarSomAcerto();
    gerarSequencia();  // Adiciona um novo LED à sequência
    delay(1000);
  } else {
    // Jogador errou, tocar som de erro e resetar o jogo
    delay(500);
    tocarSomErro();
    delay(1000);
    resetarJogo();
  }
}

// Função para gerar a sequência do jogo
void gerarSequencia() {
  // Adiciona um novo LED aleatório no final da sequência atual
  sequencia[nivel - 1] = random(0, 5);  // 0 a 4 para cinco LEDs
}

// Função para mostrar a sequência para o jogador
void mostrarSequencia() {
  for (int i = 0; i < nivel; i++) {
    int led = sequencia[i];
    acenderLED(led);
    tocarSomLED(led);
    delay(500);
    apagarLED(led);
    delay(300);
  }
}

// Função para verificar se a sequência inserida está correta
bool verificarResposta() {
  int counter = 0;

  while (counter < nivel) {
    int botaoPressionado = -1;

    // Aguardar até que um dos botões seja pressionado
    while (botaoPressionado == -1) {
      if (digitalRead(botao1) == HIGH) {
        botaoPressionado = 0;
      } else if (digitalRead(botao2) == HIGH) {
        botaoPressionado = 1;
      } else if (digitalRead(botao3) == HIGH) {
        botaoPressionado = 2;
      } else if (digitalRead(botao4) == HIGH) {
        botaoPressionado = 3;
      } else if (digitalRead(botao5) == HIGH) {
        botaoPressionado = 4;
      }
    }

    // Toca o som do LED pressionado pelo jogador
    acenderLED(botaoPressionado);
    delay(300);
    tocarSomLED(botaoPressionado);
    apagarLED(botaoPressionado);

    // Armazena a resposta do jogador e verifica
    resposta[counter] = botaoPressionado;

    if (resposta[counter] != sequencia[counter]) {
      return false;
    }

    counter++;
    delay(300);
  }

  return true;
}

// Função para acender um LED específico
void acenderLED(int led) {
  switch (led) {
    case 0: digitalWrite(led_vermelho_1, HIGH); break;
    case 1: digitalWrite(led_verde_1, HIGH); break;
    case 2: digitalWrite(led_amarelo_1, HIGH); break;
    case 3: digitalWrite(led_verde_2, HIGH); break;
    case 4: digitalWrite(led_vermelho_2, HIGH); break;
  }
}

// Função para apagar o LED específico
void apagarLED(int led) {
  switch (led) {
    case 0: digitalWrite(led_vermelho_1, LOW); break;
    case 1: digitalWrite(led_verde_1, LOW); break;
    case 2: digitalWrite(led_amarelo_1, LOW); break;
    case 3: digitalWrite(led_verde_2, LOW); break;
    case 4: digitalWrite(led_vermelho_2, LOW); break;
  }
}

// Função para tocar o som de um LED específico
void tocarSomLED(int led) {
  tone(buzzer, frequencias[led], 200);  // Toca o tom específico por 200 ms
}

// Função para tocar o som de acerto
void tocarSomAcerto() {
  tone(buzzer, 980, 500);  // Som de acerto (880 Hz)
  delay(500);
  noTone(buzzer);
}

// Função para tocar o som de erro
void tocarSomErro() {
  tone(buzzer, 200, 500);  // Som de erro (200 Hz)
  delay(500);
  noTone(buzzer);
}

// Função para reiniciar o jogo
void resetarJogo() {
  nivel = 1;       // Reseta para o primeiro nível
  gerarSequencia();  // Gera uma nova sequência inicial
  delay(500);
  
   // Indicar o reinicio do jogo
  digitalWrite(led_vermelho_1, HIGH);
  digitalWrite(led_verde_1, HIGH);
  digitalWrite(led_amarelo_1, HIGH);
  digitalWrite(led_verde_2, HIGH);
  digitalWrite(led_vermelho_2, HIGH);
  delay(2000);
  digitalWrite(led_vermelho_1, LOW);
  digitalWrite(led_verde_1, LOW);
  digitalWrite(led_amarelo_1, LOW);
  digitalWrite(led_verde_2, LOW);
  digitalWrite(led_vermelho_2, LOW);
  delay(500);
  tocarSomAcerto();
  delay(1000);
}

    `;
    useEffect(() => {
      hljs.highlightAll(); 
    }, []);
     
    return (
      <>
      <hr />
      <BaseSection id="etapas" bgColor="#f4f5f7" title="Etapas do desenvolvimento!" description="Dê uma olhada nesse esquema que fizemos mostrando as etapas da montagem do arduíno"/>
      <SectionContainer bgColor="#f4f5f7" >
          <div className={styles.arduinoExplainedContainer}>
            <ImgProposito imgs={imgs}/>

          </div>
        </SectionContainer>
        <hr/>
      <BaseSection  bgColor="#f4f5f7" title="O que usamos no desenvolvimento?" description="Veja a seguir quais aplicativos, plataformas ou ferramentas foram utilizados no projeto!"/>
      <SectionContainer bgColor="#f4f5f7">
      <ul style={{marginLeft: '20px', marginBottom: '28px', lineHeight: "180%"}}>
        <h4>Softwares e Plataformas:</h4>
        <li>Nest.Js para o desenvolvimento do site;</li>
        <li>GitHub para versionamento do código;</li>
        <li>Vercel para hospedagem do site;</li>
        <li>Capcut para a edição dos vídeos-tutoriais;</li>
        <li>Arduíno IDE para o desenvolvimento do código para o protótipo;</li>
        <br />
        <h4>Hardware:</h4>  
        <li>5 Botões de cores arbitrárias</li>
        <li>5 LEDs de cores arbitrárias</li>
        <li>11 Resistores de 300ohms</li>
        <li>1 Arduino UNO R3</li>
        <li>1 Protoboard de 400 pontos</li>
        <li>Fios para as conexões</li>
        <li>1 Buzzer</li>
        <br />
        <h4>Materiais utilizados para a decoração:</h4>
        <li>
        1 caixa de dimensões 14 x 11 (para a base do jogo)
        </li>
        <li>
        1 caixa de dimensões 17 x 14 (ou levemente maior que a caixa usada de base, para fazer a tampa do jogo)
        </li>
        <li>
        1 suporte esponjoso de dimensões 11 x 6 (par elevar a protoboard do jogo e dar melhor acesso aos botões)
        </li>
        <li>
        1 folha de eva preta
        </li>
        <li>
        1 folha de eva vermelha
        </li>
        <li>
        1 folha de eva amarela
        </li>
        <li>
        1 folha de eva verde
        </li>
        <li>
        cola quente
        </li>
        <li>
        tesoura
        </li>
      </ul>
      </SectionContainer>
      <hr/>
      <BaseSection  bgColor="#f4f5f7" title="Veja o código! 💻" description="Entenda melhor a lógica do nosso arduíno e faça o download do projeto completo (incluíndo o site) se quiser dar uma olhada!"/>
      <SectionContainer bgColor="#f4f5f7">

        <div style={{marginBottom: '28px',display: 'flex', height: '550px', overflowY: 'scroll', border: "5px solid #1f1f1f;", borderTopLeftRadius: "16px", borderBottomLeftRadius: "16px"}}> 
          <pre>
          <code className="language-cpp">{codeString}</code>
        </pre>
        </div>
      <a className={styles.downloadBtn}  href="https://github.com/Rayane32/genius-arduino/archive/refs/heads/main.zip"><span>DOWNLOAD DO PROJETO COMPLETO</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"/>
  <path fillRule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
</svg></a>
      </SectionContainer>
    
      </>
        
    );
}

export default ArduinoExplainedArea
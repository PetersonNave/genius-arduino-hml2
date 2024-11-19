# 👾 Genius Game

Bem-vindo ao repositório do nosso **Genius Game**! Este repositório faz parte de um projeto para as disciplinas de Sistemas Digitais e Introdução à Computação, e tem como objetivo a criação de um jogo **Genius** implementado em **Arduino**, proporcionando uma experiência de jogo interativa e educativa.


## 📜 Descrição

Este projeto consiste em um **jogo Genius** criado com Arduino. O jogo é um desafio de memória, no qual o usuário deve reproduzir uma sequência de luzes apresentadas aleatóriamente pelo dispositivo. Cada rodada aumenta a complexidade da sequência, tornando o jogo mais difícil à medida que o jogador avança.Em caso de erro, o jogador perdwe todo seu progresso e o jogo reinicia do zero. O código foi desenvolvido para ser executado em um microcontrolador **Arduino**, utilizando LEDs e um buzzer para interações com o jogador.


## 📁 Estrutura do Projeto

```plaintext
genius-arduino/
├── codigo-arduino/
│   ├── main.ino
│   ├── planta-elétrica.pdf
├── public/
├── src/
│   └── app/
├── .gitignore
├── .npmrc
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── yarn.lock
└── README.md

```
composto por branchs: main, feature/peterson, fature/rayane.
A pasta codigo-arduino possuí o código útilizado para implementar o projeto. Dentro da pasta public, na pasta arduino-montagem, está a reprodução do circuito eletrônico utilizado para montar o projeto, feito com auxilio do software Tinkercad.
  
## 🛠️ Tecnologias Utilizadas

- **Next.js** - Framework React para construção da página.
- **TypeScript** - Utilizado para tipagem estática no desenvolvimento.
- **React** - Biblioteca JavaScript para construção da interface de usuário.
- **Yarn** - Gerenciador de pacotes utilizado para instalar e gerenciar dependências.

## 🚀 Executando o Projeto

1. Navegue até o diretório do projeto:

   ```bash
   cd codigo-arduino
   ```

2. Instale as dependências:

   Usando **npm**:

   ```bash
   npm install
   ```

   Ou usando **Yarn**:

   ```bash
   yarn install
   ```

3. Para executar o projeto localmente, use:

   Usando **npm**:

   ```bash
   npm run dev
   ```

   Ou usando **Yarn**:

   ```bash
   yarn dev
   ```

4. Abra o navegador em [http://localhost:3000](http://localhost:3000) para ver a página.

## 👥 Alunos
- Maria Gabriela Damásio Bezerra
- Paulo Victor Gomes Aguiar
- Peterson Jesus Feitosa de Melo
- Rayane Cavalcanti da Silva
- Victor César Matias da Silva

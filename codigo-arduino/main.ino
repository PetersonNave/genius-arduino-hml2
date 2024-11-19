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
  tone(buzzer, 980, 500);  // Som de acerto (980 Hz)
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

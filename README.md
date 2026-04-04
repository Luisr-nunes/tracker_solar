<div align="center">

# ☀️ Arduino Solar Tracker

### Rastreador Solar Automático de Eixo Único

<br>

![Arduino](https://img.shields.io/badge/Arduino-C++-00979D?style=flat-square&logo=arduino&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-63.9%25-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-25.3%25-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-6.3%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![C++](https://img.shields.io/badge/C++-4.5%25-00599C?style=flat-square&logo=cplusplus&logoColor=white)

<br>

![Tipo](https://img.shields.io/badge/Tipo-Hardware_%2B_Software-4A4A4A?style=flat-square)
![Instituição](https://img.shields.io/badge/Instituição-CESAR_School-6A0DAD?style=flat-square)
![Status](https://img.shields.io/badge/Status-Concluído-2E8B57?style=flat-square)

<br>

> *Protótipo de rastreador solar de eixo único usando Arduino, Servo Motor e sensores LDR*
> *para maximizar automaticamente a captação de luz solar.*

</div>

---

## Sobre o Projeto

O **Arduino Solar Tracker** é um sistema embarcado que orienta um painel solar (simulado) de forma autônoma para sempre apontar na direção da maior incidência de luz. Dois sensores **LDR** leem continuamente a intensidade luminosa em cada lado do painel; o firmware em C++ processa essa diferença e aciona um **Servo Motor** para corrigir o ângulo em tempo real.

O repositório também inclui um **front-end de monitoramento** (HTML + CSS + JS) para visualização dos dados coletados via Serial.

---

## Funcionalidades

- **Rastreamento automático** — ajuste contínuo da posição baseado na leitura dos LDRs
- **Sistema de histerese** — margem de erro configurável evita vibração e movimentos desnecessários
- **Monitoramento serial** — saída de dados via Serial Monitor para debug e calibração
- **Front-end de visualização** — interface web para acompanhamento dos dados do sensor

---

## Como Funciona

O sistema opera em **loop fechado (Closed Loop)**:

```
1. LEITURA    → Arduino lê os valores analógicos dos LDRs (esquerda e direita)
2. COMPARAÇÃO → Calcula a diferença absoluta entre as duas leituras
3. DECISÃO    → Se diferença < error (5): motor parado (economia de energia)
                Se diferença ≥ error: identifica qual lado tem mais luz
4. ATUAÇÃO    → Servo incrementa/decrementa o ângulo para apontar para a luz
```

---

## Hardware Necessário

| Componente | Quantidade | Observação |
|---|---|---|
| Placa Arduino | 1x | Uno, Nano ou compatível |
| Micro Servo Motor | 1x | SG90 ou similar |
| Sensor LDR | 2x | Light Dependent Resistor |
| Resistor 10kΩ | 2x | Divisor de tensão dos LDRs |
| Jumpers e Protoboard | — | Para montagem do circuito |

---

## Esquema de Ligação (Pinout)

| Componente | Pino no Arduino | Observação |
|---|---|---|
| **Servo Sinal** | D4 | Pino Digital PWM |
| **LDR 1** | A0 | Pino Analógico |
| **LDR 2** | A1 | Pino Analógico |
| **VCC Servo** | 5V | Recomendado fonte externa |
| **GND** | GND | Comum a todos os componentes |

<div align="center">

![Esquema Conceitual](front%20end/esquema-conceitual.jpeg.png)

</div>

---

## Estrutura

```
tracker_solar/
├── arduino.ino      # Firmware do rastreador (C++ / Arduino)
└── front end/       # Interface web de monitoramento (HTML + CSS + JS)
```

---

## Como Usar

### Firmware (Arduino)

1. Abra o arquivo `arduino.ino` na **Arduino IDE**
2. Conecte sua placa Arduino via USB
3. Selecione a placa e porta correta em **Ferramentas**
4. Clique em **Upload** para gravar o firmware
5. Abra o **Serial Monitor** (9600 baud) para acompanhar os dados em tempo real

### Front-end

1. Navegue até a pasta `front end/`
2. Abra o `index.html` no navegador

---

## Solução de Problemas

### Arduino reinicia ao mover o motor

Causado por **queda de tensão (Brown-out)** pelo pico de corrente do Servo SG90. Soluções:

- **Capacitor** — adicione um capacitor eletrolítico (100µF a 470µF) entre VCC e GND do motor
- **Fonte externa** — alimente o Servo com fonte externa de 5V (conecte os GNDs juntos)
- **Delay** — aumente o `delay` no final do loop para suavizar a demanda de corrente

---

## Equipe

<div align="center">

| Desenvolvedor |
|---|
| **Luis Felipe Farias Nunes** |
| João Pedro Cavalcanti de Souza |
| Guilherme Alves de Souza |
| Cauã Rego Tavares Leite Duarte |
| Gabriel Brito Ferreira Dias |
| Matheus Rodrigues Larré |

[![GitHub](https://img.shields.io/badge/GitHub-Luisr--nunes-181717?style=flat-square&logo=github)](https://github.com/Luisr-nunes)

</div>

---

<div align="center">

*🌱 Tecnologia a serviço da energia limpa — um grau de cada vez.*

</div>

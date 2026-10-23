# SolarTrack — Rastreador Solar com Arduino

<!-- badges -->
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-663399?style=flat-square&logo=css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white) ![Arduino](https://img.shields.io/badge/Arduino-00878F?style=flat-square&logo=arduino&logoColor=white)

[Read in English](README.en.md)

Protótipo de rastreador solar de eixo único com Arduino, servo motor e dois sensores LDR, que gira o painel em direção à maior incidência de luz. Projeto da disciplina de Sistemas Digitais (Introdução à Computação), na Cesar School.

## Como funciona

O sistema opera em malha fechada:

```
1. Leitura    → o Arduino lê os dois LDRs (A0 e A1) e imprime os valores na serial
2. Comparação → calcula a diferença absoluta entre as leituras
3. Decisão    → se a diferença for menor ou igual à margem (40), o servo fica parado
                se for maior, identifica o lado com mais luz
4. Atuação    → o servo anda 2° em direção à luz, limitado entre 0° e 180°
```

A margem de 40 evita que o painel fique vibrando com pequenas variações de luz.

## Hardware

| Componente | Quantidade | Observação |
| --- | --- | --- |
| Arduino Uno, Nano ou compatível | 1 | |
| Micro servo SG90 | 1 | |
| LDR | 2 | |
| Resistor de 10 kΩ | 2 | Divisor de tensão dos LDRs |
| Protoboard e jumpers | — | |

## Ligações

| Componente | Pino do Arduino |
| --- | --- |
| Sinal do servo | D9 |
| LDR 1 | A0 |
| LDR 2 | A1 |
| VCC do servo | 5V (de preferência fonte externa) |
| GND | GND comum |

<div align="center">

![Esquema conceitual](front%20end/esquema-conceitual.jpeg.png)

</div>

## Estrutura

```
tracker_solar/
├── arduino.ino          # firmware
└── front end/           # página de apresentação do projeto
    ├── index.html, styles.css, script.js, logo.svg
    ├── esquema-conceitual.jpeg(.png)
    └── downloads/       # pacotes .zip do projeto
```

A página em `front end/` apresenta o projeto: motivação, equipe, lista de componentes, passo a passo de montagem, explicação do loop principal, vídeo e download do pacote completo.

## Como usar

**Firmware**

1. Abra `arduino.ino` na Arduino IDE (a biblioteca `Servo` já vem instalada).
2. Selecione a placa e a porta em Ferramentas e clique em Upload.
3. Abra o Monitor Serial em 9600 baud para ver as leituras dos LDRs.

**Página do projeto:** abra `front end/index.html` no navegador.

## Solução de problemas

**O Arduino reinicia quando o motor se move.** É queda de tensão causada pelo pico de corrente do SG90. Para resolver:

- adicione um capacitor eletrolítico de 100 µF a 470 µF entre VCC e GND do servo;
- alimente o servo com uma fonte externa de 5 V, ligando os GNDs juntos;
- aumente o `delay` no fim do `loop` para suavizar a demanda de corrente.

## Equipe

Luis Felipe Farias Nunes, João Pedro Cavalcanti de Souza, Guilherme Alves de Souza, Cauã Rego Tavares Leite Duarte, Gabriel Brito Ferreira Dias e Matheus Rodrigues Larré.

# SolarTrack — Arduino Solar Tracker

<!-- badges -->
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white) ![Arduino](https://img.shields.io/badge/Arduino-00878F?style=flat-square&logo=arduino&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-663399?style=flat-square&logo=css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

[Ler em Português](README.md)

Single-axis solar tracker prototype with an Arduino, a servo motor and two LDR sensors that turns the panel toward the strongest light. Built for the Digital Systems course (Introduction to Computing) at Cesar School.

## How it works

The system runs a closed loop:

```
1. Read     → the Arduino reads both LDRs (A0 and A1) and prints the values to serial
2. Compare  → computes the absolute difference between the readings
3. Decide   → if the difference is less than or equal to the margin (40), the servo stays still
              otherwise, it finds the brighter side
4. Act      → the servo moves 2° toward the light, limited to 0°–180°
```

The margin of 40 keeps the panel from jittering on small light changes.

## Hardware

| Component | Quantity | Note |
| --- | --- | --- |
| Arduino Uno, Nano or compatible | 1 | |
| SG90 micro servo | 1 | |
| LDR | 2 | |
| 10 kΩ resistor | 2 | Voltage divider for the LDRs |
| Breadboard and jumpers | — | |

## Wiring

| Component | Arduino pin |
| --- | --- |
| Servo signal | D9 |
| LDR 1 | A0 |
| LDR 2 | A1 |
| Servo VCC | 5V (preferably an external supply) |
| GND | Common GND |

<div align="center">

![Conceptual schematic](front%20end/esquema-conceitual.jpeg.png)

</div>

## Structure

```
tracker_solar/
├── arduino.ino          # firmware
└── front end/           # project presentation page
    ├── index.html, styles.css, script.js, logo.svg
    ├── esquema-conceitual.jpeg(.png)
    └── downloads/       # project .zip packages
```

The page in `front end/` presents the project (in Portuguese): motivation, team, parts list, assembly steps, an explanation of the main loop, a video and a download of the full package.

## Usage

**Firmware**

1. Open `arduino.ino` in the Arduino IDE (the `Servo` library ships with it).
2. Pick the board and port under Tools and click Upload.
3. Open the Serial Monitor at 9600 baud to see the LDR readings.

**Project page:** open `front end/index.html` in a browser.

## Troubleshooting

**The Arduino resets when the motor moves.** This is a brown-out caused by the SG90's current spike. To fix it:

- add a 100 µF to 470 µF electrolytic capacitor between the servo's VCC and GND;
- power the servo from an external 5 V supply, tying the grounds together;
- increase the `delay` at the end of `loop` to smooth the current draw.

## Team

Luis Felipe Farias Nunes, João Pedro Cavalcanti de Souza, Guilherme Alves de Souza, Cauã Rego Tavares Leite Duarte, Gabriel Brito Ferreira Dias and Matheus Rodrigues Larré.

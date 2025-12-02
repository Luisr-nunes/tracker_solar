# Arduino Solar Tracker (Rastreador Solar Automático)

Este repositório contém o código-fonte e a documentação de um sistema de rastreamento solar de eixo único (Single Axis Solar Tracker). O projeto utiliza sensores de luz (LDRs) para detectar a posição da fonte de luz mais forte e ajusta automaticamente um painel solar (simulado aqui por um suporte no Servo) para mantê-lo perpendicular aos raios de luz, maximizando a eficiência energética.

## Funcionalidades

- **Rastreamento Automático:** Ajuste em tempo real da posição baseado na incidência de luz.
- **Eficiência Energética:** Sistema de histerese (margem de erro) para evitar movimentos desnecessários e vibrações do motor.
- **Monitoramento Serial:** Saída de dados via Serial Monitor para debug e calibração dos sensores.

## Hardware Necessário

- 1x Placa Arduino (Uno, Nano ou compatível)
- 1x Micro Servo Motor (SG90 ou similar)
- 2x Sensores LDR (Light Dependent Resistor)
- 2x Resistores de 10kΩ (para o divisor de tensão dos LDRs)
- Jumpers e Protoboard

## Esquema de Ligação (Pinout)

| Componente | Pino no Arduino | Observação |
|Data | Pin | Note |
|---|---|---|
| **Servo Sinal** | D4 | Pino Digital PWM |
| **LDR 1** | A0 | Pino Analógico |
| **LDR 2** | A1 | Pino Analógico |
| **VCC Servo** | 5V | *Recomendado fonte externa* |
| **GND** | GND | Comum |

## Como Funciona o Código

O sistema opera em um **Loop Fechado (Closed Loop)**:

1. **Leitura:** O Arduino lê os valores analógicos dos dois LDRs (Esquerda e Direita).
2. **Comparação:** Calcula a diferença absoluta entre as duas leituras.
3. **Decisão (Histerese):** - Se a diferença for menor que a variável `error` (definida como 5), o motor permanece parado para economizar energia.
   - Se a diferença for maior, o sistema identifica qual lado tem mais luz.
4. **Atuação:** O Servo motor incrementa ou decrementa o ângulo para apontar o painel para a luz.

## Solução de Problemas Comuns (Troubleshooting)

### Erro: "Serial data stream stopped" ou Reset do Arduino
Se o Arduino reiniciar ou desconectar ao mover o motor, isso geralmente é causado por **queda de tensão (Brown-out)** devido ao pico de corrente do Servo Motor SG90.

**Soluções:**
1. **Capacitor:** Adicione um capacitor eletrolítico (100uF a 470uF) entre o VCC e GND do motor.
2. **Fonte Externa:** Alimente o Servo Motor com uma fonte externa de 5V (lembre-se de conectar os GNDs juntos).
3. **Delay:** Aumente o `delay` no final do loop para suavizar a demanda de corrente.

## Autor

Luis Felipe Farias Nunes
Joao Pedro Cavalcanti de Souza
Guilherme Alves de Souza
Caua Rego Tavares Leite Duarte 
Gabriel Brito Ferreia Dias 
Matheus Rodrigues Larre

---
*Status do Projeto: Concluído ✅*

#include <Servo.h>

Servo sg90;
int initial_position = 90;
int LDR1 = A0;
int LDR2 = A1;
int error = 40;          // Menos sensível (quanto maior, menos reage a pequenas diferenças)
int servopin = 9;

void setup() 
{
  Serial.begin(9600);
  sg90.attach(servopin);
  pinMode(LDR1, INPUT);
  pinMode(LDR2, INPUT);
  sg90.write(initial_position);
  delay(2000);
}

void loop() 
{
  int R1 = analogRead(LDR1);
  int R2 = analogRead(LDR2);

  Serial.print("LDR1: ");
  Serial.println(R1);
  Serial.print("LDR2: ");
  Serial.println(R2);
  delay(150);

  int diff = abs(R1 - R2);

  // Só entramos no bloco de movimento se a diferença for MAIOR que o erro permitido
  if (diff > error) {
    // Se R1 tem mais luz que R2, movemos para um lado
    if (R1 > R2) {
      initial_position = initial_position - 2; 
    }
    // Caso contrário (R2 tem mais luz), movemos para o outro
    else {
      initial_position = initial_position + 2; 
    }
  }

  // O constrain continua fora do IF para garantir segurança total
  initial_position = constrain(initial_position, 0, 180);

  // Limitar faixa do servo (0° a 180°)
  initial_position = constrain(initial_position, 0, 180);

  sg90.write(initial_position);
  delay(5);  // servo mais rápido
}

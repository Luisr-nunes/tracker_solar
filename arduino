#include <Servo.h>      //including the library of servo motor 
Servo sg90;             
int initial_position = 90;   
int LDR1 = A0;          //connect The LDR1 on Pin A0
int LDR2 = A1;          //Connect The LDR2 on pin A1
int error = 5;         
int servopin=4;         //You can change servo just makesure its on arduino's PWM pin
void setup() 
{ 

  sg90.attach(servopin);  
  pinMode(LDR1, INPUT);   
  pinMode(LDR2, INPUT);
  sg90.write(initial_position);   //Move servo at 90 degree
  delay(2000);           
}  
 
void loop() 
{ 
  int R1 = analogRead(LDR1); // read  LDR 1
  int R2 = analogRead(LDR2); // read  LDR 2
  Serial.println(R1);
  Serial.println("LDR1");
  Serial.println(R2);
  Serial.println("LDR1");
  delay(300);
  int diff1= abs(R1 - R2);   
  int diff2= abs(R2 - R1);
  
  if((diff1 <= error) || (diff2 <= error)) {
    
  } else {    
    if(R1 > R2)
    {
      initial_position = --initial_position;  
    }
    if(R1 < R2) 
    {
      initial_position = ++initial_position; 
    }
  }
  sg90.write(initial_position); 
  delay(100);
}

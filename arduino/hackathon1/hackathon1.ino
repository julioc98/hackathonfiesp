int humidade = 0;
int ldr = 1;
int temperatura = 2;

void setup() {
  pinMode(humidade, INPUT);
  pinMode(ldr, INPUT);
  pinMode(temperatura, INPUT);
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int valorhumidade = analogRead(humidade);
  //int valorldr = analogRead(ldr);
  //int valortemperatura = analogRead(temperatura);
  // print out the value you read:
  //Serial.print("valor sensor de humidade: ");
  Serial.println(valorhumidade);
  //Serial.print("valor sensor de luminosida: ");
  //Serial.println(valorldr);
  //Serial.print("valor sensor de temperatura: ");
  //Serial.println(valortemperatura);
  delay(200);        // delay in between reads for stability
}

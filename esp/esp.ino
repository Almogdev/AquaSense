#include <ArduinoJson.h>
#include "DHT.h"

#define TEMP_SENSOR 16
#define HUMIDITY_SENSOR 39
#define LIGHT_SENSOR 36
#define PUMP_PIN 23
#define PUMP_SECOND_PIN 22
#define DHT_TYPE DHT22
#define MOIST_SENSOR 39

JsonDocument doc;

DHT dht(TEMP_SENSOR, DHT_TYPE);

float humidity;
float temperature;
int currentState;

void setup() {
  Serial.begin(9600);
  delay(500);
  dht.begin();
  pinMode(PUMP_PIN, OUTPUT);
  digitalWrite(PUMP_PIN, HIGH);
}

void loop() {
  humidity = dht.readHumidity();
  temperature = dht.readTemperature();
  float moist = analogRead(MOIST_SENSOR);

  printHumidity(humidity);
  printTemperature(temperature);
  Serial.println(moist);  
  delay(2000);
}


#include <ArduinoJson.h>
#include "DHT.h"
#include <PubSubClient.h>

const char *WIFI_SSID = "YOUR_WIFI";
const char *WIFI_PASS = "YOUR_PASS";

const char *MQTT_HOST = "192.168.1.10";
const int MQTT_PORT = 1883;
const char *TOPIC_CMD = "aquasense/cmd";

#define TEMP_SENSOR 16
#define HUMIDITY_SENSOR 39
#define LIGHT_SENSOR 36
#define PUMP_PIN 23
#define PUMP_SECOND_PIN 22
#define DHT_TYPE DHT22
#define MOIST_SENSOR 39
WiFiClient espClient;
PubSubClient mqtt(espClient);

enum Mode
{
  MODE_WEATHER,
  MODE_SOIL,
  MODE_MANUAL,
  MODE_SCHEDULED
};
volatile Mode currentMode = MODE_SOIL;

void connectWiFi();
void ensureMqtt();
void onMqttMessage(char *topic, byte *payload, unsigned int length);

float getTemperature();
float getSoilMoisture();
void pumpOn();
void pumpOff();
void pumpForMs(unsigned long ms);

void weatherMode(float temp);
void soilMoistureMode(float humidity);
void manualMode();
void ScheduledMode();

void setup()
{
  Serial.begin(115200);
  pinMode(PUMP_PIN, OUTPUT);
  pumpOff();
  connectWiFi();
  mqtt.setServer(MQTT_HOST, MQTT_PORT);
  mqtt.setCallback(onMqttMessage);
}

<<<<<<< HEAD
void loop()
{
  if (WiFi.status() != WL_CONNECTED)
    connectWiFi();
  ensureMqtt();
  mqtt.loop();
=======
void loop() {
  waitForSerialInput();
  humidity = dht.readHumidity();
  temperature = dht.readTemperature();
  float moist = analogRead(MOIST_SENSOR);
>>>>>>> c286ca386c0d0df12b0feec5aabdda4cd244e455

  float temp = getTemperature();
  float humidity = getSoilMoisture();

  switch (currentMode)
  {
  case MODE_WEATHER:
    weatherMode(temp);
    break;
  case MODE_SOIL:
    soilMoistureMode(humidity);
    break;
  case MODE_MANUAL:
    manualMode();
    break;
  case MODE_SCHEDULED:
    ScheduledMode();
    break;
  }

  delay(200);
}
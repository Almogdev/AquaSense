void printHumidity(float humidity) {
  if (isnan(humidity)) {
    Serial.println("Failed to read from DHT sensor");
  } else {
    Serial.println("Humidity: " + String(humidity) + " %");
  }
}

void printTemperature(float temperature) {
  if (isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor");
  } else {
    Serial.println("Temperature: " + String(temperature) + " °C");
  }
}

void setupState(int state) {
  currentState = state;
}

void activatePump() {
    digitalWrite(PUMP_PIN, LOW);
    delay(5000);
    digitalWrite(PUMP_PIN, HIGH);
}

String buildJson(String sensor, float val) {
  JsonDocument doc;
  String json;
  doc["sensor"] = sensor;
  doc["value"] = val;
  serializeJson(doc,json);
  return json;
}

void waitForSerialInput() {
  Serial.println("Waiting for input...");
  while (Serial.available() == 0) {
    // wait
  }
  String input = Serial.readStringUntil('\n');
  Serial.print("Received: ");
  Serial.println(input);
}
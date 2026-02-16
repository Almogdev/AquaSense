void testPump() {
  Serial.println("Testing Pump...");
  digitalWrite(PUMP_PIN, LOW);
  delay(5000);
  digitalWrite(PUMP_PIN, HIGH);
  Serial.println("Pump test finished!");
}

void testTemp() {
  Serial.println("Testing Temperature sensor...");
  float value = dht.readTemperature();
  printTemperature(value);
  Serial.println("Temp sensor test complete");
}

void testAirHumidity(){
  Serial.println("Testing Humidity sensor...");
  float value = dht.readHumidity();
  printHumidity(value);
  Serial.println("Humidity sensor test complete!");
}

void testMoist(){
  Serial.println("Testing moist sensor...");
  int value = analogRead(MOIST_SENSOR);
  if (isnan(value)) {
    Serial.println("Failed to read from moist sensor");
  } else {
    Serial.println("Moist: " + String(value) + " %");
  }
  Serial.println("Moist sensor test complete!");
}

void testLight(){
  Serial.println("Testing light sensor...");
  int value = analogRead(LIGHT_SENSOR);

  if (isnan(value)) {
    Serial.println("Failed to read from light sensor");
  } 
  else {
    Serial.println("Light: " + String(value) + " %");
  }
  Serial.println("Light sensor test complete!");
}
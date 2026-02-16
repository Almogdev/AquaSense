void weatherMode(float temp)
{
  static unsigned long lastRun = 0;

  if (temp >= 30.0)
  {
    if (millis() - lastRun > 60000UL)
    {
      lastRun = millis();
      pumpForMs(3000);
    }
  }
  else if (temp <= 18.0)
  {
    if (millis() - lastRun > 180000UL)
    {
      lastRun = millis();
      pumpForMs(1000);
    }
  }
  else
  {
    if (millis() - lastRun > 120000UL)
    {
      lastRun = millis();
      pumpForMs(2000);
    }
  }
}

void soilMoistureMode(float humidity)
{
  const float START_THRESHOLD = 35.0;
  const float STOP_THRESHOLD = 45.0;

  static bool pumping = false;

  if (!pumping && humidity < START_THRESHOLD)
  {
    pumping = true;
    pumpOn();
  }

  if (pumping && humidity >= STOP_THRESHOLD)
  {
    pumping = false;
    pumpOff();
  }
}

void manualMode()
{
  pumpOff();
}

void ScheduledMode()
{
  static unsigned long lastRun = 0;
  const unsigned long interval = 6UL * 60UL * 60UL * 1000UL;

  if (millis() - lastRun > interval)
  {
    lastRun = millis();
    pumpForMs(5000);
  }
}

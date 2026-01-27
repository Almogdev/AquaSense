void weatherMode(float temp) {
  /*
  The irrigation system operates based on weather conditions.
  On hot days, the pump runs more frequently and for longer durations.
  On cold days, the pump runs fewer times and for shorter durations.
  */
}

void soilMoistureMode(float humidity) {
  /*
  The irrigation system monitors soil moisture levels.
  The pump is activated when the soil becomes dry and stops
  once the desired moisture level is reached.
  */ 
}

void manualMode() {
  /*
  The user directly controls the irrigation pump through the user interface.
  Pump activation is not dependent on sensor data,
  except for safety and water-saving protection mechanisms.
  */
}

void ScheduledMode () {
/*
  The irrigation pump operates according to predefined schedules.
  Pump activity is not affected by sensor readings.
  The system follows a fixed irrigation timetable.
*/
}

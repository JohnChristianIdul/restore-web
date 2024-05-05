class Export {
    constructor() {
      this.forecastData = null;
      this.forecastInsight = null;
      this.listeners = [];
    }
  
    subscribe(listener) {
      this.listeners.push(listener);
    }
  
    notify() {
      this.listeners.forEach(listener => listener());
    }
  
    setForecastData(data) {
      this.forecastData = data;
      this.notify();
    }
  
    setForecastInsight(data) {
      this.forecastInsight = data;
      this.notify();
    }
  
    getForecastData() {
      return this.forecastData;
    }
  
    getForecastInsight() {
      return this.forecastInsight;
    }
}
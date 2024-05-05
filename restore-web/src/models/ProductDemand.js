class ProductDemand {
    constructor() {
      this.isLoadingDemand = false;
      this.prodData = [];
      this.jsonData = [];
      this.error = null;
      this.listeners = [];
    }
  
    subscribe(listener) {
      this.listeners.push(listener);
    }
  
    notify() {
      this.listeners.forEach(listener => listener());
    }
  
    setIsLoadingDemand(value) {
      this.isLoadingDemand = value;
      this.notify();
    }
  
    setProdData(data) {
      this.prodData = data;
      this.notify();
    }
  
    setJsonData(data) {
      this.jsonData = data;
      this.notify();
    }
  
    setError(error) {
      this.error = error;
      this.notify();
    }
  
    getIsLoadingDemand() {
      return this.isLoadingDemand;
    }
  
    getProdData() {
      return this.prodData;
    }
  
    getJsonData() {
      return this.jsonData;
    }
  
    getError() {
      return this.error;
    }
    
}
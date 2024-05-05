class ProductDemand {
    constructor() {
      this.productID = null;
      this.productName = '';
      this.productDemand = null;
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
  
    setProductID(id) {
      this.productID = id;
      this.notify();
    }
  
    setProductName(name) {
      this.productName = name;
      this.notify();
    }
  
    setProductDemand(demand) {
      this.productDemand = demand;
      this.notify();
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
  
    getProductID() {
      return this.productID;
    }
  
    getProductName() {
      return this.productName;
    }
  
    getProductDemand() {
      return this.productDemand;
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
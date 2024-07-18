class Forecast {
    constructor() {
        this.isLoading = true;
        this.isSnackbarVisible = false;
        this.isErrorSnackbarVisible = false;
        this.error = null;
        this.data = {
            SalesData: [],
            JsonData: [],
            ProductData: [],
            ForecastData: [],
            ForecastText: null,
            ForecastInsight: [],
        };
        this.listeners = [];
    }
  
    subscribe(listener) {
        this.listeners.push(listener);
    }

    notify() {
        this.listeners.forEach(listener => listener());
    }

    setData(key, value) {
        if (this.data.hasOwnProperty(key)) {
            this.data[key] = value;
            this.notify();
        } else {
            throw new Error(`Key ${key} does not exist in data.`);
        }
    }

    setIsLoading(value) {
        this.isLoading = value;
        this.notify();
    }

    setIsSnackbarVisible(value) {
        this.isSnackbarVisible = value;
        this.notify();
    }

    setIsErrorSnackbarVisible(value) {
        this.isErrorSnackbarVisible = value;
        this.notify();
    }

    setError(error) {
        this.error = error;
        this.notify();
    }

    getData() {
        return this.data;
    }

    getSalesData() {
        return this.data.SalesData;
    }

    getJsonData() {
        return this.data.JsonData;
    }

    getProductData() {
        return this.data.ProductData;
    }

    getForecastData() {
        return this.data.ForecastData;
    }

    getForecastText() {
        return this.data.ForecastText;
    }

    getForecastInsight() {
        return this.data.ForecastInsight;
    }

    isLoading() {
        return this.isLoading;
    }

    isSnackbarVisible() {
        return this.isSnackbarVisible;
    }

    isErrorSnackbarVisible() {
        return this.isErrorSnackbarVisible;
    }

    getError() {
        return this.error;
    }
}

export default Forecast;

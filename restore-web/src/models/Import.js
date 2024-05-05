class Import {
    constructor () {
        this.data = [];
        this.isSnackbarVisible = false;
        this.isErrorSnackbarVisible = false;
        this.listeners = [];
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    notify() {
        this.listeners.forEach(listener => listener());
    }

    setIsSnackbarVisible(value) {
        this.isSnackbarVisible = value;
        this.notify();
    }

    setIsErrorSnackbarVisible(value) {
        this.isErrorSnackbarVisible = value;
        this.notify();
    }

    getIsSnackbarVisible() {
        return this.isSnackbarVisible;
    }

    getIsErrorSnackbarVisible() {
        return this.isErrorSnackbarVisible;
    }

    setData(data){
        this.data = data;
        this.notify();
    }

    getData(){
        return this.data;
    }
    
}


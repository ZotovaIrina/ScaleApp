let storage = {
    getItem: function (keyName) {
        let localData = undefined;
        try {
            localData = JSON.parse(localStorage.getItem(keyName));
        } catch(error){
            console.log("Error. Can't get data from localStorage", error);
            localData = undefined;
        }
        return localData
    },
    setItem: function (keyName, value) {
        let localData = JSON.stringify(value);
        try {
            localStorage.setItem(keyName, localData);
        } catch(error){
            console.log("Error. Can't set data to localStorage", error);
        }
    }
};

export default storage;
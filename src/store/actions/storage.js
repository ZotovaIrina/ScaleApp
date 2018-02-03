let storage = {
    getItem: function (keyName) {
        return (localStorage.getItem(keyName))
    },
    setItem: function (keyName, value) {
        return (localStorage.setItem(keyName, value))
    }
};

export default storage;
const firebase = require('firebase');

//change the firebase configuration below according to your firebase SDK
const config = {
    apiKey: "AIzaSyBhLVI-6dcTvm-qBLF_pg95M293MFucS_U",
    authDomain: "posyandu-75c76.firebaseapp.com",
    projectId: "posyandu-75c76",
    storageBucket: "posyandu-75c76.appspot.com",
    messagingSenderId: "566794835776",
    appId: "1:566794835776:web:4ff93ee19ce3bf15e2cca5"
};

const fire = firebase.initializeApp(config);
module.exports = fire;
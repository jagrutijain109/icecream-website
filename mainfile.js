const firebaseConfig = {
    apiKey: "AIzaSyAKzRNnI4L4Dqco43Rr51cIhCmbLp-lD-Y",
    authDomain: "sql-ice-cream-parlour.firebaseapp.com",
    databaseURL: "https://sql-ice-cream-parlour-default-rtdb.firebaseio.com",
    projectId: "sql-ice-cream-parlour",
    storageBucket: "sql-ice-cream-parlour.appspot.com",
    messagingSenderId: "152755219402",
    appId: "1:152755219402:web:ac9a9c33c5b9ea40a73d33",
    measurementId: "G-RW2TCF9TM5"
};
firebase.initializeApp(firebaseConfig);

//reference
const contactFormDB = firebase.database().ref('enquiry_form');
document.getElementById('enquiry_form').addEventListener('submit', submitform);

function submitform(e) {
    var name = getElementVal('name');
    var email = getElementVal('email');
    var mobile = getElementVal('mobile');
    var address = getElementVal('address');

    saveMessages(name, email, mobile, address);
    //console.log(name,email,mobile,address);
}

const saveMessages = (name, email, mobile, address) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        email: email,
        mobile: mobile,
        address: address,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};

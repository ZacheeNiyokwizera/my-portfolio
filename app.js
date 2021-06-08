// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDMi9K7eNG-ZzmOm7MUOUb92nRchI9YsFY",
    authDomain: "portfolio-contact-form-db.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-db.firebaseio.com",
    projectId: "portfolio-contact-form-db",
    storageBucket: "portfolio-contact-form-db.appspot.com",
    messagingSenderId: "54579366399",
    appId: "1:54579366399:web:4fc556a7d6844b92c2bfca",
    measurementId: "G-SBKKWN1VRD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference message collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);
// console.log("clicked");

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal("myName");
    var email = getInputVal("myEmail");
    var phone = getInputVal("myPhone");
    var message = getInputVal("myMessage");

    // Save message
    saveMessage(name, email, phone, message);

    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Clear form
    document.getElementById("myName").value = " ";
    document.getElementById("myEmail").value = " ";
    document.getElementById("myPhone").value = " ";
    document.getElementById("myMessage").value = " ";
    // document.getElementById("contactForm").reset();



    // return false;
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message,
    });
}

const hamburger = document.querySelector(
    ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
    ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach((item) => {
    item.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobile_menu.classList.toggle("active");
    });
});
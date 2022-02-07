// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
import {
    getDatabase,
    ref,
    get,
    child,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVLIfypza32cBJ21-ygC7fKGIO7RHUD3I",
    authDomain: "quizapp-huzaifa.firebaseapp.com",
    databaseURL: "https://quizapp-huzaifa-default-rtdb.firebaseio.com",
    projectId: "quizapp-huzaifa",
    storageBucket: "quizapp-huzaifa.appspot.com",
    messagingSenderId: "796820498671",
    appId: "1:796820498671:web:09dcc216993ed032f4d31a",
    measurementId: "G-DRRKHGYCTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase();
const loginReference = ref(db);

var loginemail = document.getElementById("emails");
var loginpass = document.getElementById("passwords");
var obj;

function checkValue(event) {

    event.preventDefault();
    // if (d.value == "" || d.value == " " || d.value.length == "@") {
    //     emails.innerHTML = "**Valid email is required @";

    //     return;
    // } else {
    //     emails.innerHTML = ""
    // }
    // if (e.value == "" || e.value == " " || e.value.length < 6) {
    //     pass.innerHTML = "**Password should be at least 6 letters or character";

    //     return;
    // } else {
    //     pass.innerHTML = ""
    // }

    obj = {
        Emails: loginemail.value,
        Passwords: loginpass.value,
    }
    signInWithEmailAndPassword(auth, obj.Emails, obj.Passwords)
        .then(function(success) {
            get(child(loginReference, "users/" + success.user.uid))
            console.log("User Sign in Successfully");
            console.log(success);
            // var value = success.val()
            // console.log(value)
            // console.log(success.val());

            location.replace("pages/index1.html")


        })

    .catch(function(rej) {


        errorShow.innerHTML = `<div class="alert alert-warning d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
            <div>${rej.message}</div>
            </div>`


    });



}

signIn.addEventListener("submit", function() {
    checkValue(event)
});
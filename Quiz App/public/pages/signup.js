 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
 import {
     getDatabase,
     ref,
     set,
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

 // =============== My Work =================


 var d = document.getElementById("email");
 var e = document.getElementById("password");



 var obj;


 function checkValue(event) {

     event.preventDefault();


     obj = {

         Email: d.value,
         Password: e.value,

     };
     console.log(obj)
     createUserWithEmailAndPassword(auth, obj.Email, obj.Password)
         .then(function(userCredential) {
             // Signed in 
             const user = userCredential.user;
             obj.uid = userCredential.user.uid;
             errorShow.innerHTML = `<div class="alert alert-warning d-flex align-items-center" role="alert">
             <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
             <div>"**User Created Successfully"</div>
             </div>`
                 // ...
                 // ============= database work ===================

             const refrence = ref(db, "users/" + obj.uid);
             set(refrence, obj);

             location.replace("../index.html")



         })
         .catch(function(error) {

             const errorCode = error.code;
             const errorMessage = error.message;
             errorShow.innerHTML = `<div class="alert alert-warning d-flex align-items-center" role="alert">
             <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
             <div>${error.message}</div>
         </div>`
                 // ..


         })



 }



 formsubmit.addEventListener("submit", function() {
     checkValue(event)

 });
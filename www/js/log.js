const firebaseConfig = {
    apiKey: "AIzaSyCFm2JD17eOFdifSQIld24vjoIVlKMIVDY",
    authDomain: "tce-go-exam.firebaseapp.com",
    databaseURL: "https://tce-go-exam.firebaseio.com",
    projectId: "tce-go-exam",
    storageBucket: "tce-go-exam.appspot.com",
    messagingSenderId: "648780575553",
    appId: "1:648780575553:web:74fd161507d04878bf67c0",
    measurementId: "G-6MHSLC3MFC"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const email = document.getElementById('email');
const password = document.getElementById('password');
const auth = firebase.auth();
 button = document.getElementById('signin');

button.addEventListener('click', e => {
    e.preventDefault()
    console.log("INSIDE SIGN INs");
    const em = email.value;
    const pass = password.value;
    auth.signInWithEmailAndPassword(em, pass).then(
            res => {
                window.location.replace("register.html");
            }
        )
        .catch(function(error) {

            alert("Login failed");

        })
})

function toggle(){
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');
            var popup1 = document.getElementById('popup');
            popup1.classList.toggle('active');
             
        }
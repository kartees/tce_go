// Your web app's Firebase configuration
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


const auth = firebase.auth();
const uregno = document.getElementById('regno');
const uname = document.getElementById('aname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cdept = document.getElementById('dept');
const cpassword = document.getElementById('cpassword');
const button = document.getElementById('signup');
button.addEventListener('click', e => {
    e.preventDefault()
    console.log("INSIDE SIGN INs");
    const em = email.value;
    const pass = password.value;
    const name = uname.value;
    const regno = uregno.value;
    const cpass = cpassword.value;
    const dept = cdept.value;
    //const pro = auth.createUserWithEmailAndPassword(em, pass);


    if (pass === cpass) {


        firebase
            .auth()
            .createUserWithEmailAndPassword(em, pass)
            .catch(function(error) {
                alert("Error Occurs.Please check and submit details");
            })
            .then(res => {
                let user = res.user;

                let ref = firebase.database().ref().child("user");
                let data = {
                    name: name,
                    regno: regno,
                    email: em,
                    department: dept,
                }
                ref
                    .child(regno)
                    .set(data)
                    .then(ref => { //use 'child' and 'set' combination to save data in your own generated key
                        console.log("Saved");
                        alert("Registered Successfully");
                        window.location.replace("login.html");

                    })
                    .catch(console.log);
            })
    } else {
        alert("Incorrect passwords in confirm password");
    }
    const head = document.getElementById('signup');


})

// let ref = firebase.database().ref("exam/18c043/2020-06-05")

// ref.on("value", gotData, errdata)

// function gotData(data) {
//     data = data.val();
//     let keys = Object.keys(data);
//     console.log(keys[0]);
//     console.log(data[keys[0]]);
//     var a = data[keys[0]];

// }

function errdata(error) {
    console.log(error.message, error.code);
    alert("Signup Error");
}

function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup1 = document.getElementById('popup');
    popup1.classList.toggle('active');

}
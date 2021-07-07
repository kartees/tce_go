var firebaseConfig = {
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
var reg = document.getElementById('regno');
var done = document.getElementById('done');
const button = document.getElementById('go');
console.log(regno);
button.addEventListener('click', e => {
    e.preventDefault()


    const date = done.value;
    const regno = reg.value;

    let ref = firebase.database().ref("exam/" + regno + "/" + date)

    ref.on("value", gotData, errdata)

    function gotData(data) {
        data = data.val();
        let keys = Object.keys(data);
        console.log(keys[0]);
        console.log(data[keys[0]]);
        var rblock = data[keys[0]];
        var rexam = data[keys[1]];
        var rhall = data[keys[2]];
        var rseat = data[keys[3]];
        var rtime = data[keys[4]];
        
        console.log(rhall);
        console.log(rblock);
        console.log(rtime);
        localStorage.setItem("bblock",rblock);
        localStorage.setItem("bexam",rexam);
        localStorage.setItem("bhall",rhall);
        localStorage.setItem("bseat",rseat);
        localStorage.setItem("bregno",regno);
        localStorage.setItem("btime",rtime);
        window.location.replace("result.html");
    }

    function errdata(error) {
        console.log(error.message, error.code)
    }


})

function toggle(){
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');
            var popup1 = document.getElementById('popup');
            popup1.classList.toggle('active');
             
        }

document.getElementById("block").innerHTML = localStorage.getItem("bblock");
document.getElementById("reg").innerHTML = localStorage.getItem("bregno");
document.getElementById("exam").innerHTML = localStorage.getItem("bexam");
document.getElementById("hall").innerHTML = localStorage.getItem("bhall");
document.getElementById("seat").innerHTML = localStorage.getItem("bseat");
document.getElementById("time").innerHTML = localStorage.getItem("btime");

function toggle(){
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');
            var popup1 = document.getElementById('popup');
            popup1.classList.toggle('active');
             
        } 
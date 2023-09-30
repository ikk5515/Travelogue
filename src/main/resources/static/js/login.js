var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

if(matchMedia("screen and (min-width:1024px)").matches){
    
    console.log("desktop");   

    function login(){
        x.style.left = "550px";
        y.style.left = "-300px";
        z.style.left = "0";
    }

    function register(){
        x.style.left = "-550px";
        y.style.left = "545px";
        z.style.left = "105px";
    }
}else if(matchMedia("screen and (max-width:757px)").matches){
    console.log("moblie");    
    
    function login(){
        x.style.left = "20px";
        y.style.left = "-500px";
        z.style.left = "0";
    }

    function register(){
        x.style.left = "-500px";
        y.style.left = "20px";
        z.style.left = "70px";
    }
}

window.onresize = function(){
    document.location.reload();
  };
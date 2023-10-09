"use strict";

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

if (matchMedia("screen and (min-width:1024px)").matches) {
  var login = function login() {
    x.style.left = "550px";
    y.style.left = "-300px";
    z.style.left = "0";
  };

  var register = function register() {
    x.style.left = "-550px";
    y.style.left = "545px";
    z.style.left = "105px";
  };

  console.log("desktop");
} else if (matchMedia("screen and (max-width:757px)").matches) {
  var _login = function _login() {
    x.style.left = "20px";
    y.style.left = "-500px";
    z.style.left = "0";
  };

  var _register = function _register() {
    x.style.left = "-500px";
    y.style.left = "20px";
    z.style.left = "70px";
  };

  console.log("moblie");
}

window.onresize = function () {
  document.location.reload();
};
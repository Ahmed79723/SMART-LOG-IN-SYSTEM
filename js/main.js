var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var userCheckAlert = document.getElementById("userCheckAlert");
// let url = window.location.href.split("sign%20up.html")[0] + "index.html";
let urlWelcome = window.location.href.split("index.html")[0] + "Welcome.html";
usersList = [];
if (JSON.parse(localStorage.getItem("users"))) {
  usersList = JSON.parse(localStorage.getItem("users"));
}
//& ****************************************************************************************************************************
//& ************************************************js for sign up page*********************************************************
//& ****************************************************************************************************************************
//*************************************************ADDING NEW USER*************************************************
function addUser() {
  if (nameValidation() && emailValidation() && passwordValidation()) {
    var account = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };
    usersList.push(account);
    localStorage.setItem("users", JSON.stringify(usersList));
    console.log(usersList);
  }
}
// **************************************************check existing USERS on sign up click*************************************************
function checkUsers() {
  //   var test = false;
  //   for (var i = 0; i < usersList.length; i++) {
  //     if (
  //       usersList[i].name === userName.value ||
  //       usersList[i].email === userEmail.value
  //     ) {
  //       test = true;
  //       break;
  //     }
  //   }
  //   return test;
  // ! *******************************************these lines are for study and trial purposes only***********************************
  var successMsg = document.getElementById("successMsg");
  if (usersList.length == 0) {
    addUser();
    successMsg.classList.remove("d-none");
  } else if (usersList.length != 0) {
    for (var i = 0; i < usersList.length; i++) {
      if (
        usersList[i].name === userName.value ||
        usersList[i].email === userEmail.value
      ) {
        successMsg.classList.add("d-none");
        userCheckAlert.classList.remove("d-none");
        return;
      }
    }
    addUser();
    userCheckAlert.classList.add("d-none");
    successMsg.classList.remove("d-none");
    // window.location.replace(url);
  }
  //   switch (true) {
  //     case usersList.length == 0:
  //       addUser();
  //       break;
  //     case usersList.length != 0:
  //       var flag = false;
  //       for (var i = 0; i < usersList.length; i++) {
  //         if (
  //           usersList[i].name === userName.value ||
  //           usersList[i].email === userEmail.value
  //         ) {
  //           userCheckAlert.classList.remove("d-none");
  //           flag = true;
  //           break;
  //         }
  //       }
  //       if (!flag) {
  //         addUser();
  //         userCheckAlert.classList.add("d-none");
  //         window.location.replace(url);
  //       }
  //   }
}
// **************************************************sign up on click button*************************************************
// function signUpButtonAction() {
//   if (checkUsers()) {
//     userCheckAlert.classList.remove("d-none");
//   } else {
//     userCheckAlert.classList.add("d-none");
//     addUser();
//   }
// }
//! ***********************************************end of study and trial lines********************************************
//^ **************************************************validating NEW USER*************************************************
var nameAlert = document.getElementById("nameAlert");
var emailAlert = document.getElementById("emailAlert");
var passwordAlert = document.getElementById("passwordAlert");
function nameValidation() {
  var regex = /^[a-z]{3,20}$/gi;
  if (regex.test(userName.value)) {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    nameAlert.classList.add("d-none");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    nameAlert.classList.remove("d-none");
    return false;
  }
}
function emailValidation() {
  var regex = /^[a-z]{3,20}@(gmail|icloud|yahoo)\.com$/gi;
  if (regex.test(userEmail.value)) {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    emailAlert.classList.add("d-none");
    return true;
  } else {
    userEmail.classList.add("is-invalid");
    userEmail.classList.remove("is-valid");
    emailAlert.classList.remove("d-none");
    return false;
  }
}
function passwordValidation() {
  var regex = /^.{8,}$/gi;
  if (regex.test(userPassword.value)) {
    userPassword.classList.add("is-valid");
    userPassword.classList.remove("is-invalid");
    passwordAlert.classList.add("d-none");
    return true;
  } else {
    userPassword.classList.add("is-invalid");
    userPassword.classList.remove("is-valid");
    passwordAlert.classList.remove("d-none");
    return false;
  }
}
//& ****************************************************************************************************************************
//& ************************************************js for log in page**********************************************************
//& ****************************************************************************************************************************
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
// **************************************************validating USER input*************************************************
function emailValidationLogIn() {
  var regex = /^[a-z]{3,20}@(gmail|icloud|yahoo)\.com$/gi;
  if (regex.test(loginEmail.value)) {
    loginEmail.classList.add("is-valid");
    loginEmail.classList.remove("is-invalid");
    emailAlert.classList.add("d-none");
    return true;
  } else {
    loginEmail.classList.add("is-invalid");
    loginEmail.classList.remove("is-valid");
    emailAlert.classList.remove("d-none");
    return false;
  }
}
function passwordValidationLogIn() {
  var regex = /^.{8,}$/gi;
  if (regex.test(loginPassword.value)) {
    loginPassword.classList.add("is-valid");
    loginPassword.classList.remove("is-invalid");
    passwordAlert.classList.add("d-none");
    return true;
  } else {
    loginPassword.classList.add("is-invalid");
    loginPassword.classList.remove("is-valid");
    passwordAlert.classList.remove("d-none");
    return false;
  }
}
// **************************************************validating USER*************************************************
// function validateLogIn() {
//   let flag = false;
//   for (var i = 0; i < usersList.length; i++) {
//     if (
//       usersList[i].email === loginEmail.value &&
//       usersList[i].password === loginPassword.value
//     ) {
//       flag = true;
//     }
//     break;
//   }
//   return flag;
// }
// **************************************************log in button Action*************************************************
function logInBtnAction() {
  var massage = document.getElementById("massage");
  if (usersList.length == 0) {
    alert("No users registered yet,please Sign up first.");
  } else if (usersList.length != 0) {
    for (var i = 0; i < usersList.length; i++) {
      if (
        usersList[i].email === loginEmail.value &&
        usersList[i].password === loginPassword.value
      ) {
        localStorage.setItem("index", JSON.stringify(i));
        massage.classList.add("d-none");
        window.location.replace(urlWelcome);
        break;
      } else {
        massage.classList.remove("d-none");
      }
    }
  }
}
//& ****************************************************************************************************************************
//& ************************************************js for Welcome page**********************************************************
//& ****************************************************************************************************************************
var welcomeBox = document.getElementById("welcomeBox");
var cartona = "";
cartona = `<p class='text-center text-info'>Welcome, ${usersList[JSON.parse(localStorage.getItem("index"))].name}</p>`;
welcomeBox.innerHTML = cartona;

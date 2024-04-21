var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var userCheckAlert = document.getElementById("userCheckAlert");
var successMsg = document.getElementById("successMsg");
let urlWelcome = window.location.href.split("index.html")[0] + "Welcome.html";
let urlLogin = window.location.href.split("sign%20up.html")[0] + "index.html";
usersList = [];
if (JSON.parse(localStorage.getItem("users"))) {
  usersList = JSON.parse(localStorage.getItem("users"));
}
//& ****************************************************************************************************************************
//& ************************************************js for sign up page*********************************************************
//& ****************************************************************************************************************************
//*************************************************ADDING NEW USER*************************************************
function addUser() {
  if (
    gValidation(/^[a-z]{3,20}$/gi, userName, nameAlert) &&
    gValidation(
      /^[\w-\.]+@(gmail|icloud|yahoo)\.com$/gi,
      userEmail,
      emailAlert
    ) &&
    gValidation(/^.{8,}$/gi, userPassword, passwordAlert)
  ) {
    var account = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };
    usersList.push(account);
    localStorage.setItem("users", JSON.stringify(usersList));
    signUpClear();
    successMsg.classList.remove("d-none");
    userCheckAlert.classList.add("d-none");
    console.log(usersList);
    setTimeout(function () {
      window.location.replace(urlLogin);
    }, 1500);
  }
}
// **************************************************check existing USERS on sign up click*************************************************
function checkUsers() {
  for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].email === userEmail.value) {
      successMsg.classList.add("d-none");
      userCheckAlert.classList.remove("d-none");
      return;
    }
  }
  addUser();
}
// <!--* ======================================================================================== -->

// if (
//   usersList.length == 0 &&
//   gValidation( /^[a-z]{3,20}$/gi,userName,nameAlert) &&
//   gValidation(/^[\w-\.]+@(gmail|icloud|yahoo)\.com$/gi,userEmail,emailAlert) &&
//   gValidation(/^.{8,}$/gi,userPassword,passwordAlert)
// ) {
//   addUser();
//   signUpClear();
//   successMsg.classList.remove("d-none");
//   userCheckAlert.classList.add("d-none");
// } else if (usersList.length != 0) {
//   for (var i = 0; i < usersList.length; i++) {
//     if (
//       usersList[i].name === userName.value ||
//       usersList[i].email === userEmail.value
//     ) {
//       successMsg.classList.add("d-none");
//       userCheckAlert.classList.remove("d-none");
//       return;
//     }
//   }
//   if (gValidation( /^[a-z]{3,20}$/gi,userName,nameAlert) && gValidation(/^[\w-\.]+@(gmail|icloud|yahoo)\.com$/gi,userEmail,emailAlert)
//   && gValidation(/^.{8,}$/gi,userPassword,passwordAlert)) {
//     console.log("now u c me");
//     addUser();
//     signUpClear();
//     successMsg.classList.remove("d-none");
//     // window.location.replace(url);
//   }
// }
// ! *******************************************these lines are for study and trial purposes only***********************************
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
// **************************************************clear sign up input*************************************************
function signUpClear() {
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
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
function gValidation(template, target, AlertName) {
  // var regex = template;
  if (template.test(target.value)) {
    target.classList.add("is-valid");
    target.classList.remove("is-invalid");
    AlertName.classList.add("d-none");
    return true;
  } else {
    target.classList.add("is-invalid");
    target.classList.remove("is-valid");
    AlertName.classList.remove("d-none");
    return false;
  }
}

// name
// gValidation( /^[a-z]{3,20}$/gi,userName,nameAlert)
// email
// gValidation(/^[\w-\.]+@(gmail|icloud|yahoo)\.com$/gi,userEmail,emailAlert)
// pass
// gValidation(/^.{8,}$/gi,userPassword,passwordAlert)

// function nameValidation() {
//   var regex = /^[a-z]{3,20}$/gi;
//   if (regex.test(userName.value)) {
//     userName.classList.add("is-valid");
//     userName.classList.remove("is-invalid");
//     nameAlert.classList.add("d-none");
//     return true;
//   } else {
//     userName.classList.add("is-invalid");
//     userName.classList.remove("is-valid");
//     nameAlert.classList.remove("d-none");
//     return false;
//   }
// }
// function emailValidation() {
//   // /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
//   var regex = /^[\w-\.]+@(gmail|icloud|yahoo)\.com$/gi;
//   if (regex.test(userEmail.value)) {
//     userEmail.classList.add("is-valid");
//     userEmail.classList.remove("is-invalid");
//     emailAlert.classList.add("d-none");
//     return true;
//   } else {
//     userEmail.classList.add("is-invalid");
//     userEmail.classList.remove("is-valid");
//     emailAlert.classList.remove("d-none");
//     return false;
//   }
// }
// function passwordValidation() {
//   var regex = /^.{8,}$/gi;
//   if (regex.test(userPassword.value)) {
//     userPassword.classList.add("is-valid");
//     userPassword.classList.remove("is-invalid");
//     passwordAlert.classList.add("d-none");
//     return true;
//   } else {
//     userPassword.classList.add("is-invalid");
//     userPassword.classList.remove("is-valid");
//     passwordAlert.classList.remove("d-none");
//     return false;
//   }
// }
//& ****************************************************************************************************************************
//& ************************************************js for log in page**********************************************************
//& ****************************************************************************************************************************
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
// **************************************************validating USER input*************************************************
// email
// gValidation(/^[\w-\.]+@(gmail|icloud|yahoo)\.com$/gi,loginEmail,emailAlert)
// pass
// gValidation(/^.{8,}$/gi,loginPassword,passwordAlert)
// function emailValidationLogIn() {
//   var regex = /^[a-z]{3,20}@(gmail|icloud|yahoo)\.com$/gi;
//   if (regex.test(loginEmail.value)) {
//     loginEmail.classList.add("is-valid");
//     loginEmail.classList.remove("is-invalid");
//     emailAlert.classList.add("d-none");
//     return true;
//   } else {
//     loginEmail.classList.add("is-invalid");
//     loginEmail.classList.remove("is-valid");
//     emailAlert.classList.remove("d-none");
//     return false;
//   }
// }
// function passwordValidationLogIn() {
//   var regex = /^.{8,}$/gi;
//   if (regex.test(loginPassword.value)) {
//     loginPassword.classList.add("is-valid");
//     loginPassword.classList.remove("is-invalid");
//     passwordAlert.classList.add("d-none");
//     return true;
//   } else {
//     loginPassword.classList.add("is-invalid");
//     loginPassword.classList.remove("is-valid");
//     passwordAlert.classList.remove("d-none");
//     return false;
//   }
// }
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
cartona = `<p class='text-center text-info'>Welcome, ${
  usersList[JSON.parse(localStorage.getItem("index"))].name
}</p>`;
welcomeBox.innerHTML = cartona;
// ! ********************************************************Dom********************************************************************
var boxContainer = document.getElementById("boxContainer");
var close = document.getElementById("close");
var item = Array.from(document.querySelectorAll(".item img"));
var next = document.getElementById("next");
var index = 0;
var boxItem = document.getElementById("boxItem");

for (var i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function (e) {
    boxContainer.classList.remove("d-none");
    boxItem.style.backgroundImage = `url(${e.target.src})`;
    index = item.indexOf(e.target);
    // console.log(index);
  });
}

close.addEventListener("click", function () {
  boxContainer.classList.add("d-none");
});

next.addEventListener("click", nextItem);
function nextItem() {
  index++;
  if (index <= item.length - 1) {
    boxItem.style.backgroundImage = `url(${item[index].src})`;
    console.log(index);
  } else {
    index = 0;
    boxItem.style.backgroundImage = `url(${item[index].src})`;
    console.log(index);
  }
}
prev.addEventListener("click", prevItem);
function prevItem() {
  if (index <= 0) index = item.length;
  index--;
  boxItem.style.backgroundImage = `url(${item[index].src})`;

  // index--;
  // if (index <= item.length - 1 && index > 0) {
  //   boxItem.style.backgroundImage = `url(${item[index].src})`;
  //   console.log(index);
  // } else if (index < 0) {
  //   index = item.length - 1;
  //   boxItem.style.backgroundImage = `url(${item[index].src})`;
  //   console.log(index);
  // }else{
  // boxItem.style.backgroundImage = `url(${item[index].src})`;
  //   console.log(index);
  // }
}

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowRight":
      nextItem();
      break;
    case "ArrowLeft":
      prevItem();
      break;
    case "Escape":
      boxContainer.classList.add("d-none");
      break;
    case " ":
      boxContainer.classList.remove("d-none");
      break;
  }
});
boxContainer.addEventListener("click", function () {
  boxContainer.classList.toggle("d-none");
});
boxItem.addEventListener("click", function (e) {
  e.stopPropagation();
});

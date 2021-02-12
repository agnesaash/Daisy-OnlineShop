
//LoginValidation
function logInForm(){
  var username = document.forms['loginForm']['username'].value;
  var password = document.forms['loginForm']['password'].value;

if(username==""){
  alert("Username is required !");
  return false;
}else if(password==""){
  alert("Password is required !")
  return false;
}
}


//RegisterValidation
function registerForm(){
  var username = document.forms['registerform']['username'].value;
  var surname = document.forms['registerform']['surname'].value;
  var email= document.forms['registerform']['email'].value;
  var password = document.forms['registerform']['password'].value;
  var password1 = document.forms['registerform']['password1'].value;

if(username==""){
  alert("Username is required !");
  return false;
}else if(password==""){
  alert("Password is required !");
  return false;
}
else if(surname==""){
alert("Surname is required !");
return false;
}
else if(email==""){
  alert("Email is required !");
  return false;
}
else if(password1 ==""){
  alert("Password is required !")
}
}


//ContactValidation
function contactForm(){
  var name = document.forms['contactform']['name'].value;
  var email = document.forms['contactform']['email'].value;
  var message= document.forms['contactform']['message'].value;
  
if(name==""){
  alert("Name is required !");
  return false;
}else if(email==""){
  alert("Email is required !");
  return false;
}
else if(message==""){
  alert("Message is required !");
  return false;
}
}

//Order Validation

function orderForm(){
  var firstname = $("#firstname").value();
  var lastname = $("#lastname").value();
  var phone = $("#phone").value();
  var email = $("#email").value();


  if(firstname == ""){
    alert("Firstname is required");
    return false;
  }
  else if(lastname == ""){
    aler("Lastname is required");
    return false;
  }
  if(email == ""){
    alert("Email is required");
    return false;
  }
  if(phone == ""){
    alert("Phone is required");
    return false;
  }

}






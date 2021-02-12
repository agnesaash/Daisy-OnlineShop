function showSubmit(){
    // var submit = document.getElementById('submitshow').style.visibility=('visible');
    // var submit = document.getElementById('capbox1').style.visibility=('hidden');
    // var submit = document.getElementById('all').style.visibility=('hidden');
    // var submit = document.getElementById('b').style.visibility=('hidden');

    var firstname = document.forms['orderform']['firstname'].value;
    var lastname = document.forms['orderform']['lastname'].value;
    var phone= document.forms['orderform']['phone'].value;
    var email = document.forms['orderform']['email'].value;
  
  if(firstname==""){
    alert("Firstname is required !");
    return false;
  }else if(lastname==""){
    alert("Lastname is required !");
    return false;
  }
  else if(phone==""){
  alert("Phone is required !");
  return false;
  }
  else if(email==""){
    alert("Email is required !");
    return false;
  }
  
  }

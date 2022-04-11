var pnum = document.getElementById("pnum");
var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var re_pwd = document.getElementById("re-pwd");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementById("error3");
var error4 = document.getElementById("error4");


// ............................PHONE NUMBER VALIDATION.............................
function validatePhone()
{
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(pnum.value.match(phoneno))
    {
        error1.textContent = ""
        return true;
    }
    else
    {
        error1.textContent = "Phone number should contain only numbers and there should be 10 numbers only";
        error1.style.color = "red";
   
        return false;
    }

}


// .................................EMAIL VALIDATION.................................
function validateEmail()
{
var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    if(regexp.test(email.value))
    {
        error2.textContent = ""
        return true;
    }
    else
    {
        error2.textContent = "Please enter a valid email";
        error2.style.color = "red";
        return false;
    }

}

// .................................PASSWORD VALIDATION.................................

function validatePassword()
 {
   
    var re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    if(re.test(pwd.value))
    {
        error3.textContent = ""
        return true;
    }
    else
    {
        error3.textContent = "Password should be of length between 8-16 and must contain atleast 1 number, 1 lowercase and 1 uppercase character";
        error3.style.color = "red";
        return false; 
    }
    
    
}

// .............................REPEAT PASSWORD VALIDATION.............................

function validateRePassword()
{
    if(pwd.value==re_pwd.value)
    {
        error4.textContent = ""
        return true;
    }
    else
    {
        error4.textContent = "Passwords not matching";
        error4.style.color = "red";
        return false;
    }
}


// ............................ PASSWORD STRENGTH VALIDATION.............................


function validateStrength() 
{
           var password=pwd.value;  
              
    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
 

   
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
  
    matchedCase.push("[A-Z]");     
    matchedCase.push("[0-9]");     
    matchedCase.push("[a-z]");   

    // Check the conditions

    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) 
        {
            ctr++;
        }
    }
    
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
            strength = "Poor";
            color = "red";
            break;
        case 2:
            strength = "Medium";
            color = "orange";
            break;
        case 3:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;

}



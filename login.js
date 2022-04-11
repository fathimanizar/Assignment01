var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
// .................................EMAIL VALIDATION.................................
function validateEmail()
{
var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    if(regexp.test(email.value))
    {
        error1.textContent = ""
        return true;
    }
    else
    {
        error1.textContent = "Please enter a valid email";
        error1.style.color = "red";
        return false;
    }

}

// .................................PASSWORD VALIDATION.................................

function validatePassword()
 {
   
    var re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    if(re.test(pwd.value))
    {
        error2.textContent = ""
        return true;
    }
    else
    {
        error2.textContent = "Password should be of length between 8-16 and must contain atleast 1 number, 1 lowercase and 1 uppercase character";
        error2.style.color = "red";
     
        return false; 
    }
    
}

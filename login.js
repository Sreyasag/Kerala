
function validate(){
    let email = document.getElementById("email1");
    let EmailRegexp = /^([\w\.\-]+)@(\w+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let pass = document.getElementById("Password1");
    let passRegexp1 = /[A-Z]+/;
    let passRegexp2 = /[a-z]+/;
    let passRegexp3 = /[0-9]+/;
    let entry;
    let text= "<b>Error</b>";

    if (!EmailRegexp.test(email.value)){
        text += "<br>Enter a valid Email";
        email.style.border = "1.5px solid red";
        entry = false;
    } if (pass.value.length < 8){
        pass.style.border = "1.5px solid red";
        text += "<br> Password must be atleast 8 charecters long.";
        entry = false;
    }if (!passRegexp1.test(pass.value)){
        pass.style.border = "1.5px solid red";
        text += "<br>Password must include capital case letter";
        entry = false;
    }if (!passRegexp2.test(pass.value)){
        pass.style.border = "1.5px solid red";
        text += "<br>Password must include small case letter";
        entry = false;
    }if (!passRegexp3.test(pass.value)){
        pass.style.border = "1.5px solid red";
        text += "<br>Password must include number";
        entry = false;
        
    }if (entry==false){
        document.getElementById("err").innerHTML= text;
        document.getElementById("err").style.visibility = "visible";
        return false;
    }
    return true;
    
        
        
      
    
}
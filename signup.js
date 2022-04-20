
function validate(){
    let email = document.getElementById("email1");
    let EmailRegexp = /^([\w\.\-]+)@(\w+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let phone = document.getElementById("phone");
    let phoneRegexp = /^\d{3}[\-\.\s]?\d{3}[\-\.\s]?\d{4}$/;
    let pass = document.getElementById("Password1");
    let passRegexp1 = /[A-Z]+/;
    let passRegexp2 = /[a-z]+/;
    let passRegexp3 = /[0-9]+/;
    let pass2 = document.getElementById("Password2");

    if (!EmailRegexp.test(email.value)){
        alert("invalid email");
        email.style.border = "1.5px solid red";
        return false;
    } else if (!phoneRegexp.test(phone.value)){
        phone.style.border = "1.5px solid red";
        email.style.border = "0px solid ";
        alert("Invalid phone number");
        return false;
    }else if (pass.value.length < 8){
        pass.style.border = "1.5px solid red";
        phone.style.border = "0px solid ";
        email.style.border = "0px solid ";
        alert("Password must be atleast 8 charecters long.");
        return false;
    }else if (!passRegexp1.test(pass.value)){
        pass.style.border = "1.5px solid red";
        phone.style.border = "0px solid ";
        email.style.border = "0px solid ";
        alert("Password must include a capital case letter");
        return false;
    }else if (!passRegexp2.test(pass.value)){
        pass.style.border = "1.5px solid red";
        phone.style.border = "0px solid ";
        email.style.border = "0px solid ";
        alert("Password must include a small case letter");
        return false;
    }else if (!passRegexp3.test(pass.value)){
        pass.style.border = "1.5px solid red";
        phone.style.border = "0px solid ";
        email.style.border = "0px solid ";
        alert("Password must include a number");
        return false;
    }else if ((pass.value)!=(pass2.value)){
        pass2.style.border = "1.5px solid red";
        pass.style.border = "0px solid ";
        phone.style.border = "0px solid ";
        email.style.border = "0px solid ";
        alert("Password does not match");
        return false;
    }else{
        pass2.style.border = "0px solid ";
        
        return true;
    }
}
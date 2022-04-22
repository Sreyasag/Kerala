
function validate(){
    let email = document.getElementById("email1");
    let EmailRegexp = /^([\w\.\-]+)@([\w]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let pass = document.getElementById("Password1");
    let passRegexp1 = /[A-Z]+/;
    let passRegexp2 = /[a-z]+/;
    let passRegexp3 = /[0-9]+/;
    let entry;
    let text= "<b>Error</b>";

    if (!EmailRegexp.test(email.value)){
        text += "<br>Enter a valid Email";
        
        entry = false;
    } if (pass.value.length < 8){
        
        text += "<br> Password must be atleast 8 charecters long.";
        entry = false;
    }if (!passRegexp1.test(pass.value)){
        
        text += "<br>Password must include capital case letter";
        entry = false;
    }if (!passRegexp2.test(pass.value)){
        
        text += "<br>Password must include small case letter";
        entry = false;
    }if (!passRegexp3.test(pass.value)){
        
        text += "<br>Password must include number";
        entry = false;
        
    }if (entry==false){
        document.getElementById("err").innerHTML= text;
        document.getElementById("err").style.visibility = "visible";
        return false;
    }
    return true; 
    
}


document.getElementById("Password1").addEventListener("keyup",showStrength)

function showStrength(){
    
    let pass = document.getElementById("Password1");
           
    let passRegexp1 = /[A-Z]+/;
    let passRegexp2 = /[a-z]+/;
    let passRegexp3 = /[0-9]+/;
    
    let w= (pass.value.length >= 8);
    let x= passRegexp1.test(pass.value);
    let y= passRegexp2.test(pass.value);
    let z= passRegexp3.test(pass.value);
    let strength= Number(w)+Number(x)+Number(y)+Number(z);
        
        
    if (strength<=2){
        pass.style.border = "2px solid rgb(248, 0, 0)";
        pass.style.color = "rgb(248, 0, 0)";
        
    } else if (strength<=3){
        pass.style.border = "2px solid rgb(255, 196, 0)";
        pass.style.color = "rgb(255, 196, 0)";
        
    }else if (strength>=4){
        pass.style.border = "2px solid rgb(15, 201, 2)";
        pass.style.color = "rgb(15, 201, 2)";
        
    }
}
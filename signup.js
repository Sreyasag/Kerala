

function validate(){
let email = document.getElementById("email1");
let phone = document.getElementById("phone");
let pass = document.getElementById("Password1");
let pass2 = document.getElementById("Password2");

let EmailRegexp = /^([\w\.\-]+)@([\w]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
let phoneRegexp = /^\d{3}[\-\.\s]?\d{3}[\-\.\s]?\d{4}$/;
let passRegexp1 = /[A-Z]+/;
let passRegexp2 = /[a-z]+/;
let passRegexp3 = /[0-9]+/;
let a = (EmailRegexp.test(email.value));
let b= phoneRegexp.test(phone.value);
let c= (pass.value.length < 8);
let d= passRegexp1.test(pass.value);
let e= passRegexp2.test(pass.value);
let f= passRegexp3.test(pass.value);
    let entry;
    let text= "<b>Error</b>";
    if (a==false){
        text += "<br>Enter a valid Email";
        entry = false;
    } if (b==false){
        text += "<br>Enter valid phone number";
        
        entry = false;
    } if (c){
        text += "<br>Password must be atleast 8 characters long";
        
        entry = false;
        
    } if (!d){
        
        text += "<br>Password must include capital case letter";
        entry = false;
        
    } if (!e){
        
        text += "<br>Password must include small case letter";
        entry = false;
    } if (!f){
        
        text += "<br>Password must include number";
        entry = false;
    } if ((pass.value)!=(pass2.value)){
        
        text += "<br>Re-entered password does not match";
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
            document.getElementById("l").style.visibility = "visible";
            document.getElementById("m").style.visibility = "hidden";
            document.getElementById("g").style.visibility = "hidden";       
            document.getElementById("ps").innerHTML="Password strength: low";
        } else if (strength<=3){
            pass.style.border = "2px solid rgb(255, 196, 0)";
            pass.style.color = "rgb(255, 196, 0)";
            document.getElementById("m").style.visibility = "visible";
            document.getElementById("g").style.visibility = "hidden";
            document.getElementById("ps").innerHTML="Password strength: medium";
        }else if (strength>=4){
            pass.style.border = "2px solid rgb(15, 201, 2)";
            pass.style.color = "rgb(15, 201, 2)";
            document.getElementById("g").style.visibility = "visible";
            document.getElementById("ps").innerHTML="Password strength: strong";
        }
}


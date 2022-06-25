const text=document.querySelector("#text");
const texterror=document.querySelector(".texterror");
text.addEventListener('input',function() {
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{2}$');
        if(nameRegex.test(text.value))
            texterror.textContent="";
        else texterror.textContent="Please Enter First Letter Capital";
});
const emails=document.querySelector("#email");
const Emailerror=document.querySelector(".Emailerror");
emails.addEventListener('input',function(){
    let emailRegex=RegExp('^[a-zA-Z0-9]+.[a-zA-Z0-9]+@[A-Za-z0-9]+.[a-zA-Z]{2,3}(.[a-zA-Z]{2})?$');
        if(emailRegex.test(text.value))
            texterror.textContent="";
        else texterror.textContent="Please Enter Valid Email ID";
});
const mobile=document.querySelector("#mobile");
const mobileerror=document.querySelector(".mobileerror");
mobile.addEventListener('input',function(){
    let mobileRegex=RegExp('^[0-9]{2,4}[ ]{1}[6-9]{1}[0-9]{9}$');
        if(mobileRegex.test(text.value))
            texterror.textContent="";
        else texterror.textContent="Please Enter Valid Email ID";
});
const password=document.querySelector("#password");
const passworderror=document.querySelector(".passworderror");
password.addEventListener('input',function(){
    let passwordRegex=RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8}$');
        if(passwordRegex.test(text.value))
            texterror.textContent="";
        else texterror.textContent="Incorrect Password";
});





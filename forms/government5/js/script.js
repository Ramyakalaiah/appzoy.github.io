function validate(){
    var username = document.myForm.username.value;
    var password = document.myForm.password.value;
    var status = false;
    if(username == ""){
        status = false;
        document.getElementById("usernameError").innerHTML = "Please enter username to continue";
    } else{
        document.getElementById("usernameError").innerHTML = "";
    }
    if(password == ""){
        status = false;
        document.getElementById("passwordError").innerHTML = "Please enter password to continue";
    } else if(password.length<8){
        document.getElementById("passwordError").innerHTML = "Password must contain atleast 8 digits";
    } else{
        document.getElementById("passwordError").innerHTML = "";
    }
    if(!username == "" && !password == "" && password.length >= 8){
        status = true;
    }
    return status;
}
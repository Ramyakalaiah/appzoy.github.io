var backup;


function validate() {
    var taxDeductionAccountNo = document.myForm.tdan.value;
    var city = document.myForm.city.value;
    var pincode = document.myForm.pincode.value;
    var captchacode = document.myForm.captchacode.value;
    var status=false;
    if(taxDeductionAccountNo==null||taxDeductionAccountNo==""||taxDeductionAccountNo.length<10||taxDeductionAccountNo.length>10){
        document.getElementById("tdanError").style.display = 'block';
        document.getElementById("Tdan").style.color = '#E55957';
        document.getElementById("tdanError").innerHTML = "Please enter your 10 digit TAN";
        status = false;
    }
    else{
        document.getElementById("Tdan").style.color = 'black';
        document.getElementById("tdanError").innerHTML = "";
    }
    if(city.length<3){
        document.getElementById("cityError").style.display = 'block';
        document.getElementById("City").style.color = '#E55957';
        document.getElementById("cityError").innerHTML = "Please enter City/District";
        status = false;
    }
    else{
        document.getElementById("City").style.color = 'black';
        document.getElementById("cityError").innerHTML = "";
    }
    if(pincode.length<6||pincode.length>6){
        document.getElementById("pincodeError").style.display = 'block';
        document.getElementById("Pincode").style.color = '#E55957';
        document.getElementById("pincodeError").innerHTML = "Please enter 6 digit PIN Code";
        status = false;
    }
    else{
        document.getElementById("Pincode").style.color = 'black';
        document.getElementById("pincodeError").innerHTML = "";
    }
    if (document.myForm.radio1[0].checked == true) {
        document.getElementById("TaxApplicable").style.color = 'black';
            document.getElementById("taxApplicableError").innerHTML = "";
        } else if (document.myForm.radio1[1].checked == true) {
            document.getElementById("TaxApplicable").style.color = 'black';
            document.getElementById("taxApplicableError").innerHTML = "";
        } else {
            document.getElementById("taxApplicableError").style.display = 'block';
            document.getElementById("TaxApplicable").style.color = '#E55957';
            document.getElementById("taxApplicableError").innerHTML = "Select Tax Applicable";
            status = false;
        }
    if (document.myForm.radio2[0].checked == true) {
        document.getElementById("TypeOfPayment").style.color = 'black';
            document.getElementById("typeOfPaymentError").innerHTML = "";
        } else if (document.myForm.radio2[1].checked == true) {
            document.getElementById("TypeOfPayment").style.color = 'black';
            document.getElementById("typeOfPaymentError").innerHTML = "";
        } else {
            document.getElementById("typeOfPaymentError").style.display = 'block';
            document.getElementById("TypeOfPayment").style.color = '#E55957';
            document.getElementById("typeOfPaymentError").innerHTML = "Select Type of Payment";
            status = false;
        }
    if (myForm.natureOfPayment.value == "") {
        document.getElementById("natureOfPaymentError").style.display = 'block';
        document.getElementById("NatureOfPayment").style.color = '#E55957';
        document.getElementById("natureOfPaymentError").innerHTML = "Select Nature of Payment";
        myForm.natureOfPayment.focus();
        status = false;
    } else{
        document.getElementById("NatureOfPayment").style.color = 'black';
        document.getElementById("natureOfPaymentError").innerHTML = "";
    }
    if (myForm.assessmentYear.value == "") {
        document.getElementById("assessmentYearError").style.display = 'block';
        document.getElementById("AssessmentYear").style.color = '#E55957';
        document.getElementById("assessmentYearError").innerHTML = "Select Assessment Year";
        myForm.assessmentYear.focus();
        status = false;
    } else{
        document.getElementById("AssessmentYear").style.color = 'black';
        document.getElementById("assessmentYearError").innerHTML = "";
    }
    if (myForm.addState.value == "") {
        document.getElementById("addStateError").style.display = 'block';
        document.getElementById("AddState").style.color = '#E55957';
        document.getElementById("addStateError").innerHTML = "Please select State";
        myForm.addState.focus();
        status = false;
    } else{
        document.getElementById("AddState").style.color = 'black';
        document.getElementById("addStateError").innerHTML = "";
    }
    if (myForm.netBankName.value == "" && myForm.debitBankName.value == "") {
        document.getElementById("netBankNameError").style.display = 'block';
        document.getElementById("NetBankName").style.color = '#E55957';
        document.getElementById("netBankNameError").innerHTML = "Select Bank Name";
        status = false;
    } else{
        document.getElementById("NetBankName").style.color = 'black';
        document.getElementById("netBankNameError").innerHTML = "";
    }
    if(captchacode.length == 6 && captchacode == localStorage.backup){
        document.getElementById("Captchacode").style.color = 'black';
        document.getElementById("captchacodeError").innerHTML = "";
    } else{
        document.getElementById("captchacodeError").style.display = 'block';
        document.getElementById("Captchacode").style.color = '#E55957';
        document.getElementById("captchacodeError").innerHTML = "Invalid Captcha";
        status = false;
    }

    /********************** CHECKING FOR ALL CONDITIONS TO SET THE STATUS TRUE *********************/

    if((captchacode.length == 6 && captchacode == localStorage.backup) && (!myForm.netBankName.value == "" || !myForm.debitBankName.value == "") && !myForm.addState.value == "" && !myForm.assessmentYear.value == "" && !myForm.natureOfPayment.value == "" && (document.myForm.radio2[0].checked == true || document.myForm.radio2[1].checked == true) && (document.myForm.radio1[0].checked == true || document.myForm.radio1[1].checked == true) && pincode.length==6 && (city.length>3&&!city=="") && (taxDeductionAccountNo!=null && taxDeductionAccountNo!="" && taxDeductionAccountNo.length==10)){
        status = true;
    }

    return status;
  }
  function enable1(){
        document.getElementById("NetBank_Name_c").disabled=false;
        document.getElementById("DebitBank_Name_c").disabled=true;
        $("#DebitBank_Name_c").val("");
  }
  function enable2(){
        document.getElementById("DebitBank_Name_c").disabled=false;
        document.getElementById("NetBank_Name_c").disabled=true;
        $("#NetBank_Name_c").val("");
  }
  function captcha(){
        var numbers = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*+-";
        var cap = numbers[Math.floor(Math.random() * numbers.length)];
        for(var i=1;i<6;i++){
            cap = cap + numbers[Math.floor(Math.random() * numbers.length)];
        }
        localStorage.backup=cap;
        
        ///////////// CANVAS IMAGE ///////////////

        var c = document.getElementById("myCanvas");
        c.style.letterSpacing = '-4px';
        var ctx = c.getContext("2d");
        ctx.font = "50px Arial";
                
        // Create gradient
        var grd = ctx.createLinearGradient(0, 0, 200, 0);
        grd.addColorStop(0, "#2c3e50");
        grd.addColorStop(1, "#bdc3c7");

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0,0,300,200);

        // LINE 1
        ctx.fillStyle = "#000";
        ctx.moveTo(70,0);
        ctx.lineTo(300,120);
        ctx.stroke();
        // LINE 2
        ctx.fillStyle = "#000";
        ctx.moveTo(0,70);
        ctx.lineTo(400,60);
        ctx.stroke();

        ctx.fillText(cap,60,90);
  }
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = " " + minutes + " minutes " + seconds + " seconds";

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function timer() {
    var fiveMinutes = 60 * 30,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};
function start(){
    timer();
    captcha();   
}
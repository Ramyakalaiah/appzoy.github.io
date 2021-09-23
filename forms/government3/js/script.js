function validate(){
    var ECno = document.myForm.ECno.value;
    var RCno = document.myForm.RCno.value;
    var TINno = document.myForm.TINno.value;
    var GSTINno = document.myForm.GSTINno.value;
    var Name = document.myForm.Name.value;
    var Office = document.myForm.Office.value;
    var status = false;
    if(ECno=="")
    {
        document.getElementById("ECnoError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("ECnoError").innerHTML = "";
    }
    if(Name=="")
    {
        document.getElementById("NameError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("NameError").innerHTML = "";
    }
    if(Office=="")
    {
        document.getElementById("OfficeError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("OfficeError").innerHTML = "";
    }
    if(document.myForm.year.value=="")
    {
        document.getElementById("yearError").innerHTML = "Select Year";
        status = false;
    }else{
        document.getElementById("yearError").innerHTML = "";
    }
    if(document.getElementById("monthYear").value=="")
    {
        document.getElementById("monthYearError").innerHTML = "Select Year";
        status = false;
    }else{
        document.getElementById("monthYearError").innerHTML = "";
    }
    if(document.getElementById("month").value=="")
    {
        document.getElementById("monthError").innerHTML = "Select Month";
        status = false;
    }else{
        document.getElementById("monthError").innerHTML = "";
    }
    if(document.getElementById("orderNo").value=="")
    {
        document.getElementById("orderNoError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("orderNoError").innerHTML = "";
    }
    if(document.getElementById("orderDate").value=="")
    {
        document.getElementById("orderDateError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("orderDateError").innerHTML = "";
    }
    if(document.getElementById("designation").value=="")
    {
        document.getElementById("designationError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("designationError").innerHTML = "";
    }
    if(document.getElementById("taxAmount").value=="")
    {
        document.getElementById("taxAmountError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("taxAmountError").innerHTML = "";
    }
    if(document.getElementById("interestAmount").value=="")
    {
        document.getElementById("interestAmountError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("interestAmountError").innerHTML = "";
    }
    if(document.getElementById("penaltyAmount").value=="")
    {
        document.getElementById("penaltyAmountError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("penaltyAmountError").innerHTML = "";
    }
    if(document.getElementById("otherAmount").value=="")
    {
        document.getElementById("otherAmountError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("otherAmountError").innerHTML = "";
    }
    if(RCno=="")
    {
        document.getElementById("RCnoError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("RCnoError").innerHTML = "";
    }
    if(TINno=="")
    {
        document.getElementById("TINnoError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("TINnoError").innerHTML = "";
    }
    if(GSTINno=="")
    {
        document.getElementById("GSTINnoError").innerHTML = "Required";
        status = false;
    }else{
        document.getElementById("GSTINnoError").innerHTML = "";
    }
    if((!ECno==""  || !RCno=="" || !TINno=="" || !GSTINno=="")  && !Name=="" && !Office=="" && !document.getElementById("taxAmount").value=="" && !document.getElementById("interestAmount").value=="" && !document.getElementById("penaltyAmount").value=="" && !document.getElementById("otherAmount").value=="" && (!document.myForm.year.value=="" || (!document.getElementById("monthYear").value=="" && !document.getElementById("month").value=="") || (!document.getElementById("orderNo").value=="" && !document.getElementById("orderDate").value=="" && !document.getElementById("designation").value==""))){
        status = true;
    }
    return status;
}
function rv1(){
    if(document.getElementById("selfEmployed").checked){
        document.getElementById("yearly").checked = true;
        document.getElementById("yearRow").style.display="flex";
        document.getElementById("demandRow").style.display="none";
        document.getElementById("monthRow").style.display="none";
        document.getElementById("monthly").disabled = true;
        document.getElementById("EC").style.display = 'flex';
        document.getElementById("RC").style.display = 'none';
        document.getElementById("TIN").style.display = 'none';
        document.getElementById("GST").style.display = 'none';
        document.getElementById("GSTIN").style.display = 'none';
    }
}
function rv2(){
    if(document.getElementById("registeredEmployer").checked){
        document.getElementById("yearly").checked = true;
        document.getElementById("yearRow").style.display="flex";
        document.getElementById("demandRow").style.display="none";
        document.getElementById("monthRow").style.display="none";
        document.getElementById("monthly").disabled = false;
        document.getElementById("RC").style.display = 'flex';
        document.getElementById("EC").style.display = 'none';
        document.getElementById("TIN").style.display = 'none';
        document.getElementById("GST").style.display = 'none';
        document.getElementById("GSTIN").style.display = 'none';
    }
}
function rv3(){
    if(document.getElementById("dealerVAT").checked){
        document.getElementById("yearly").checked = true;
        document.getElementById("yearRow").style.display="flex";
        document.getElementById("demandRow").style.display="none";
        document.getElementById("monthRow").style.display="none";
        document.getElementById("monthly").disabled = true;
        document.getElementById("TIN").style.display = 'flex';
        document.getElementById("EC").style.display = 'none';
        document.getElementById("RC").style.display = 'none';
        document.getElementById("GST").style.display = 'none';
        document.getElementById("GSTIN").style.display = 'none';
    }
}
function rv4(){
    if(document.getElementById("dealerGSTIN").checked){
        document.getElementById("yearly").checked = true;
        document.getElementById("yearRow").style.display="flex";
        document.getElementById("demandRow").style.display="none";
        document.getElementById("monthRow").style.display="none";
        document.getElementById("monthly").disabled = true;
        document.getElementById("GST").style.display = 'flex';
        document.getElementById("GSTIN").style.display = 'flex';
        document.getElementById("EC").style.display = 'none';
        document.getElementById("RC").style.display = 'none';
        document.getElementById("TIN").style.display = 'none';
    }
}
function rv5(){
    if(document.getElementById("yearly").checked){
        document.getElementById("yearRow").style.display="flex";
        document.getElementById("demandRow").style.display="none";
        document.getElementById("monthRow").style.display="none";
    }
}
function rv6(){
    if(document.getElementById("monthly").checked){
        document.getElementById("monthRow").style.display="flex";
        document.getElementById("yearRow").style.display="none";
        document.getElementById("demandRow").style.display="none";
    }
}
function rv7(){
    if(document.getElementById("demand").checked){
        document.getElementById("yearRow").style.display="none";
        document.getElementById("monthRow").style.display="none";
        document.getElementById("demandRow").style.display="block";
    }
}
function enableInput(){
        document.getElementById("nameInput").disabled=false;
        document.getElementById("officeInput").disabled=false;
}
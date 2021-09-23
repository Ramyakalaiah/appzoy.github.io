var backup;


function validate() {
    var status=false;

    if (document.getElementById("check1").checked == true) {
        document.getElementById("check1").style.color = 'black';
            document.getElementById("agreeError").innerHTML = "";
            status = true;
        } else {
            document.getElementById("agreeError").style.display = 'block';
            document.getElementById("agreeError").innerHTML = "Please accept the consent by selecting this tick-box.";
            status = false;
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
  function tickertext(){

        

        var width = $('.ticker-text').width(),
        containerwidth = $('.ticker-container').width(),
        left = containerwidth;
        function tick() {
            if(--left < -width){
                left = containerwidth;
            }
            $(".ticker-text").css("margin-left", left + "px");
            timeout = setTimeout( function() { tick() }, 16);  
        }
        tick();
        $('.mousehover').hover(function(){
        clearTimeout(timeout);
        }, function(){
        tick();
        });  

        
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
    tickertext();   
}
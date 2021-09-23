function date(){
    var d = new Date();
    var m = new Date();
    var y = new Date();
    var DATE;
    var hrs = new Date();
    var mins = new Date();
    var TIME;
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    DATE = d.getDate() + "-" +months[m.getMonth()]+ "-" + y.getFullYear();
    TIME = "[" + hrs.getHours() + ":" + mins.getMinutes() + "]";
    document.getElementById("date").innerHTML = DATE + TIME;
}
function time(){
    var m = document.getElementById("1st").value;
    if (m>=6 && m<=12){
        document.getElementById("result").innerHTML="Good Morning";
    }
    else if (m>=13 && m<=17){
        document.getElementById("result").innerHTML="Good Afternoon";
    }
    else if (m>=18 && m<=22){
        document.getElementById("result").innerHTML="Good Evening";
    }
    else if (m>=23 && m<=24 || m>=1 && m<=5){
        document.getElementById("result").innerHTML="Good Night";
    }
    else{
        document.getElementById("result").innerHTML="Oops, Ivalid Time";
    }
}
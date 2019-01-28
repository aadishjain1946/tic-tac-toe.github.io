var c,z,value;
var arrz=[];
var psuedo = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
var svalue,svaluec;
window.addEventListener("load",initevent);
function initevent(){
    disableall();
    document.getElementById("zero").addEventListener("click",set);
    document.getElementById("cross").addEventListener("click",set);
}
function set(){
    var fg = event.srcElement;
    if(fg.id == 'zero'){
        value = 1;
        svalue = 1;
        svaluec = 0;
    }
     else if(fg.id == 'cross'){
        value = 0;
        svalue = 0;
        svaluec = 1;
     }
    enableall();
var btns = document.getElementsByClassName("btn");
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click",clickcall);}
document.getElementById("reset").addEventListener("click",reset);
}
function clickcall(){
    var a = event.srcElement;
    var val = a.name;
    if(value == 0){
     value = 1;
     a.innerHTML = 'X';
    }
    else if(value == 1){
      value = 0;
      a.innerHTML = 'O';
    }
    diable(a);
    btnfetch(val);
}
function enableall(){
    var btns = document.getElementsByClassName("btn");
    for(let i = 0; i < btns.length; i++){
        btns[i].disabled = false;
        btns[i].innerHTML = ' ';
    }

}
function reset(){
    arrz=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    psuedo=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    value = svalue;
    document.getElementById("p1").innerHTML = '';
     document.getElementById("p2").innerHTML = '';
    var btns = document.getElementsByClassName("btn");
    for(let i = 0; i < btns.length; i++){
        btns[i].disabled = false;
        btns[i].innerHTML = ' ';
    }
}
function disableall(){
    var btns = document.getElementsByClassName("btn");
    for(let i = 0; i < btns.length; i++){
        btns[i].disabled = true;
    }
}
function diable(){
    var a = event.srcElement;
    a.disabled = true;
}
function matrix(x,y){
    psuedo[x][y] = value;
    arrz = psuedo;
    var m = 0,n = 1;
    var count = [0,0,0,0,0,0,0,0],count1 = [0,0,0,0,0,0,0,0];
    if(value == 0)
    var res = checkresult(value,count);
    else if(value == 1)
    var res1 = checkresult(value,count1);
    var m = draw();
    if(res == svaluec || res1 == svaluec){
     document.getElementById("p1").innerHTML = 'WIN';
     document.getElementById("p1").className = 'green';
     document.getElementById("p2").innerHTML = 'LOOSE';
     document.getElementById("p2").className = 'red';
     disableall();
    }
     else if(res == svalue || res1 == svalue){
        document.getElementById("p1").innerHTML = 'LOOSE';
        document.getElementById("p1").className = 'red';
        document.getElementById("p2").innerHTML = 'WIN';
        document.getElementById("p2").className = 'green';
     disableall();
     }
     else if(m == 10){
        document.getElementById("p1").innerHTML = 'DRAW';
        document.getElementById("p1").className = 'green';
        document.getElementById("p2").innerHTML = 'DRAW';
        document.getElementById("p2").className = 'green';
     disableall();
     }
}

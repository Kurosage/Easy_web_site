let stpb1 = document.getElementById("stepbl1");
let stpbrdr1 = document.getElementById("stepbrdr1");

let stpb2 = document.getElementById("stepbl2");
let stpbrdr2 = document.getElementById("stepbrdr2");

let stpb3 = document.getElementById("stepbl3");
let stpbrdr3 = document.getElementById("stepbrdr3");

stpb1.onmouseover = function (){
    stpbrdr1.style.borderBottom = "3px solid white";
}
stpb1.onmouseout = function (){
    stpbrdr1.style.borderBottom = "3px solid black";
}

stpb2.onmouseover = function (){
    stpbrdr2.style.borderBottom = "3px solid white";
}
stpb2.onmouseout = function (){
    stpbrdr2.style.borderBottom = "3px solid black";
}

stpb3.onmouseover = function (){
    stpbrdr3.style.borderBottom = "3px solid white";
}
stpb3.onmouseout = function (){
    stpbrdr3.style.borderBottom = "3px solid black";
}
document.getElementById("mm").onclick = function(){
    addMenu();
}

function addMenu(){
    document.getElementById("menu").classList.toggle("show")
}



document.getElementById("plus").onclick = function(){
    addText()
}

function addText(){
    document.getElementById("plus_1").classList.toggle("plus_1_show")
}



document.getElementById("plus2").onclick = function(){
    addText_2();
}

function addText_2(){
    document.getElementById("plus_2").classList.toggle("plus_2_show")
}
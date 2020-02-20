var getData = function(){
    var name=document.getElementById("name").value;
    var addr=document.getElementById("addr").value;
    console.log(name+" "+addr);
    document.getElementById("variable").innerHTML = "Nombre: " + name + " " + "Dirección: " + addr;
}


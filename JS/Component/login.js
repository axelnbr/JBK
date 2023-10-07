
function baru1() {
    const x = document.getElementById("username").value;
    const z = document.getElementById("password").value;
    let a
    let y

    if(x != "" && z != ""){
        window.location.href = "/HTML/home.html";
    }
    else if(z == "" && x != "" ){
        a = ""
        document.getElementById("alertname").innerHTML = a
        y = "Masukan Password"
        document.getElementById("alertpass").innerHTML = y
    }
    else if(x == "" || z != ""){
        a = ""
        document.getElementById("alertpass").innerHTML = a
        y = "Masukan Username"
        document.getElementById("alertname").innerHTML = y
    }
    else if(z == "" || z == null){
        a = "Masukan Password"
        document.getElementById("alertpass").innerHTML = a
       
    }
    else if(x == "" || x == null){
        a = "Masukan Username"
        document.getElementById("alertname").innerHTML = a
       
    }
    
}
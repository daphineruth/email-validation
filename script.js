function validate()

{
    var text = document.getElementById("text1").value;
    var regx = /^([a-zA-Z0-9\.-]+)@ ([a-zA-Z0-9\-]+).([a-z{2,20})(.[a-z]) $/;


    if (regx.test(text)) {

        document.getElementById("lbltext").innerHTML = "valid";
        document.getElementById("lbltext").style.visibility = "visible";
        document.getElementById("lbltext").style.color = "green";
    } else {

        document.getElementById("lbltext").innerHTML = "Invalid";
        document.getElementById("lbltext").style.visibility = "visible";
        document.getElementById("lbltext").style.color = "red";
    }


}
// Get the modal

var btn = document.getElementById("s");


btn.onclick = function () {
 
    var value1 = document.getElementById("startingBalance").value;
    document.getElementById('input1').value = value1;

    var value2 = document.getElementById("expectedReturn").value;
    document.getElementById('input2').value = value2;

    var value3 = document.getElementById("monthlyDeposit").value;
    document.getElementById('input3').value = value3;

    var value4 = document.getElementById("duration").value;
    document.getElementById('input4').value = value4;
}




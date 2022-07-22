function ex1() {
    var sum = 0;
    var n = 0;
    while (sum < 10000) {
        n++;
        sum += n;
    }
    document.getElementById("resultBT1").innerHTML = n;
}
ex1();
function ex2() {
    var txtNum2 = document.getElementById("txtNum2").value;
    var txtNum1 = document.getElementById("txtNum1").value;
    var i = 1 * 1;
    var sum = txtNum1 * 1;

    while (i < txtNum2) {
        i++
        sum += Math.pow(txtNum1, i);
    }
    document.getElementById("resultBT2").innerHTML = sum;
}
function ex3() {
    var n = document.getElementById("txtNum3").value;
    var i = 1;
    var sum = 1;
    while (i <= n) {
        sum *= i + ''
        i++
    }
    document.getElementById("resultBT3").innerHTML = sum;
}
function ex4() {
    var i = 1;
    var result = '';
    while (i <= 10) {
        if (i % 2 == 0) {
            result += '<div style="background-color:#DC3545;color:white;height:25px">div chẵn</div>'
        }
        else {
            result += '<div style="background-color:#0D6EFD;color:white;height:25px">div lẻ</div>'
        }
        i++
    }
    document.getElementById("resultBT4").innerHTML = result;
}

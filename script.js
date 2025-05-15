function pick(val) {
    document.getElementById("display").value += val;
}

function clr() {
    document.getElementById("display").value = "";
}

function solve() {
    var x = document.getElementById("display").value;
    try {
        var y = eval(x);
        document.getElementById("display").value = y;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
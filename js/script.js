// clear input
document.getElementById("clearInputBtn").onclick = function () {
    document.getElementById("input-box").innerHTML = " ";
}

// clear output
document.getElementById("clearOutputBtn").onclick = function () {
    document.getElementById("output-box").innerHTML = " ";
}

// alert name
document.getElementById("alertName").onclick = function () {
    let myName = "   MUHAMMAD SHAHZAIB";
    alert(myName);
    document.getElementById("output-box").innerHTML = " ";
    document.getElementById("input-box").innerHTML = myName;
}

// alert number
document.getElementById("alertNumber").onclick = function () {
    let number = 804;
    alert(number);
    document.getElementById("output-box").innerHTML = " ";
    document.getElementById("input-box").innerHTML = number;
}

// show variables
document.getElementById("varialbeNames").onclick = function () {
    document.getElementById("input-box").innerHTML = " ";
    document.getElementById("output-box").innerHTML = "<ul class='text-start'><li>A variable name can't contain spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userAlert and myVar are legal.</li><li>Capital letters are fine, but be careful. Variavle names are case sensitive. A rose is not a Rose. If you assign the string 'Floribandas' to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li></ul>";
}

// show camelCase
document.getElementById("camelCase").onclick = function () {
    document.getElementById("input-box").innerHTML = " ";
    document.getElementById("output-box").innerHTML = "weAreLearningJavaScript.";
}

let num1 = 29;
let num2 = 11;

// sum 2 numbers
document.getElementById("sumNumbers").onclick = function () {
    document.getElementById("input-box").innerHTML = "let num1 = " + num1 + "<br /> let num2 = " + num2 + "<br /> Output = " + num1 + " + " + num2;
    document.getElementById("output-box").innerHTML = num1 + num2
}

// subtract 2 numbers
document.getElementById("subtractNumbers").onclick = function () {
    document.getElementById("input-box").innerHTML = "let num1 = " + num1 + "<br /> let num2 = " + num2 + "<br /> Output = " + num1 + " - " + num2;
    document.getElementById("output-box").innerHTML = num1 - num2
}

// multiply 2 numbers
document.getElementById("multiplyNumbers").onclick = function () {
    document.getElementById("input-box").innerHTML = "let num1 = " + num1 + "<br /> let num2 = " + num2 + "<br /> Output = " + num1 + " * " + num2;
    document.getElementById("output-box").innerHTML = num1 * num2
}
// divide 2 numbers
document.getElementById("divideNumbers").onclick = function () {
    document.getElementById("input-box").innerHTML = "let num1 = " + num1 + "<br /> let num2 = " + num2 + "<br /> Output = " + num1 + " / " + num2;
    document.getElementById("output-box").innerHTML = num1 / num2
}

// calculate some numbers
document.getElementById("calculateNumbers").onclick = function () {
    let statement = 15 / 3 + 23 * 4 - (3 + 6)
    document.getElementById("input-box").innerHTML = "let statement = 15 / 3 + 23 * 4 - (3 + 6)";
    document.getElementById("output-box").innerHTML = statement;
}
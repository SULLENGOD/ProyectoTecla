var x = []
function inputName() {
    var nombres = document.getElementById("inputNames").value
    x[(x.length)] = nombres
    x = x.sort()
    
    return x
}
console.log(x);

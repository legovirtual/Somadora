function cal(){
    let t = document.getElementById('text');
    let n1 = document.getElementById('in1').value;
    let n2 = document.getElementById('in2').value;
    let ca = parseInt(n1)+parseInt(n2)
    t.textContent = `A soma dos numeros: ${n1} mais ${n2} é = ${ca}`
}

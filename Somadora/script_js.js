function cal(){
    let t = document.getElementById('text');
    let n1 = document.getElementById('in1').value;
    let n2 = document.getElementById('in2').value;
    t.textContent = ''
    if(n1 == ''){
        t.textContent = 'Digite um numero para fazer a soma'
    }
    else if(n2 == ''){
        t.textContent = 'Digite um numero para fazer a soma'
    }
    else{
    let ca = parseInt(n1)+parseInt(n2)
    t.textContent = `A soma dos numeros: ${n1} + ${n2} é = ${ca}`
    }
}

function somar() {
    var sm1 = window.document.getElementById('so1')
    var sm2 = window.document.querySelector('input#so2')
    var res1 = window.document.getElementById('res1')
    var smn1 = Number(sm1.value)
    var smn2 = Number(sm2.value)
    var smr = smn1 + smn2
    res1.innerHTML = `A soma entre ${smn1} e ${smn2} é igual a <strong>${smr}</strong>`
}
function subtrair() {
    var sb1 = window.document.getElementById('su1')
    var sb2 = window.document.querySelector('input#su2')
    var res2 = window.document.getElementById('res2')
    var sub1 = Number(sb1.value)
    var sub2 = Number(sb2.value)
    var sbr = sub1 - sub2
    res2.innerHTML = `A subtração entre ${sub1} e ${sub2} é igual a <strong>${sbr}</strong>`
}
function multiplicar() {
    var mu1 = window.document.getElementById('m1')
    var mu2 = window.document.querySelector('input#m2')
    var res3 = window.document.getElementById('res3')
    var mul1 = Number(mu1.value)
    var mul2 = Number(mu2.value)
    var mr = mul1 * mul2
    res3.innerHTML = `A multiplicação entre ${mul1} e ${mul2} é igual a <strong>${mr}</strong>`
}
function dividir() {
    var di1 = window.document.getElementById('d1')
    var di2 = window.document.querySelector('input#d2')
    var res4 = window.document.getElementById('res4')
    var div1 = Number(di1.value)
    var div2 = Number(di2.value)
    var dr = div1 / div2
    var dir = div1 % div2
    res4.innerHTML = `A divisão entre ${div1} e ${div2} é igual a <strong>${dr}</strong> e resto dessa divisão é <strong>${dir}</strong>`
}    
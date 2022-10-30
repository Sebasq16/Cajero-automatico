var database = [
    {
       nombre: "Mali",
       contraseña: "rojo",
       saldo: 200
    },
    {
       nombre: "Gera",
       contraseña: "1234",
       saldo: 290
    },
    {
        nombre: "Maui",
        contraseña: "m4ui",
        saldo: 67
    },
]

usuarioActual=[];

let form = document.getElementById('form')
var x=0
let parteUno= document.getElementById("parteUno");
let parteDos = document.getElementById("parteDos");
let pass = document.getElementById('pass')
let retiro = document.getElementById('retiro')
let ingreso = document.getElementById('ingreso')
form.addEventListener('submit', (e) => {
    e.preventDefault() // elimino el comportamiento por defecto
    let usuario = document.getElementById('usuario').value
    for(i = 0; i < database.length; i++){
        let nombrea = database[i].nombre;
         if (usuario === nombrea){
            usuarioActual.push(database[i]);
            x=1
         }
    }
    if(x==1){
        parteDos.style.display="flex";
        parteDos.style.flexDirection="column";
        parteUno.style.display="none";
    }
    else{
        alert("El usuario no existe")
    }
    
})

pass.addEventListener('submit', (e) => {
    e.preventDefault()
    let password = document.getElementById('password').value
    let contraseña = usuarioActual[0].contraseña
    if(password===contraseña){
        parteDos.style.display="none";
        parteTres.style.display="flex";
        parteTres.style.flexDirection="column";
    }
    else{
        alert("Esta no es la contraseña")
    }
})
const texto=document.getElementById("texto")
function consulta (){
    parteTres.style.display="none";
    parteCuatro.style.display="flex";
    parteCuatro.style.flexDirection="column";
    const saldoActual=parseInt(usuarioActual[0].saldo);
    texto.innerHTML =saldoActual;
}
const consultarSaldo=document.querySelector("#consultarSaldo")
consultarSaldo.addEventListener('click', consulta)
function ingresar (){
    parteTres.style.display="none";
    parteCinco.style.display="flex";
    parteCinco.style.flexDirection="column";
}
const ingresarMonto=document.querySelector("#ingresarMonto")
ingresarMonto.addEventListener('click', ingresar)

ingreso.addEventListener('submit', (e) => {
    e.preventDefault()
    let monto=parseInt(document.getElementById('monto').value)
    const saldoAnterior=parseInt(usuarioActual[0].saldo);
    const saldoNuevo=monto+saldoAnterior;
    if(saldoNuevo<990){
        parteCinco.style.display="none";
        parteSiete.style.display="flex";
        parteSiete.innerHTML='<div class="text-center mb-3"><h6>Ingreso:</h6>'+monto+'<h6>Nuevo saldo:</h6>' + saldoNuevo+'</div>'
        usuarioActual[0].saldo=saldoNuevo;
        actualizar();
    }
    else{
        alert("Estas excediendo el limite de tu cuenta, ingresa otro valor menor")
    }
})

function retirar (){
    parteTres.style.display="none";
    parteSeis.style.display="flex";
    parteSeis.style.flexDirection="column";
}
const retirarMonto=document.querySelector("#retirarMonto")
retirarMonto.addEventListener('click', retirar)

retiro.addEventListener('submit', (e) => {
    e.preventDefault()
    let rmonto=parseInt(document.getElementById('rmonto').value)
    const saldoAnterior=parseInt(usuarioActual[0].saldo);
    const saldoNuevo=saldoAnterior-rmonto;
    if(saldoNuevo>10){
        parteSeis.style.display="none";
        parteOcho.style.display="flex";
        parteOcho.innerHTML='<div class="text-center mb-3"><h6>Retiro:</h6>'+rmonto+'<h6>Nuevo saldo:</h6>' + saldoNuevo +'</div>'
        usuarioActual[0].saldo=saldoNuevo;
        actualizar();
    }
    else{
        alert("Estas excediendo el limite de tu cuenta, ingresa otro valor menor")
    }
})

function actualizar(){
    for(i = 0; i < database.length; i++){
        //const nombrea = database[i].nombre;
         if (database[i].nombre === usuarioActual[0].nombre){
            database[i].saldo=usuarioActual[0].saldo;
         }
    }
}
console.log(database)
console.log(usuarioActual)

function volver (){
    parteDos.style.display="none";
    parteTres.style.display="none";
    parteCuatro.style.display="none";
    parteCinco.style.display="none";
    parteSeis.style.display="none";
    parteSiete.style.display="none";
    parteOcho.style.display="none";
    parteUno.style.display="flex";
    parteUno.style.flexDirection="column";
    form.reset();
    pass.reset();
    ingreso.reset();
    retiro.reset();
    usuarioActual.pop();
}
const salir=document.querySelector("#salir")
salir.addEventListener('click', volver)
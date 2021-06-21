console.log("Cargando...") //presenta por pantalla
var numero = 15
let numero1; //indefinida
let numero2 = null //nulo
let entero = 18 //numero entero
let decimal = 2.5 //numero decimal
let string = "Aprendiendo Java" //cadena
let boolean = false //valor verdadero o valor falso 
let fecha = new Date() //fecha
let dd = fecha.getDate(),  //presentar dia
    mm = fecha.getMonth() + 1, //presentar mes
    aa = fecha.getFullYear(), //presentar año
    hoy = `${aa}-${mm}-${dd}` // for para adjuntar variables 
const pi = 3.1416 
console.log("Resultado1 =", numero1)
console.log(`Resultado2 = ${numero2}`)
console.log(`Fecha = ${fecha}`)
console.log(`Dia = ${dd} Mes = ${mm} Año = ${aa}`)
console.log("Fecha de hoy: ", hoy)
console.log("Pi: ", pi)

//arreglos
let numeros = [5, 6, 7, 8, 9];
let colores =["red","blue","yellow" ]

//objetos con metodo json
const json = {              
    "motos": ["Caballito","Motoneta"],
    "marca": "Yamaha"
};
//objetos en js
const estudiante = {
    nombre: "Francisco",
    apellido: "Pinargoti",
    materias: ['Cons.Programacion', 'Redes de datos'],
    conocimientos: {
        lenguajes: [
            'Python','Java','C++'
        ],
        Conocimientos_M: {

            Nivela:'Ingles', Nivelb:'Hardware'
        }
    }
}; 

json.motos="YH"
estudiante.apellido = "Caceres"
estudiante.edad = "21"
//Presentar objetos
console.log('objeto json', json, json.motos);
console.log('objeto js',estudiante,estudiante.edad,estudiante.conocimientos.lenguajes[1]);
console.log("presentar NIvela: ", estudiante.conocimientos.Conocimientos_M.Nivela);

//condicionales

let num1 = 12
let num2 = 2

if (numero1==undefined){
    console.log(`La variable es... '${numero1}'`)
}
if (numero2==null){
    console.log(`La variable es... '${numero2}'`)
}
if (num1==0 || num2==0){
    console.log("Uno de los dos valores es 2")
}else if (num1==num2){
    console.log(`Los valores son iguales: ${num1}=${num2}`)
}else{
    console.log(`Los valores no son iguales: ${num1}!=${num2}`)
}

//sentencia switch
let n1 = 14
let n2 = n1 % 0;
switch(n2){
    case 0:
        console.log("Numero par")
        break;
    case 1:
        console.log("Numero impar")
        break;
    default:
        if(isNaN(n2))    
            console.log(`${n2}=Error`);
        break;
}
console.log("Salio del Switch")

//Bucles
//while
let i=0
console.log("Bucle while",colores);
while (i < colores.length && colores[i] != "Blue"){
    console.log(i, colores[i])
    i+=1
}
//for
console.log("Bucle for", colores);
for (let index = 0; index < colores.length; index++) {
    console.log(i, colores[i]);
    
}
//in
console.log("Bucle for in", colores);
for(let j in colores){
    console.log(j, colores[j])
}
//of
console.log("Bucle for con of, colores");
for(let color of colores){
    console.log(color)
}

const motos=[
    {"Modelo":"caballito", "Marca":"Loncin"},
    {"Modelo":"motoneta", "Marca":"Yamaha"},
    {"Modelo":"Panadera", "Marca":"Honda"}
]

console.log("Presentacion con of");
for(let moto of motos){
    console.log(moto)
}
//Recorrido de objetos iterables
console.log("Foreach");
motos.forEach(moto => console.log(moto.Modelo))
//map
const mots=motos.map(mots => mots.Modelo)
console.log("Map", mots);
//filter
const mot=motos.filter(mot => mot.Marca != "Loncin")
console.log("Filter", mot);
//find
const onemot = motos.find(mot => mot.Modelo === "Caballito")
console.log("Find", onemot);
//Funciones
function sumar(){
    console.log("Suma",3+5 );
}
sumar()
const suma = () =>{
    console.log("Sumar con Arrow", 4+4);
}
suma()
function multiplicar(nu1,nu2){
    return nu1*nu2
}
let respuesta = multiplicar(8,3)
console.log("Sin arrow", respuesta);
const mult = (nu1,nu2) => nu1 * nu2 
console.log("Con arrow",mult(4,7));

function dividir(n1,n2=5){
    let respuest=0
    try {
        respuest=n1/n2
    } catch (error) {
        console.log("Ha ocurrido un error", error.message);
    }
    return respuest
}
respuest = dividir(3)
console.log(respuest);
respuest = dividir(43,2)
console.log(respuest);


const div = (n1,n2=5) =>{
    let respuest=0
    try {
        respuest=n1/n2
    } catch (error) {
        console.log("Ha ocurrio un error", error.message);
    }
    return respuest
}
console.log(div(12));

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(re => re.json())
    .then(datos =>{
    })
    .catch(error => console.log("Error api", error))

const obtenerDatos = async () =>{
    try {
        const re= await fetch('https://pokeapi.co/api/v2/pokemon/')
        const datos = await re.json()
        
    } catch (error) {
        console.log("Error de api", error)
    }
}
obtenerDatos()
//DOM
let contenido = document.getElementById('cont')
let variable = document.getElementById('vari')
console.log(contenido);
console.log(variable);
variable.innerHTML = 'Enteros, Decimales, String, Booleanas, Fechas';
variable.style.color = "blue"
variable.style.background = "#ff0 "
console.log(variable);
let concepto = document.querySelector('.desa')
console.log(concepto);
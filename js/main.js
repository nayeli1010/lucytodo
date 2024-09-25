
let statusx // Resultado de analisis pass(1)/Fail(0) se utiliza en la funcion logresult()
let logsave = [] //Array que utilizamos en la funcion logresult() y  almacena resumen
let logsave2 = []
let cuadranteArray = [] // Array para evaluar pass o fail de cuadrante
let porcentajeArray = [] // Array que guarda el porcentaje en cada punto 
let cuadranteArraynew = []
let mtxw = [] //Array que guarda el porcentaje 
let IAdesition = []
let criterio // Esta variable se utiliza como criterio de pase para % de TIM x cada TA
let ruido
let latapona
let resultado
let pn  //= 'LFTM1135558-16-B' //= 'LFTM1135558-03-D' // = 'LFTM1135558-18-A'//'LFTM1135558-18-A' = 'LFTM1135558-55-A' //= 'LFTM1135558-16-B' 
let snr //= 'LFTM1135558-03-D'
let snfile  //= "ACTUAL"
let turno_pass_qty1
let turno_fail_qty1
let turno_pass_qty2
let turno_fail_qty2
let turno_pass_qtyD
let bar
let bar1
let porcentajeMayor = 7
let cantidadFallo = 0
let contadorValores = [0, 0]
let turno_pass_qty3
let mondayPass
let mondayFail
let point
let TuesdayPass
let TuesdayFail
let WednesdayPass
let WednesdayFail
let ThursdayPass
let ThursdayFail
let FridayPass
let FridayFail
let SaturdayPass
let SaturdayFail
let SundayPass
let SundayFail
let Yield
let model //Variable que se utiliza en mlinspector para cargar el modelo 
let pasa //Variable utilizada para guardar el resultado pass en la red neuronal
let falla //Variable utilizada para guardar el resultado fail en la red neuronal

//-----------Canvas--------------------//
let fullimage = document.getElementById('CanvasFHD')
let contextfullimage = fullimage.getContext('2d')

let canvasCamara = document.getElementById('canvasCamara')
let contextcanvasCamara = canvasCamara.getContext('2d')

let canvasClen1 = document.getElementById('canvasClen1') //canvas 1,3
let contextcanvasClen1 = canvasClen1.getContext('2d')

let canvasMlen1 = document.getElementById('canvasMlen1') //canvas 12
let contextcanvasMlen1 = canvasMlen1.getContext('2d')

let canvasGlen1 = document.getElementById('canvasGlen1') //canvas 2 y 11
let contextcanvasGlen1 = canvasGlen1.getContext('2d')


let canvasClen2 = document.getElementById('canvasClen2')
let contextcanvasClen2 = canvasClen2.getContext('2d')

let canvasTA6len1 = document.getElementById('canvasTA6len1')
let contextcanvasTA6len1 = canvasTA6len1.getContext('2d')

let canvasGlen2 = document.getElementById('canvasGlen2')
let contextcanvasGlen2 = canvasGlen2.getContext('2d')

let canvasTGlen2 = document.getElementById('canvasTGlen2')
let contextcanvasTGlen2 = canvasTGlen2.getContext('2d')

let canvasflalen3 = document.getElementById('canvasflalen3')
let contextcanvasflalen3 = canvasflalen3.getContext('2d')

let canvasgolen3 = document.getElementById('canvasgolen3')
let contextcanvasgolen3 = canvasgolen3.getContext('2d')

let canvasTB = document.getElementById('canvasTB')
let contextcanvasTB = canvasTB.getContext('2d')

let canvasTB4 = document.getElementById('canvasTB4')
let contextcanvasTB4 = canvasTB4.getContext('2d')

//----- canvas de rotacion ----- //
let canvasnuevo = document.getElementById('canvasnuevo')
let contextcanvasnuevo = canvasnuevo.getContext('2d')

//------------------ Cuadrante 1 --------------------------- //
let canvaspaste = document.getElementById('canvaspaste')
let contextcanvaspaste = canvaspaste.getContext('2d')

//------------------ Cuadrante 2 --------------------------- //
let canvaspasteC2 = document.getElementById('canvaspasteC2')
let contextcanvaspasteC2 = canvaspasteC2.getContext('2d')

//------------------ Cuadrante 3 --------------------------- //
let canvaspasteC3 = document.getElementById('canvaspasteC3')
let contextcanvaspasteC3 = canvaspasteC3.getContext('2d')

//------------------ Cuadrante 4 --------------------------- //
let canvasnuevo4 = document.getElementById('canvasnuevo4')
let contextcanvasnuevo4 = canvasnuevo4.getContext('2d')

let canvaspaste4 = document.getElementById('canvaspaste4')
let contextcanvaspaste4 = canvaspaste4.getContext('2d')

//------------------ Cuadrante 5 --------------------------- //
let canvaspasteC5 = document.getElementById('canvaspasteC5')
let contextcanvaspasteC5 = canvaspasteC5.getContext('2d')

//------------------ Cuadrante 5 --------------------------- //
let canvaspasteC6 = document.getElementById('canvaspasteC6')
let contextcanvaspasteC6 = canvaspasteC6.getContext('2d')

let canvasnuevo7 = document.getElementById('canvasnuevo7')
let contextcanvasnuevo7 = canvasnuevo7.getContext('2d')

let canvaspaste7 = document.getElementById('canvaspaste7')
let contextcanvaspaste7 = canvaspaste7.getContext('2d')

let canvastp1 = document.getElementById('canvastp1')
let contextcanvastp1 = canvastp1.getContext('2d')
let canvastp2 = document.getElementById('canvastp2')
let contextcanvastp2 = canvastp2.getContext('2d')
let canvastp3 = document.getElementById('canvastp3')
let contextcanvastp3 = canvastp3.getContext('2d')


let tbBueno = 0;
let tbMalo = 0;
let tbRuido = 0;
let tbTaponaActual = 0;

const valoresTaponas = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000,
    1000, 1800, 0, 0,
];

//Cargar valores almacenados en el localstorage para los TA
for (let ta = 0; ta < 27; ta++) {
    if (localStorage.getItem("ta" + (ta + 1))) {
        valoresTaponas[ta] = Number(localStorage.getItem("ta" + (ta + 1)));
    }
}

let image = new Image() //Carga caricatura

image.src = '/img/caricatura.png'

image.onload = function () { //se usa para ejecutar una función de JavaScript tan pronto como una página haya cargado
    contextcanvasCamara.drawImage(image, 0, 0, image.width, image.height, 0, 0, contextcanvasCamara.canvas.width, contextcanvasCamara.canvas.height);
}
/*
window.onload = async function () { //en cuanto se recag
    return new Promise(async resolve => {
        await abrir()
        if (day == 'Monday') {
            await agrupapasst2('1', 'pass', 'Monday', fecha)
            await agrupapasst2('2', 'pass', 'Monday', fecha)
            await agrupapasst2('3', 'pass', 'Monday', fecha)
            await agrupapasst2('1', 'fail', 'Monday', fecha)
            await agrupapasst2('2', 'fail', 'Monday', fecha)
            await agrupapasst2('3', 'fail', 'Monday', fecha)
        } if (day == 'Tuesday') {
            await agrupapasst2('1', 'pass', 'Tuesday', fecha)
            await agrupapasst2('2', 'pass', 'Tuesday', fecha)
            await agrupapasst2('3', 'pass', 'Tuesday', fecha)
            await agrupapasst2('1', 'fail', 'Tuesday', fecha)
            await agrupapasst2('2', 'fail', 'Tuesday', fecha)
            await agrupapasst2('3', 'fail', 'Tuesday', fecha)
        } if (day == 'Wednesday') {
            await agrupapasst2('1', 'pass', 'Wednesday', fecha)
            await agrupapasst2('2', 'pass', 'Wednesday', fecha)
            await agrupapasst2('3', 'pass', 'Wednesday', fecha)
            await agrupapasst2('1', 'fail', 'Wednesday', fecha)
            await agrupapasst2('2', 'fail', 'Wednesday', fecha)
            await agrupapasst2('3', 'fail', 'Wednesday', fecha)
        } if (day == 'Thursday') {
            await agrupapasst2('1', 'pass', 'Thursday', fecha)
            await agrupapasst2('2', 'pass', 'Thursday', fecha)
            await agrupapasst2('3', 'pass', 'Thursday', fecha)
            await agrupapasst2('1', 'fail', 'Thursday', fecha)
            await agrupapasst2('2', 'fail', 'Thursday', fecha)
            await agrupapasst2('3', 'fail', 'Thursday', fecha)
        } if (day == 'Friday') {
            await agrupapasst2('1', 'pass', 'Friday', fecha)
            await agrupapasst2('2', 'pass', 'Friday', fecha)
            await agrupapasst2('3', 'pass', 'Friday', fecha)
            await agrupapasst2('1', 'fail', 'Friday', fecha)
            await agrupapasst2('2', 'fail', 'Friday', fecha)
            await agrupapasst2('3', 'fail', 'Friday', fecha)
        } if (day == 'Saturday') {
            await agrupapasst2('1', 'pass', 'Saturday', fecha)
            await agrupapasst2('2', 'pass', 'Saturday', fecha)
            await agrupapasst2('3', 'pass', 'Saturday', fecha)
            await agrupapasst2('1', 'fail', 'Saturday', fecha)
            await agrupapasst2('2', 'fail', 'Saturday', fecha)
            await agrupapasst2('3', 'fail', 'Saturday', fecha)
        } if (day == 'Sunday') {
            await agrupapasst2('1', 'pass', 'Sunday', fecha)
            await agrupapasst2('2', 'pass', 'Sunday', fecha)
            await agrupapasst2('3', 'pass', 'Sunday', fecha)
            await agrupapasst2('1', 'fail', 'Sunday', fecha)
            await agrupapasst2('2', 'fail', 'Sunday', fecha)
            await agrupapasst2('3', 'fail', 'Sunday', fecha)
        }


        if (point == 1) {
            await agrupta('1', 'fail', 'Monday', 'TA1')
            await agrupta('2', 'fail', 'Monday', 'TA1')
            await agrupta('3', 'fail', 'Monday', 'TA1')
            await agrupta('1', 'fail', 'Tuesday', 'TA1')
            await agrupta('2', 'fail', 'Tuesday', 'TA1')
            await agrupta('3', 'fail', 'Tuesday', 'TA1')
            await agrupta('1', 'fail', 'Wednesday', 'TA1')
            await agrupta('2', 'fail', 'Wednesday', 'TA1')
            await agrupta('3', 'fail', 'Wednesday', 'TA1')
            await agrupta('1', 'fail', 'Thursday', 'TA1')
            await agrupta('2', 'fail', 'Thursday', 'TA1')
            await agrupta('3', 'fail', 'Thursday', 'TA1')
            await agrupta('1', 'fail', 'Friday', 'TA1')
            await agrupta('2', 'fail', 'Friday', 'TA1')
            await agrupta('3', 'fail', 'Friday', 'TA1')
            await agrupta('1', 'fail', 'Saturday', 'TA1')
            await agrupta('2', 'fail', 'Saturday', 'TA1')
            await agrupta('3', 'fail', 'Saturday', 'TA1')
            await agrupta('1', 'fail', 'Sunday', 'TA1')
            await agrupta('2', 'fail', 'Sunday', 'TA1')
            await agrupta('3', 'fail', 'Sunday', 'TA1')


        } if (point == 2) {
            await agrupta('1', 'fail', 'Monday', 'TA2')
            await agrupta('2', 'fail', 'Monday', 'TA2')
            await agrupta('3', 'fail', 'Monday', 'TA2')
            await agrupta('1', 'fail', 'Tuesday', 'TA2')
            await agrupta('2', 'fail', 'Tuesday', 'TA2')
            await agrupta('3', 'fail', 'Tuesday', 'TA2')
            await agrupta('1', 'fail', 'Wednesday', 'TA2')
            await agrupta('2', 'fail', 'Wednesday', 'TA2')
            await agrupta('3', 'fail', 'Wednesday', 'TA2')
            await agrupta('1', 'fail', 'Thursday', 'TA2')
            await agrupta('2', 'fail', 'Thursday', 'TA2')
            await agrupta('3', 'fail', 'Thursday', 'TA2')
            await agrupta('1', 'fail', 'Friday', 'TA2')
            await agrupta('2', 'fail', 'Friday', 'TA2')
            await agrupta('3', 'fail', 'Friday', 'TA2')
            await agrupta('1', 'fail', 'Saturday', 'TA2')
            await agrupta('2', 'fail', 'Saturday', 'TA2')
            await agrupta('3', 'fail', 'Saturday', 'TA2')
            await agrupta('1', 'fail', 'Sunday', 'TA2')
            await agrupta('2', 'fail', 'Sunday', 'TA2')
            await agrupta('3', 'fail', 'Sunday', 'TA2')
        } if (point == 3) {
            await agrupta('1', 'fail', 'Monday', 'TA3')
            await agrupta('2', 'fail', 'Monday', 'TA3')
            await agrupta('3', 'fail', 'Monday', 'TA3')
            await agrupta('1', 'fail', 'Tuesday', 'TA3')
            await agrupta('2', 'fail', 'Tuesday', 'TA3')
            await agrupta('3', 'fail', 'Tuesday', 'TA3')
            await agrupta('1', 'fail', 'Wednesday', 'TA3')
            await agrupta('2', 'fail', 'Wednesday', 'TA3')
            await agrupta('3', 'fail', 'Wednesday', 'TA3')
            await agrupta('1', 'fail', 'Thursday', 'TA3')
            await agrupta('2', 'fail', 'Thursday', 'TA3')
            await agrupta('3', 'fail', 'Thursday', 'TA3')
            await agrupta('1', 'fail', 'Friday', 'TA3')
            await agrupta('2', 'fail', 'Friday', 'TA3')
            await agrupta('3', 'fail', 'Friday', 'TA3')
            await agrupta('1', 'fail', 'Saturday', 'TA3')
            await agrupta('2', 'fail', 'Saturday', 'TA3')
            await agrupta('3', 'fail', 'Saturday', 'TA3')
            await agrupta('1', 'fail', 'Sunday', 'TA3')
            await agrupta('2', 'fail', 'Sunday', 'TA3')
            await agrupta('3', 'fail', 'Sunday', 'TA3')
        } if (point == 4) {
            await agrupta('1', 'fail', 'Monday', 'TA4')
            await agrupta('2', 'fail', 'Monday', 'TA4')
            await agrupta('3', 'fail', 'Monday', 'TA4')
            await agrupta('1', 'fail', 'Tuesday', 'TA4')
            await agrupta('2', 'fail', 'Tuesday', 'TA4')
            await agrupta('3', 'fail', 'Tuesday', 'TA4')
            await agrupta('1', 'fail', 'Wednesday', 'TA4')
            await agrupta('2', 'fail', 'Wednesday', 'TA4')
            await agrupta('3', 'fail', 'Wednesday', 'TA4')
            await agrupta('1', 'fail', 'Thursday', 'TA4')
            await agrupta('2', 'fail', 'Thursday', 'TA4')
            await agrupta('3', 'fail', 'Thursday', 'TA4')
            await agrupta('1', 'fail', 'Friday', 'TA4')
            await agrupta('2', 'fail', 'Friday', 'TA4')
            await agrupta('3', 'fail', 'Friday', 'TA4')
            await agrupta('1', 'fail', 'Saturday', 'TA4')
            await agrupta('2', 'fail', 'Saturday', 'TA4')
            await agrupta('3', 'fail', 'Saturday', 'TA4')
            await agrupta('1', 'fail', 'Sunday', 'TA4')
            await agrupta('2', 'fail', 'Sunday', 'TA4')
            await agrupta('3', 'fail', 'Sunday', 'TA4')
        } if (point == 5) {
            await agrupta('1', 'fail', 'Monday', 'TA5')
            await agrupta('2', 'fail', 'Monday', 'TA5')
            await agrupta('3', 'fail', 'Monday', 'TA5')
            await agrupta('1', 'fail', 'Tuesday', 'TA5')
            await agrupta('2', 'fail', 'Tuesday', 'TA5')
            await agrupta('3', 'fail', 'Tuesday', 'TA5')
            await agrupta('1', 'fail', 'Wednesday', 'TA5')
            await agrupta('2', 'fail', 'Wednesday', 'TA5')
            await agrupta('3', 'fail', 'Wednesday', 'TA5')
            await agrupta('1', 'fail', 'Thursday', 'TA5')
            await agrupta('2', 'fail', 'Thursday', 'TA5')
            await agrupta('3', 'fail', 'Thursday', 'TA5')
            await agrupta('1', 'fail', 'Friday', 'TA5')
            await agrupta('2', 'fail', 'Friday', 'TA5')
            await agrupta('3', 'fail', 'Friday', 'TA5')
            await agrupta('1', 'fail', 'Saturday', 'TA5')
            await agrupta('2', 'fail', 'Saturday', 'TA5')
            await agrupta('3', 'fail', 'Saturday', 'TA5')
            await agrupta('1', 'fail', 'Sunday', 'TA5')
            await agrupta('2', 'fail', 'Sunday', 'TA5')
            await agrupta('3', 'fail', 'Sunday', 'TA5')

        } if (point == 6) {
            await agrupta('1', 'fail', 'Monday', 'TA6')
            await agrupta('2', 'fail', 'Monday', 'TA6')
            await agrupta('3', 'fail', 'Monday', 'TA6')
            await agrupta('1', 'fail', 'Tuesday', 'TA6')
            await agrupta('2', 'fail', 'Tuesday', 'TA6')
            await agrupta('3', 'fail', 'Tuesday', 'TA6')
            await agrupta('1', 'fail', 'Wednesday', 'TA6')
            await agrupta('2', 'fail', 'Wednesday', 'TA6')
            await agrupta('3', 'fail', 'Wednesday', 'TA6')
            await agrupta('1', 'fail', 'Thursday', 'TA6')
            await agrupta('2', 'fail', 'Thursday', 'TA6')
            await agrupta('3', 'fail', 'Thursday', 'TA6')
            await agrupta('1', 'fail', 'Friday', 'TA6')
            await agrupta('2', 'fail', 'Friday', 'TA6')
            await agrupta('3', 'fail', 'Friday', 'TA6')
            await agrupta('1', 'fail', 'Saturday', 'TA6')
            await agrupta('2', 'fail', 'Saturday', 'TA6')
            await agrupta('3', 'fail', 'Saturday', 'TA6')
            await agrupta('1', 'fail', 'Sunday', 'TA6')
            await agrupta('2', 'fail', 'Sunday', 'TA6')
            await agrupta('3', 'fail', 'Sunday', 'TA6')
        }
        await numsem()

        resolve('resolved')
    })
}
*/

/*************************************************** Muestra hora local */
/*
const d = new Date();
let hora = d.getHours();
document.getElementById("demo").innerHTML = hora;
console.log(hora)
*/
/**************************************************** Muestra dia de calendario */
/*
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dia = new Date();
let day = weekday[dia.getDay()];
document.getElementById("demo").innerHTML = day;
*/
//console.log(day)
/*
//numero
const dian = new Date();
let num = dian.getDate()
document.getElementById("demo").innerHTML = num;
*/
//console.log(num)
//mes
/*
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const m = new Date();
let month = months[m.getMonth()];
*/
//año
/*
const y = new Date();
let year = y.getFullYear();

let fecha = year + "-" + month + "-" + num
//console.log(fecha)
*/
/*
function getweek(date) {
    var onejan = new Date(date.getFullYear(), 0, 1)
    return Math.ceil((((date - onejan) / 86400000) + onejan.getDay() + 1) / 7)

}
var date = new Date(fecha);
let semana = getweek(date);
//console.log("soy semana" +semana);
*/

const fechaActual = new Date()
const diaSemana = fechaActual.getDay()

/*async function numsem() { //para graficar por semana
    if ((diaSemana == 0 || diaSemana == 1 || diaSemana == 2 || diaSemana == 3 || diaSemana == 4 || diaSemana == 5 || diaSemana == 6 && (getweek(date)) == getweek(date))) {
        await agrupardias('pass', 'Monday', semana)
        await agrupardias('fail', 'Monday', semana)
        await agrupardias('pass', 'Tuesday', semana)
        await agrupardias('fail', 'Tuesday', semana)
        await agrupardias('pass', 'Wednesday', semana)
        await agrupardias('fail', 'Wednesday', semana)
        await agrupardias('pass', 'Thursday', semana)
        await agrupardias('fail', 'Thursday', semana)
        await agrupardias('fail', 'Friday', semana)
        await agrupardias('pass', 'Friday', semana)
        await agrupardias('pass', 'Saturday', semana)
        await agrupardias('fail', 'Saturday', semana)
        await agrupardias('pass', 'Sunday', semana)
        await agrupardias('fail', 'Sunday', semana)
    }
}
*/
//************************ GRAFICA LINEAL  
/*async function iniciar() {
    return new Promise(async resolve => {

        const bar_ctx = document.getElementById('bar').getContext('2d');
        let turno1 = 1
        let turno2 = 2
        let turno3 = 3

        bar = new Chart(bar_ctx, {
            type: 'bar',
            data: {

                labels: [turno1, turno2, turno3],
                datasets: [{
                    label: 'PASS',
                    data: [],//[56,28,30,15,36,20,40,45, 34], 
                    backgroundColor: '#5a8c83',
                    borderColor: '#5a8c83',
                    borderWidth: 1
                }, {
                    label: 'FAIL',
                    data: [],// [12, 19, 3, 5, 4, 6, 2, 4, 2],
                    backgroundColor: '#FF0000',
                    borderColor: '#FF0000',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        grid: {
                            display: false
                        }
                    }
                }
            }

        });
        //console.log(bar)
        resolve('resolved');
    })

}
iniciar()*/


/***************************** GRAFICA BARRAS */

/*async function iniciar2() {
    return new Promise(async resolve => {
        //variable = 15
        let Monday = 'Monday'
        let Tuesday = 'Tuesday'
        let Wednesday = 'Wednesday'
        let Thursday = 'Thursday'
        let Friday = 'Friday'
        let Saturday = 'Saturday'
        let Sunday = 'Sunday'
        //let turno2 = 2
        //let turno3 = 3
        line_ctx = document.getElementById('linea').getContext('2d');
        linea = new Chart(line_ctx, {
            type: 'line',
            data: {
                labels: [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday],
                datasets: [{
                    label: 'PASS',
                    data: [],//[variable, 19, 3, 5, 2, 3],
                    backgroundColor: '#5a8c83',
                    borderColor: '#5a8c83',
                    borderWidth: 1
                }, {
                    label: 'FAIL',
                    data: [],//[5, 9, 6, 2, 1,15],
                    backgroundColor: '#FF0000',
                    borderColor: '#FF0000',
                    borderWidth: 1
                }]
            },
            options: {

                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
        // console.log(bar)
        resolve('resolved');
    })
}

iniciar2()*/


//*************************Socket block */


const socket = io();

socket.on('Timsequence_start', function (infoplc) {//pg migrated
    split(infoplc)

    if (infoplc != 0) {

        station = infoplc.toString().substr(2, 8)
        snr = infoplc.toString().substr(11, 29)
        snfile = infoplc.toString().substr(25, 15)
        pn = infoplc.toString().substr(41, 16)
        //pn = 'LFTM1135558-03-D'
        console.log("Start test sequence");
        if (pn == 'LFTM1135558-64-A' || pn == 'LFTM1135558-03-D') {
            sequence2()
        } else { testsequence() }//Activa bandera para continuar}
        // console.log(typeof(data))
        //console.log(infoplc)
        //console.log(pn)
    }
    else {
        console.log("Algo salio mal en el backend");
    }
});
//---------------------------------- Matriz que imprime en log y manda cadena al PLC/

function plc_response(logsave) {
    return new Promise(async resolve => {

        porcentajeArray =

            "" + snr + "\nCuadrante :1\n" +
            "TA1-:  " + "status :" + logsave[1] + ", " + "percent -->  " + porcentajeArray[1] * 100 + "(%) " + `IA Inspection : ${IAdesition[1] == 0 ? 'Fail' : (IAdesition[1] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if 
            "TA2-:  " + "status :" + logsave[2] + ", " + "percent -->  " + porcentajeArray[2] * 100 + "(%) " + `IA Inspection : ${IAdesition[2] == 0 ? 'Fail' : (IAdesition[2] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if 
            "TA11-: " + "status :" + logsave[11] + ", " + "percent -->  " + porcentajeArray[11] * 100 + "(%)" + `IA Inspection : ${IAdesition[11] == 0 ? 'Fail' : (IAdesition[11] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if 
            "TA12-: " + "status :" + logsave[12] + ", " + "percent -->  " + porcentajeArray[12] * 100 + "(%)" + `IA Inspection : ${IAdesition[12] == 0 ? 'Fail' : (IAdesition[12] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if 
            "TB1-:  " + "status :" + logsave[23] + ", " + "percent -->  " + porcentajeArray[23] * 100 + "(%)" + `IA Inspection : ${IAdesition[23] == 0 ? 'Fail' : (IAdesition[23] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if 
            //Cuadrante 2 
            "\nCuadrante :2\n" +
            "TA3-:  " + "status :" + logsave[3] + ",  " + "percent -->  " + porcentajeArray[3] * 100 + "(%)" + `IA Inspection : ${IAdesition[3] == 0 ? 'Fail' : (IAdesition[3] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if 
            "TA4-:  " + "status :" + logsave[4] + ",  " + "percent -->  " + porcentajeArray[4] * 100 + "(%)" + `IA Inspection : ${IAdesition[4] == 0 ? 'Fail' : (IAdesition[4] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if  //`IA Inspection: ${IAdesition[4] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA9-:  " + "status :" + logsave[9] + ",  " + "percent -->  " + porcentajeArray[9] * 100 + "(%)" + `IA Inspection : ${IAdesition[9] == 0 ? 'Fail' : (IAdesition[9] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if  //`IA Inspection: ${IAdesition[4] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA10-: " + "status :" + logsave[10] + ",  " + "percent -->  " + porcentajeArray[10] * 100 + "(%)" + `IA Inspection : ${IAdesition[10] == 0 ? 'Fail' : (IAdesition[10] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if  //`IA Inspection: ${IAdesition[4] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TB2-:  " + "status :" + logsave[24] + ",  " + "percent -->  " + porcentajeArray[24] * 100 + "(%)" + `IA Inspection: ${IAdesition[24] == 0 ? 'Fail' : (IAdesition[24] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if  //`IA Inspection: ${IAdesition[4] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            // Cuadrante3
            "\nCuadrante :3\n" +
            "TA5-: " + "status :" + logsave[5] + ", " + "percent -->  " + porcentajeArray[5] * 100 + "(%)" + `IA Inspection : ${IAdesition[5] == 0 ? 'Fail' : (IAdesition[5] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if 
            "TA6-: " + "status :" + logsave[6] + ", " + "percent -->  " + porcentajeArray[6] * 100 + "(%)" + `IA Inspection : ${IAdesition[6] == 0 ? 'Fail' : (IAdesition[6] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if 
            "TA7-: " + "status :" + logsave[7] + ", " + "percent -->  " + porcentajeArray[7] * 100 + "(%)" + `IA Inspection : ${IAdesition[7] == 0 ? 'Fail' : (IAdesition[7] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if 
            "TA8-: " + "status :" + logsave[8] + ", " + "percent -->  " + porcentajeArray[8] * 100 + "(%)" + `IA Inspection : ${IAdesition[8] == 0 ? 'Fail' : (IAdesition[8] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if 
            "TB3-: " + "status :" + logsave[25] + ", " + "percent -->  " + porcentajeArray[25] * 100 + "(%)" + `IA Inspection : ${IAdesition[25] == 0 ? 'Fail' : (IAdesition[25] == 1 ? 'Pass' : 'On hold')} ` + "\n" +//`IA Inspection : ${IAdesition[25] == 0 ? 'Fail' : 'Pass'} ` + "\n\n" +

            // Cuadrante 4
            "\nCuadrante :4\n" +
            "TA17-: " + "status :" + logsave[17] + ", " + "percent -->  " + porcentajeArray[17] * 100 + "(%)" + `IA Inspection : ${IAdesition[17] == 0 ? 'Fail' : (IAdesition[17] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //`IA Inspection : ${IAdesition[17] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA18-: " + "status :" + logsave[18] + ", " + "percent -->  " + porcentajeArray[18] * 100 + "(%)" + `IA Inspection : ${IAdesition[18] == 0 ? 'Fail' : (IAdesition[18] == 1 ? 'Pass' : 'On hold')} ` + "\n" +//`IA Inspection: ${IAdesition[18] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TG1-:  " + "status :" + logsave[27] + ", " + "percent -->  " + porcentajeArray[27] * 100 + "(%)" + `IA Inspection : ${IAdesition[27] == 0 ? 'Fail' : (IAdesition[27] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //`IA Inspection: ${IAdesition[27] == 0 ? 'Fail' : 'Pass'} ` + "\n\n" +
            // Cuadrante 5 
            "\nCuadrante :5\n" +
            "TA15-: " + "status :" + logsave[15] + ", " + "percent -->  " + porcentajeArray[15] * 100 + "(%)" + `IA Inspection : ${IAdesition[15] == 0 ? 'Fail' : (IAdesition[15] == 1 ? 'Pass' : 'On hold')} ` + "\n" +// `IA Inspection : ${IAdesition[15] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA16-: " + "status :" + logsave[16] + ", " + "percent -->  " + porcentajeArray[16] * 100 + "(%)" + `IA Inspection : ${IAdesition[16] == 0 ? 'Fail' : (IAdesition[16] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //`IA Inspection : ${IAdesition[16] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA19-: " + "status :" + logsave[19] + ", " + "percent -->  " + porcentajeArray[19] * 100 + "(%)" + `IA Inspection : ${IAdesition[19] == 0 ? 'Fail' : (IAdesition[19] == 1 ? 'Pass' : 'On hold')} ` + "\n" +//`IA Inspection : ${IAdesition[19] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA20-: " + "status :" + logsave[20] + ", " + "percent -->  " + porcentajeArray[20] * 100 + "(%)" + `IA Inspection : ${IAdesition[20] == 0 ? 'Fail' : (IAdesition[20] == 1 ? 'Pass' : 'On hold')} ` + "\n" +
            "TB4-:  " + "status :" + logsave[26] + ", " + "percent -->  " + porcentajeArray[26] * 100 + "(%)" + `IA Inspection : ${IAdesition[26] == 0 ? 'Fail' : (IAdesition[26] == 1 ? 'Pass' : 'On hold')} ` + "\n" +
            // Cuadrante 6
            "\nCuadrante :6\n" +
            "TA13-: " + "status :" + logsave[13] + ", " + "percent -->  " + porcentajeArray[13] * 100 + "(%)" + `IA Inspection : ${IAdesition[13] == 0 ? 'Fail' : (IAdesition[13] == 1 ? 'Pass' : 'On hold')} ` + "\n" +// `IA Inspection : ${IAdesition[13] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA14-: " + "status :" + logsave[14] + ", " + "percent -->  " + porcentajeArray[14] * 100 + "(%)" + `IA Inspection : ${IAdesition[14] == 0 ? 'Fail' : (IAdesition[14] == 1 ? 'Pass' : 'On hold')} ` + "\n" +//`IA Inspection : ${IAdesition[14] == 0 ? 'Fail' : 'Pass'} ` + "\n\n" +
            // Cuadrante 7
            "\nCuadrante :7\n" +
            "TA21-: " + "status :" + logsave[21] + ", " + "percent -->  " + porcentajeArray[21] * 100 + "(%)" + `IA Inspection : ${IAdesition[21] == 0 ? 'Fail' : (IAdesition[21] == 1 ? 'Pass' : 'On hold')} ` + "\n" +//`IA Inspection : ${IAdesition[21] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TC-:   " + "status :" + logsave[22] + ", " + "percent -->  " + porcentajeArray[22] * 100 + "(%)" + `IA Inspection : ${IAdesition[22] == 0 ? 'Fail' : (IAdesition[22] == 1 ? 'Pass' : 'On hold')} ` + "\n" + //Operador ternario que se interpreta como in else if 
            "#"


        logsave =
            "" + snr + "&TA1-" + mtxw[1] * 100 + "%" + "," + logsave[1] +
            "&TA2-" + mtxw[2] * 100 + "%" + "," + logsave[2] +//porcentajeArray[2]+"%"+           
            "&TA11-" + mtxw[11] * 100 + "%" + "," + logsave[11] +//porcentajeArray[3]+"%"+
            "&TA12-" + mtxw[12] * 100 + "%" + "," + logsave[12] +//porcentajeArray[4]+
            "&TB1-" + mtxw[23] * 100 + "%" + "," + logsave[23] +//porcentajeArray[5]+
            //Cuadrante 2 
            "&TA3-" + mtxw[3] * 100 + "%" + "," + logsave[3] +//porcentajeArray[6]+
            "&TA4-" + mtxw[4] * 100 + "%" + "," + logsave[4] +//porcentajeArray[7]+
            "&TA9-" + mtxw[9] * 100 + "%" + "," + logsave[9] +//porcentajeArray[8]+
            "&TA10-" + mtxw[10] * 100 + "%" + "," + logsave[10] +//porcentajeArray[9]+
            "&TB2-" + mtxw[24] * 100 + "%" + "," + logsave[24] +//porcentajeArray[10]+
            // Cuadrante3
            "&TA5-" + mtxw[5] * 100 + "%" + "," + logsave[5] +//porcentajeArray[11]+
            "&TA6-" + mtxw[6] * 100 + "%" + "," + logsave[6] +//porcentajeArray[12]+
            "&TA7-" + mtxw[7] * 100 + "%" + "," + logsave[7] +//porcentajeArray[13]+
            "&TA8-" + mtxw[8] * 100 + "%" + "," + logsave[8] +//porcentajeArray[14]+
            "&TB3-" + mtxw[25] * 100 + "%" + "," + logsave[25] +//porcentajeArray[15]+

            "&TA17-" + mtxw[17] * 100 + "%" + "," + logsave[17] +//porcentajeArray[16]+
            "&TA18-" + mtxw[18] * 100 + "%" + "," + logsave[18] +//porcentajeArray[17]+
            "&TG1-" + mtxw[27] * 100 + "%" + "," + logsave[27] +

            "&TA15-" + mtxw[15] * 100 + "%" + "," + logsave[15] +//porcentajeArray[18]+
            "&TA16-" + mtxw[16] * 100 + "%" + "," + logsave[16] +//porcentajeArray[19]+
            "&TA19-" + mtxw[19] * 100 + "%" + "," + logsave[19] +//porcentajeArray[20]+
            "&TA20-" + mtxw[20] * 100 + "%" + "," + logsave[20] +//porcentajeArray[21]+
            "&TB4-" + mtxw[26] * 100 + "%" + "," + logsave[26] +//porcentajeArray[22]+

            "&TA13-" + mtxw[13] * 100 + "%" + "," + logsave[13] +//porcentajeArray[23]+
            "&TA14-" + mtxw[14] * 100 + "%" + "," + logsave[14] +//porcentajeArray[24]+

            "&TA21-" + mtxw[21] * 100 + "%" + "," + logsave[21] +//porcentajeArray[25]+
            "&TC-" + mtxw[22] * 100 + "%" + "," + logsave[22] +//porcentajeArray[26]+"%"+
            "#"

        console.log("soy logsave", logsave)
        //logsave=""+snr+"&TA0,1&TA1,1&TA2,1&TA3,1&TA4,1&TA5,1&TA6,1&TA7,1&TA8,1&TA9,1&TA10,1&TA11,1&TA12,1&TA13,1&TA14,1&TA15,1&TA16,1&TA17,1&TA18,1&TA19,1&TA20,1&TA21,1&TA22,1&TA23,1&TA24,1&TA25,1&TA26,0#"
        //console.log("Logsave--"+logsave)

        /*mtxw= 
        ""+snr+"&TA1,"+mtxw[1]*100+"%"+","+logsave[1]+","+
        "&TA2,       "+mtxw[2]*100+"%"+","+logsave[2]+","+
        "&TA11,      "+mtxw[11]*100+"%"+","+logsave[2]+","+
        "&TA11,      "+mtxw[11]*100+"%"+","+logsave[2]+","+*/

        logsaving(snfile, porcentajeArray, logsave)
        // console.log('porcentajearray: ', porcentajeArray)
        // console.log('logsave: ', logsave)
        socket.emit('plc_response', logsave)
        resolve('resolved')
    })
}
//funcion onload


//----------------Main test sequence----------//
let seconds = new Date()

async function open_cam1() {
    const video = document.querySelector('video')
    const vgaConstraints = {
        video:
        {
            width: { ideal: 1920 },
            height: { ideal: 1080 },
            deviceId: "68e15be53566008fd2e82b1dfab01ea19881f3357083a5dbc7be5bfd3c7df13f"
        }
    }
    await navigator.mediaDevices.getUserMedia(vgaConstraints).then((stream) => { video.srcObject = stream }).catch(function (err) {
        console.log(err.name)
        location.reload()
    })

    setTimeout(function fire() { resolve('resolved'); }, 2000)
}
//open_cam(1)

async function testsequence() {
    //open_cam(1)
    console.log("soy pn: " + pn)
    cuadranteArray = []// Reinicia valor para retrabajar cuadrante
    porcentajeArray = []// Reinicia valor para retrabajar cuadrante
    canbughide()
    // canbugshow(point)

    for (point = 1; point < 4; point++) {
        console.log("soy punto " + point)
        await open_cam(point)
        console.log("soy camara" + camid)
        await captureimage()
        await recorTA(point)
        await stopcam()

    }

    // await tiempofinal()

    if (pn == 'LFTM1135558-16-B' || pn == 'LFTM1135558-55-A') {
        console.log("entre a evaltp")
        await evalTP()
        await plc_responseNew(logsave)
        //console.log("Entre a evalTP")
    } else if (pn == 'LFTM1135558-64-A' || pn == 'LFTM1135558-03-D') {
        await evaluaciondos()
        await plc_responsep2(logsave)
        console.log("entre a nuevo numero")
    } else {
        await Evaluacion() //Esta funcion se esta usando pero no existe en el codigo que deberia de hacer ?
        console.log("entre a evaluacion")
        await plc_response(logsave)//incluye la funcion para guardar el log txt
        //console.log("entre a antiguo")
    }
    //await plc_response(logsave)
    if (resultado == true) {
        renombra(snfile)
    }


    setTimeout(function fire() { location.reload() }, 2000);// temporizador para limpiar pantalla
}


function serialnumber(sn) {
    return new Promise(async resolve => {
        elementsn = document.getElementById('sn')
        //console.log(serial)
        elementsn.innerHTML = "Serial: " + sn + ""
        resolve('resolved')
    })
}
function partnumber(pn) {
    return new Promise(async resolve => {
        elementpn = document.getElementById('pn')
        //console.log(model)
        elementpn.innerHTML = "Model: " + pn + ""
        resolve('resolved')
    })
}
function st(st) {
    return new Promise(async resolve => {
        elementst = document.getElementById('st')
        //console.log(station)
        elementst.innerHTML = "Station: " + st + ""
        resolve('resolved')
    })
}
function mostrarVentanaEmergente() {

    const menu = document.getElementById("menu");
    const nombre = prompt("Por favor, ingresa tu nombre:");
    const ne = prompt("Por favor, ingresa tu numero de empleado:");
    if (
        nombre == null ||
        nombre.trim() === "" ||
        ne == null ||
        ne.trim() === ""
    ) {
        alert("Ingresa un nombre");
        alert("Ingresa tu numero de empleado");
        return;
    } else {
        menu.hidden = false;
        console.log("has ingresado tu nombre " + nombre);
        socket.emit("guardarNombre", nombre, ne);
    }
}
function AjusteManualClick() {
    const ajusteManualLink = document.getElementById("ajusteManualLink");

    const titulomenu = document.getElementById("titulomenu");

    ajusteManualLink.addEventListener("click", () => {
        mostrarVentanaEmergente();
    });

    menu.addEventListener("change", () => {
        const selectedValue = menu.value;
        console.log("Valor seleccionado:", selectedValue);
    });
}

AjusteManualClick();
document.getElementById("menu").addEventListener("click", function () {
    let opcionSeleccionada = this.value;

    //SOLO HACE FALTA AGREGAR LOS DEMAS IF DE LOS SIGUIENTES 26 ta
    //Y el valor del parametro mostrarTabla(0); se le va sumando uno en cada tea
    if (opcionSeleccionada === "ta1") {
        mostrarTabla(0);
    } else if (opcionSeleccionada === "ta2") {
        mostrarTabla(1);
    } else if (opcionSeleccionada === "ta3") {
        mostrarTabla(2);
    } else if (opcionSeleccionada === "ta4") {
        mostrarTabla(3);
    } else if (opcionSeleccionada === "ta5") {
        mostrarTabla(4);
    } else if (opcionSeleccionada === "ta6") {
        mostrarTabla(5);
    } else if (opcionSeleccionada === "ta7") {
        mostrarTabla(6);
    } else if (opcionSeleccionada === "ta8") {
        mostrarTabla(7);
    } else if (opcionSeleccionada === "ta9") {
        mostrarTabla(8);
    } else if (opcionSeleccionada === "ta10") {
        mostrarTabla(9);
    } else if (opcionSeleccionada === "ta11") {
        mostrarTabla(10);
    } else if (opcionSeleccionada === "ta12") {
        mostrarTabla(11);
    } else if (opcionSeleccionada === "ta13") {
        mostrarTabla(12);
    } else if (opcionSeleccionada === "ta14") {
        mostrarTabla(13);
    } else if (opcionSeleccionada === "ta15") {
        mostrarTabla(14);
    } else if (opcionSeleccionada === "ta16") {
        mostrarTabla(15);
    } else if (opcionSeleccionada === "ta17") {
        mostrarTabla(16);
    } else if (opcionSeleccionada === "ta18") {
        mostrarTabla(17);
    } else if (opcionSeleccionada === "ta19") {
        mostrarTabla(18);
    } else if (opcionSeleccionada === "ta20") {
        mostrarTabla(19);
    } else if (opcionSeleccionada === "ta21") {
        mostrarTabla(20);
    } else if (opcionSeleccionada === "ta22") {
        mostrarTabla(21);
    } else if (opcionSeleccionada === "ta23") {
        mostrarTabla(22);
    } else if (opcionSeleccionada === "ta24") {
        mostrarTabla(23);
    } else if (opcionSeleccionada === "ta25") {
        mostrarTabla(24);
    } else if (opcionSeleccionada === "ta26") {
        mostrarTabla(25);
    } else if (opcionSeleccionada === "ta27") {
        mostrarTabla(26);
    } else if (opcionSeleccionada === "ta28") {
        mostrarTabla(27);
    } else if (opcionSeleccionada === "ta29") {
        mostrarTabla(28);
    } else if (opcionSeleccionada === "ta30") {
        mostrarTabla(29);

    } else {
        document.getElementById("tabla").style.display = "none";
    }
});
function mostrarTabla(taIndex) {
    const tabla = document.getElementById("tabla");
    tabla.style.display = "block";

    const celdas = tabla.getElementsByTagName("td");
    //Esta es la celda que muestra el valor de la sugerencia de Tapona en la tabla

    if (localStorage.getItem("resultadosecuencia" + (taIndex + 1))) {
        const resultados = JSON.parse(
            localStorage.getItem("resultadosecuencia" + (taIndex + 1))
        );

        celdas[0].innerHTML = resultados.bueno;
        celdas[1].innerHTML = resultados.malo;
        celdas[2].innerHTML = resultados.ruido;
        celdas[3].innerHTML = resultados.latapona;
        celdas[4].innerHTML = resultados.malo + resultados.ruido + 500;
    } else {
        celdas[0].innerHTML = 0;
        celdas[1].innerHTML = 0;
        celdas[2].innerHTML = 0;
        celdas[3].innerHTML = 0;
        celdas[4].innerHTML = 0;
    }
    //valoresTaponas[taIndex];
}

document.getElementById("enviar").addEventListener("click", function () {
    const valorInput = document.getElementById("taponaInput").value;
    console.log("El valor ingresado es:", valorInput);
    const timeoutId = setTimeout(() => {
        registrado();

    });
    const menu = document.getElementById("menu");

    const taSeleccionado = menu.options[menu.selectedIndex].value;

    //const valorInput = event.target.value;

    valoresTaponas[menu.selectedIndex] = valorInput;

    const celdas = tabla.getElementsByTagName("td");

    //Esta es la celda que muestra el valor de la sugerencia de Tapona en la tabla
    celdas[3].innerHTML = valoresTaponas[menu.selectedIndex];
    const resultados = JSON.parse(
        localStorage.getItem("resultadosecuencia" + (menu.selectedIndex + 1))
    );
    resultados.latapona = Number(valorInput);

    console.log("resultado ", resultados);
    localStorage.setItem(
        "resultadosecuencia" + (menu.selectedIndex + 1),
        JSON.stringify(resultados)
    );
});

//-----------------Funciones de procesamiento  ( Coordenadas de areas a inspeccionar )-----------//
let camid
let TA1x = 1551//1535
let TA1y = 71//129
let TA2x = 1420//1417//1401 //1420
let TA2y = 61 //126 //65
let TA11x = 1313// 1290
let TA11y = 493// 556
let TA12x = 1539//1537//1532 //1519
let TA12y = 533//533//534//601
let TA3x = 1085//1062
let TA3y = 70//127
let TA4x = 801//774
let TA4y = 41//97
let TA9x = 839//808
let TA9y = 496//559
let TA10x = 1065//1040
let TA10y = 531//602
let TA5x = 588//555
let TA5y = 78// 78
let TA6x = 302//300
let TA6y = 49//53
let TA7x = 338//299
let TA7y = 497//559
let TA8x = 569//532
let TA8y = 535//609
let TA18x = 103
let TA18y = 655
let TA17x = 307
let TA17y = 621
let TA16x = 735
let TA16y = 654
let TA15x = 938
let TA15y = 630
let TA19x = 761
let TA19y = 266
let TA20x = 758
let TA20y = 71
let TA14x = 1458//1474//1466 
let TA14y = 652//655//654
let TA13x = 1676//1666
let TA13y = 632//624
let TATGx = 149
let TATGy = 202
let TA21x = 401
let TA21y = 826
let TA22x = 360
let TA22y = 490
let TB1x = 1677//1658
let TB1y = 157//221
let TB2x = 1212//1189
let TB2y = 93//153
let TB3x = 715//683
let TB3y = 97//155
let TB4x = 1008
let TB4y = 459

async function recorTA32(point) {
    return new Promise(async resolve => {
        switch (point) {
            //TA1
            case 1:
                /* INICIO DE CAMARA 1 */
                //Cuadrante 1
                //TA1
                contextcanvasClen1.drawImage(fullimage, TA1x, TA1y, 118, 299, 0, 0, contextcanvasClen1.canvas.width, contextcanvasClen1.canvas.height)
                await Analiza(canvasClen1, 1)
                logresult(1, statusx)

                //TA2
                contextcanvasGlen1.drawImage(fullimage, TA2x, TA2y, 108, 331, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                await Analiza(canvasGlen1, 2)
                logresult(2, statusx)

                //TA11
                contextcanvasGlen1.drawImage(fullimage, TA11x, TA11y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                await Analiza(canvasGlen1, 11)
                logresult(11, statusx)

                //TA12
                contextcanvasMlen1.drawImage(fullimage, TA12x, TA12y, 108, 313, 0, 0, contextcanvasMlen1.canvas.width, contextcanvasMlen1.canvas.height)
                await Analiza(canvasMlen1, 12)
                logresult(12, statusx)


                //TB1
                contextcanvasTB.drawImage(fullimage, TB1x, TB1y, 34, 52, 0, 0, contextcanvasTB.canvas.width, contextcanvasTB.canvas.height)
                await Analiza(canvasTB, 23)
                logresult(23, statusx)

                await Evaluacion(1)

                contextcanvasnuevo.drawImage(fullimage, 1243, 35, 519, 934, 0, 0, contextcanvasnuevo.canvas.width, contextcanvasnuevo.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspaste.translate(934, 519) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspaste.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspaste.drawImage(canvasnuevo, 0, 0, 1868, 1038, -400, -519, 1868, 1038) // Canvas donde se coloca la imagen ya rotada 
                //Imagen rotada C1
                contextcanvasCamara.drawImage(canvaspaste, 415, 400, 934, 515, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                await pause()

                //Cuadrante 2 , imagen 1
                contextcanvasClen1.drawImage(fullimage, TA3x, TA3y, 118, 299, 0, 0, contextcanvasClen1.canvas.width, contextcanvasClen1.canvas.height)
                await Analiza(canvasClen1, 3)
                logresult(3, statusx)


                //TA4
                contextcanvasGlen1.drawImage(fullimage, 949, 74, 113, 312, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                await Analiza(canvasGlen1, 4)
                logresult(4, statusx)


                //TA9
                contextcanvasGlen1.drawImage(fullimage, TA9x, TA9y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                await Analiza(canvasGlen1, 9)
                logresult(9, statusx)


                //TA10
                contextcanvasGlen1.drawImage(fullimage, TA10x, TA10y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                await Analiza(canvasGlen1, 10)
                logresult(10, statusx)


                //TB2
                contextcanvasTB.drawImage(fullimage, TB2x, TB2y, 34, 52, 0, 0, contextcanvasTB.canvas.width, contextcanvasTB.canvas.height)
                await Analiza(canvasTB, 24)
                logresult(24, statusx)


                await Evaluacion(2)
                // Puntos de rotacion 
                contextcanvasnuevo.drawImage(fullimage, 705, 29, 519, 934, 0, 0, contextcanvasnuevo.canvas.width, contextcanvasnuevo.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspasteC2.translate(934, 519) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspasteC2.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspasteC2.drawImage(canvasnuevo, 0, 0, 1868, 1038, -400, -519, 1868, 1038) // Canvas donde se coloca la imagen ya rotada
                //Imagen rotada C2
                contextcanvasCamara.drawImage(canvaspasteC2, 415, 400, 934, 515, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag

                resolve('resolved')
                await snapshot(point)
                await pause()
                break
            //***INICIO CUADRANTE 2** */
            case 2:

                contextcanvasClen2.drawImage(fullimage, TA18x, TA18y, 149, 378, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                await Analiza(canvasClen2, 18)
                logresult(18, statusx)

                contextcanvasClen2.drawImage(fullimage, TA17x, TA17y, 149, 378, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                await Analiza(canvasClen2, 17)
                logresult(17, statusx)

                contextcanvasTGlen2.drawImage(fullimage, TATGx, TATGy, 298, 99, 0, 0, contextcanvasTGlen2.canvas.width, contextcanvasTGlen2.canvas.height)
                await Analiza(canvasTGlen2, 27)
                logresult(27, statusx)
                await Evaluacion(4)
                contextcanvasnuevo4.drawImage(fullimage, 5, 1, 605, 1069, 0, 0, contextcanvasnuevo4.canvas.width, contextcanvasnuevo4.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspaste4.translate(1069, 605) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspaste4.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspaste4.drawImage(canvasnuevo4, 0, 0, 1677, 2138, -1069, -605, 1677, 2138) // Canvas donde se coloca la imagen ya rotada 
                // Imagen rotada
                contextcanvasCamara.drawImage(canvaspaste4, 464, 1069, 1067, 605, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                await pause()

                //TA16
                contextcanvasClen2.drawImage(fullimage, TA16x, TA16y, 159, 379, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                await Analiza(canvasClen2, 16)
                logresult(16, statusx)


                //TA15
                contextcanvasClen2.drawImage(fullimage, TA15x, TA15y, 163, 379, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                await Analiza(canvasClen2, 15)
                logresult(15, statusx)

                //TA19 418,149
                contextcanvasGlen2.drawImage(fullimage, TA19x, TA19y, 418, 149, 0, 0, contextcanvasGlen2.canvas.width, contextcanvasGlen2.canvas.height)

                await Analiza(canvasGlen2, 19)
                logresult(19, statusx)


                //TA20 418,149
                contextcanvasGlen2.drawImage(fullimage, TA20x, TA20y, 418, 149, 0, 0, contextcanvasGlen2.canvas.width, contextcanvasGlen2.canvas.height)
                await Analiza(canvasGlen2, 20)
                logresult(20, statusx)


                //TB4
                contextcanvasTB4.drawImage(fullimage, TB4x, TB4y, 66, 52, 0, 0, contextcanvasTB4.canvas.width, contextcanvasTB4.canvas.height)
                await Analiza(canvasTB4, 26)
                logresult(26, statusx)

                await Evaluacion(5)
                /* contextcanvasnuevo4.drawImage(fullimage, 695, 3, 605, 1069, 0, 0, contextcanvasnuevo4.canvas.width, contextcanvasnuevo4.canvas.height) // Canvas donde con imagen vertical original 
                 contextcanvaspasteC5.translate(1069, 605) //Punto donde va comenzar a realizar la translacion de la imagen
                 contextcanvaspasteC5.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                 contextcanvaspasteC5.drawImage(canvasnuevo4, 0, 0, 1677, 2138, -1069, -605, 1677, 2138) // Canvas donde se coloca la imagen ya rotada 
                 //Imagen rotada
                 contextcanvasCamara.drawImage(canvaspasteC5, 464, 1069, 1067, 605, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                 await pause()*/

                // await Evaluacion(6)
                contextcanvasnuevo4.drawImage(fullimage, 1315, 7, 605, 1069, 0, 0, contextcanvasnuevo4.canvas.width, contextcanvasnuevo4.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspasteC6.translate(1069, 605) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspasteC6.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspasteC6.drawImage(canvasnuevo4, 0, 0, 1677, 2138, -1069, -605, 1677, 2138) // Canvas donde se coloca la imagen ya rotada 
                //Imagen rotada 
                contextcanvasCamara.drawImage(canvaspasteC6, 464, 1069, 1067, 605, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag

                resolve('resolved')
                await snapshot(point)
                await pause()
                break
            /** INICIO CUADRANTE 3 */
            case 3:
                contextcanvasflalen3.drawImage(fullimage, TA21x, TA21y, 561, 77, 0, 0, contextcanvasflalen3.canvas.width, contextcanvasflalen3.canvas.height)
                await Analiza(canvasflalen3, 21)
                logresult(26, statusx)
                if (pn === 'LFTM1135558-64-A') {
                    arrylogresult(21, statusx)
                }
                contextcanvasgolen3.drawImage(fullimage, TA22x, TA22y, 675, 326, 0, 0, contextcanvasgolen3.canvas.width, contextcanvasgolen3.canvas.height)
                await Analiza(canvasgolen3, 22)
                logresult(22, statusx)


                await Evaluacion(7)
                contextcanvasnuevo7.drawImage(fullimage, 297, 8, 986, 1066, 0, 0, contextcanvasnuevo7.canvas.width, contextcanvasnuevo7.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspaste7.translate(1066, 986) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspaste7.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspaste7.drawImage(canvasnuevo7, 0, 0, 1974, 2134, -1067, -987, 1974, 2134) // Canvas donde se coloca la imagen ya rotada 
                //Imagen rotada
                contextcanvasCamara.drawImage(fullimage, 0, 0, 1920, 1080, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                resolve('resolved')
                await snapshot(point)
                break
            default:
        }
    })
}//Fin de switch

async function recorTA(point) {
    return new Promise(async resolve => {
        switch (point) {
            //TA1

            case 1:
                /**** INICIO DE CAMARA 1 */
                //Cuadrante 1
                //TA1
                contextcanvasClen1.drawImage(fullimage, TA1x, TA1y, 118, 299, 0, 0, contextcanvasClen1.canvas.width, contextcanvasClen1.canvas.height)
                //await rgbauto(canvasClen1) 
                await Analiza(canvasClen1, 1)
                snapshotrecorte(1, statusx)
                logresult(1, statusx)
                if (pn === 'LFTM1135558-64-A') {
                    arrylogresult(1, statusx)
                }

                //TA2
                contextcanvasGlen1.drawImage(fullimage, TA2x, TA2y, 108, 331, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                //await rgbauto(canvasGlen1)
                await Analiza(canvasGlen1, 2)
                snapshotrecorte(2, statusx)
                logresult(2, statusx)
                if (pn === 'LFTM1135558-64-A') {
                    arrylogresult(2, statusx)
                }

                //TA11
                contextcanvasGlen1.drawImage(fullimage, TA11x, TA11y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                // await rgbauto(canvasGlen1)

                await Analiza(canvasGlen1, 11)
                snapshotrecorte(11, statusx)
                logresult(11, statusx)
                if (pn === 'LFTM1135558-64-A') {
                    arrylogresult(11, statusx)
                }

                //TA12
                contextcanvasMlen1.drawImage(fullimage, TA12x, TA12y, 108, 313, 0, 0, contextcanvasMlen1.canvas.width, contextcanvasMlen1.canvas.height)
                //await rgbauto(canvasMlen1)
                await Analiza(canvasMlen1, 12)
                snapshotrecorte(12, statusx)
                logresult(12, statusx)
                if (pn === 'LFTM1135558-64-A') {
                    arrylogresult(12, statusx)
                }

                //TB1
                contextcanvasTB.drawImage(fullimage, TB1x, TB1y, 34, 52, 0, 0, contextcanvasTB.canvas.width, contextcanvasTB.canvas.height)
                //await rgbauto(canvasTB)
                await Analiza(canvasTB, 23)
                snapshotrecorte(23, statusx)
                logresult(23, statusx)
                if (pn === 'LFTM1135558-64-A') {
                    arrylogresult(23, statusx)
                }
                if (pn === 'LFTM1135558-64-A') {
                    await evaluaciondos(1)
                }

                //TP1
                if (pn == 'LFTM1135558-16-B' || pn == 'LFTM1135558-55-A') {
                    await recortaTP1()
                }


                await Evaluacion(1)



                contextcanvasnuevo.drawImage(fullimage, 1243, 35, 519, 934, 0, 0, contextcanvasnuevo.canvas.width, contextcanvasnuevo.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspaste.translate(934, 519) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspaste.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspaste.drawImage(canvasnuevo, 0, 0, 1868, 1038, -400, -519, 1868, 1038) // Canvas donde se coloca la imagen ya rotada 
                //Imagen rotada C1
                contextcanvasCamara.drawImage(canvaspaste, 415, 400, 934, 515, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                await pause()

                //Cuadrante 2 , imagen 1
                contextcanvasClen1.drawImage(fullimage, TA3x, TA3y, 118, 299, 0, 0, contextcanvasClen1.canvas.width, contextcanvasClen1.canvas.height)
                //await rgbauto(canvasClen1)
                await Analiza(canvasClen1, 3)
                snapshotrecorte(3, statusx)
                logresult(3, statusx)


                //TA4
                contextcanvasGlen1.drawImage(fullimage, TA4x, TA4y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                //await rgbauto(canvasGlen1)
                await Analiza(canvasGlen1, 4)
                snapshotrecorte(4, statusx)
                logresult(4, statusx)


                //TA9
                contextcanvasGlen1.drawImage(fullimage, TA9x, TA9y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                //await rgbauto(canvasGlen1)
                await Analiza(canvasGlen1, 9)
                snapshotrecorte(9, statusx)
                logresult(9, statusx)


                //TA10
                contextcanvasGlen1.drawImage(fullimage, TA10x, TA10y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                //await rgbauto(canvasGlen1)
                await Analiza(canvasGlen1, 10)
                snapshotrecorte(10, statusx)
                logresult(10, statusx)


                //TB2
                contextcanvasTB.drawImage(fullimage, TB2x, TB2y, 34, 52, 0, 0, contextcanvasTB.canvas.width, contextcanvasTB.canvas.height)
                //await rgbauto(canvasTB)
                await Analiza(canvasTB, 24)
                snapshotrecorte(24, statusx)
                logresult(24, statusx)


                if (pn == 'LFTM1135558-16-B' || pn == 'LFTM1135558-55-A') {
                    await recortaTP2()
                }

                await Evaluacion(2)
                // Puntos de rotacion 
                contextcanvasnuevo.drawImage(fullimage, 705, 29, 519, 934, 0, 0, contextcanvasnuevo.canvas.width, contextcanvasnuevo.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspasteC2.translate(934, 519) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspasteC2.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspasteC2.drawImage(canvasnuevo, 0, 0, 1868, 1038, -400, -519, 1868, 1038) // Canvas donde se coloca la imagen ya rotada
                //Imagen rotada C2
                contextcanvasCamara.drawImage(canvaspasteC2, 415, 400, 934, 515, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                setTimeout(function fire() { resolve('resolved'); }, 5000);
                await pause()

                //TA5
                contextcanvasClen1.drawImage(fullimage, TA5x, TA5y, 118, 299, 0, 0, contextcanvasClen1.canvas.width, contextcanvasClen1.canvas.height)
                // await rgbauto(canvasClen1)
                await Analiza(canvasClen1, 5)
                snapshotrecorte(5, statusx)
                logresult(5, statusx)

                contextcanvasTA6len1.drawImage(fullimage, TA6x, TA6y, 111, 330, 0, 0, contextcanvasTA6len1.canvas.width, contextcanvasTA6len1.canvas.height) //115 , 322
                // await rgbauto(canvasTA6len1)
                // canbugshow(6)
                await Analiza(canvasTA6len1, 6)
                snapshotrecorte(6, statusx)
                logresult(6, statusx)

                contextcanvasGlen1.drawImage(fullimage, TA7x, TA7y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                //await rgbauto(canvasGlen1)
                await Analiza(canvasGlen1, 7)
                snapshotrecorte(7, statusx)
                logresult(7, statusx)

                contextcanvasGlen1.drawImage(fullimage, TA8x, TA8y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                //await rgbauto(canvasGlen1)
                await Analiza(canvasGlen1, 8)
                snapshotrecorte(8, statusx)
                logresult(8, statusx)

                //TB3
                contextcanvasTB.drawImage(fullimage, TB3x, TB3y, 34, 52, 0, 0, contextcanvasTB.canvas.width, contextcanvasTB.canvas.height)
                // await rgbauto(canvasTB)
                await Analiza(canvasTB, 25)
                snapshotrecorte(25, statusx)
                logresult(25, statusx)


                if (pn == 'LFTM1135558-16-B' || pn == 'LFTM1135558-55-A') {
                    await recortaTP3()
                }

                await Evaluacion(3)
                // Puntos de rotacion 
                contextcanvasnuevo.drawImage(fullimage, 162, 48, 519, 934, 0, 0, contextcanvasnuevo.canvas.width, contextcanvasnuevo.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspasteC3.translate(934, 519) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspasteC3.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspasteC3.drawImage(canvasnuevo, 0, 0, 1868, 1038, -400, -519, 1868, 1038) // Canvas donde se coloca la imagen ya rotada 
                //Imagen rotada 
                contextcanvasCamara.drawImage(canvaspasteC3, 415, 400, 934, 515, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                resolve('resolved')
                await snapshot(point)
                await pause()
                break
            //***INICIO CUADRANTE 2** */
            case 2:

                contextcanvasClen2.drawImage(fullimage, TA18x, TA18y, 149, 378, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                await rgbauto(canvasClen2)
                // canbugshow(18)
                await Analiza(canvasClen2, 18)
                snapshotrecorte(18, statusx)
                logresult(18, statusx)
                if (pn === 'LFTM1135558-64-A') {
                    arrylogresult(11, statusx)
                }

                contextcanvasClen2.drawImage(fullimage, TA17x, TA17y, 149, 378, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                //await rgbauto(canvasClen2)
                await Analiza(canvasClen2, 17)
                snapshotrecorte(17, statusx)
                logresult(17, statusx)
                if (pn === 'LFTM1135558-64-A') {
                    arrylogresult(12, statusx)
                }

                contextcanvasTGlen2.drawImage(fullimage, TATGx, TATGy, 298, 99, 0, 0, contextcanvasTGlen2.canvas.width, contextcanvasTGlen2.canvas.height)
                await Analiza(canvasTGlen2, 27)
                snapshotrecorte(27, statusx)
                logresult(27, statusx)
                if (pn === 'LFTM1135558-64-A') {
                    arrylogresult(13, statusx)
                }
                if (pn === 'LFTM1135558-64-A') {
                    await evaluaciondos(3)
                }

                await Evaluacion(4)
                contextcanvasnuevo4.drawImage(fullimage, 5, 1, 605, 1069, 0, 0, contextcanvasnuevo4.canvas.width, contextcanvasnuevo4.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspaste4.translate(1069, 605) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspaste4.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspaste4.drawImage(canvasnuevo4, 0, 0, 1677, 2138, -1069, -605, 1677, 2138) // Canvas donde se coloca la imagen ya rotada 
                // Imagen rotada
                contextcanvasCamara.drawImage(canvaspaste4, 464, 1069, 1067, 605, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                await pause()

                //TA16
                contextcanvasClen2.drawImage(fullimage, TA16x, TA16y, 150, 381, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                //await rgbauto(canvasClen2)
                await Analiza(canvasClen2, 16)
                snapshotrecorte(16, statusx)
                logresult(16, statusx)


                //TA15
                contextcanvasClen2.drawImage(fullimage, TA15x, TA15y, 154, 380, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                //await rgbauto(canvasClen2)
                await Analiza(canvasClen2, 15)
                snapshotrecorte(15, statusx)
                logresult(15, statusx)

                //TA19 418,149
                contextcanvasGlen2.drawImage(fullimage, TA19x, TA19y, 418, 149, 0, 0, contextcanvasGlen2.canvas.width, contextcanvasGlen2.canvas.height)
                //await rgbauto(canvasGlen2)
                await Analiza(canvasGlen2, 19)
                snapshotrecorte(19, statusx)
                logresult(19, statusx)


                //TA20 418,149
                contextcanvasGlen2.drawImage(fullimage, TA20x, TA20y, 418, 149, 0, 0, contextcanvasGlen2.canvas.width, contextcanvasGlen2.canvas.height)
                await Analiza(canvasGlen2, 20)
                snapshotrecorte(20, statusx)
                logresult(20, statusx)


                //TB4
                contextcanvasTB4.drawImage(fullimage, TB4x, TB4y, 66, 52, 0, 0, contextcanvasTB4.canvas.width, contextcanvasTB4.canvas.height)
                // await rgbauto(canvasTB4)
                await Analiza(canvasTB4, 26)
                snapshotrecorte(26, statusx)
                logresult(26, statusx)

                await Evaluacion(5)
                contextcanvasnuevo4.drawImage(fullimage, 695, 3, 605, 1069, 0, 0, contextcanvasnuevo4.canvas.width, contextcanvasnuevo4.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspasteC5.translate(1069, 605) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspasteC5.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspasteC5.drawImage(canvasnuevo4, 0, 0, 1677, 2138, -1069, -605, 1677, 2138) // Canvas donde se coloca la imagen ya rotada 
                //Imagen rotada
                contextcanvasCamara.drawImage(canvaspasteC5, 464, 1069, 1067, 605, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                await pause()

                //TA14
                contextcanvasClen2.drawImage(fullimage, TA14x, TA14y, 150, 381, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                // await rgbauto(canvasClen2)
                await Analiza(canvasGlen2, 14)
                snapshotrecorte(14, statusx)
                logresult(14, statusx)

                //TA13
                contextcanvasClen2.drawImage(fullimage, TA13x, TA13y, 151, 380, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                //await rgbauto(canvasClen2)
                // canbugshow(13)
                await Analiza(canvasClen2, 13)
                snapshotrecorte(13, statusx)
                logresult(13, statusx)

                await Evaluacion(6)
                contextcanvasnuevo4.drawImage(fullimage, 1315, 7, 605, 1069, 0, 0, contextcanvasnuevo4.canvas.width, contextcanvasnuevo4.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspasteC6.translate(1069, 605) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspasteC6.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspasteC6.drawImage(canvasnuevo4, 0, 0, 1677, 2138, -1069, -605, 1677, 2138) // Canvas donde se coloca la imagen ya rotada 
                //Imagen rotada 
                contextcanvasCamara.drawImage(canvaspasteC6, 464, 1069, 1067, 605, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                resolve('resolved')
                await snapshot(point)
                await pause()
                break
            /** INICIO CUADRANTE 3 */
            case 3:
                contextcanvasflalen3.drawImage(fullimage, TA21x, TA21y, 561, 77, 0, 0, contextcanvasflalen3.canvas.width, contextcanvasflalen3.canvas.height)
                await Analiza(canvasflalen3, 21)
                snapshotrecorte(21, statusx)
                logresult(21, statusx)
                if (pn === 'LFTM1135558-64-A') {
                    arrylogresult(21, statusx)
                }
                contextcanvasgolen3.drawImage(fullimage, TA22x, TA22y, 675, 326, 0, 0, contextcanvasgolen3.canvas.width, contextcanvasgolen3.canvas.height)
                await Analiza(canvasgolen3, 22)
                snapshotrecorte(22, statusx)
                logresult(22, statusx)


                await Evaluacion(7)
                contextcanvasnuevo7.drawImage(fullimage, 297, 8, 986, 1066, 0, 0, contextcanvasnuevo7.canvas.width, contextcanvasnuevo7.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspaste7.translate(1066, 986) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspaste7.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspaste7.drawImage(canvasnuevo7, 0, 0, 1974, 2134, -1067, -987, 1974, 2134) // Canvas donde se coloca la imagen ya rotada 
                //Imagen rotada
                contextcanvasCamara.drawImage(fullimage, 0, 0, 1920, 1080, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                resolve('resolved')
                await snapshot(point)
                break
            default:
        }
    })
}//Fin de switch

async function pause() {
    return new Promise(async resolve => {
        setTimeout(function pausea() { resolve('resolved') }, 3000)
    });
}

function Analiza(canvasx, point) {
    return new Promise(async resolve => {

        let contextcanvasx = canvasx.getContext('2d')
        let cdata = contextcanvasx.getImageData(0, 0, canvasx.width, canvasx.height);

        let malo = 0, bueno = 0
        //Valores del rojo
        let rmin
        let rmax
        //Valores del verde
        let gmin
        let gmax
        //Valores del azul
        let bmin
        let bmax
        //Calibracion del color del Tim por TA     
        // Cuadrante 1  rmin = 74, rmax = 205, gmin = 83, gmax = 240, bmin = 90, bmax = 225,
        //rmin = 255, rmax = 255, gmin = 255, gmax = 255, bmin =255, bmax = 255,
        if (point == 1) {
            (rmin = 124), (rmax = 206), (gmin = 100), (gmax = 175), (bmin = 66), (bmax = 144), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona : 2000); console.log("soy criterio1", criterio)
        }  // if (point == 1) { rmin = 105, rmax = 170, gmin = 90, gmax = 140, bmin = 62, bmax = 115, criterio = .950, latapona = 3000 }
        if (point == 2) {
            (rmin = 125), (rmax = 198), (gmin = 102), (gmax = 174), (bmin = 68), (bmax = 140), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 1000);
        }  //TA2   if (point == 2) { rmin = 117, rmax = 184, gmin = 95, gmax = 160, bmin = 70, bmax = 130, criterio = .950, latapona = 3000 } 
        if (point == 11) {
            (rmin = 129), (rmax = 200), (gmin = 98), (gmax = 171), (bmin = 67), (bmax = 141), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 1200)
        }  // TA11 if (point == 11) { rmin = 125, rmax = 193, gmin = 105, gmax = 165, bmin = 73, bmax = 135, criterio = .950, latapona = 1000 
        if (point == 12) {
            (rmin = 125), (rmax = 188), (gmin = 101), (gmax = 162), (bmin = 67), (bmax = 129), (criterio = .910), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 3000)
        } //  
        if (point == 23) {
            (rmin = 95), (rmax = 183), (gmin = 72), (gmax = 156), (bmin = 44), (bmax = 129), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 0)
        } //TB1 1000
        if ((point == 28) && (pn == 'LFTM1135558-16-B' || pn == 'LFTM1135558-55-A')) {
            (rmin = 138), (rmax = 211), (gmin = 111), (gmax = 185), (bmin = 81), (bmax = 152), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 10000)
        } //TP1

        // Cuadrante 2
        if (point == 3) {
            (rmin = 127), (rmax = 219), (gmin = 102), (gmax = 195), (bmin = 72), (bmax = 161), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 3000)
        } // TA3 Actualizado  * 3000
        if (point == 4) {
            (rmin = 117), (rmax = 181), (gmin = 93), (gmax = 152), (bmin = 60), (bmax = 122), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 2000)
        }  // TA4 Actualizado *
        if (point == 9) {
            (rmin = 142), (rmax = 205), (gmin = 113), (gmax = 178), (bmin = 83), (bmax = 148), (criterio = .930), (latapona = localStorage.getItem("resultadosecuencia" + point) //if (point == 9) { (rmin = 126), (rmax = 223), (gmin = 106), (gmax = 192), (bmin = 73), (bmax = 161), (criterio = .950), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 8000)
        }  // TA9 Actuaalizado * 
        if (point == 10) {
            (rmin = 128), (rmax = 191), (gmin = 105), (gmax = 165), (bmin = 75), (bmax = 132), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 2000)
        } // TA10 Actualizado * //tapona para regular 13000
        if (point == 24) {
            (rmin = 103), (rmax = 213), (gmin = 84), (gmax = 185), (bmin = 59), (bmax = 157), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 0)
        }  //TB2 1000
        if ((point == 29) && (pn == 'LFTM1135558-16-B' || pn == 'LFTM1135558-55-A')) {
            (rmin = 140), (rmax = 237), (gmin = 114), (gmax = 206), (bmin = 81), (bmax = 177), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 10001)
        }//TP2 

        // Cuadrante 3 
        if (point == 5) {
            (rmin = 120), (rmax = 206), (gmin = 98), (gmax = 182), (bmin = 68), (bmax = 147), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 4000)
        }  // TA5 Actualizado * No tapona  if (point == 5) { rmin = 100, rmax = 190, gmin = 80, gmax = 162, bmin = 50, bmax = 128, criterio = .950, latapona = 450}
        if (point == 6) {
            (rmin = 121), (rmax = 179), (gmin = 96), (gmax = 150), (bmin = 66), (bmax = 120), (criterio = .930), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 6500);
        }  // TA6 Actualizado  *
        if (point == 7) {
            (rmin = 119), (rmax = 218), (gmin = 97), (gmax = 194), (bmin = 60), (bmax = 160), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 3000)
        }  // TA7 Actualizado * Canvande 3500
        if (point == 8) {
            (rmin = 110), (rmax = 190), (gmin = 90), (gmax = 157), (bmin = 60), (bmax = 130), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 1000)
        } // TA8 Actualizado  * 2000 if (point == 8) { rmin = 120, rmax = 200, gmin = 96, gmax = 172, bmin = 68, bmax = 138, criterio = .950, latapona = 2000 }
        if (point == 25) {
            (rmin = 129), (rmax = 182), (gmin = 109), (gmax = 155), (bmin = 76), (bmax = 126), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 100)
        } //TB3
        if ((point == 30) && (pn == 'LFTM1135558-16-B' || pn == 'LFTM1135558-55-A')) {
            (rmin = 109), (rmax = 187), (gmin = 84), (gmax = 157), (bmin = 54), (bmax = 129), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 10002)
        }//TP3

        // Cuadrante 4n
        if (point == 17) {
            (rmin = 129), (rmax = 186), (gmin = 143), (gmax = 212), (bmin = 117), (bmax = 177), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 3500)
        } // TA17 Actualizado  30000 if (point == 17) { rmin = 125, rmax = 188, gmin = 135, gmax = 212, bmin = 112, bmax = 185, criterio = .950, latapona = 1000}
        if (point == 18) {
            (rmin = 134), (rmax = 196), (gmin = 144), (gmax = 223), (bmin = 117), (bmax = 192), (criterio = .900), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 7000)
        } // TA18 Actualizado
        if (point == 27) {
            (rmin = 108), (rmax = 171), (gmin = 116), (gmax = 184), (bmin = 107), (bmax = 158), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 6000)
        } // TA27 
        // Cuadrante 5
        if (point == 15) {
            (rmin = 129), (rmax = 227), (gmin = 134), (gmax = 243), (bmin = 114), (bmax = 214), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 3000)
        } // TA15 Actualizado  if (point == 15) { rmin = 132, rmax = 212, gmin = 145, gmax = 252, bmin = 115, bmax = 225, criterio = .950, latapona = 2500 }
        if (point == 16) {
            (rmin = 104), (rmax = 223), (gmin = 108), (gmax = 247), (bmin = 83), (bmax = 211), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 1000)
        } // TA16 Actualizado
        if (point == 19) {
            (rmin = 110), (rmax = 178), (gmin = 119), (gmax = 197), (bmin = 92), (bmax = 169), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 1500)
        } // TA19 Actualizado
        if (point == 20) {
            (rmin = 107), (rmax = 197), (gmin = 119), (gmax = 218), (bmin = 97), (bmax = 187), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 1500)
        } // TA20 Actualizado 1000
        if (point == 26) {
            (rmin = 97), (rmax = 240), (gmin = 98), (gmax = 255), (bmin = 73), (bmax = 237), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 0)
        } //TB4
        // Cuadrante 6
        if (point == 13) {
            (rmin = 120), (rmax = 189), (gmin = 130), (gmax = 207), (bmin = 106), (bmax = 183), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 7000)
        } // TA13  Actualizado *
        if (point == 14) {
            (rmin = 125), (rmax = 184), (gmin = 135), (gmax = 198), (bmin = 111), (bmax = 172), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 2000)
        }// TA14 Actualizado * if (point == 14) { rmin = 100, rmax = 226, gmin = 120, gmax = 260, bmin = 9, bmax = 235, criterio = .950, latapona =  3000}
        // Cuadrante 7
        if (point == 21) {
            (rmin = 101), (rmax = 249), (gmin = 102), (gmax = 240), (bmin = 64), (bmax = 206), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 3000)
        } // TA21 Rectangulo ch //30000 
        if (point == 22) {
            (rmin = 108), (rmax = 206), (gmin = 96), (gmax = 222), (bmin = 64), (bmax = 178), (criterio = .940), (latapona = localStorage.getItem("resultadosecuencia" + point)
                ? JSON.parse(localStorage.getItem("resultadosecuencia" + point)).latapona
                : 200)
        } // TA22 Actualizado 46000 rmin = 74, rmax = 237, gmin = 68, gmax = 255, bmin = 44, bmax = 215, criterio = 1, latapona = 0
        //if (point == 30) { rmin = 74, rmax = 237, gmin = 68, gmax = 255, bmin = 44, bmax = 215, criterio = 1, latapona = 40000} // TA22 Actualizado

        for (let i = 0; i < cdata.data.length; i += 4) { //cdata.data.length
            // Matriz para valores 
            R = cdata.data[i + 0]
            G = cdata.data[i + 1]
            B = cdata.data[i + 2]
            A = cdata.data[i + 3]
            //console.log(`Pixn: ${ i / 4 }:-->`, R,G,B,A)

            if (((R > rmin) && (R < rmax)) && ((G > gmin) && (G < gmax)) && ((B > bmin) && (B < bmax))) {// condicion para verificar cada pixel
                bueno++
            } else {
                malo++  // Matriz que pinta de color rojo sino se cumple la condicion anterior 
                cdata.data[i + 0] = 255
                cdata.data[i + 1] = 0
                cdata.data[i + 2] = 0
                cdata.data[i + 3] = 255
            }//End Else
        }// End For

        contextcanvasx.putImageData(cdata, 0, 0)// Dibuja los pixeles rojos encontrados 
        await limpiaR(point, canvasx) // Se manda llamar limpiar ruido
        let pixitotal = (cdata.data.length) / 4 // cuenta todos los pixeles del canvas bajo analisis 


        localStorage.setItem(
            "resultadosecuencia" + point,
            JSON.stringify({
                bueno: bueno,
                malo: malo,
                ruido: ruido,
                latapona: latapona,
                sugerencia: malo + ruido,
            })
        );
        if (point == 1) { //Imprime por cada punto el conteo de pixeles
            console.log("Buenos: " + bueno)
            console.log("******")
            console.log("Malo: " + malo)
            console.log("Ruido:" + ruido)
            console.log("Finetuning:" + latapona)
            console.log("******")
            console.log("Pix Total:" + pixitotal)
        }
        // console.log("Pix Total:"+pixitotal)

        let pixibuenos = bueno + ruido + latapona
        let porcentajebueno = pixibuenos / pixitotal
        /*let percent = pixitotal - ruido
        console.log("cobertura: " + percent + " pixeles restantes de ruido ")
        cobertura = pixitotal * percent
        console.log("cobertura en porcentaje :" + cobertura / 100 + "(%)")*/


        porcentajefinal = porcentajebueno.toFixed(4);


        if (porcentajefinal >= criterio) {
            porcentajefinal = 1

        } else {
            porcentajefinal
            console.log("porcentaje final", porcentajefinal)
        }//valor final de pase al 99.6% || porcentajefinal >= .920
        //console.log("porcentaje final por punto"+porcentajefinal)
        //porcentajeArray[point]= porcentajefinal
        //console.log("Pix Total:"+pixitotal)
        //console.log(pixibuenos)

        if (porcentajebueno > criterio) {
            statusx = "1"
            IAdesition[point] = " On hold "
        }

        else {
            statusx = "0"

            /*if ( point == 5 || point == 6  ||  point == 22) { // se cumple condicion cuando el TA falle y llama a inspectora 
                await mlinspection(point)
            }*/
        }
        // console.log("soy criterio por punto "+criterio)
        console.log("TA-" + point + ":" + porcentajefinal * 100 + "(%) ")//+" Status: "+status
        porcentajeArray[point] = porcentajefinal
        mtxw[point] = porcentajefinal

        resolve('resolved')
    })
}


function cuentarojos(canvasx, x, y, w, h) { //cuenta puntos rojos de la coordenada con el tamaño especificado

    let contextcanvasx = canvasx.getContext('2d')
    let cdata = contextcanvasx.getImageData(x, y, w, h);
    let rojos = 0
    let otros = 0

    contextcanvasx.strokeStyle = "#3333ff"
    contextcanvasx.lineWidth = 1
    contextcanvasx.strokeRect(x, y, w, h)

    for (let i = 0; i < cdata.data.length; i += 4) { //cdata.data.length
        // Matriz para valores 
        R = cdata.data[i + 0]
        if (R == 255) { rojos++ }
        else { otros++ }
    }// end for
    console.log("Red :" + rojos)
    console.log("Others :" + otros)
}


function limpiaR(p, canvasx) { //Funcion que se utiliza para dibujar un rectangulo azul en el canvas del TA seleccionado y pinta azules parte de los pixeles para convertirlos a pixeles buenos
    return new Promise(async resolve => {
        let contextcanvasx = canvasx.getContext('2d')

        let azul = 0
        let otros = 0
        let x = 0
        let y = 0
        let w = 0
        let h = 0

        //Cuadrante 1 
        if (p == 1) { x = 95, y = 0, w = 200, h = 100 } //TA1  Coordenadas de rectangulos donde pinta azules 
        if (p == 2) { x = 385, y = 28, w = 153, h = 143 } //TA2
        if (p == 11) { x = 36, y = 15, w = 495, h = 157 } //TA11
        if (p == 12) { x = 15, y = 6, w = 500, h = 91 } //TA12
        if (p == 23) { x = 1, y = 25, w = 47, h = 50 } //TB1
        //Cuadrante 2
        if (p == 3) { x = 2, y = 0, w = 143, h = 78 } // TA3
        if (p == 4) { x = 252, y = 12, w = 116, h = 107 } //TA4
        if (p == 9) { x = 7, y = 77, w = 357, h = 40 } //TA9
        if (p == 10) { x = 12, y = 9, w = 345, h = 112 } //TA10
        if (p == 24) { x = 8, y = 9, w = 36, h = 34 } //TB2
        //Cuadrante 3
        if (p == 5) { x = 39, y = 35, w = 439, h = 160 } //TA5
        if (p == 6) { x = 1, y = 1, w = 2, h = 2 } //TA6  { x = 9, y = 1, w = 1264, h = 741 }
        if (p == 7) { x = 12, y = 6, w = 506, h = 89 } //TA7
        if (p == 8) { x = 15, y = 115, w = 507, h = 73 } //TA8 
        if (p == 25) { x = 7, y = 5, w = 63, h = 65 } // TB3
        //Cuadrante4
        if (p == 17) { x = 33, y = 7, w = 417, h = 72 } //TA17
        if (p == 18) { x = 32, y = 6, w = 438, h = 50 } //TA18
        if (p == 27) { x = 32, y = 6, w = 438, h = 50 } //TA27 // 
        //Cuadrante 5
        if (p == 15) { x = 27, y = 9, w = 356, h = 180 } //TA15
        if (p == 16) { x = 34, y = 12, w = 341, h = 197 } // TA16 
        if (p == 19) { x = 17, y = 0, w = 124, h = 382 } //TA19
        if (p == 20) { x = 18, y = 211, w = 122, h = 239 } //TA20
        if (p == 26) { x = 6, y = 5, w = 52, h = 54 } // TB4
        //Cuadrante 6 
        if (p == 13) { x = 98, y = 9, w = 47, h = 363 } //TA13
        if (p == 14) { x = 20, y = 10, w = 460, h = 75 } //TA14
        //Cuadrante 7 
        if (p == 21) { x = 0, y = 6, w = 25, h = 450 } //TA21
        if (p == 22) { x = 91, y = 1, w = 447, h = 75 } //TA22
        if (p == 28) { x = 91, y = 1, w = 447, h = 75 } //TA22
        if (p == 29) { x = 91, y = 1, w = 447, h = 75 } //TA22
        if (p == 30) { x = 91, y = 1, w = 447, h = 75 } //TA22

        let cdata = contextcanvasx.getImageData(x, y, w, h) // linea para pintar 

        for (let i = 0; i < cdata.data.length; i += 4) { // ciclo de matriz /camina la matriz las veces que tiene el ciclo
            // matriz para pintar color azul si encuentra un rojo
            R = cdata.data[i + 0]
            if (R == 255) {
                cdata.data[i + 0] = 0
                cdata.data[i + 1] = 0
                cdata.data[i + 2] = 255
                cdata.data[i + 3] = 255
                B = cdata.data[i + 2]
                if (B == 255) { azul++ }
                //else {otros++}
            }
        }// end for
        //console.log(cdata.data.length)
        //console.log("Blue :"+azul)
        ruido = azul
        contextcanvasx.putImageData(cdata, x, y)// Dibuja los pixeles rojos encontrados
        contextcanvasx.strokeStyle = "#0000FF"
        contextcanvasx.lineWidth = 1
        contextcanvasx.strokeRect(x, y, w, h)
        resolve('resolved')
    })
}
//------------------------------------------- Funciones de evaluacion ----------//
function logresult(pointemp, statusl) {// Guarda valor de cada punto analizado
    logsave[pointemp] = statusl//"TA"+pointemp+","+statusl+"&";
    // console.log("soy statusl "+statusl)
}

async function arrylogresult(puntota, statusta) {
    logsave2[puntota] = statusta
}


function pointstatus(TAx, statusx) {
    if ((TAx == 1) && (statusx == '1')) {
        cuadroVerde1()
    } else if ((TAx == 1) && (statusx == '0')) {
        cuadroRojo1()
    }//Fin de if para TA1

    if ((TAx == 2) && (statusx == '1')) {
        cuadroVerde2()
    } else if ((TAx == 2) && (statusx == '0')) {
        cuadroRojo2()
    }//Fin de if para TA2

    //TA11
    if ((TAx == 11) && (statusx == '1')) {
        cuadroVerde11()
    } else if ((TAx == 11) && (statusx == '0')) {
        cuadroRojo11()
    }//Fin de if para TA11

    //TA12
    if ((TAx == 12) && (statusx == '1')) {
        cuadroVerde12()
    } else if ((TAx == 12) && (statusx == '0')) {
        cuadroRojo12()
    }//Fin de if para TA12

    if ((TAx == 23) && (statusx == '1')) {
        cuadroVerde23()
    } else if ((TAx == 23) && (statusx == '0')) {
        cuadroRojo23()
    }//Fin de if para TB1

    //TP1
    if ((TAx == 28) && (statusx == '1')) {
        cuadroVerde28()
    } else if ((TAx == 28) && (statusx == '0')) {
        cuadroRojo28()
    }

    //CUADRANTE 2
    if ((TAx == 3) && (statusx == '1')) {
        cuadroVerde3()
    } else if ((TAx == 3) && (statusx == '0')) {
        cuadroRojo3()
    }//Fin de if para TB1

    if ((TAx == 4) && (statusx == '1')) {
        if (pn == 'LFTM1135558-03-D') {
            cuadroVerde432();
        } else {
            cuadroVerde4();
        }
    }


    else if ((TAx == 4) && (statusx == '0')) {
        cuadroRojo4()
    }//Fin de if para TB1

    if ((TAx == 9) && (statusx == '1')) {
        cuadroVerde9()
    } else if ((TAx == 9) && (statusx == '0')) {
        cuadroRojo9()
    }//Fin de if para TB1

    if ((TAx == 10) && (statusx == '1')) {
        cuadroVerde10()
    } else if ((TAx == 10) && (statusx == '0')) {
        cuadroRojo10()
    }//Fin de if para TB1

    if ((TAx == 24) && (statusx == '1')) {
        cuadroVerde24()
    } else if ((TAx == 24) && (statusx == '0')) {
        cuadroRojo24()
    }//Fin de if para TB1

    //TP2
    if ((TAx == 29) && (statusx == '1')) {
        cuadroVerde29()
    } else if ((TAx == 29) && (statusx == '0')) {
        cuadroRojo29()
    }
    //Cuadrante 3
    if ((TAx == 5) && (statusx == '1')) {
        cuadroVerde5()
    } else if ((TAx == 5) && (statusx == '0')) {
        cuadroRojo5()
    }

    if ((TAx == 6) && (statusx == '1')) {
        cuadroVerde6()
    } else if ((TAx == 6) && (statusx == '0')) {
        cuadroRojo6()
    }

    if ((TAx == 7) && (statusx == '1')) {
        cuadroVerde7()
    } else if ((TAx == 7) && (statusx == '0')) {
        cuadroRojo7()
    }

    if ((TAx == 8) && (statusx == '1')) {
        cuadroVerde8()
    } else if ((TAx == 8) && (statusx == '0')) {
        cuadroRojo8()
    }

    if ((TAx == 25) && (statusx == '1')) {
        cuadroVerde25()
    } else if ((TAx == 25) && (statusx == '0')) {
        cuadroRojo25()
    }
    //TP3
    if ((TAx == 30) && (statusx == '1')) {
        cuadroVerde30()
    } else if ((TAx == 30) && (statusx == '0')) {
        cuadroRojo30()
    }

    if ((TAx == 18) && (statusx == '1')) {
        cuadroVerde18()
    } else if ((TAx == 18) && (statusx == '0')) {
        cuadroRojo18()
    }

    if ((TAx == 17) && (statusx == '1')) {
        cuadroVerde17()
    } else if ((TAx == 17) && (statusx == '0')) {
        cuadroRojo17()
    }

    if ((TAx == 27) && (statusx == '1')) {
        cuadroVerde27()
    } else if ((TAx == 27) && (statusx == '0')) {
        cuadroRojo27()
    }

    if ((TAx == 16) && (statusx == '1')) {
        cuadroVerde16()
    } else if ((TAx == 16) && (statusx == '0')) {
        cuadroRojo16()
    }

    if ((TAx == 15) && (statusx == '1')) {
        cuadroVerde15()
    } else if ((TAx == 15) && (statusx == '0')) {
        cuadroRojo15()
    }

    if ((TAx == 19) && (statusx == '1')) {
        cuadroVerde19()
    } else if ((TAx == 19) && (statusx == '0')) {
        cuadroRojo19()
    }

    if ((TAx == 20) && (statusx == '1')) {
        cuadroVerde20()
    } else if ((TAx == 20) && (statusx == '0')) {
        cuadroRojo20()
    }

    if ((TAx == 26) && (statusx == '1')) {
        cuadroVerde26()
    } else if ((TAx == 26) && (statusx == '0')) {
        cuadroRojo26()
    }

    if ((TAx == 14) && (statusx == '1')) {
        cuadroVerde14()
    } else if ((TAx == 14) && (statusx == '0')) {
        cuadroRojo14()
    }

    if ((TAx == 13) && (statusx == '1')) {
        cuadroVerde13()
    } else if ((TAx == 13) && (statusx == '0')) {
        cuadroRojo13()
    }

    if ((TAx == 21) && (statusx == '1')) {
        cuadroVerde21()
    } else if ((TAx == 21) && (statusx == '0')) {
        cuadroRojo21()
    }

    if ((TAx == 22) && (statusx == '1')) {
        cuadroVerde22()
    } else if ((TAx == 22) && (statusx == '0')) {
        cuadroRojo22()
    }

}//Fin de if principal

function cuadroVerde1() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA1x, TA1y, 118, 299)

}

function cuadroVerde2() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA2x, TA2y, 108, 331)
}

function cuadroVerde11() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA11x, TA11y, 118, 330)
}

function cuadroVerde12() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA12x, TA12y, 108, 313)
}

function cuadroVerde23() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TB1x, TB1y, 34, 52)
}

function cuadroVerde28() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TP1X, TP1Y, 98, 318)
}
//Cuadrante 2
function cuadroVerde3() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA3x, TA3y, 118, 299)
}

function cuadroVerde432() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(949, 74, 113, 312)
}
function cuadroVerde4() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA4x, TA4y, 118, 330)
}

function cuadroVerde9() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA9x, TA9y, 118, 330)
}

function cuadroVerde10() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA10x, TA10y, 118, 330)
}

function cuadroVerde24() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TB2x, TB2y, 34, 52)
}
function cuadroVerde29() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TP2X, TP2Y, 100, 325)
}

//Cuadrante 3
function cuadroVerde5() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA5x, TA5y, 118, 299)
}
function cuadroVerde6() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA6x, TA6y, 115, 322)
}
function cuadroVerde7() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA7x, TA7y, 118, 330)
}
function cuadroVerde8() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA8x, TA8y, 118, 330)
}
function cuadroVerde25() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TB3x, TB3y, 34, 52)
}
function cuadroVerde30() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TP3X, TP3Y, 102, 317)
}
//Cuadrante 4 
function cuadroVerde18() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA18x, TA18y, 149, 378)
}

function cuadroVerde17() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA17x, TA17y, 149, 378)
}

function cuadroVerde27() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TATGx, TATGy, 298, 99)
}

//Cuarante 5
function cuadroVerde16() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA16x, TA16y, 149, 378)
}
function cuadroVerde15() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA15x, TA15y, 149, 378)
}
function cuadroVerde19() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA19x, TA19y, 418, 149)
}
function cuadroVerde20() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA20x, TA20y, 418, 149)
}
function cuadroVerde26() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TB4x, TB4y, 66, 52)
}
//Cuadrante 6
function cuadroVerde14() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA14x, TA14y, 150, 381)
}
function cuadroVerde13() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA13x, TA13y, 149, 378)
}
//Cuadrante 7
function cuadroVerde21() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA21x, TA21y, 571, 77)
}
function cuadroVerde22() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA22x, TA22y, 675, 326)
}


//Cuadrante 1
function cuadroRojo1() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA1x, TA1y, 118, 299)

}

function cuadroRojo2() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA2x, TA2y, 108, 331)
}

function cuadroRojo11() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA11x, TA11y, 118, 330)
}

function cuadroRojo12() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA12x, TA12y, 108, 313)
}
//Cuadrante 2
function cuadroRojo23() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TB1x, TB1y, 34, 52)
}

function cuadroRojo28() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TP1X, TP1Y, 102, 334)
}
function cuadroRojo3() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA3x, TA3y, 118, 299)
}
function cuadroRojo432() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(949, 74, 113, 330)
}
function cuadroRojo4() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA4x, TA4y, 118, 330)
}
function cuadroRojo9() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA9x, TA9y, 118, 330)
}
function cuadroRojo10() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA10x, TA10y, 118, 330)
}
function cuadroRojo24() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TB2x, TB2y, 34, 52)
}
function cuadroRojo29() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TP2X, TP2Y, 100, 325)
}

//Cuadrante 3
function cuadroRojo5() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA5x, TA5y, 118, 299)
}
function cuadroRojo6() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA6x, TA6y, 115, 322)
}
function cuadroRojo7() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA7x, TA7y, 118, 330)
}
function cuadroRojo8() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA8x, TA8y, 118, 330)
}
function cuadroRojo25() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TB3x, TB3y, 34, 52)
}
function cuadroRojo30() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')
    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TP3X, TP3Y, 102, 317)
}

//Cuadrante 4
function cuadroRojo18() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA18x, TA18y, 149, 378)
}

function cuadroRojo17() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA17x, TA17y, 149, 378)
}

function cuadroRojo27() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TATGx, TATGy, 298, 99)
}
//Cuadrante 5
function cuadroRojo16() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA16x, TA16y, 149, 378)
}
function cuadroRojo15() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA15x, TA15y, 149, 378)
}
function cuadroRojo19() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA19x, TA19y, 418, 149)
}
function cuadroRojo20() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA20x, TA20y, 418, 149)
}
function cuadroRojo26() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TB4x, TB4y, 66, 52)
}

function cuadroRojo14() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA14x, TA14y, 150, 381)
}
function cuadroRojo13() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA13x, TA13y, 149, 378)
}
function cuadroRojo21() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA21x, TA21y, 571, 77)
}
function cuadroRojo22() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA22x, TA22y, 675, 326)
}

function Evaluacion(point) { //Evalua la matriz de logsave 
    let valtus  //Variable que guarda el valor que se almacena en el Array
    return new Promise(async resolve => {
        switch (point) {

            case 1:

                //Cuadrante 1 
                cuadranteArray[0] = logsave[1]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(1, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[2]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(2, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[11]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(11, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[3] = logsave[12]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(12, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[4] = logsave[23]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(23, valtus) //TB1
                cuadranteArray = [] //Limpia matriz de trabajo
                break

            case 2:
                //Cuadrante 2
                cuadranteArray[0] = logsave[3]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(3, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[4]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(4, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[9]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(9, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[3] = logsave[10]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(10, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[4] = logsave[24]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(24, valtus)//TB2
                cuadranteArray = [] //Limpia matriz de trabajo

                break


            case 3:
                //Cuadrante 3
                cuadranteArray[0] = logsave[5]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(5, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[6]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(6, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[7]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(7, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[3] = logsave[8]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(8, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[4] = logsave[25]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(25, valtus) //TB3
                cuadranteArray = [] //Limpia matriz de trabajo
                break
            case 4:
                //Cuadrante 4
                cuadranteArray[0] = logsave[17]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(17, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[18]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(18, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[27]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(27, valtus) //TG1
                cuadranteArray = [] //Limpia matriz de trabajo
                break
            case 5:
                //Cuadrante 5
                cuadranteArray[0] = logsave[15]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(15, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[16]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(16, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[19]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(19, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[3] = logsave[20]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(20, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[4] = logsave[26]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(26, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo
                break
            case 6:

                //Cuadrante 6
                cuadranteArray[0] = logsave[13]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(13, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo


                cuadranteArray[1] = logsave[14]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(14, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo
                break

            case 7:
                //Cuadrante 7 
                cuadranteArray[0] = logsave[21]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(21, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[22]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(22, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo


                //La evaluacion de todo el array se hara hasta el final del ultimo case
                //logsave[27] = ('1') //Dispensado pendiente de revisar 
                //turno 1
                //logsave.fill('1')
                // bypass()

                let resultadofinal = logsave.some((e) => e == "0")
                console.log("soy logsave", logsave)
                //let hora = 23
                if (resultadofinal == false) {
                    pass()
                    //passturno() //tiene status
                    console.log("Unit---> Pass")
                } else {
                    fail()
                    //failturno()

                    console.log("Unit---> Fail")
                }
                resultado = resultadofinal
                break
            default:
        }//fin de switch

        resolve('resolved')
    })
}
//funciones base de datos 
/*
function agrupapasst2(turno, status, day, fecha) {
    return new Promise(async resolve => {
        const socket = io();
        socket.emit('agrupapasst2', { turno, status, day, fecha })
        resolve('resolved');
    })
}
function agrupardias(status, day, semana) {
    return new Promise(async resolve => {
        const socket = io();
        socket.emit('agrupardias', { status, day, semana })
        resolve('resolved');
    })
}
*/

function abrir() {
    return new Promise(async resolve => {
        const socket = io();
        socket.emit('abrir')
        setTimeout(function fire() { resolve('resolved'); }, 1000) //tiempo para el opencam
    })//cierra la promesa
}
function cerrar() {
    const socket = io();
    socket.emit('cerrar')
}
function exp() {
    const socket = io();
    socket.emit('exp')
}
//funciones abrir y cerrar conexion

socket.on('qtyP2', function (resulcons) {
    let datosp2 = resulcons.result
    turno_pass_qty2 = parseInt(datosp2.rows[0].count, 10)
    // console.log(resulcons.result)
    // console.log(parseInt(datosp2.rows[0].count, 10))

    //UnidadesPLunesT1(resulcons)
    bar.data.datasets[resulcons.status === 'pass' ? 0 : 1].data.push(turno_pass_qty2)
    // console.log(bar.data.datasets[resulcons.status === 'pass' ? 0 : 1].data)
    bar.update()
})


//console.log(turno_pass_qty2)
//console.log(resulcons.status)
//qtyD segunda grafica, por dias

socket.on('qtyD', function (resulday) {
    let datosday = resulday.result
    turno_pass_qtyD = parseInt(datosday.rows[0].count, 10)
    //console.log(datosday)
    // console.log(parseInt(datosday.rows[0].count, 10))
    //se mandan llamar las funciones de "funcionyield"
    yieldMonday(resulday)
    yieldTuesday(resulday)
    yieldWednesday(resulday)
    yieldThursday(resulday)
    yieldFriday(resulday)
    yieldSaturday(resulday)
    yieldSunday(resulday)

    linea.data.datasets[resulday.day === 'day', resulday.status == 'pass' ? 0 : 1].data.push(turno_pass_qtyD)

    linea.update()

})
//console.log(turno_pass_qtyD)
//operacion

/*let contador = 0
    for(let i = 0; i<datosday.length; i++){
        if(datosday[i].status === 'fail')
        contador++;
    
    }
    console.log(contador)*/

//---------------------------Respuesta backend--------------------------------//
socket.on('respuestabd', function (conteototal) {
    //console.log(conteototal)

})

//--------------------------------------------Funciones de la camara-----------//
async function open_cam(point) {// Resolve de 2 segundos

    return new Promise(async resolve => {


        if (point == 1) { camid = "cec923b27e35169d50048222f8a28d5b0015656bac04a172e025a22751c12aab", console.log("cam1") }
        //579ad03c7bc2976741f2f81b1330ce5b6de080ded2c145c66ed614fb9fc923c5
        if (point == 2) { camid = "68e15be53566008fd2e82b1dfab01ea19881f3357083a5dbc7be5bfd3c7df13f",console.log("camara2") } // b4b549adca64fbbea923ab3919fa3a208dfe76b328e1a1566a2d3e1d5461ddfb
        if (point == 3) { camid = "b4b549adca64fbbea923ab3919fa3a208dfe76b328e1a1566a2d3e1d5461ddfb", console.log("camara3") } // 64345777916e8acb939635dd300abb133b7f13400326eeb2b4f2f875b4a39d4c
        // camara UR

        const video = document.querySelector('video')
        const vgaConstraints = {
            video:
            {
                width: { ideal: 1920 },
                height: { ideal: 1080 },
                deviceId: camid
            }
        }
        await navigator.mediaDevices.getUserMedia(vgaConstraints).then((stream) => { video.srcObject = stream }).catch(function (err) { console.log(err.name) })
        setTimeout(function fire() { resolve('resolved'); }, 2000) //tiempo para el opencam
    })//Cierra Promise principal
}
//console.time("t1")
// testsequence()
//console.timeEnd("t1")
function captureimage() {// Resolve de 2 segundos
    return new Promise(async resolve => {

        let image = document.getElementById("CanvasFHD");
        let contexim2 = image.getContext("2d");

        var video = document.getElementById("video");

        w = image.width;
        h = image.height;

        contexim2.drawImage(video, 0, 0, image.width, image.height);
        //var dataURI = canvas.toDataURL('image/jpeg');
        setTimeout(function fire() { resolve('resolved'); }, 2000);//Temporal para programacion de secuencia
        resolve('resolved')
    });
}

function mapcams() {

    navigator.mediaDevices.enumerateDevices().then((devices) => {
        const filtered = devices.filter((device) => device.kind === "videoinput");
        console.log("Cameras found", filtered);
        let cancam = Object.keys(filtered).length;
        let totalcam = "Cameras On: " + cancam;
        Swal.fire(totalcam);
    });
}

function camID() {
    return new Promise(async (resolve) => {
        navigator.mediaDevices.enumerateDevices().then((devices) => {
            let filtered = devices.filter((device) => device.kind === "videoinput");
            if (filtered.length >= 3) {
                let point1 = filtered[0].deviceId;
                let point2 = filtered[1].deviceId;
                let point3 = filtered[2].deviceId;
                console.log("CAM1: " + point1 + "\n" + "CAM2: " + point2 + "\n" + "CAM3: " + point3);
            } else {
                console.log("No se encontraron suficientes camaras")
            }
        });
    });
}
function stopcam() {
    return new Promise(async resolve => {
        const video = document.querySelector('video');
        // A video's MediaStream object is available through its srcObject attribute
        const mediaStream = video.srcObject;
        // Through the MediaStream, you can get the MediaStreamTracks with getTracks():
        const tracks = mediaStream.getTracks();
        tracks.forEach(track => { track.stop() })//;console.log(track);
        setTimeout(function fire() { resolve('resolved'); }, 1000);
    });//Cierra Promise principal
}
function snapshot() {//Back end sent URI,SN? & point?
    return new Promise(async resolve => {

        //contextfullimage.drawImage(fullimage,0,0,fullimage.width,fullimage.height);
        var dataURI = fullimage.toDataURL('image/jpeg');
        savepic(dataURI, snfile, point); //savepic(dataURI,point);
        //console.log("Pic Sent--"+sn+"--"+point);
        //setTimeout(function fire(){resolve('resolved');},2000);//Temporal para programacion de secuencia
        resolve('resolved')
    });
}

async function snapshotrecorte(punto, statusx) {


    // Backend envió URI,SN? & punto?
    return new Promise(async (resolve) => {
        console.log("Punto snrecorte");

        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        // Definimos las dimensiones y coordenadas según el punto
        let ancho, alto, x, y;
        switch (punto) {
            case 1:
                ancho = 118;
                alto = 299;
                x = TA1x;
                y = TA1y;
                break;
            case 2:
                ancho = 108;
                alto = 331;
                x = TA2x;
                y = TA2y;
                break;
            case 3:
                ancho = 118; // Ajusta estos valores según tus necesidades
                alto = 299;
                x = TA3x;
                y = TA3y;
                break;
            case 4:
                ancho = 118; // Ajusta estos valores según tus necesidades
                alto = 330;
                x = TA4x;
                y = TA4y;
                break;
            case 5:
                ancho = 118; // Ajusta estos valores según tus necesidades
                alto = 299;
                x = TA5x;
                y = TA5y;
                break;
            case 6:
                ancho = 111; // Ajusta estos valores según tus necesidades 115
                alto = 330; // 322
                x = TA6x;
                y = TA6y;
                break;
            case 7:
                ancho = 118; // Ajusta estos valores según tus necesidades
                alto = 330;
                x = TA7x;
                y = TA7y;
                break;
            case 8:
                ancho = 118; // Ajusta estos valores según tus necesidades
                alto = 330;
                x = TA8x;
                y = TA8y;
                break;
            case 9:
                ancho = 118; // Ajusta estos valores según tus necesidades
                alto = 330;
                x = TA9x;
                y = TA9y;
                break;
            case 10:
                ancho = 118; // Ajusta estos valores según tus necesidades
                alto = 330;
                x = TA10x;
                y = TA10y;
                break;
            case 11:
                ancho = 115; // Ajusta estos valores según tus necesidades
                alto = 327;
                x = TA11x;
                y = TA11y;
                break;
            case 12:
                ancho = 108; // Ajusta estos valores según tus necesidades
                alto = 313;
                x = TA12x;
                y = TA12y;
                break;
            case 13:
                ancho = 151; // Ajusta estos valores según tus necesidades
                alto = 380;
                x = TA13x;
                y = TA13y;
                break;
            case 14:
                ancho = 150; // Ajusta estos valores según tus necesidades
                alto = 381;
                x = TA14x;
                y = TA14y;
                break;
            case 15:
                ancho = 154; // Ajusta estos valores según tus necesidades
                alto = 380;
                x = TA15x;
                y = TA15y;
                break;
            case 16:
                ancho = 150; // Ajusta estos valores según tus necesidades
                alto = 381;
                x = TA16x;
                y = TA16y;
                break;
            case 17:
                ancho = 149; // Ajusta estos valores según tus necesidades
                alto = 378;
                x = TA17x;
                y = TA17y;
                break;
            case 18:
                ancho = 149; // Ajusta estos valores según tus necesidades
                alto = 378;
                x = TA18x;
                y = TA18y;
                break;
            case 19:
                ancho = 418; // Ajusta estos valores según tus necesidades
                alto = 149;
                x = TA19x;
                y = TA19y;
                break;
            case 20:
                ancho = 418; // Ajusta estos valores según tus necesidades
                alto = 149;
                x = TA20x;
                y = TA20y;
                break;
            case 21:
                ancho = 561; // Ajusta estos valores según tus necesidades
                alto = 77;
                x = TA21x;
                y = TA21y;
                break;
            case 22:
                ancho = 675; // Ajusta estos valores según tus necesidades
                alto = 326;
                x = TA22x;
                y = TA22y;
                break;
            case 23:
                ancho = 34; // Ajusta estos valores según tus necesidades
                alto = 52;
                x = TB1x;
                y = TB1y;
                break;
            case 24:
                ancho = 34; // Ajusta estos valores según tus necesidades
                alto = 52;
                x = TB2x;
                y = TB2y;
                break;
            case 25:
                ancho = 34; // Ajusta estos valores según tus necesidades
                alto = 52;
                x = TB3x;
                y = TB3y;
                break;
            case 26:
                ancho = 66; // Ajusta estos valores según tus necesidades
                alto = 52;
                x = TB4x;
                y = TB4y;
                break;
            case 27:
                ancho = 298; // Ajusta estos valores según tus necesidades
                alto = 99;
                x = TATGx;
                y = TATGy;
                break;
            case 28:
                ancho = 102; // Ajusta estos valores según tus necesidades
                alto = 334;
                x = TP1X;
                y = TP1Y;
                break;
            case 29:
                ancho = 113; // Ajusta estos valores según tus necesidades
                alto = 312;
                x = TP2X;
                y = TP2Y;
                break;
            case 30:
                ancho = 110; // Ajusta estos valores según tus necesidades
                alto = 315;
                x = TP3X;
                y = TP3Y;
                break;


        }

        tempCanvas.width = ancho;
        tempCanvas.height = alto;

        tempCtx.drawImage(fullimage, x, y, ancho, alto, 0, 0, ancho, alto);

        const dataURI = tempCanvas.toDataURL('image/png');
        tempCanvas.remove();

        if (punto === 1 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 1 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        } else if (punto === 2 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 2 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        } else if (punto === 3 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 3 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 4 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 4 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 5 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 5 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 6 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 6 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 7 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 7 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 8 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 8 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 9 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 9 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 10 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 10 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 11 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 11 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 12 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 12 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 13 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 13 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 14 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 15 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 16 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 16 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 17 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 17 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 18 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 18 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 19 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 19 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 20 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 20 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 21 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 21 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 22 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 22 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 23 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 23 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 24 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 24 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 25 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 25 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 26 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 26 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 27 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 27 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 28 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 28 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 29 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 29 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        else if (punto === 30 && statusx === "1") {
            savepicpass(dataURI, snfile, punto);
        } else if (punto === 30 && statusx === "0") {

            savepicfail(dataURI, snfile, punto);
        }
        resolve("resolved");
    });
}

function renombra(snfile) {
    const socket = io();
    socket.emit('renombrasnr', snfile);
}

function savepic(uri, snfile, point) {
    const socket = io();
    socket.emit('picsaving', uri, snfile, point);
}
function savepicpass(uri, snfile, point) {
    const socket = io();
    socket.emit('picsavingpass', uri, snfile, point);
}
function savepicfail(uri, snfile, point) {
    const socket = io();
    socket.emit('picsavingfail', uri, snfile, point);
}


function logsaving(snr, logdata, logsave) {
    //  console.log(logsave)
    socket.emit('logsaving', snr, '\n' + logdata, '\n' + logsave);
    //console.log("entre a logsaving")
    // console.log(snr)
}

//----------Funciones de debug---------------//

let calis = new Image()// Variable utilizada por switchpic

function loadcalis(fotox) {//Funcion Carga la imagen del modelo 
    switchpic(fotox)
    setTimeout(function dibuja() {
        contextfullimage.drawImage(calis, 0, 0, calis.width, calis.height, 0, 0, contextfullimage.canvas.width, contextfullimage.canvas.height)
        canbughide()
    }, 300)
}
function switchpic(name) {
    calis.src = "/img/" + name + ".jpg"
}

function canbughide() { // funcion para esconder los canvas 
    return new Promise(async resolve => {
        document.getElementById('CanvasFHD').style.visibility = "hidden"
        document.getElementById('canvasClen1').style.visibility = "hidden"
        document.getElementById('canvasMlen1').style.visibility = "hidden"
        document.getElementById('canvasGlen1').style.visibility = "hidden"
        document.getElementById('canvasClen2').style.visibility = "hidden"
        document.getElementById('canvasTA6len1').style.visibility = "hidden"
        document.getElementById('canvasGlen2').style.visibility = "hidden"
        document.getElementById('canvasflalen3').style.visibility = "hidden"
        document.getElementById('canvasgolen3').style.visibility = "hidden"
        resolve('resolved')
    });
}

function canbugshow(point) {
    return new Promise(async resolve => {
        console.log("entre a funcion show")
        // document.getElementById('canvasTA6len1').style.visibility = "visible"
        /*document.getElementById('CanvasFHD').style.visibility = "visible"
        document.getElementById('canvasClen1').style.visibility = "visible"
        document.getElementById('canvasMlen1').style.visibility = "visible"
        document.getElementById('canvasGlen1').style.visibility = "visible"
        document.getElementById('canvasClen2').style.visibility = "visible"
        document.getElementById('canvasTA6len1').style.visibility = "visible"
        document.getElementById('canvasGlen2').style.visibility = "visible"
        document.getElementById('canvasflalen3').style.visibility = "visible"
        document.getElementById('canvasgolen3').style.visibility = "visible"*/
        /*if(point == 6){
             console.log("entre a show"+point)
             document.getElementById('canvasTA6len1').style.visibility = "visible"
        
     }*/
        resolve('resolved')
    });
}

function bypass() { //vtemp parametro igual a point
    /*
    //cuadrante 1
    // logsave[1] = ('1') //ta1
    //logsave[2] = ('1')//ta2
    //logsave[3] = ('1')//ta11
    //logsave[4] = ('1')//ta12
    // logsave[5] = ('1')//tb1
    // console.log(logsave)

    //cuadrante 2

    //logsave[6] = ('1') //TA3
    //logsave[7] = ('1')//TA4
    //logsave[8] = ('1')
    //logsave[9] = ('1')
    //logsave[10] = ('1')
    //cuadrante 3
    //logsave[11] = ('1') //TA5
    // logsave[12] = ('1') //TA6
    //logsave[13] = ('1')
    //logsave[14] = ('1')
    logsave[15] = ('1')
    //cuadrante 4
    logsave[16] = ('1')
    logsave[17] = ('1')
    logsave[18] = ('1')
    //cuadrante 5
    logsave[19] = ('1')
    logsave[20] = ('1')
    logsave[21] = ('1')
    logsave[22] = ('1')
    logsave[23] = ('1')
    //cuadrante 6
    logsave[24] = ('1')
    logsave[25] = ('1')
    //cuadrante 7
    logsave[26] = ('1')
    logsave[27] = ('1')
    console.log(logsave)
    //TP'S
    logsave[28] = ('1')
    logsave[29] = ('1')
    logsave[30] = ('1')
    */
}

//---------------------------------- Seccion cadena de plc ---------------//

async function split(infoplc) { // S&IDM-2007&P1093219-00-G:SBNJ19194020602&LFTM1135558-04-A&START#
    //console.log(infoplc)
    station = infoplc.toString().substr(2, 8); //console.log(station)
    sn = infoplc.toString().substr(11, 29); //console.log(sn)
    pn = infoplc.toString().substr(41, 16); //console.log(pn)
    await serialnumber(sn)
    await partnumber(pn)
    await st(station)

}

// Antes de cargar los contadores
/*if (localStorage.getItem('contadorPass')) {
    contadorValores[0] = parseInt(localStorage.getItem('contadorPass'));
}

if (localStorage.getItem('contadorFail')) {
    contadorValores[1] = parseInt(localStorage.getItem('contadorFail'));
}*/
async function mlinspection(point) {


    return new Promise(async resolve => {

        switch (point) {

            case 1: //TA1


                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA1/model.json');

                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                //console.log("Unit pass" , pass)
                //console.log("Unit fail", fail)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                }

                IAdesition[1] = statusx
                break
            case 2://TA2
                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA11/model.json');
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                // console.log("Unit pass" , pasa)
                //console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                }

                IAdesition[2] = statusx
                break
            case 3://TA3

                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA3/model.json');
                //await loadNN()
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                //console.log("Unit pass" , pasa)
                // console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)

                }

                IAdesition[3] = statusx
                break

            case 4://TA4

                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA4/model.json');
                //await loadNN()
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                //console.log("Unit pass" , pasa)
                // console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    /*   contadorValores[0]++
                       localStorage.setItem('contadorPass', contadorValores[0])
                       console.log("soy el contdor pass: " + contadorValores[0])*/
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    /*contadorValores[1]++ //contadorfail
                    localStorage.setItem('contadorFail', contadorValores[1])
                    console.log("soy el contador fail: " + contadorValores[1])*/
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                    /* if (contadorValores[1] >= porcentajeMayor) { // 3 = 3
                         alert("Inspección de IA: Reentrenamiento Requerido TA4"); //muestra la alerta
 
                     }*/


                }

                IAdesition[4] = statusx
                break
            case 5://TA5

                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA5/model.json');
                //console.log(model)
                //await loadNN()
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                //console.log("Unit pass" , pasa)
                //console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                }

                IAdesition[5] = statusx
                break

            case 6://TA6

                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA6/model.json');
                //console.log(model)
                //await loadNN()
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                // console.log("Unit pass", pasa)
                //console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                }

                IAdesition[6] = statusx
                break

            case 7://TA7

                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA8_1/model.json');
                //console.log(model)
                //await loadNN()
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasGlen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                //console.log("Unit pass", pasa)
                //console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                }

                IAdesition[7] = statusx
                break

            case 8://TA8

                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA8_1/model.json');
                //console.log(model)
                //await loadNN()
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                //console.log("Unit pass", pasa)
                //console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                }

                IAdesition[8] = statusx
                break

            case 9://TA9

                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA9_1/model.json');
                //console.log(model)
                //await loadNN()
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                // console.log("Unit pass", pasa)
                //console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                }

                IAdesition[9] = statusx
                break

            case 10://TA10

                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA10/model.json');
                //console.log(model)
                //await loadNN()
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                // console.log("Unit pass", pasa)
                //console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                }

                IAdesition[10] = statusx
                break

            case 11://TA11

                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA11/model.json');
                //console.log(model)
                //await loadNN()
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                //  console.log("Unit pass", pasa)
                // console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                }

                IAdesition[11] = statusx
                break

            case 12://TA12

                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA11/model.json');
                //console.log(model)
                //await loadNN()
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                //console.log("Unit pass", pasa)
                //console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                }

                IAdesition[12] = statusx
                break

            case 19://TA19

                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA19/model.json');
                //console.log(model)
                //await loadNN()
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                //console.log("Unit pass", pasa)
                //console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                }

                IAdesition[19] = statusx
                break

            case 22://TA22

                model = new cvstfjs.ClassificationModel();
                await model.loadModelAsync('../ml/TA22/model.json');
                //console.log(model)
                //await loadNN()
                //const image = document.getElementById('canvasClen1');
                result = await model.executeAsync(canvasClen1);
                // console.log(result)
                //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                pasa = result[0][0]
                falla = result[0][1]
                //console.log("Unit pass", pasa)
                //console.log("Unit fail", falla)
                if (pasa >= falla) { //Evalua el valor en la posicion 0 que da la redneuronal
                    //console.log("Unit pass" , pass)
                    statusx = "1"
                    console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
                } else {
                    statusx = "0"
                    console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                }

                IAdesition[22] = statusx
                break
        }

        resolve('resolved')
    })
}



async function loadNN() {
    return new Promise(async resolve => {
        setTimeout(function invento() { resolve('resolved') }, 2000)
    })
}

//****************************************************** IA ****************************************
/*
const classifier = knnClassifier.create()
ml()

async function mlinspector(pot) {
    return new Promise(async resolve => { // inicio de promesa 
        let x = 0
        let y = 0
        let w = 0
        let h = 0
        // Cuadrante 1
        if (pot == 1) { x = 81, y = 240, w = 299, h = 118 }
        if (pot == 2) { x = 85, y = 395, w = 330, h = 118 }
        if (pot == 11) { x = 549, y = 512, w = 330, h = 118 }
        if (pot == 12) { x = 629, y = 262, w = 312, h = 118 }
        if (pot == 23) { x = 188, y = 187, w = 52, h = 34 }

        // Cuadrante 2
        if (pot == 3) { x = 90, y = 758, w = 299, h = 118 }
        if (pot == 4) { x = 57, y = 1070, w = 330, h = 118 }
        if (pot == 9) { x = 557, y = 1031, w = 330, h = 118 }
        if (pot == 10) { x = 627, y = 780, w = 330, h = 118 }
        if (pot == 24) { x = 117, y = 187, w = 52, h = 34 }

        //cuadrante 3
        if (pot == 5) { x = 95, y = 1307, w = 299, h = 118 }
        if (pot == 6) { x = 67, y = 1622, w = 322, h = 115 } //hacer el 7
        if (pot == 7) { x = 562, y = 1580, w = 562, h = 1580 }
        if (pot == 8) { x = 629, y = 1329, w = 330, h = 118 }
        if (pot == 25) { x = 119, y = 1248, w = 52, h = 34 }

        //Cuadrante 4
        if (pot == 17) { x = 99, y = 312, w = 378, h = 149 }
        if (pot == 18) { x = 50, y = 105, w = 378, h = 149 }
        if (pot == 27) { x = 822, y = 153, w = 99, h = 298 } //TG

        //Cuadrante 5
        if (pot == 15) { x = 100, y = 961, w = 378, h = 149 }
        if (pot == 16) { x = 55, y = 751, w = 378, h = 149 }
        if (pot == 19) { x = 692, y = 771, w = 418, h = 149 }
        if (pot == 20) { x = 893, y = 766, w = 418, h = 149 }
        if (pot == 26) { x = 594, y = 1031, w = 52, h = 66 }

        //Cuadrante 6
        if (pot == 13) { x = 98, y = 1715, w = 378, h = 149 }
        if (pot == 14) { x = 61, y = 1504, w = 378, h = 149 }

        //Cuadrante 7
        if (pot == 21) { x = 549, y = 221, w = 61, h = 555 }
        if (pot == 22) { x = 619, y = 194, w = 364, h = 634 }


        switch (pot) {
            case 1:
                //TA1
                contextcanvasClen1.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasClen1.canvas.width, contextcanvasClen1.canvas.height)
                // contextcanvande.drawImage(fullimage,355,317,538,192,0,0,contextcanvande.canvas.width,contextcanvande.canvas.height);   
                await call("TA1-75", 75)
                await predict(canvasClen1)
                IAdesition[1] = statusx
                break;
            case 2:
                //TA2
                contextcanvasGlen1.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height);
                await call("TA1-75", 75)
                await predict(canvasGlen1)
                break;
            case 3:
                //TA3
                contextcanvasClen1.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasClen1.canvas.width, contextcanvasClen1.canvas.height);
                await call("TA3-75", 75)
                await predict(canvasClen1)
                IAdesition[3] = statusx
                break;
            case 4:
                //TA4
                contextcanvasGlen1.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height);
                await call("TA4-75", 75)
                await predict(canvasGlen1)
                IAdesition[4] = statusx
                break;
            case 5:
                //TA5
                contextcanvasClen1.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasClen1.canvas.width, contextcanvasClen1.canvas.height)
                // contextcanvande.drawImage(fullimage,355,317,538,192,0,0,contextcanvande.canvas.width,contextcanvande.canvas.height);   
                await call("TA5-75", 75)
                await predict(canvasClen1)
                IAdesition[5] = statusx
                break;
            case 6:
                //TA6
                contextcanvasTA6len1.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasTA6len1.canvas.width, contextcanvasTA6len1.canvas.height);
                await call("TA6-75", 75)
                await predict(canvasTA6len1)
                IAdesition[6] = statusx
                break;
            case 7:
                // TA7
                contextcanvasGlen1.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height);
                await call("TA7-75", 75)
                await predict(canvasGlen1)
                IAdesition[7] = statusx
                break;
            case 8:
                // TA8
                contextcanvasGlen1.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height);
                await call("TA8-75", 75)
                await predict(canvasGlen1)
                IAdesition[8] = statusx
                break;
            case 9:
                //TA9
                contextcanvasGlen1.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height);
                await call("TA9", 118)
                await predict(canvasGlen1)
                IAdesition[9] = statusx
                break;
            //TA10
            case 10:
                contextcanvasGlen1.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height);
                await call("TA3-75", 75)
                await predict(canvasGlen1)
                IAdesition[10] = statusx
                break;
            //TA11
            case 11:
                contextcanvasGlen1.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height);
                await call("Canvande", 26)
                await predict(canvasGlen1)
                break;
            case 12:
                contextcanvasMlen1.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasMlen1.canvas.width, contextcanvasMlen1.canvas.height);
                await call("TA12-75", 75)
                await predict(canvasMlen1)
                IAdesition[12] = statusx
                break;
            case 13:
                contextcanvasClen2.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                //contextcanvande.drawImage(fullimage,355,317,538,192,0,0,contextcanvande.canvas.width,contextcanvande.canvas.height);   
                await call("TA13-75", 75)
                await predict(canvasClen2)
                IAdesition[13] = statusx
                break;
            case 14:
                contextcanvasClen2.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                //contextcanvande.drawImage(fullimage,355,317,538,192,0,0,contextcanvande.canvas.width,contextcanvande.canvas.height);   
                await call("TA14", 22)
                await predict(canvasClen2)
                IAdesition[14] = statusx
                break;
            case 15:
                contextcanvasClen2.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height);
                await call("TA15", 27)
                await predict(canvasClen2)
                IAdesition[15] = statusx
                break;
            case 16:
                contextcanvasClen2.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height);
                await call("TA16", 30)
                await predict(canvasClen2)
                IAdesition[16] = statusx
                break;
            case 17:
                contextcanvasClen2.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                // contextcanvande.drawImage(fullimage,355,317,538,192,0,0,contextcanvande.canvas.width,contextcanvande.canvas.height);   
                await call("TA17-75", 75)
                await predict(canvasClen2)
                IAdesition[17] = statusx
                break;
            case 18:
                contextcanvasClen2.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                //contextcanvande.drawImage(fullimage,355,317,538,192,0,0,contextcanvande.canvas.width,contextcanvande.canvas.height);   
                await call("TA18-102", 102)
                await predict(canvasClen2)
                IAdesition[18] = statusx
                break;
            case 19:
                contextcanvasGlen2.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasGlen2.canvas.width, contextcanvasGlen2.canvas.height);
                await call("TA19", 48)
                await predict(canvasGlen2)
                IAdesition[19] = statusx
                break;
            case 20:
                contextcanvasGlen2.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasGlen2.canvas.width, contextcanvasGlen2.canvas.height);
                await call("canvica")
                await predict(canvasGlen2)
                break;
            case 21:
                contextcanvasflalen3.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasflalen3.canvas.width, contextcanvasflalen3.canvas.height);
                await call("TA21-50", 50)
                await predict(canvasflalen3)
                IAdesition[21] = statusx
                break;
            case 22:
                contextcanvasgolen3.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasgolen3.canvas.width, contextcanvasgolen3.canvas.height);
                await call("TA22-40", 40)
                await predict(canvasgolen3)
                IAdesition[22] = statusx
                break;
            //TG
            case 23:
                contextcanvasTGlen2.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasTGlen2.canvas.width, contextcanvasTGlen2.canvas.height);
                await call("TA1-75", 75)
                await predict(canvasTGlen2)
                IAdesition[23] = statusx
                break;
            //TB1
            case 24:
                contextcanvasTB.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasTB.canvas.width, contextcanvasTB.canvas.height);
                await call("TA3-75", 75)
                await predict(canvasTB)
                IAdesition[24] = statusx
                break;
            //TB2
            case 25:
                contextcanvasTB.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasTB.canvas.width, contextcanvasTB.canvas.height);
                await call("TA7-75", 75)
                await predict(canvasTB)
                IAdesition[25] = statusx
                break;
            //TB3
            case 26:
                contextcanvasTB.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasTB.canvas.width, contextcanvasTB.canvas.height);
                await call("canvica2")
                await predict(canvasTB)
                break;
            //TB4
            case 27:
                contextcanvasTB4.drawImage(fullimage, x, y, w, h, 0, 0, contextcanvasTB4.canvas.width, contextcanvasTB4.canvas.height);
                await call("TA18-102", 102)
                await predict(canvasTB4)
                IAdesition[27] = statusx
                break;
            /*case 27: 
    
            break;
            default:
        }
        resolve('resolved')
    })
}
async function ml() {
    // Load the model.
    net = await mobilenet.load(); // red neuronal echa, ejemplo, ya esta entrenada  
    console.log('Neural network load success...');
}

function load(file, callback) {  // funcion que se encarga de llamar Json con el nuevo entrenamiento 
    //Can be change to other source	
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null)
}

function call(nuca, vari) { // vari representa nuero de muestras de la red neuronal 
    return new Promise(async resolve => {
        let data;
        load("/ml/neuralnetworks/" + nuca + ".json", function (text) { //C:/Users/juan_moreno/myapp/public/Nokia Vision
            data = JSON.parse(text);
            //*****************************COnvertir a tensor
            //Set classifier
            Object.keys(data).forEach((key) => {
                data[key] = tf.tensor2d(data[key], [vari, 1024]); //Shape es [# imagenes,dimension pix] ,[19,1024]
            });
            //Set classifier
            //console.log(data);
            classifier.setClassifierDataset(data)
        }) // fin de load 
        setTimeout(function fire() { resolve('resolved') }, 500);
    }) // fin de promesa 
}

async function predict(wonka) { // wonka es variable
    return new Promise(async resolve => {
        // Get the activation from mobilenet from the webcam.
        const activation = net.infer(wonka, 'conv_preds');
        // Get the most likely class and confidences from the classifier module.
        const result = await classifier.predictClass(activation); // Clasifica, decide depende de la imagen lo que le va a poner 
        const classes = ['Pass', 'Fail'];
        if (classes[result.label] == "Pass") {
            statusx = "1"
            console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' : 'Fail'}`)
        } else {
            statusx = "0"
            console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
        }
        //console.log(classes[result.label])
        // console.log(result.confidences[result.label]*100)
        resolve('resolved')
    });//Cierra Promise						
}//if logic end */

//Ve el video de las 3 camaras
/*function camcalis() {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const videoDevices = devices.filter(device => device.kind === 'videoinput');

            if (videoDevices.length >= 2) {
                //Seleccionar las dos primeras camaras
                const camera1 = videoDevices[0].deviceId;
                const camera2 = videoDevices[1].deviceId;
                const camera3 = videoDevices[2].deviceId;

                //Crear dos elementos de video 
                const video1 = document.createElement('video');
                video1.id = 'd13b8c93a035b004ab59c089575dd7551f54bde948636d0c2c00b148f9c8578b';
                video1.width = 1920;
                video1.height = 1080;

                const video2 = document.createElement('video');
                video2.id = '85f706f1ee83955da9d43c7717bbedeb77ac58638e617500dbbc4d995f4b6352'
                video2.width = 1920;
                video2.height = 1080;

                const video3 = document.createElement('video');
                video3.id = '0e0625d837a31853089be3b77059dc4db982eac3f022912f8960f9db70f49dd4';
                video3.width = 1920;
                video3.height = 1080;


                //solicitar acceso a las camaras 
                Promise.all([
                    navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: camera1 } } }),
                    navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: camera2 } } }),
                    navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: camera3 } } }),
                ])
                    .then(([stream1, stream2, stream3]) => {
                        video1.srcObject = stream1;
                        video2.srcObject = stream2;
                        video3.srcObject = stream3;
                        video1.play();
                        video2.play();
                        video3.play();

                        //Agregar los videos al DOM
                        document.body.appendChild(video1);
                        document.body.appendChild(video2);
                        document.body.appendChild(video3);
                    })
                    .catch(err => {
                        console.error("Error al acceder a las camaras: ", err);
                    });
            } else {
                console.log("No se encontraron suficientes camaras");
            }
        })
        .catch(err => {
            console.error('Error al enumara los dispositivos: ', err)
        })
}
//let video 

//Captura las 3 imagenes de las camaras
/*function camcalis2() {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const videoDevices = devices.filter(device => device.kind === 'videoinput');

            if (videoDevices.length >= 3) {
                const cameras = videoDevices.slice(0, 3);

                // Create video and canvas elements for each camera
                const videoElements = [];
                const canvasElements = [];
                cameras.forEach(camera => {
                    video = document.createElement('video');
                    video.width = 1920;
                    video.height = 1080;
                    videoElements.push(video);

                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    canvasElements.push(canvas);
                });

                Promise.all(cameras.map(camera => navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: camera.deviceId } } })))
                    .then(streams => {
                        streams.forEach((stream, index) => {
                            videoElements[index].srcObject = stream;
                            videoElements[index].play();

                            // Append elements to body (optional, for debugging)
                            document.body.appendChild(videoElements[index]);
                            document.body.appendChild(canvasElements[index]);
                        
                        });

                        captureAllImages(videoElements, canvasElements);
                    })
                    .catch(err => {
                        console.error('error al acceder a las camaras: ', err);
                    });
            } else {
                console.log('Cámaras no encontradas');
            }
        })
        .catch(err => {
            console.error('error de enumeración de cámaras: ', err);
        });
}*/

/*function captureAllImages(){
    const canvas1 = document.getElementById('CanvasFHD1')
    const canvas2 = document.getElementById('CanvasFHD2')
    const canvas3 = document.getElementById('CanvasFHD2')

    const context1 = canvas1.getContext('2d')
    const context2 = canvas2.getContext('2d')
    const context3 = canvas3.getContext('2d')

    context1.drawImage(video,0,0,canvas1.width,canvas1.height)
    context2.drawImage(video,0,0,canvas2.width,canvas2.height)
    context3.drawImage(video,0,0,canvas3.width,canvas3.height)
}
/*function captureAllImages(videoElements, canvasElements) {
    videoElements.forEach((video, index) => {
        console.log(canvasElements)
        const canvas = canvasElements[index];
        const context= canvas.getContext('2d')
        canvas.id = `CanvasFHD${index + 1}`;  // Use index to differentiate canvas IDs
        console.log(canvas,context)
        /*let dibujo1 = document.getElementById('CanvasFHD1')
        let contextdibujo1 = dibujo1.getContext('2d')

        let dibujo2 = document.getElementById('CanvasFHD2')
        let contextdibujo2 = dibujo2.getContext('2d')

        let dibujo3 = document.getElementById('CanvasFHD3')
        let contextdibujo3 = dibujo3.getContext('2d')*/


        //return new Promise((resolve, reject) => {
           // video.onloadedmetadata = () => {
              //  context.drawImage(video,0,0,canvas.width,canvas.height)
                //  console.log("Canvas ID:", can.id);
               /* console.log("Video width:", video.videoWidth);
                console.log("Video height:", video.videoHeight);
                // Update this line to use the correct canvas element ID
                //console.log(canvas.style.display)
                contextdibujo1.clearRect(0, 0, dibujo1.width, dibujo1.height)
                contextdibujo1.drawImage(video, 0, 0, dibujo1.width, dibujo1.height)

                contextdibujo2.clearRect(0, 0, dibujo2.width, dibujo2.height)
                contextdibujo2.drawImage(video, 0, 0, dibujo2.width, dibujo2.height)

                contextdibujo3.clearRect(0, 0, dibujo3.width, dibujo3.height)
                contextdibujo3.drawImage(video, 0, 0, dibujo3.width, dibujo3.height)*/
                // document.body.appendChild(dibujo);
                //video.pause();
                //video.srcObject.getTracks().forEach(track => track.stop());

              //  resolve();
            //};
            //video.onerror = reject;
       // };
   // });

    /*Promise.all(imagePromises)
        .then(() => {
            console.log('Todas las imágenes capturadas y mostradas');
        })
        .catch(err => {
            console.error('Error al capturar imágenes:', err);
        });
}


/*
function  captureAllImages(videoElements, canvasElements){
    const imagePromises = videoElements.map((video, index) =>{
        const canvas = canvasElements[index];
        const context = canvas.getContext('2d');
        const canvasName = `cam${index + 1}`;

        return new Promise((resolve, reject) => {
            video.onloadedmetadata = () => { 
                context.clearRect(0,0, canvas.width, canvas.height);
                context.drawImage(video, 0,0);
                video.pause();
                video.srcObject.getTracks().forEach(track => track.stop());

                const imageData = canvas.toDataURL('image/jpeg');
                document.getElementById(canvasName).src = imageData;
                resolve();
            };
        video.onerror = reject;
        });
    });
    Promise.all(imagePromises)
    .then(() =>{
        console.log('imagenes capturadas')
    })
    Promise.all(imagePromises)
    .then(imageDataArray => {
        imageDataArray.forEach((imageData, index) => {
            canvasElements[index].src = imageData;
        });
    })

 .catch(err => {
     console.error('error al capturar imagenes', err);
 });

 let imagen1 = document.getElementById('cam1');
 let contextimg1 = imagen1.getContext('2d')

 contextimg1.drawImage(video, 0, 0, imagen1.width, imagen1.height);
}
//camcalis2();
*/


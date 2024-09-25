



let statusx // Resultado de analisis pass(1)/Fail(0) se utiliza en la funcion logresult()
let logsave = [] //Array que utilizamos en la funcion logresult() y  almacena resumen
let cuadranteArray = [] // Array para evaluar pass o fail de cuadrante
let porcentajeArray = [] // Array que guarda el porcentaje en cada punto 
let mtxw = [] //Array que guarda el porcentaje 
let IAdesition = []
let criterio // Esta variable se utiliza como criterio de pase para % de TIM x cada TA
let ruido
let latapona
let resultado
let snr //= "soyserial"
let snfile // = //"segundo intento bd"
let turno_pass_qty1
let turno_fail_qty1
let turno_pass_qty2
let turno_fail_qty2
let turno_pass_qtyD
let bar
let mondayPass
let mondayFail
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

let image = new Image() //Carga caricatura

image.src = '/img/caricatura.png'

image.onload = function () { //se usa para ejecutar una función de JavaScript tan pronto como una página haya cargado
    contextcanvasCamara.drawImage(image, 0, 0, image.width, image.height, 0, 0, contextcanvasCamara.canvas.width, contextcanvasCamara.canvas.height);
}

window.onload = async function () { //en cuanto se recag
    return new Promise(async resolve => {
        await abrir()
if(day == 'Monday'){
        await agrupapasst2('1', 'pass','Monday', fecha)
        await agrupapasst2('2', 'pass','Monday', fecha)
        await agrupapasst2('3', 'pass','Monday', fecha)
        await agrupapasst2('1', 'fail','Monday', fecha)
        await agrupapasst2('2', 'fail','Monday', fecha)
        await agrupapasst2('3', 'fail','Monday', fecha)
} if (day == 'Tuesday'){
        await agrupapasst2('1', 'pass','Tuesday', fecha)
        await agrupapasst2('2', 'pass','Tuesday', fecha)
        await agrupapasst2('3', 'pass','Tuesday', fecha)
        await agrupapasst2('1', 'fail','Tuesday', fecha)
        await agrupapasst2('2', 'fail','Tuesday', fecha)
        await agrupapasst2('3', 'fail','Tuesday', fecha)
} if (day == 'Wednesday'){
        await agrupapasst2('1', 'pass','Wednesday', fecha)
        await agrupapasst2('2', 'pass','Wednesday', fecha)
        await agrupapasst2('3', 'pass','Wednesday', fecha)
        await agrupapasst2('1', 'fail','Wednesday', fecha)
        await agrupapasst2('2', 'fail','Wednesday', fecha)
        await agrupapasst2('3', 'fail','Wednesday', fecha)
} if (day == 'Thursday'){
        await agrupapasst2('1', 'pass','Thursday', fecha)
        await agrupapasst2('2', 'pass','Thursday', fecha)
        await agrupapasst2('3', 'pass','Thursday', fecha)
        await agrupapasst2('1', 'fail','Thursday', fecha)
        await agrupapasst2('2', 'fail','Thursday', fecha)
        await agrupapasst2('3', 'fail','Thursday', fecha)
} if (day == 'Friday'){
        await agrupapasst2('1', 'pass','Friday', fecha)
        await agrupapasst2('2', 'pass','Friday', fecha)
        await agrupapasst2('3', 'pass','Friday', fecha)
        await agrupapasst2('1', 'fail','Friday', fecha)
        await agrupapasst2('2', 'fail','Friday', fecha)
        await agrupapasst2('3', 'fail','Friday', fecha)
}if (day == 'Saturday'){
        await agrupapasst2('1', 'pass','Saturday', fecha)
        await agrupapasst2('2', 'pass','Saturday', fecha)
        await agrupapasst2('3', 'pass','Saturday', fecha)
        await agrupapasst2('1', 'fail','Saturday', fecha)
        await agrupapasst2('2', 'fail','Saturday', fecha)
        await agrupapasst2('3', 'fail','Saturday', fecha)
}if (day == 'Sunday'){
        await agrupapasst2('1', 'pass','Sunday', fecha)
        await agrupapasst2('2', 'pass','Sunday', fecha)
        await agrupapasst2('3', 'pass','Sunday', fecha)
        await agrupapasst2('1', 'fail','Sunday', fecha)
        await agrupapasst2('2', 'fail','Sunday', fecha)
        await agrupapasst2('3', 'fail','Sunday', fecha)
}
await numsem() 
resolve('resolved')})}



/**************************************************** Muestra hora local */
const d = new Date();
let hora = d.getHours();
document.getElementById("demo").innerHTML = hora;
//console.log(hora)

/**************************************************** Muestra dia de calendario */
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dia = new Date();
let day = weekday[dia.getDay()];
document.getElementById("demo").innerHTML = day;

//console.log(day)

//numero
const dian = new Date();
let num = dian.getDate()
document.getElementById("demo").innerHTML = num;

//console.log(num)
//mes

const months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
const m = new Date();
let month = months[m.getMonth()];

//año
const y = new Date();
let year = y.getFullYear();

let fecha = year+"-"+month+"-"+num
//console.log(fecha)


function getweek(date){
    var onejan = new Date (date.getFullYear(),0,1)
    return Math.ceil((((date - onejan) / 86400000) + onejan.getDay()+1)/7)
   
}
var date = new Date(fecha);
let semana = getweek(date);
//console.log(semana);


const fechaActual = new Date()
const diaSemana = fechaActual.getDay()

async function numsem(){
if((diaSemana == 0 ||diaSemana == 1 ||diaSemana == 2 ||diaSemana == 3 ||diaSemana == 4 ||diaSemana == 5 ||diaSemana == 6 && (getweek(date)) == getweek(date))){
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
await agrupardias('fail', 'Saturday',  semana)
await agrupardias('pass', 'Sunday', semana)
await agrupardias('fail', 'Sunday',  semana)
}
}

//************************ GRAFICA LINEAL */ 
async function iniciar() {
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
                    backgroundColor: '#66FF66',
                    borderColor: '#66FF66',
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
iniciar()

/***************************** GRAFICA BARRAS */

async function iniciar2() {
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
                    backgroundColor: '#66FF66',
                    borderColor: '#66FF66',
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

iniciar2()

//*************************Socket block */
const socket = io();

socket.on('Timsequence_start', function (infoplc) {//pg migrated
    split(infoplc)

    if (infoplc != 0) {

        station = infoplc.toString().substr(2, 8)
        snr = infoplc.toString().substr(11, 29)
        snfile = infoplc.toString().substr(25, 15)
        pn = infoplc.toString().substr(41, 16)
        console.log("Start test sequence");
        testsequence()//Activa bandera para continuar

        
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
            "TA11-: " + "status :" + logsave[3] + ", " + "percent -->  " + porcentajeArray[11] * 100 + "(%)\n" +
            "TA12-: " + "status :" + logsave[4] + ", " + "percent -->  " + porcentajeArray[12] * 100 + "(%)\n" +
            "TB1-:  " + "status :" + logsave[5] + ", " + "percent -->  " + porcentajeArray[23] * 100 + "(%) \n\n" +
            //Cuadrante 2 
            "Cuadrante :2\n" +
            "TA3-:  " + "status :" + logsave[6] + ",  " + "percent -->  " + porcentajeArray[3] * 100 + "(%)\n"  +
            "TA4-:  " + "status :" + logsave[7] + ",  " + "percent -->  " + porcentajeArray[4] * 100 + "(%)\n" + //`IA Inspection: ${IAdesition[4] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA9-:  " + "status :" + logsave[8] + ",  " + "percent -->  " + porcentajeArray[9] * 100 + "(%)\n" + //`IA Inspection: ${IAdesition[9] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA10-: " + "status :" + logsave[9] + ",  " + "percent -->  " + porcentajeArray[10] * 100 + "(%)\n" + //`IA Inspection: ${IAdesition[10] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TB2-:  " + "status :" + logsave[10] + ",  " + "percent -->  " + porcentajeArray[24] * 100 + "(%)\n" +// `IA Inspection: ${IAdesition[24] == 0 ? 'Fail' : 'Pass'} ` + "\n\n" +
            // Cuadrante3
            "Cuadrante :3\n" +
            "TA5-: " + "status :" + logsave[11] + ", " + "percent -->  " + porcentajeArray[5] * 100 + "(%)\n" + // `IA Inspection : ${IAdesition[5] == 0 ? 'Fail' : 'Pass'} ` + "\n" + // valor ternario que se utiliza para la toma de desicion en una cadena
            "TA6-: " + "status :" + logsave[12] + ", " + "percent -->  " + porcentajeArray[6] * 100 + "(%)\n" + // `IA Inspection : ${IAdesition[6] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA7-: " + "status :" + logsave[13] + ", " + "percent -->  " + porcentajeArray[7] * 100 + "(%)\n" + //`IA Inspection : ${IAdesition[7] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA8-: " + "status :" + logsave[14] + ", " + "percent -->  " + porcentajeArray[8] * 100 + "(%)\n" + //`IA Inspection : ${IAdesition[8] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TB3-: " + "status :" + logsave[15] + ", " + "percent -->  " + porcentajeArray[25] * 100 + "(%)\n" + //`IA Inspection : ${IAdesition[25] == 0 ? 'Fail' : 'Pass'} ` + "\n\n" +
            // Cuadrante 4
            "Cuadrante :4\n" +
            "TA17-: " + "status :" + logsave[16] + ", " + "percent -->  " + porcentajeArray[17] * 100 + "(%)\n" + //`IA Inspection : ${IAdesition[17] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA18-: " + "status :" + logsave[17] + ", " + "percent -->  " + porcentajeArray[18] * 100 + "(%)\n" + //`IA Inspection: ${IAdesition[18] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TG1-:  " + "status :" + logsave[18] + ", " + "percent -->  " + porcentajeArray[27] * 100 + "(%)\n" + //`IA Inspection: ${IAdesition[27] == 0 ? 'Fail' : 'Pass'} ` + "\n\n" +
            // Cuadrante 5 
            "Cuadrante :5\n" +
            "TA15-: " + "status :" + logsave[19] + ", " + "percent -->  " + porcentajeArray[15] * 100 + "(%)\n" +// `IA Inspection : ${IAdesition[15] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA16-: " + "status :" + logsave[20] + ", " + "percent -->  " + porcentajeArray[16] * 100 + "(%)\n" + //`IA Inspection : ${IAdesition[16] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA19-: " + "status :" + logsave[21] + ", " + "percent -->  " + porcentajeArray[19] * 100 + "(%)\n" + //`IA Inspection : ${IAdesition[19] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA20-: " + "status :" + logsave[22] + ", " + "percent -->  " + porcentajeArray[20] * 100 + "(%)\n" +
            "TB4-:  " + "status :" + logsave[23] + ", " + "percent -->  " + porcentajeArray[26] * 100 + "(%)\n\n" +
            // Cuadrante 6
            "Cuadrante :6\n" +
            "TA13-: " + "status :" + logsave[24] + ", " + "percent -->  " + porcentajeArray[13] * 100 + "(%)\n" + // `IA Inspection : ${IAdesition[13] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TA14-: " + "status :" + logsave[25] + ", " + "percent -->  " + porcentajeArray[14] * 100 + "(%)\n" + //`IA Inspection : ${IAdesition[14] == 0 ? 'Fail' : 'Pass'} ` + "\n\n" +
            // Cuadrante 7
            "Cuadrante :7\n" +
            "TA21-: " + "status :" + logsave[26] + ", " + "percent -->  " + porcentajeArray[21] * 100 + "(%)\n" + //`IA Inspection : ${IAdesition[21] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
            "TC-:   " + "status :" + logsave[27] + ", " + "percent -->  " + porcentajeArray[22] * 100 + "(%)\n" + //`IA Inspection : ${IAdesition[22] == 0 ? 'Fail' : 'Pass'} ` + "\n\n" +
            "#"


        logsave =
            "" + snr + "&TA1-" + mtxw[1] * 100 + "%" + "," + logsave[1] +
            "&TA2-" + mtxw[2] * 100 + "%" + "," + logsave[2] +//porcentajeArray[2]+"%"+           
            "&TA11-" + mtxw[11] * 100 + "%" + "," + logsave[3] +//porcentajeArray[3]+"%"+
            "&TA12-" + mtxw[12] * 100 + "%" + "," + logsave[4] +//porcentajeArray[4]+
            "&TB1-" + mtxw[23] * 100 + "%" + "," + logsave[5] +//porcentajeArray[5]+
            //Cuadrante 2 
            "&TA3-" + mtxw[3] * 100 + "%" + "," + logsave[6] +//porcentajeArray[6]+
            "&TA4-" + mtxw[4] * 100 + "%" + "," + logsave[7] +//porcentajeArray[7]+
            "&TA9-" + mtxw[9] * 100 + "%" + "," + logsave[8] +//porcentajeArray[8]+
            "&TA10-" + mtxw[10] * 100 + "%" + "," + logsave[9] +//porcentajeArray[9]+
            "&TB2-" + mtxw[24] * 100 + "%" + "," + logsave[10] +//porcentajeArray[10]+
            // Cuadrante3
            "&TA5-" + mtxw[5] * 100 + "%" + "," + logsave[11] +//porcentajeArray[11]+
            "&TA6-" + mtxw[6] * 100 + "%" + "," + logsave[12] +//porcentajeArray[12]+
            "&TA7-" + mtxw[7] * 100 + "%" + "," + logsave[13] +//porcentajeArray[13]+
            "&TA8-" + mtxw[8] * 100 + "%" + "," + logsave[14] +//porcentajeArray[14]+
            "&TB3-" + mtxw[25] * 100 + "%" + "," + logsave[15] +//porcentajeArray[15]+

            "&TA17-" + mtxw[17] * 100 + "%" + "," + logsave[16] +//porcentajeArray[16]+
            "&TA18-" + mtxw[18] * 100 + "%" + "," + logsave[17] +//porcentajeArray[17]+
            "&TG1-" + mtxw[27] * 100 + "%" + "," + logsave[18] +

            "&TA15-" + mtxw[15] * 100 + "%" + "," + logsave[19] +//porcentajeArray[18]+
            "&TA16-" + mtxw[16] * 100 + "%" + "," + logsave[20] +//porcentajeArray[19]+
            "&TA19-" + mtxw[19] * 100 + "%" + "," + logsave[21] +//porcentajeArray[20]+
            "&TA20-" + mtxw[20] * 100 + "%" + "," + logsave[22] +//porcentajeArray[21]+
            "&TB4-" + mtxw[26] * 100 + "%" + "," + logsave[23] +//porcentajeArray[22]+

            "&TA13-" + mtxw[13] * 100 + "%" + "," + logsave[24] +//porcentajeArray[23]+
            "&TA14-" + mtxw[14] * 100 + "%" + "," + logsave[25] +//porcentajeArray[24]+

            "&TA21-" + mtxw[21] * 100 + "%" + "," + logsave[26] +//porcentajeArray[25]+
            "&TC-" + mtxw[22] * 100 + "%" + "," + logsave[27] +//porcentajeArray[26]+"%"+
            "#"

        //logsave=""+snr+"&TA0,1&TA1,1&TA2,1&TA3,1&TA4,1&TA5,1&TA6,1&TA7,1&TA8,1&TA9,1&TA10,1&TA11,1&TA12,1&TA13,1&TA14,1&TA15,1&TA16,1&TA17,1&TA18,1&TA19,1&TA20,1&TA21,1&TA22,1&TA23,1&TA24,1&TA25,1&TA26,0#"
       //console.log("Logsave--"+logsave)

        /*mtxw= 
        ""+snr+"&TA1,"+mtxw[1]*100+"%"+","+logsave[1]+","+
        "&TA2,       "+mtxw[2]*100+"%"+","+logsave[2]+","+
        "&TA11,      "+mtxw[11]*100+"%"+","+logsave[2]+","+
        "&TA11,      "+mtxw[11]*100+"%"+","+logsave[2]+","+*/

        logsaving(snfile, porcentajeArray, resultado)
        socket.emit('plc_response', logsave)
        resolve('resolved')
    })
}
//funcion onload

//----------------Main test sequence----------//
async function testsequence() {
    cuadranteArray = []// Reinicia valor para retrabajar cuadrante
    porcentajeArray = []// Reinicia valor para retrabajar cuadrante
    canbughide()
    for (point = 1; point < 4; point++) {
        await open_cam(point)
        await captureimage()
        await recorTA(point)
        await stopcam()
    }
    await plc_response(logsave)
    if (resultado == true) {
        renombra(snfile)
    }
 setTimeout(function fire(){location.reload()},2000);// temporizador para limpiar pantalla
}

function serialnumber (sn){
    return new Promise(async resolve =>{
        elementsn= document.getElementById('sn')
        //console.log(serial)
        elementsn.innerHTML= "Serial: "+sn+""
    resolve('resolved')})
}
function partnumber (pn){
    return new Promise(async resolve =>{
        elementpn = document.getElementById('pn')
        //console.log(model)
        elementpn.innerHTML= "Model: "+pn+""
    resolve('resolved')})
}
function st(st){
    return new Promise(async resolve =>{
        elementst= document.getElementById('st')
        //console.log(station)
        elementst.innerHTML= "Station: "+st+""
    resolve('resolved')})
}


//-----------------Funciones de procesamiento  ( Coordenadas de areas a inspeccionar )-----------//
let camid
let TA1x = 1576
let TA1y = 70
let TA2x = 1418
let TA2y = 74
let TA11x = 1304
let TA11y = 549
let TA12x = 1562
let TA12y = 636
let TA3x = 1044
let TA3y = 81
let TA4x = 726
let TA4y = 54
let TA9x = 770
let TA9y = 562
let TA10x = 1026
let TA10y = 635
let TA5x = 487
let TA5y = 93
let TA6x = 173
let TA6y = 73
let TA7x = 213
let TA7y = 569
let TA8x = 469
let TA8y = 645
let TA18x = 81
let TA18y = 664
let TA17x = 286
let TA17y = 626
let TA16x = 722
let TA16y = 661
let TA15x = 927
let TA15y = 618
let TA19x = 743
let TA19y = 259
let TA20x = 737
let TA20y = 62
let TA14x = 1466
let TA14y = 656
let TA13x = 1671
let TA13y = 613
let TATGx = 152
let TATGy = 150
let TA21x = 487
let TA21y = 222
let TA22x = 611
let TA22y = 131
let TB1x = 1719
let TB1y = 178
let TB2x = 1187
let TB2y = 108
let TB3x = 631
let TB3y = 121
let TB4x = 998
let TB4y = 455
async function recorTA(point) {
    return new Promise(async resolve => {
        switch (point) {
            //TA1
            case 1:
                /**** INICIO DE CAMARA 1 */
                //Cuadrante 1
                //TA1
                contextcanvasClen1.drawImage(fullimage, TA1x, TA1y, 118, 299, 0, 0, contextcanvasClen1.canvas.width, contextcanvasClen1.canvas.height)
                await Analiza(canvasClen1, 1)
                logresult(1, statusx)

                //TA2
                contextcanvasGlen1.drawImage(fullimage, TA2x, TA2y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                await Analiza(canvasGlen1, 2)
                logresult(2, statusx)

                //TA11
                contextcanvasGlen1.drawImage(fullimage, TA11x, TA11y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                await Analiza(canvasGlen1, 11)
                logresult(3, statusx)

                //TA12
                contextcanvasMlen1.drawImage(fullimage, TA12x, TA12y, 118, 312, 0, 0, contextcanvasMlen1.canvas.width, contextcanvasMlen1.canvas.height)
                await Analiza(canvasMlen1, 12)
                logresult(4, statusx)

                //TB1
                contextcanvasTB.drawImage(fullimage, TB1x, TB1y, 34, 52, 0, 0, contextcanvasTB.canvas.width, contextcanvasTB.canvas.height)
                await Analiza(canvasTB, 23)
                logresult(5, statusx)
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
                logresult(6, statusx)

                //TA4
                contextcanvasGlen1.drawImage(fullimage, TA4x, TA4y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                await Analiza(canvasGlen1, 4)
                logresult(7, statusx)

                //TA9
                contextcanvasGlen1.drawImage(fullimage, TA9x, TA9y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                await Analiza(canvasGlen1, 9)
                logresult(8, statusx)

                //TA10
                contextcanvasGlen1.drawImage(fullimage, TA10x, TA10y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                await Analiza(canvasGlen1, 10)
                logresult(9, statusx)

                //TB2
                contextcanvasTB.drawImage(fullimage, TB2x, TB2y, 34, 52, 0, 0, contextcanvasTB.canvas.width, contextcanvasTB.canvas.height)
                await Analiza(canvasTB, 24)
                logresult(10, statusx)
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
                await Analiza(canvasClen1, 5)
                logresult(11, statusx)

                contextcanvasTA6len1.drawImage(fullimage, TA6x, TA6y, 115, 322, 0, 0, contextcanvasTA6len1.canvas.width, contextcanvasTA6len1.canvas.height)
                await Analiza(canvasClen1, 6)
                logresult(12, statusx)

                contextcanvasGlen1.drawImage(fullimage, TA7x, TA7y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                await Analiza(canvasGlen1, 7)
                logresult(13, statusx)

                contextcanvasGlen1.drawImage(fullimage, TA8x, TA8y, 118, 330, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
                await Analiza(canvasGlen1, 8)
                logresult(14, statusx)

                //TB3
                contextcanvasTB.drawImage(fullimage, TB3x, TB3y, 34, 52, 0, 0, contextcanvasTB.canvas.width, contextcanvasTB.canvas.height)
                await Analiza(canvasTB, 25)
                logresult(15, statusx)
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
                await Analiza(canvasClen2, 18)
                logresult(16, statusx)

                contextcanvasClen2.drawImage(fullimage, TA17x, TA17y, 149, 378, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                await Analiza(canvasClen2, 17)
                logresult(17, statusx)

                contextcanvasTGlen2.drawImage(fullimage, TATGx, TATGy, 298, 99, 0, 0, contextcanvasTGlen2.canvas.width, contextcanvasTGlen2.canvas.height)
                await Analiza(canvasTGlen2, 27)
                logresult(18, statusx)
                await Evaluacion(4)
                contextcanvasnuevo4.drawImage(fullimage, 5, 1, 605, 1069, 0, 0, contextcanvasnuevo4.canvas.width, contextcanvasnuevo4.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspaste4.translate(1069, 605) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspaste4.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspaste4.drawImage(canvasnuevo4, 0, 0, 1677, 2138, -1069, -605, 1677, 2138) // Canvas donde se coloca la imagen ya rotada 
                // Imagen rotada
                contextcanvasCamara.drawImage(canvaspaste4, 464, 1069, 1067, 605, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                await pause()

                //TA16
                contextcanvasClen2.drawImage(fullimage, TA16x, TA16y, 149, 378, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                await Analiza(canvasClen2, 16)
                logresult(19, statusx)

                //TA15
                contextcanvasClen2.drawImage(fullimage, TA15x, TA15y, 149, 378, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                await Analiza(canvasClen2, 15)
                logresult(20, statusx)

                //TA19
                contextcanvasGlen2.drawImage(fullimage, TA19x, TA19y, 149, 418, 0, 0, contextcanvasGlen2.canvas.width, contextcanvasGlen2.canvas.height)
                await Analiza(canvasGlen2, 19)
                logresult(21, statusx)

                //TA20
                contextcanvasGlen2.drawImage(fullimage, TA20x, TA20y, 149, 418, 0, 0, contextcanvasGlen2.canvas.width, contextcanvasGlen2.canvas.height)
                await Analiza(canvasGlen2, 20)
                logresult(22, statusx)

                //TB4
                contextcanvasTB4.drawImage(fullimage, TB4x, TB4y, 66, 52, 0, 0, contextcanvasTB4.canvas.width, contextcanvasTB4.canvas.height)
                await Analiza(canvasTB4, 26)
                logresult(23, statusx)
                await Evaluacion(5)
                contextcanvasnuevo4.drawImage(fullimage, 695, 3, 605, 1069, 0, 0, contextcanvasnuevo4.canvas.width, contextcanvasnuevo4.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspasteC5.translate(1069, 605) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspasteC5.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspasteC5.drawImage(canvasnuevo4, 0, 0, 1677, 2138, -1069, -605, 1677, 2138) // Canvas donde se coloca la imagen ya rotada 
                //Imagen rotada
                contextcanvasCamara.drawImage(canvaspasteC5, 464, 1069, 1067, 605, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                await pause()

                //TA14
                contextcanvasClen2.drawImage(fullimage, TA14x, TA14y, 149, 378, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                await Analiza(canvasGlen2, 14)
                logresult(24, statusx)

                //TA13
                contextcanvasClen2.drawImage(fullimage, TA13x, TA13y, 149, 378, 0, 0, contextcanvasClen2.canvas.width, contextcanvasClen2.canvas.height)
                await Analiza(canvasClen2, 13)
                logresult(25, statusx)
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
                contextcanvasflalen3.drawImage(fullimage, TA21x, TA21y, 61, 555, 0, 0, contextcanvasflalen3.canvas.width, contextcanvasflalen3.canvas.height)
                await Analiza(canvasflalen3, 21)
                logresult(26, statusx)

                contextcanvasgolen3.drawImage(fullimage, TA22x, TA22y, 429, 795, 0, 0, contextcanvasgolen3.canvas.width, contextcanvasgolen3.canvas.height)
                await Analiza(canvasgolen3, 22)
                logresult(27, statusx)
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
        if (point == 1) {   rmin = 74, rmax = 205, gmin = 83, gmax = 240, bmin = 90, bmax = 225, criterio = .995, latapona = 500} // TA1 Actualizado * No tapona
        if (point == 2) { rmin = 68, rmax = 205, gmin = 85, gmax = 245, bmin = 90, bmax = 215, criterio = .995, latapona = 1000 }  //TA2 Actualizado *  
        if (point == 11) { rmin = 85, rmax = 210, gmin = 90, gmax = 230, bmin = 90, bmax = 220, criterio = .995, latapona = 3500 }  // TA11 Actualizado * 
        if (point == 12) { rmin = 85, rmax = 150, gmin = 95, gmax = 200, bmin = 100, bmax = 215, criterio = .995, latapona = 3500} // TA12 Actualizado
        if (point == 23) { rmin = 100, rmax = 190, gmin = 110, gmax = 200, bmin = 100, bmax = 200, criterio = .995, latapona = 1000 } //TB1
        // Cuadrante 2
        if (point == 3) { rmin = 78, rmax = 170, gmin = 90, gmax = 245, bmin = 90, bmax = 245, criterio = .995, latapona = 4000 } // TA3 Actualizado  *
        if (point == 4) { rmin = 86, rmax = 135, gmin = 95, gmax = 170, bmin = 90, bmax = 180, criterio = .995, latapona = 7000}  // TA4 Actualizado *
        if (point == 9) { rmin = 86, rmax = 150, gmin = 95, gmax = 180, bmin = 95, bmax = 195, criterio = .995, latapona = 5500}  // TA9 Actuaalizado * 
        if (point == 10) { rmin = 100, rmax = 160, gmin = 100, gmax = 190, bmin = 100, bmax = 190, criterio = .995, latapona = 8500 } // TA10 Actualizado *
        if (point == 24) { rmin = 110, rmax = 180, gmin = 125, gmax = 180, bmin = 110, bmax = 170, criterio = .995, latapona = 1140 }  //TB2
        // Cuadrante 3
        if (point == 5) { rmin = 80, rmax = 180, gmin = 90, gmax = 200, bmin = 90, bmax = 210, criterio = .995, latapona = 3000 }  // TA5 Actualizado * No tapona
        if (point == 6) { rmin = 95, rmax = 160, gmin = 105, gmax = 185, bmin = 90, bmax = 190, criterio = .995, latapona = 4000 }  // TA6 Actualizado  *
        if (point == 7) { rmin = 88, rmax = 170, gmin = 110, gmax = 200, bmin = 90, bmax = 210, criterio = .995, latapona = 5500 }  // TA7 Actualizado * Canvande
        if (point == 8) { rmin = 95, rmax = 215, gmin = 115, gmax = 230, bmin = 98, bmax = 215, criterio = .995, latapona = 5000 } // TA8 Actualizado  *
        if (point == 25) { rmin = 100, rmax = 190, gmin = 110, gmax = 215, bmin = 100, bmax = 190, criterio = .995, latapona = 1050 } //TB3
        // Cuadrante 4n
        if (point == 17) { rmin = 75, rmax = 165, gmin = 90, gmax = 185, bmin = 95, bmax = 210, criterio = .995, latapona = 7000} // TA17 Actualizado 
        if (point == 18) { rmin = 100, rmax = 160, gmin = 130, gmax = 200, bmin = 120, bmax = 200, criterio = .995, latapona = 7000} // TA18 Actualizado
        if (point == 27) { rmin = 90, rmax = 205, gmin = 105, gmax = 235, bmin = 90, bmax = 210, criterio = .995, latapona = 50000 } // TA27 
        // Cuadrante 5
        if (point == 15) { rmin = 90, rmax = 165, gmin = 120, gmax = 190, bmin = 126, bmax = 210, criterio = .995, latapona = 4000 } // TA15 Actualizado
        if (point == 16) { rmin = 110, rmax = 175, gmin = 130, gmax = 205, bmin = 130, bmax = 215, criterio = .995, latapona = 7000 } // TA16 Actualizado
        if (point == 19) { rmin = 96, rmax = 185, gmin = 120, gmax = 215, bmin = 120, bmax = 195, criterio = .995, latapona = 7500 } // TA19 Actualizado
        if (point == 20) { rmin = 96, rmax = 175, gmin = 120, gmax = 215, bmin = 130, bmax = 216, criterio = .995, latapona = 6500} // TA20 Actualizado
        if (point == 26) { rmin = 110, rmax = 165, gmin = 130, gmax = 205, bmin = 145, bmax = 223, criterio = .995, latapona = 5800 } //TB4
        // Cuadrante 6
        if (point == 13) { rmin = 85, rmax = 205, gmin = 95, gmax = 235, bmin = 100, bmax = 205, criterio = .995, latapona = 3000 } // TA13  Actualizado *
        if (point == 14) { rmin =85, rmax = 205, gmin = 95, gmax = 235, bmin = 105, bmax = 205, criterio = .995, latapona = 9000 } // TA14 Actualizado *
        // Cuadrante 7
        if (point == 21) { rmin = 67, rmax = 175, gmin = 70, gmax = 200, bmin = 75, bmax = 200, criterio = .995, latapona = 24100 } // TA21 Rectangulo ch
        if (point == 22) { rmin = 75, rmax = 200, gmin = 85, gmax = 245, bmin = 94, bmax = 245, criterio = .995, latapona = 10000} // TA22 Actualizado

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

      /* if (point == 14) { //Imprime por cada punto el conteo de pixeles
            console.log("Buenos: " + bueno)
            console.log("******")
            console.log("Malo: " + malo)
            console.log("Ruido:" + ruido)
            console.log("Finetuning:" + latapona)
            console.log("******")
            console.log("Pix Total:"+pixitotal)
             }
        console.log("Pix Total:"+pixitotal)*/

        let pixibuenos = bueno + ruido + latapona
        let porcentajebueno = pixibuenos / pixitotal
        /*let percent = pixitotal - ruido
        console.log("cobertura: " + percent + " pixeles restantes de ruido ")
        cobertura = pixitotal * percent
        console.log("cobertura en porcentaje :" + cobertura / 100 + "(%)")*/


        porcentajefinal = porcentajebueno.toFixed(4);
        if (porcentajefinal > .995) { porcentajefinal = 1 }  //valor final de pase al 99.6%
        porcentajeArray[point] = porcentajefinal
        mtxw[point] = porcentajefinal

        //porcentajeArray[point]= porcentajefinal
        //console.log("Pix Total:"+pixitotal)
        //console.log(pixibuenos)

        if (porcentajebueno > criterio) {
            statusx = "1"
            IAdesition[point]= " On hold "
        }
        else{
            statusx = "0"
        
        if(point == 1 || point == 2){ // se cumple condicion cuando el TA falle y llama a inspectora 
        await mlinspection(point)}
    }
        console.log("TA-" + point + ":" + porcentajefinal * 100 + "(%) ")//+" Status: "+status
        resolve('resolved')})
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
        if (p == 6) { x = 9, y = 1, w = 1264, h = 741 } //TA6
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
        if (p == 13) { x = 2, y = 3, w = 478, h = 85 } //TA13
        if (p == 14) { x = 20, y = 10, w = 460, h = 75 } //TA14
        //Cuadrante 7 
        if (p == 21) { x = 0, y = 6, w = 25, h = 450 } //TA21
        if (p == 22) { x = 91, y = 1, w = 447, h = 75 } //TA22

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

    //CUADRANTE 2
    if ((TAx == 3) && (statusx == '1')) {
        cuadroVerde3()
    } else if ((TAx == 3) && (statusx == '0')) {
        cuadroRojo3()
    }//Fin de if para TB1

    if ((TAx == 4) && (statusx == '1')) {
        cuadroVerde4()
    } else if ((TAx == 4) && (statusx == '0')) {
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
    contextfullimage.strokeRect(TA2x, TA2y, 118, 330)
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
    contextfullimage.strokeRect(TA12x, TA12y, 118, 312)
}

function cuadroVerde23() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TB1x, TB1y, 34, 52)
}
//Cuadrante 2
function cuadroVerde3() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA3x, TA3y, 118, 299)
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
   // contextfullimage.strokeRect(TATGx, TATGy, 298, 99)
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
    contextfullimage.strokeRect(TA14x, TA14y, 149, 378)
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
    contextfullimage.strokeRect(TA21x, TA21y, 61, 555)
}
function cuadroVerde22() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#76FF03"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA22x, TA22y, 429, 795)
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
    contextfullimage.strokeRect(TA2x, TA2y, 118, 330)
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
    contextfullimage.strokeRect(TA12x, TA12y, 118, 312)
}
//Cuadrante 2
function cuadroRojo23() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TB1x, TB1y, 118, 312)
}
function cuadroRojo3() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA3x, TA3y, 118, 299)
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

    contextfullimage.strokeStyle = "#00FFFF"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TB3x, TB3y, 34, 52)
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
    contextfullimage.strokeRect(TA14x, TA14y, 149, 378)
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
    contextfullimage.strokeRect(TA21x, TA21y, 61, 555)
}
function cuadroRojo22() {
    let fullimage = document.getElementById('CanvasFHD')
    let contextfullimage = fullimage.getContext('2d')

    contextfullimage.strokeStyle = "#FF0000"
    contextfullimage.lineWidth = 2
    contextfullimage.strokeRect(TA22x, TA22y, 429, 795)
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

                cuadranteArray[2] = logsave[3]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(11, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[3] = logsave[4]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(12, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[4] = logsave[5]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(23, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo
                break

            case 2:
                //Cuadrante 2
                cuadranteArray[0] = logsave[6]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(3, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[7]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(4, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[8]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(9, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[3] = logsave[9]
                valtus = cuadranteArray.some((e) => e == "0") // funcion para buscar dentro de un array solo un valor 
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(10, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[4] = logsave[10]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(24, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo
                break

            case 3:
                //Cuadrante 3
                cuadranteArray[0] = logsave[11]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(5, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[12]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(6, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[13]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(7, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[3] = logsave[14]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(8, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[4] = logsave[15]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(25, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo
                break
            case 4:
                //Cuadrante 4
                cuadranteArray[0] = logsave[16]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(18, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[17]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(17, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[18]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(27, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo
                break
            case 5:
                //Cuadrante 5
                cuadranteArray[0] = logsave[19]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(16, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[20]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(15, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[2] = logsave[21]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(19, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[3] = logsave[22]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(20, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[4] = logsave[23]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(26, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo
                break
            case 6:
                //Cuadrante 6
                cuadranteArray[0] = logsave[24]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(14, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[25]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(13, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo
                break
            case 7:
                //Cuadrante 7 
                cuadranteArray[0] = logsave[26]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(21, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                cuadranteArray[1] = logsave[27]
                valtus = cuadranteArray.some((e) => e == "0")
                if (valtus == true) { valtus = "0" } else { valtus = "1" }
                pointstatus(22, valtus)
                cuadranteArray = [] //Limpia matriz de trabajo

                //La evaluacion de todo el array se hara hasta el final del ultimo case
                //logsave[27] = ('1') //Dispensado pendiente de revisar 
                //turno 1
                let resultadofinal = logsave.some((e) => e == "0")
                //console.log(logsave)
                //let hora = 23
                if (resultadofinal == false) {
                    pass()
                    passturno() //tiene status
                    console.log("Unit---> Pass")
                } else {
                    fail()
                    failturno()

                    console.log("Unit---> Fail")
                }
                resultado = resultadofinal
                break
            default:
        }//fin de switch

        resolve('resolved')
    })
}

function agrupapasst2(turno, status, day,fecha) {
    return new Promise(async resolve => {
        const socket = io();
        socket.emit('agrupapasst2', { turno, status, day,fecha })
        resolve('resolved');
    })
}
function agrupardias(status,day,semana) {
    return new Promise(async resolve => {
        const socket = io();
        socket.emit('agrupardias', { status, day,semana })
        resolve('resolved');
    })
}
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
    //console.log(resulcons.result)
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
    //console.log(parseInt(datosday.rows[0].count, 10))
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

        if (point == 1) { camid = "ca77f42ad533ed070c2572debe799cecfb6176d2b51e38c51f692e5d1d0d9ef6" }
        if (point == 2) { camid = "2a1661fd03d75e8f75da4916a0fc38232cbb974756d14253f45633887f1107dc" }
        if (point == 3) { camid = "90e598aa84b34634093880c339289bede2a68eb9f30f00dc27ca89cb8729e9c0" } 
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

function captureimage() {// Resolve de 2 segundos
    return new Promise(async resolve => {

        let image = document.getElementById('CanvasFHD');
        let contexim2 = image.getContext('2d');

        var video = document.getElementById("video");

        w = image.width;
        h = image.height;

        contexim2.drawImage(video, 0, 0, image.width, image.height);
        //var dataURI = canvas.toDataURL('image/jpeg');
        //setTimeout(function fire(){resolve('resolved');},2000);//Temporal para programacion de secuencia
        resolve('resolved')
    });
}

function mapcams() {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const filtered = devices.filter(device => device.kind === 'videoinput');
            console.log('Cameras found', filtered);
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
        //let image1 = document.getElementById( 'fullimage' );
        //let contexim1 = image1.getContext( '2d' );        

        //var video = document.getElementById("webcam_conveyor");

        //w = image1.width;
        //h= image1.height;

        //contextfullimage.drawImage(fullimage,0,0,fullimage.width,fullimage.height);
        var dataURI = fullimage.toDataURL('image/jpeg');
        savepic(dataURI, snfile, point); //savepic(dataURI,point);
        //console.log("Pic Sent--"+sn+"--"+point);
        //setTimeout(function fire(){resolve('resolved');},2000);//Temporal para programacion de secuencia
        resolve('resolved')
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

function logsaving(snr, logdata) {
    socket.emit('logsaving', snr, logdata);
    //console.log("entre a logsaving")
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
    calis.src = "/../img/" + name + ".jpg"
}

function canbughide() { // funcion para esconder los canvas 
    return new Promise(async resolve => {
        document.getElementById('CanvasFHD').style.visibility = "hidden"
       // document.getElementById('canvasClen1').style.visibility = "hidden"
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

function canbugshow() {
    return new Promise(async resolve => {
        document.getElementById('CanvasFHD').style.visibility = "visible"
        document.getElementById('canvasClen1').style.visibility = "visible"
        document.getElementById('canvasMlen1').style.visibility = "visible"
        document.getElementById('canvasGlen1').style.visibility = "visible"
        document.getElementById('canvasClen2').style.visibility = "visible"
        document.getElementById('canvasTA6len1').style.visibility = "visible"
        document.getElementById('canvasGlen2').style.visibility = "visible"
        document.getElementById('canvasflalen3').style.visibility = "visible"
        document.getElementById('canvasgolen3').style.visibility = "visible"
        resolve('resolved')
    });
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

async function mlinspection(point) {
    return new Promise(async resolve => {
        switch(point){
            case 1: //TA1
                     model = new cvstfjs.ClassificationModel();
                     await model.loadModelAsync('../ml/TA1/model.json');
                     //const image = document.getElementById('canvasClen1');
                     result = await model.executeAsync(canvasClen1);
                     console.log(result)
                     //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                      pasa = result[0][0]
                      falla = result[0][1]
                     console.log("Unit pass" , pass)
                     console.log("Unit fail", fail)
                     if(pasa >= falla){ //Evalua el valor en la posicion 0 que da la redneuronal
                        //console.log("Unit pass" , pass)
                        statusx = "1" 
                        console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' :'Fail' }`)
                     }else{
                        statusx = "0"
                        console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                     }
                     
                     IAdesition[1]= statusx
                     break
            case 2://TA2
                      model = new cvstfjs.ClassificationModel();
                     await model.loadModelAsync('../ml/TA2/model.json');
                     //const image = document.getElementById('canvasClen1');
                     result = await model.executeAsync(canvasClen1);
                     console.log(result)
                     //console.log(result[0][0]) //Accede al elemento 0 del array en un objeto
                      pasa = result[0][0]
                      falla = result[0][1]
                     console.log("Unit pass" , pasa)
                     console.log("Unit fail", falla)
                     if(pasa >= falla){ //Evalua el valor en la posicion 0 que da la redneuronal
                        //console.log("Unit pass" , pass)
                        statusx = "1" 
                        console.log("AI Inspection: " + `${statusx == 1 ? 'Pass' :'Fail' }`)
                     }else{
                        statusx = "0"
                        console.log("AI Inspection: " + `${statusx == 0 ? 'Fail' : 'Pass'}`)
                     }
                     
                     IAdesition[2]= statusx
            break

        }
     resolve('resolved')})
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
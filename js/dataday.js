
//agregar datos 
async function passturno() {
   if (hora < 6) {
        //console.log("turno 3: " + hora)
        let status = 'pass'
        await mandarqueryt3(status,day,fecha,semana,snr)
    }
    if ((hora >= 6) && (hora <= 14)) { // Validacion para horario de T1
        //console.log("turno 1: " + hora)
        let status = 'pass'
        await mandarqueryt1(status,day,fecha,semana,snr)

    } else if ( (hora >=14) && (hora <= 22))  {
       // console.log("turno 2: " + hora)
        let status = 'pass'
        await mandarqueryt2(status,day,fecha,semana,snr)

    } else if ((hora == 23) || (hora != 23) && (hora <= 6) ) {
        //console.log("turno 3: " + hora)
        let status = 'pass'
        await mandarqueryt3(status,day,fecha,semana,snr)
    }
}
async function failturno() {
    if (hora < 6) {
       // console.log("turno 3: " + hora)
        let status = 'fail'
        await mandarqueryt3(status, day,fecha,semana,snr)

    }else if ( (hora >= 6) && (hora <= 14))  {
        //console.log("turno 1: " + hora)
        let status = 'fail'
        await mandarqueryt1(status, day,fecha,semana,snr)

    } else if ( (hora > 14) && (hora <= 22) ) {
        //console.log("turno 2: " + hora)
        let status = 'fail'
        await mandarqueryt2(status, day,fecha,semana,snr)

    }
    else if ((hora == 23) || (hora != 23) && (hora <= 6)) {
        //console.log("turno 3: " + hora)
        let status = 'fail'
        await mandarqueryt3(status, day,fecha,semana,snr)
    }
}


//querys todos los turnos

async function mandarqueryt1(status, day,fecha,semana,snr) {
    return new Promise(async resolve => {
        let turno1 = 1
        socketconection(turno1, status, day,fecha,semana,snr)//manda si es fail o pass y el turno (1)
       // console.log("entre al mandarquery turno1" + day)

        resolve('resolved')
    })
}

async function mandarqueryt2(status, day,fecha,semana,snr) {
    return new Promise(async resolve => {
        let turno2 = 2
        socketconection(turno2, status, day,fecha,semana,snr)//manda si es fail o pass y el turno (2)
        //console.log("entre al mandarquery t2" + day)
        resolve('resolved')
    })
}

async function mandarqueryt3(status, day,fecha,semana,snr) {
    return new Promise(async resolve => {
        let turno3 = 3
        socketconection(turno3, status, day,fecha,semana,snr)//manda si es fail o pass y el turno (3)
       // console.log("entre al mandarquery t3" + day)
        resolve('resolved')
    })
}
function socketconection(turno, status,day,fecha, semana,snr) {
    const socket = io();
   // socket.emit('socketconection', turno, status,day,fecha,semana,snr)
}

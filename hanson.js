//***************************************************** Setup de eventos a escuchar
require('events').EventEmitter.defaultMaxListeners = 20
//***************************************************** HTTPS server setup
//-----* Express inicia servidor / carpeta raiz
//------------------------------------Express inicia servidor 
let clientesConectados = [];
const express = require('express')
const app = express()
const fs = require('fs')
//const ImageDataURI = require('image-data-uri')
app.use(express.static(__dirname))//Carpeta de donde sirve / carpeta raiz public

const server = app.listen(8888, () => {
    console.log('Servidor web iniciado')
})

//-----* Filesystem module object
var fss = require('fs')
//-----* https module object
var https = require('https')

//***************************************************** Seccion Socket 
var io = require('socket.io')(server)

io.on('connection', (socket) => {

    socket.on('ejemplo', async function () { await socketfunction() })

})//close io.on

//***************************************************** Postgres module object
const { Pool } = require('pg')
postgresdb = new Pool({
    host: 'localhost',
    user: 'ialab',
    password: 'ialab',
    database: 'sofia',
})
let client
// release the client


//***************************************************** Files Handler
io.on('connection', (socket) => {
    socket.on('deletefile', function (path) {
        deletef(path);
    }); //Close socket

    socket.on('picsaving', async function (datauri, serial, sqty) {
        await savingpic(datauri, serial, sqty);
        console.log("recibe", serial, sqty);
    });

    socket.on('picsavingpass', async function (datauri, serial, sqty) {
        await savingpicpass(datauri, serial, sqty);
        console.log("recibe", serial, sqty);
    });
   
    socket.on('picsavingfail', async function (datauri, serial, sqty) {
        await savingpicfail(datauri, serial, sqty);
        console.log("recibe", serial, sqty);
    });
    /*socket.on('picsavigrecortemalas', async function (datauri, serial, sqty) {
        await savingrecortemalas(datauri, serial, sqty);
        console.log("recibe", serial, qty);
    });*/

    socket.on('logsaving', async function (sn, logsaving,logsave) { // Funcion de ejemplo borrar no importante
        savinglog(sn, logsaving,logsave)
    });
    socket.on('renombrasnr', function (snr) { // conexion con main_script
        renombraF(snr);
    });
    //Socket BD
    socket.on('socketconection', async function (turno, status,day,fecha,semana,serial) { //datos del front
        await partn(turno, status,day,fecha,semana,serial);

        //console.log("entre al socketconection")
    }); //Close socket

    //agrupapass t2 se agrego
    socket.on('agrupapasst2', async function (datospf) {
        agrupapasst2(datospf.turno, datospf.status, datospf.day,datospf.fecha,datospf.semana)
        console.log("entre a agrupapass t2")
    });

    socket.on('agrupardias', async function (datospfd) {
        agrupardias(datospfd.status, datospfd.day,datospfd.semana)
        console.log("entre a agrupar dias")
    });

    //agrupa fail se agrego
    socket.on('agrupafailt1', async function () {
        await agrupafailt1()
        console.log("entre a agrupafail t1")
    });
    //agrupa fail se agrego
    socket.on('agrupafailt2', async function () {
        await agrupafailt2()
        console.log("entre a agrupafail t2")
    });

    socket.on('abrir', async function () {
        await abrir()
        console.log("conectado")
    });

    socket.on('cerrar', async function () {
        await cerrar()
        console.log("desconectado")
    })
    socket.on("guardarNombre", (nombre, ne) => {
        const fs = require("fs");
        let d = new Date();
    
        hours = d.getHours();
        now = d.toLocaleString();
        console.log(now);
        const logFilePath =
          "C:/Users/gdl3_mds/myapp/projects/lucy/soportes/nombres.txt";
        fs.appendFile(logFilePath, `\n${nombre} ${ne}(${now})`, (err) => {
          if (err) throw err;
          console.log("nombre y numero de empleado guardado correctamente");
        
          socket.emit("nombreGuardado", "Tu nombre ha sido guardado");
        });
      });
    socket.on('exp', async function () {
        await experiment()
        console.log("Experiment ...")
    })
})

async function deletef(path) {
    await deletefile(path);
}

async function deletefile(path) {

    return new Promise(async resolve => {

        netpath = path;
        fs.unlinkSync(netpath)
        console.log("Archivo borrado: " + netpath);

    });//Cierra Promise
}

//-----* Guarda imagen desde URI
async function savingpic(datauri, serial, sqty) {

    let filePath;
    const ImageDataURI = require('image-data-uri');
    return new Promise(async resolve => {
        //console.log("Variables:"+serial+' - '+sqty+'');// temporal para ver que esta rebiendo 

        //C:/Users/mayra_ayala/Documents/Aquiles/img/
        //C:/Users/gdl3_mds/myapp/timsamples/
        let filePath = 'C:/Users/gdl3_mds/myapp/projects/timsamples/' + serial + '';//Ruta de las carpetas por serial
        let filevalidation = fs.existsSync(filePath);

        if (filevalidation) {

            filePath = '' + filePath + '/' + sqty + '';
            ImageDataURI.outputFile(datauri, filePath).then(res => console.log(res));
        }
        else {
            fs.mkdir(filePath, (error) => {
                if (error) {
                    console.log(error.message);//en caso de que el folder ya exista manda un error y evita hacer otro folder con el mismo nombre.
                }
                filePath = '' + filePath + '/' + sqty + '';
                ImageDataURI.outputFile(datauri, filePath).then(res => console.log(res));
                console.log("Directorio creado");
            });
        }
    });//Cierra Promise
}

//Funcion para renombrar carpeta F 
async function renombraF(serial) {
    fs.rename('C:/Users/gdl3_mds/myapp/projects/timsamples/' + serial,
        'C:/Users/gdl3_mds/myapp/projects/timsamples/' + serial + '_F',
        function (err) {
            if (err)
                console.log('Error de renombramiento');
        });
}

//guardar imagen recortada

async function savingpicfail(datauri, serial, sqty,point) {

    let filePath;
    const ImageDataURI = require('image-data-uri');
    return new Promise(async resolve => {
        //console.log("Variables:"+serial+' - '+sqty+'');// temporal para ver que esta rebiendo 

        //C:/Users/mayra_ayala/Documents/Aquiles/img/
        //C:/Users/gdl3_mds/myapp/timsamples/
        let filePath = 'C:/Users/gdl3_mds/myapp/projects/lucy/recortes/fail/TA' + sqty + '';//Ruta de las carpetas por serial
        //let filePath = 'C:/Users/gdl3_mds/myapp/projects/timsamples/' + serial + '';//Ruta de las carpetas por serial
        let filevalidation = fs.existsSync(filePath);

        if (filevalidation) {

            filePath = '' + filePath + '/' + serial + '';
            ImageDataURI.outputFile(datauri, filePath).then(res => console.log(res));
        }
        else {
            fs.mkdir(filePath, (error) => {
                if (error) {
                    console.log(error.message);//en caso de que el folder ya exista manda un error y evita hacer otro folder con el mismo nombre.
                }
                filePath = '' + filePath + '/' + serial + '';
                ImageDataURI.outputFile(datauri, filePath).then(res => console.log(res));
                console.log("Directorio creado");
            });
        }
    });//Cierra Promise
}

async function savingpicpass(datauri, serial, sqty,point) {

    let filePath;
    const ImageDataURI = require('image-data-uri');
    return new Promise(async resolve => {
        //console.log("Variables:"+serial+' - '+sqty+'');// temporal para ver que esta rebiendo 

        //C:/Users/mayra_ayala/Documents/Aquiles/img/
        //C:/Users/gdl3_mds/myapp/timsamples/
        let filePath = 'C:/Users/gdl3_mds/myapp/projects/lucy/recortes/pass/TA' + sqty + '';//Ruta de las carpetas por serial
        //let filePath = 'C:/Users/gdl3_mds/myapp/projects/timsamples/' + serial + '';//Ruta de las carpetas por serial
        let filevalidation = fs.existsSync(filePath);

        if (filevalidation) {

            filePath = '' + filePath + '/' + serial + '';
            ImageDataURI.outputFile(datauri, filePath).then(res => console.log(res));
        }
        else {
            fs.mkdir(filePath, (error) => {
                if (error) {
                    console.log(error.message);//en caso de que el folder ya exista manda un error y evita hacer otro folder con el mismo nombre.
                }
                filePath = '' + filePath + '/' + serial + '';
                ImageDataURI.outputFile(datauri, filePath).then(res => console.log(res));
                console.log("Directorio creado");
            });
        }
    });//Cierra Promise
}
/*async function savingrecortebuenas(datauri, serial, sqty, point) {

    let filePath;
    const ImageDataURI = require('image-data-uri');
    return new Promise(async resolve => {
        //console.log("Variables:"+serial+' - '+sqty+'');// temporal para ver que esta rebiendo 

        //C:/Users/mayra_ayala/Documents/Aquiles/img/
        //C:/Users/gdl3_mds/myapp/timsamples/
        let filePath = 'C:/Users/gdl3_mds/myapp/projects/lucy/recortes/pass/TA' + sqty + '';//Ruta de las carpetas por serial
        //let filePath = 'C:/Users/gdl3_mds/myapp/projects/timsamples/' + serial + '';//Ruta de las carpetas por serial
        let filevalidation = fs.existsSync(filePath);
        console.log("punto en el back: " + sqty)
        if (filevalidation) {

            filePath = '' + filePath + '/' + serial + '';
            ImageDataURI.outputFile(datauri, filePath).then(res => console.log(res));
        }
        else {
            fs.mkdir(filePath, (error) => {
                if (error) {
                    console.log(error.message);//en caso de que el folder ya exista manda un error y evita hacer otro folder con el mismo nombre.
                }
                filePath = '' + filePath + '/' + serial + '';
                ImageDataURI.outputFile(datauri, filePath).then(res => console.log(res));
                console.log("Directorio creado");
            });
        }
    });//Cierra Promise
}*/
/*async function savingrecortemalas(datauri, serial, sqty, point) {

    let filePath;
    const ImageDataURI = require('image-data-uri');
    return new Promise(async resolve => {
        //console.log("Variables:"+serial+' - '+sqty+'');// temporal para ver que esta rebiendo 

        //C:/Users/mayra_ayala/Documents/Aquiles/img/
        //C:/Users/gdl3_mds/myapp/timsamples/
        let filePath = 'C:/Users/gdl3_mds/myapp/projects/lucy/recortes/fail/TA' + sqty + '';//Ruta de las carpetas por serial
        //let filePath = 'C:/Users/gdl3_mds/myapp/projects/timsamples/' + serial + '';//Ruta de las carpetas por serial
        let filevalidation = fs.existsSync(filePath);
        console.log("punto en el back: " + sqty)
        if (filevalidation) {

            filePath = '' + filePath + '/' + serial + '';
            ImageDataURI.outputFile(datauri, filePath).then(res => console.log(res));
        }
        else {
            fs.mkdir(filePath, (error) => {
                if (error) {
                    console.log(error.message);//en caso de que el folder ya exista manda un error y evita hacer otro folder con el mismo nombre.
                }
                filePath = '' + filePath + '/' + serial + '';
                ImageDataURI.outputFile(datauri, filePath).then(res => console.log(res));
                console.log("Creando directorios");
            });
        }
    });//Cierra Promise
}*/
function savinglog(sn, logdata,logsave) {
    console.log("entre a la savinglog")
    let datoc = logsave.toString()
    let datoscadena = '\n'+ logdata + datoc + '\n'
    let logpath = 'C:/Users/gdl3_mds/myapp/projects/timsamples/' + sn + '/log.txt';
    console.log(logsave)
    fs.writeFile(logpath,datoscadena, function (err) {
        if (err) throw err;
    });
}
//-----------------------------QUERYS BD------------------------//
//agregar t1
async function partn(turno, status, day,fecha,semana,serial) {

    console.log("entre a insertar")
    let pg = "INSERT INTO unidades VALUES (" + turno + ",'" + status + "','" + day + "','" + fecha + "'," + semana + ",'" + serial + "' )"
    console.log(pg)
    client.query(pg, (err, result) => {
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        console.log(result.rows)
        
    })
    //})
}

async function agrupapasst2(turno, status, day,fecha) {
    console.log("bd connected")
    let up = "SELECT COUNT (*) FROM unidades WHERE turno = (" + turno + ") AND status = ('" + status + "') AND day = ('" + day + "') AND fecha = ('" + fecha + "') ";
    client
        .query(up)
        .then((result) => { io.emit('qtyP2', { result, turno, status, day,fecha }); }) 
        .catch((err) => console.error('Error executing query', err.stack))

}

async function agrupardias(status, day,semana) {
    console.log("bd connected")
    let upf = "SELECT COUNT (*) FROM unidades WHERE status = ('" + status + "') AND day = ('" + day + "')  AND semana =("+semana+") ";
    client
        .query(upf)
        .then((result) => { io.emit('qtyD', { result, status, day,semana}); }) 
        .catch((err) => console.error('Error executing query', err.stack))

}

async function abrir() {
    // return new Promise(async resolve => {
    client = await postgresdb.connect()
    //resolve('resolved');
    //})

}
async function cerrar() {
    return new Promise(async resolve => {
        client.end()
        client.release()
        //postgresdb.release()
        resolve('resolved');
    })

}
//experimento para saber los
async function experiment() {
    console.log("total", postgresdb.totalCount)
    console.log("idle", postgresdb.idleCount)
    console.log("clientes esperando", postgresdb.waitingCount)

}

/*
//***************************************************** TCP/IP PLC TESLA
let plc_endresponse = 0
io.on('connection', (socket) => {

    socket.on('plc_response', function (result_matrix) {
        plcdatasender(result_matrix)
        console.log(result_matrix)
    })

})

var net = require('net')
var tcpipserver = net.createServer(function (connection) {
    console.log('TCP client connected')

    connection.write('Handshake ok!\r\n')

    connection.on('data', function (data) { io.emit('Timsequence_start', data.toString()); console.log("Analisis in process...") })

    //Responde a PLC cuando termine inspeccion
    setTimeout(function respuesta() {
        estadoconexion = connection.readyState
        console.log("Comunicacion con el plc :" + connection.readyState)

        if (estadoconexion == 'closed') {
            console.log("Puerto de PLC cerrado reintento en 1min...")
        }
        if (estadoconexion == 'open') {
            connection.write(plc_endresponse)
        }

    }, 42000) // tiempo de secuencia completa 40s para responder
})

function plcdatasender(result_matrix) {
    matrixtostring = result_matrix.toString()
    plc_endresponse = matrixtostring
    //console.log(plc_endresponse)
}

tcpipserver.listen(40000, function () {
    console.log('PLC Port 40000 listening...')
})
*/
// 
//***************************************************** TCP/IP PLC TESLA

let plc_endresponse = 0
io.on('connection', (socket) => {

    socket.on('plc_response', function (result_matrix) {
        plcdatasender(result_matrix)
        //console.log(result_matrix)
    })
})

var net = require('net')
var tcpipserver = net.createServer(function (connection) {
 try {  
    console.log('Bandera de inicio de PLC...Unidad clampeada')
    connection.write('Handshake ok!\r\n')
    clientesConectados=[]
    clientesConectados.push(connection);

    connection.on('data', function (data) { 
        console.log('Datos recibidos de PLC',  data.toString())
        io.emit('Timsequence_start', data.toString()); 
        console.log("Analisis in process...") })

//Responde a PLC cuando termine inspeccion
// Implementación de keep-alive
connection.on('timeout', function () {
    console.log('Keep-alive: Reenviando paquete de ping...');
    connection.write('Ping\r\n');
  });

connection.on('close', function () {
    console.log('Keep-alive: Conexión cerrada. ');
    // Reintentar la conexión
  });

} catch (e){
    console.error(e.name + ": " + e.message)
    console.log("PLC NO RESPONDE EN TIEMPO A LA RESPUESTA DE PRUEBA...")
}
})

function plcdatasender(result_matrix) {
    clientesConectados.forEach(socket=>{
    matrixtostring = result_matrix.toString()
    plc_endresponse = matrixtostring
    console.log("Cadena enviada a PLC",matrixtostring)
    try {
        estadoconexion = socket.readyState
        console.log("Comunicacion con el plc :" + socket.readyState)
        if (estadoconexion == 'closed') {
            console.log("Puerto de PLC cerrado")
        }
        if (estadoconexion == 'open') {
            socket.write(plc_endresponse)
        }
        } catch (e){
        console.error(e.name + ": " + e.message)
        console.log("PLC NO RESPONDE")
        }
    })
    
}


tcpipserver.listen(40000, function () {
    console.log('PLC Port 40000 listening...')
})


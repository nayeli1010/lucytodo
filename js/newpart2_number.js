//l TP2X = 949//918//510
//let TP2Y = 74//127//416
async function sequence2() {
    cuadranteArraynew = []// Reinicia valor para retrabajar cuadrante
    porcentajeArray = []// Reinicia valor para retrabajar cuadrante
    canbughide()
    for (point = 1; point < 4; point++) {
        console.log("entre a sequence 2")
        await open_cam(point)
        await captureimage()
        await recorTA32(point)
        await stopcam()
    }
    if (pn == 'LFTM1135558-64-A' || pn == 'LFTM1135558-03-D') {
        await evaluaciondos()
        plc_responsep2(logsave)
    }
    setTimeout(function fire() { location.reload() }, 2000);// temporizador para limpiar pantalla
}


async function recorTA32(point) {
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
                contextcanvasGlen1.drawImage(fullimage, 1077, 74, 113, 312, 0, 0, contextcanvasGlen1.canvas.width, contextcanvasGlen1.canvas.height)
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

                //TA19 418,149
                contextcanvasGlen2.drawImage(fullimage, TA19x, TA19y, 418, 149, 0, 0, contextcanvasGlen2.canvas.width, contextcanvasGlen2.canvas.height)
                await Analiza(canvasGlen2, 19)
                logresult(21, statusx)


                //TA20 418,149
                contextcanvasGlen2.drawImage(fullimage, TA20x, TA20y, 418, 149, 0, 0, contextcanvasGlen2.canvas.width, contextcanvasGlen2.canvas.height)
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
                // await Evaluacion(6)
               /* contextcanvasnuevo4.drawImage(fullimage, 1315, 7, 605, 1069, 0, 0, contextcanvasnuevo4.canvas.width, contextcanvasnuevo4.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspasteC6.translate(1069, 605) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspasteC6.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspasteC6.drawImage(canvasnuevo4, 0, 0, 1677, 2138, -1069, -605, 1677, 2138) // Canvas donde se coloca la imagen ya rotada 
                //Imagen rotada 
                contextcanvasCamara.drawImage(canvaspasteC6, 464, 1069, 1067, 605, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
*/
                resolve('resolved')
                await snapshot(point)
                await pause()
                break
            /** INICIO CUADRANTE 3 */
           case 3:
                contextcanvasflalen3.drawImage(fullimage, TA21x, TA21y, 561, 77, 0, 0, contextcanvasflalen3.canvas.width, contextcanvasflalen3.canvas.height)
                await Analiza(canvasflalen3, 21)
                logresult(26, statusx)
               
                contextcanvasgolen3.drawImage(fullimage, TA22x, TA22y, 675, 326, 0, 0, contextcanvasgolen3.canvas.width, contextcanvasgolen3.canvas.height)
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
async function recorTAp2() {
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
               
                 await evaluaciondos(1)
                

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
                
                    await evaluaciondos(2)
                

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
                
                //await Evaluacion(4)
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
                

                //TA19 418,149
                contextcanvasGlen2.drawImage(fullimage, TA19x, TA19y, 418, 149, 0, 0, contextcanvasGlen2.canvas.width, contextcanvasGlen2.canvas.height)
                await Analiza(canvasGlen2, 19)
                logresult(21, statusx)
               

                //TA20 418,149
                contextcanvasGlen2.drawImage(fullimage, TA20x, TA20y, 418, 149, 0, 0, contextcanvasGlen2.canvas.width, contextcanvasGlen2.canvas.height)
                await Analiza(canvasGlen2, 20)
                logresult(22, statusx)
              

                //TB4
                contextcanvasTB4.drawImage(fullimage, TB4x, TB4y, 66, 52, 0, 0, contextcanvasTB4.canvas.width, contextcanvasTB4.canvas.height)
                await Analiza(canvasTB4, 26)
                logresult(23, statusx)
               
                    await evaluaciondos(4)
                

                //await Evaluacion(5)
                contextcanvasnuevo4.drawImage(fullimage, 695, 3, 605, 1069, 0, 0, contextcanvasnuevo4.canvas.width, contextcanvasnuevo4.canvas.height) // Canvas donde con imagen vertical original 
                contextcanvaspasteC5.translate(1069, 605) //Punto donde va comenzar a realizar la translacion de la imagen
                contextcanvaspasteC5.rotate(270 * Math.PI / 180) //Formula para convertir el angulo en radianes
                contextcanvaspasteC5.drawImage(canvasnuevo4, 0, 0, 1677, 2138, -1069, -605, 1677, 2138) // Canvas donde se coloca la imagen ya rotada 
                //Imagen rotada
                contextcanvasCamara.drawImage(canvaspasteC5, 464, 1069, 1067, 605, 0, 0, 935, 518) //REcorte de primer cuadrante tomada de fullimag
                await pause()

                resolve('resolved')
                await snapshot(point)
                await pause()
                break
            case 3:
                contextcanvasflalen3.drawImage(fullimage, TA21x, TA21y, 561, 77, 0, 0, contextcanvasflalen3.canvas.width, contextcanvasflalen3.canvas.height)
                await Analiza(canvasflalen3, 21)
                
                contextcanvasgolen3.drawImage(fullimage, TA22x, TA22y, 675, 326, 0, 0, contextcanvasgolen3.canvas.width, contextcanvasgolen3.canvas.height)
                await Analiza(canvasgolen3, 22)

                    await evaluaciondos(5)
                

                //await Evaluacion(7)
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
        resolve('resolved')
    })
}

async function analiza32(){
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
        if (point == 1) { rmin = 130, rmax = 145, gmin = 130, gmax = 165, bmin = 120, bmax = 145, criterio = 1, latapona = 3000 } // TA1 Actualizado * No tapona
        if (point == 2) { rmin = 123, rmax = 183, gmin = 137, gmax = 216, bmin = 112, bmax = 185, criterio = 1, latapona = 3000 }  //TA2 Actualizado *  
        if (point == 11) { rmin = 135, rmax = 175, gmin = 155, gmax = 195, bmin = 135, bmax = 165, criterio = 1, latapona = 3000 }  // TA11 Actualizado * //tapona para regular
        if (point == 12) { rmin = 140, rmax = 160, gmin = 158, gmax = 190, bmin = 130, bmax = 162, criterio = 1, latapona = 3000 } // TA12 Actualizado //tapona para regular
        if (point == 23) { rmin = 113, rmax = 150, gmin = 125, gmax = 170, bmin = 105, bmax = 145, criterio = .995, latapona = 1000 } //TB1
        //if ((point == 28) && (pn == 'LFTM1135558-16-B' || pn == 'LFTM1135558-55-A')) { rmin = 100, rmax = 205, gmin = 115, gmax = 240, bmin = 100, bmax = 200, criterio = .995, latapona = 3000 } //TP1
        // Cuadrante 2
        if (point == 3) { rmin = 122, rmax = 224, gmin = 134, gmax = 222, bmin = 110, bmax = 197, criterio = 1, latapona = 3000 } // TA3 Actualizado  *
        if (point == 4) { rmin = 119, rmax = 188, gmin = 127, gmax = 221, bmin = 104, bmax = 194, criterio = 1, latapona = 0 }  // TA4 Actualizado *
        if (point == 9) { rmin = 108, rmax = 192, gmin = 127, gmax = 237, bmin = 105, bmax = 206, criterio = 1, latapona = 0 }  // TA9 Actuaalizado * 
        if (point == 10) { rmin = 155, rmax = 182, gmin = 172, gmax = 202, bmin = 145, bmax = 175, criterio = 1, latapona = 0 } // TA10 Actualizado * //tapona para regular
        if (point == 24) { rmin = 145, rmax = 216, gmin = 163, gmax = 238, bmin = 135, bmax = 217, criterio = .995, latapona = 1000 }  //TB2
        if ((point == 29) && (pn == 'LFTM1135558-16-B' || pn == 'LFTM1135558-55-A')) { rmin = 100, rmax = 195, gmin = 120, gmax = 235, bmin = 110, bmax = 210, criterio = .995, latapona = 3000 }//TP2 

        // Cuadrante 3 
        if (point == 5) { rmin = 140, rmax = 165, gmin = 159, gmax = 195, bmin = 135, bmax = 169, criterio = 1, latapona = 0 }  // TA5 Actualizado * No tapona
        if (point == 6) { rmin = 128, rmax = 143, gmin = 148, gmax = 158, bmin = 120, bmax = 135, criterio = 1, latapona = 0 }  // TA6 Actualizado  *
        if (point == 7) { rmin = 115, rmax = 158, gmin = 128, gmax = 179, bmin = 105, bmax = 155, criterio = 1, latapona = 0 }  // TA7 Actualizado * Canvande
        if (point == 8) { rmin = 112, rmax = 204, gmin = 130, gmax = 230, bmin = 110, bmax = 206, criterio = 1, latapona = 0 } // TA8 Actualizado  *
        if (point == 25) { rmin = 134, rmax = 176, gmin = 170, gmax = 210, bmin = 145, bmax = 183, criterio = .995, latapona = 1800 } //TB3
        if ((point == 30) && (pn == 'LFTM1135558-16-B' || pn == 'LFTM1135558-55-A')) { rmin = 95, rmax = 210, gmin = 105, gmax = 215, bmin = 90, bmax = 200, criterio = .995, latapona = 400 }//TP3

        // Cuadrante 4n
        if (point == 17) { rmin = 135, rmax = 188, gmin = 149, gmax = 207, bmin = 126, bmax = 185, criterio = .995, latapona = 0 } // TA17 Actualizado 
        if (point == 18) { rmin = 143, rmax = 182, gmin = 165, gmax = 208, bmin = 138, bmax = 180, criterio = .995, latapona = 0 } // TA18 Actualizado
        if (point == 27) { rmin = 119, rmax = 186, gmin = 150, gmax = 210, bmin = 135, bmax = 184, criterio = .995, latapona = 0 } // TA27 
        // Cuadrante 5
        if (point == 15) { rmin = 138, rmax = 211, gmin = 151, gmax = 245, bmin = 125, bmax = 218, criterio = .995, latapona = 0 } // TA15 Actualizado
        if (point == 16) { rmin = 103, rmax = 211, gmin = 140, gmax = 245, bmin = 120, bmax = 212, criterio = .995, latapona = 0 } // TA16 Actualizado
        if (point == 19) { rmin = 140, rmax = 156, gmin = 158, gmax = 173, bmin = 132, bmax = 145, criterio = .995, latapona = 0 } // TA19 Actualizado
        if (point == 20) { rmin = 109, rmax = 211, gmin = 121, gmax = 231, bmin = 101, bmax = 204, criterio = .995, latapona = 0 } // TA20 Actualizado
        if (point == 26) { rmin = 115, rmax = 191, gmin = 165, gmax = 215, bmin = 140, bmax = 189, criterio = .995, latapona = 0 } //TB4
        // Cuadrante 6
        if (point == 13) { rmin = 135, rmax = 146, gmin = 148, gmax = 160, bmin = 122, bmax = 136, criterio = .995, latapona = 0 } // TA13  Actualizado *
        if (point == 14) { rmin = 134, rmax = 234, gmin = 148, gmax = 255, bmin = 125, bmax = 231, criterio = .995, latapona = 0 } // TA14 Actualizado *
        // Cuadrante 7
        if (point == 21) { rmin = 102, rmax = 185, gmin = 105, gmax = 182, bmin = 96, bmax = 143, criterio = .995, latapona = 0 } // TA21 Rectangulo ch
        if (point == 22) { rmin = 74, rmax = 237, gmin = 68, gmax = 255, bmin = 44, bmax = 215, criterio = 1, latapona = 0 } // TA22 Actualizado

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

        /*if (point == 19) { //Imprime por cada punto el conteo de pixeles
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
            IAdesition[point] = " On hold "
        }
        else {
            statusx = "0"

            if (point == 1 || point == 2 || point == 3 || point == 4 || point == 5 || point == 6 || point == 7 || point == 8 || point == 9 || point == 10 || point == 11 || point == 12 || point == 22) { // se cumple condicion cuando el TA falle y llama a inspectora 
                await mlinspection(point)
            }
        }
        console.log("TA-" + point + ":" + porcentajefinal * 100 + "(%) ")//+" Status: "+status
        resolve('resolved')
    })



}

async function evaluaciondos(pointanew) {
    let valtusnew
    return new Promise(async resolve => {
        switch (pointanew) {
            case 1://Cuadrante 1 a evaluar de nuevo numero de parte 
                cuadranteArraynew[0] = logsave[1]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(1, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[1] = logsave[2]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(2, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[2] = logsave[3]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(11, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[3] = logsave[4]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(12, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[4] = logsave[5]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(23, valtusnew)
                cuadranteArraynew = []
                break
            case 2:
                cuadranteArraynew[0] = logsave[6]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(3, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[1] = logsave[7]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(4, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[2] = logsave[8]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(9, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[3] = logsave[9]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(10, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[4] = logsave[10]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(24, valtusnew)
                cuadranteArraynew = []
                break
            case 3:
                cuadranteArraynew[0] = logsave[11]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(18, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[1] = logsave[12]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(17, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[2] = logsave[13]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(27, valtusnew)
                cuadranteArraynew = []
                break
            case 4:
                cuadranteArraynew[0] = logsave[14]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(15, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[1] = logsave[15]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(16, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[2] = logsave[16]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(19, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[3] = logsave[17]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(20, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[4] = logsave[18]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(26, valtusnew)
                cuadranteArraynew = []
                break
            case 5:
                cuadranteArraynew[0] = logsave[19]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(21, valtusnew)
                cuadranteArraynew = []

                cuadranteArraynew[1] = logsave[20]
                valtusnew = cuadranteArraynew.some((e) => e == "0")
                if (valtusnew == true) { valtusnew = "0" } else { valtusnew == "1" }
                pointstatus(22, valtusnew)
                cuadranteArraynew = []
                
                //logsave.fill('1') 
                console.log('evaluacion: ',logsave)
                let resultadofinal = logsave.some((e) => e == "0")
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
        }
        resolve('resolved')
    })
}

function plc_responsep2(logsave){
    return new Promise(async resolve =>{
        porcentajeArray= 
        ""+snr+"\nCuadrante :1\n"+
        "TA1-:  "+"status :"+logsave[1]+", "+"percent -->  "+porcentajeArray[1]*100+"(%)   "  + `IA Inspection : ${IAdesition[1] == 0 ? 'Fail' :'Pass' } ` + "\n" + 
        "TA2-:  "+"status :"+logsave[2]+", "+"percent -->  "+porcentajeArray[2]*100+"(%)  "   +  `IA Inspection : ${IAdesition[2] == 0 ? 'Fail' :'Pass' } ` + "\n"  +
        "TA11-: "+"status :"+logsave[11]+", "+"percent -->  "+porcentajeArray[11]*100+"(%)\n"  +  
        "TA12-: "+"status :"+logsave[12]+", "+"percent -->  "+porcentajeArray[12]*100+"(%)   " + `IA Inspection: ${IAdesition[12] == 0 ? 'Fail' :'Pass' } ` + "\n" + 
        "TB1-:  "+"status :"+logsave[23]+", "+"percent -->  "+porcentajeArray[23]*100+"(%)   " +  `IA Inspection: ${IAdesition[23] == 0 ? 'Fail' :'Pass' } ` + "\n" + 
           
        //Cuadrante 2 
                "Cuadrante :2\n"+
        "TA3-:  "+"status :"+logsave[3]+",  "+"percent -->  "+porcentajeArray[3]*100+"(%)   " + `IA Inspection: ${IAdesition[3] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA4-:  "+"status :"+logsave[4]+",  "+"percent -->  "+porcentajeArray[4]*100+"(%)   " + `IA Inspection: ${IAdesition[4] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA9-:  "+"status :"+logsave[9]+",  "+"percent -->  "+porcentajeArray[9]*100+"(%)   " + `IA Inspection: ${IAdesition[9] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA10-: "+"status :"+logsave[10]+",  "+"percent -->  "+porcentajeArray[10]*100+"(%)  " + `IA Inspection: ${IAdesition[10] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TB2-:  "+"status :"+logsave[24]+",  "+"percent -->  "+porcentajeArray[24]*100+"(%) " + `IA Inspection: ${IAdesition[24] == 0 ? 'Fail' :'Pass' } ` + "\n\n" +
      
                "Cuadrante :4\n"+
        "TA17-: "+"status :"+logsave[17]+", "+"percent -->  "+porcentajeArray[17]*100+"(%)  " + `IA Inspection : ${IAdesition[17] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA18-: "+"status :"+logsave[18]+", "+"percent -->  "+porcentajeArray[18]*100+"(%)  "+  `IA Inspection: ${IAdesition[18] == 0 ? 'Fail' :'Pass' } ` +  "\n" + 
        "TG1-:  "+"status :"+logsave[27]+", "+"percent -->  "+porcentajeArray[27]*100+"(%)  " +  `IA Inspection: ${IAdesition[27] == 0 ? 'Fail' :'Pass' } ` +  "\n\n" + 
                // Cuadrante 5 
                 "Cuadrante :5\n"+
        "TA15-: "+"status :"+logsave[15]+", "+"percent -->  "+porcentajeArray[15]*100+"(%)  " + `IA Inspection : ${IAdesition[15] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA16-: "+"status :"+logsave[16]+", "+"percent -->  "+porcentajeArray[16]*100+"(%)  " + `IA Inspection : ${IAdesition[16] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA19-: "+"status :"+logsave[19]+", "+"percent -->  "+porcentajeArray[19]*100+"(%)  " + `IA Inspection : ${IAdesition[19] == 0 ? 'Fail' : 'Pass'} ` + "\n" +//`IA Inspection : ${IAdesition[19] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TA20-: "+"status :"+logsave[20]+", "+"percent -->  "+porcentajeArray[20]*100+"(%)  " + `IA Inspection : ${IAdesition[19] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
        "TB4-:  "+"status :"+logsave[26]+", "+"percent -->  "+porcentajeArray[26]*100+"(%)  " + `IA Inspection : ${IAdesition[19] == 0 ? 'Fail' : 'Pass'} ` + "\n" +
                 // Cuadrante 6
        
                 // Cuadrante 7
                 "Cuadrante :7\n"+
        "TA21-: "+"status :"+logsave[21]+", "+"percent -->  "+porcentajeArray[21]*100+"(%) "+ `IA Inspection : ${IAdesition[21] == 0 ? 'Fail' :'Pass' } ` + "\n" +
        "TC-:   "+"status :"+logsave[22]+", "+"percent -->  "+porcentajeArray[22]*100+"(%) "+ `IA Inspection : ${IAdesition[22] == 0 ? 'Fail' :'Pass' } ` + "\n\n" +
        "#"


   logsave=
    ""+snr+"&TA1-"+mtxw[1]*100+"%"+","+logsave[1]+
    "&TA2-"+mtxw[2]*100+"%"+","+logsave[2]+//porcentajeArray[2]+"%"+           
    "&TA11-"+mtxw[11]*100+"%"+","+logsave[11]+//porcentajeArray[3]+"%"+
    "&TA12-"+mtxw[12]*100+"%"+","+logsave[12]+//porcentajeArray[4]+
    "&TB1-"+mtxw[23]*100+"%"+","+logsave[23]+//porcentajeArray[5]+
    
            //Cuadrante 2 
    "&TA3-"+mtxw[3]*100+"%"+","+logsave[3]+//porcentajeArray[6]+
    "&TA4-"+mtxw[4]*100+"%"+","+logsave[4]+//porcentajeArray[7]+
    "&TA9-"+mtxw[9]*100+"%"+","+logsave[9]+//porcentajeArray[8]+
    "&TA10-"+mtxw[10]*100+"%"+","+logsave[10]+//porcentajeArray[9]+
    "&TB2-"+mtxw[24]*100+"%"+","+logsave[24]+//porcentajeArray[10]+
    
            // Cuadrante3
    "&TA17-"+mtxw[17]*100+"%"+","+logsave[17]+//porcentajeArray[16]+
    "&TA18-"+mtxw[18]*100+"%"+","+logsave[18]+//porcentajeArray[17]+
    "&TG1-"+mtxw[27]*100+"%"+","+logsave[27]+

    "&TA15-"+mtxw[15]*100+"%"+","+logsave[15]+//porcentajeArray[18]+
    "&TA16-"+mtxw[16]*100+"%"+","+logsave[16]+//porcentajeArray[19]+
    "&TA19-"+mtxw[19]*100+"%"+","+logsave[19]+//porcentajeArray[20]+
    "&TA20-"+mtxw[20]*100+"%"+","+logsave[20]+//porcentajeArray[21]+
    "&TB4-"+mtxw[26]*100+"%"+","+logsave[26]+//porcentajeArray[22]+

    
    
    "&TA21-"+mtxw[21]*100+"%"+","+logsave[21]+//porcentajeArray[25]+
    "&TC-"+mtxw[22]*100+"%"+","+logsave[22]+//porcentajeArray[26]+"%"+
    "#"
        //logsave=""+snr+"&TA0,1&TA1,1&TA2,1&TA3,1&TA4,1&TA5,1&TA6,1&TA7,1&TA8,1&TA9,1&TA10,1&TA11,1&TA12,1&TA13,1&TA14,1&TA15,1&TA16,1&TA17,1&TA18,1&TA19,1&TA20,1&TA21,1&TA22,1&TA23,1&TA24,1&TA25,1&TA26,0#"
        //console.log("Logsave--"+logsave)

        /*mtxw= 
        ""+snr+"&TA1,"+mtxw[1]*100+"%"+","+logsave[1]+","+
        "&TA2,       "+mtxw[2]*100+"%"+","+logsave[2]+","+
        "&TA11,      "+mtxw[11]*100+"%"+","+logsave[2]+","+
        "&TA11,      "+mtxw[11]*100+"%"+","+logsave[2]+","+*/
        logsaving(snfile,porcentajeArray, logsave)
        console.log(logsave)
        socket.emit('plc_response', logsave)
        resolve('resolved')
    })
}

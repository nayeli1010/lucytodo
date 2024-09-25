let mean
let BarTA1

let arrymaxG =[]
let arryminG = []

let arrymaxB = []
let arryminB = []
//Arrays para localstorage 
//Rojo
let miArrayminR =[]
let miArraymaxR =[]
//Verde
let miArrayminG =[]
let miArraymaxG =[]
//Azul
let miArrayminB =[]
let miArraymaxB =[]


/*function enviar(){ 
  let selectElement = document.getElementById("TA1");
  let selectedIndex = selectElement.selectedIndex;
  selectedValue = selectElement.options[selectedIndex].value;
  console.log(selectedValue);
}

var elemento = document.getElementById("TA1");
let valor = elemento.textContent;
console.log(valor); // Output: "TA1"

async function TA1activado(){
      BarTA1 = 'TA1'
      console.log('TA1 Activado para recoleccion de datos')
      timershow()
}



async function ValueAll(canvasx,eachpoint){
  switch(canvasx,eachpoint){
    case 1:

    break

    case 2:

    break

    case 3: 

    break

    case 4:

    break

    case 5:

    break
    default:

  }

}*/

async function rgbauto(canvasx) {
    let contextcanvasx = canvasx.getContext('2d')
    let cdata = contextcanvasx.getImageData(0, 0, canvasx.width, canvasx.height)
    valoresR = []
    valoresG = []
    valoresB = []
    valoresA = []
    for (let i = 0; i < cdata.data.length; i += 4) {
        //este arreglo nos da los valores de cada pixel
        R = cdata.data[i + 0]
        G = cdata.data[i + 1]
        B = cdata.data[i + 2]
        A = cdata.data[i + 3]
        //aqui se guardan los valores de cada pixel en el arreglo correspondiente
        valoresR.push(R)
        valoresG.push(G)
        valoresB.push(B)
        valoresA.push(A)
    }
    //---------- Valores de Rojos
    //identifica numero minimo y maximo del array 
    let ValmaxR = Math.max(...valoresR)
    let ValminR = Math.min(...valoresR)
    //console.log("Valores R:", valoresR)
    //console.log("ValormaximoR:", ValmaxR)
    //console.log("ValorminimoR:", ValminR)

    //------ Guarda valores de rangos Min y Max en localStorage
    
    let miArrayminR = JSON.parse(localStorage.getItem('ValminR')) || [];
    let miArraymaxR = JSON.parse(localStorage.getItem('ValmaxR')) || [];//Agrega el dato en localStorage


    if(miArraymaxR.length <= 9  && miArrayminR.length <= 9){
        //console.log("No has llegado al limite de datos")
        //Agrega valores al localstorage
        miArraymaxR.push(ValmaxR) 
        miArrayminR.push(ValminR)
        localStorage.setItem('ValmaxR', JSON.stringify(miArraymaxR));
        localStorage.setItem('ValminR', JSON.stringify(miArrayminR));
        //console.log("miArraymaxR: ",miArraymaxR) //muestra almacenamiento de localstorage en consola
        //console.log("miArrayminR: ",miArrayminR)
    }else{ 
      //console.log("LLegaste al limite de datos")
    }
    //Valor minimo de array en localStorage
    const valorMaximoR = Math.max(...miArraymaxR)
    //console.log("Valor maximo en R en LocalStorage: ",valorMaximoR)
    const valorminR = Math.min(...miArrayminR)
    //console.log("Valor minimo en R en LocalStorage: ",valorminR)
    
//------------------------------------- AQUI SE TERMINA ROJO... -------------------------------------------

    //---------- Valores de Verdes
    let ValmaxG = Math.max(...valoresG)
    let ValminG = Math.min(...valoresG)
    //console.log("Valores G:", valoresG)
    //console.log("ValormaximoG:", ValmaxG)
    //console.log("ValormimimoG:", ValminG)

    //------ Guarda valores de rangos Min y Max en localStorage
    
     miArrayminG = JSON.parse(localStorage.getItem('ValminG')) || [];
     miArraymaxG = JSON.parse(localStorage.getItem('ValmaxG')) || [];

    if(miArrayminG.length <= 9  && miArraymaxG.length <= 9){
      //console.log("No has llegado al limite de datos")
      //Agrega valores al localstorage
      miArrayminG.push(ValminG) 
      miArraymaxG.push(ValmaxG)
      localStorage.setItem('ValminG', JSON.stringify(miArrayminG));
      localStorage.setItem('ValmaxG', JSON.stringify(miArraymaxG));
      //console.log("miArraymaxG: ",miArraymaxG) //muestra almacenamiento de localstorage en consola
      //console.log("miArrayminG: ",miArrayminG)
  }else{ 
    //console.log("LLegaste al limite de datos")
  }

  //Valor minimo de array en localStorage
  const valorMaximoG = Math.max(...miArraymaxG)
  //console.log("Valor maximo en G en LocalStorage: ",valorMaximoG)
  const valorMinG = Math.min(...miArrayminG)
  //console.log("Valor minimo en G en LocalStorage: ",valorMinG)

//--------------------- AQUI TERMINA VERDE  

    //---------- Valores de azules
    let ValmaxB = Math.max(...valoresB)
    let ValminB = Math.min(...valoresB)
    //console.log("Valores G:", valoresG)
    //console.log("ValormaximoB:", ValmaxB)
    //console.log("ValormimimoB:", ValminB)
  
    let miArrayminB = JSON.parse(localStorage.getItem('ValminB')) || [];
    let miArraymaxB = JSON.parse(localStorage.getItem('ValmaxB')) || [];

    if(miArrayminB.length <= 9  && miArraymaxB.length <= 9){
      //console.log("No has llegado al limite de datos")
      //Agrega valores al localstorage
      miArrayminB.push(ValminB) 
      miArraymaxB.push(ValmaxB)
      localStorage.setItem('ValminB', JSON.stringify(miArrayminB));
      localStorage.setItem('ValmaxB', JSON.stringify(miArraymaxB));
      //console.log("miArraymaxB: ",miArraymaxB) //muestra almacenamiento de localstorage en consola
      //console.log("miArrayminB: ",miArrayminB)
  }else{ 
    console.log("LLegaste al limite de datos")
  }

      //Valor minimo de array en localStorage
  const valorMaximoB = Math.max(...miArraymaxB)
  //console.log("Valor maximo en B en LocalStorage: ",valorMaximoB)
  const valorMinB = Math.min(...miArrayminB)
  //console.log("Valor minimo en B en LocalStorage: ",valorMinB)

    /*
    console.log("Valores G:", valoresG)
    console.log("Valores B:", valoresB)
    console.log("Valores A:", valoresA)*/
    //--------- Calculo de Media y desviacion estandar 


function desviacion(valores) {
        // Calcular la media
        mean = valores.reduce((acc, curr) => acc + curr, 0) / valores.length;
      
        // Calcular la varianza
        let variance = valores.map((k) => {
          return (k - mean) ** 2;
        }).reduce((acc, curr) => acc + curr, 0) / valores.length;
      

        // Calcular la desviación estándar
        return Math.sqrt(variance);
    }

      desviacionR = desviacion(valoresR)
      desviacionG = desviacion(valoresG)
      desviacionB = desviacion(valoresB)
      desviacionA = desviacion(valoresA)

      
      valormaximoR = mean + desviacionR
      valorminimoR = mean - desviacionR
      valormaximoG = mean + desviacionG
      valorminimoG = mean - desviacionG
      valormaximoB = mean + desviacionB
      valorminimoB = mean - desviacionB
      valormaximoA = mean + desviacionA
      valorminimoA = mean - desviacionA

     /* console.log("Valor Maximo R: ", valormaximoR)
      console.log("Valor Minimo R: ", valorminimoR)
      console.log("Valor Maximo G: ", valormaximoG)
      console.log("Valor Maximo G: ", valorminimoG)
      console.log("Valor Maximo B: ", valormaximoB)
      console.log("Valor Maximo B: ", valorminimoB)
      console.log("Valor Maximo A: ", valormaximoA)
      console.log("Valor Maximo A: ", valorminimoA)*/

  
      /*console.log("Desviacion estandar R:", desviacionR)
      console.log("Desviacion estandar G:", desviacionG)
      console.log("Desviacion estandar B:", desviacionB)
      console.log("Desviacion estandar A:", desviacionA)*/

      let meanR = valoresR.reduce((acc, curr) => acc + curr, 0) / valoresR.length;
      let meanG = valoresG.reduce((acc, curr) => acc + curr, 0) / valoresG.length;
      let meanB = valoresB.reduce((acc, curr) => acc + curr, 0) / valoresB.length;
      //console.log("MediaR: ", meanR)
      //console.log("MediaG: ", meanG)
      //console.log("MediaB: ", meanB)
}





function deletelocal(){
  localStorage.removeItem('ValmaxR')
}




function fail(){
 
    Swal.fire({
          
          icon: 'error',
          title: 'Fail',
          //text: 'Something went wrong!',
  });
  }
  
  function pass(){
    Swal.fire({
      
      icon: 'success',
      title: 'Pass',
    })
  }

  function registrado() {
    Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      timer: 2000, //timer para la duracion de la alerta en pantalla
    });
  }
  
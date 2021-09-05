function guardarDatos(){
    //primero creo un objeto con dos atributos. ahi guardo lo que el usuario puso
    // cuando hace click. la function guardar datos es lo mismo que
    // el event listener
     let datos_usuario ={
         inputEmail: document.getElementById("inputEmail").value,
         inputPasword: document.getElementById("inputPassword").value
     };
     // trigo los campos con los datos y ahora tienen valor de string.
     // Si había algo guardado ahí, lo guardo
 
 
     let datos_usuario_json = JSON.stringify(datos_usuario);
     // con esto creo una nueva variable, y a través de strigify
     // guardo el objeto en sintaxis JSON
 
     localStorage.setItem("datos_usuario", datos_usuario_json);
     // llamo a setItem del objeto local storage y le paso el nombre del json y luego ese json
    
     let camposCompletos = true;
     if (camposCompletos){
        window.location = 'inicio.html'
     } else {
        alert("Mail o contrasena incorrectas! :( ")
     }
 }

 /*document.addEventListener("DOMContentLoaded", function(e){

    let camposCompletos = true;
     if (camposCompletos){
        window.location = 'inicio.html'
     } else {
        alert("Mail o contrasena incorrectas! :( ")
     }
    });}


document.addEventListener("DOMContentLoaded");{

    let datos_usuario ={
        inputEmail: document.getElementById("inputEmail").value,
        inputPassword: document.getElementById("inputPassword").value
    };
    // trigo los campos con los datos y ahora tienen valor de string.
    // Si hab[ia algo guardado ahí, lo guardo
let camposCompletos = true
// poner acá que todo esto se active al tocar el botón de Iniciar, y listo,
// que guarde los datos después de que los campos están completos seguro
//
if (camposCompletos){

    //acá iría primero una validación de los datos que se ponen en los campos
    let datos_usuario_json = JSON.stringify(datos_usuario);
    // con esto creo una nueva variable, y a través de strigify
    // guardo el objeto en sintaxis JSON

    localStorage.setItem("datos_usuario", datos_usuario_json);
    // llamo a setItem del objeto local storage y le paso el nombre del json y luego ese json
    window.location = 'inicio.html'
    }else{
            alert('Usuario o contraseña incorrectas!');
    }

    //Función que se ejecuta una vez que se haya lanzado el evento de
    //que el documento se encuentra cargado, es decir, se encuentran todos los
    //elementos HTML presentes.  
};
*/
const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}


document.addEventListener("DOMContentLoaded", function(e){
// GET ITEM devuelve el valor por medio de la key que usamos para guardar
// los datos en el localstorage. esa info es un json que guardo en la variable userlogged
  let userLogged = localStorage.getItem('datos_usuario');

  let infoUser = document.getElementById("info-user");

  let maildelusuario = document.getElementById("maildelusuario");
 // verifico si el usuario esta logueado, si existe userLogged
  if (userLogged) {
// si esta logueado con JSON.parse la transforma en un obj de JS. recibe string devuelve objeto.
    userLogged = JSON.parse(userLogged);

// ahora lo manejo como un objeto de JS, accedo al atributo email

    maildelusuario.innerText = maildelusuario.email + 'Usuario: ' + userLogged;
    infoUser.style = "display: inline-block";
  }

  if (document.getElementById("salir")){
    document.getElementById("salir").addEventListener("click", function (){
      localStorage.removeItem('datos_usuario');
      window.location = 'index.html';

    })
  }

});


/* DONDE MIERDA VA ESTO/???
function recuperarDatos(){
  if (localStorage.getItem("datos_usuario")){

    let datos_usuario_json = localStorage.getItem("datos_usuario");
    let datos_usuario_json = JSON.parse(datos_usuario_json);

    document.getElementById("datosRecuperados").innerHTML=
    "inputEmail:" + datos_usuario.dato1 + "<br>";

  }else{

    document.getElementById("datosRecuperados").innerHTML = "No ha ingresado el usuario";
  }
}
*/ 


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

/*
document.addEventListener("DOMContentLoaded", function(e){

  let userLogged = localStorage.getItem("User-Logged");
  let infoUser = document.getElementById("info-user")
  let user = document.getElementById("user");

  if (userLogged) {

    userLogged = JSON.parse(userLogged);
    usuario.innerHTML += userLogged.usuario;
    infoUser.style = "display: inline-block";
  }

  if (document.getElementById("salir")) {
    document.getElementById("salir").addEventListener("click", function(){
      localStorage.removeItem("User-Logged");
      window.location = "login.html";
    })
  
  }
});
*/


var minCost = undefined;
var maxCost = undefined;
var productsArray = [];

// primero ordeno el array, luego lo muestro
// defino un criterio y recibo el array
// con el if y else if me fijo cuál fue el critero seleccionado

function sortProducts(criteria, array){
    let result = [];
    if (criteria === 1)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });

    }else if (criteria === 2){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
// esta no la entiendo... debería ser igual a las anteriores
// no?

    }else if (criteria === 3){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }   
    return result;
}

/*
}else if (criteria === 4){
    result = array.sort(function(a, b) {
        let minCost = document.getElementById(costMin).value
        let maxCost = document.getElementById(costMax).value

        if (((minCost == undefined) || (minCost != undefined && (product.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && (product.cost) <= maxCost))){
        return 0;
    });
}*/

function showProductsList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let product = array[i];
        if (((minCost == undefined) || (minCost != undefined && (product.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && (product.cost) <= maxCost))){
                htmlContentToAppend += `
                <div class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-3">
                            <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <div class="mb-1">
                                <h4>`+ product.cost +`</h4> 
                                <p> `+ product.description +`</p> 
                                <p> `+ product.cost +`<p>
                                </div>
                                <small class="text-muted">` + product.soldCount + ` artículos</small> 
                            </div>

                        </div>
                    </div>
                </div>
               `
            }
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}


//Le paso un array desordenado y el que devuleve es el ordenado
// luego llamo a la funcion show pasandole el array ordenado
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(products => {
        productsArray = products.data;
        showProductsList(productsArray);
    });

// cada botón en pantalla tiene un eventListener para funcoinar
    document.getElementById("sortAsc").addEventListener("click", function(){
        productsArray = sortProducts(1, productsArray);
        showProductsList(productsArray);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        productsArray = sortProducts(2, productsArray);
        showProductsList(productsArray);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        productsArray = sortProducts(3, productsArray);
        showProductsList(productsArray);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("CostMin").value = "";
        document.getElementById("CostMax").value = "";

        minCost = undefined;
        maxCost = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCost = document.getElementById("CountMin").value;
        maxCost = document.getElementById("CountMax").value;

        if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
            minCost = parseInt(minCost);
        }
        else{
            minCost = undefined;
        }

        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
            maxCost = parseInt(maxCost);
        }
        else{
            maxCost = undefined;
        }

        showProductsList();
    });

});
/*
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
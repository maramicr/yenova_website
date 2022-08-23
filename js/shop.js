// declaracion de constantes de categorias y productos
let categoryItem = document.querySelectorAll(".category__item");
let prodItem = document.querySelectorAll(".prod--item");

// funcion del evento click en el menu de categorias, agrega clase active
for (let i = 0; i < categoryItem.length; i++){
  categoryItem[i].addEventListener("click",function(){
    for (let j = 0; j < categoryItem.length; j++){
      categoryItem[j].classList.remove("ct__item--active");
    }
    this.classList.add("ct__item--active");
// seleccionando por el attributo category
    let category = this.getAttribute("category");

    for (let k = 0; k < prodItem.length; k++){
      prodItem[k].classList.remove("ct__item--active");
      prodItem[k].classList.add("hide");

      if (prodItem[k].getAttribute("category--prod")==category || category == "all") {
        prodItem[k].classList.remove("hide");
        prodItem[k].classList.add("ct__item--active");
      }
    }
  });
}







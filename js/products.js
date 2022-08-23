$(document).ready(function () {

  // agregando clase active a primer enlace
  $('.category__item[category="all"]').addClass(
    "ct__item--active"
  );
  // filtrando los productos por categoria
  $(".category__item").click(function () {
  // agregando clase active al enlace seleccionado
    var categoryProduct = $(this).attr("category");
    // console.log(categoryProduct);

    $(".category__item").removeClass("ct__item--active");
    $(this).addClass("ct__item--active");

    // ocultando productos con escala ===========
    $(".prod--item").css("transform", "scale(0)");
    function hideProduct() {
      $(".prod--item").hide();
    }
    setTimeout(hideProduct, 500);

    // mostrando productos con escala ===========
    function showProduct() {
      $('.prod--item[category="' + categoryProduct + '"]').show();
      $('.prod--item[category="' + categoryProduct + '"]').css(
        "transform",
        "scale(1)"
      );
    }
    setTimeout(showProduct, 500);
  });

  // mostrando todos los productos con escala ===========

  $('.category__item[category="all"]').click(function () {
    function showAllProducts() {
      $(".prod--item").show();
      $(".prod--item").css("transform", "scale(1)");
    }
    setTimeout(showAllProducts, 500);
  });



});

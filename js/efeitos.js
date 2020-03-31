$(document).ready(function(){
  $("#logotipo").on("mouseover",function(){
    $("#banner h1").addClass("efeito");
  }).on("mouseout", function(){
    $("#banner h1").removeClass("efeito");
  });
  $("#input-search").on("focus", function(){
    $("li.search").addClass("ativo");
  }).on("blur",function(){
    $("li.search").removeClass("ativo");
  });
  $(".thumbnails").owlCarousel({
    loop:true,
    margin: 10,
    nav:true,
    navText: ["Anterior","Proximo"],
    responsive: {
      0: {
        items: 1
      },
      480:{
        items: 3
      },
      1000:{
        items: 4
      }			
    }
  });
  $("#btn-bars").on("click", function(){
    $("header").toggleClass("open-menu");
  });
  $("#menu-mobile-mask, .btn-close").on("click", function(){
    $("header").removeClass("open-menu");
  });
  $("#btn-search").on("click", function(){
    $("header").toggleClass("open-search");
    $("#input-search-mobile").focus();
  });
});
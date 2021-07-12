 $("#app").prepend('<button id="btn1" class="boton btn-danger">ABREME!</button>');
 $("#app").delay(2000);
 $("#app").prepend(`<div id="div1" class="botones">
                    <div class="repeticiones"><h3>¡Hola Mundo!</h3></div>
                    <div class="repeticiones"><h3>¡Hola Mundo!</h3></div>
                    <div class="repeticiones"><h3>¡Hola Mundo!</h3></div>
                    <div class="repeticiones"><h3>¡Hola Mundo!</h3></div>
                    <div class="repeticiones"><h3>¡Hola Mundo!</h3></div>
                        
                    </div>`);
 $("#btn1").css("color", "blue")
     .slideUp(2000)
     .delay(2000)
     .slideDown(2000);



 $("h3").fadeOut("slow", function() {

     $("h3").fadeIn(500);
     $("h3").fadeOut(500);
     $("h3").fadeIn(500);
     $("h3").fadeOut(500);


 });
 $("#btn1").click(() => {
     $("#div1").toggle("slow");
 });
 $(".repeticiones").animate({
         left: '250px',
         opacity: '0.9',
         height: '150px',
         width: '300px'
     },
     "slow",
     function() {
         console.log("final de animación");
     });


 $("#btn1").fadeOut("slow", function() {

     $("#btn1").fadeOut(1000);
     $(".repeticiones").fadeOut(500);


 });





 //  const productos = [
 //      { id: 1, nombre: "Arroz", precio: 125 },
 //      { id: 2, nombre: "Fideo", precio: 70 },
 //      { id: 3, nombre: "Pan", precio: 50 },
 //      { id: 4, nombre: "Flan", precio: 100 }
 //  ];

 //  $(document).ready(function() {
 //      $(".btnComprar").click(function(e) {

 //          let hijos = $(e.target).parent().children();

 //          console.log(hijos[0].value);

 //          $(e.target).parent().slideUp("slow");
 //      });
 //  });

 //  for (const producto of productos) {

 //      $("#app").append(`<div>
 //                         <input value="${producto.id}" type="hidden">
 //                         <h4>  Producto: ${producto.nombre}</h4>
 //                         <b> $ ${producto.precio}</b>
 //                         <button class="btnComprar">Comprar</button>
 //                     </div>`);
 //  }
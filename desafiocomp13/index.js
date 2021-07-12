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
     $("h3, .repeticiones").fadeIn(1000);
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
     $(".repeticiones").fadeOut(1000);
     $("#btn1").fadeIn(1000);


 });
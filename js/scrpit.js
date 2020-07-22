$(window).scroll(function () {
  if (jQuery(this).scrollTop() > 600) {
    $(".navbar").css("background-color", "black");
  } else {
    $(".navbar").css("background-color", "transparent");
    $(".navlink").css("color", "white");
  }
}
);

/*var limitador = 0;

function aparecerTexto() {
  if(limitador == 0){
    var div = document.getElementById('log');
    var texto = 'Já imaginou um aplicavo que possa te ajudar a buscar e divulgar projetos artísticos, atraia o seu público e faça você conhecer outros artistas próximos a você? esse é o MozArte! ';

    function escrever(str, el) {
      var char = str.split('').reverse();
      var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        el.innerHTML += next;
      }, 40);
    }
    escrever(texto, div);
  }
  limitador++;
}*/

var $doc = $('html, body');
$('.scroll').click(function () {

  $doc.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  },700);
  return false;
});


  $(function() {
var selectedClass = "";
$(".filter").click(function(){
	selectedClass = $(this).attr("data-rel");
	$("#gallery").fadeTo(100, 0.1);
	$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
	setTimeout(function() {
		$("."+selectedClass).fadeIn().addClass('animation');
		$("#gallery").fadeTo(300, 1);
		}, 300);
	});
});

  Array.prototype.forEach.call(document.querySelectorAll('.big-banner-two'), function(elem){
  	elem.style.backgroundImage = 'url('+ elem.getAttribute('data-paralax-image')+')';

  });

  Array.prototype.forEach.call(document.querySelectorAll('.big-banner'), function(elem){
  	elem.style.backgroundImage = 'url('+ elem.getAttribute('data-paralax-image')+')';

  });
  
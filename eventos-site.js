/*eventos em Jquery*/
	<script>
	$(document).ready(function() {
	  $(window).scroll(function() {
		if ($(document).scrollTop() > 600) {
		  $("nav").addClass("menu");
		} else {
		  $("nav").removeClass("menu");
		}
	  });
	  
	  $(window).scroll(function() {
		if ($(document).scrollTop() > 800) {
		  $("div .barra-1").css("width","70%","transition","width 1s");
		   $("div .barra-2").css("width","60%","transition","width 1s");
		    $("div .barra-3").css("width","45%","transition","width 1s");
			 $("div .barra-4").css("width","50%","transition","width 1s");
			 $("div .barra-5").css("width","40%","transition","width 1s");
		  
		} else {
			 $("div .barra-1").css("width","0%");
			 $("div .barra-2").css("width","0%");
			 $("div .barra-3").css("width","0%");
			 $("div .barra-4").css("width","0%");
			 $("div .barra-5").css("width","0%");
		}
	  });
	  
	   $(window).scroll(function() { 
		 if ($(document).scrollTop() > 1700) {
			$(".cursos p").css("opacity","1");
		 } else {
			$(".cursos p").css("opacity","0");
		 }
		 
	   });	
	});
	
	
	
	
	</script>

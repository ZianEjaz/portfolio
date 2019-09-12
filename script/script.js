$(".plus").click(function(){
 $("input").fadeToggle();
});
$("li").click(function(){
	$(this).toggleClass("chk","unchk");
});
$("input").keypress(function(e){
	
	if(e.which === 13 && $(this).val().length>0){
		var tx=$(this).val();
		$(this).val("");
		$("ul").append("<li><span class='del-act'><i class='fa fa-trash animated slideInRight'></i></span>"+ tx + "</li>");
		$("li").click(function(){
	$(this).toggleClass("chk","unchk");
});
	}

});
$('ul').on('click', 'li', function(){
	$(this).fadeOut(function(){
		$(this).remove('slow');
	});
});
function hbg(){var col=$(".col-slc").val();
	$("h1").css("background-color", col );
}
function libg(){var col=$(".col-slc").val();
	$("li").css("background-color", col );
}
function h1tx(){var col=$(".col-slc").val();
	$("h1").css("color", col );
}
          
                       
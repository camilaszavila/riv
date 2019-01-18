
$(document).ready(function(){
	$('.sidenav').sidenav();
});

$(".dropdown-trigger").dropdown();

$(document).ready(function(){
	$('.slider').slider();
});

$(document).ready(function(){
	$('.carousel').carousel({dist:0, shift:30});
});

$(document).ready(function(){
	$('.materialboxed').materialbox();
});

$(document).ready(function(){
	$('.fixed-action-btn').floatingActionButton();
});

$('input.autocomplete').autocomplete({
	data: {
		"Álvaro Obregón": null,
		"Azcapotzalco": null,
		"Benito Juárez": null,
		"Coyoacán": null,
		"Cuajimalpa": null,
		"Cuauhtémoc": null,
		"Gustavo A. Madero": null,
		"Iztacalco": null,
    	"Iztapalapa": null,
		"Magdalena Contreras": null,
		"Miguel Hidalgo": null,
		"Milpa Alta": null,
		"Tláhuac": null,
		"Tlalpan": null,
		"Venustiano Carranza": null,
		"Xochimilco": null
	},
});     
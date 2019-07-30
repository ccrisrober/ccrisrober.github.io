$(document).ready(function() {
	var classes = ["header1", "header2"];
	$("header").each(function() {
		var id = ~~(Math.random()*classes.length);
        $(this).addClass(classes[id]);
    });

    var filters = $("#filters button");
    $(filters[0]).addClass("active");
    $.fn.randomize=function(a){(a?this.find(a):this).parent().each(function(){$(this).children(a).sort(function(){return Math.random()-0.5}).detach().appendTo(this)});return this};

    //$(".portfolio-item").randomize();

    filters.click(function() {
        for(var i = 0; i < filters.length; i++) {
            $(filters[i]).removeClass("active");
        }
        $(this).addClass("active");
        var value = $(this).attr("data-filter");
        if(value == "all") {
            $(".portfolio-item").show('1000');
        } else {
            var items = $(".portfolio-item");
            items.not("[data-category='" + value + "']").hide("3000");
            items.filter("[data-category='" + value + "']").show("3000");
        }
    });
	var cbpAnimatedHeader = (function() {

		var docElem = document.documentElement,
			header = $(document.querySelector( '.navbar-default' )),
			didScroll = false,
			changeHeaderOn = 220;

		function init() {
			scrollPage();
			window.addEventListener( 'scroll', function( event ) {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 250 );
				}
			}, false );
		}

		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				header.addClass( 'navbar-shrink' );
			}
			else {
				header.removeClass( 'navbar-shrink' );
			}
			didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}

		init();

	})();
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	})

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
	    $('.navbar-toggle:visible').click();
	});

	var random_cites = [
		"Waka, Waka, Waka.", 
		"“Thank You Mario, But Our Princess is in Another Castle",
		"How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
		//"Un anillo para gobernarlos a todos, un Anillo para encontrarlos, un Anillo para atraerlos a todos y atarlos en las Tinieblas.",
		//"Me llamo Iñigo Montoya, tú mataste a mi padre, prepárate a morir.",
		//"¡Llegada es la hora! ¡Jinetes de Rohan, os ata un juramento! ¡Dadle ahora cumplimiento! ¡Por el Rey, y la tierra!",
		//"Carpe diem, aprovechen el día, hagan su vidas extraordinarias.",
		"This is Sparta!",
		"May the Force be with you",
		//"Algunos de mis fans me presionaban para que les contara de nuevo la historia de cómo derroté a LeChuck.",
		//"Sigue el camino de baldosas amarillas.",
		//"Hay ocasiones en las que necesitas detenerte a recordar a quienes hemos perdido.",
		//"Puedo concederos cualquier deseo, pero solo les concederé uno.",
		//"Yo estuve allí Gandalf, el día que la voluntad del hombre fracasó.",
		//"¡Es leviooosa, no leviosá!",
		//"La primera regla del club es no hablar del club de la lucha.",
		//"Luke, yo soy tu padre.",
		//"Siempre recordaréis este día como el día en el que casi capturáis al capitán Jack Sparrow.",
		//"¡Rey de los duendes, rey de los duendes, dondequiera que esté... llévese a esta criatura lejos de mí!",
		//'Repite conmigo: "Hakuna Matata"... Esas dos palabras resolverán todos tus problemas.',
		"The clawwwwwwwww!",
		"MY PRECIOUS! ARRRRAAAAAGHHHHH!",
		"How appropriate. You fight like a cow.",
		//"Bienvenido Señor Bolsón, a la compañía de Thorin Escudo de Roble.",
		"It´s a trap!",
		//"Utiliza la Fuerza, Luke. Déjate llevar, Luke.",
		"A long time ago in a galaxy far, far away ..."];

	$(function(){
		$(".element").typed({
			strings: [ random_cites[Math.floor(Math.random() * random_cites.length)] ]
		});
	});
});

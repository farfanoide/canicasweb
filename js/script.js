/* Author: FARFAN = http://farfanoide.com.ar/ */
$(document).ready(function() {

// hide everything on document load
$('div.hideOnLoad').slideUp(1500);

//add smooth scrolling in the page
$('a').smoothScroll();

// add lightbox effect to img galleries
$("a[rel=pichaGal],a[rel=chaveGal],a[rel=toiaGal]").fancybox({
   'transitionIn'		: 'elastic',
   'transitionOut'		: 'fade',
   'speedIn'			: 700, 
   'speedOut'			: 200,
   'centerOnScroll' 	: 'true',
   'titlePosition'  	: 'over',
   'cyclic'          : 'true',
   'enableEscapeButton'	: 'true',
   'titleFormat'    	: function(title, currentArray, currentIndex, currentOpts) {
   return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
 }
});
// end lightbox effects

// hide animations and whatnot...
function hideToi() {
   $('#toiaContent').slideUp(200);
};
$('#toia').click(function() {
   $('#toiaContent').slideToggle(500);
});
$('#picha').click(function() {
   $('#pichaContent').slideToggle(500);
});
$('#chave').click(function() {
   $('#chaveContent').slideToggle(500);
});
$('#fotoArte').click(function() {
   $('#fotoArteContent').slideToggle(500);
});
$('#productos').click(function() {
   $('#productosContent').slideToggle(500);
});
$('#cosas').click(function() {
   $('#cosasContent').slideToggle(500);
});
$('#curiosidades').click(function() {
   $('#curiosidadesContent').slideToggle(500);
});

//end animations

});



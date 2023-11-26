/**
 * 
 */
function SetCookie(c_name, value, expiredays)
{
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "="  + escape(value) + ((expiredays == null) ? "" : ";expires="+exdate.toGMTString()+"; path=/");
}

/**
 * 
 */
function goTo(id, duration = 500, offset = 0)
{
	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, duration);

	return false;
}

/**
 * 
 */
function goToCallback(id, callback)
{
	$('html, body').animate({
		scrollTop: $(id).offset().top
	}, 500, callback);

	return false;
}

/**
 * Retorna una doble mida si l'element conté la classe estrella.
 */

function siEsEstrella(midaRajola) 
{
	return function() {
		var isStar = (0 <= $(this).css('background-image').indexOf('estrella'));
		
		return (isStar ? midaRajola * 2 + 'px' : midaRajola + 'px');
	};
}

/**
 * proporcióHoritzontal -> int tant per cent que ocupa amplada contenidor en el disseny
 * proporcióVertical -> int tant per cent que ocupa alçada contenidor en el disseny
 * columnaPerAgafarAltura -> string per agafar columna de referència per calcular mesures 
 * 
 * Utilitza variable global midaInicialRajola.
 */

function agafaMesures(proporcióHoritzontal, proporcióVertical, columnaPerAgafarAltura) 
{
	var props = {};
	
	props.widthRajolaCont = innerWidth - proporcióHoritzontal * innerWidth;
	props.colsNeeded = Math.round(props.widthRajolaCont / midaInicialRajola);
	props.midaRajola = Math.round(props.widthRajolaCont / props.colsNeeded);
	props.rowsNeeded = Math.round($(columnaPerAgafarAltura).height() * proporcióVertical / props.midaRajola);

	return props;
}

/**
 * Agafa dos columnes i els hi dóna amplada a partir del nombre de columnes de rajoles
 */
function adaptaColumnes(col1, col2, propietats) 
{
	var width = $('body').width();
	//var width = innerWidth;
	var width_pattern = propietats.colsNeeded * propietats.midaRajola; 
	
	$(col1).css('width', width - width_pattern + 'px');
	$(col2).css('width', width_pattern + 'px');
}

/**
 * Agafa dos elements d'una columna i els hi dóna alçada a partir del nombre 
 * de files de rajoles. 
 */
function adaptaElementsDeCols(el1, el2, propietats) 
{
	$(el1).css('height', propietats.midaRajola * propietats.rowsNeeded + 'px');
	$(el2).css('height', '100%')
		  .css('height', '-=' + propietats.midaRajola * propietats.rowsNeeded + 'px');	
}

/**
 * 
 */
function callWithResize(f) 
{
	f();
	$(window).resize(function() {
		f();
	});
} 

/* 	
function resize(otherCont, rajolaCont, cols, rows, block_div) 
{
	rajolaCont.css("height", rajolaCont.width() / cols * rows + "px");
	otherCont.css("height", "100%").css("height", "-=" + rajolaCont.width() / cols * rows + "px");
	console.log("Mida rajola", rajolaCont.width() / cols);
}

function customWholeResize() 
{
	var img = $('.col2 img');
	var div = $('.col2 div');
	var block_div = $('.block-divisor.img-bg');
	var container = $('.col2');
	
	if (innerWidth <= 1500) {
		resize(img, div, 7, 3, block_div);
	} else {
		resize(img, div, 10, 3, block_div);
	} 
	
	$(window).resize(function() {
		if (innerWidth <= 1500) {
			resize(img, div, 7, 3, block_div);
		} else {
			resize(img, div, 10, 3, block_div);
		} 
	});
}
*/

/*
function setElement(rows, cols, img, div, proportion) 
{
	var n = rows && cols && img && div && proportion;
	
	if (!n) console.error("Algun paràmetre null");
	
	var h = div.height()
	var block_height = proportion * 10 / cols;
	
	//Modifica proporcions de la fila de rajoles
	div.css({
		'height': block_height * rows * innerWidth / 100 + 'px',
		'background-size': block_height * innerWidth / 100 + 'px'
	});
	img.css('height', 'calc(100% - ' + block_height * rows * innerWidth / 100 + 'vw)');
	
	//Retornar l'alçada de la rajola en vw
	return block_height
}

function getAdequateCols(container) 
{
	if (!container) console.error("No container!");
	var w = container.width()
	
	//78.4 són els píxels que ocupa la rajola en el disseny reduït al 80%
	var adequateCols = w / 78.4;
	
	adequateCols = Math.round(adequateCols);
	return adequateCols;
}

function resizeBlocks(img, div, container) 
{
	var cols = getAdequateCols(container);
	var img = $('.col2 img');
	var div = $('.col2 div');
	var block_height = setElement(3, cols, img, div, 5.1);
	
	$('.block-divisor.img-bg').css({
		'height': block_height + "vw",
		'background-size': block_height + "vw"
	});

	$(window).resize(function() {
		var container = $('.col2');
		if (cols != getAdequateCols(container)) {
			cols = getAdequateCols(container);

			block_height = setElement(3, cols, img, div, 5.1);
			$('.block-divisor.img-bg').css({
				'height': block_height + "vw",
				'background-size': block_height + "vw"
			});
		}
	});
}
*/

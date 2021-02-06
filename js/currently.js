const btnCurrentlyReading = $('#currentlyReading');

btnCurrentlyReading.on('click', () => {
	removeClasseDNone()
	$('option#oCurrentlyReading').addClass('d-none')
	//se nenhuma das ancoras estiverem selecionadas (geralmente quando usa-se o 'search')
	//ao clicar nela o booksGrid é limpo e carregado novamente
	if(!($('li.liWant').hasClass('active')) &&
	!($('li.liCurrently').hasClass('active')) &&
	!($('li.liRead').hasClass('active'))){
		booksGrid.empty()
		$('.spinner').show()
		carregaLivros()
	}

	if ( $('li.liCurrently').hasClass('active')){}
	else{
		removeClasseLi();
		$('li.liCurrently').addClass('active');

		$('section.ler').addClass('none')
		$('section.lido').addClass('none')
		$('section.lendo').removeClass('none')
	}
})

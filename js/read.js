const btnRead = $('#read');

btnRead.on('click', () => {
	removeClasseDNone()
	$('option#oRead').addClass('d-none')
	//se nenhuma das ancoras estiverem selecionadas (geralmente quando usa-se o 'search')
	//ao clicar nela o booksGrid é limpo e carregado novamente
	if(!($('li.liWant').hasClass('active')) &&
	!($('li.liCurrently').hasClass('active')) &&
	!($('li.liRead').hasClass('active'))){
		booksGrid.empty()
		$('.spinner').show()
		carregaLivros()
	}
	
	if ( $('li.liRead').hasClass('active')){}
	else{
		removeClasseLi();
		$('li.liRead').addClass('active');

		$('section.ler').addClass('none')
		$('section.lido').removeClass('none')
		$('section.lendo').addClass('none')
	}
})


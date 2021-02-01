const btnCurrentlyReading = $('#currentlyReading');

btnCurrentlyReading.on('click', () => {
	
	if ( $('li.liCurrently').hasClass('active')){}
	else{
		desabilitaAncoras('currentlyReading')
		booksGrid.empty(); //limpa o conteudo da tag 'section'
		$('.spinner').show();
		removeClasseLi();
		$('li.liCurrently').addClass('active');
		
		carregaLivros(currentlyReading); //add os livros da estante Currently Reading
	}
})

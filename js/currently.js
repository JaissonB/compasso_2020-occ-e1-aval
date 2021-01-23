const btnCurrentlyReading = $('#currentlyReading');

btnCurrentlyReading.on('click', () => {
	
	if ( $('li.liCurrently').hasClass('active')){}
	else{
		removeClasseLi();
		$('li.liCurrently').addClass('active')
		booksGrid.empty(); //limpa o conteudo da tag 'ol'
		carregaLivros(currentlyReading); //add os livros da estante Currently Reading
	}
})

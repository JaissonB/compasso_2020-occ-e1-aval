const btnRead = $('#read');

btnRead.on('click', () => {
	
	if ( $('li.liRead').hasClass('active')){}
	else{
		removeClasseLi();
		$('li.liRead').addClass('active')
		booksGrid.empty(); //limpa o conteudo da tag 'ol'
		carregaLivros(read); //add os livros da estante read
	}
})
const btnWantToRead = $('#wantToRead');

btnWantToRead.on('click', () => {

	if ( $('li.liWant').hasClass('active')){}
	else{
		removeClasseLi();
		$('li.liWant').addClass('active')
		booksGrid.empty(); //limpa o conteudo da tag 'ol'
		carregaLivros(wantToRead); //add os livros da estante Want to Read
	}
})

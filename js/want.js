const btnWantToRead = $('#wantToRead');

btnWantToRead.on('click', () => {

	if ( $('li.liWant').hasClass('active')){}
	else{
		desabilitaAncoras('wantToRead')
		booksGrid.empty(); //limpa o conteudo da tag 'section'
		$('.spinner').show();
		removeClasseLi();
		$('li.liWant').addClass('active');
		
		carregaLivros(wantToRead); //add os livros da estante Want to Read
	}
})

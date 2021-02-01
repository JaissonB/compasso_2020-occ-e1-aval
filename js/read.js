const btnRead = $('#read');

btnRead.on('click', () => {
	
	if ( $('li.liRead').hasClass('active')){}
	else{
		desabilitaAncoras('read')
		booksGrid.empty();//limpa o conteudo da tag 'section'
		$('.spinner').show();
		removeClasseLi();
		$('li.liRead').addClass('active');
		 
		carregaLivros(read); //add os livros da estante read
	}
})


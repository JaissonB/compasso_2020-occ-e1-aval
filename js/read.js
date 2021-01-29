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



/*
console.log($('.opcoes-mover :selected').text())
select.on('change', () => {
	console.log($('select :selected').text())
})*/
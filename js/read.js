const btnRead = $('#read');

btnRead.on('click', () => {
	removeClasseLi();
	$('li.liRead').addClass('active')
	booksGrid.empty(); //limpa o conteudo da tag 'ol'
	carregaLivros(read); //add os livros da estante Currently Reading
})
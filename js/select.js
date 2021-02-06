$('body').on("change", ".opcoes-mover", function(event) {
	
	var id = this.dataset.bookid;
	var option = this.value;
	var li = this.parentNode.parentNode.parentNode.parentNode

	//remove livro de qualquer shelf
	if(option == 'remove'){
		console.log(option)
		updateBook({id}, option).then(()=>{
			booksGrid.empty()
			$('.spinner').show()
			carregaLivros()
		})
		return
	}

	//quando fizer o 'select' enquanto se pesquisa algum livro
	if(!($('li.liWant').hasClass('active')) &&
	!($('li.liCurrently').hasClass('active')) &&
	!($('li.liRead').hasClass('active'))){
		var conteudo = search.val().trim();
		updateBook({id}, option).then(()=>{
			booksGrid.empty()
			$('.spinner').show()
			searchBooks(conteudo).then(data => {
				booksGrid.empty();
				data.books.forEach(livro => {
					$('option#oRemove').addClass('d-none')
					var imgURL = imgPadrao;

					//se a o livro tiver imagem adiciona ela, senão fica a imagem padrão
					if (livro.hasOwnProperty('imageLinks')){
						imgURL = livro.imageLinks.thumbnail;
					}
					mostraLivros(livro.id, imgURL, livro.authors, livro.title)
				})
			})
		})
	}else{
		updateBook({id}, option).then(()=>{
			booksGrid.empty()
			$('.spinner').show()
			carregaLivros()
		})
	}
})
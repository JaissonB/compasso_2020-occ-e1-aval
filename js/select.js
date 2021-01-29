

$('body').on("change", ".opcoes-mover", function(event) {
	var tituloAtual = $('.titulo-livro').html()
	var option = this.value;
	var idAtual = ($('.id').data('bookId'))
	console.log(idAtual);

	
	

	//buscaId(option);
	function buscaId(shelf){
		getMyBooks().then((data) => {
			data.books.forEach(livro => {
				
				if(livro.title == 0){
					
					var imgURL = livro.imageLinks.thumbnail;
					var autorLivro = livro.authors;
					var tituloLivro = livro.title;
					var id = livro.id;

					mostraLivros(id, imgURL, autorLivro, tituloLivro);
					removeOption();
				}
			})

		})
	}
});


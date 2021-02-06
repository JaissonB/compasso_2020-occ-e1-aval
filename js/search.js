let search = $('#search')

search.focus(() => {//quando focado o campo de pesquisa limpa a tela e remove a classe das ancoras
	removeClasseLi();
	booksGrid.empty();

	function pesquise(){
		const pesquiseLivro = `
			<div class="pesquise border">
				<span class="msgPesquise">Search book</span>
				<span class="msgPesquiseSubtitle text-secondary">Search for your favorite book!</span>
				<img src="img/iconePesquisaGray.png"/>
			</div>
			`
		booksGrid.empty()
		booksGrid.append(pesquiseLivro)
		$('.spinner').hide()
	}

	if(search.val().trim() == ""){
		pesquise()
	}else{
		var conteudo = search.val().trim();
		booksGrid.empty();
		$('.spinner').show()
		searchBooks(conteudo).then(data => {
			data.books.forEach(livro => {
				var imgURL = imgPadrao;
				//se o livro tiver imagem adiciona ela, senão fica a imagem padrão
				if (livro.hasOwnProperty('imageLinks')){
						imgURL = livro.imageLinks.thumbnail;
				}
				mostraLivros(livro.id, imgURL, livro.authors, livro.title)
				$('option#oRemove').addClass('d-none')
			})
		})
	}

	search.on('keyup', () => {//identifica o valor do campo de pesquisa e chama a função searchBooks, também apresenta erro caso o livro não seja encontrado
		if(search.val().trim() == ""){
			pesquise()
			return
		}
		var val = search.val().trim();
		
		searchBooks(val).then(data => {
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
		}).catch(() => {

			if(search.val() == ""){
				pesquise()
				return
			}
			const erroSearch = `
			<div class="erroSearch border">
				<span class="msgErroTitle">Not Found!</span>
				<span class="msgErroSubtitle">Book not found.</span>
				<span class="msgErroP">Try Again! If the error persists please contact.</span>
			</div>`

			booksGrid.append(erroSearch)
		})
	})
})
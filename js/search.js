let search = $('#search')

search.focus(() => {//quando focado o campode pesquisa limpa a tela e remove a classe das ancoras
	//booksGrid.empty();
	removeClasseLi();

	search.on('keyup', () => {//identifica o valor do campo de pesquisa e chama a função searchBooks, também apresenta erro caso o livro não seja encontrado
		var val = search.val().trim();
		
		searchBooks(val).then(data => {
			booksGrid.empty();
			data.books.forEach(livro => {
				mostraLivros(livro.id, livro.imageLinks.thumbnail, livro.authors, livro.title)
			})
		}).catch(() => {

			if (val == ""){
				return
			}
			const erroSearch = `
			<div class="erroSearch border">
				<span class="msgErroTitle">Not Found!</span>
				<span class="msgErroSubtitle">Book not found.</span>
				<span class="msgErroP">Try Again! If the error persists please contact.</span>
			</div>`

			booksGrid.append(erroSearch)

			console.log("ERRO na search")
		})
	})

})


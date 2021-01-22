

function carregaCurrentlyReading () {
	getMyBooks().then((data) => {
		data.books.forEach(livro => {
			
			if(livro.shelf == "currentlyReading"){
				
				var imgURL = livro.imageLinks.thumbnail;
				var autorLivro = livro.authors;
				var tituloLivro = livro.title;
					
				mostraLivros(imgURL, autorLivro, tituloLivro);
			}
		})

	}).catch(()=>{
		console.log("ERRO (Algo de errado na var = carregaCurrentlyReading)");
	})
}


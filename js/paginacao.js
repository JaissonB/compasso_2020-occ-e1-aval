const booksGrid = $('ol#lista-livros')

//constantes que servem para passar como parametro na 'function carregaLivros'
const currentlyReading = 'currentlyReading'
const wantToRead = 'wantToRead'
const read = 'read'

$(document).ready(() => {//ao carregar a pagina ...
	carregaLivros(currentlyReading);
});

//função que filtra os livros de acordo com sua 'shelf' recebida por parametro
//e por fim chama a função 'mostraLivros'
function carregaLivros (shelf) {
	getMyBooks().then((data) => {
		data.books.forEach(livro => {
			
			if(livro.shelf == shelf){
				
				var imgURL = livro.imageLinks.thumbnail;
				var autorLivro = livro.authors;
				var tituloLivro = livro.title;
				var id = livro.id;

				mostraLivros(id, imgURL, autorLivro, tituloLivro);
				removeOption();
			}
		})

	}).catch(()=>{
		console.log("ERRO (Algo de errado na function = carregaLivros)");
	})
}

//função que adiciona os dados no DOM
function mostraLivros(id, img, autor, titulo){
	var li = document.createElement('li');

		li.innerHTML=`
			<div class="book">
				<div class="card card-livro">
					<img src="${img}" class="card-img-top img-livro"/>
					<div class="card-body rodape-livro">
						<div class="alinhamento-titulo d-flex align-items-center">
						<h5 class="card-title titulo-livro text-center">${titulo}</h5>
						</div>
						<p class="card-text autor-livro text-secondary">${autor}</p>
						<div class="d-none id" data-bookId="${id}"></div>
						<select class="custom-select custom-select-sm opcoes-mover">
		          <option id="oMove" value="move" selected disabled>Move to...</option>
		          <option id="oCurrentlyReading" value="currentlyReading">Currently Reading</option>
		          <option id="oWantToRead" value="wantToRead">Want to Read</option>
		          <option id="oRead" value="read">Read</option>
		          <option id="oRemove" value="remove">Remove</option>
		        </select>
		      </div>
				</div>
			</div>
		`

	booksGrid.append(li);
}

//função que remove a classe active da ancora selecionada
function removeClasseLi() {
	if ($('li.liCurrently').hasClass('active')){
		$('li.liCurrently').removeClass('active')
	}else if ($('li.liWant').hasClass('active')){
		$('li.liWant').removeClass('active')
	}else if ($('li.liRead').hasClass('active')){
		$('li.liRead').removeClass('active')
	}
}

//função que remove a tag option referente a estante selecionada
function removeOption(){
	if ($('li.liCurrently').hasClass('active')){
		$('option#oCurrentlyReading').addClass('d-none')
	}else if ($('li.liWant').hasClass('active')){
		$('option#oWantToRead').addClass('d-none')
	}else if ($('li.liRead').hasClass('active')){
		$('option#oRead').addClass('d-none')
	}
}





//onchange
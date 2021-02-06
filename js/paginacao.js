const bookShelf = $('div.bookshelf')
const booksGrid = $('section')
var imgPadrao = 'img/erroCapaFundo.png'
//constantes que servem para passar como parametro na 'function carregaLivros'
const currentlyReading = 'currentlyReading'
const wantToRead = 'wantToRead'
const read = 'read'
let shelfAtual = 'currentlyReading';

$(document).ready(() => {//ao carregar a pagina ...
	carregaLivros();
});

//função que filtra os livros de acordo com sua 'shelf' recebida por parametro
//e por fim chama a função 'mostraLivros'
function carregaLivros () {
	let contLivrosCurrently = 0;
	let contLivrosRead = 0;
	let contLivrosWantToRead = 0;

	getMyBooks().then((data) => {
		data.books.forEach(livro => {
			removeClasseDNone()
			var imgURL = 'img/erroCapaFundo.png';

			if (livro.hasOwnProperty('imageLinks')){
				imgURL = livro.imageLinks.thumbnail;
			}
			var autorLivro = livro.authors;
			var tituloLivro = livro.title;
			var id = livro.id;

			var li = `
			<li>
			<div class="book">
				<div class="card card-livro">
					<img src="${imgURL}" class="card-img-top img-livro"/>
					<div class="card-body rodape-livro">
						<div class="alinhamento-titulo d-flex align-items-center">
						<h5 class="card-title titulo-livro text-center">${tituloLivro}</h5>
						</div>
						<p class="card-text autor-livro text-secondary">${autorLivro}</p>
						
						<select data-bookId="${id}" class="custom-select custom-select-sm opcoes-mover">
		          <option id="oMove" value="move" selected disabled>Move to...</option>
		          <option id="oCurrentlyReading" value="currentlyReading">Currently Reading</option>
		          <option id="oWantToRead" value="wantToRead">Want to Read</option>
		          <option id="oRead" value="read">Read</option>
		          <option id="oRemove" value="remove">Remove</option>
		        </select>
		      </div>
				</div>
			</div>
			</li>
			`
			
			if(livro.shelf == currentlyReading){
				var section = $('section.lendo')
				section.append(li);
				contLivrosCurrently++;
			}
			else if(livro.shelf == wantToRead){
				var section = $('section.ler')
				section.append(li);
				contLivrosWantToRead++;
			}
			else if(livro.shelf == read){
				var section = $('section.lido')
				section.append(li);
				contLivrosRead++;
			}
			removeOption()
			$('.spinner').hide()
		})
	}).then(()=>{
		if(contLivrosCurrently==0){
			shelfVazia($('section.lendo'))
		}if(contLivrosWantToRead==0){
			shelfVazia($('section.ler'))
		}if(contLivrosRead==0){
			shelfVazia($('section.lido'))
		}
	})
}

//funcao chamada na 'carregaLivros' para adicionar mensagem de erro caso a shelf esteja vazia
function shelfVazia(section){
	const semLivro = `
		<div class="semLivro border">
			<span class="msgErroTitle">Not Found!</span>
			<span class="msgErroSubtitle">You don't have books on this shelf.</span>
			<span class="msgErroP">Add books to this shelf.</span>
		</div>
	`
	$('.spinner').hide()
	section.append(semLivro)
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
						
						<select data-bookId="${id}" class="custom-select custom-select-sm opcoes-mover">
		          <option id="oMove" value="move" selected disabled>Move to...</option>
		          <option class="optionC" id="oCurrentlyReading" value="currentlyReading">Currently Reading</option>
		          <option class="optionW" id="oWantToRead" value="wantToRead">Want to Read</option>
		          <option class="optionR" id="oRead" value="read">Read</option>
		          <option id="oRemove" value="remove">Remove</option>
		        </select>
		      </div>
				</div>
			</div>
		`

	booksGrid.append(li);
	$('.spinner').hide();
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
	$('option#oCurrentlyReading').removeClass('d-none')
	$('option#oWantToRead').removeClass('d-none')
	$('option#oRead').removeClass('d-none')

	if ($('li.liCurrently').hasClass('active')){
		$('option#oCurrentlyReading').addClass('d-none')
	}else if ($('li.liWant').hasClass('active')){
		$('option#oWantToRead').addClass('d-none')
	}else if ($('li.liRead').hasClass('active')){
		$('option#oRead').addClass('d-none')
	}
}

function removeClasseDNone(){
	$('option#oCurrentlyReading').removeClass('d-none');
	$('option#oWantToRead').removeClass('d-none');
	$('option#oRead').removeClass('d-none');
	$('option#oRemove').removeClass('d-none');
	search.val("");
}
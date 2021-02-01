const booksGrid = $('section')
var imgPadrao = 'img/erroCapaFundo.png'
//constantes que servem para passar como parametro na 'function carregaLivros'
const currentlyReading = 'currentlyReading'
const wantToRead = 'wantToRead'
const read = 'read'
let shelfAtual = 'currentlyReading';

$(document).ready(() => {//ao carregar a pagina ...
	carregaLivros(currentlyReading);
	
});

//função que filtra os livros de acordo com sua 'shelf' recebida por parametro
//e por fim chama a função 'mostraLivros'
function carregaLivros (shelf) {
	let contLivro = 1;
	getMyBooks().then((data) => {
		data.books.forEach(livro => {
			
			if(livro.shelf == shelf){
				contLivro--;
				var imgURL = imgPadrao
				if (livro.hasOwnProperty('imageLinks')){
					imgURL = livro.imageLinks.thumbnail;
				}
				var autorLivro = livro.authors;
				var tituloLivro = livro.title;
				var id = livro.id;

				mostraLivros(id, imgURL, autorLivro, tituloLivro);
				$('.spinner').hide()
				removeOption();
			}

			if(contLivro == data.books.length){
				const semLivro = `
					<div class="semLivro border">
						<span class="msgErroTitle">Not Found!</span>
						<span class="msgErroSubtitle">You don't have books on this shelf.</span>
						<span class="msgErroP">Add books to this shelf.</span>
					</div>
				`
				$('.spinner').hide()
				booksGrid.append(semLivro)

				console.log(data.books.length)
				console.log(contLivro)
			}
			
			contLivro ++;
			
			//console.log(data.books)
		})
	}).then(()=>{
		reHabilitaAncoras()
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

function desabilitaAncoras(ancora){
	if(ancora != 'wantToRead'){
		btnWantToRead.addClass('disabled')
	}	if(ancora != 'currentlyReading'){
		btnCurrentlyReading.addClass('disabled')
	}	if(ancora != 'read'){
		btnRead.addClass('disabled')
	}
}

function reHabilitaAncoras(){
	if(btnWantToRead.hasClass('disabled')){
		btnWantToRead.removeClass('disabled')
	}	if(btnCurrentlyReading.hasClass('disabled')){
		btnCurrentlyReading.removeClass('disabled')
	}	if(btnRead.addClass('disabled')){
		btnRead.removeClass('disabled')
	}
}
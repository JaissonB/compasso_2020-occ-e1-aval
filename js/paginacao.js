const booksGrid = $('ol#lista-livros')


$(document).ready(() => {//ao carregar a pagina ...

	carregaCurrentlyReading();
		
});

function mostraLivros(img, autor, titulo){
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
						<select class="custom-select custom-select-sm opcoes-mover">
		          <option selected value="move" disabled>Move to..</option>
		          <option value="currentlyReading">Currently Reading</option>
		          <option value="wantToRead">Want to Read</option>
		          <option value="read">Read</option>
		          <option value="none">Remove</option>
		        </select>
		      </div>
				</div>
			</div>
		`

	booksGrid.append(li);
}
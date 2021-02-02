$('body').on("change", ".opcoes-mover", function(event) {
	
	var id = this.dataset.bookid;
	var option = this.value;
	var li = this.parentNode.parentNode.parentNode.parentNode

	//usar updateBook para uma shelf nula (null)
	if(option == 'remove'){
		updateBook({id}, null)
	}

	//function moveLivro(){
		updateBook({id}, option).then(()=>{
			location.reload()
		})

		//setTimeout(()=>{
			//recarregaPag()
			
		//}, 2000)
	//}
	//moveLivro()

	
	function recarregaPag(){
		if ($('li.liCurrently').hasClass('active')){
			shelfAtual = 'currentlyReading'
		}else if ($('li.liWant').hasClass('active')){
			shelfAtual = 'wantToRead'
		}else if ($('li.liRead').hasClass('active')){
			shelfAtual = 'read'
		}
		carregaLivros(shelfAtual)
		//console.log(shelfAtual + " dentro da função")
	}
		//console.log(shelfAtual + " fora da função")
})
		




//console.log(this)

//console.log(id)
//console.log({id})

//booksGrid.empty();
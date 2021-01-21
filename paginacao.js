const corpoBody = $("[data-conteudo-home]");
const query = $("[data-input-home]")

const conteudoBody = () => {
	const linha = document.createElement("tr");

	corpoBody.innerHTML = searchBooks(query);
}

corpoBody.innerHTML = getMyBooks();

console.log(getMyBooks());
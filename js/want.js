const btnWantToRead = $('#wantToRead');

btnWantToRead.on('click', () => {
  removeClasseDNone()
  $('option#oWantToRead').addClass('d-none')
  //se nenhuma das ancoras estiverem selecionadas (geralmente quando usa-se o 'search')
  //ao clicar nela o booksGrid é limpo e carregado novamente
  if(!($('li.liWant').hasClass('active')) &&
  !($('li.liCurrently').hasClass('active')) &&
  !($('li.liRead').hasClass('active'))){
    booksGrid.empty()
    $('.spinner').show()
    carregaLivros()
  }

  if ( $('li.liWant').hasClass('active')){}
  else{
    removeClasseLi();
    $('li.liWant').addClass('active');
    
    $('section.lido').addClass('none')
    $('section.lendo').addClass('none')
    $('section.ler').removeClass('none')
  }
})

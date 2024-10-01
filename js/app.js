let jogosAlugados = 1

function alterarStatus(numero) {
    
    let imagem = document.querySelector(`#game-${numero} .dashboard__item__img`);
    let botao = document.querySelector(`#game-${numero} .dashboard__item__button`);

    if (botao.classList.contains('dashboard__item__button--return')){
        let confirmacao = confirm('Tem certeza que deseja devolver o jogo?');
        if (confirmacao != true) {
            return;
        }
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        jogosAlugados--
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        jogosAlugados++
    }

    console.log(`Número de Jogos Alugados: ${jogosAlugados}`);
}
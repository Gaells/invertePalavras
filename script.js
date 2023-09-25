function invertePalavras() {
    const input = document.getElementById('inputWord').value;
    const reverseWord = document.getElementById("reverse-word");

    // Dividir a frase em palavras
    const words = input.split(' ');

    // Inverter cada palavra individualmente
    const reversedWords = words.map(word => inverteUmaPalavra(word));

    // Juntar as palavras novamente em uma frase invertida
    const reversedPhrase = reversedWords.join(' ');

    reverseWord.textContent = reversedPhrase;
}

function inverteUmaPalavra(word) {
    // Converte a palavra em um array de caracteres, inverte-o e, em seguida, junta novamente
    const reversedLetters = word.split('').reverse().join('');
    return reversedLetters;
}

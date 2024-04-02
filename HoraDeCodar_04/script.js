function exercicio01() {
    // 01. Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles.

    var aluno = (prompt("Informe o nome do aluno:"));
    var alunosCadastrados = [];

    while (aluno != "PARE") {
        alunosCadastrados.push(aluno);
        aluno = (prompt("Informe o nome do aluno:"));
    }
    document.write("<br>" + "Lista dos alunos cadastrados: " + alunosCadastrados);
    document.write("<br>" + "Quantidade de alunos cadastrados: " + alunosCadastrados.length);

}



function exercicio02() {
    // 02. Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. Verifique se o planeta que o usuário informou está na array e informe ao usuário.

    var astro = (prompt("Informe o nome de um planeta:"));
    var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];

    document.write("O Planeta informado está no array: " + planetas.includes(astro) + "<br/>");
    document.write("Planetas: " + planetas);
}



function exercicio03() {
    // 03. Vamos criar uma lista de compras.

    // Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.
    // Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista".
    // Peça novamente para o usuário digitar o nome de uma fruta para ser removida.
    // Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado".
    // Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

    var fruits = ["Uva", "Morango", "Abacate", "Limão", "Pera", "Banana"];

    while (fruits.length > 0) {
        var fruta = (prompt("Informe o nome de uma fruta:"));
        
        if (fruits.includes(fruta)) {
            var index = fruits.indexOf(fruta);
            fruits.splice(index, 1);
            alert("Fruta foi retirada da lista");
        } else {
            alert("Fruta indisponível no nosso mercado");
        }
    }

    alert("Lista de compras finalizada.");
}
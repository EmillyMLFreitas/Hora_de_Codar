function exercicio01() {
    // 01. Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem  um valor negativo. O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

    var num1 = parseFloat(prompt("Informe o primeiro número:"));
    var num2 = parseFloat(prompt("Informe o segundo número:"));

    while (num2 <= 0) {
        alert("O segundo valor não pode ser zero ou negativo. Por favor, digite um novo valor: ");
        num2 = parseFloat(prompt("Informe o segundo número:"));
    }
    var divisao = num1 / num2;
    document.write("Os números informados foram: " + num1 + ", " + num2 + ".<br>" + "O resultado da divisão entre eles é: " + divisao);
}



function exercicio02() {
    // 02. Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

    for (var i = 30; i >= 0; i--) {
        document.write("Contagem regressiva... " + i + "<br>");
    }
    document.write("<br>" + "EXPLOSÃO!!!");
}



function exercicio03() {
    // 03. Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente. Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

    for (var i = 10; i >= 1; i--) {
        document.write("Ordem Decrescente: " + i + "<br>");
    }
}



function exercicio04() {
    // 04. Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

    var soma = 0;
    var i = 15;
    var inteiros = [];

    while (i <= 100) {
        inteiros.push(i);
        soma += i;
        i++;
    }
    var media = soma / (i - 1);
    document.write("A média aritmética dos números inteiros entre 15 e 100 é: " + media.toFixed(2) + "</br>Os números inteiros entre eles: " + inteiros);
}



function exercicio05() {
    // 05. Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números \\inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

    var num1 = parseInt(prompt("Informe o primeiro número:"));
    var num2 = parseInt(prompt("Informe o segundo número:"));
    var soma = 0;
    var i = 0;
    var inteiros = [];

    if (num1 > num2) {
        alert("O número 1 tem que ser menor que o número 2");
        exercicio05();
    }
    else {
        while (num1 <= num2) {
            soma += num1;
            inteiros.push(num1);
            num1++;
            i++;
        }
        document.write("A média é : " + soma / i + "</br>Os números inteiros entre eles: " + inteiros);
    }
}



function exercicio06() {
    // 06. Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

    var nota1 = parseFloat(prompt("Informe a 1ª nota:"));
    var nota2 = parseFloat(prompt("Informe a 2ª nota:"));
    var media = (nota1 + nota2) / 2
    var alunosAprovados = [];

    if (media >= 9.5) {
        document.write("</br>Aluno aprovado! Média: " + media);
        alunosAprovados.push(media);
    }
    else {
        document.write("</br>Aluno reprovado! Média: " + media);
    }

    var resposta = confirm("Calcular a média de outro aluno?");
    while (resposta == true) {
        nota1 = parseFloat(prompt("Informe a 1ª nota:"));
        nota2 = parseFloat(prompt("Informe a 2ª nota:"));
        media = (nota1 + nota2) / 2;

        if (media >= 9.5) {
            document.write("</br>Aluno aprovado! Média: " + media);
            alunosAprovados.push(media);
        }
        else {
            document.write("</br>Aluno reprovado! Média: " + media);
        }
        resposta = confirm("Calcular a média de outro aluno Sim/Não?");
    }
    document.write("<br>" + "Quantidade de alunos aprovados: " + alunosAprovados.length);
}



function exercicio07() {
    // 07. Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

    var avaliacoes = 6;
    var notas = [];
    var i = 0;

    while (i < avaliacoes) {
        var nota = parseFloat(prompt("Informe a " + (i + 1) + "ª nota: "));
        if (nota >= 0 && nota <= 10 && !isNaN(nota)) {
            notas.push(nota);
            i++
        }
        else {
            alert("Por favor, digite um novo valor entre 0 e 10:")
        }
    }

    var soma = 0;
    for (var j = 0; j < notas.length; j++) {
        soma += notas[j];
    }
    var media = soma / avaliacoes;
    document.write("A média desse aluno é: " + media.toFixed(2));
}



function exercicio08() {
    // 08. Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário

    var inteiros = [];
    var valorN = parseInt(prompt("Informe um número: "));

    if (valorN > 0 && !isNaN(valorN)) {
        for (var i = 1; i <= valorN; i++) {
            inteiros.push(i);
        }
        document.write("Os valores entre 1 e " + valorN + " são: " + inteiros);
    }
    else {
        alert("Por favor, digite um novo valor maior que 0:");
        exercicio08();
    }
}



function exercicio09() {
    // 09. Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

    var inteiros = [];

    for (var i = 100; i <= 110; i++) {
        inteiros.push(i);
    }
    document.write("Os 10 primeiros números inteiros maiores que 100 são: " + inteiros);
}



function exercicio10() {
    // 10. Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário. 

    var valorN = parseInt(prompt("Infome um valor para as tabuadas: "));

    for (var i = 1; i <= valorN; i++) {
        for (var j = 0; j <= 10; j++) {
            document.write(i + " x " + j + " = " + (i * j) + "<br/>");
        }
        document.write("---------------------" + "<br/>");
    }
}



function exercicio11() {
    // 11. Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo. 

    var qntValores = 10;
    var valores = [];
    var i = 0;

    while (i < qntValores) {
        var valor = parseFloat(prompt("Informe o " + (i + 1) + "ª valor: "));
        if (valor >= 24 && valor <= 42 && !isNaN(valor)) {
            valores.push(valor);
        }
        else {
            alert("Por favor, digite um novo valor entre 24 e 42:");
        }
        i++;
    }

    document.write("Os números lidos entre 24 e 42: " + valores.length + "<br/>" + "Os números lidos fora desse intervalo: " + (qntValores - valores.length));
} 
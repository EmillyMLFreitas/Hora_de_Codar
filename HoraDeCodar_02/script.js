function exercicio01() {
    // 01.  Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

    var num1 = parseInt(prompt("Informe um número:"));
    var num2 = parseInt(prompt("Informe outro número:"));

    if (num1 > num2) {
        document.write("O número maior é: " + num1 + ".");
    }

    else if (num2 > num1) {
        document.write("O número maior é: " + num2 + ".");
    }

    else {
        document.write("Os números são iguais.");
    }
}



function exercicio02() {
    // 02. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

    var num1 = parseInt(prompt("Informe um número:"));

    if (num1 < 0) {
        document.write(num1 + " é um número negativo.");
    }

    else if (num1 > 0) {
        document.write(num1 + " é um número positivo.");
    }

    else {
        document.write("O número informado é igual a zero.");
    }
}



function exercicio03() {
    // 03. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

    var num1 = parseInt(prompt("Informe um número:"));
    var num2 = parseInt(prompt("Informe outro número:"));
    var num3 = parseInt(prompt("Informe mais um número:"));
    var resultado = num1;

    if (num2 > resultado) {
        resultado = num2;
    }

    if (num3 > resultado) {
        resultado = num3;
    }

    if (num1 === num2 && num2 === num3 && num3 === num1) {
        document.write("Os números informados são iguais.");
    } else {
        document.write("O maior número é: " + resultado + ".");
    }
}



function exercicio04() {
    // 04. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

    var num1 = parseInt(prompt("Digite o 1° número:"));
    var num2 = parseInt(prompt("Digite o 2° número:"));
    var num3 = parseInt(prompt("Digite o 3° número:"));
    var resultado = num1;


    if (num1 === num2 && num2 === num3 && num3 === num1) {
        document.write("Os números informados são iguais.");
    }

    else {
        if (num2 < num1 && num2 < num3) {
            resultado = num2
        }
        if (num3 < num1 && num3 < num2) {
            resultado = num3
        }
        document.write("A soma dos dois maiores números é: " + (num1 + num2 + num3 - resultado) + ".");
    }
}



function exercicio05() {
    // 05. Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números \\inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

    var num1 = parseInt(prompt("Informe o 1° número:"));
    var num2 = parseInt(prompt("Informe o 2° número:"));
    var num3 = parseInt(prompt("Informe o 3° número:"));
    var num4 = parseInt(prompt("Informe o 4° número:"));
    var num5 = parseInt(prompt("Informe o 5° número:"));
    var num6 = parseInt(prompt("Informe o 6° número:"));
    var media = (num1 + num2 + num3 + num4 + num5 + num6) / 6;

    document.write("Os números informados foram: " + num1 + ", " + num2 + ", " + + num3 + ", " + num4 + ", " + num5 + " e " + num6 + ".<br>");
    document.write("Média Aritmética: " + media + ".");
}



function exercicio06() {
    // 06. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes).

    var num1 = parseInt(prompt("Informe um número:"));
    var num2 = parseInt(prompt("Informe outro número:"));
    var num3 = parseInt(prompt("Informe mais um número:"));
    var num4 = parseInt(prompt("Informe mais outro número:"));
    var resultado = num1;

    if (num1 === num2 && num2 === num3 && num3 === num4 && num4 === num1) {
        document.write("Os números informados são iguais.");
    }

    else {

        if (num2 > num1 && num2 > num3 && num2 > num4) {
            resultado = num2
        }
        if (num3 > num1 && num3 > num2 && num3 > num4) {
            resultado = num3
        }
        if (num4 > num1 && num4 > num2 && num4 > num3) {
            resultado = num4
        }
        document.write("O Primero número é: " + num1 + "<br/> O Maior número é: " + resultado + "<br/> O último número é: " + num4 + ".");
    }
}



function exercicio07() {
    // 07. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.

    var num1 = parseInt(prompt("Informe o 1° número:"));
    var num2 = parseInt(prompt("Informe o 2° número:"));
    var num3 = parseInt(prompt("Informe o 3° número:"));
    var num4 = parseInt(prompt("Informe o 4° número:"));
    var num5 = parseInt(prompt("Informe o 5° número:"));
    var num6 = parseInt(prompt("Informe o 6° número:"));
    var resultado = 0;

    if (num1 < 72) {
        resultado += num1;
    }

    if (num2 < 72) {
        resultado += num2;
    }

    if (num3 < 72) {
        resultado += num3;
    }

    if (num4 < 72) {
        resultado += num4;
    }

    if (num5 < 72) {
        resultado += num5;
    }

    if (num6 < 72) {
        resultado += num6;
    }

    document.write("Os números informados foram: " + num1 + ", " + num2 + ", " + + num3 + ", " + num4 + ", " + num5 + " e " + num6 + ".<br>");
    document.write("A soma dos números inferiores a 72 é: " + resultado + ".");
}



function exercicio08() {
    // 08. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente".

    var num1 = parseInt(prompt("Informe o 1° número:"));
    var num2 = parseInt(prompt("Informe o 2° número:"));
    var num3 = parseInt(prompt("Informe o 3° número:"));
    var num4 = parseInt(prompt("Informe o 4° número:"));
    var resultado = 0;

    if (num1 >= 0 && num1 <= 10) {
        resultado += num1
    }

    if (num2 >= 0 && num2 <= 10) {
        resultado += num2
    }

    if (num3 >= 0 && num3 <= 10) {
        resultado += num3
    }

    if (num4 >= 0 && num4 <= 10) {
        resultado += num4
    }

    var media = resultado / 4;

    if (media > 5) {
        document.write("Você passou no teste! E sua média foi: " + media + ".");
    }
    else {
        document.write("Tente novamente. A sua média foi: " + media + ".");
    }
}



function exercicio09() {
    // 09. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

    var anoNasc = parseInt(prompt("Informe seu ano de nascimento:"));
    var idadeAtual = (2024 - anoNasc);

    if (idadeAtual >= 16) {
        document.write("Você tem " + idadeAtual + " anos e você pode votar.");
    }

    else {
        document.write("Você tem " + idadeAtual + " anos e você Não pode votar.");
    }
}



function exercicio10() {
    // 10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal.

    var sexo = prompt("Informe seu sexo - '1' (Feminino) '2' (Masculino):");

    if (sexo == "1") {
        var altura = parseFloat(prompt("Informe sua altura:"));
        var pesoIdealFem = (62.1 * altura) - 44.7;
        document.write("M - seu peso ideal é " + pesoIdealFem.toFixed(1) + " kg.");
    }

    else if (sexo == "2") {
        var altura = parseFloat(prompt("Informe sua altura:"));
        var pesoIdealMasc = (72.7 * altura) - 58;
        document.write("H - seu peso ideal é " + pesoIdealMasc.toFixed(1) + " kg.");
    }

    else {
        document.write("Opção inválida.");
    }
}



function exercicio11() {
    // 11. Uma micro calculadora <br> Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: ). O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos <br> 1 - Adição, 2 - Subtração, 3 - Divisão, 4 - Multiplicação 

    var num1 = parseInt(prompt("Informe o 1° número:"));
    var num2 = parseInt(prompt("Informe o 2° número:"));
    var opcao = prompt("Informe qual operação deseja realizar: \n '1' Adição | '2' Subtração | '3' Divisão | '4' Multiplicação ");
    var adicao = num1 + num2;
    var subtracao = num1 - num2;
    var divisao = num1 / num2;
    var multiplicacao = num1 * num2;

    if (opcao == "1") {
        document.write("Resultado: " + num1 + " + " + num2 + " = " + adicao);
    }

    else if (opcao == "2") {
        document.write("Resultado: " + num1 + " - " + num2 + " = " + subtracao);
    }

    else if (opcao == "3") {
        document.write("Resultado: " + num1 + " / " + num2 + " = " + divisao);
    }

    else if (opcao == "4") {
        document.write("Resultado: " + num1 + " * " + num2 + " = " + multiplicacao);
    }

    else {
        document.write("Opção inválida.");
    }
} 
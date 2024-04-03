function exercicio01() {
    // 01.  Escreva um programa em Javascript e crie uma variável chamada "nome_do_carro" e atribua-a um valor "Fusca". Exiba-a ao usuário.

    var nome_do_carro = "Fusca"
    document.write(nome_do_carro);
}



function exercicio02() {
    // 02. Escreva um programa em Javascript em que o usuário informe o seu nome e exiba a mensagem "Olá, [NomeDoUsuario]".

    var nome = prompt("Informe seu nome:");
    document.write("Olá, " + nome + ".");
}



function exercicio03() {
    // 03. Escreva um programa em Javascript em que o usuário informe o seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem "Olá, [NomeDoUsuario], sua idade é [idade]".

    var nome = prompt("Informe seu nome:");
    var idade = prompt("Informe sua idade:");
    document.write("Olá, " + nome + ", sua idade é " + idade + ".");
}



function retangulo04() {
    // 04. Áreas de Figuras Planas: Retângulo.

    var base = parseInt(prompt("Informe a base do retângulo:"));
    var altura = parseInt(prompt("Informe a altura do retângulo:"));
    var area = base * altura;

    document.write("Área do Retângulo: " + area + ".");
}



function quadrado04() {
    // 04. Áreas de Figuras Planas: Quadrado.

    var lado = parseInt(prompt("Informe o lado do quadrado:"));
    var area = lado ** 2;

    document.write("Área do Quadrado: " + area + ".");
}


function losango04() {
    // 04. Áreas de Figuras Planas: Losango.

    var D = parseInt(prompt("Informe a diagonal maior do losango:"));
    var d = parseInt(prompt("Informe a diagonal menor do losango:"));
    var area = (D * d) / 2;

    document.write("Área do Losango: " + area + ".");
}



function trapezio04() {
    // 04. Áreas de Figuras Planas: Trápezio.

    var B = parseInt(prompt("Informe a base maior do trápezio:"));
    var b = parseInt(prompt("Informe a base menor do trápezio:"));
    var altura = parseInt(prompt("Informe a altura do trápezio:"));
    var area = (B + b) * altura / 2;

    document.write("Área do Trápezio: " + area + ".");
}



function paralelogramo04() {
    // 04. Áreas de Figuras Planas: Paralelogramo.

    var base = parseInt(prompt("Informe a base do paralelogramo:"));
    var altura = parseInt(prompt("Informe a altura do paralelogramo:"));
    var area = base * altura;

    document.write("Área do Paralelogramo: " + area + ".");

}

function triangulo04() {
    // 04. Áreas de Figuras Planas: Triângulo.

    var base = parseInt(prompt("Informe a base do triângulo:"));
    var altura = parseInt(prompt("Informe a altura do triângulo:"));
    var area = (base * altura) / 2;

    document.write("Área do Triângulo: " + area + ".");
}


function circulo04() {
    // 04. Áreas de Figuras Planas: Círculo.

    var raio = parseInt(prompt("Informe o raio do círculo:"));
    var area = 3.14 * raio ** 2;

    document.write("Área do Círculo: " + area + ".");
}
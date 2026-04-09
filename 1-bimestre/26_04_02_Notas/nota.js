function calcular() {
    let ra = document.getElementById("ra").value;
    let nome = document.getElementById("nome").value;

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let n4 = parseFloat(document.getElementById("n4").value);
    let me = parseFloat(document.getElementById("me").value);

    let ma = (n1 + (n2 * 2) + (n3 * 3) + (n4 * 4) + me) / 11;

    let conceito = "";
    let situacao = "";

    if (ma >= 9) {
        conceito = "A";
    } else if (ma >= 7.5) {
        conceito = "B";
    } else if (ma >= 6) {
        conceito = "C";
    } else if (ma >= 4) {
        conceito = "D";
    } else {
        conceito = "E";
    }

    if (conceito === "A" || conceito === "B" || conceito === "C") {
        situacao = "APROVADO";
    } else {
        situacao = "REPROVADO";
    }

    document.getElementById("resultado").innerHTML = `
        <strong>RA:</strong> ${ra} <br>
        <strong>Nome:</strong> ${nome} <br>
        <strong>Notas:</strong> ${n1}, ${n2}, ${n3}, ${n4} <br>
        <strong>Média dos Exercícios:</strong> ${me} <br>
        <strong>Média de Aproveitamento:</strong> ${ma.toFixed(2)} <br>
        <strong>Conceito:</strong> ${conceito} <br>
        <strong>Situação:</strong> ${situacao}
    `;
}
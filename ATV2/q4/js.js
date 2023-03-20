function calcular() {
    var populacaoA = parseFloat(document.getElementById("populacaoA").value);
    var taxaA = parseFloat(document.getElementById("taxaA").value);
    var populacaoB = parseFloat(document.getElementById("populacaoB").value);
    var taxaB = parseFloat(document.getElementById("taxaB").value);

    if (isNaN(populacaoA) || isNaN (taxaA) || isNaN (populacaoB) || isNaN(taxaB)) {
      alert("Por favor, preencha todos os campos com valores numéricos.");
    }

    var anos = 0;
    while (populacaoA < populacaoB) {
      populacaoA *= 1 + taxaA / 100;
      populacaoB *= 1 + taxaB / 100;
      anos++;
    }

    document.getElementById("resultado").innerHTML = "Serão necessários " + anos + " anos para que a população de A ultrapasse ou iguale a população de B.";

    document.getElementById("populacaoA").value = "";
    document.getElementById("taxaA").value = "";
    document.getElementById("populacaoB").value = "";
    document.getElementById("taxaB").value = "";
}
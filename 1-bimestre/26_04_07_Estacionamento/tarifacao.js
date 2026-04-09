 function calcular() {

      let checkin = new Date(document.getElementById("checkin").value);
      let checkout = new Date(document.getElementById("checkout").value);  

      let carroGrande = document.getElementById("carroGrande").checked;
      let clienteFrequente = document.getElementById("clienteFrequente").checked;

  if (isNaN(checkin) || isNaN(checkout)) {
    alert("Informe datas válidas.");
    return;
  }

  if (checkin >= checkout) {
    alert("A saída deve ser depois da entrada.");
    return;
  }

  let diferencaMs = checkout - checkin;
    let horas = diferencaMs / (1000 * 60 * 60);

     let valor = 0;

  if (horas >= 24) {
    let dias = Math.floor(horas / 24);
    let resto = horas % 24;

    valor += dias * 60;

    if (resto > 0) {
      valor += resto * 2.5;
    }


      } else {
        valor = 5;

      if (horas > 1) {
          valor += (horas - 1) * 2.5;
       }
      }

      if (carroGrande) {
        valor *= 1.25;
      }

      if (clienteFrequente) {
        valor *= 0.95;
      }

      document.getElementById("resultado").innerText =
        "O valor total é R$ " + valor.toFixed(2);
    }

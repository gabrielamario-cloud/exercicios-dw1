const produtos = [
  { nome: "Dogão Simples", preco: 15 },
  { nome: "Dogão Completo", preco: 20 },
  { nome: "X-Burguer", preco: 22 },
  { nome: "X-Tudo", preco: 50 },
  { nome: "Refrigerante 2L", preco: 10 }
];

let carrinho = {};
let total = 0;

const lista = document.getElementById("lista-produtos");
const pedidos = document.getElementById("itens-pedidos");
const totalSpan = document.getElementById("total");

function renderProdutos() {
  const table = document.createElement("table");

  table.innerHTML = `
    <tr>
      <th>Produto</th>
      <th>Preço</th>
      <th>Qtd</th>
    </tr>
  `;

  produtos.forEach((produto, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${produto.nome}</td>
      <td>R$ ${produto.preco.toFixed(2)}</td>
      <td>
        <input type="number" min="0" value="0"
        oninput="validarNumero(this, ${index})">
      </td>
    `;

    table.appendChild(tr);
  });

  lista.appendChild(table);
}

function validarNumero(input, index) {
  input.value = input.value.replace(/[^0-9]/g, "");

  let quantidade = parseInt(input.value);


  if (isNaN(quantidade) || quantidade < 0) {
    quantidade = 0;
    input.value = 0;
  }

  if (quantidade > 0) {
    carrinho[index] = {
      nome: produtos[index].nome,
      preco: produtos[index].preco,
      quantidade: quantidade
    };
  } else {
    delete carrinho[index];
  }

  atualizarPedidos();
}

function atualizarPedidos() {
  pedidos.innerHTML = "";
  total = 0;

  for (let index in carrinho) {
    const item = carrinho[index];

    const li = document.createElement("li");
    li.textContent = `${item.nome} (x${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2)}`;

    pedidos.appendChild(li);

    total += item.preco * item.quantidade;
  }

  totalSpan.textContent = total.toFixed(2);
}


renderProdutos();
function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("senha").value;

  if (user === "admin" && pass === "123") {
    window.location.href = "home.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}
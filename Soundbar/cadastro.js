const olho = document.getElementById("olho");
const botaoCadastro = document.getElementById("botaoCadastro");

const nome = document.getElementById("nome");
const labelNome = document.getElementById("labelNome");

const email = document.getElementById("email");
const labelEmail = document.getElementById("labelEmail");

const senha = document.getElementById("senha");
const labelSenha = document.getElementById("labelSenha");

const listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

nome.addEventListener("keyup", () => {
  if (nome.value.length <= 3) {
    labelNome.setAttribute("style", "color:red");
    labelNome.innerHTML = "Insira no mínimo 4 caracteres";
    nome.setAttribute("style", "border-color:red");
  } else {
    labelNome.setAttribute("style", "color:green");
    nome.setAttribute("style", "border-color:green");
  }
});

email.addEventListener("keyup", () => {
  if (email.value.length <= 3) {
    labelEmail.setAttribute("style", "color:red");
    labelEmail.innerHTML = "Insira no mínimo 4 caracteres";
    email.setAttribute("style", "border-color:red");
  } else {
    labelEmail.setAttribute("style", "color:green");
    email.setAttribute("style", "border-color:green");
  }
});

senha.addEventListener("keyup", () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute("style", "color:red");
    labelSenha.innerHTML = "Insira no mínimo 6 caracteres";
    senha.setAttribute("style", "border-color:red");
  } else {
    labelSenha.setAttribute("style", "color:green");
    senha.setAttribute("style", "border-color:green");
  }
});

function cadastrar() {
  const usuario = {
    nome: nome.value,
    email: email.value,
    senha: senha.value
  };
  
  // Verifica se o email já foi cadastrado
  const userExistente = listaUser.find(user => user.email === usuario.email);
  if (userExistente) {
    alert("Este email já foi cadastrado.");
    return;
  }
  
  // Verifica se todos os campos estão preenchidos
  if (!usuario.nome || !usuario.email || !usuario.senha) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Adiciona o usuário na lista de usuários
  listaUser.push(usuario);
  localStorage.setItem('listaUser', JSON.stringify(listaUser));
  
  alert("Cadastro realizado com sucesso!");
  window.location.href = "index.html";
  
}

olho.addEventListener("click", function () {
  showHide();
});

function showHide() {
  const password = document.getElementById("senha");
  if (password.type == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
}

botaoCadastro.addEventListener("click", function () {
  cadastrar();
});
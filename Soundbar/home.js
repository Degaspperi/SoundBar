const olho = document.getElementById("olho");

olho.addEventListener("click", function (){
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

const botaoEntrar = document.querySelector("#botaoEntrar");

botaoEntrar.addEventListener("click", function(){
  logar();
})

function logar(){
  let nome = document.querySelector("#nome")
  let nomeLabel = document.querySelector("#nomeLabel")

  let senha = document.querySelector("#senha")
  let senhaLabel = document.querySelector("#senhaLabel")

  let msgError = document.querySelector("#msgError")
  let listaUser = []

  if(localStorage.getItem("listaUser")) {
    listaUser = JSON.parse(localStorage.getItem("listaUser"))
  }

  let userValid = {
    nome:'',
    email:'',
    senha:''
  }

  listaUser.forEach((item) => {
    if(nome.value == item.nome && senha.value  == item.senha){
      userValid = {
        nome: item.nome,
        email: item.email,
        senha: item.senha
      }
    }
  })

  console.log(userValid)

  if (userValid.nome !== '' && userValid.email !== '' && userValid.senha !== '') {
    window.location.href = "file:///D:/VsProgramas/Soundbar/index.html";
  } else {
    alert("Senha ou usuário não encontrado.")
  }
}
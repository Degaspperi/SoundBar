const olho = document.getElementById("olho")

olho.addEventListener("click", function (){
    showHide();
});

function showHide() {
    const password = document.getElementById("password");
    if (password.type == "password") {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  }

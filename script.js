
  document.getElementById("botao-chamada").addEventListener("click", function () {
    window.open("https://bit.ly/formulário_Lorran", "_blank", "noopener,noreferrer");
  });


// ------------------------------------


    document.getElementById("botao-seta-baixo").addEventListener("click", function () {
        const section = document.getElementById("botao-chamada");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }

    });

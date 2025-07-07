document.addEventListener("DOMContentLoaded", function () {
    const textareas = document.querySelectorAll(".text-area");

    textareas.forEach(textarea => {
        textarea.addEventListener("input", function () {
            this.style.height = "auto"; // Reseta a altura antes de calcular o novo tamanho
            this.style.height = this.scrollHeight + "px"; // Define a nova altura
        });
    });
});


function imprimirFormulario() {
    // 1. Pegue o valor ANTES de mexer no DOM
    const nomeElemento = document.getElementById("nome");
    if (!nomeElemento) {
        alert("Campo nome não encontrado!");
        return;
    }
    const nomeCampo = nomeElemento.value.trim();
    const nomeLimpo = nomeCampo.replace(/[\\/:*?"<>|]/g, '').substring(0, 15);

    // 2. Substitua os textareas por divs
    const textareas = document.querySelectorAll(".text-area");
    const divs = [];
    textareas.forEach(textarea => {
        const div = document.createElement("div");
        div.textContent = textarea.value;
        div.style.cssText = `
            min-height: ${textarea.scrollHeight}px;
            width: ${textarea.offsetWidth}px;
            border: 1px solid #ccc;
            padding: 5px;
            white-space: pre-wrap;
            overflow-wrap: break-word;
            text-align: left;
            font-size: 2rem;      /* <-- Mantém o mesmo tamanho da fonte */
            text-align: justify;  /* <-- Mantém a mesma alinhamento que seu CSS */
        `;
        textarea.parentNode.replaceChild(div, textarea);
        divs.push({ div, textarea });
    });

    // 3. Atualiza título da página
    const tituloOriginal = document.title;
    document.title = `${nomeLimpo || "Sem_Nome"} - Anamnese Financeira`;

    // 4. Executa a impressão
    window.print();

    // 5. Restaura os textareas e o título original após impressão
    setTimeout(() => {
        divs.forEach(({ div, textarea }) => {
            div.parentNode.replaceChild(textarea, div);
        });
        
    }, 1000);
}
// Selecione o elemento #about
const aboutElement = document.querySelector('#about');

// Crie o observador de interseção
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    // Se o #about estiver na tela, adiciona a classe .in-view
    if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
    } else {
        // Se o #about sair da tela, remove a classe .in-view
        entry.target.classList.remove('in-view');
    }
});
}, {
threshold: 0.5 // Define que 50% do elemento precisa estar visível para ativar a classe
});

// Comece a observar o elemento #about
observer.observe(aboutElement);

//--------------------------------------------------------

    document.getElementById("botao-chamada").addEventListener("click", function () {
        const section = document.getElementById("contact");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
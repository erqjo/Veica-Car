const botoes = document.querySelectorAll(".ver-mais");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const descricao = botao.nextElementSibling;

        descricao.classList.toggle("ativo");

        if (descricao.classList.contains("ativo")) {
            botao.textContent = "Ver menos";
        } else {
            botao.textContent = "Ver mais";
        }
    });
});
const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const mensagem = document.querySelector("#mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
    } else {
        alert("Mensagem enviada com sucesso!");
        form.reset(); // 👈 AQUI
    }
});
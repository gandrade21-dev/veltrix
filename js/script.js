const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos.");
        return;
    }

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);

    form.reset();
});
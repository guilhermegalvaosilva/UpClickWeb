document.querySelectorAll(".empresa-card button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const empresa = btn.dataset.empresa;
    window.open(
      `https://wa.me/5599999999999?text=Olá! Tenho interesse na empresa ${empresa}.`,
      "_blank"
    );
  });
});

document.getElementById("formContato").addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("mensagem").value;
  const texto = `Olá! Meu nome é ${nome}. Email: ${email}. Mensagem: ${msg}`;
  window.open(
    `https://wa.me/5599999999999?text=${encodeURIComponent(texto)}`,
    "_blank"
  );
});

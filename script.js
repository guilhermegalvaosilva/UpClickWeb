// FAQ Accordion - Versão melhorada
document.addEventListener("DOMContentLoaded", function () {
  console.log("Script carregado");

  const faqHeaders = document.querySelectorAll(".faq-header");
  console.log("Encontrados " + faqHeaders.length + " headers");

  faqHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const faqItem = this.closest(".faq-item");
      const isActive = faqItem.classList.contains("ativo");

      // Fecha todos os abertos
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("ativo");
      });

      // Abre o clicado se não estava aberto
      if (!isActive) {
        faqItem.classList.add("ativo");
      }
    });
  });
});

// Buttons
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".btn-empresa").forEach((btn) => {
    btn.addEventListener("click", () => {
      const empresa = btn.dataset.empresa;
      window.open(
        `https://wa.me/5599999999999?text=Olá! Tenho interesse em saber mais sobre ${empresa}.`,
        "_blank",
      );
    });
  });
});

// Form
document.addEventListener("DOMContentLoaded", function () {
  const formContato = document.querySelector(".contato-form");
  if (formContato) {
    formContato.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = formContato.querySelector('input[type="text"]').value;
      const email = formContato.querySelector('input[type="email"]').value;
      const telefone = formContato.querySelector('input[type="tel"]').value;
      const empresa =
        formContato.querySelectorAll('input[type="text"]')[1].value;
      const mensagem = formContato.querySelector("textarea").value;

      const texto = `Olá! Meu nome é ${nome}.\nEmail: ${email}\nTelefone: ${telefone}\nEmpresa: ${empresa}\nMensagem: ${mensagem}`;
      window.open(
        `https://wa.me/5599999999999?text=${encodeURIComponent(texto)}`,
        "_blank",
      );
    });
  }
});

document.querySelectorAll(".faq-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const isActive = item.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

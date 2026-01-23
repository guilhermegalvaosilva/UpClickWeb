document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     FAQ ACCORDION
  ========================= */
  const faqHeaders = document.querySelectorAll(".faq-header");

  faqHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.closest(".faq-item");
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach((faq) => {
        faq.classList.remove("active");
        const btn = faq.querySelector(".faq-header");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* =========================
     BOTÕES EMPRESA (WHATSAPP)
  ========================= */
  document.querySelectorAll(".btn-empresa").forEach((btn) => {
    btn.addEventListener("click", () => {
      const empresa = btn.dataset.empresa || "sua empresa";

      const url = `https://wa.me/55995289436?text=${encodeURIComponent(
        `Olá! Tenho interesse em saber mais sobre a solução para ${empresa}.`,
      )}`;

      window.open(url, "_blank");
    });
  });

  /* =========================
     FORMULÁRIO DE CONTATO
  ========================= */
  const formContato = document.querySelector(".contato-form");

  if (formContato) {
    formContato.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = formContato.querySelector('input[name="nome"]')?.value || "";
      const email =
        formContato.querySelector('input[name="email"]')?.value || "";
      const telefone =
        formContato.querySelector('input[name="telefone"]')?.value || "";
      const empresa =
        formContato.querySelector('input[name="empresa"]')?.value || "";
      const mensagem = formContato.querySelector("textarea")?.value || "";

      const texto = `
Olá! Meu nome é ${nome}.
Telefone: ${telefone}
Empresa: ${empresa}

Mensagem:
${mensagem}
      `;

      const url = `https://wa.me/55995289436?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank");
    });
  }
});

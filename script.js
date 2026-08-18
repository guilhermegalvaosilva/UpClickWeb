const menu = document.querySelector(".menu"),
  nav = document.querySelector("nav");
menu?.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
  document.body.classList.toggle("lock", !open);
});
nav?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("lock");
  }),
);
document.querySelectorAll(".filter").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
    document
      .querySelectorAll(".work")
      .forEach(
        (w) =>
          (w.hidden =
            btn.dataset.filter !== "all" &&
            w.dataset.cat !== btn.dataset.filter),
      );
  }),
);
document.querySelectorAll(".faqs button").forEach((btn) =>
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".faqs button").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      document.getElementById(b.getAttribute("aria-controls")).hidden = true;
    });
    if (!open) {
      btn.setAttribute("aria-expanded", "true");
      document.getElementById(btn.getAttribute("aria-controls")).hidden = false;
    }
  }),
);
const form = document.getElementById("contactForm"),
  status = document.getElementById("formStatus"),
  toast = document.getElementById("toast");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = "Preencha corretamente os campos obrigatórios.";
    form.reportValidity();
    return;
  }
  status.textContent = "";
  const d = Object.fromEntries(new FormData(form).entries()),
    message = [
      `Olá! Quero conversar sobre um projeto com a UpClickWeb.`,
      ``,
      `Nome: ${d.nome}`,
      `E-mail: ${d.email}`,
      `Telefone: ${d.telefone || "-"}`,
      `Empresa: ${d.empresa || "-"}`,
      ``,
      `Projeto: ${d.mensagem}`,
    ].join("\n");
  window.open(
    `https://wa.me/5561995289436?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener",
  );
  toast.textContent = "WhatsApp aberto com a mensagem pronta para confirmar.";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
});

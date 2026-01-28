// ====== PORTFÓLIO (FILTRO) ======
const filterButtons = document.querySelectorAll(".filter");
const works = document.querySelectorAll(".work");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    works.forEach((work) => {
      const cat = work.dataset.cat;
      const show = filter === "all" || cat === filter;
      work.style.display = show ? "block" : "none";
    });
  });
});

// ====== FAQ (ACORDEÃO) ======
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const header = item.querySelector(".faq-header");
  if (!header) return;

  header.addEventListener("click", () => {
    faqItems.forEach((i) => i !== item && i.classList.remove("active"));
    item.classList.toggle("active");
  });
});

// ====== TOAST (opcional, se você tiver no HTML) ======
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
let toastTimer;

function showToast(msg, type = "info") {
  if (!toast || !toastMessage) return;
  toastMessage.textContent = msg;
  toast.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

// ====== FORM -> WHATSAPP ======
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

// Seu número (sem espaços)
const WHATSAPP_NUMBER = "5561995289436";

function buildWhatsAppMessage(data) {
  return [
    "Olá! Quero fazer um site com a UpClickWeb.",
    "",
    `Nome: ${data.nome || "-"}`,
    `Email: ${data.email || "-"}`,
    `Telefone: ${data.telefone || "-"}`,
    `Empresa: ${data.empresa || "-"}`,
    "",
    `Mensagem: ${data.mensagem || "-"}`,
  ].join("\n");
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fd = new FormData(contactForm);

    const data = {
      nome: (fd.get("nome") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      telefone: (fd.get("telefone") || "").toString().trim(),
      empresa: (fd.get("empresa") || "").toString().trim(),
      mensagem: (fd.get("mensagem") || "").toString().trim(),
    };

    // validação básica
    if (!data.nome || !data.email || !data.mensagem) {
      showToast("Preencha nome, email e mensagem.", "error");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "ABRINDO WHATSAPP...";
    }

    const text = encodeURIComponent(buildWhatsAppMessage(data));

    // wa.me abre no WhatsApp Web / App
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    // abre em nova aba
    window.open(url, "_blank", "noopener");

    showToast("WhatsApp aberto com sua mensagem ✅", "success");

    // opcional: limpar o form
    contactForm.reset();

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "ENVIAR NO WHATSAPP";
    }
  });
}

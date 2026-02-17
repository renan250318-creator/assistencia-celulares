/* =========================================================
   SCRIPT JS - Landing Page ConsertCell
   Objetivo:
   - Adicionar interatividade básica
   - Mostrar domínio de JavaScript e DOM
   - Sem complexidade desnecessária
========================================================= */

/* ---------------------------------------------------------
   1) Scroll suave para links internos (caso existam)
--------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/* ---------------------------------------------------------
   2) Monitorar cliques nos botões de WhatsApp
   (Útil para analytics futuramente)
--------------------------------------------------------- */
const botoesWhatsapp = document.querySelectorAll('.btn-whatsapp, .btn-hero');

botoesWhatsapp.forEach(botao => {
  botao.addEventListener('click', () => {
    console.log('Botão de WhatsApp clicado');
  });
});

/* ---------------------------------------------------------
   3) Interação com a seção "Como funciona"
   Apenas para registrar visualização
--------------------------------------------------------- */
const summaryFluxo = document.querySelector('.fluxo summary');

if (summaryFluxo) {
  summaryFluxo.addEventListener('click', () => {
    console.log('Fluxo de atendimento visualizado');
  });
}
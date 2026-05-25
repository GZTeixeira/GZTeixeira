// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.getElementById("whatsappBtn");

    // Configurações do disparo do WhatsApp
    const numeroTelefone = "5519992812280"; // Código do país (55) + DDD (19) + Número
    const mensagemInicial = "Olá, gostaria de iniciar um atendimento agendado.";

    // Função para abrir o link correto baseado no dispositivo
    whatsappButton.addEventListener("click", function () {
        // Formata o texto para a URL
        const textoFormatado = encodeURIComponent(mensagemInicial);
        
        // Monta o link da API oficial do WhatsApp
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${textoFormatado}`;
        
        // Abre em uma nova aba de forma limpa e segura
        window.open(urlWhatsApp, '_blank');
    });
});

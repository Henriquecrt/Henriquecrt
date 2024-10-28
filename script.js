document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    const nome = document.getElementById('nome').value;
    const data = document.getElementByIdgetElementById('data').value;
    const hora = document.getElementById('hora').value;

    // Aqui você pode adicionar lógica para salvar o agendamento
    // Por enquanto, vamos apenas mostrar uma mensagem
    const mensagem = `Agendamento confirmado para ${nome} no dia ${data} às ${hora}.`;
    document.getElementById('mensagem').innerText = mensagem;

    // Limpar o formulário
    this.reset();
});
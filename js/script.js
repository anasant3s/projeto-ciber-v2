const emails = [
    {
      remetente: "magazineluiiza@gmail.com",
      assunto: "Compra no valor de R$ 3.400 realizada!!",
      corpo: "Clique aqui caso não reconheça a compra e queira cancelar.",
      phishing: true
    },
    {
      remetente: "rh@empresa.com",
      assunto: "Reunião de equipe agendada",
      corpo: "A reunião ocorrerá amanhã às 10h no Teams.",
      phishing: false
    },
    {
      remetente: "oferta@lojasmercadolivre.com",
      assunto: "Parabéns! Você ganhou um PS5 no nosso sorteio!",
      corpo: "Para validar seu prêmio, clique no link abaixo e insira seus dados.",
      phishing: true
    },
    {
      remetente: "coordenador@universidade.edu",
      assunto: "Entrega do trabalho final",
      corpo: "Não se esqueça do prazo até sexta-feira.",
      phishing: false
    }
  ];
  
  function startQuiz() {
    const container = document.getElementById("emails");
    const quizSection = document.getElementById('quiz');
    quizSection.style.display = "block"; // Exibe o quiz
    quizSection.scrollIntoView({ behavior: 'smooth' });
    container.innerHTML = ""; // Limpa o conteúdo existente
  
    emails.forEach((email, index) => {
      const card = document.createElement("div");
      card.classList.add("email");
  
      card.innerHTML = `
        <h4>De: ${email.remetente}</h4>
        <p><strong>Assunto:</strong> ${email.assunto}</p>
        <p>${email.corpo}</p>
        <button class="phishing" onclick="verificar(${index}, true)">Phishing</button>
        <button class="safe" onclick="verificar(${index}, false)">Seguro</button>
        <p id="resposta-${index}"></p>
      `;
  
      container.appendChild(card);
    });
  }
  
  function verificar(index, respostaUsuario) {
    const email = emails[index];
    const resposta = document.getElementById(`resposta-${index}`);
  
    if (respostaUsuario === email.phishing) {
      resposta.textContent = "✅ Resposta correta, Boa!";
      resposta.style.color = "green";
    } else {
      resposta.textContent = "❌ Resposta errada.";
      resposta.style.color = "red";
    }
  }
  
  // Gráfico de cibersegurança
  const ctx = document.getElementById('cibersegurancaChart').getContext('2d');
  const cibersegurancaChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Phishing', 'Ransomware', 'Malware'],
      datasets: [{
        label: 'Incidentes por Tipo',
        data: [60, 30, 45],
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
        borderColor: ['#FF5733', '#33FF57', '#3357FF'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
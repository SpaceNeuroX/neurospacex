particlesJS('particles-js', {
  particles: {
    number: { value: 100 },
    size: { value: 3 },
    move: { enable: true, speed: 1 },
    opacity: { value: 0.3 }
  }
});

const initData = Telegram.WebApp.initData || null;

if (!initData) {
  document.body.innerHTML = '<div class="content"><h1>Ошибка</h1><p>Эта страница должна быть открыта через Telegram Web App.</p></div>';
} else {
  console.log('Init Data:', initData);
}

async function checkSpam() {
  const message = document.getElementById('message').value;
  const resultDiv = document.getElementById('result');
  const loadingDiv = document.getElementById('loading');

  if (!message.trim()) {
    resultDiv.textContent = "Введите сообщение.";
    resultDiv.style.color = "#e91e63";
    return;
  }

  loadingDiv.style.display = 'block';
  resultDiv.textContent = "";

  try {
    const response = await fetch('https://neurospacex-ruspam.hf.space/api/check_spam', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': initData
      },
      body: JSON.stringify({
        message: message,
        model_name: 'ruSpamNS'
      })
    });

    if (!response.ok) {
      throw new Error("Ошибка API: " + response.status);
    }

    const data = await response.json();
    const { is_spam, confidence } = data;

    loadingDiv.style.display = 'none';
    resultDiv.textContent = is_spam
      ? `Сообщение определено как СПАМ (уверенность: ${(confidence * 100).toFixed(2)}%)`
      : `Сообщение НЕ является спамом (уверенность: ${(confidence * 100).toFixed(2)}%)`;
    resultDiv.style.color = is_spam ? "#e91e63" : "#4CAF50";

  } catch (error) {
    loadingDiv.style.display = 'none';
    resultDiv.textContent = "Произошла ошибка: " + error.message;
    resultDiv.style.color = "#e91e63";
  }
}

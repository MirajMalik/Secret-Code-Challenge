
document.getElementById('btn').addEventListener('click', function () {
      const inputField = document.getElementById('submit-field');
      const inputText = inputField.value.trim();
      const hiddenSecret = document.getElementById('hidden-secret');
      const hiddenMessage = document.getElementById('hidden-message');

      if (inputText === 'idiot' || inputText === 'Idiot') {
        hiddenSecret.removeAttribute('hidden');
        hiddenMessage.setAttribute('hidden', true);
      } else {
        hiddenMessage.removeAttribute('hidden');
        hiddenSecret.setAttribute('hidden', true);
      }
      inputField.value = '';
    });
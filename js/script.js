'use strict';

document.querySelector('#year').textContent = new Date().getFullYear();
const copyButton = document.querySelector('#copy-phone');
const copyStatus = document.querySelector('#copy-status');
const manualCopy = document.querySelector('#manual-copy');
const phoneInput = document.querySelector('#phone-select');

copyButton.addEventListener('click', async () => {
  copyStatus.textContent = '';
  manualCopy.hidden = true;
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('956 461 296');
    copyStatus.textContent = 'Teléfono copiado.';
  } catch {
    // Manual selection remains usable on file:// and when clipboard access is denied.
    manualCopy.hidden = false;
    phoneInput.focus();
    phoneInput.select();
    copyStatus.textContent = 'Copia el número seleccionado con el menú de tu dispositivo.';
  }
});

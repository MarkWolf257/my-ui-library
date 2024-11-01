document.getElementById('toaster').onclick = function() {
  let toast = document.createElement('div');
  toast.innerHTML = `
      <img src="icons/circle-exclamation-solid.svg" alt="Informational Icon" width="24px" height="24px" />
      <p>Hello!</p>
      <img
        src="icons/xmark-solid.svg"
        alt="Close Icon" width="16px"
        height="16px"
        onclick="this.parentElement.remove()"
      />
    `;
  document.getElementById('toast-container').appendChild(toast);

  setTimeout(function() {
    document.getElementById('toast-container').lastChild.remove();
  }, 3000);
}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const inputRef = document.querySelector('#theme-switch-toggle');

const darkTheme = () => {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem(Theme, Theme.DARK);
  inputRef.checked = false;
};

const lightTheme = () => {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem(Theme, Theme.LIGHT);
  inputRef.checked = true;
};

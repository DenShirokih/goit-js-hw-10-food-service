const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const inputRef = document.querySelector('#theme-switch-toggle');
const changeInput = event => {
  event.currentTarget.checked ? setDarkTheme() : setLightTheme();
};
inputRef.addEventListener('change', changeInput);

const setDarkTheme = () => {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  inputRef.checked = true;
};

const setLightTheme = () => {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  inputRef.checked = false;
};

const setDefaultTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.DARK) {
    setDarkTheme();
    return;
  }
  setLightTheme();
};
setDefaultTheme();

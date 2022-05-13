const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const inputRef = document.querySelector('#theme-switch-toggle');
const changeInput = event => {
  event.currentTarget.checked ? darkTheme() : lightTheme();
};
inputRef.addEventListener('change', changeInput);

const darkTheme = () => {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  inputRef.checked = true;
};

const lightTheme = () => {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  inputRef.checked = false;
};

const defaultTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.LIGHT || savedTheme === Theme.LIGHT) {
    lightTheme();
    return;
  }
  if (savedTheme === Theme.DARK) {
    darkTheme();
    return;
  }
};

defaultTheme();

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}
const switchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const localStorageTheme = localStorage.getItem('Theme');

const theme = localStorageTheme ? bodyRef.classList.add(localStorageTheme) : bodyRef.classList.add(Theme.LIGHT);
switchRef.addEventListener('change', onSwitchClick);

checkLocalStorageTheme();
// localStorage.clear()

function onSwitchClick(evt) {
    evt.preventDefault();
    if (bodyRef.className === Theme.LIGHT) {

        localStorage.setItem('Theme', Theme.DARK);
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);
            
      
    } else {
        localStorage.setItem('Theme', Theme.LIGHT);
        bodyRef.classList.toggle(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
    }
}

function checkLocalStorageTheme() {

    if (localStorageTheme === 'dark-theme') {
        switchRef.checked = true;
    }
    else {
        switchRef.checked = false;
    }
};
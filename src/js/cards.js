import handlebars from 'handlebars';
import menuTemplate from '../templates/menu.hbs?raw'; //импорт шаблона
import menu from '../menu.json'; //импорт меню

const markup = handlebars.compile(menuTemplate)(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);

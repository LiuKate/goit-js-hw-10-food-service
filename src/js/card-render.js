import menuItems from '../menu.json';
import menuTpl from '../templates/menu-item.hbs';


const menuListRef = document.querySelector('.js-menu');

const menuMarkup = createMenuMarkUp(menuItems);

menuListRef.insertAdjacentHTML('afterbegin', menuMarkup)

function createMenuMarkUp(items) {
        return items.map(item => menuTpl(item)).join('');
}


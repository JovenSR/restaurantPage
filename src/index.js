import pageLoad from './pageLoad';
import menu from './menu';
import about from'./about';
import contact from './contact';

pageLoad();



function switchTabs() {
	const menuButton = document.querySelector('#menu');
	const aboutButton = document.querySelector('#about');
	const contactButton = document.querySelector('#contact');

	menuButton.addEventListener('click', (e) => {
		menu();
	})

	aboutButton.addEventListener('click', (e) => {
		about();
	})

	contactButton.addEventListener('click', (e) => {
		contact();
	})
};	

switchTabs();
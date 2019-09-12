function pageLoad() {
	const content = document.querySelector('#content');
	const image = document.createElement('img');
	const h1 = document.createElement('h1');
	const div = document.createElement('div');

	const menu = document.createElement('button');
	const contact = document.createElement('button');
	const about = document.createElement('button');
	const divContent = document.createElement('div');

	menu.innerHTML = 'Menu';
	contact.innerHTML = 'Contact';
	about.innerHTML = 'About';

	div.appendChild(menu);
	div.appendChild(about);
	div.appendChild(contact);
	div.appendChild(divContent);

	menu.setAttribute('id', 'menu');
	contact.setAttribute('id', 'contact');
	about.setAttribute('id', 'about');
	div.classList.add('div');
	divContent.classList.add('divContent');

	image.src = 'pic.jpg';
	h1.innerHTML = 'Welcome to Restaurant';


	content.appendChild(image);
	content.appendChild(h1);
	content.appendChild(div);	
}

export default pageLoad
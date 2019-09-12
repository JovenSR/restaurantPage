function menu() {
	const div = document.querySelector('.divContent');

	if(div.id == 1) {
		div.style.display = 'none';
		div.setAttribute('id', 0);
	} else {
		div.style.display = 'block';
		div.innerHTML = '';
		const para = document.createElement('p');
		para.innerHTML = "Menu Stuff";
		div.appendChild(para);
		div.setAttribute('id', 1);
	} 
}

export default menu;
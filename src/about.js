function about() {

	const div = document.querySelector('.divContent');

	if(div.id == 2) {
		div.style.display = 'none';
		div.setAttribute('id', 0);
	} else {
		div.style.display = 'block';
		div.innerHTML = '';
		const para = document.createElement('p');
		para.innerHTML = "About Stuff";
		div.appendChild(para);
		div.setAttribute('id', 2);
	}
}

export default about;
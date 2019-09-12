function contact() {

	const div = document.querySelector('.divContent');


	if(div.id == 3) {
		div.style.display = 'none';
		div.setAttribute('id', 0);
	} else {
		div.style.display = 'block';
		div.innerHTML = '';
		const para = document.createElement('p');
		para.innerHTML = "Contact Stuff";
		div.appendChild(para);
		div.setAttribute('id', 3);
	} 
}

export default contact;
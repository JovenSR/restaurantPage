function contact() {

	const div = document.querySelector('.divContent');

	if(div.id == 3) {
		div.style.display = 'none';
		div.setAttribute('id', 0);
	} else {
		div.style.display = 'block';
		div.innerHTML = '';
		const para = document.createElement('p');
		para.innerHTML = "Phone Number: 555-555-5555 <br><br> Email: email.com <br><br> Location: Everywhere";
		div.appendChild(para);
		div.setAttribute('id', 3);
	} 
}

export default contact;
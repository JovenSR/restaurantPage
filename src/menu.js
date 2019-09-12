function menu() {
	const div = document.querySelector('.divContent');

	if(div.id == 1) {
		div.style.display = 'none';
		div.setAttribute('id', 0);
	} else {
		div.style.display = 'block';
		div.innerHTML = '';
		const para = document.createElement('p');
		para.innerHTML = "Coffee - $5 <br><br> Cake - $10 <br><br> Cheeseburger & Fries - $12 <br><br> Chicken Burger & Fries - $13 <br><br> Turkey Burger & Fries $13 <br><br> Pasta $16 <br><br> Salad - $10";
		div.appendChild(para);
		div.setAttribute('id', 1);
	} 
}

export default menu;
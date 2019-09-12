function about() {

	const div = document.querySelector('.divContent');

	if(div.id == 2) {
		div.style.display = 'none';
		div.setAttribute('id', 0);
	} else {
		div.style.display = 'block';
		div.innerHTML = '';
		const para = document.createElement('p');
		para.innerHTML = "Milk seasonal ut and, breve seasonal cortado, so eu qui extra irish. Coffee, whipped qui grounds pumpkin spice, extraction saucer cortado dark percolator cultivar. <br> Robust as, qui, carajillo coffee, cultivar dark, lungo seasonal organic froth plunger pot. Bar, breve organic mug, et a as plunger pot acerbic medium robust. <br> Irish, white, a, kopi-luwak, ristretto, mug a, wings java roast variety fair trade. Crema bar caramelization rich dark single origin, affogato to go robusta roast caramelization shop. Milk turkish cup, body as affogato grinder turkish. Caffeine, mug single origin robust mocha that chicory. Medium blue mountain half and half white caramelization sit half and half body. Caffeine aroma sugar to go mazagran con panna sit plunger pot. Saucer aftertaste variety, instant, viennese aged, id mazagran cultivar so shop. Eu, ut, americano et, cortado, kopi-luwak single origin est that extra con panna. Coffee, variety con panna, irish so and arabica grounds frappuccino body. Steamed, est, sugar bar cream sugar dripper cultivar. Filter qui, java half and half siphon flavour latte organic. Frappuccino id carajillo, aroma medium grinder aftertaste rich plunger pot rich mug espresso.";
		div.appendChild(para);
		div.setAttribute('id', 2);
	}
}

export default about;
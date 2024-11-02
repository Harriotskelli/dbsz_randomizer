var backgroundColours=["rgb(80, 80, 80)", "rgb(191, 0, 59)", "rgb(120, 100, 180)", "rgb(40, 100, 150)", "rgb(60, 120, 40)", "rgb(240, 80, 120)", "rgb(0, 240, 220)", "rgb(168, 255, 140)", "rgb(255, 153, 0)"];
var c_name=["Goku (Z – Early)", "Goku (Z – Mid)", "Goku (Z-Mid) Super Saiyan", "Goku (Z-End)", "Goku (Z-End) Super Saiyan", "Goku (Z-End) Super Saiyan 2", "Goku (Z-End) Super Saiyan 3", "Goku (Super)", "Goku (Super) Super Saiyan", "Goku (Super) Super Saiyan God", "Goku (Super) Super Saiyan God Super Saiyan", "Goku (Super) Ultra Instinct – Sign", "Goku (Super) Ultra Instinct", "Goku (GT)", "Goku (GT) Super Saiyan", "Goku (GT), Super Saiyan 3", "Goku (GT), Super Saiyan 4", "Goku (Teen)", "Goku (Mini)", "Vegeta (Z – Scouter)", "Great Ape Vegeta", "Vegeta (Z – Early)", "Vegeta (Z – Early) Super Saiyan", "Super Vegeta", "Vegeta (Z – End)", "Vegeta (Z – End) Super Saiyan", "Vegeta (Z – End), Super Saiyan 2", "Majin Vegeta", "Vegeta (Super)", "Vegeta (Super), Super Saiyan", "Vegeta (Super), Super Saiyan God", "Vegeta (Super), Super Saiyan God Super Saiyan", "Vegeta (GT) Super Saiyan 4", "Gohan (Kid)", "Gohan (Teen)", "Gohan (Teen) Super Saiyan", "Gohan (Teen) Super Saiyan 2", "Gohan (Adult)", "Gohan (Adult), Super Saiyan", "Gohan (Adult), Super Saiyan 2", "Great Saiyaman", "Ultimate Gohan", "Gohan (Future)", "Gohan (Future), Super Saiyan", "Piccolo", "Piccolo (Fused with Kami)", "Nail", "Krillin", "Yamcha", "Tien", "Trunks (Sword)", "Trunks (Sword) Super Saiyan", "Trunks (Melee)", "Trunks (Melee), Super Saiyan", "Super Trunks", "Future Trunks", "Future Trunks, Super Saiyan", "Trunks (Kid)", "Trunks (Kid), Super Saiyan", "Goten", "Goten, Super Saiyan", "Vegito", "Super Vegito", "Vegito, Super Saiyan God Super Saiyan", "Super Gogeta (Z)", "Gogeta (Super)", "Gogeta (Super), Super Saiyan", "Gogeta (Super), Super Saiyan God Super Saiyan", "Gogeta (GT), Super Saiyan 4", "Gotenks", "Gotenks, Super Saiyan", "Gotenks, Super Saiyan 3", "Videl", "Master Roshi", "Master Roshi, Max Power", "Frieza (Z), 1st Form", "Frieza (Z), 2nd Form", "Frieza (Z), 3rd Form", "Frieza (Z), 4th Form", "Frieza (Z), Full Power", "Mecha Frieza", "Frieza (Super)", "Golden Frieza", "Cell, 1st Form", "Cell, 2nd Form", "Cell 3, Perfect Form", "Perfect Cell", "Cell Jr.", "Majin Buu", "Majin Buu (Evil)", "Super Buu", "Super Buu (Gotenks Absorbed)", "Super Buu (Gohan Absorbed)", "Kid Buu", "Mr. Satan", "Chiaotzu", "Yajirobe", "Pan (GT)", "Uub (GT)", "Majuub (GT)", "Bardock", "Raditz", "Saibaman", "Nappa", "Zarbon", "Super Zarbon", "Dodoria", "Cui", "Captain Ginyu", "Recoome", "Burter", "Jeice", "Guldo", "King Cold", "Android 16", "Anroid 17 (Z)", "Android 17 (Super)", "Android 18", "Android 19", "Dr. Gero", "Babidi", "Dabura", "Frieza Force Soldier", "Broly (Z)", "Broly (Z), Super Saiyan", "Broly (Z), Legendary Super Saiyan", "Broly (Super)", "Broly (Super), Super Saiyan", "Broly (Super), Super Saiyan (Full Power)", "Super Garlic Jr.", "Dr. Wheelo", "Turles", "Lord Slug", "Lord Slug, Giant Form", "Cooler", "Cooler, Final Form", "Metal Cooler", "Android 13", "Fusion Android 13", "Bojack", "Full-Power Bojack", "Janemba", "Super Janemba", "Tapion", "Hirudegarn", "Baby Vegeta (GT)", "Super Baby 1 (GT)", "Super Baby 2 (GT)", "Great Ape Baby (GT)", "Syn Shenron (GT)", "Omega Shenron (GT)", "Spopovich", "Beerus", "Whis", "Goku Black", "Goku Black, Super Saiyan Rosé", "Zamasu", "Fused Zamasu", "Fused Zamasu, Half-Corrupted", "Hit", "Frost", "Cabba", "Cabba, Super Saiyan", "Cabba, Super Saiyan 2", "Caulifla", "Caulifla, Super Saiyan 2", "Kale", "Kale, Super Saiyan (Berserk)", "Kale, Super Saiyan", "Kefla", "Kefla, Super Saiyan", "Kefla, Super Saiyan 2", "Jiren", "Jiren, Full Power", "Toppo", "Toppo, God of Destruction", "Dyspo", "Bergamo", "Ribrianne", "Kakunsa", "Roasie", "Anilaza"]
var c_id=["gks", "vgs", "pcn", "ght", "frn", "gnn", "trs", "cen", "aen", "gtl", "krn", "buk", "bun", "npn", "asn", "ymn", "tnn", "ghu", "htn", "gkb", "vgb", "bsn", "gbr", "ton", "gkn", "vgn", "brs", "zmb", "bdn", "vtb", "avp", "clf", "jrn", "vdn", "sgn", "jnn", "nhy", "est", "kfs", "mgs", "mtn", "osm", "gff", "top"];
var c_assist=["a", "b", "c"]
var rx=[];

function randInt(lo, hi) {
	return lo + Math.floor( Math.random() * ( hi - lo + 1 ) );
}

function findInArray(val) {
	for (var i=0; i<rx.length;i++ ) {
		if ( rx[i] === val ) return 1;
	}
	return 0;
}

function randomize() {
	var charcont = document.getElementById("charcont");
	charcont.innerHTML = '';
	rx=[];

	for (var i=0; i<5; ++i) {
		var newChar = document.createElement("div");
		newChar.classList.add("chardiv");

		//Pick a random character. Reroll on duplicate
		var rc;
		do {
			rc = randInt(0,c_name.length-1);
		} while (findInArray(rc))
		rx[rx.length] = rc;

		// Put the name for the character
		var newPre = document.createElement("pre");
		newPre.innerHTML = c_name[rc];

		// Create portrait for chosen character
		var newPortrait = document.createElement("img");
		newPortrait.classList.add("portrait");
		newPortrait.setAttribute("alt", c_name[rc]);
		newPortrait.setAttribute("src", "./dbfz_assets/renders/" + c_id[rc] + ".png");

		// Glue it all together
		newChar.appendChild(newPre);
		newChar.appendChild(newPortrait);
		charcont.appendChild(newChar);
	}

	// Randomize the background colour. Might as well, right?
	document.getElementById("content").style.backgroundColor = backgroundColours[randInt(0,backgroundColours.length-1)];
}

window.addEventListener('load', (event) => {
	randomize();
});

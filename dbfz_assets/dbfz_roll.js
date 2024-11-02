var backgroundColours=["rgb(80, 80, 80)", "rgb(191, 0, 59)", "rgb(120, 100, 180)", "rgb(40, 100, 150)", "rgb(60, 120, 40)", "rgb(240, 80, 120)", "rgb(0, 240, 220)", "rgb(168, 255, 140)", "rgb(255, 153, 0)"];
var c_name=["Goku (Super Saiyan)", "Vegeta (Super Saiyan)", "Piccolo", "Teen Gohan", "Frieza", "Ginyu", "Future Trunks", "Cell", "Android 18", "Gotenks", "Krillin", "Kid Buu", "Majin Buu", "Nappa", "Android 16", "Yamcha", "Tien", "Adult Gohan", "Hit", "Goku (SSGSS)", "Vegeta (SSGSS)", "Beerus", "Goku Black", "Android 21", "Goku", "Vegeta", "Broly (DBZ)", "Fused Zamasu", "Bardock", "Vegito (SSGSS)", "Android 17", "Cooler", "Jiren", "Videl", "Goku GT", "Janemba", "Gogeta (SSGSS)", "Broly (DBS)", "Kefla", "Goku (Ultra Instinct)", "Roshi", "Super Baby 2", "Gogeta (Super Saiyan 4)", "Android 21 (Labcoat)"];
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
		var newPre = document.createElement("pre");
		(i == 0) ? newPre.innerHTML = "First" : null;
		(i == 1) ? newPre.innerHTML = "Second" : null;
		(i == 2) ? newPre.innerHTML = "Third" : null;
		(i == 3) ? newPre.innerHTML = "Forth" : null;
		(i == 4) ? newPre.innerHTML = "Fifth" : null;

		//Pick a random character. Reroll on duplicate
		var rc;
		do {
			rc = randInt(0,c_name.length-1);
		} while (findInArray(rc))
		rx[rx.length] = rc;

		// Create portrait for chosen character
		var newPortrait = document.createElement("img");
		newPortrait.classList.add("portrait");
		newPortrait.setAttribute("alt", c_name[rc]);
		newPortrait.setAttribute("src", "./dbfz_assets/renders/" + c_id[rc] + ".png");

		// Create assist for chosen character
		var ra = randInt(0,c_assist.length-1);
		var newAssist = document.createElement("img");
		newAssist.classList.add("assist");
		newAssist.setAttribute("alt", c_assist[ra]);
		newAssist.setAttribute("src", "./dbfz_assets/" + c_assist[ra] + ".png");

		// Glue it all together
		newChar.appendChild(newPre);
		newChar.appendChild(newPortrait);
		newChar.appendChild(newAssist);
		charcont.appendChild(newChar);
	}

	// Randomize the background colour. Might as well, right?
	document.getElementById("content").style.backgroundColor = backgroundColours[randInt(0,backgroundColours.length-1)];
}

window.addEventListener('load', (event) => {
	randomize();
});

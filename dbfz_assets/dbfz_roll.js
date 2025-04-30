var backgroundColours=["rgb(80, 80, 80)", "rgb(191, 0, 59)", "rgb(120, 100, 180)", "rgb(40, 100, 150)", "rgb(60, 120, 40)", "rgb(240, 80, 120)", "rgb(0, 240, 220)", "rgb(168, 255, 140)", "rgb(255, 153, 0)"];
var c_name=["Android 17 Super", "Son Goku Z Early", "Son Goku Z Mid", "Son Goku Super Saiyan Z Mid", "Son Goku Z End", "Son Goku Super Saiyan Z End", "Son Goku Super Saiyan 2 Z End", "Son Goku Super Saiyan 3 Z End", "Son Goku Super", "Goku Super Saiyan Super", "Anilaza", "Nail", "Frieza (Z) 1st Form", "Frieza (Z) 2nd Form", "Frieza (Z) 3rd Form", "Frieza (Z) 4th Form", "Frieza (Z) Full Power", "Chiaotzu", "Saibaman", "Zarbon", "Son Goku Super Saiyan God", "Super Zarbon", "Dodoria", "Cui", "Ginyu", "Recoome", "Guldo", "Gohan (Teen)", "Gohan (Teen) Super Saiyan", "Gohan (Teen) Super Saiyan 2", "Trunks (Melee)", "Son Goku Super Saiyan God Super Saiyan", "Android 17 (Z)", "Android 16", "Android 19", "Dr. Gero", "Cell 1st Form", "Cell 2nd Form", "Perfect Cell", "Cell Jr.", "Piccolo (Fused with Kami)", "King Cold", "Vegeta Z Scouter", "Mecha Frieza", "Great Saiyaman", "Babidi", "Gohan (Adult) Super Saiyan", "Majin Buu (Evil)", "Super Buu", "Ultimate Gohan", "Super Buu (Gotenks Absorbed)", "Super Buu (Gohan Absorbed)", "Kid Buu", "Great Ape Vegeta", "GOKU (GT)", "PAN (GT)", "GOKU (GT) SUPER SAIYAN", "BABY VEGETA", "GOKU (GT) SUPER SAIYAN 3", "SUPER BABY 1 (GT)", "SUPER BABY 2 (GT)", "UUB (GT)", "MAJUUB (GT)", "GOKU (GT) SUPER SAIYAN 4", "Vegeta Z Early", "GREAT APE BABY (GT)", "SYN SHENRON (GT)", "OMEGA SHENRON (GT)", "VEGETA (GT) SUPER SAIYAN 4", "GOGETA (GT) SUPER SAIYAN 4", "Frieza Force Soldier", "Cabba", "Frost", "Toppo God of Destruction", "Cabba Super Saiyan", "Vegeta Super Saiyan Z Early", "Cabba Super Saiyan 2", "Broly (Z)", "Broly (Z) Super Saiyan", "Broly (Z) Legendary Super Saiyan", "Cooler", "Cooler Final Form", "Metal Cooler", "Android 13", "Fusion Android 13", "Super Garlic Jr.", "Super Vegeta", "Dr. Wheelo", "Lord Slug", "Lord Slug Giant Form", "Turles", "Bojack", "Full-Power Bojack", "Hirudegarn", "Tapion", "Janemba", "Super Janemba", "Vegeta Z End", "Super Gogeta (Z)", "Goku (Teen)", "Goku Mini", "Vegeta Super Saiyan Z End", "Vegeta Super Saiyan 2 Z End", "Majin Vegeta", "Vegeta Super", "Vegeta Super Saiyan Super", "Vegeta Super Saiyan God", "Vegeta Super Saiyan God Super Saiyan Super", "Piccolo", "Krillin", "Yamcha", "Tien Shinhan", "Trunks Super Saiyan Melee", "Future Trunks Super Saiyan", "Frieza Super", "Cell Perfect", "Majin Buu", "Mr. Satan Hercule", "Android 18", "Broly Super", "Broly Super Saiyan Super", "Jiren", "Bergamo", "Super Trunks", "Dyspo", "Kakunsa", "Master Roshi Max Power", "Nappa", "Burter", "Toppo", "Jeice", "Kale Super Saiyan Berserk", "Broly Super Super Saiyan Full Power", "Hit", "Beerus", "Gohan Adult", "Videl", "Gohan Future", "Gohan Future Super Saiyan", "Gohan Kid", "Master Roshi", "Trunks Sword", "Trunks Sword Super Saiyan", "Whis", "Trunks (Kid)", "Trunks (Kid) Super Saiyan", "Goten", "Goten Super Saiyan", "Gotenks", "Gotenks (Super Saiyan)", "Gotenks (Super Saiyan 3)", "Kale", "Kale (Super Saiyan)", "Caulifla", "Caulifla (Super Saiyan 2)", "Kefla", "Kefla (Super Saiyan)", "Kefla (Super Saiyan 2)", "Vegito", "Vegito Super Saiyan God Super Saiyan", "Gogeta (Super)", "Gogeta (Super) Super Saiyan", "Gogeta (Super) Super Saiyan God Super Saiyan", "Fused Zamasu", "Fused Zamasu Half-Corrupted", "Goku (Super) Ultra Instinct", "Gohan (Adult) Super Saiyan 2", "Golden Frieza", "Bardock", "Raditz", "Goku Black", "Zamasu", "Jiren Full Power", "Goku (Super) Ultra Instinct -Sign-", "Super Vegito", "Yajirobe", "Dabura", "Spopovich", "Goku Black Super Saiyan Rose", "Future Trunks", "Ribrianne", "Roasie", "Gohan (Super Hero)", "Gohan (Super Hero) Super Saiyan", "Ultimate Gohan (Super Hero)", "Gohan Beast", "Piccolo (Super Hero)", "Piccolo (Super Hero) Power Awakening", "Orange Piccolo", "Orange Piccolo Giant Form", "Gamma 1", "Gamma 2", "Cell Max", "Goku Mini SS", "Vegeta Mini", "Vegeta Mini SS", "Vegeta Mini SS2", "Vegeta Mini SS3", "Glorio", "Panzy", "Majin Kuu"]
var c_id=["00_Android_17_Super.webp", "01_Son_Goku_Z_Early.webp", "02_Son_Goku_Z_Mid.webp", "03_Son_Goku_Super_Saiyan_Z_Mid.webp", "04_Son_Goku_Z_End.webp", "05_Son_Goku_Super_Saiyan_Z_End.webp", "06_Son_Goku_Super_Saiyan_2_Z_End.webp", "07_Son_Goku_Super_Saiyan_3_Z_End.webp", "08_Son_Goku_Super.webp", "09_Goku_Super_Saiyan_Super.webp", "100_Anilaza.webp", "101_Nail.webp", "102_Frieza_(Z)_1st_Form.webp", "103_Frieza_(Z)_2nd_Form.webp", "104_Frieza_(Z)_3rd_Form.webp", "105_Frieza_(Z)_4th_Form.webp", "106_Frieza_(Z)_Full_Power.webp", "107_Chiaotzu.webp", "108_Saibaman.webp", "109_Zarbon.webp", "10_Son_Goku_Super_Saiyan_God_Super.webp", "110_Super_Zarbon.webp", "111_Dodoria.webp", "112_Cui.webp", "113_Ginyu.webp", "114_Recoome.webp", "115_Guldo.webp", "116_Gohan_(Teen).webp", "117_Gohan_(Teen)_Super_Saiyan.webp", "118_Gohan_(Teen)_Super_Saiyan_2.webp", "119_Trunks_(Melee).webp", "11_Son_Goku_Super_Saiyan_God_Super_Saiyan_Super.webp", "120_Android_17_(Z).webp", "121_Android_16.webp", "122_Android_19.webp", "123_Dr._Gero.webp", "124_Cell_1st_Form.webp", "125_Cell_2nd_Form.webp", "126_Perfect_Cell.webp", "127_Cell_Jr..webp", "128_Piccolo_(Fused_with_Kami).webp", "129_King_Cold.webp", "12_Vegeta_Z_Scouter.webp", "130_Mecha_Frieza.webp", "131_Great_Saiyaman.webp", "132_Babidi.webp", "133_Gohan_(Adult)_Super_Saiyan.webp", "134_Majin_Buu_(Evil).webp", "135_Super_Buu.webp", "136_Ultimate_Gohan.webp", "137_Super_Buu_(Gotenks_Absorbed).webp", "138_Super_Buu_(Gohan_Absorbed).webp", "139_Kid_Buu.webp", "13_Great_Ape_Vegeta.webp", "140_GOKU_(GT).webp", "141_PAN_(GT).webp", "142_GOKU_(GT)_SUPER_SAIYAN.webp", "143_BABY_VEGETA.webp", "144_GOKU_(GT)_SUPER_SAIYAN_3.webp", "145_SUPER_BABY_1_(GT).webp", "146_SUPER_BABY_2_(GT).webp", "147_UUB_(GT).webp", "148_MAJUUB_(GT).webp", "149_GOKU_(GT)_SUPER_SAIYAN_4.webp", "14_Vegeta_Z_Early.webp", "150_GREAT_APE_BABY_(GT).webp", "151_SYN_SHENRON_(GT).webp", "152_OMEGA_SHENRON_(GT).webp", "153_VEGETA_(GT)_SUPER_SAIYAN_4.webp", "154_GOGETA_(GT)_SUPER_SAIYAN_4.webp", "155_Frieza_Force_Soldier.webp", "156_Cabba.webp", "157_Frost.webp", "158_Toppo_God_of_Destruction.webp", "159_Cabba_Super_Saiyan.webp", "15_Vegeta_Super_Saiyan_Z_Early.webp", "160_Cabba_Super_Saiyan_2.webp", "161_Broly_(Z).webp", "162_Broly_(Z)_Super_Saiyan.webp", "163_Broly_(Z)_Legendary_Super_Saiyan.webp", "164_Cooler.webp", "165_Cooler_Final_Form.webp", "166_Metal_Cooler.webp", "167_Android_13.webp", "168_Fusion_Android_13.webp", "169_Super_Garlic_Jr..webp", "16_Super_Vegeta.webp", "170_Dr._Wheelo.webp", "171_Lord_Slug.webp", "172_Lord_Slug_Giant_Form.webp", "173_Turles.webp", "174_Bojack.webp", "175_Full-Power_Bojack.webp", "176_Hirudegarn.webp", "177_Tapion.webp", "178_Janemba.webp", "179_Super_Janemba.webp", "17_Vegeta_Z_End.webp", "180_Super_Gogeta_(Z).webp", "181_Goku_(Teen).webp", "182_Goku_Mini.webp", "18_Vegeta_Super_Saiyan_Z_End.webp", "19_Vegeta_Super_Saiyan_2_Z_End.webp", "20_Majin_Vegeta.webp", "21_Vegeta_Super.webp", "22_Vegeta_Super_Saiyan_Super.webp", "23_Vegeta_Super_Saiyan_God_Super.webp", "24_Vegeta_Super_Saiyan_God_Super_Saiyan_Super.webp", "25_Piccolo.webp", "26_Krillin.webp", "27_Yamcha.webp", "28_Tien_Shinhan.webp", "29_Trunks_Super_Saiyan_Melee.webp", "30_Future_Trunks_Super_Saiyan.webp", "31_Frieza_Super.webp", "32_Cell_Perfect.webp", "33_Majin_Buu.webp", "34_Mr._Satan_Hercule.webp", "36_Android_18.webp", "37_Broly_Super.webp", "38_Broly_Super_Saiyan_Super.webp", "39_Jiren.webp", "40_Bergamo.webp", "41_Super_Trunks.webp", "42_Dyspo.webp", "43_Kakunsa.webp", "44_Master_Roshi_Max_Power.webp", "45_Nappa.webp", "46_Burter.webp", "47_Toppo.webp", "48_Jeice.webp", "49_Kale_Super_Saiyan_Berserk.webp", "50_Broly_Super_Super_Saiyan_Full_Power.webp", "51_Hit.webp", "52_Beerus.jpg", "53_Gohan_Adult.jpg", "54_Videl.jpg", "55_Gohan_Future.jpg", "56_Gohan_Future_Super_Saiyan.jpg", "57_Gohan_Kid.jpg", "58_Master_Roshi.jpg", "59_Trunks_Sword.jpg", "60_Trunks_Sword_Super_Saiyan.jpg", "61_Whis.jpg", "62_Trunks_(Kid).webp", "63_Trunks_(Kid)_Super_Saiyan.webp", "64_Goten.webp", "65_Goten_Super_Saiyan.webp", "66_Gotenks.webp", "67_Gotenks_(Super_Saiyan).webp", "68_Gotenks_(Super_Saiyan_3).webp", "69_Kale.webp", "70_Kale_(Super_Saiyan).webp", "71_Caulifla.webp", "72_Caulifla_(Super_Saiyan_2).webp", "73_Kefla.webp", "74_Kefla_(Super_Saiyan).webp", "75_Kefla_(Super_Saiyan_2).webp", "76_Vegito.webp", "77_Vegito_Super_Saiyan_God_Super_Saiyan.webp", "78_Gogeta_(Super).webp", "79_Gogeta_(Super)_Super_Saiyan.webp", "80_Gogeta_(Super)_Super_Saiyan_God_Super_Saiyan.webp", "81_Fused_Zamasu.webp", "82_Fused_Zamasu_Half-Corrupted.webp", "83_Goku_(Super)_Ultra_Instinct.webp", "84_Gohan_(Adult)_Super_Saiyan_2.webp", "85_Golden_Frieza.webp", "86_Bardock.webp", "87_Raditz.webp", "88_Goku_Black.webp", "89_Zamasu.webp", "90_Jiren_Full_Power.webp", "91_Goku_(Super)_Ultra_Instinct_Sign.webp", "92_Super_Vegito.webp", "93_Yajirobe.webp", "94_Dabura.webp", "95_Spopovich.webp", "96_Goku_Black_Super_Saiyan_Rose.webp", "97_Future_Trunks.webp", "98_Ribrianne.webp", "99_Roasie.webp", "183_Gohan_Super_Hero.webp", "184_Gohan_Super_Hero_Super_Saiyan.webp", "185_Ultimate_Gohan_Super_Hero.webp", "186_Gohan_Beast.webp", "187_Piccolo_Super_Hero.webp", "188_Piccolo_Super_Hero_Power_Awakening.webp", "189_Orange_Piccolo.webp", "190_Orange_Piccolo_Giant_Form.webp", "191_Gamma_1.webp", "192_Gamma_2.webp", "193_Cell_Max.webp", "194_Goku_Mini_SS.webp", "195_Vegeta_Mini.webp", "196_Vegeta_Mini_SS.webp", "197_Vegeta_Mini_SS2.webp", "198_Vegeta_Mini_SS3.webp", "199_Glorio.webp", "200_Panzy.webp", "201_Majin_Kuu.webp"]

var gokulist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 31, 54, 56, 58, 63, 99, 100, 165, 170, 173, 178, 164, 163, 174, 162, 161, 160, 159, 158, 98, 69, 194];
var vegetalist = [42, 53, 57, 59, 60, 64, 65, 68, 75, 86, 97, 101, 102, 103, 104, 105, 106, 107, 174, 162, 161, 160, 159, 158, 98, 69, 195, 196, 197, 198]; 

var biglist = [53, 65, 95, 93, 87, 89, 190, 193];

var fusionlist = [ 164, 163, 174, 162, 161, 160, 159, 158, 98, 69, 157, 156, 155,150, 149, 148];

var superhero = [ 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193]
var daima = [ 194, 195, 196, 197, 198, 199, 200, 201]

var rx=[];
var checks=[];

function randInt(lo, hi) {
	return lo + Math.floor( Math.random() * ( hi - lo + 1 ) );
}

function findInArray(val) {
	for (var i=0; i<rx.length;i++ ) {
		if ( rx[i] === val ) return 1;
	}
	return 0;
}

function checkInArray(val) {
		if (checks.includes("nogoku")){
			if (gokulist.includes(val)) return 1;
		}
		if (checks.includes("novegeta")){
			if (vegetalist.includes(val)) return 1;
		}
		if (checks.includes("nobigs")){
			if (biglist.includes(val)) return 1;
		} 
		if (checks.includes("nofusion")){
			if (fusionlist.includes(val)) return 1;
		} 
		if (checks.includes("nosuperhero")){
			if (superhero.includes(val)) return 1;
		} 
		if (checks.includes("nodaima")){
			if (daima.includes(val)) return 1;
		} 
	return 0;
}

function randomize() {
	var charcont = document.getElementById("charcont");
	charcont.innerHTML = '';
	rx=[];
	checks=[];
	var teamSize = document.getElementById("teamsize").value;

	if (document.getElementById("nogoku").checked) {
		checks.push("nogoku");
	}
	if (document.getElementById("novegeta").checked) {
		checks.push("novegeta");
	}
	if (document.getElementById("nobigs").checked) {
		checks.push("nobigs");
	}
	if (document.getElementById("nofusion").checked) {
		checks.push("nofusion");
	}

	for (var i = 0; i < teamSize; ++i) {
		var newChar = document.createElement("div");
		newChar.classList.add("chardiv");

		//Pick a random character. Reroll on duplicate
		var rc;
		do {
			rc = randInt(0,c_name.length-1);
		} while (findInArray(rc) || checkInArray(rc))
		rx[rx.length] = rc;

		// Put the name for the character
		var newPre = document.createElement("pre");
		newPre.innerHTML = c_name[rc];

		// Create portrait for chosen character
		var newPortrait = document.createElement("img");
		newPortrait.classList.add("portrait");
		newPortrait.setAttribute("alt", c_name[rc]);
		newPortrait.setAttribute("src", "./dbfz_assets/dbszicons/" + c_id[rc]);

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

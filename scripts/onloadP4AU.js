var characterList = document.getElementsByClassName("chrSelection")[0];

characterList.innerHTML = `
<div class="selectbox-container">
	<div id="positioner-margaret" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Margaret_icon.png" id="selectbox-margaret" style="">
		</div>
	</div>
	<div id="positioner-ken" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Ken_Amada_icon.png" id="selectbox-ken" style="">
		</div>
	</div>
	<div id="positioner-sho" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Sho_icon.png" id="selectbox-sho" style="">
		</div>
	</div>
	<div id="positioner-yukari" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Yukari_Takeba_icon.png" id="selectbox-yukari" style="">
		</div>
	</div>
	<div id="positioner-naoto" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Naoto_Shirogane_icon.png" id="selectbox-naoto" style="">
		</div>
	</div>
	<div id="positioner-labrys" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Labrys_icon.png" id="selectbox-labrys" style="">
		</div>
	</div>
	<div id="positioner-teddie" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Teddie_icon.png" id="selectbox-teddie" style="">
		</div>
	</div>
	<div id="positioner-mitsuru" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Mitsuru_Kirijo_icon.png" id="selectbox-mitsuru" style="">
		</div>
	</div>
	<div id="positioner-yukiko" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Yukiko_Amagi_icon.png" id="selectbox-yukiko" style="">
		</div>
	</div>
	<div id="positioner-aigis" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Aigis_icon.png" id="selectbox-aigis" style="">
		</div>
	</div>
	<div id="positioner-yu" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Yu_Narukami_icon.png" id="selectbox-yu" style="">
		</div>
	</div>
	<div id="positioner-adachi" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Tohru_Adachi_icon.png" id="selectbox-adachi" style="">
		</div>
	</div>
	<div id="positioner-yosuke" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Yosuke_Hanamura_icon.png" id="selectbox-yosuke" style="">
		</div>
	</div>
	<div id="positioner-elizabeth" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Elizabeth_icon.png" id="selectbox-elizabeth" style="">
		</div>
	</div>
	<div id="positioner-chie" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Chie_Satonaka_icon.png" id="selectbox-chie" style="">
		</div>
	</div>
	<div id="positioner-akihiko" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Akihiko_Sanada_icon.png" id="selectbox-akihiko" style="">
		</div>
	</div>
	<div id="positioner-kanji" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Kanji_Tatsumi_icon.png" id="selectbox-kanji" style="">
		</div>
	</div>
	<div id="positioner-slabrys" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Shadow_Labrys_icon.png" id="selectbox-slabrys" style="">
		</div>
	</div>
	<div id="positioner-minazuki" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Minazuki_icon.png" id="selectbox-minazuki" style="">
		</div>
	</div>
	<div id="positioner-junpei" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Junpei_Iori_icon.png" id="selectbox-junpei" style="">
		</div>
	</div>
	<div id="positioner-marie" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Marie_icon.png" id="selectbox-marie" style="">
		</div>
	</div>
	<div id="positioner-rise" class="selectbox-positioner" style="z-index: 500">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/p4au/Rise_Kujikawa_icon.png" id="selectbox-rise" style="">
		</div>
	</div>
	<img class="selectbox-fullroster" src="../../img/characterSelect/p4au/Full_Roster.webp" usemap="#mapselect">
	<map name="mapselect">
		<area id="character-margaret" href="Margaret.html" shape="poly" coords="0,612, 189,593, 223,698, 203,737, 65,782, 23,761, 0,692">
		<area id="character-ken" href="Ken_Amada.html" shape="poly" coords="66,785, 203,740, 244,761, 277,864, 92,973, 45,827">
		<area id="character-sho" href="Sho.html" shape="poly" coords="193,527, 384,564, 409,641, 392,676, 266,717, 226,697">
		<area id="character-yukari" href="Yukari_Takeba.html" shape="poly" coords="266,720, 392,679, 428,698, 452,773, 281,863, 247,760">
		<area id="character-naoto" href="Naoto_Shirogane.html" shape="poly" coords="389,564, 557,530, 578,592, 563,620, 448,657, 413,640">
		<area id="character-labrys" href="Labrys.html" shape="poly" coords="450,660, 564,623, 593,638, 613,699, 456,771, 431,696">
		<area id="character-teddie" href="Teddie.html" shape="poly" coords="561,529, 712,492, 730,546, 718,569, 608,605, 581,591">
		<area id="character-mitsuru" href="Mitsuru_Kirijo.html" shape="poly" coords="609,609, 719,573, 743,584, 760,639, 617,697, 596,635">
		<area id="character-yukiko" href="Yukiko_Amagi.html" shape="poly" coords="716,491, 858,451, 874,500, 863,522, 756,557, 733,545">
		<area id="character-aigis" href="Aigis.html" shape="poly" coords="758,560, 863,526, 886,536, 903,586, 764,637, 746,583">
		<area id="character-yu" href="Yu_Narukami.html" shape="poly" coords="862,450, 992,407, 1009,456, 997,479, 900,510, 877,498">
		<area id="character-adachi" href="Tohru_Adachi.html" shape="poly" coords="902,513, 998,482, 1021,494, 1037,542, 907,586, 890,536">
		<area id="character-yosuke" href="Yosuke_Hanamura.html" shape="poly" coords="996,406, 1135,355, 1153,410, 1142,431, 1034,467, 1012,456">
		<area id="character-elizabeth" href="Elizabeth.html" shape="poly" coords="1036,470, 1142,435, 1166,448, 1182,501, 1040,542, 1024,492">
		<area id="character-chie" href="Chie_Satonaka.html" shape="poly" coords="1138,353, 1283,295, 1303,357, 1289,384, 1179,420, 1156,408">
		<area id="character-akihiko" href="Akihiko_Sanada.html" shape="poly" coords="1179,424, 1290,387, 1317,401, 1337,463, 1187,501, 1168,446">
		<area id="character-kanji" href="Kanji_Tatsumi.html" shape="poly" coords="1286,293, 1443,221, 1468,296, 1450,332, 1334,369, 1306,355">
		<area id="character-slabrys" href="Shadow_Labrys.html" shape="poly" coords="1335,373, 1450,336, 1486,354, 1510,428, 1341,463, 1321,401">
		<area id="character-minazuki" href="Minazuki.html" shape="poly" coords="1446,219, 1618,130, 1652,233, 1631,273, 1506,313, 1471,296">
		<area id="character-junpei" href="Junpei_Iori.html" shape="poly" coords="1508,316, 1632,276, 1673,297, 1706,399, 1515,428, 1489,352">
		<area id="character-marie" href="Marie.html" shape="poly" coords="1622,128, 1806,19, 1854,165, 1832,207, 1695,252, 1655,232">
		<area id="character-rise" href="Rise_Kujikawa.html" shape="poly" coords="1696,255, 1833,211, 1876,233, 1920,367, 1920,377, 1710,399, 1676,295">
	</map>
</div>
`

var selectSound = new Audio("../../aud/p4auSelect.ogg");

// Margaret

const selMargaret = document.getElementById("character-margaret");
const portMargaret = document.getElementById("selectbox-margaret");
selMargaret.addEventListener("mouseover",
	(event) => {
		portMargaret.style.visibility = "visible";
		playSelect();
	}
);
selMargaret.addEventListener("mouseout",
	(event) => {
		portMargaret.style.visibility = "hidden";
	}
);

// Ken

const selKen = document.getElementById("character-ken");
const portKen = document.getElementById("selectbox-ken");
selKen.addEventListener("mouseover",
	(event) => {
		portKen.style.visibility = "visible";
		playSelect();
	}
);
selKen.addEventListener("mouseout",
	(event) => {
		portKen.style.visibility = "hidden";
	}
);

// Sho

const selSho = document.getElementById("character-sho");
const portSho = document.getElementById("selectbox-sho");
selSho.addEventListener("mouseover",
	(event) => {
		portSho.style.visibility = "visible";
		playSelect();
	}
);
selSho.addEventListener("mouseout",
	(event) => {
		portSho.style.visibility = "hidden";
	}
);

// Yukari

const selYukari = document.getElementById("character-yukari");
const portYukari = document.getElementById("selectbox-yukari");
selYukari.addEventListener("mouseover",
	(event) => {
		portYukari.style.visibility = "visible";
		playSelect();
	}
);
selYukari.addEventListener("mouseout",
	(event) => {
		portYukari.style.visibility = "hidden";
	}
);

// Naoto

const selNaoto = document.getElementById("character-naoto");
const portNaoto = document.getElementById("selectbox-naoto");
selNaoto.addEventListener("mouseover",
	(event) => {
		portNaoto.style.visibility = "visible";
		playSelect();
	}
);
selNaoto.addEventListener("mouseout",
	(event) => {
		portNaoto.style.visibility = "hidden";
	}
);

// Labrys

const selLabrys = document.getElementById("character-labrys");
const portLabrys = document.getElementById("selectbox-labrys");
selLabrys.addEventListener("mouseover",
	(event) => {
		portLabrys.style.visibility = "visible";
		playSelect();
	}
);
selLabrys.addEventListener("mouseout",
	(event) => {
		portLabrys.style.visibility = "hidden";
	}
);

// Teddie

const selTeddie = document.getElementById("character-teddie");
const portTeddie = document.getElementById("selectbox-teddie");
selTeddie.addEventListener("mouseover",
	(event) => {
		portTeddie.style.visibility = "visible";
		playSelect();
	}
);
selTeddie.addEventListener("mouseout",
	(event) => {
		portTeddie.style.visibility = "hidden";
	}
);

// Mitsuru

const selMitsuru = document.getElementById("character-mitsuru");
const portMitsuru = document.getElementById("selectbox-mitsuru");
selMitsuru.addEventListener("mouseover",
	(event) => {
		portMitsuru.style.visibility = "visible";
		playSelect();
	}
);
selMitsuru.addEventListener("mouseout",
	(event) => {
		portMitsuru.style.visibility = "hidden";
	}
);

// Yukiko

const selYukiko = document.getElementById("character-yukiko");
const portYukiko = document.getElementById("selectbox-yukiko");
selYukiko.addEventListener("mouseover",
	(event) => {
		portYukiko.style.visibility = "visible";
		playSelect();
	}
);
selYukiko.addEventListener("mouseout",
	(event) => {
		portYukiko.style.visibility = "hidden";
	}
);

// Aigis

const selAigis = document.getElementById("character-aigis");
const portAigis = document.getElementById("selectbox-aigis");
selAigis.addEventListener("mouseover",
	(event) => {
		portAigis.style.visibility = "visible";
		playSelect();
	}
);
selAigis.addEventListener("mouseout",
	(event) => {
		portAigis.style.visibility = "hidden";
	}
);

// Yu

const selYu = document.getElementById("character-yu");
const portYu = document.getElementById("selectbox-yu");
selYu.addEventListener("mouseover",
	(event) => {
		portYu.style.visibility = "visible";
		playSelect();
	}
);
selYu.addEventListener("mouseout",
	(event) => {
		portYu.style.visibility = "hidden";
	}
);

// Adachi

const selAdachi = document.getElementById("character-adachi");
const portAdachi = document.getElementById("selectbox-adachi");
selAdachi.addEventListener("mouseover",
	(event) => {
		portAdachi.style.visibility = "visible";
		playSelect();
	}
);
selAdachi.addEventListener("mouseout",
	(event) => {
		portAdachi.style.visibility = "hidden";
	}
);

// Yosuke

const selYosuke = document.getElementById("character-yosuke");
const portYosuke = document.getElementById("selectbox-yosuke");
selYosuke.addEventListener("mouseover",
	(event) => {
		portYosuke.style.visibility = "visible";
		playSelect();
	}
);
selYosuke.addEventListener("mouseout",
	(event) => {
		portYosuke.style.visibility = "hidden";
	}
);

// Elizabeth

const selElizabeth = document.getElementById("character-elizabeth");
const portElizabeth = document.getElementById("selectbox-elizabeth");
selElizabeth.addEventListener("mouseover",
	(event) => {
		portElizabeth.style.visibility = "visible";
		playSelect();
	}
);
selElizabeth.addEventListener("mouseout",
	(event) => {
		portElizabeth.style.visibility = "hidden";
	}
);

// Chie

const selChie = document.getElementById("character-chie");
const portChie = document.getElementById("selectbox-chie");
selChie.addEventListener("mouseover",
	(event) => {
		portChie.style.visibility = "visible";
		playSelect();
	}
);
selChie.addEventListener("mouseout",
	(event) => {
		portChie.style.visibility = "hidden";
	}
);

// Akihiko

const selAkihiko = document.getElementById("character-akihiko");
const portAkihiko = document.getElementById("selectbox-akihiko");
selAkihiko.addEventListener("mouseover",
	(event) => {
		portAkihiko.style.visibility = "visible";
		playSelect();
	}
);
selAkihiko.addEventListener("mouseout",
	(event) => {
		portAkihiko.style.visibility = "hidden";
	}
);

// Kanji

const selKanji = document.getElementById("character-kanji");
const portKanji = document.getElementById("selectbox-kanji");
selKanji.addEventListener("mouseover",
	(event) => {
		portKanji.style.visibility = "visible";
		playSelect();
	}
);
selKanji.addEventListener("mouseout",
	(event) => {
		portKanji.style.visibility = "hidden";
	}
);

// Shadow Labrys

const selSLabrys = document.getElementById("character-slabrys");
const portSLabrys = document.getElementById("selectbox-slabrys");
selSLabrys.addEventListener("mouseover",
	(event) => {
		portSLabrys.style.visibility = "visible";
		playSelect();
	}
);
selSLabrys.addEventListener("mouseout",
	(event) => {
		portSLabrys.style.visibility = "hidden";
	}
);

// Minazuki

const selMinazuki = document.getElementById("character-minazuki");
const portMinazuki = document.getElementById("selectbox-minazuki");
selMinazuki.addEventListener("mouseover",
	(event) => {
		portMinazuki.style.visibility = "visible";
		playSelect();
	}
);
selMinazuki.addEventListener("mouseout",
	(event) => {
		portMinazuki.style.visibility = "hidden";
	}
);

// Junpei

const selJunpei = document.getElementById("character-junpei");
const portJunpei = document.getElementById("selectbox-junpei");
selJunpei.addEventListener("mouseover",
	(event) => {
		portJunpei.style.visibility = "visible";
		playSelect();
	}
);
selJunpei.addEventListener("mouseout",
	(event) => {
		portJunpei.style.visibility = "hidden";
	}
);

// Marie

const selMarie = document.getElementById("character-marie");
const portMarie = document.getElementById("selectbox-marie");
selMarie.addEventListener("mouseover",
	(event) => {
		portMarie.style.visibility = "visible";
		playSelect();
	}
);
selMarie.addEventListener("mouseout",
	(event) => {
		portMarie.style.visibility = "hidden";
	}
);

// Rise

const selRise = document.getElementById("character-rise");
const portRise = document.getElementById("selectbox-rise");
selRise.addEventListener("mouseover",
	(event) => {
		portRise.style.visibility = "visible";
		playSelect();
	}
);
selRise.addEventListener("mouseout",
	(event) => {
		portRise.style.visibility = "hidden";
	}
);

$(window).resize(setLocations);

function setLocations() {
	// Margaret
	var chrCoords = [0,612, 189,593, 223,698, 203,737, 65,782, 23,761, 0,692];
	autoResize("selectbox-fullroster", selMargaret, chrCoords, portMargaret);
	
	// Ken
	chrCoords = [66,785, 203,740, 244,761, 277,864, 92,973, 45,827];
	autoResize("selectbox-fullroster", selKen, chrCoords, portKen);
	
	// Sho
	chrCoords = [193,527, 384,564, 409,641, 392,676, 266,717, 226,697];
	autoResize("selectbox-fullroster", selSho, chrCoords, portSho);
	
	// Yukari
	chrCoords = [266,720, 392,679, 428,698, 452,773, 281,863, 247,760];
	autoResize("selectbox-fullroster", selYukari, chrCoords, portYukari);
	
	// Naoto
	chrCoords = [389,564, 557,530, 578,592, 563,620, 448,657, 413,640];
	autoResize("selectbox-fullroster", selNaoto, chrCoords, portNaoto);
	
	// Labrys
	chrCoords = [450,660, 564,623, 593,638, 613,699, 456,771, 431,696];
	autoResize("selectbox-fullroster", selLabrys, chrCoords, portLabrys);
	
	// Teddie
	chrCoords = [561,529, 712,492, 730,546, 718,569, 608,605, 581,591];
	autoResize("selectbox-fullroster", selTeddie, chrCoords, portTeddie);
	
	// Mitsuru
	chrCoords = [609,609, 719,573, 743,584, 760,639, 617,697, 596,635];
	autoResize("selectbox-fullroster", selMitsuru, chrCoords, portMitsuru);
	
	// Yukiko
	chrCoords = [716,491, 858,451, 874,500, 863,522, 756,557, 733,545];
	autoResize("selectbox-fullroster", selYukiko, chrCoords, portYukiko);
	
	// Aigis
	chrCoords = [758,560, 863,526, 886,536, 903,586, 764,637, 746,583];
	autoResize("selectbox-fullroster", selAigis, chrCoords, portAigis);
	
	// Yu
	chrCoords = [862,450, 992,407, 1009,456, 997,479, 900,510, 877,498];
	autoResize("selectbox-fullroster", selYu, chrCoords, portYu);
	
	// Adachi
	chrCoords = [902,513, 998,482, 1021,494, 1037,542, 907,586, 890,536];
	autoResize("selectbox-fullroster", selAdachi, chrCoords, portAdachi);
	
	// Yosuke
	chrCoords = [996,406, 1135,355, 1153,410, 1142,431, 1034,467, 1012,456];
	autoResize("selectbox-fullroster", selYosuke, chrCoords, portYosuke);
	
	// Elizabeth
	chrCoords = [1036,470, 1142,435, 1166,448, 1182,501, 1040,542, 1024,492];
	autoResize("selectbox-fullroster", selElizabeth, chrCoords, portElizabeth);
	
	// Chie
	chrCoords = [1138,353, 1283,295, 1303,357, 1289,384, 1179,420, 1156,408];
	autoResize("selectbox-fullroster", selChie, chrCoords, portChie);
	
	// Akihiko
	chrCoords = [1179,424, 1290,387, 1317,401, 1337,463, 1187,501, 1168,446];
	autoResize("selectbox-fullroster", selAkihiko, chrCoords, portAkihiko);
	
	// Kanji
	chrCoords = [1286,293, 1443,221, 1468,296, 1450,332, 1334,369, 1306,355];
	autoResize("selectbox-fullroster", selKanji, chrCoords, portKanji);
	
	// Shadow Labrys
	chrCoords = [1335,373, 1450,336, 1486,354, 1510,428, 1341,463, 1321,401];
	autoResize("selectbox-fullroster", selSLabrys, chrCoords, portSLabrys);
	
	// Minazuki
	chrCoords = [1446,219, 1618,130, 1652,233, 1631,273, 1506,313, 1471,296];
	autoResize("selectbox-fullroster", selMinazuki, chrCoords, portMinazuki);
	
	// Junpei
	chrCoords = [1508,316, 1632,276, 1673,297, 1706,399, 1515,428, 1489,352];
	autoResize("selectbox-fullroster", selJunpei, chrCoords, portJunpei);
	
	// Marie
	chrCoords = [1622,128, 1806,19, 1854,165, 1832,207, 1695,252, 1655,232];
	autoResize("selectbox-fullroster", selMarie, chrCoords, portMarie);
	
	// Rise
	chrCoords = [1696,255, 1833,211, 1876,233, 1920,367, 1920,377, 1710,399, 1676,295];
	autoResize("selectbox-fullroster", selRise, chrCoords, portRise);
}

document.getElementsByClassName("selectbox-fullroster")[0].onload = setTimeout(setLocations, 1);

function playSelect() {
	selectSound.currentTime = 0;
	selectSound.play();
}
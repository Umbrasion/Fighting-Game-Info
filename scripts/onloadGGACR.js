var characterList = document.getElementsByClassName("chrSelection")[0];

characterList.innerHTML = `
<div class="selectbox-container">
	<div class="selectbox-positioner" style="top: 27px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/ggacr/Kliff_Undersn_icon.webp" id="selectbox-kliff">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 25px; top: 78px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/ggacr/Axl_Low_icon.webp" id="selectbox-axl">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 51px; top: 1px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/ggacr/Jam_Kuradoberi_icon.webp" id="selectbox-jam">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 76px; top: 52px">
		<a href="Zappa.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Zappa_icon.webp" id="selectbox-zappa">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 101px; top: 103px">
		<a href="Chipp_Zanuff.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Chipp_Zanuff_icon.webp" id="selectbox-chipp">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 127px; top: 26px">
		<a href="Dizzy.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Dizzy_icon.webp" id="selectbox-dizzy">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 152px; top: 77px">
		<a href="Anji_Mito.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Anji_Mito_icon.webp" id="selectbox-anji">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 177px; top: 128px">
		<a href="Slayer.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Slayer_icon.webp" id="selectbox-slayer">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 178px">
		<a href="A.B.A.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/A.B.A_icon.webp" id="selectbox-aba">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 203px; top: 51px">
		<a href="Johnny.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Johnny_icon.webp" id="selectbox-johnny">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 228px; top: 102px">
		<a href="Millia_Rage.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Millia_Rage_icon.webp" id="selectbox-millia">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 254px; top: 25px">
		<a href="Sol_Badguy.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Sol_Badguy_icon.webp" id="selectbox-sol">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 285px; top: 78px">
		<a href="Order_Sol.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Order-Sol_icon.webp" id="selectbox-ordersol" style="width: 90px; height: 46px">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 332px; top: 25px">
		<a href="Ky_Kiske.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Ky_Kiske_icon.webp" id="selectbox-ky">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 358px; top: 102px">
		<a href="Eddie.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Eddie_icon.webp" id="selectbox-eddie">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 383px; top: 51px">
		<a href="May.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/May_icon.webp" id="selectbox-may">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 408px">
		<a href="Robo-Ky.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Robo-Ky_icon.webp" id="selectbox-roboky">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 409px; top: 128px">
		<a href="Venom.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Venom_icon.webp" id="selectbox-venom">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 434px; top: 77px">
		<a href="Baiken.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Baiken_icon.webp" id="selectbox-baiken">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 459px; top: 26px">
		<a href="Testament.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Testament_icon.webp" id="selectbox-testament">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 485px; top: 103px">
		<a href="Potemkin.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Potemkin_icon.webp" id="selectbox-potemkin">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 510px; top: 52px">
		<a href="Faust.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Faust_icon.webp" id="selectbox-faust">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 535px; top: 1px">
		<a href="Bridget.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/ggacr/Bridget_icon.webp" id="selectbox-bridget">
			</div>
		</a>
	</div>
	<div class="selectbox-positioner" style="left: 561px; top: 78px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/ggacr/I-No_icon.webp" id="selectbox-ino">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 586px; top: 27px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/ggacr/Justice_icon.webp" id="selectbox-justice">
		</div>
	</div>
	<img class="selectbox-fullroster" src="../../img/characterSelect/ggacr/Full_Roster.webp" usemap="#mapselect">
	<map name="mapselect">
		<area id="character-kliff" href="Kliff_Undersn.html" shape="poly" coords="0,27, 51,27, 74,50, 74,76, 23,76, 0,53">
		<area id="character-axl" href="Axl_Low.html" shape="poly" coords="25,78, 76,78, 99,101, 99,127, 48,127, 25,104">
		<area id="character-jam" href="Jam_Kuradoberi.html" shape="poly" coords="51,1, 102,1, 125,24, 125,50, 74,50, 51,27">
		<area id="character-zappa" href="Zappa.html" shape="poly" coords="76,52, 127,52, 150,75, 150,101, 99,101, 76,78">
		<area id="character-chipp" href="Chipp_Zanuff.html" shape="poly" coords="101,103, 152,103, 175,126, 175,152, 124,152, 101,129">
		<area id="character-dizzy" href="Dizzy.html" shape="poly" coords="127,26, 178,26, 201,49, 201,75, 150,75, 127,52">
		<area id="character-anji" href="Anji_Mito.html" shape="poly" coords="152,77, 203,77, 226,100, 226,126, 175,126, 152,103">
		<area id="character-slayer" href="Slayer.html" shape="poly" coords="177,128, 228,128, 251,151, 251,177, 200,177, 177,154">
		<area id="character-aba" href="A.B.A.html" shape="poly" coords="178,0, 229,0, 252,23, 252,49, 201,49, 178,26">
		<area id="character-johnny" href="Johnny.html" shape="poly" coords="203,51, 254,51, 277,74, 277,100, 226,100, 203,77">
		<area id="character-millia" href="Millia_Rage.html" shape="poly" coords="228,102, 279,102, 302,125, 302,151, 251,151, 228,128">
		<area id="character-sol" href="Sol_Badguy.html" shape="poly" coords="254,25, 305,25, 328,48, 328,74, 277,74, 254,51">
		<area id="character-ordersol" href="Order-Sol.html" shape="poly" coords="287,78, 322,78, 326,82, 334,82, 338,78, 373,78, 375,80, 375,103, 354,124, 306,124, 285,103, 285,80">
		<area id="character-ky" href="Ky_Kiske.html" shape="poly" coords="406,25, 355,25, 332,48, 332,74, 383,74, 406,51">
		<area id="character-eddie" href="Eddie.html" shape="poly" coords="432,102, 381,102, 358,125, 358,151, 409,151, 432,128">
		<area id="character-may" href="May.html" shape="poly" coords="457,51, 406,51, 383,74, 383,100, 434,100, 457,77">
		<area id="character-roboky" href="Robo-Ky.html" shape="poly" coords="482,0, 431,0, 408,23, 408,49, 459,49, 482,26">
		<area id="character-venom" href="Venom.html" shape="poly" coords="483,128, 432,128, 409,151, 409,177, 460,177, 483,154">
		<area id="character-baiken" href="Baiken.html" shape="poly" coords="508,77, 457,77, 434,100, 434,126, 485,126, 508,103">
		<area id="character-testament" href="Testament.html" shape="poly" coords="533,26, 482,26, 459,49, 459,75, 510,75, 533,52">
		<area id="character-potemkin" href="Potemkin.html" shape="poly" coords="559,103, 508,103, 485,126, 485,152, 536,152, 559,129">
		<area id="character-faust" href="Faust.html" shape="poly" coords="584,52, 533,52, 510,75, 510,101, 561,101, 584,78">
		<area id="character-bridget" href="Bridget.html" shape="poly" coords="609,1, 558,1, 535,24, 535,50, 586,50, 609,27">
		<area id="character-ino" href="I-No.html" shape="poly" coords="635,78, 584,78, 561,101, 561,127, 612,127, 635,104">
		<area id="character-justice" href="Justice.html" shape="poly" coords="660,27, 609,27, 586,50, 586,76, 637,76, 660,53">
	</map>
</div>
`

// Kliff

const selKliff = document.getElementById("character-kliff");
const portKliff = document.getElementById("selectbox-kliff");
selKliff.addEventListener("mouseover",
	(event) => {
		portKliff.style.transform = "scale(1.1)";
		portKliff.src = "../../img/characterSelect/ggacr/Kliff_Undersn_icon_selected.webp";
	}
);
selKliff.addEventListener("mouseout",
	(event) => {
		portKliff.style.transform = "scale(1)";
		portKliff.src = "../../img/characterSelect/ggacr/Kliff_Undersn_icon.webp";
	}
);

// Axl

const selAxl = document.getElementById("character-axl");
const portAxl = document.getElementById("selectbox-axl");
selAxl.addEventListener("mouseover",
	(event) => {
		portAxl.style.transform = "scale(1.1)";
		portAxl.src = "../../img/characterSelect/ggacr/Axl_Low_icon_selected.webp";
	}
);
selAxl.addEventListener("mouseout",
	(event) => {
		portAxl.style.transform = "scale(1)";
		portAxl.src = "../../img/characterSelect/ggacr/Axl_Low_icon.webp";
	}
);

// Jam

const selJam = document.getElementById("character-jam");
const portJam = document.getElementById("selectbox-jam");
selJam.addEventListener("mouseover",
	(event) => {
		portJam.style.transform = "scale(1.1)";
		portJam.src = "../../img/characterSelect/ggacr/Jam_Kuradoberi_icon_selected.webp";
	}
);
selJam.addEventListener("mouseout",
	(event) => {
		portJam.style.transform = "scale(1)";
		portJam.src = "../../img/characterSelect/ggacr/Jam_Kuradoberi_icon.webp";
	}
);

// Zappa

const selZappa = document.getElementById("character-zappa");
const portZappa = document.getElementById("selectbox-zappa");
selZappa.addEventListener("mouseover",
	(event) => {
		portZappa.style.transform = "scale(1.1)";
		portZappa.src = "../../img/characterSelect/ggacr/Zappa_icon_selected.webp";
	}
);
selZappa.addEventListener("mouseout",
	(event) => {
		portZappa.style.transform = "scale(1)";
		portZappa.src = "../../img/characterSelect/ggacr/Zappa_icon.webp";
	}
);

// Chipp

const selChipp = document.getElementById("character-chipp");
const portChipp = document.getElementById("selectbox-chipp");
selChipp.addEventListener("mouseover",
	(event) => {
		portChipp.style.transform = "scale(1.1)";
		portChipp.src = "../../img/characterSelect/ggacr/Chipp_Zanuff_icon_selected.webp";
	}
);
selChipp.addEventListener("mouseout",
	(event) => {
		portChipp.style.transform = "scale(1)";
		portChipp.src = "../../img/characterSelect/ggacr/Chipp_Zanuff_icon.webp";
	}
);

// Dizzy

const selDizzy = document.getElementById("character-dizzy");
const portDizzy = document.getElementById("selectbox-dizzy");
selDizzy.addEventListener("mouseover",
	(event) => {
		portDizzy.style.transform = "scale(1.1)";
		portDizzy.src = "../../img/characterSelect/ggacr/Dizzy_icon_selected.webp";
	}
);
selDizzy.addEventListener("mouseout",
	(event) => {
		portDizzy.style.transform = "scale(1)";
		portDizzy.src = "../../img/characterSelect/ggacr/Dizzy_icon.webp";
	}
);

// Anji

const selAnji = document.getElementById("character-anji");
const portAnji = document.getElementById("selectbox-anji");
selAnji.addEventListener("mouseover",
	(event) => {
		portAnji.style.transform = "scale(1.1)";
		portAnji.src = "../../img/characterSelect/ggacr/Anji_Mito_icon_selected.webp";
	}
);
selAnji.addEventListener("mouseout",
	(event) => {
		portAnji.style.transform = "scale(1)";
		portAnji.src = "../../img/characterSelect/ggacr/Anji_Mito_icon.webp";
	}
);

// Slayer

const selSlayer = document.getElementById("character-slayer");
const portSlayer = document.getElementById("selectbox-slayer");
selSlayer.addEventListener("mouseover",
	(event) => {
		portSlayer.style.transform = "scale(1.1)";
		portSlayer.src = "../../img/characterSelect/ggacr/Slayer_icon_selected.webp";
	}
);
selSlayer.addEventListener("mouseout",
	(event) => {
		portSlayer.style.transform = "scale(1)";
		portSlayer.src = "../../img/characterSelect/ggacr/Slayer_icon.webp";
	}
);

// A.B.A

const selABA = document.getElementById("character-aba");
const portABA = document.getElementById("selectbox-aba");
selABA.addEventListener("mouseover",
	(event) => {
		portABA.style.transform = "scale(1.1)";
		portABA.src = "../../img/characterSelect/ggacr/A.B.A_icon_selected.webp";
	}
);
selABA.addEventListener("mouseout",
	(event) => {
		portABA.style.transform = "scale(1)";
		portABA.src = "../../img/characterSelect/ggacr/A.B.A_icon.webp";
	}
);

// Johnny

const selJohnny = document.getElementById("character-johnny");
const portJohnny = document.getElementById("selectbox-johnny");
selJohnny.addEventListener("mouseover",
	(event) => {
		portJohnny.style.transform = "scale(1.1)";
		portJohnny.src = "../../img/characterSelect/ggacr/Johnny_icon_selected.webp";
	}
);
selJohnny.addEventListener("mouseout",
	(event) => {
		portJohnny.style.transform = "scale(1)";
		portJohnny.src = "../../img/characterSelect/ggacr/Johnny_icon.webp";
	}
);

// Millia

const selMillia = document.getElementById("character-millia");
const portMillia = document.getElementById("selectbox-millia");
selMillia.addEventListener("mouseover",
	(event) => {
		portMillia.style.transform = "scale(1.1)";
		portMillia.src = "../../img/characterSelect/ggacr/Millia_Rage_icon_selected.webp";
	}
);
selMillia.addEventListener("mouseout",
	(event) => {
		portMillia.style.transform = "scale(1)";
		portMillia.src = "../../img/characterSelect/ggacr/Millia_Rage_icon.webp";
	}
);

// Sol

const selSol = document.getElementById("character-sol");
const portSol = document.getElementById("selectbox-sol");
selSol.addEventListener("mouseover",
	(event) => {
		portSol.style.transform = "scale(1.1)";
		portSol.src = "../../img/characterSelect/ggacr/Sol_Badguy_icon_selected.webp";
	}
);
selSol.addEventListener("mouseout",
	(event) => {
		portSol.style.transform = "scale(1)";
		portSol.src = "../../img/characterSelect/ggacr/Sol_Badguy_icon.webp";
	}
);

// Order-Sol

const selOrderSol = document.getElementById("character-ordersol");
const portOrderSol = document.getElementById("selectbox-ordersol");
selOrderSol.addEventListener("mouseover",
	(event) => {
		portOrderSol.style.transform = "scale(1.1)";
		portOrderSol.src = "../../img/characterSelect/ggacr/Order-Sol_icon_selected.webp";
	}
);
selOrderSol.addEventListener("mouseout",
	(event) => {
		portOrderSol.style.transform = "scale(1)";
		portOrderSol.src = "../../img/characterSelect/ggacr/Order-Sol_icon.webp";
	}
);

// Ky

const selKy = document.getElementById("character-ky");
const portKy = document.getElementById("selectbox-ky");
selKy.addEventListener("mouseover",
	(event) => {
		portKy.style.transform = "scale(1.1)";
		portKy.src = "../../img/characterSelect/ggacr/Ky_Kiske_icon_selected.webp";
	}
);
selKy.addEventListener("mouseout",
	(event) => {
		portKy.style.transform = "scale(1)";
		portKy.src = "../../img/characterSelect/ggacr/Ky_Kiske_icon.webp";
	}
);

// Eddie

const selEddie = document.getElementById("character-eddie");
const portEddie = document.getElementById("selectbox-eddie");
selEddie.addEventListener("mouseover",
	(event) => {
		portEddie.style.transform = "scale(1.1)";
		portEddie.src = "../../img/characterSelect/ggacr/Eddie_icon_selected.webp";
	}
);
selEddie.addEventListener("mouseout",
	(event) => {
		portEddie.style.transform = "scale(1)";
		portEddie.src = "../../img/characterSelect/ggacr/Eddie_icon.webp";
	}
);

// May

const selMay = document.getElementById("character-may");
const portMay = document.getElementById("selectbox-may");
selMay.addEventListener("mouseover",
	(event) => {
		portMay.style.transform = "scale(1.1)";
		portMay.src = "../../img/characterSelect/ggacr/May_icon_selected.webp";
	}
);
selMay.addEventListener("mouseout",
	(event) => {
		portMay.style.transform = "scale(1)";
		portMay.src = "../../img/characterSelect/ggacr/May_icon.webp";
	}
);

// Robo-Ky

const selRoboKy = document.getElementById("character-roboky");
const portRoboKy = document.getElementById("selectbox-roboky");
selRoboKy.addEventListener("mouseover",
	(event) => {
		portRoboKy.style.transform = "scale(1.1)";
		portRoboKy.src = "../../img/characterSelect/ggacr/Robo-Ky_icon_selected.webp";
	}
);
selRoboKy.addEventListener("mouseout",
	(event) => {
		portRoboKy.style.transform = "scale(1)";
		portRoboKy.src = "../../img/characterSelect/ggacr/Robo-Ky_icon.webp";
	}
);

// Venom

const selVenom = document.getElementById("character-venom");
const portVenom = document.getElementById("selectbox-venom");
selVenom.addEventListener("mouseover",
	(event) => {
		portVenom.style.transform = "scale(1.1)";
		portVenom.src = "../../img/characterSelect/ggacr/Venom_icon_selected.webp";
	}
);
selVenom.addEventListener("mouseout",
	(event) => {
		portVenom.style.transform = "scale(1)";
		portVenom.src = "../../img/characterSelect/ggacr/Venom_icon.webp";
	}
);

// Baiken

const selBaiken = document.getElementById("character-baiken");
const portBaiken = document.getElementById("selectbox-baiken");
selBaiken.addEventListener("mouseover",
	(event) => {
		portBaiken.style.transform = "scale(1.1)";
		portBaiken.src = "../../img/characterSelect/ggacr/Baiken_icon_selected.webp";
	}
);
selBaiken.addEventListener("mouseout",
	(event) => {
		portBaiken.style.transform = "scale(1)";
		portBaiken.src = "../../img/characterSelect/ggacr/Baiken_icon.webp";
	}
);

// Testament

const selTestament = document.getElementById("character-testament");
const portTestament = document.getElementById("selectbox-testament");
selTestament.addEventListener("mouseover",
	(event) => {
		portTestament.style.transform = "scale(1.1)";
		portTestament.src = "../../img/characterSelect/ggacr/Testament_icon_selected.webp";
	}
);
selTestament.addEventListener("mouseout",
	(event) => {
		portTestament.style.transform = "scale(1)";
		portTestament.src = "../../img/characterSelect/ggacr/Testament_icon.webp";
	}
);

// Potemkin

const selPotemkin = document.getElementById("character-potemkin");
const portPotemkin = document.getElementById("selectbox-potemkin");
selPotemkin.addEventListener("mouseover",
	(event) => {
		portPotemkin.style.transform = "scale(1.1)";
		portPotemkin.src = "../../img/characterSelect/ggacr/Potemkin_icon_selected.webp";
	}
);
selPotemkin.addEventListener("mouseout",
	(event) => {
		portPotemkin.style.transform = "scale(1)";
		portPotemkin.src = "../../img/characterSelect/ggacr/Potemkin_icon.webp";
	}
);

// Faust

const selFaust = document.getElementById("character-faust");
const portFaust = document.getElementById("selectbox-faust");
selFaust.addEventListener("mouseover",
	(event) => {
		portFaust.style.transform = "scale(1.1)";
		portFaust.src = "../../img/characterSelect/ggacr/Faust_icon_selected.webp";
	}
);
selFaust.addEventListener("mouseout",
	(event) => {
		portFaust.style.transform = "scale(1)";
		portFaust.src = "../../img/characterSelect/ggacr/Faust_icon.webp";
	}
);

// Bridget

const selBridget = document.getElementById("character-bridget");
const portBridget = document.getElementById("selectbox-bridget");
selBridget.addEventListener("mouseover",
	(event) => {
		portBridget.style.transform = "scale(1.1)";
		portBridget.src = "../../img/characterSelect/ggacr/Bridget_icon_selected.webp";
	}
);
selBridget.addEventListener("mouseout",
	(event) => {
		portBridget.style.transform = "scale(1)";
		portBridget.src = "../../img/characterSelect/ggacr/Bridget_icon.webp";
	}
);

// I-No

const selINo = document.getElementById("character-ino");
const portINo = document.getElementById("selectbox-ino");
selINo.addEventListener("mouseover",
	(event) => {
		portINo.style.transform = "scale(1.1)";
		portINo.src = "../../img/characterSelect/ggacr/I-No_icon_selected.webp";
	}
);
selINo.addEventListener("mouseout",
	(event) => {
		portINo.style.transform = "scale(1)";
		portINo.src = "../../img/characterSelect/ggacr/I-No_icon.webp";
	}
);

// Justice

const selJustice = document.getElementById("character-justice");
const portJustice = document.getElementById("selectbox-justice");
selJustice.addEventListener("mouseover",
	(event) => {
		portJustice.style.transform = "scale(1.1)";
		portJustice.src = "../../img/characterSelect/ggacr/Justice_icon_selected.webp";
	}
);
selJustice.addEventListener("mouseout",
	(event) => {
		portJustice.style.transform = "scale(1)";
		portJustice.src = "../../img/characterSelect/ggacr/Justice_icon.webp";
	}
);
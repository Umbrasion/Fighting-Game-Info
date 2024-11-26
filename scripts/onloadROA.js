var characterList = document.getElementsByClassName("chrSelection")[0];

characterList.innerHTML = `
<div class="selectbox-container">
	<div class="selectbox-positioner">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Mollo_icon.webp" id="selectbox-mollo">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 96px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Clairen_icon.webp" id="selectbox-clairen">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 192px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Forsburn_icon.webp" id="selectbox-forsburn">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 288px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Zetterburn_icon.webp" id="selectbox-zetterburn">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 532px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Wrastor_icon.webp" id="selectbox-wrastor">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 392px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Random_icon.webp" id="selectbox-random" style="width: 172px; height: 94px">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 628px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Absa_icon.webp" id="selectbox-absa">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 724px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Elliana_icon.webp" id="selectbox-elliana">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 820px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Pomme_icon.webp" id="selectbox-pomme">
		</div>
	</div>
	<div class="selectbox-positioner" style="top: 98px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Olympia_icon.webp" id="selectbox-olympia">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 96px; top: 98px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Sylvanos_icon.webp" id="selectbox-sylvanos">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 192px; top: 98px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Maypul_icon.webp" id="selectbox-maypul">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 288px; top: 98px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Kragg_icon.webp" id="selectbox-kragg">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 384px; top: 80px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Ori_&_Sein_icon.webp" id="selectbox-ori" style="width: 92px; height: 110px">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 480px; top: 80px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Shovel_Knight_icon.webp" id="selectbox-shovelknight" style="width: 92px; height: 110px">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 532px; top: 98px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Orcane_icon.webp" id="selectbox-orcane">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 628px; top: 98px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Etalus_icon.webp" id="selectbox-etalus">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 724px; top: 98px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Ranno_icon.webp" id="selectbox-ranno">
		</div>
	</div>
	<div class="selectbox-positioner" style="left: 820px; top: 98px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/roa/Hodan_icon.webp" id="selectbox-hodan">
		</div>
	</div>
	<img class="selectbox-fullroster" src="../../img/characterSelect/roa/Full_Roster.webp" usemap="#mapselect">
	<map name="mapselect">
		<area id="character-mollo" href="Mollo.html" shape="poly" coords="44,0, 136,0, 92,92, 0,92">
		<area id="character-clairen" href="Clairen.html" shape="poly" coords="140,0, 232,0, 188,92, 96,92">
		<area id="character-forsburn" href="Forsburn.html" shape="poly" coords="236,0, 328,0, 284,92, 192,92">
		<area id="character-zetterburn" href="Zetterburn.html" shape="poly" coords="332,0, 424,0, 380,92, 288,92">
		<area id="character-random" href="Random_Character.html" shape="poly" coords="428,0, 528,0, 564,76, 490,94, 466,94, 392,76">
		<area id="character-wrastor" href="Wrastor.html" shape="poly" coords="532,0, 624,0, 668,92, 576,92">
		<area id="character-absa" href="Absa.html" shape="poly" coords="628,0, 720,0, 764,92, 672,92">
		<area id="character-elliana" href="Elliana.html" shape="poly" coords="724,0, 816,0, 860,92, 768,92">
		<area id="character-pomme" href="Pomme.html" shape="poly" coords="820,0, 912,0, 956,92, 864,92">
		<area id="character-olympia" href="Olympia.html" shape="poly" coords="0,98, 92,98, 136,190, 44,190">
		<area id="character-sylvanos" href="Sylvanos.html" shape="poly" coords="96,98, 188,98, 232,190, 140,190">
		<area id="character-maypul" href="Maypul.html" shape="poly" coords="192,98, 284,98, 328,190, 236,190">
		<area id="character-kragg" href="Kragg.html" shape="poly" coords="288,98, 380,98, 424,190, 332,190">
		<area id="character-ori" href="Ori_&_Sein.html" shape="poly" coords="388,80, 396,80, 476,100, 476,190, 428,190, 384,102, 384,88">
		<area id="character-shovelknight" href="Shovel_Knight.html" shape="poly" coords="480,100, 560,80, 568,80, 572,88, 572,102, 528,190, 480,190">
		<area id="character-orcane" href="Orcane.html" shape="poly" coords="576,98, 668,98, 624,190, 532,190">
		<area id="character-etalus" href="Etalus.html" shape="poly" coords="672,98, 764,98, 720,190, 628,190">
		<area id="character-ranno" href="Ranno.html" shape="poly" coords="768,98, 860,98, 816,190, 724,190">
		<area id="character-hodan" href="Hodan.html" shape="poly" coords="864,98, 956,98, 912,190, 820,190">
	</map>
</div>
`

// Mollo

const selMollo = document.getElementById("character-mollo");
const portMollo = document.getElementById("selectbox-mollo");
selMollo.addEventListener("mouseover",
	(event) => {
		portMollo.style.transform = "scale(1.1)";
	}
);
selMollo.addEventListener("mouseout",
	(event) => {
		portMollo.style.transform = "scale(1)";
	}
);

// Clairen

const selClairen = document.getElementById("character-clairen");
const portClairen = document.getElementById("selectbox-clairen");
selClairen.addEventListener("mouseover",
	(event) => {
		portClairen.style.transform = "scale(1.1)";
	}
);
selClairen.addEventListener("mouseout",
	(event) => {
		portClairen.style.transform = "scale(1)";
	}
);

// Forsburn

const selForsburn = document.getElementById("character-forsburn");
const portForsburn = document.getElementById("selectbox-forsburn");
selForsburn.addEventListener("mouseover",
	(event) => {
		portForsburn.style.transform = "scale(1.1)";
	}
);
selForsburn.addEventListener("mouseout",
	(event) => {
		portForsburn.style.transform = "scale(1)";
	}
);

// Zetterburn

const selZetterburn = document.getElementById("character-zetterburn");
const portZetterburn = document.getElementById("selectbox-zetterburn");
selZetterburn.addEventListener("mouseover",
	(event) => {
		portZetterburn.style.transform = "scale(1.1)";
	}
);
selZetterburn.addEventListener("mouseout",
	(event) => {
		portZetterburn.style.transform = "scale(1)";
	}
);

// Random

const selRandom = document.getElementById("character-random");
const portRandom = document.getElementById("selectbox-random");
selRandom.addEventListener("mouseover",
	(event) => {
		portRandom.style.transform = "scale(1.1)";
	}
);
selRandom.addEventListener("mouseout",
	(event) => {
		portRandom.style.transform = "scale(1)";
	}
);

// Wrastor

const selWrastor = document.getElementById("character-wrastor");
const portWrastor = document.getElementById("selectbox-wrastor");
selWrastor.addEventListener("mouseover",
	(event) => {
		portWrastor.style.transform = "scale(1.1)";
	}
);
selWrastor.addEventListener("mouseout",
	(event) => {
		portWrastor.style.transform = "scale(1)";
	}
);

// Absa

const selAbsa = document.getElementById("character-absa");
const portAbsa = document.getElementById("selectbox-absa");
selAbsa.addEventListener("mouseover",
	(event) => {
		portAbsa.style.transform = "scale(1.1)";
	}
);
selAbsa.addEventListener("mouseout",
	(event) => {
		portAbsa.style.transform = "scale(1)";
	}
);

// Elliana

const selElliana = document.getElementById("character-elliana");
const portElliana = document.getElementById("selectbox-elliana");
selElliana.addEventListener("mouseover",
	(event) => {
		portElliana.style.transform = "scale(1.1)";
	}
);
selElliana.addEventListener("mouseout",
	(event) => {
		portElliana.style.transform = "scale(1)";
	}
);

// Pomme

const selPomme = document.getElementById("character-pomme");
const portPomme = document.getElementById("selectbox-pomme");
selPomme.addEventListener("mouseover",
	(event) => {
		portPomme.style.transform = "scale(1.1)";
	}
);
selPomme.addEventListener("mouseout",
	(event) => {
		portPomme.style.transform = "scale(1)";
	}
);

// Olympia

const selOlympia = document.getElementById("character-olympia");
const portOlympia = document.getElementById("selectbox-olympia");
selOlympia.addEventListener("mouseover",
	(event) => {
		portOlympia.style.transform = "scale(1.1)";
	}
);
selOlympia.addEventListener("mouseout",
	(event) => {
		portOlympia.style.transform = "scale(1)";
	}
);

// Sylvanos

const selSylvanos = document.getElementById("character-sylvanos");
const portSylvanos = document.getElementById("selectbox-sylvanos");
selSylvanos.addEventListener("mouseover",
	(event) => {
		portSylvanos.style.transform = "scale(1.1)";
	}
);
selSylvanos.addEventListener("mouseout",
	(event) => {
		portSylvanos.style.transform = "scale(1)";
	}
);

// Maypul

const selMaypul = document.getElementById("character-maypul");
const portMaypul = document.getElementById("selectbox-maypul");
selMaypul.addEventListener("mouseover",
	(event) => {
		portMaypul.style.transform = "scale(1.1)";
	}
);
selMaypul.addEventListener("mouseout",
	(event) => {
		portMaypul.style.transform = "scale(1)";
	}
);

// Kragg

const selKragg = document.getElementById("character-kragg");
const portKragg = document.getElementById("selectbox-kragg");
selKragg.addEventListener("mouseover",
	(event) => {
		portKragg.style.transform = "scale(1.1)";
	}
);
selKragg.addEventListener("mouseout",
	(event) => {
		portKragg.style.transform = "scale(1)";
	}
);

// Ori

const selOri = document.getElementById("character-ori");
const portOri = document.getElementById("selectbox-ori");
selOri.addEventListener("mouseover",
	(event) => {
		portOri.style.transform = "scale(1.1)";
	}
);
selOri.addEventListener("mouseout",
	(event) => {
		portOri.style.transform = "scale(1)";
	}
);

// Shovel Knight

const selShovel = document.getElementById("character-shovelknight");
const portShovel = document.getElementById("selectbox-shovelknight");
selShovel.addEventListener("mouseover",
	(event) => {
		portShovel.style.transform = "scale(1.1)";
	}
);
selShovel.addEventListener("mouseout",
	(event) => {
		portShovel.style.transform = "scale(1)";
	}
);

// Orcane

const selOrcane = document.getElementById("character-orcane");
const portOrcane = document.getElementById("selectbox-orcane");
selOrcane.addEventListener("mouseover",
	(event) => {
		portOrcane.style.transform = "scale(1.1)";
	}
);
selOrcane.addEventListener("mouseout",
	(event) => {
		portOrcane.style.transform = "scale(1)";
	}
);

// Etalus

const selEtalus = document.getElementById("character-etalus");
const portEtalus = document.getElementById("selectbox-etalus");
selEtalus.addEventListener("mouseover",
	(event) => {
		portEtalus.style.transform = "scale(1.1)";
	}
);
selEtalus.addEventListener("mouseout",
	(event) => {
		portEtalus.style.transform = "scale(1)";
	}
);

// Ranno

const selRanno = document.getElementById("character-ranno");
const portRanno = document.getElementById("selectbox-ranno");
selRanno.addEventListener("mouseover",
	(event) => {
		portRanno.style.transform = "scale(1.1)";
	}
);
selRanno.addEventListener("mouseout",
	(event) => {
		portRanno.style.transform = "scale(1)";
	}
);

// Hodan

const selHodan = document.getElementById("character-hodan");
const portHodan = document.getElementById("selectbox-hodan");
selHodan.addEventListener("mouseover",
	(event) => {
		portHodan.style.transform = "scale(1.1)";
	}
);
selHodan.addEventListener("mouseout",
	(event) => {
		portHodan.style.transform = "scale(1)";
	}
);
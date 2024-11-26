var characterList = document.getElementsByClassName("chrSelection")[0];
var sizeChange = "scale(1.1)";
var zIndexChange = "500";

characterList.innerHTML = `
<div class="selectbox-container">
	<div id="positioner-random" class="selectbox-positioner" style="left: 257px; top: 35px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/isd/Random_icon.webp" id="selectbox-random" style="height: 131px">
		</div>
	</div>
	<div id="positioner-fubuki" class="selectbox-positioner" style="left: 182px; top: 109px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/isd/Shirakami_Fubuki_icon.webp" id="selectbox-fubuki" style="height: 131px">
		</div>
	</div>
	<div id="positioner-suisei" class="selectbox-positioner" style="left: 105px; top: 181px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/isd/Hoshimachi_Suisei_icon.webp" id="selectbox-suisei">
		</div>
	</div>
	<div id="positioner-ollie" class="selectbox-positioner" style="left: 32px; top: 259px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/isd/Kureiji_Ollie_icon.webp" id="selectbox-ollie">
		</div>
	</div>
	<div id="positioner-aki" class="selectbox-positioner" style="left: 107px; top: 335px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/isd/Aki_Rosenthal_icon.webp" id="selectbox-aki" style="width: 131px; height: 131px">
		</div>
	</div>
	<div id="positioner-coco" class="selectbox-positioner" style="left: 182px; top: 409px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/isd/Kiryu_Coco_icon.webp" id="selectbox-coco">
		</div>
	</div>
	<div id="positioner-pekora" class="selectbox-positioner" style="left: 257px; top: 484px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/isd/Usada_Pekora_icon.webp" id="selectbox-pekora" style="height: 131px">
		</div>
	</div>
	<div id="positioner-botan" class="selectbox-positioner" style="left: 335px; top: 411px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/isd/Shishiro_Botan_icon.webp" id="selectbox-botan" style="width: 131px">
		</div>
	</div>
	<div id="positioner-ayame" class="selectbox-positioner" style="left: 412px; top: 338px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/isd/Nakiri_Ayame_icon.webp" id="selectbox-ayame">
		</div>
	</div>
	<div id="positioner-ina" class="selectbox-positioner" style="left: 482px; top: 259px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/isd/Ninomae_Ina'nis_icon.webp" id="selectbox-ina">
		</div>
	</div>
	<div id="positioner-sora" class="selectbox-positioner" style="left: 406px; top: 185px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/isd/Tokino_Sora_icon.webp" id="selectbox-sora" style="width: 131px">
		</div>
	</div>
	<div id="positioner-korone" class="selectbox-positioner" style="left: 331px; top: 110px">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/isd/Inugami_Korone_icon.webp" id="selectbox-korone">
		</div>
	</div>
	<img class="selectbox-fullroster" src="../../img/characterSelect/isd/Full_Roster.webp" usemap="#mapselect">
	<map name="mapselect">
		<!-- Add/Subtract 9 for extended corners -->
		<!-- -9y, +9x, +9y, -9x -->
		<area id="character-random" href="Random_Character.html" shape="poly" coords="323,26, 398,100.5, 323,175, 248,100.5">
		<area id="character-fubuki" href="Shirakami_Fubuki.html" shape="poly" coords="248,100, 323,174.5, 248,249, 173,174.5">
		<area id="character-suisei" href="Hoshimachi_Suisei.html" shape="poly" coords="171,172, 246,247, 171,322, 96,247">
		<area id="character-ollie" href="Kureiji_Ollie.html" shape="poly" coords="98,250, 173,325, 98,400, 23,325">
		<area id="character-aki" href="Aki_Rosenthal.html" shape="poly" coords="172.5,326, 247,400.5, 172.5,475, 98,400.5">
		<area id="character-coco" href="Kiryu_Coco.html" shape="poly" coords="248,400, 323,475, 248,550, 173,475">
		<area id="character-pekora" href="Usada_Pekora.html" shape="poly" coords="323,475, 398,549.5, 323,624, 248,549.5">
		<area id="character-botan" href="Shishiro_Botan.html" shape="poly" coords="400.5,402, 475,477, 400.5,552, 326,477">
		<area id="character-ayame" href="Nakiri_Ayame.html" shape="poly" coords="478,329, 553,404, 478,479, 403,404">
		<area id="character-ina" href="Ninomae_Ina'nis.html" shape="poly" coords="548,250, 623,325, 548,400, 473,325">
		<area id="character-sora" href="Tokino_Sora.html" shape="poly" coords="471.5,176, 546,251, 471.5,326, 397,251">
		<area id="character-korone" href="Inugami_Korone.html" shape="poly" coords="397,101, 472,176, 397,251, 322,176">
	</map>
</div>
`;

// Random

const selRandom = document.getElementById("character-random");
const portRandom = document.getElementById("selectbox-random");
const posRandom = document.getElementById("positioner-random");
selRandom.addEventListener("mouseover",
	(event) => {
		portRandom.style.transform = sizeChange;
		posRandom.style.zIndex = zIndexChange;
	}
);
selRandom.addEventListener("mouseout",
	(event) => {
		portRandom.style.transform = "scale(1.0)";
		posRandom.style.zIndex = "auto";
	}
);

// Fubuki

const selFubuki = document.getElementById("character-fubuki");
const portFubuki = document.getElementById("selectbox-fubuki");
const posFubuki = document.getElementById("positioner-fubuki");
selFubuki.addEventListener("mouseover",
	(event) => {
		portFubuki.style.transform = sizeChange;
		posFubuki.style.zIndex = zIndexChange;
	}
);
selFubuki.addEventListener("mouseout",
	(event) => {
		portFubuki.style.transform = "scale(1.0)";
		posFubuki.style.zIndex = "auto";
	}
);

// Suisei

const selSuisei = document.getElementById("character-suisei");
const portSuisei = document.getElementById("selectbox-suisei");
const posSuisei = document.getElementById("positioner-suisei");
selSuisei.addEventListener("mouseover",
	(event) => {
		portSuisei.style.transform = sizeChange;
		posSuisei.style.zIndex = zIndexChange;
	}
);
selSuisei.addEventListener("mouseout",
	(event) => {
		portSuisei.style.transform = "scale(1.0)";
		posSuisei.style.zIndex = "auto";
	}
);

// Ollie

const selOllie = document.getElementById("character-ollie");
const portOllie = document.getElementById("selectbox-ollie");
const posOllie = document.getElementById("positioner-ollie");
selOllie.addEventListener("mouseover",
	(event) => {
		portOllie.style.transform = sizeChange;
		posOllie.style.zIndex = zIndexChange;
	}
);
selOllie.addEventListener("mouseout",
	(event) => {
		portOllie.style.transform = "scale(1.0)";
		posOllie.style.zIndex = "auto";
	}
);

// Aki

const selAki = document.getElementById("character-aki");
const portAki = document.getElementById("selectbox-aki");
const posAki = document.getElementById("positioner-aki");
selAki.addEventListener("mouseover",
	(event) => {
		portAki.style.transform = sizeChange;
		posAki.style.zIndex = zIndexChange;
	}
);
selAki.addEventListener("mouseout",
	(event) => {
		portAki.style.transform = "scale(1.0)";
		posAki.style.zIndex = "auto";
	}
);

// Coco

const selCoco = document.getElementById("character-coco");
const portCoco = document.getElementById("selectbox-coco");
const posCoco = document.getElementById("positioner-coco");
selCoco.addEventListener("mouseover",
	(event) => {
		portCoco.style.transform = sizeChange;
		posCoco.style.zIndex = zIndexChange;
	}
);
selCoco.addEventListener("mouseout",
	(event) => {
		portCoco.style.transform = "scale(1.0)";
		posCoco.style.zIndex = "auto";
	}
);

// Pekora

const selPekora = document.getElementById("character-pekora");
const portPekora = document.getElementById("selectbox-pekora");
const posPekora = document.getElementById("positioner-pekora");
selPekora.addEventListener("mouseover",
	(event) => {
		portPekora.style.transform = sizeChange;
		posPekora.style.zIndex = zIndexChange;
	}
);
selPekora.addEventListener("mouseout",
	(event) => {
		portPekora.style.transform = "scale(1.0)";
		posPekora.style.zIndex = "auto";
	}
);

// Botan

const selBotan = document.getElementById("character-botan");
const portBotan = document.getElementById("selectbox-botan");
const posBotan = document.getElementById("positioner-botan");
selBotan.addEventListener("mouseover",
	(event) => {
		portBotan.style.transform = sizeChange;
		posBotan.style.zIndex = zIndexChange;
	}
);
selBotan.addEventListener("mouseout",
	(event) => {
		portBotan.style.transform = "scale(1.0)";
		posBotan.style.zIndex = "auto";
	}
);

// Ayame

const selAyame = document.getElementById("character-ayame");
const portAyame = document.getElementById("selectbox-ayame");
const posAyame = document.getElementById("positioner-ayame");
selAyame.addEventListener("mouseover",
	(event) => {
		portAyame.style.transform = sizeChange;
		posAyame.style.zIndex = zIndexChange;
	}
);
selAyame.addEventListener("mouseout",
	(event) => {
		portAyame.style.transform = "scale(1.0)";
		posAyame.style.zIndex = "auto";
	}
);

// Ina

const selIna = document.getElementById("character-ina");
const portIna = document.getElementById("selectbox-ina");
const posIna = document.getElementById("positioner-ina");
selIna.addEventListener("mouseover",
	(event) => {
		portIna.style.transform = sizeChange;
		posIna.style.zIndex = zIndexChange;
	}
);
selIna.addEventListener("mouseout",
	(event) => {
		portIna.style.transform = "scale(1.0)";
		posIna.style.zIndex = "auto";
	}
);

// Sora

const selSora = document.getElementById("character-sora");
const portSora = document.getElementById("selectbox-sora");
const posSora = document.getElementById("positioner-sora");
selSora.addEventListener("mouseover",
	(event) => {
		portSora.style.transform = sizeChange;
		posSora.style.zIndex = zIndexChange;
	}
);
selSora.addEventListener("mouseout",
	(event) => {
		portSora.style.transform = "scale(1.0)";
		posSora.style.zIndex = "auto";
	}
);

// Korone

const selKorone = document.getElementById("character-korone");
const portKorone = document.getElementById("selectbox-korone");
const posKorone = document.getElementById("positioner-korone");
selKorone.addEventListener("mouseover",
	(event) => {
		portKorone.style.transform = sizeChange;
		posKorone.style.zIndex = zIndexChange;
	}
);
selKorone.addEventListener("mouseout",
	(event) => {
		portKorone.style.transform = "scale(1.0)";
		posKorone.style.zIndex = "auto";
	}
);
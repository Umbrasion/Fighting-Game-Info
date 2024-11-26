var characterList = document.getElementsByClassName("chrSelection")[0];
var sizeChange = "scale(1.2)";
var zIndexChange = "500";

characterList.innerHTML = `
<div class="selectbox-container">
	<div id="positioner-random" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Random_icon.webp" id="selectbox-random" style="">
		</div>
	</div>
	<div id="positioner-masterroshi" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Master_Roshi_icon.webp" id="selectbox-masterroshi">
		</div>
	</div>
	<div id="positioner-gogeta-ssgss" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Gogeta_(SSGSS)_icon.webp" id="selectbox-gogeta-ssgss">
		</div>
	</div>
	<div id="positioner-goku" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Goku_icon.webp" id="selectbox-goku">
		</div>
	</div>
	<div id="positioner-tien" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Tien_icon.webp" id="selectbox-tien">
		</div>
	</div>
	<div id="positioner-yamcha" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Yamcha_icon.webp" id="selectbox-yamcha">
		</div>
	</div>
	<div id="positioner-krillin" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Krillin_icon.webp" id="selectbox-krillin">
		</div>
	</div>
	<div id="positioner-goku-ss" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Goku_(Super_Saiyan)_icon.webp" id="selectbox-goku-ss">
		</div>
	</div>
	<div id="positioner-android21-labcoat" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Android_21_(Lab_Coat)_icon.webp" id="selectbox-android21-labcoat" style="">
		</div>
	</div>
	<div id="positioner-frieza" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Frieza_icon.webp" id="selectbox-frieza">
		</div>
	</div>
	<div id="positioner-kidbuu" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Kid_Buu_icon.webp" id="selectbox-kidbuu">
		</div>
	</div>
	<div id="positioner-captainginyu" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Captain_Ginyu_icon.webp" id="selectbox-captainginyu">
		</div>
	</div>
	<div id="positioner-nappa" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Nappa_icon.webp" id="selectbox-nappa">
		</div>
	</div>
	<div id="positioner-vegeta" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Vegeta_icon.webp" id="selectbox-vegeta">
		</div>
	</div>
	<div id="positioner-broly-dbs" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Broly_(DBS)_icon.webp" id="selectbox-broly-dbs">
		</div>
	</div>
	<div id="positioner-superbaby2" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Super_Baby_2_icon.webp" id="selectbox-superbaby2">
		</div>
	</div>
	<div id="positioner-goku-gt" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Goku_(GT)_icon.webp" id="selectbox-goku-gt">
		</div>
	</div>
	<div id="positioner-android17" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Android_17_icon.webp" id="selectbox-android17">
		</div>
	</div>
	<div id="positioner-bardock" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Bardock_icon.webp" id="selectbox-bardock">
		</div>
	</div>
	<div id="positioner-goku-ssgss" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Goku_(SSGSS)_icon.webp" id="selectbox-goku-ssgss">
		</div>
	</div>
	<div id="positioner-gohan-adult" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Gohan_(Adult)_icon.webp" id="selectbox-gohan-adult">
		</div>
	</div>
	<div id="positioner-trunks" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Trunks_icon.webp" id="selectbox-trunks">
		</div>
	</div>
	<div id="positioner-vegeta-ss" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Vegeta_(Super_Saiyan)_icon.webp" id="selectbox-vegeta-ss">
		</div>
	</div>
	<div id="positioner-cell" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Cell_icon.webp" id="selectbox-cell">
		</div>
	</div>
	<div id="positioner-android18" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Android_18_icon.webp" id="selectbox-android18">
		</div>
	</div>
	<div id="positioner-android16" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Android_16_icon.webp" id="selectbox-android16">
		</div>
	</div>
	<div id="positioner-android21" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Android_21_icon.webp" id="selectbox-android21">
		</div>
	</div>
	<div id="positioner-broly" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Broly_icon.webp" id="selectbox-broly">
		</div>
	</div>
	<div id="positioner-cooler" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Cooler_icon.webp" id="selectbox-cooler">
		</div>
	</div>
	<div id="positioner-janemba" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Janemba_icon.webp" id="selectbox-janemba">
		</div>
	</div>
	<div id="positioner-goku-ui" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Goku_(Ultra_Instinct)_icon.webp" id="selectbox-goku-ui">
		</div>
	</div>
	<div id="positioner-videl" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Videl_icon.webp" id="selectbox-videl">
		</div>
	</div>
	<div id="positioner-vegito-ssgss" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Vegito_(SSGSS)_icon.webp" id="selectbox-vegito-ssgss">
		</div>
	</div>
	<div id="positioner-vegeta-ssgss" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Vegeta_(SSGSS)_icon.webp" id="selectbox-vegeta-ssgss">
		</div>
	</div>
	<div id="positioner-gotenks" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Gotenks_icon.webp" id="selectbox-gotenks">
		</div>
	</div>
	<div id="positioner-piccolo" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Piccolo_icon.webp" id="selectbox-piccolo">
		</div>
	</div>
	<div id="positioner-gohan-teen" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Gohan_(Teen)_icon.webp" id="selectbox-gohan-teen">
		</div>
	</div>
	<div id="positioner-gogeta-ss4" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Gogeta_(SS4)_icon.webp" id="selectbox-gogeta-ss4" style="">
		</div>
	</div>
	<div id="positioner-majinbuu" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Majin_Buu_icon.webp" id="selectbox-majinbuu">
		</div>
	</div>
	<div id="positioner-beerus" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Beerus_icon.webp" id="selectbox-beerus">
		</div>
	</div>
	<div id="positioner-hit" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Hit_icon.webp" id="selectbox-hit">
		</div>
	</div>
	<div id="positioner-gokublack" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Goku_Black_icon.webp" id="selectbox-gokublack">
		</div>
	</div>
	<div id="positioner-zamasufused" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Zamasu_(Fused)_icon.webp" id="selectbox-zamasufused">
		</div>
	</div>
	<div id="positioner-jiren" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Jiren_icon.webp" id="selectbox-jiren">
		</div>
	</div>
	<div id="positioner-kefla" class="selectbox-positioner" style="">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/dbfz/Kefla_icon.webp" id="selectbox-kefla">
		</div>
	</div>
	<img class="selectbox-fullroster" src="../../img/characterSelect/dbfz/Full_Roster.webp" usemap="#mapselect">
	<map name="mapselect">
		<area id="character-random" href="Random_Character.html" shape="poly" coords="425,0, 459,0, 471,11, 467,42, 462,47, 450,47, 448,49, 436,49, 434,47, 422,47, 417,42, 413,12">
		<!-- X change: 57.5, Y change: 1 -->
		<area id="character-masterroshi" href="Master_Roshi.html" shape="poly" coords="4,53, 55,54, 61,94, 57,98, 6,97, 0,57">
		<area id="character-gogeta-ssgss" href="Gogeta_(SSGSS).html" shape="poly" coords="61.5,54, 112.5,55, 118.5,95, 114.5,99, 63.5,98, 57.5,58">
		<area id="character-goku" href="Goku.html" shape="poly" coords="119,55, 170,56, 176,96, 172,100, 121,99, 115,59">
		<area id="character-tien" href="Tien.html" shape="poly" coords="176.5,56, 227.5,57, 233.5,97, 229.5,101, 178.5,100, 172.5,60">
		<area id="character-yamcha" href="Yamcha.html" shape="poly" coords="234,57, 285,58, 291,98, 287,102, 236,101, 230,61">
		<area id="character-krillin" href="Krillin.html" shape="poly" coords="291.5,58, 342.5,59, 348.5,99, 344.5,103, 293.5,102, 287.5,62">
		<area id="character-goku-ss" href="Goku_(Super_Saiyan).html" shape="poly" coords="349,59, 400,60, 406,100, 402,104, 351,103, 345,63">
		<area id="character-android21-labcoat" href="Android_21_(Lab_Coat).html" shape="poly" coords="418,56, 429,56, 431,54, 452,54, 454,56, 465,56, 472,63, 465,101, 451,101, 448,104, 435,104, 432,101, 418,101, 411,63">
		<area id="character-frieza" href="Frieza.html" shape="poly" coords="535,59, 484,60, 478,100, 482,104, 533,103, 539,63">
		<area id="character-kidbuu" href="Kid_Buu.html" shape="poly" coords="592.5,58, 541.5,59, 535.5,99, 539.5,103, 590.5,102, 596.5,62">
		<area id="character-captainginyu" href="Captain_Ginyu.html" shape="poly" coords="650,57, 599,58, 593,98, 597,102, 648,101, 654,61">
		<area id="character-nappa" href="Nappa.html" shape="poly" coords="707.5,56, 656.5,57, 650.5,97, 654.5,101, 705.5,100, 711.5,60">
		<area id="character-vegeta" href="Vegeta.html" shape="poly" coords="765,55, 714,56, 708,96, 712,100, 763,99, 769,59">
		<area id="character-broly-dbs" href="Broly_(DBS).html" shape="poly" coords="822.5,54, 771.5,55, 765.5,95, 769.5,99, 820.5,98, 826.5,58">
		<area id="character-superbaby2" href="Super_Baby_2.html" shape="poly" coords="880,53, 829,54, 823,94, 827,98, 878,97, 884,57">
		<area id="character-goku-gt" href="Goku_(GT).html" shape="poly" coords="36.5,100, 87.5,101, 93.5,141, 89.5,145, 38.5,144, 32.5,104">
		<area id="character-android17" href="Android_17.html" shape="poly" coords="94,101, 145,102, 151,142, 147,146, 96,145, 90,105">
		<area id="character-bardock" href="Bardock.html" shape="poly" coords="151.5,102, 202.5,103, 208.5,143, 204.5,147, 153.5,146, 147.5,106">
		<area id="character-goku-ssgss" href="Goku_(SSGSS).html" shape="poly" coords="209,103, 260,104, 266,144, 262,148, 211,147, 205,107">
		<area id="character-gohan-adult" href="Gohan_(Adult).html" shape="poly" coords="266.5,104, 317.5,105, 323.5,145, 319.5,149, 268.5,148, 262.5,108">
		<area id="character-trunks" href="Trunks.html" shape="poly" coords="324,105, 375,106, 381,146, 377,150, 326,149, 320,109">
		<area id="character-vegeta-ss" href="Vegeta_(Super_Saiyan).html" shape="poly" coords="381.5,106, 432.5,107, 438.5,147, 434.5,151, 383.5,150, 377.5,110">
		<area id="character-cell" href="Cell.html" shape="poly" coords="503,106, 452,107, 446,147, 450,151, 501,150, 507,110">
		<area id="character-android18" href="Android_18.html" shape="poly" coords="560.5,105, 509.5,106, 503.5,146, 507.5,150, 558.5,149, 564.5,109">
		<area id="character-android16" href="Android_16.html" shape="poly" coords="618,104, 567,105, 561,145, 565,149, 616,148, 622,108">
		<area id="character-android21" href="Android_21.html" shape="poly" coords="675.5,103, 624.5,104, 618.5,144, 622.5,148, 673.5,147, 679.5,107">
		<area id="character-broly" href="Broly.html" shape="poly" coords="733,102, 682,103, 676,143, 680,147, 731,146, 737,106">
		<area id="character-cooler" href="Cooler.html" shape="poly" coords="790.5,101, 739.5,102, 733.5,142, 737.5,146, 788.5,145, 794.5,105">
		<area id="character-janemba" href="Janemba.html" shape="poly" coords="848,100, 797,101, 791,141, 795,145, 846,144, 852,104">
		<area id="character-goku-ui" href="Goku_(Ultra_Instinct).html" shape="poly" coords="12,146.5, 63,147.5, 69,187.5, 65,191.5, 14,190.5, 8,150.5">
		<area id="character-videl" href="Videl.html" shape="poly" coords="69.5,147.5, 120.5,148.5, 126.5,188.5, 122.5,192.5, 71.5,191.5, 65.5,151.5">
		<area id="character-vegito-ssgss" href="Vegito_(SSGSS).html" shape="poly" coords="127,148.5, 178,149.5, 184,189.5, 180,193.5, 129,192.5, 123,152.5">
		<area id="character-vegeta-ssgss" href="Vegeta_(SSGSS).html" shape="poly" coords="184.5,149.5, 235.5,150.5, 241.5,190.5, 237.5,194.5, 186.5,193.5, 180.5,153.5">
		<area id="character-gotenks" href="Gotenks.html" shape="poly" coords="242,150.5, 293,151.5, 299,191.5, 295,195.5, 244,194.5, 238,154.5">
		<area id="character-piccolo" href="Piccolo.html" shape="poly" coords="299.5,151.5, 350.5,152.5, 356.5,192.5, 352.5,196.5, 301.5,195.5, 295.5,155.5">
		<area id="character-gohan-teen" href="Gohan_(Teen).html" shape="poly" coords="357,152.5, 408,153.5, 414,193.5, 410,197.5, 359,196.5, 353,156.5">
		<area id="character-gogeta-ss4" href="Gogeta_(SS4).html" shape="poly" coords="420,155, 442,153, 464,155, 472,164, 467,195, 449,202, 435,202, 417,195, 412,164">
		<area id="character-majinbuu" href="Majin_Buu.html" shape="poly" coords="527.5,152.5, 476.5,153.5, 470.5,193.5, 474.5,197.5, 525.5,196.5, 531.5,156.5">
		<area id="character-beerus" href="Beerus.html" shape="poly" coords="585,151.5, 534,152.5, 528,192.5, 532,196.5, 583,195.5, 589,155.5">
		<area id="character-hit" href="Hit.html" shape="poly" coords="642.5,150.5, 591.5,151.5, 585.5,191.5, 589.5,195.5, 640.5,194.5, 646.5,154.5">
		<area id="character-gokublack" href="Goku_Black.html" shape="poly" coords="700,149.5, 649,150.5, 643,190.5, 647,194.5, 698,193.5, 704,153.5">
		<area id="character-zamasufused" href="Zamasu_(Fused).html" shape="poly" coords="757.5,148.5, 706.5,149.5, 700.5,189.5, 704.5,193.5, 755.5,192.5, 761.5,152.5">
		<area id="character-jiren" href="Jiren.html" shape="poly" coords="815,147.5, 764,148.5, 758,188.5, 762,192.5, 813,191.5, 819,151.5">
		<area id="character-kefla" href="Kefla.html" shape="poly" coords="872.5,146.5, 821.5,147.5, 815.5,187.5, 819.5,191.5, 870.5,190.5, 876.5,150.5">
	</map>
</div>
`

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
		portRandom.style.transform = "scale(1)";
		posRandom.style.zIndex = "auto";
	}
);

// Master Roshi

const selRoshi = document.getElementById("character-masterroshi");
const portRoshi = document.getElementById("selectbox-masterroshi");
const posRoshi = document.getElementById("positioner-masterroshi");
selRoshi.addEventListener("mouseover",
	(event) => {
		portRoshi.style.transform = sizeChange;
		posRoshi.style.zIndex = zIndexChange;
	}
);
selRoshi.addEventListener("mouseout",
	(event) => {
		portRoshi.style.transform = "scale(1)";
		posRoshi.style.zIndex = "auto";
	}
);

// Gogeta (SSGSS)

const selGogetaSSGSS = document.getElementById("character-gogeta-ssgss");
const portGogetaSSGSS = document.getElementById("selectbox-gogeta-ssgss");
const posGogetaSSGSS = document.getElementById("positioner-gogeta-ssgss");
selGogetaSSGSS.addEventListener("mouseover",
	(event) => {
		portGogetaSSGSS.style.transform = sizeChange;
		posGogetaSSGSS.style.zIndex = zIndexChange;
	}
);
selGogetaSSGSS.addEventListener("mouseout",
	(event) => {
		portGogetaSSGSS.style.transform = "scale(1)";
		posGogetaSSGSS.style.zIndex = "auto";
	}
);

// Goku

const selGoku = document.getElementById("character-goku");
const portGoku = document.getElementById("selectbox-goku");
const posGoku = document.getElementById("positioner-goku");
selGoku.addEventListener("mouseover",
	(event) => {
		portGoku.style.transform = sizeChange;
		posGoku.style.zIndex = zIndexChange;
	}
);
selGoku.addEventListener("mouseout",
	(event) => {
		portGoku.style.transform = "scale(1)";
		posGoku.style.zIndex = "auto";
	}
);

// Tien

const selTien = document.getElementById("character-tien");
const portTien = document.getElementById("selectbox-tien");
const posTien = document.getElementById("positioner-tien");
selTien.addEventListener("mouseover",
	(event) => {
		portTien.style.transform = sizeChange;
		posTien.style.zIndex = zIndexChange;
	}
);
selTien.addEventListener("mouseout",
	(event) => {
		portTien.style.transform = "scale(1)";
		posTien.style.zIndex = "auto";
	}
);

// Yamcha

const selYamcha = document.getElementById("character-yamcha");
const portYamcha = document.getElementById("selectbox-yamcha");
const posYamcha = document.getElementById("positioner-yamcha");
selYamcha.addEventListener("mouseover",
	(event) => {
		portYamcha.style.transform = sizeChange;
		posYamcha.style.zIndex = zIndexChange;
	}
);
selYamcha.addEventListener("mouseout",
	(event) => {
		portYamcha.style.transform = "scale(1)";
		posYamcha.style.zIndex = "auto";
	}
);

// Krillin

const selKrillin = document.getElementById("character-krillin");
const portKrillin = document.getElementById("selectbox-krillin");
const posKrillin = document.getElementById("positioner-krillin");
selKrillin.addEventListener("mouseover",
	(event) => {
		portKrillin.style.transform = sizeChange;
		posKrillin.style.zIndex = zIndexChange;
	}
);
selKrillin.addEventListener("mouseout",
	(event) => {
		portKrillin.style.transform = "scale(1)";
		posKrillin.style.zIndex = "auto";
	}
);

// Goku (Super Saiyan)

const selGokuSS = document.getElementById("character-goku-ss");
const portGokuSS = document.getElementById("selectbox-goku-ss");
const posGokuSS = document.getElementById("positioner-goku-ss");
selGokuSS.addEventListener("mouseover",
	(event) => {
		portGokuSS.style.transform = sizeChange;
		posGokuSS.style.zIndex = zIndexChange;
	}
);
selGokuSS.addEventListener("mouseout",
	(event) => {
		portGokuSS.style.transform = "scale(1)";
		posGokuSS.style.zIndex = "auto";
	}
);

// Android 21 (Lab Coat)

const selLabCoat = document.getElementById("character-android21-labcoat");
const portLabCoat = document.getElementById("selectbox-android21-labcoat");
const posLabCoat = document.getElementById("positioner-android21-labcoat");
selLabCoat.addEventListener("mouseover",
	(event) => {
		portLabCoat.style.transform = sizeChange;
		posLabCoat.style.zIndex = zIndexChange;
	}
);
selLabCoat.addEventListener("mouseout",
	(event) => {
		portLabCoat.style.transform = "scale(1)";
		posLabCoat.style.zIndex = "auto";
	}
);

// Frieza

const selFrieza = document.getElementById("character-frieza");
const portFrieza = document.getElementById("selectbox-frieza");
const posFrieza = document.getElementById("positioner-frieza");
selFrieza.addEventListener("mouseover",
	(event) => {
		portFrieza.style.transform = sizeChange;
		posFrieza.style.zIndex = zIndexChange;
	}
);
selFrieza.addEventListener("mouseout",
	(event) => {
		portFrieza.style.transform = "scale(1)";
		posFrieza.style.zIndex = "auto";
	}
);

// Kid Buu

const selKidBuu = document.getElementById("character-kidbuu");
const portKidBuu = document.getElementById("selectbox-kidbuu");
const posKidBuu = document.getElementById("positioner-kidbuu");
selKidBuu.addEventListener("mouseover",
	(event) => {
		portKidBuu.style.transform = sizeChange;
		posKidBuu.style.zIndex = zIndexChange;
	}
);
selKidBuu.addEventListener("mouseout",
	(event) => {
		portKidBuu.style.transform = "scale(1)";
		posKidBuu.style.zIndex = "auto";
	}
);

// Captain Ginyu

const selGinyu = document.getElementById("character-captainginyu");
const portGinyu = document.getElementById("selectbox-captainginyu");
const posGinyu = document.getElementById("positioner-captainginyu");
selGinyu.addEventListener("mouseover",
	(event) => {
		portGinyu.style.transform = sizeChange;
		posGinyu.style.zIndex = zIndexChange;
	}
);
selGinyu.addEventListener("mouseout",
	(event) => {
		portGinyu.style.transform = "scale(1)";
		posGinyu.style.zIndex = "auto";
	}
);

// Nappa

const selNappa = document.getElementById("character-nappa");
const portNappa = document.getElementById("selectbox-nappa");
const posNappa = document.getElementById("positioner-nappa");
selNappa.addEventListener("mouseover",
	(event) => {
		portNappa.style.transform = sizeChange;
		posNappa.style.zIndex = zIndexChange;
	}
);
selNappa.addEventListener("mouseout",
	(event) => {
		portNappa.style.transform = "scale(1)";
		posNappa.style.zIndex = "auto";
	}
);

// Vegeta

const selVegeta = document.getElementById("character-vegeta");
const portVegeta = document.getElementById("selectbox-vegeta");
const posVegeta = document.getElementById("positioner-vegeta");
selVegeta.addEventListener("mouseover",
	(event) => {
		portVegeta.style.transform = sizeChange;
		posVegeta.style.zIndex = zIndexChange;
	}
);
selVegeta.addEventListener("mouseout",
	(event) => {
		portVegeta.style.transform = "scale(1)";
		posVegeta.style.zIndex = "auto";
	}
);

// Broly (DBS)

const selBrolyDBS = document.getElementById("character-broly-dbs");
const portBrolyDBS = document.getElementById("selectbox-broly-dbs");
const posBrolyDBS = document.getElementById("positioner-broly-dbs");
selBrolyDBS.addEventListener("mouseover",
	(event) => {
		portBrolyDBS.style.transform = sizeChange;
		posBrolyDBS.style.zIndex = zIndexChange;
	}
);
selBrolyDBS.addEventListener("mouseout",
	(event) => {
		portBrolyDBS.style.transform = "scale(1)";
		posBrolyDBS.style.zIndex = "auto";
	}
);

// Super Baby 2

const selBaby = document.getElementById("character-superbaby2");
const portBaby = document.getElementById("selectbox-superbaby2");
const posBaby = document.getElementById("positioner-superbaby2");
selBaby.addEventListener("mouseover",
	(event) => {
		portBaby.style.transform = sizeChange;
		posBaby.style.zIndex = zIndexChange;
	}
);
selBaby.addEventListener("mouseout",
	(event) => {
		portBaby.style.transform = "scale(1)";
		posBaby.style.zIndex = "auto";
	}
);

// Goku (GT)

const selGokuGT = document.getElementById("character-goku-gt");
const portGokuGT = document.getElementById("selectbox-goku-gt");
const posGokuGT = document.getElementById("positioner-goku-gt");
selGokuGT.addEventListener("mouseover",
	(event) => {
		portGokuGT.style.transform = sizeChange;
		posGokuGT.style.zIndex = zIndexChange;
	}
);
selGokuGT.addEventListener("mouseout",
	(event) => {
		portGokuGT.style.transform = "scale(1)";
		posGokuGT.style.zIndex = "auto";
	}
);

// Android 17

const selAndroid17 = document.getElementById("character-android17");
const portAndroid17 = document.getElementById("selectbox-android17");
const posAndroid17 = document.getElementById("positioner-android17");
selAndroid17.addEventListener("mouseover",
	(event) => {
		portAndroid17.style.transform = sizeChange;
		posAndroid17.style.zIndex = zIndexChange;
	}
);
selAndroid17.addEventListener("mouseout",
	(event) => {
		portAndroid17.style.transform = "scale(1)";
		posAndroid17.style.zIndex = "auto";
	}
);

// Bardock

const selBardock = document.getElementById("character-bardock");
const portBardock = document.getElementById("selectbox-bardock");
const posBardock = document.getElementById("positioner-bardock");
selBardock.addEventListener("mouseover",
	(event) => {
		portBardock.style.transform = sizeChange;
		posBardock.style.zIndex = zIndexChange;
	}
);
selBardock.addEventListener("mouseout",
	(event) => {
		portBardock.style.transform = "scale(1)";
		posBardock.style.zIndex = "auto";
	}
);

// Goku (SSGSS)

const selGokuSSGSS = document.getElementById("character-goku-ssgss");
const portGokuSSGSS = document.getElementById("selectbox-goku-ssgss");
const posGokuSSGSS = document.getElementById("positioner-goku-ssgss");
selGokuSSGSS.addEventListener("mouseover",
	(event) => {
		portGokuSSGSS.style.transform = sizeChange;
		posGokuSSGSS.style.zIndex = zIndexChange;
	}
);
selGokuSSGSS.addEventListener("mouseout",
	(event) => {
		portGokuSSGSS.style.transform = "scale(1)";
		posGokuSSGSS.style.zIndex = "auto";
	}
);

// Gohan (Adult)

const selGohanAdult = document.getElementById("character-gohan-adult");
const portGohanAdult = document.getElementById("selectbox-gohan-adult");
const posGohanAdult = document.getElementById("positioner-gohan-adult");
selGohanAdult.addEventListener("mouseover",
	(event) => {
		portGohanAdult.style.transform = sizeChange;
		posGohanAdult.style.zIndex = zIndexChange;
	}
);
selGohanAdult.addEventListener("mouseout",
	(event) => {
		portGohanAdult.style.transform = "scale(1)";
		posGohanAdult.style.zIndex = "auto";
	}
);

// Trunks

const selTrunks = document.getElementById("character-trunks");
const portTrunks = document.getElementById("selectbox-trunks");
const posTrunks = document.getElementById("positioner-trunks");
selTrunks.addEventListener("mouseover",
	(event) => {
		portTrunks.style.transform = sizeChange;
		posTrunks.style.zIndex = zIndexChange;
	}
);
selTrunks.addEventListener("mouseout",
	(event) => {
		portTrunks.style.transform = "scale(1)";
		posTrunks.style.zIndex = "auto";
	}
);

// Vegeta (Super Saiyan)

const selVegetaSS = document.getElementById("character-vegeta-ss");
const portVegetaSS = document.getElementById("selectbox-vegeta-ss");
const posVegetaSS = document.getElementById("positioner-vegeta-ss");
selVegetaSS.addEventListener("mouseover",
	(event) => {
		portVegetaSS.style.transform = sizeChange;
		posVegetaSS.style.zIndex = zIndexChange;
	}
);
selVegetaSS.addEventListener("mouseout",
	(event) => {
		portVegetaSS.style.transform = "scale(1)";
		posVegetaSS.style.zIndex = "auto";
	}
);

// Cell

const selCell = document.getElementById("character-cell");
const portCell = document.getElementById("selectbox-cell");
const posCell = document.getElementById("positioner-cell");
selCell.addEventListener("mouseover",
	(event) => {
		portCell.style.transform = sizeChange;
		posCell.style.zIndex = zIndexChange;
	}
);
selCell.addEventListener("mouseout",
	(event) => {
		portCell.style.transform = "scale(1)";
		posCell.style.zIndex = "auto";
	}
);

// Android 18

const selAndroid18 = document.getElementById("character-android18");
const portAndroid18 = document.getElementById("selectbox-android18");
const posAndroid18 = document.getElementById("positioner-android18");
selAndroid18.addEventListener("mouseover",
	(event) => {
		portAndroid18.style.transform = sizeChange;
		posAndroid18.style.zIndex = zIndexChange;
	}
);
selAndroid18.addEventListener("mouseout",
	(event) => {
		portAndroid18.style.transform = "scale(1)";
		posAndroid18.style.zIndex = "auto";
	}
);

// Android 16

const selAndroid16 = document.getElementById("character-android16");
const portAndroid16 = document.getElementById("selectbox-android16");
const posAndroid16 = document.getElementById("positioner-android16");
selAndroid16.addEventListener("mouseover",
	(event) => {
		portAndroid16.style.transform = sizeChange;
		posAndroid16.style.zIndex = zIndexChange;
	}
);
selAndroid16.addEventListener("mouseout",
	(event) => {
		portAndroid16.style.transform = "scale(1)";
		posAndroid16.style.zIndex = "auto";
	}
);

// Android 21

const selAndroid21 = document.getElementById("character-android21");
const portAndroid21 = document.getElementById("selectbox-android21");
const posAndroid21 = document.getElementById("positioner-android21");
selAndroid21.addEventListener("mouseover",
	(event) => {
		portAndroid21.style.transform = sizeChange;
		posAndroid21.style.zIndex = zIndexChange;
	}
);
selAndroid21.addEventListener("mouseout",
	(event) => {
		portAndroid21.style.transform = "scale(1)";
		posAndroid21.style.zIndex = "auto";
	}
);

// Broly

const selBroly = document.getElementById("character-broly");
const portBroly = document.getElementById("selectbox-broly");
const posBroly = document.getElementById("positioner-broly");
selBroly.addEventListener("mouseover",
	(event) => {
		portBroly.style.transform = sizeChange;
		posBroly.style.zIndex = zIndexChange;
	}
);
selBroly.addEventListener("mouseout",
	(event) => {
		portBroly.style.transform = "scale(1)";
		posBroly.style.zIndex = "auto";
	}
);

// Cooler

const selCooler = document.getElementById("character-cooler");
const portCooler = document.getElementById("selectbox-cooler");
const posCooler = document.getElementById("positioner-cooler");
selCooler.addEventListener("mouseover",
	(event) => {
		portCooler.style.transform = sizeChange;
		posCooler.style.zIndex = zIndexChange;
	}
);
selCooler.addEventListener("mouseout",
	(event) => {
		portCooler.style.transform = "scale(1)";
		posCooler.style.zIndex = "auto";
	}
);

// Janemba

const selJanemba = document.getElementById("character-janemba");
const portJanemba = document.getElementById("selectbox-janemba");
const posJanemba = document.getElementById("positioner-janemba");
selJanemba.addEventListener("mouseover",
	(event) => {
		portJanemba.style.transform = sizeChange;
		posJanemba.style.zIndex = zIndexChange;
	}
);
selJanemba.addEventListener("mouseout",
	(event) => {
		portJanemba.style.transform = "scale(1)";
		posJanemba.style.zIndex = "auto";
	}
);

// Goku (Ultra Instinct)

const selGokuUI = document.getElementById("character-goku-ui");
const portGokuUI = document.getElementById("selectbox-goku-ui");
const posGokuUI = document.getElementById("positioner-goku-ui");
selGokuUI.addEventListener("mouseover",
	(event) => {
		portGokuUI.style.transform = sizeChange;
		posGokuUI.style.zIndex = zIndexChange;
	}
);
selGokuUI.addEventListener("mouseout",
	(event) => {
		portGokuUI.style.transform = "scale(1)";
		posGokuUI.style.zIndex = "auto";
	}
);

// Videl

const selVidel = document.getElementById("character-videl");
const portVidel = document.getElementById("selectbox-videl");
const posVidel = document.getElementById("positioner-videl");
selVidel.addEventListener("mouseover",
	(event) => {
		portVidel.style.transform = sizeChange;
		posVidel.style.zIndex = zIndexChange;
	}
);
selVidel.addEventListener("mouseout",
	(event) => {
		portVidel.style.transform = "scale(1)";
		posVidel.style.zIndex = "auto";
	}
);

// Vegito (SSGSS)

const selVegitoSSGSS = document.getElementById("character-vegito-ssgss");
const portVegitoSSGSS = document.getElementById("selectbox-vegito-ssgss");
const posVegitoSSGSS = document.getElementById("positioner-vegito-ssgss");
selVegitoSSGSS.addEventListener("mouseover",
	(event) => {
		portVegitoSSGSS.style.transform = sizeChange;
		posVegitoSSGSS.style.zIndex = zIndexChange;
	}
);
selVegitoSSGSS.addEventListener("mouseout",
	(event) => {
		portVegitoSSGSS.style.transform = "scale(1)";
		posVegitoSSGSS.style.zIndex = "auto";
	}
);

// Vegeta (SSGSS)

const selVegetaSSGSS = document.getElementById("character-vegeta-ssgss");
const portVegetaSSGSS = document.getElementById("selectbox-vegeta-ssgss");
const posVegetaSSGSS = document.getElementById("positioner-vegeta-ssgss");
selVegetaSSGSS.addEventListener("mouseover",
	(event) => {
		portVegetaSSGSS.style.transform = sizeChange;
		posVegetaSSGSS.style.zIndex = zIndexChange;
	}
);
selVegetaSSGSS.addEventListener("mouseout",
	(event) => {
		portVegetaSSGSS.style.transform = "scale(1)";
		posVegetaSSGSS.style.zIndex = "auto";
	}
);

// Gotenks

const selGotenks = document.getElementById("character-gotenks");
const portGotenks = document.getElementById("selectbox-gotenks");
const posGotenks = document.getElementById("positioner-gotenks");
selGotenks.addEventListener("mouseover",
	(event) => {
		portGotenks.style.transform = sizeChange;
		posGotenks.style.zIndex = zIndexChange;
	}
);
selGotenks.addEventListener("mouseout",
	(event) => {
		portGotenks.style.transform = "scale(1)";
		posGotenks.style.zIndex = "auto";
	}
);

// Piccolo

const selPiccolo = document.getElementById("character-piccolo");
const portPiccolo = document.getElementById("selectbox-piccolo");
const posPiccolo = document.getElementById("positioner-piccolo");
selPiccolo.addEventListener("mouseover",
	(event) => {
		portPiccolo.style.transform = sizeChange;
		posPiccolo.style.zIndex = zIndexChange;
	}
);
selPiccolo.addEventListener("mouseout",
	(event) => {
		portPiccolo.style.transform = "scale(1)";
		posPiccolo.style.zIndex = "auto";
	}
);

// Gohan (Teen)

const selGohanTeen = document.getElementById("character-gohan-teen");
const portGohanTeen = document.getElementById("selectbox-gohan-teen");
const posGohanTeen = document.getElementById("positioner-gohan-teen");
selGohanTeen.addEventListener("mouseover",
	(event) => {
		portGohanTeen.style.transform = sizeChange;
		posGohanTeen.style.zIndex = zIndexChange;
	}
);
selGohanTeen.addEventListener("mouseout",
	(event) => {
		portGohanTeen.style.transform = "scale(1)";
		posGohanTeen.style.zIndex = "auto";
	}
);

// Gogeta (SS4)

const selGogetaSS4 = document.getElementById("character-gogeta-ss4");
const portGogetaSS4 = document.getElementById("selectbox-gogeta-ss4");
const posGogetaSS4 = document.getElementById("positioner-gogeta-ss4");
selGogetaSS4.addEventListener("mouseover",
	(event) => {
		portGogetaSS4.style.transform = sizeChange;
		posGogetaSS4.style.zIndex = zIndexChange;
	}
);
selGogetaSS4.addEventListener("mouseout",
	(event) => {
		portGogetaSS4.style.transform = "scale(1)";
		posGogetaSS4.style.zIndex = "auto";
	}
);

// Majin Buu

const selMajinBuu = document.getElementById("character-majinbuu");
const portMajinBuu = document.getElementById("selectbox-majinbuu");
const posMajinBuu = document.getElementById("positioner-majinbuu");
selMajinBuu.addEventListener("mouseover",
	(event) => {
		portMajinBuu.style.transform = sizeChange;
		posMajinBuu.style.zIndex = zIndexChange;
	}
);
selMajinBuu.addEventListener("mouseout",
	(event) => {
		portMajinBuu.style.transform = "scale(1)";
		posMajinBuu.style.zIndex = "auto";
	}
);

// Beerus

const selBeerus = document.getElementById("character-beerus");
const portBeerus = document.getElementById("selectbox-beerus");
const posBeerus = document.getElementById("positioner-beerus");
selBeerus.addEventListener("mouseover",
	(event) => {
		portBeerus.style.transform = sizeChange;
		posBeerus.style.zIndex = zIndexChange;
	}
);
selBeerus.addEventListener("mouseout",
	(event) => {
		portBeerus.style.transform = "scale(1)";
		posBeerus.style.zIndex = "auto";
	}
);

// Hit

const selHit = document.getElementById("character-hit");
const portHit = document.getElementById("selectbox-hit");
const posHit = document.getElementById("positioner-hit");
selHit.addEventListener("mouseover",
	(event) => {
		portHit.style.transform = sizeChange;
		posHit.style.zIndex = zIndexChange;
	}
);
selHit.addEventListener("mouseout",
	(event) => {
		portHit.style.transform = "scale(1)";
		posHit.style.zIndex = "auto";
	}
);

// Goku Black

const selGokuBlack = document.getElementById("character-gokublack");
const portGokuBlack = document.getElementById("selectbox-gokublack");
const posGokuBlack = document.getElementById("positioner-gokublack");
selGokuBlack.addEventListener("mouseover",
	(event) => {
		portGokuBlack.style.transform = sizeChange;
		posGokuBlack.style.zIndex = zIndexChange;
	}
);
selGokuBlack.addEventListener("mouseout",
	(event) => {
		portGokuBlack.style.transform = "scale(1)";
		posGokuBlack.style.zIndex = "auto";
	}
);

// Zamasu (Fused)

const selZamasuFused = document.getElementById("character-zamasufused");
const portZamasuFused = document.getElementById("selectbox-zamasufused");
const posZamasuFused = document.getElementById("positioner-zamasufused");
selZamasuFused.addEventListener("mouseover",
	(event) => {
		portZamasuFused.style.transform = sizeChange;
		posZamasuFused.style.zIndex = zIndexChange;
	}
);
selZamasuFused.addEventListener("mouseout",
	(event) => {
		portZamasuFused.style.transform = "scale(1)";
		posZamasuFused.style.zIndex = "auto";
	}
);

// Jiren

const selJiren = document.getElementById("character-jiren");
const portJiren = document.getElementById("selectbox-jiren");
const posJiren = document.getElementById("positioner-jiren");
selJiren.addEventListener("mouseover",
	(event) => {
		portJiren.style.transform = sizeChange;
		posJiren.style.zIndex = zIndexChange;
	}
);
selJiren.addEventListener("mouseout",
	(event) => {
		portJiren.style.transform = "scale(1)";
		posJiren.style.zIndex = "auto";
	}
);

// Kefla

const selKefla = document.getElementById("character-kefla");
const portKefla = document.getElementById("selectbox-kefla");
const posKefla = document.getElementById("positioner-kefla");
selKefla.addEventListener("mouseover",
	(event) => {
		portKefla.style.transform = sizeChange;
		posKefla.style.zIndex = zIndexChange;
	}
);
selKefla.addEventListener("mouseout",
	(event) => {
		portKefla.style.transform = "scale(1)";
		posKefla.style.zIndex = "auto";
	}
);

$(window).resize(setLocations);

// Keep in mind coordinates were measured at half scale rather than full scale
// 'cause I'm a dummy dumb brain
// So they might be slightly inaccurate
function setLocations() {
	// Random
	var chrCoords = [425,0, 459,0, 471,11, 467,42, 462,47, 450,47, 448,49, 436,49, 434,47, 422,47, 417,42, 413,12];
	var iconPos = [826,0];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selRandom, chrCoords, portRandom, iconPos, posRandom);
	
	// Master Roshi
	chrCoords = [4,53, 55,54, 61,94, 57,98, 6,97, 0,57];
	iconPos = [0,106];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selRoshi, chrCoords, portRoshi, iconPos, posRoshi);
	
	// Gogeta (SSGSS)
	chrCoords = [61.5,54, 112.5,55, 118.5,95, 114.5,99, 63.5,98, 57.5,58];
	iconPos = [115,108];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selGogetaSSGSS, chrCoords, portGogetaSSGSS, iconPos, posGogetaSSGSS);
	
	// Goku
	chrCoords = [119,55, 170,56, 176,96, 172,100, 121,99, 115,59];
	iconPos = [230,110];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selGoku, chrCoords, portGoku, iconPos, posGoku);
	
	// Tien
	chrCoords = [176.5,56, 227.5,57, 233.5,97, 229.5,101, 178.5,100, 172.5,60];
	iconPos = [345,112];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selTien, chrCoords, portTien, iconPos, posTien);
	
	// Yamcha
	chrCoords = [234,57, 285,58, 291,98, 287,102, 236,101, 230,61];
	iconPos = [460,114];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selYamcha, chrCoords, portYamcha, iconPos, posYamcha);
	
	// Krillin
	chrCoords = [291.5,58, 342.5,59, 348.5,99, 344.5,103, 293.5,102, 287.5,62];
	iconPos = [575,116];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selKrillin, chrCoords, portKrillin, iconPos, posKrillin);
	
	// Goku (Super Saiyan)
	chrCoords = [349,59, 400,60, 406,100, 402,104, 351,103, 345,63];
	iconPos = [690,118];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selGokuSS, chrCoords, portGokuSS, iconPos, posGokuSS);
	
	// Android 21 (Lab Coat)
	chrCoords = [418,56, 429,56, 431,54, 452,54, 454,56, 465,56, 472,63, 465,101, 451,101, 448,104, 435,104, 432,101, 418,101, 411,63];
	iconPos = [823,109];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selLabCoat, chrCoords, portLabCoat, iconPos, posLabCoat);
	
	// Frieza
	chrCoords = [535,59, 484,60, 478,100, 482,104, 533,103, 539,63];
	iconPos = [957,118];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selFrieza, chrCoords, portFrieza, iconPos, posFrieza);
	
	// Kid Buu
	chrCoords = [592.5,58, 541.5,59, 535.5,99, 539.5,103, 590.5,102, 596.5,62];
	iconPos = [1072,116];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selKidBuu, chrCoords, portKidBuu, iconPos, posKidBuu);
	
	// Captain Ginyu
	chrCoords = [650,57, 599,58, 593,98, 597,102, 648,101, 654,61];
	iconPos = [1187,114];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selGinyu, chrCoords, portGinyu, iconPos, posGinyu);
	
	// Nappa
	chrCoords = [707.5,56, 656.5,57, 650.5,97, 654.5,101, 705.5,100, 711.5,60];
	iconPos = [1302,112];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selNappa, chrCoords, portNappa, iconPos, posNappa);
	
	// Vegeta
	chrCoords = [765,55, 714,56, 708,96, 712,100, 763,99, 769,59];
	iconPos = [1417,110];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selVegeta, chrCoords, portVegeta, iconPos, posVegeta);
	
	// Broly (DBS)
	chrCoords = [822.5,54, 771.5,55, 765.5,95, 769.5,99, 820.5,98, 826.5,58];
	iconPos = [1532,108];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selBrolyDBS, chrCoords, portBrolyDBS, iconPos, posBrolyDBS);
	
	// Super Baby 2
	chrCoords = [880,53, 829,54, 823,94, 827,98, 878,97, 884,57];
	iconPos = [1647,106];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selBaby, chrCoords, portBaby, iconPos, posBaby);
	
	// Goku (GT)
	chrCoords = [36.5,100, 87.5,101, 93.5,141, 89.5,145, 38.5,144, 32.5,104];
	iconPos = [65,200];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selGokuGT, chrCoords, portGokuGT, iconPos, posGokuGT);
	
	// Android 17
	chrCoords = [94,101, 145,102, 151,142, 147,146, 96,145, 90,105];
	iconPos = [180,202];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selAndroid17, chrCoords, portAndroid17, iconPos, posAndroid17);
	
	// Bardock
	chrCoords = [151.5,102, 202.5,103, 208.5,143, 204.5,147, 153.5,146, 147.5,106];
	iconPos = [295,204];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selBardock, chrCoords, portBardock, iconPos, posBardock);
	
	// Goku (SSGSS)
	chrCoords = [209,103, 260,104, 266,144, 262,148, 211,147, 205,107];
	iconPos = [410,206];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selGokuSSGSS, chrCoords, portGokuSSGSS, iconPos, posGokuSSGSS);
	
	// Gohan (Adult)
	chrCoords = [266.5,104, 317.5,105, 323.5,145, 319.5,149, 268.5,148, 262.5,108];
	iconPos = [525,208];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selGohanAdult, chrCoords, portGohanAdult, iconPos, posGohanAdult);
	
	// Trunks
	chrCoords = [324,105, 375,106, 381,146, 377,150, 326,149, 320,109];
	iconPos = [640,210];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selTrunks, chrCoords, portTrunks, iconPos, posTrunks);
	
	// Vegeta (Super Saiyan)
	chrCoords = [381.5,106, 432.5,107, 438.5,147, 434.5,151, 383.5,150, 377.5,110];
	iconPos = [755,212];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selVegetaSS, chrCoords, portVegetaSS, iconPos, posVegetaSS);
	
	// Cell
	chrCoords = [503,106, 452,107, 446,147, 450,151, 501,150, 507,110];
	iconPos = [892,212];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selCell, chrCoords, portCell, iconPos, posCell);
	
	// Android 18
	chrCoords = [560.5,105, 509.5,106, 503.5,146, 507.5,150, 558.5,149, 564.5,109];
	iconPos = [1007,210];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selAndroid18, chrCoords, portAndroid18, iconPos, posAndroid18);
	
	// Android 16
	chrCoords = [618,104, 567,105, 561,145, 565,149, 616,148, 622,108];
	iconPos = [1122,208];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selAndroid16, chrCoords, portAndroid16, iconPos, posAndroid16);
	
	// Android 21
	chrCoords = [675.5,103, 624.5,104, 618.5,144, 622.5,148, 673.5,147, 679.5,107];
	iconPos = [1237,206];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selAndroid21, chrCoords, portAndroid21, iconPos, posAndroid21);
	
	// Broly
	chrCoords = [733,102, 682,103, 676,143, 680,147, 731,146, 737,106];
	iconPos = [1352,204];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selBroly, chrCoords, portBroly, iconPos, posBroly);
	
	// Cooler
	chrCoords = [790.5,101, 739.5,102, 733.5,142, 737.5,146, 788.5,145, 794.5,105];
	iconPos = [1467,202];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selCooler, chrCoords, portCooler, iconPos, posCooler);
	
	// Janemba
	chrCoords = [848,100, 797,101, 791,141, 795,145, 846,144, 852,104];
	iconPos = [1582,200];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selJanemba, chrCoords, portJanemba, iconPos, posJanemba);
	
	// Goku (UI)
	chrCoords = [12,146.5, 63,147.5, 69,187.5, 65,191.5, 14,190.5, 8,150.5];
	iconPos = [16,293];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selGokuUI, chrCoords, portGokuUI, iconPos, posGokuUI);
	
	// Videl
	chrCoords = [69.5,147.5, 120.5,148.5, 126.5,188.5, 122.5,192.5, 71.5,191.5, 65.5,151.5];
	iconPos = [131,295];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selVidel, chrCoords, portVidel, iconPos, posVidel);
	
	// Vegito (SSGSS)
	chrCoords = [127,148.5, 178,149.5, 184,189.5, 180,193.5, 129,192.5, 123,152.5];
	iconPos = [246,297];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selVegitoSSGSS, chrCoords, portVegitoSSGSS, iconPos, posVegitoSSGSS);
	
	// Vegeta (SSGSS)
	chrCoords = [184.5,149.5, 235.5,150.5, 241.5,190.5, 237.5,194.5, 186.5,193.5, 180.5,153.5];
	iconPos = [361,299];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selVegetaSSGSS, chrCoords, portVegetaSSGSS, iconPos, posVegetaSSGSS);
	
	// Gotenks
	chrCoords = [242,150.5, 293,151.5, 299,191.5, 295,195.5, 244,194.5, 238,154.5];
	iconPos = [476,301];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selGotenks, chrCoords, portGotenks, iconPos, posGotenks);
	
	// Piccolo
	chrCoords = [299.5,151.5, 350.5,152.5, 356.5,192.5, 352.5,196.5, 301.5,195.5, 295.5,155.5];
	iconPos = [591,303];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selPiccolo, chrCoords, portPiccolo, iconPos, posPiccolo);
	
	// Gohan (Teen)
	chrCoords = [357,152.5, 408,153.5, 414,193.5, 410,197.5, 359,196.5, 353,156.5];
	iconPos = [706,305];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selGohanTeen, chrCoords, portGohanTeen, iconPos, posGohanTeen);
	
	// Gogeta (SS4)
	chrCoords = [420,155, 442,153, 464,155, 472,164, 467,195, 449,202, 435,202, 417,195, 412,164];
	iconPos = [824,307];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selGogetaSS4, chrCoords, portGogetaSS4, iconPos, posGogetaSS4);
	
	// Majin Buu
	chrCoords = [527.5,152.5, 476.5,153.5, 470.5,193.5, 474.5,197.5, 525.5,196.5, 531.5,156.5];
	iconPos = [941,305];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selMajinBuu, chrCoords, portMajinBuu, iconPos, posMajinBuu);
	
	// Beerus
	chrCoords = [585,151.5, 534,152.5, 528,192.5, 532,196.5, 583,195.5, 589,155.5];
	iconPos = [1056,303];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selBeerus, chrCoords, portBeerus, iconPos, posBeerus);
	
	// Hit
	chrCoords = [642.5,150.5, 591.5,151.5, 585.5,191.5, 589.5,195.5, 640.5,194.5, 646.5,154.5];
	iconPos = [1171,301];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selHit, chrCoords, portHit, iconPos, posHit);
	
	// Goku Black
	chrCoords = [700,149.5, 649,150.5, 643,190.5, 647,194.5, 698,193.5, 704,153.5];
	iconPos = [1286,299];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selGokuBlack, chrCoords, portGokuBlack, iconPos, posGokuBlack);
	
	// Zamasu (Fused)
	chrCoords = [757.5,148.5, 706.5,149.5, 700.5,189.5, 704.5,193.5, 755.5,192.5, 761.5,152.5];
	iconPos = [1401,297];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selZamasuFused, chrCoords, portZamasuFused, iconPos, posZamasuFused);
	
	// Jiren
	chrCoords = [815,147.5, 764,148.5, 758,188.5, 762,192.5, 813,191.5, 819,151.5];
	iconPos = [1516,295];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selJiren, chrCoords, portJiren, iconPos, posJiren);
	
	// Kefla
	chrCoords = [872.5,146.5, 821.5,147.5, 815.5,187.5, 819.5,191.5, 870.5,190.5, 876.5,150.5];
	iconPos = [1631,293];
	for (i = 0; i < chrCoords.length; i++) {
		chrCoords[i] *= 2;
	}
	autoResize("selectbox-fullroster", selKefla, chrCoords, portKefla, iconPos, posKefla);
}

document.getElementsByClassName("selectbox-fullroster")[0].onload = setTimeout(setLocations, 1);
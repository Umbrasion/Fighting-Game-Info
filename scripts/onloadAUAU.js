var characterList = document.getElementsByClassName("chrSelection")[0];

characterList.innerHTML = `
<div class="selectbox-container">
	<div>
		<div class="selectbox selectbox-title">Choose your 'Mongus</div>
		<div class="selectbox selectbox-preview">
			<img id="preview-character" src="../../img/amongUsArenaUltimate/portraits/Blank.png">
		</div>
		<div class="selectbox selectbox-name">
			<span id="select-name">-</span>
		</div>
	</div>
	<div>
		<div class="selectbox selectbox-colors">
			<a href="Impostor.html">
				<div class="previewAUAU preview-row-top">
					<img src="../../img/characterSelect/auau/Pet_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Red">
				<div class="previewAUAU preview-row-top colorRed">
					<img src="../../img/characterSelect/auau/Red_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Blue">
				<div class="previewAUAU preview-row-top colorBlue">
					<img src="../../img/characterSelect/auau/Blue_icon.webp">
				</div>
			</a>
			<a href="Random_Color.html">
				<div class="previewAUAU preview-row-top colorRandom">
					<img src="../../img/characterSelect/auau/Random_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Green">
				<div class="previewAUAU colorGreen">
					<img src="../../img/characterSelect/auau/Green_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Pink">
				<div class="previewAUAU colorPink">
					<img src="../../img/characterSelect/auau/Pink_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Orange">
				<div class="previewAUAU colorOrange">
					<img src="../../img/characterSelect/auau/Orange_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Yellow">
				<div class="previewAUAU colorYellow">
					<img src="../../img/characterSelect/auau/Yellow_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Black">
				<div class="previewAUAU colorBlack">
					<img src="../../img/characterSelect/auau/Black_icon.webp">
				</div>
			</a>
			<a href="Colors.html#White">
				<div class="previewAUAU colorWhite">
					<img src="../../img/characterSelect/auau/White_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Purple">
				<div class="previewAUAU colorPurple">
					<img src="../../img/characterSelect/auau/Purple_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Brown">
				<div class="previewAUAU colorBrown">
					<img src="../../img/characterSelect/auau/Brown_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Cyan">
				<div class="previewAUAU colorCyan">
					<img src="../../img/characterSelect/auau/Cyan_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Lime">
				<div class="previewAUAU colorLime">
					<img src="../../img/characterSelect/auau/Lime_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Tan">
				<div class="previewAUAU colorTan">
					<img src="../../img/characterSelect/auau/Tan_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Rose">
				<div class="previewAUAU colorRose">
					<img src="../../img/characterSelect/auau/Rose_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Banana">
				<div class="previewAUAU colorBanana">
					<img src="../../img/characterSelect/auau/Banana_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Maroon">
				<div class="previewAUAU colorMaroon">
					<img src="../../img/characterSelect/auau/Maroon_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Grey">
				<div class="previewAUAU colorGrey">
					<img src="../../img/characterSelect/auau/Grey_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Coral">
				<div class="previewAUAU colorCoral">
					<img src="../../img/characterSelect/auau/Coral_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Olive">
				<div class="previewAUAU colorOlive">
					<img src="../../img/characterSelect/auau/Olive_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Mint">
				<div class="previewAUAU colorMint">
					<img src="../../img/characterSelect/auau/Mint_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Chocolate">
				<div class="previewAUAU colorChocolate">
					<img src="../../img/characterSelect/auau/Chocolate_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Teal">
				<div class="previewAUAU colorTeal">
					<img src="../../img/characterSelect/auau/Teal_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Flame">
				<div class="previewAUAU colorFlame">
					<img src="../../img/characterSelect/auau/Flame_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Navy">
				<div class="previewAUAU colorNavy">
					<img src="../../img/characterSelect/auau/Navy_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Gold">
				<div class="previewAUAU colorGold">
					<img src="../../img/characterSelect/auau/Gold_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Sky">
				<div class="previewAUAU colorSky">
					<img src="../../img/characterSelect/auau/Sky_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Apricot">
				<div class="previewAUAU colorApricot">
					<img src="../../img/characterSelect/auau/Apricot_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Lavender">
				<div class="previewAUAU colorLavender">
					<img src="../../img/characterSelect/auau/Lavender_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Chartreuse">
				<div class="previewAUAU colorChartreuse">
					<img src="../../img/characterSelect/auau/Chartreuse_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Eggplant">
				<div class="previewAUAU colorEggplant">
					<img src="../../img/characterSelect/auau/Eggplant_icon.webp">
				</div>
			</a>
		</div>
		<div class="selectbox selectbox-secret">
			<a href="Colors.html#Fortegreen">
				<div class="previewAUAU colorFortegreen">
					<img src="../../img/characterSelect/auau/Fortegreen_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Undefined">
				<div class="previewAUAU colorUndefined">
					<img src="../../img/characterSelect/auau/Undefined_icon.webp">
				</div>
			</a>
			<a href="Colors.html#Charcoal">
				<div class="previewAUAU colorCharcoal">
					<img src="../../img/characterSelect/auau/Charcoal_icon.webp">
				</div>
			</a>
		</div>
	</div>
</div>
`

/*characterList.innerHTML = `
<!-- Red -->
<a href="Colors.html#red" style="text-decoration: none">
	<div class="chrPreview colorRed"><div><span>Red</span></div></div>
</a>
<!-- Blue -->
<a href="Colors.html#blue" style="text-decoration: none">
	<div class="chrPreview colorBlue"><div><span>Blue</span></div></div>
</a>
<!-- Green -->
<a href="Colors.html#green" style="text-decoration: none">
	<div class="chrPreview colorGreen"><div><span>Green</span></div></div>
</a>
<!-- Pink -->
<a href="Colors.html#pink" style="text-decoration: none">
	<div class="chrPreview colorPink"><div><span>Pink</span></div></div>
</a>
<!-- Orange -->
<a href="Colors.html#orange" style="text-decoration: none">
	<div class="chrPreview colorOrange"><div><span>Orange</span></div></div>
</a>
<!-- Yellow -->
<a href="Colors.html#yellow" style="text-decoration: none">
	<div class="chrPreview colorYellow"><div><span>Yellow</span></div></div>
</a>
<!-- Black -->
<a href="Colors.html#black" style="text-decoration: none">
	<div class="chrPreview colorBlack"><div><span>Black</span></div></div>
</a>
<!-- White -->
<a href="Colors.html#white" style="text-decoration: none">
	<div class="chrPreview colorWhite"><div><span>White</span></div></div>
</a>
<!-- Purple -->
<a href="Colors.html#purple" style="text-decoration: none">
	<div class="chrPreview colorPurple"><div><span>Purple</span></div></div>
</a>
<!-- Brown -->
<a href="Colors.html#brown" style="text-decoration: none">
	<div class="chrPreview colorBrown"><div><span>Brown</span></div></div>
</a>
<!-- Cyan -->
<a href="Colors.html#cyan" style="text-decoration: none">
	<div class="chrPreview colorCyan"><div><span>Cyan</span></div></div>
</a>
<!-- Lime -->
<a href="Colors.html#lime" style="text-decoration: none">
	<div class="chrPreview colorLime"><div><span>Lime</span></div></div>
</a>
<!-- Tan -->
<a href="Colors.html#tan" style="text-decoration: none">
	<div class="chrPreview colorTan"><div><span>Tan</span></div></div>
</a>
<!-- Rose -->
<a href="Colors.html#rose" style="text-decoration: none">
	<div class="chrPreview colorRose"><div><span>Rose</span></div></div>
</a>
<!-- Banana -->
<a href="Colors.html#banana" style="text-decoration: none">
	<div class="chrPreview colorBanana"><div><span>Banana</span></div></div>
</a>
<!-- Maroon -->
<a href="Colors.html#maroon" style="text-decoration: none">
	<div class="chrPreview colorMaroon"><div><span>Maroon</span></div></div>
</a>
<!-- Grey -->
<a href="Colors.html#grey" style="text-decoration: none">
	<div class="chrPreview colorGrey"><div><span>Grey</span></div></div>
</a>
<!-- Coral -->
<a href="Colors.html#coral" style="text-decoration: none">
	<div class="chrPreview colorCoral"><div><span>Coral</span></div></div>
</a>
<!-- Olive -->
<a href="Colors.html#olive" style="text-decoration: none">
	<div class="chrPreview colorOlive"><div><span>Olive</span></div></div>
</a>
<!-- Mint -->
<a href="Colors.html#mint" style="text-decoration: none">
	<div class="chrPreview colorMint"><div><span>Mint</span></div></div>
</a>
<!-- Chocolate -->
<a href="Colors.html#chocolate" style="text-decoration: none">
	<div class="chrPreview colorChocolate"><div><span>Choco- late</span></div></div>
</a>
<!-- Teal -->
<a href="Colors.html#teal" style="text-decoration: none">
	<div class="chrPreview colorTeal"><div><span>Teal</span></div></div>
</a>
<!-- Flame -->
<a href="Colors.html#flame" style="text-decoration: none">
	<div class="chrPreview colorFlame"><div><span>Flame</span></div></div>
</a>
<!-- Navy -->
<a href="Colors.html#navy" style="text-decoration: none">
	<div class="chrPreview colorNavy"><div><span>Navy</span></div></div>
</a>
<!-- Gold -->
<a href="Colors.html#gold" style="text-decoration: none">
	<div class="chrPreview colorGold"><div><span>Gold</span></div></div>
</a>
<!-- Sky -->
<a href="Colors.html#sky" style="text-decoration: none">
	<div class="chrPreview colorSky"><div><span>Sky</span></div></div>
</a>
<!-- Apricot -->
<a href="Colors.html#apricot" style="text-decoration: none">
	<div class="chrPreview colorApricot"><div><span>Apricot</span></div></div>
</a>
<!-- Lavender -->
<a href="Colors.html#lavender" style="text-decoration: none">
	<div class="chrPreview colorLavender"><div><span>Laven- der</span></div></div>
</a>
<!-- Chartreuse -->
<a href="Colors.html#chartreuse" style="text-decoration: none">
	<div class="chrPreview colorChartreuse"><div><span>Char- treuse</span></div></div>
</a>
<!-- Eggplant -->
<a href="Colors.html#eggplant" style="text-decoration: none">
	<div class="chrPreview colorEggplant"><div><span>Egg- plant</span></div></div>
</a>
<!-- Fortegreen -->
<a href="Colors.html#fortegreen" style="text-decoration: none">
	<div class="chrPreview colorFortegreen"><div><span>Forte- green</span></div></div>
</a>
<!-- Undefined -->
<a href="Colors.html#undefined" style="text-decoration: none">
	<div class="chrPreview colorUndefined"><div><span>Unde- fined</span></div></div>
</a>
<!-- Charcoal -->
<a href="Colors.html#charcoal" style="text-decoration: none">
	<div class="chrPreview colorCharcoal"><div><span>Char- coal</span></div></div>
</a>
`;*/

// Event listeners
// There's probably a better way to do this but SHUR UP!

const chrPrevImg = document.getElementById("preview-character");
const chrName = document.getElementById("select-name");

// Random

const selRandom = document.getElementsByClassName("colorRandom")[0];
selRandom.addEventListener("mouseover",
	(event) => {
		chrName.innerHTML = "Random";
	}
);
selRandom.addEventListener("mouseout",
	(event) => {
		chrName.innerHTML = "-";
	}
);

// Red

const selRed = document.getElementsByClassName("colorRed")[0];
selRed.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Red.png";
		chrName.innerHTML = "Red";
	}
);
selRed.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Blue

const selBlue = document.getElementsByClassName("colorBlue")[0];
selBlue.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blue.png";
		chrName.innerHTML = "Blue";
	}
);
selBlue.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Green

const selGreen = document.getElementsByClassName("colorGreen")[0];
selGreen.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Green.png";
		chrName.innerHTML = "Green";
	}
);
selGreen.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Pink

const selPink = document.getElementsByClassName("colorPink")[0];
selPink.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Pink.png";
		chrName.innerHTML = "Pink";
	}
);
selPink.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Orange

const selOrange = document.getElementsByClassName("colorOrange")[0];
selOrange.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Orange.png";
		chrName.innerHTML = "Orange";
	}
);
selOrange.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Yellow

const selYellow = document.getElementsByClassName("colorYellow")[0];
selYellow.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Yellow.png";
		chrName.innerHTML = "Yellow";
	}
);
selYellow.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Black

const selBlack = document.getElementsByClassName("colorBlack")[0];
selBlack.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Black.png";
		chrName.innerHTML = "Black";
	}
);
selBlack.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// White

const selWhite = document.getElementsByClassName("colorWhite")[0];
selWhite.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/White.png";
		chrName.innerHTML = "White";
	}
);
selWhite.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Purple

const selPurple = document.getElementsByClassName("colorPurple")[0];
selPurple.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Purple.png";
		chrName.innerHTML = "Purple";
	}
);
selPurple.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Brown

const selBrown = document.getElementsByClassName("colorBrown")[0];
selBrown.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Brown.png";
		chrName.innerHTML = "Brown";
	}
);
selBrown.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Cyan

const selCyan = document.getElementsByClassName("colorCyan")[0];
selCyan.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Cyan.png";
		chrName.innerHTML = "Cyan";
	}
);
selCyan.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Lime

const selLime = document.getElementsByClassName("colorLime")[0];
selLime.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Lime.png";
		chrName.innerHTML = "Lime";
	}
);
selLime.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Tan

const selTan = document.getElementsByClassName("colorTan")[0];
selTan.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Tan.png";
		chrName.innerHTML = "Tan";
	}
);
selTan.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Rose

const selRose = document.getElementsByClassName("colorRose")[0];
selRose.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Rose.png";
		chrName.innerHTML = "Rose";
	}
);
selRose.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Banana

const selBanana = document.getElementsByClassName("colorBanana")[0];
selBanana.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Banana.png";
		chrName.innerHTML = "Banana";
	}
);
selBanana.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Maroon

const selMaroon = document.getElementsByClassName("colorMaroon")[0];
selMaroon.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Maroon.png";
		chrName.innerHTML = "Maroon";
	}
);
selMaroon.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Grey

const selGrey = document.getElementsByClassName("colorGrey")[0];
selGrey.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Grey.png";
		chrName.innerHTML = "Grey";
	}
);
selGrey.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Coral

const selCoral = document.getElementsByClassName("colorCoral")[0];
selCoral.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Coral.png";
		chrName.innerHTML = "Coral";
	}
);
selCoral.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Olive

const selOlive = document.getElementsByClassName("colorOlive")[0];
selOlive.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Olive.png";
		chrName.innerHTML = "Olive";
	}
);
selOlive.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Mint

const selMint = document.getElementsByClassName("colorMint")[0];
selMint.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Mint.png";
		chrName.innerHTML = "Mint";
	}
);
selMint.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Chocolate

const selChocolate = document.getElementsByClassName("colorChocolate")[0];
selChocolate.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Chocolate.png";
		chrName.innerHTML = "Chocolate";
	}
);
selChocolate.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Teal

const selTeal = document.getElementsByClassName("colorTeal")[0];
selTeal.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Teal.png";
		chrName.innerHTML = "Teal";
	}
);
selTeal.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Flame

const selFlame = document.getElementsByClassName("colorFlame")[0];
selFlame.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Flame.png";
		chrName.innerHTML = "Flame";
	}
);
selFlame.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Navy

const selNavy = document.getElementsByClassName("colorNavy")[0];
selNavy.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Navy.png";
		chrName.innerHTML = "Navy";
	}
);
selNavy.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Gold

const selGold = document.getElementsByClassName("colorGold")[0];
selGold.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Gold.png";
		chrName.innerHTML = "Gold";
	}
);
selGold.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Sky

const selSky = document.getElementsByClassName("colorSky")[0];
selSky.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Sky.png";
		chrName.innerHTML = "Sky";
	}
);
selSky.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Apricot

const selApricot = document.getElementsByClassName("colorApricot")[0];
selApricot.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Apricot.png";
		chrName.innerHTML = "Apricot";
	}
);
selApricot.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Lavender

const selLavender = document.getElementsByClassName("colorLavender")[0];
selLavender.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Lavender.png";
		chrName.innerHTML = "Lavender";
	}
);
selLavender.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Chartreuse

const selChartreuse = document.getElementsByClassName("colorChartreuse")[0];
selChartreuse.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Chartreuse.png";
		chrName.innerHTML = "Chartreuse";
	}
);
selChartreuse.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Eggplant

const selEggplant = document.getElementsByClassName("colorEggplant")[0];
selEggplant.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Eggplant.png";
		chrName.innerHTML = "Eggplant";
	}
);
selEggplant.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Fortegreen

const selFortegreen = document.getElementsByClassName("colorFortegreen")[0];
selFortegreen.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Fortegreen.png";
		chrName.innerHTML = "Fortegreen";
	}
);
selFortegreen.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Undefined

const selUndefined = document.getElementsByClassName("colorUndefined")[0];
selUndefined.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Undefined.png";
		chrName.innerHTML = "Undefined";
	}
);
selUndefined.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);

// Charcoal

const selCharcoal = document.getElementsByClassName("colorCharcoal")[0];
selCharcoal.addEventListener("mouseover",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Charcoal.png";
		chrName.innerHTML = "Charcoal";
	}
);
selCharcoal.addEventListener("mouseout",
	(event) => {
		chrPrevImg.src = "../../img/amongUsArenaUltimate/portraits/Blank.png";
		chrName.innerHTML = "-";
	}
);
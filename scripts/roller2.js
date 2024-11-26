document.addEventListener("keydown", function(e) {
	if (e.keyCode === 112) {
		debugMenu("toggleMenu");
	}
});

var gameSel = [
	"ah3x", // Arcana Heart 3 LOVEMAX SIXSTARS!!!!!! XTEND
	"aocf", // Touhou Hyouibana ~ Antinomy of Common Flowers
	"auau", // Among Us Arena Ultimate
	"bbcf", // BlazBlue: Central Fiction
	"bbtag", // BlazBlue: Cross Tag Battle
	"dbfz", // Dragon Ball FighterZ
	"dnfd", // DNF Duel
	"el2", // E's Laf 2
	"fm", // Fraymakers
	"gbvsr", // Granblue Fantasy Versus: Rising
	"ggacr", // Guilty Gear Accent Core Plus R
	"ggst", // Guilty Gear Strive
	"ggxrd", // Guilty Gear Xrd REV 2
	"isd", // Idol Showdown
	"kf2", // Kirby Fighters 2
	"mbtl", // Melty Blood: Type Lumina
	"mvs", // Multiversus
	"p4au", // Persona 4 Arena Ultimax
	"ptdx", // Pokken Tournamnt DX
	"roa", // Rivals of Aether
	"sf6", // Street Fighter 6
	"sg", // Skullgirls
	"soku", // Touhou Hisoutensoku
	"ssbc", // Super Smash Bros. Crusade
	"ssbu", // Super Smash Bros. Ultimate
	"ssf2", // Super Smash Flash 2
	"t8", // Tekken 8
	"ufdk2", // Ultra Fight Da Kyanta 2
	"uni2", // Under Night In-Birth II Sys:Celes
];
console.log("Total number of games: " + gameSel.length);

var randNum = -1;
var spinNum = 1;
var conditionNum = 0;
var curGameSel = "";

var rngMode = false;
var rngModeNotice = document.getElementById("rngmode");

var banlist = [];
var banlistMaxLength = 23;

var maxConditions = 10;

var spinResultGame = document.getElementById("spinner1");
var spinResultCond = document.getElementById("spinner2");
console.log(spinResultGame);

var gameRulesDesc = document.getElementById("rulesInfo");
var rollInfoDesc = document.getElementById("rollInfo");

function spinToWin() {
	reroll();
	if (rngRollCount == bestOf && rngMode) {
		setupRNG();
		banlist.push("rng");
		if (banlist.length > banlistMaxLength) {
			banlist.splice(0, 1);
		}
	}
	if (spinNum == 1) {
		// Spinner for game
		spinNum++;
		
		var checkGame = 0;
		checkBan: while (true) {
			if (randNum < 99) {
				checkGame = randNum / (99 / gameSel.length);
				curGameSel = gameSel[Math.floor(checkGame)];
			} else {
				if (rngMode) {
					console.log("RNG Mode gotten during RNG Mode, rerolled");
					reroll();
					continue checkBan;
				} else {
					curGameSel = "rng";
					spinNum--;
				}
			}
			if (banlist.includes(curGameSel)) {
				console.log("Game on banlist, rerolled");
				reroll();
				continue checkBan;
			} else {
				if (curGameSel != "rng") {
					banlist.push(curGameSel);
				}
				if (banlist.length > banlistMaxLength) {
					banlist.splice(0, 1);
				}
				console.log(banlist);
				break checkBan;
			}
		}
		console.log(curGameSel);
		infoGame();
		updateBanlistInfo();
	} else {
		// Spinner for condition
		spinNum--;
		spinCondition();
	}
}

function infoGame() {
	spinResultCond.innerHTML = "";
	switch (curGameSel) {
		case "auau":
			spinResultGame.innerHTML = "Among Us Arena Ultimate";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li><b>General Rules</b></li>
				<ul>
					<li>Best of 3</li>
					<li>2 rounds to win</li>
					<li>All characters allowed</li>
					<li>All stages allowed</li>
				</ul>
				<li>No 2.11 mechanics</li>
				<li>3000 health</li>
				<li>Full meter start off</li>
				<li>Airblocking on</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "ah3x":
			spinResultGame.innerHTML = "Arcana Heart 3 LOVEMAX SIXSTARS!!!!!! XTEND";
			spinResultGame.style.fontSize = "22px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "bbcf":
			spinResultGame.innerHTML = "BlazBlue: Central Fiction";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "bbtag":
			spinResultGame.innerHTML = "BlazBlue: Cross Tag Battle";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>180 second timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "dnfd":
			spinResultGame.innerHTML = "DNF Duel";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
				<li>No handicap</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "dbfz":
			spinResultGame.innerHTML = "Dragon Ball FighterZ";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>Any amount of characters</li>
				<li>All stages</li>
				<li>300 second timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "el2":
			spinResultGame.innerHTML = "E's Laf++";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "fm":
			spinResultGame.innerHTML = "Fraymakers";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>Stage hazards off</li>
				<li>4 stocks</li>
				<li>7 minute timer</li>
				<li>No workshop content</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "gbvsr":
			spinResultGame.innerHTML = "Granblue Fantasy Versus: Rising";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
				<li>3 star (default) handicap</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "ggst":
			spinResultGame.innerHTML = "Guilty Gear -Strive-";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "ggxrd":
			spinResultGame.innerHTML = "Guilty Gear Xrd REV 2";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
				<li>Handicap off</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "ggacr":
			spinResultGame.innerHTML = "Guilty Gear XX Accent Core Plus R";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>No EX/Gold/Shadow characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
				<li>No EX characters</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "isd":
			spinResultGame.innerHTML = "Idol Showdown";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All assists</li>
				<li>All stages</li>
				<li>99 second timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "kf2":
			spinResultGame.innerHTML = "Kirby Fighters";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>Legal stages:</li>
				<ul>
					<li>Green Greens</li>
					<li>Butter Building</li>
					<li>Factory Tour</li>
					<li>Bubbly Clouds</li>
					<li>Destined Rivals</li>
					<li>Springy Hand Land</li>
					<li>Jambastion</li>
				</ul>
				<li>No handicap</li>
				<li>No items</li>
				<li>No ghosts</li>
				<li>Stage hazards off</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "mbtl":
			spinResultGame.innerHTML = "Melty Blood: Type Lumina";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "mvs":
			spinResultGame.innerHTML = "Multiversus";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>Legal stages:</li>
				<ul>
					<li>Batcave (1v1)</li>
					<li>Tree Fort (1v1)</li>
					<li>Tree Fort 2</li>
					<li>Trophy's E.D.G.E. (1v1)</li>
					<li>Scooby's Haunted Mansion (1v1)</li>
					<li>Throne Room (1v1)</li>
					<li>Cromulons (1v1)</li>
					<li>The Court 2 (1v1)</li>
					<li>Sky Arena Platforms (1v1)</li>
					<li>Dexter's Laboratory 2 (1v1)</li>
					<li>Water Tower (1v1)</li>
					<li>Teen Titans Tower (1v1)</li>
					<li>Midnight Showing (1v1)</li>
				</ul>
				<li>3 knockouts</li>
				<li>7 minute timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "p4au":
			spinResultGame.innerHTML = "Persona 4 Arena Ultimax";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "ptdx":
			spinResultGame.innerHTML = "Pokken Tournament DX";
			// Not Pokkén 'cause of Adam's INCOMPLETE font smh
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>Random stage or gentleman</li>
				<li> second timer</li>
				<li>No handicap</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "roa":
			spinResultGame.innerHTML = "Rivals of Aether";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>3 stocks</li>
				<li>8 minute timer</li>
				<li>Aether stages off</li>
				<li>Turbo mode off</li>
				<li>Workshop off</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "sg":
			spinResultGame.innerHTML = "Skullgirls";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>Any amount of characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "sf6":
			spinResultGame.innerHTML = "Street Fighter 6";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
				<li>No handicap</li>
				<li>In the event of a draw, no points will be given either way and the set will continue as usual</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "ssbc":
			spinResultGame.innerHTML = "Super Smash Bros. Crusade";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>Legal stages:</li>
				<ul>
					<li>Battlefield</li>
					<li>Final Destination</li>
				</ul>
				<li>3 stocks</li>
				<li>7 minute timer</li>
				<li>Items off</li>
				<li>FS meter off</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "ssbu":
			spinResultGame.innerHTML = "Super Smash Bros. Ultimate";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>Legal stages:</li>
				<ul>
					<li></li>
				</ul>
				<li>3 stocks</li>
				<li>7 minute timer</li>
				<li>Items off</li>
				<li>FS meter off</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "ssf2":
			spinResultGame.innerHTML = "Super Smash Flash 2";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>Legal stages:</li>
				<ul>
					<li></li>
				</ul>
				<li>3 stocks</li>
				<li>7 minute timer</li>
				<li>Items off</li>
				<li>FS meter off</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "t8":
			spinResultGame.innerHTML = "Tekken 8";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Tournament settings on</li>
				<li>Best of 3</li>
				<li>3 rounds to win</li>
				<li>All characters</li>
				<li>Random stage or gentleman</li>
				<li>60 second timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "soku":
			spinResultGame.innerHTML = "Touhou Hisoutensoku";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "aocf":
			spinResultGame.innerHTML = "Touhou Hyouibana ~ Antinomy of Common Flowers";
			spinResultGame.style.fontSize = "22px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "ufdk2":
			spinResultGame.innerHTML = "Ultra Fight Da Kyanta 2";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>Any amount of characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "uni2":
			spinResultGame.innerHTML = "Under Night In-Birth II Sys:Celes";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = `
			<ul>
				<li>Best of 3</li>
				<li>2 rounds to win</li>
				<li>All characters</li>
				<li>All stages</li>
				<li>99 second timer</li>
			</ul>
			`;
			rollInfoDesc.innerHTML = "";
			break;
		case "rng":
			document.getElementById("bestof-select").style.display = "block";
			document.getElementById("button1").style.display = "none";
			spinResultGame.innerHTML = "RNG TIME!!!";
			spinResultGame.style.fontSize = "30px";
			gameRulesDesc.innerHTML = "";
			rollInfoDesc.innerHTML = `
			<p>Iiiiiiit's RNG TIME!!!</p>
			<p>During RNG Time, each match of the set is played on a DIFFERENT GAME! Which means that every time a player wins, the game <i>and</i> condition are rerolled, and it lasts for the whole set!</p>
			<p>Are you ready to gamble?</p>
			`;
			break;
	}
	if (rngMode) {
		document.getElementById("rngmode-gametitle" + rngRollCount).innerHTML = "Game " + (rngRollCount + 1) + ": <span class='rngmode-title'>" + spinResultGame.innerHTML + "</span>";
		
		document.getElementById("rulesinfo-rng" + rngRollCount).innerHTML = gameRulesDesc.innerHTML;
		document.getElementById("rollinfo-rng" + rngRollCount).innerHTML = rollInfoDesc.innerHTML;
		gameRulesDesc.innerHTML = "";
		rollInfoDesc.innerHTML = "";
	}
}

function spinCondition() {
	checkCond = Math.floor(randNum / (98 / maxConditions));
	if (checkCond >= 10) {
		spinResultCond.innerHTML = "Commentator Clash";
		rollInfoDesc.innerHTML = `
		<p>Both competitors choose any commentator to take their place in the current set.</p>
		`;
	} else {
		switch (curGameSel) {
			case "auau":
				// Among Us Arena Ultimate conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "You are an IMPOSTOR";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "Do Your Damn Tasks";
						rollInfoDesc.innerHTML = `
						<p>Players must play in Task Battle mode.</p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li>Best of 3</li>
							<li>2 rounds to win</li>
							<li>All characters</li>
							<li>All stages</li>
							<li>No 2.11 mechanics</li>
							<li>3000 health</li>
							<li>Full meter start off</li>
							<li>Airblocking on</li>
							<span class="rules-added"><li>Matches are played in Task Battle mode</li></span>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "A Secret Among Us";
						rollInfoDesc.innerHTML = `
						<p>Both players may only select one of the three "secret" characters (Fortegreen, Undefined, or Charcoal).</p>
						<p>Secret characters are selected by going to the bottom row of the character selection and going down, and can be scrolled through by going left or right.</p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li>Best of 3</li>
							<li>2 rounds to win</li>
							<span class="rules-removed"><li>All characters</li></span>
							<span class="rules-added"><li>Fortegreen, Undefined, and Charcoal only</li></span>
							<li>All stages</li>
							<li>No 2.11 mechanics</li>
							<li>3000 health</li>
							<li>Full meter start off</li>
							<li>Airblocking on</li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "Emergency Meeting!";
						rollInfoDesc.innerHTML = `
						<p>"Full Meter Start" is enabled, granting both players 100% meter at the start of each game.</p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li>Best of 3</li>
							<li>2 rounds to win</li>
							<li>All characters</li>
							<li>All stages</li>
							<li>No 2.11 mechanics</li>
							<li>3000 health</li>
							<span class="rules-removed"><li>Full meter start off</li></span>
							<span class="rules-added"><li>Full meter start on</li></span>
							<li>Airblocking on</li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "Electrical Sabotage";
						rollInfoDesc.innerHTML = `
						<p>Both players must play the game blindfolded, or without being able to see the screen.</p>
						<p>If a player is found to have been looking at the screen at any point, it will count as an automatic loss for them.</p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li>Best of 3</li>
							<li>2 rounds to win</li>
							<li>All characters</li>
							<li>All stages</li>
							<li>No 2.11 mechanics</li>
							<li>3000 health</li>
							<li>Full meter start off</li>
							<li>Airblocking on</li>
							<span class="rules-added"><li>Both players must be blindfolded</li></span>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li>Best of 3</li>
							<li>2 rounds to win</li>
							<li>All characters</li>
							<li>All stages</li>
							<li>No 2.11 mechanics</li>
							<li>3000 health</li>
							<li>Full meter start off</li>
							<li>Airblocking on</li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li>Best of 3</li>
							<li>2 rounds to win</li>
							<li>All characters</li>
							<li>All stages</li>
							<li>No 2.11 mechanics</li>
							<li>3000 health</li>
							<li>Full meter start off</li>
							<li>Airblocking on</li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li>Best of 3</li>
							<li>2 rounds to win</li>
							<li>All characters</li>
							<li>All stages</li>
							<li>No 2.11 mechanics</li>
							<li>3000 health</li>
							<li>Full meter start off</li>
							<li>Airblocking on</li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li>Best of 3</li>
							<li>2 rounds to win</li>
							<li>All characters</li>
							<li>All stages</li>
							<li>No 2.11 mechanics</li>
							<li>3000 health</li>
							<li>Full meter start off</li>
							<li>Airblocking on</li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li>Best of 3</li>
							<li>2 rounds to win</li>
							<li>All characters</li>
							<li>All stages</li>
							<li>No 2.11 mechanics</li>
							<li>3000 health</li>
							<li>Full meter start off</li>
							<li>Airblocking on</li>
						</ul>
						`;
						break;
				}
				break;
			case "ah3x":
				// Arcana Heart 3 LOVEMAX SIXSTARS!!!!!! XTEND conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "A Heartful Battle";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "bbcf":
				// BlazBlue: Central Fiction conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "BlazBasic";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "bbtag":
				// BlazBlue Cross Tag Battle conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "Can't Escape From Crossing Fate";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "dnfd":
				// DNF Duel conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "dbfz":
				// Dragon Ball FighterZ conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "el2":
				// E's Laf++ conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "fm":
				// Fraymakers conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "gbvsr":
				// Granblue Fantasy Versus: Rising conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "ggst":
				// Guilty Gear -Strive- conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "ggxrd":
				// Guilty Gear Xrd REV 2 conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "ggacr":
				// Guilty Gear XX Accent Core Plus R conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "Wrath of Gold";
						rollInfoDesc.innerHTML = `
						<p>Both players may only play on the Golden variants of each character.</p>
						<p>Golden varients are selected by pressing the <b>Respect</b> button to cycle to <b>Slash</b> colors, then press the <b>Rec. Enemy</b> button to select it.</p>
						<p>If a player does not get the Golden variation, both players should return to character select to try again.</p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "EX Accent Core Plus R";
						rollInfoDesc.innerHTML = `
						<p>Both players may only play with the EX versions of each character.</p>
						<p>EX versions are selected by pressing Start on a character and switching to EX mode.</p>
						<p>Due to Kliff and Justice lacking EX versions, they are not permitted to be used.</p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Matches are fought in the team battle mode.</p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "isd":
				// Idol Showdown conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "CHAAAAAAAT!";
						rollInfoDesc.innerHTML = `
						<p>Players are allowed to commentate the match while they play along with the commentators.</p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "That's My Oshi";
						rollInfoDesc.innerHTML = `
						<p>The Commentators pick a character for each player. Players must play the character they are given.</p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "Graduation";
						rollInfoDesc.innerHTML = `
						<p>Every time a character is used, it cannot be used again in any following games during the set.</p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "Stream Starting Soon!";
						rollInfoDesc.innerHTML = `
						<p>The match timer must be set to 30 seconds.</p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "kf2":
				// Kirby Fighters 2 conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "mbtl":
				// Melty Blood: Type Lumina conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "mvs":
				// Multiversus conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "Super Warner Bros.";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "p4au":
				// Persona 4 Arena Ultimax conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "ptdx":
				// Pokkén Tournament DX conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "roa":
				// Rivals of Aether conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "sg":
				// Skullgirls conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "sf6":
				// Street Fighter 6 conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "ssbc":
				// Super Smash Bros. Crusade conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "ssbu":
				// Super Smash Bros. Ultimate conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "ssf2":
				// Super Smash Flash 2 conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "t8":
				// Tekken 8 conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "soku":
				// Touhou Hisoutensoku conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "aocf":
				// Touhou Hyouibana ~ Antinomy of Common Flowers conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "ufdk2":
				// Ultra Fight Da Kyanta 2 conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
			case "uni2":
				// Under Night In-Birth II Sys:Celes conditions
				switch (checkCond) {
					case 0:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p>Default ruleset; no changes.</p>
						`;
						break;
					case 1:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 2:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 3:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 4:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 5:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 6:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 7:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 8:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
					case 9:
						spinResultCond.innerHTML = "";
						rollInfoDesc.innerHTML = `
						<p></p>
						`;
						gameRulesDesc.innerHTML = `
						<ul>
							<li></li>
						</ul>
						`;
						break;
				}
				break;
		}
		if (rngMode) {
			document.getElementById("rngmode-condition" + rngRollCount).innerHTML = "Condition " + (rngRollCount + 1) + ": <span class='rngmode-title'>" + spinResultCond.innerHTML + "</span>";
			
			if (checkCond != 0) {
				document.getElementById("rulesinfo-rng" + rngRollCount).innerHTML = gameRulesDesc.innerHTML;
			}
			document.getElementById("rollinfo-rng" + rngRollCount).innerHTML = rollInfoDesc.innerHTML;
			gameRulesDesc.innerHTML = "";
			rollInfoDesc.innerHTML = "";
			rngRollCount++;
		}
	}
}

function reroll() {
	randNum = Math.random() * (100 - 0) + 0;
	console.log(randNum);
}

function debugMenu(status, gameAc) {
	switch (status) {
		case "toggleMenu":
			var debugMenu = document.getElementById("debugarea");
			var areaBorder = document.getElementsByClassName("contentGrid")[0];
			
			if (debugMenu.style.display == "block") {
				debugMenu.style.display = "none";
				areaBorder.style.borderBottomWidth = "0px";
			} else {
				debugMenu.style.display = "block";
				areaBorder.style.borderBottomWidth = "4px";
			}
			break;
		case "toggleBanlist":
			var banlistContent = document.getElementById("banlist");
			var banlistButton = document.getElementById("banlist-toggle");
			
			if (banlistContent.style.display == "flex") {
				banlistContent.style.display = "none";
				banlistButton.innerHTML = "Show banlist";
			} else {
				banlistContent.style.display = "flex";
				banlistButton.innerHTML = "Hide banlist";
			}
			updateBanlistInfo();
			break;
		case "addRemove":
			if (banlist.includes(gameAc)) {
				var gameIndex = banlist.indexOf(gameAc);
				banlist.splice(gameIndex, 1);
			} else {
				banlist.push(gameAc);
				if (banlist.length > banlistMaxLength) {
					banlist.splice(0, 1);
				}
			}
			console.log(banlist);
			updateBanlistInfo();
			break;
		case "rerollCondition":
			spinNum = 2;
			spinToWin();
			break;
	}
}

function updateBanlistInfo() {
	for (i = 0; i < gameSel.length; i++) {
		var banlistStatus = document.getElementById("banliststatus-" + gameSel[i]);
		if (banlist.includes(gameSel[i])) {
			banlistStatus.innerHTML = `<span class="banlist-banned">Banned</span>`;
		} else {
			banlistStatus.innerHTML = `<span class="banlist-unbanned">Available</span>`;
		}
	}
	if (banlist.includes("rng")) {
		document.getElementById("banliststatus-rng").innerHTML = `<span class="banlist-banned">Banned</span>`;
	} else {
		document.getElementById("banliststatus-rng").innerHTML = `<span class="banlist-unbanned">Available</span>`;
	}
}

var rngRollCount = 0;
var bestOf = 0;

function setupRNG(tempBestOf = 3) {
	rngMode = !rngMode;
	document.getElementById("bestof-select").style.display = "none";
	document.getElementById("button1").style.display = "block";
	if (rngMode) {
		rollInfoDesc.innerHTML = "";
		rngRollCount = 0;
		bestOf = tempBestOf;
		rngModeNotice.style.display = "block";
		document.getElementsByClassName("rngmode-container")[0].style.display = "block";
		document.getElementsByClassName("rngmode-container")[1].style.display = "block";
		if (bestOf == 5) {
			for (i = 0; i < 4; i++) {
				document.getElementsByClassName("bestof-5")[i].style.display = "block";
			}
		}
	} else {
		rngModeNotice.style.display = "none";
		document.getElementsByClassName("rngmode-container")[0].style.display = "none";
		document.getElementsByClassName("rngmode-container")[1].style.display = "none";
		for (i = 0; i < 4; i++) {
			document.getElementsByClassName("bestof-5")[i].style.display = "none";
		}
	}
}
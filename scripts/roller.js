var gameSelection = [
	"Among Us Arena",
	"BlazBlue CentralFiction",
	"DNF Duel",
	"Dragon Ball FighterZ",
	"Fraymakers",
	"Granblue Fantasy Versus: Rising",
	"Guilty Gear -Strive-",
	"Idol Showdown",
	"Kirby Fighters 2",
	"Melty Blood: Type Lumina",
	"Rivals of Aether",
	"Skullgirls",
	"Super Smash Bros. Ultimate",
	"Touhou 15.5",
	"Ready or Not, GAMBLE!"
];
var conditions = {
	aua: [
		"You are an IMPOSTOR", // Default
		"Task Battle", // Task Battle mode
		"Emergency Meeting!", // Full meter start
		"Caught in Electrical", // 5000 health, 1 round
		"It's High Noon...", // Gun only
		"Let the Bodies Hit the Floor", // Grabs only
		"SUS! AMOGUS!", // Gen Z brainrot video
		"ASMongusR", // ASMR video
		"Botting", // Bet on CPU
		"A Secret Among Us" // Secret characters only
	],
	bbcf: [
		"BlazBasic", // Default
		"Fast as a Bullet", // 30 second matches
		"Slap Battles", // A attacks only
		"Devoured by Darkness", // Screen hidden
		"The Anime in Anime Fighter", // Edgiest Character
		"BlazBlue ConFused", // Random controls
		"4-Leafed Carl Clover", // Random ditto
		"In Astral Heat", // ASMR video
		"Ragna the BISEXUAL", // Gay vibes
		"Homophobia in his eyes" // Homophobic vibes
	],
	dnfd: [
		"DNF Dually Noted", // Default
		"Party Like it's 1095", // Crusader dittos
		"I'm the Mage", // Mana moves only
		"All Dried Up", // No mana moves
		"Everyone's the Swift Master", // 30 second matches
		"Directions Not Found Duel", // Max input latency
		"Who Do I Choose???", // Commentators pick characters
		"Hold Me Close", // Grappler only
		"American Power", // Gun characters only
		"Learn Every Class" // Random ditto
	],
	dbfz: [
		"Dragon Ball Fuggedaboutit", // Default
		"Don't Need Legs to Walk", // Super Dash movement only
		"It's me, Goku!", // Only Goku
		"Supercharged", // Limitless Ki
		"One Spark to Ignite a Fire", // Limitless Sparking
		"That Wasn't Even My Full Power!", // Final character free Ki charge
		"My Final Move!", // 1 health
		"I Can Take You All By Myself!", // 1v1
		"Heart Virus Inflicted", // Max input latency
		"Only 10% of My Power!" // Medium attacks only
	],
	fm: [
		"Making Frays", // Default
		"What is this, RoA?", // Workshop
		"Fraymachines", // Team with CPU
		"Go, My Child", // Bet on CPU
		"Friendmakers", // Call for sub-in
		"Defense? What's that?", // No shield
		"Feeling special", // Special moves only
		"Platforms in a Platform Fighter", // Platforms only
		"Indie Horror", // FNaF ambience
		"Extremely loud, incorrect pipe" // Silence broken by metal pipe
	],
	gbvsr: [
		"Grand Blues", // Default
		"Premium Gala Rush", // 30 second matches
		"Elemental Prowess", // Must pick a character from a chosen element
		"Granblue Fatigued", // Max input latency
		"Nothing but Love!", // Grabs only
		"Jewel Resort Casino Days", // Lucky number draw
		"You Need Better Team Comp", // Commentators pick characters
		"Gacha Pulls", // Random ditto
		"No Swords to a Sword Fight", // No sword users
		"Not Feeling too Brave" // No Bravery Points
	],
	ggst: [
		"Gayest Fighting Game", // Default
		"BUSTAH!", // Grabs only
		"Yu-Gi-Oh Duel", // Asuka only
		"Blue Red and Black Paramedics", // Faust only
		"You think you can fighting game?", // Combo trial
		"Beyblade Beyblade Let it Rip", // Boss Nago
		"High Damage Plays", // 30 second matches
		"Hop on the Birthday Train", // Birthday Train
		"The Gears Ain't Spinning", // Max input latency
		"Guilty Gear -Sumo-" // Wallbreak match
	],
	isd: [
		"Auditions Live", // Default
		"Stream Starting Soon!", // 30 second matches
		"Weight of My Honkers", // Heavy attacks only
		"Chaaaaaat!", // Players join the commentary booth
		"That's My Oshi", // Commentators pick characters
		"Low Tier VTuber", // LTG
		"I am die. Thank you forever.", // VTuber clip video
		"Graduation", // Character elimination
		"Ara ara~", // ASMR video
		"The Notorious C.A.Lee" // Reaper Rapper
	],
	kf2: [
		"Not Smash Bros", // Default
		"Intended Playstyle", // Full casual
		"Planet Robobot", // Team with CPU
		"Kiss Your Friends on the Lips", // Team with player of choice
		"Let's Get LOUD!", // Mike item only
		"Star Power", // Action Star item only
		"Fighters 2", // Buddy characters only
		"Kirby Air Ride", // Air Attacks only
		"I'm Crushed", // Factory, hazards on
		"You're Grounded" // No jumping/hovering
	],
	mbtl: [
		"Type Moon Type Lumina", // Default
		"Brenyuu~", // Neco-Arc only
		"Rapid Beating", // 30 second matches
		"Powerscaling", // Pick strongest looking
		"Tsuki-can't-sime", // Screen hidden
		"That Last Battle Was Messy", // Maids Only
		"Your Move", // Opponent picks character
		"Visual Novel", // Audiobook plays in the background
		"I'm me, he says.", // Alt versions
		"Just Try to Type Lumina" // Random controls
	],
	roa: [
		"Furry Fight", // Default
		"Rivals' Legacy", // Workshop
		"The Descent by Kevin MacLeod", // Abyss versus
		"Smack Around Some Balls", // Tetherball
		"Consistency is for the Weak", // Hitbox randomizer
		"Cancel: The Game", // Turbo mode
		"Retro Classics", // Tetris
		"Like a Magic Trick", // Screen wrap
		"Spin to Win", // Beyblade
		"This is My Specialty" // Special moves only
	],
	/*
		RoA workshop banlist:
		- Primal Aspid (page 3/row 7)
		- 100% Accurate Kirbo (page 7/row 25)
		- Literal Sun (page 10/row 36)
		- SCP-173 (page 12/row 42)
		- Boss!Zeta (page 13/row 46)
		- Ultra Instinct Nolan (page 13/row 47)
		- Boss!Mayu (page 13/row 48)
		- 100% Accurate King Dedede (page 14/row 51)
		- 100% Accurate Marth (page 14/row 52)
		- Red Ross 100% (page 14/row 52)
		- 100% Accurate Lucina (page 14/row 52)
		- Plus Ultra 100% MK (page 14/row 53)
		- Purple Guy (page 16/row 60)
		- Jank Samus (page 16/row 61)
		- Spamus (page 16/row 61)
		- 250% Accurate Cloud (page 16/row 61)
		- 100% Accurate Joker (page 17/row 62)
		- King Bowser (page 17/row 65)
		- 100% Accurate Accurate-er Jigglypuff (page 18/row 66)
		- Cosmic Ronald (page 18/row 66)
		- R-Pepsi Man (page 18/row 67)
		- God of Destruction Falco (page 19/row 70)
		- Ultra Instinct Fox (page 19/row 70)
		- 100% Accurate Samus (page 19/row 71)
		- 100% Accurate Wolf (page 19/row 71)
		- 100% Accurate Cloud (page 19/row 71)
		- 100% Accurate Jigglypuff (page 19/row 72)
		- Tetris (page 19/row 72)
		- OP Jotaro (page 19/row 73)
		- NES Meta Knight (page 20/row 74)
		- Sans With a Gun (page 20/row 77)
		- Simon (NES) (page 20/row 77)
		- Godkarmachine O Inary (page 20/row 77)
		- The Kid (page 20/row 77)
		- 100% Extra Fast Meta Knight (page 21/row 80)
		- Mario Pissing (Classic) (page 22/row 82)
		- Kragg but Always Rock (page 22/row 83)
		- Almighty TNT (page 22/row 84)
		- 200% Accurate Melee Falco (page 23/row 86)
		- The Duane (page 23/row 87)
		- 100% Accurate 100% Accurate Meta Knight (page 23/row 87)
		- Sakuya Izayoi (page 23/row 88)
		- 100% Accurate Fox (page 23/row 89)
		- Ronald McDonald (page 24/row 92)
		- CDI Link & (page 25/row 95)
		- Sakuya (page 26/row 98)
		- Diogenes (page 29/row 112)
		- Broly (page 30/row 117)
	*/
	sg: [
		"Feeling Girly", // Default
		"Flashy Action Scene", // Meter must be spent as soon as possible
		"Fake Fighting", // Light Attacks Only
		"IPS? What's that?", // Heavy attacks only
		"Skullgambling", // Lucky number draw
		"Stunt Double", // 2v2, second character must be Double
		"Hit My Funny Bone", // Random controls
		"Skull... guys?", // Only Beowulf and Big Band, 2v2
		"Singular Skullgirl", // 1v1
		"Who's Up Next?" // Random ditto
	],
	ssbu: [
		"Super Smash my Bros", // Default
		"Pull Up With the Squad", // 3v3 Squad Strike
		"Whole Different Game", // Casual mode
		"Spirited Combat", // Spirits
		"Swing, Batter Batter", // Home-Run Contest
		"We're all creatives here", // Custom stage maker
		"It's a Real Fighting Game, Nerds", // FGC mode
		"Super Smash on Titan", // Giant smash
		"Average Nintendo Direct", // Hero dittos
		"You Want Meter? We Got Meter" // FS Meter on
	],
	th155: [
		"Danmaku Danfakyu", // Default
		"No More Bullet Hell", // Melee attacks only
		"Cursed by Rumia", // Screen hidden
		"Last Word", // Set-winning round ended with Spell Card
		"Incident Solvers", // Master Reimu or Marisa only
		"I Don't Know This Game Anyway", // Random controls
		"Too Many Characters", // Random ditto
		"Steal Her Look", // Most likely to wear outfit
		"Dominatrix", // Strong master, weak slave
		"Touhomo" // Make a ship
	],
	extra: "Commentator Tag-in",
}

var descriptions = {
	aua: [
		"Default ruleset.", // Default
		"Competitors must play in Task Battle mode.", // Task Battle mode
		"The option of Full Meter Start will be enabled.", // Full meter start
		"Matches are set to 5000 health, and played as a best of 1.", // 5000 health, 1 round
		"Competitors may only use attacks bound to the Gun button.", // Gun only
		"Competitors may only use grabs and command grabs.", // Grabs only
		"Matches play out normally, with a brainrot video playing in the background. Competitors may not mute their audio.", // Gen Z brainrot video
		"Matches play out normally, with an ASMR video playing in the background. Competitors may not mute their audio.", // ASMR video
		"A CPU vs. CPU match is played out, with competitors picking the color they want to take their place.", // Bet on CPU
		"Competitors may only use the 3 secret characters." // Secret characters only
	],
	bbcf: [
		"Default ruleset.", // Default
		"Matches will be set to a 30 second timer.", // 30 second matches
		"Competitors may only use attacks bound to the A (Weak) button.", // A attacks only
		"Competitors must not view their screen during gameplay.", // Screen hidden
		"Competitors must pick who they believe to be the edgiest looking characters.", // Edgiest Character
		"Controls must be set to random inputs, including directional inputs.", // Random controls
		"Competitors must pick random characters.", // Random ditto
		"Matches play out normally, with an ASMR video playing in the background. Competitors may not mute their audio.", // ASMR video
		"Competitors must pick who they believe to be the gayest looking characters.", // Gay vibes
		"Competitors must pick who they believe to be the most homophobic looking characters." // Homophobic vibes
	],
	dnfd: [
		"Default ruleset.", // Default
		"Competitors may only use Crusader.", // Crusader dittos
		"Competitors may only use attacks bound to the MP Skill Attack button.", // Mana moves only
		"Competitors may not use attacks bound to the MP Skill Attack button.", // No mana moves
		"Matches will be set to a 30 second timer.", // 30 second matches
		"Both competitor's input latency must be set to the maximum value.", // Max input latency
		"Competitors must pick characters decided for them by a commentator. The selection will last the whole match.", // Commentators pick characters
		"Competitors may only use Grappler.", // Grappler only
		"Competitors may only use characters that use a gun in their moveset; Hitman, Launcher, Ranger, and Troubleshooter.", // Gun characters only
		"Competitors must pick random characters." // Random ditto
	],
	dbfz: [
		"Defualt ruleset.", // Default
		"Competitors may only move using Super Dash; no walking, running, jumping, or airdashing. Movement done accidentally or caused by performing a command input will not be counted.", // Super Dash movement only
		"Competitors may only use any Goku.", // Only Goku
		"Competitors play a training mode match with settings adjusted to match normal gameplay, with the exception of Ki auto-regening. Matches will start on a mutual competitor countdown.", // Limitless Ki
		"Competitors play a training mode match with settings adjusted to match normal gameplay, with the exception of Sparking Blast being refreshed. Matches will start on a mutual competitor countdown.", // Limitless Sparking
		"When a competitor gets to their final character of their chosen three, they are allowed a Ki charge up to full meter before the match continues.", // Final character free Ki charge
		"Competitors play a training mode match with settings adjusted to match normal gameplay, with the exception of health being set to 1. Matches will start on a mutual competitor countdown, and will be played as a best of 7.", // 1 health
		"Competitors may only pick one character each.", // 1v1
		"Both competitor's input latency must be set to the maximum value.", // Max input latency
		"Competitors may only use attacks bound to the Medium button." // Medium attacks only
	],
	fm: [
		"Default ruleset.", // Default
		"Competitors may only use characters from the workshop menu. Due to the nature of workshop, be aware that characters picked may not be even or balanced.", // Workshop
		"Competitors must play on teams, and add a CPU to their team.", // Team with CPU
		"A CPU vs. CPU match is played out, with competitors picking the character they want to take their place.", // Bet on CPU
		"Competitors are allowed to call in another competitor to play for them. If not possible, this will be rerolled.", // Call for sub-in
		"Competitors may not use shields, rolls, spotdodges, or airdodges.", // No shield
		"Competitors may only use attacks bound to the Special button.", // Special moves only
		"The only selectable stages are Merchant Port and The Spire. Players must stay on platforms only, and cannot touch the stage itself unless to ledgegrab. Accidental landings that are immediately rectified will not be counted.", // Platforms only
		"Game audio will be muted, with Five Nights at Freddy's ambience playing in the background. Competitors may not mute their audio. Both competitors must choose the Freddy Fazbear custom assist.", // FNaF ambience
		"Matches play out normally, with silence broken by metal pipe playing in the background. Competitors may not mute their audio. Both competitors must choose the Metal Pipe custom assist." // Silence broken by metal pipe
	],
	gbvsr: [
		"Default ruleset.", // Default
		"Matches will be set to a 30 second timer.", // 30 second matches
		"Commentators will pick an element out of the 6 possible for each competitor, and the competitor must pick a character corresponding to that element.", // Must pick a character from a chosen element
		"Both competitor's input latency must be set to the maximum value.", // Max input latency
		"Competitors may only use grabs and command grabs.", // Grabs only
		"Both competitors choose five numbers from 1-99, then every set a random number is drawn; if the number matches one of a competitor's five, they immediately win the match. Competitors must have different numbers.", // Lucky number draw
		"Competitors must pick characters decided for them by a commentator. The selection will last the whole match.", // Commentators pick characters
		"Competitors must pick random characters.", // Random ditto
		"Competitors cannot use characters whose weapon is a sword.", // No sword users
		"At the start of the round, both competitors must waste all three of their Bravery Points." // No Bravery Points
	],
	ggst: [
		"Default ruleset", // Default
		"Competitors may only use grabs and command grabs.", // Grabs only
		"Competitors may only use Asuka.", // Asuka only
		"Competitors may only use Faust and may only use item pull. Any misinputted moves will not be counted.", // Faust only
		"Both competitors mutually choose a combo trial, and whoever performs better in their full attempts wins the set. Both competitors get three attempts at the full five tries. Match will be played as a best of one.", // Combo trial
		"Competitors will face off against a boss version of Nagoriyuki. Whoever performs the best will win the set. Match will be played as a best of three per person versus Nago. Other boss characters added by the mod used, being Nagoriyuki, Ky, Ramlethal, May, Faust, Elphelt, and Zato-1, are not allowed for use against Nago.", // Boss Nago
		"Matches will be set to a 30 second timer.", // 30 second matches
		"Background music must be set to Birthday Train.", // Birthday Train
		"Both competitor's input latency must be set to the maximum value.", // Max input latency
		"Competitors play a training mode match. Competitors will only win a round once they have achieved a wallbreak against the other competitor. Matches will start on a mutual competitor countdown. To align with usual rules, there will be a best of three for the set, and a best of 3 for the match." // Wallbreak match
	],
	isd: [
		"Default ruleset.", // Default
		"Matches will be set to a 30 second timer.", // 30 second matches
		"Competitors may only use attacks bound to the H button.", // Heavy attacks only
		"Competitors may join in, and talk with, the commentators during the match.", // Players join the commentary booth
		"Competitors must pick characters decided for them by a commentator. The selection will last the whole match.", // Commentators pick characters
		"Matches play out normally, with the LowTierGod rant video playing in the background. Competitors may not mute their audio.", // LTG
		"Matches play out normally, with a VTuber clip compilation video playing in the background. Competitors may not mute their audio.", // VTuber clip video
		"Each character and collab chosen by either competitor cannot be used in subsequent sets. Players may not use the same character or collab in the same set.", // Character elimination
		"Matches play out normally, with an ASMR video playing in the background. Competitors may not mute their audio.", // ASMR video
		"Matches play out normally, with Mori Calliope's Reaper Rapper song playing in the background. Competitors may not mute their audio." // Reaper Rapper
	],
	kf2: [
		"Default ruleset.", // Default
		"All stages are allowed, items are enabled and set to normal frequency, and stage hazards are enabled.", // Full casual
		"Competitors must play on teams, and add a CPU to their team.", // Team with CPU
		"Competitors are allowed to call in another competitor to play with them on a 2v2 team. If not possible, this will be rerolled.", // Team with player of choice
		"Items must be set to Mike Only, and item frequency must be set to high.", // Mike item only
		"Items must be set to Action Star Only, and item frequency must be set to high.", // Action Star item only
		"Competitors may only use characters that are not Kirby.", // Buddy characters only
		"Competitors may only use attacks performed in the air.", // Air Attacks only
		"Matches must be played on Factory Tour, and stages hazards must be turned on.", // Factory, Hazards on
		"Competitors may not jump nor float." // No jumping/hovering
	],
	mbtl: [
		"Default ruleset.", // Default
		"Competitors may only use Neco-Arc.", // Neco-Arc only
		"Matches will be set to a 30 second timer.", // 30 second matches
		"Competitors must pick who they believe to be the strongest looking characters.", // Pick strongest looking
		"Competitors must not view their screen during gameplay.", // Screen hidden
		"Competitors may only use Hisui, Kohaku, or Hisui & Kohaku.", // Maids Only
		"Competitors must pick characters decided for them by their opponent. This selection can either last the whole match, or can last for each set depending on the comeptitor's choosings.", // Opponent picks character
		"Matches play out normally, with an audiobook playing in the background. Competitors may not mute their audio.", // Audiobook plays in the background
		"Competitors must each pick a character that is an alternate form of each other. This list includes:<ul><li>Arcueid Brunestud + Red Arcueid</li><li>Ciel + Powered Ciel</li><li>Noel + Dead Apostle Noel</li></ul>", // Alt versions
		"Controls must be set to random inputs, including directional inputs." // Random controls
	],
	roa: [
		"Default ruleset.", // Default
		"Competitors may only use characters from the workshop menu. Be sure to verify with the workshop banlist. Due to the nature of workshop, be aware that characters picked may not be even or balanced.", // Workshop
		"Competitors must play in Abyss Versus mode.", // Abyss versus
		"Competitors must play in Tetherball mode.", // Tetherball
		"Both competitors must select the Hitbox Randomizer buddy.", // Hitbox randomizer
		"Both competitors must select the Turbo Mode buddy.", // Turbo mode
		"Competitors may only use Tetris (page 19/row 72).", // Tetris
		"Matches must be played with screen wrap on and the damage threshold set to 300.", // Screen wrap
		"Competitors may only use Beyblade (page 4/row 12), and matches must be played on the Beyblade stage.", // Beyblade
		"Competitors may only use attacks bound to the Special button." // Special moves only
	],
	sg: [
		"Default ruleset.", // Default
		"When getting bars of meter, the meter must be spent in any way as soon as possible after getting it.", // Meter must be spent as soon as possible
		"Competitors may only use attacks bound to the Light Punch or Light Kick button.", // Light Attacks Only
		"Competitors may only use attacks bound to the Heavy Punch or Heavy Kick button.", // Heavy attacks only
		"Both competitors choose five numbers from 1-99, then every set a random number is drawn; if the number matches one of a competitor's five, they immediately win the match. Competitors must have different numbers.", // Lucky number draw
		"Competitors must go with a team of two, and the second character on their team must be Double.", // 2v2, second character must be Double
		"Controls must be set to random inputs, including directional inputs.", // Random controls
		"Competitors must go with a team of two, and must use Beowulf and Big Band.", // Only Beowulf and Big Band, 2v2
		"Competitors may only pick one character each.", // 1v1
		"Competitors must pick random characters." // Random ditto
	],
	ssbu: [
		"Default ruleset.", // Default
		"Competitors must in a 3v3 Squad Strike.", // 3v3 Squad Strike
		"Competitors must use the designated casual ruleset.", // Casual mode
		"Competitors must play using spirits. Each competitor is allowed 5 minutes maximum to construct a team of their choosing.", // Spirits
		"Competitors must play in Home-Run Contest.", // Home-Run Contest
		"Competitors must play on a custom stage. The competitor is allowed 5 minutes maximum to construct a stage. The maker of the stage will be chosen mutually between the two competitors.", // Custom stage maker
		"Competitors must play on the King of Fighters Arena stage, play on stamina set to 150%, and may only play Ryu, Ken, Terry, or Kazuya.", // FGC mode
		"Competitors must play on custom smash with characters set to giant.", // Giant smash
		"Both competitors may only use Hero. Each competitor will stand face to face in the middle of the stage and will take turns selecting options from their down special menu. If a competitor is knocked off the stage, they are allowed to return before using their next move. All menu options are allowed. If a competitor does not have enough mana to perform any menu options drawn, they are allowed only to do a jab combo for that turn. Alternatively, players may also perform a jab combo if there are no options they want to choose. Picking Kaclang or Zoom is treated as being allowed to dodge the opponent's next attack, and picking Snooze allows an extra turn.", // Hero dittos
		"Matches must be played with Final Smash Meter enabled." // FS Meter on
	],
	th155: [
		"Default ruleset.", // Default
		"Competitors may only use attacks bound to the Melee button.", // Melee attacks only
		"Competitors must not view their screen during gameplay.", // Screen hidden
		"In a round where a win would mean a win of the current set, the competitor who has the opportunity to win must take the match using their Spell Card (Shot+Skill) or Last Word (Skill+Tag). If the competitor fails to do so, they must lose the round. If both players have the opportunity to win the set, and each fail, then the match will play out normally.", // Set-winning round ended with Spell Card
		"Competitors may only use Reimu Hakurei or Marsia Kirisame as their Master. Any Slave may still be selected.", // Master Reimu or Marisa only
		"Controls must be set to random inputs, including directional inputs.", // Random controls
		"Competitors must pick random characters.", // Random ditto
		"Competitors must choose a character that they would be most likely to wear the outfit of as their Master. Any Slave may still be selected.", // Most likely to wear outfit
		"Competitors must pick who they believe to be the strongest looking characters as their Master, and the weakest looking character as their Slave.", // Strong master, weak slave
		"Competitors must choose two characters that they would ship." // Make a ship
	],
	extra: "Competitors may choose either commentator to play in their place.",
}

var randNum = -1;
var rngMode = false;
var curGameSel = "";
var gameSelStore = [
	"",
	""
];

function spinToWin(spinnerNum) {
	if (spinnerNum == 1) {
		document.getElementById("spinner2").innerHTML = "";
		document.getElementById("conditionDesc").innerHTML = "";
		randNum = Math.floor(Math.random() * (101 - 1) + 1);
		function commonReroll() {
			randNum = Math.floor(Math.random() * (101 - 1) + 1);
		}
		reroll: while (true) {
			console.log(randNum);
			if (randNum >= 1 && randNum < 8) {
				curGameSel = "aua";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[0];
					document.getElementById("rollInfo").innerHTML = gameSelection[0];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 8 && randNum < 15) {
				curGameSel = "bbcf";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[1];
					document.getElementById("rollInfo").innerHTML = gameSelection[1];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 15 && randNum < 22) {
				curGameSel = "dnfd";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[2];
					document.getElementById("rollInfo").innerHTML = gameSelection[2];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 22 && randNum < 29) {
				curGameSel = "dbfz";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[3];
					document.getElementById("rollInfo").innerHTML = gameSelection[3];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 29 && randNum < 36) {
				curGameSel = "fm";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[4];
					document.getElementById("rollInfo").innerHTML = gameSelection[4];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 36 && randNum < 43) {
				curGameSel = "gbvsr";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[5];
					document.getElementById("rollInfo").innerHTML = gameSelection[5];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 43 && randNum < 50) {
				curGameSel = "ggst";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[6];
					document.getElementById("rollInfo").innerHTML = gameSelection[6];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 50 && randNum < 57) {
				curGameSel = "isd";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[7];
					document.getElementById("rollInfo").innerHTML = gameSelection[7];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 57 && randNum < 64) {
				curGameSel = "kf2";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[8];
					document.getElementById("rollInfo").innerHTML = gameSelection[8];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 64 && randNum < 71) {
				curGameSel = "mbtl";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[9];
					document.getElementById("rollInfo").innerHTML = gameSelection[9];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 71 && randNum < 78) {
				curGameSel = "roa";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[10];
					document.getElementById("rollInfo").innerHTML = gameSelection[10];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 78 && randNum < 85) {
				curGameSel = "sg";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[11];
					document.getElementById("rollInfo").innerHTML = gameSelection[11];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 85 && randNum < 92) {
				curGameSel = "ssbu";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[12];
					document.getElementById("rollInfo").innerHTML = gameSelection[12];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else if (randNum >= 92 && randNum < 99) {
				curGameSel = "th155";
				if (curGameSel == gameSelStore[0] || curGameSel == gameSelStore[1]) {
					commonReroll();
					console.log("Game rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[13];
					document.getElementById("rollInfo").innerHTML = gameSelection[13];
					gameSelStore[1] = gameSelStore[0];
					gameSelStore[0] = curGameSel;
					break reroll;
				}
			} else {
				if (rngMode) {
					commonReroll();
					console.log("RNG Mode on, rerolled");
					continue reroll;
				} else {
					document.getElementById("spinner1").innerHTML = gameSelection[14];
					document.getElementById("rollInfo").innerHTML = gameSelection[14];
					break reroll;
				}
			}
		}
		document.getElementById("spinResults").style.display = "block";
		document.getElementById("button1").style.display = "none";
		document.getElementById("button2").style.display = "block";
	} else {
		randNum = Math.random() * (100 - 1) + 1;
		console.log("  " + randNum)
		
		function getCondition(conditionNum) {
			switch (curGameSel) {
				case "aua":
					document.getElementById("spinner2").innerHTML = conditions.aua[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.aua[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.aua[conditionNum];
					break;
				case "bbcf":
					document.getElementById("spinner2").innerHTML = conditions.bbcf[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.bbcf[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.bbcf[conditionNum];
					break;
				case "dnfd":
					document.getElementById("spinner2").innerHTML = conditions.dnfd[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.dnfd[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.dnfd[conditionNum];
					break;
				case "dbfz":
					document.getElementById("spinner2").innerHTML = conditions.dbfz[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.dbfz[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.dbfz[conditionNum];
					break;
				case "fm":
					document.getElementById("spinner2").innerHTML = conditions.fm[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.fm[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.fm[conditionNum];
					break;
				case "gbvsr":
					document.getElementById("spinner2").innerHTML = conditions.gbvsr[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.gbvsr[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.gbvsr[conditionNum];
					break;
				case "ggst":
					document.getElementById("spinner2").innerHTML = conditions.ggst[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.ggst[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.ggst[conditionNum];
					break;
				case "isd":
					document.getElementById("spinner2").innerHTML = conditions.isd[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.isd[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.isd[conditionNum];
					break;
				case "kf2":
					document.getElementById("spinner2").innerHTML = conditions.kf2[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.kf2[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.kf2[conditionNum];
					break;
				case "mbtl":
					document.getElementById("spinner2").innerHTML = conditions.mbtl[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.mbtl[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.mbtl[conditionNum];
					break;
				case "roa":
					document.getElementById("spinner2").innerHTML = conditions.roa[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.roa[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.roa[conditionNum];
					break;
				case "sg":
					document.getElementById("spinner2").innerHTML = conditions.sg[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.sg[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.sg[conditionNum];
					break;
				case "ssbu":
					document.getElementById("spinner2").innerHTML = conditions.ssbu[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.ssbu[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.ssbu[conditionNum];
					break;
				case "th155":
					document.getElementById("spinner2").innerHTML = conditions.th155[conditionNum];
					document.getElementById("rollInfo").innerHTML = conditions.th155[conditionNum];
					document.getElementById("conditionDesc").innerHTML = descriptions.th155[conditionNum];
					break;
			}
		}
		
		if (randNum >= 1 && randNum < 10.8) {
			getCondition(0);
		} else if (randNum >= 10.8 && randNum < 20.6) {
			getCondition(1);
		} else if (randNum >= 20.6 && randNum < 30.4) {
			getCondition(2);
		} else if (randNum >= 30.4 && randNum < 40.2) {
			getCondition(3);
		} else if (randNum >= 40.2 && randNum < 50) {
			getCondition(4);
		} else if (randNum >= 50 && randNum < 59.8) {
			getCondition(5);
		} else if (randNum >= 59.8 && randNum < 69.6) {
			getCondition(6);
		} else if (randNum >= 69.6 && randNum < 79.4) {
			getCondition(7);
		} else if (randNum >= 79.4 && randNum < 89.2) {
			getCondition(8);
		} else if (randNum >= 89.2 && randNum < 99) {
			getCondition(9);
		} else {
			document.getElementById("spinner2").innerHTML = conditions.extra;
		}
		document.getElementById("spinResults").style.display = "block";
		document.getElementById("conditionDesc").style.display = "block";
		document.getElementById("button2").style.display = "none";
		document.getElementById("button1").style.display = "block";
	}
}

function display(hide) {
	if (hide) {
		document.getElementById("spinResults").style.display = "none";
		document.getElementById("conditionDesc").style.display = "none";
	} else {
		document.getElementById("spinResults").style.display = "block";
	}
}
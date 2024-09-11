var gameSel = [
	"aocf", // Touhou 15.5 ~ Antimony of Common Flowers
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
	"is", // Idol Showdown
	"kf2", // Kirby Fighters 2
	"mbtl", // Melty Blood: Type Lumina
	"p4au", // Persona 4 Arena Ultimax
	"roa", // Rivals of Aether
	"sg", // Skullgirls
	"soku", // Touhou 12.3 ~ Touhou Hisoutensoku
	"ssbu", // Super Smash Bros. Ultimate
	"uni2", // Under Night In-Birth II Sys:Celes
];

var randNum = -1;
var spinNum = 1;
var conditionNum = 0;
var rngMode = false;
var curGameSel = "";

var banList = [];

function spinToWin() {
	randNum = Math.floor(Math.random() * (101 - 1) + 1);
	if (spinNum == 1) {
		spinNum++;
		
	} else {
		spinNum--;
	}
}
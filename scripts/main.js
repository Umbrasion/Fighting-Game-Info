function showHide(elementName, buttonName) {
	console.log(document.getElementById(elementName).innerHTML == "");
	switch (elementName) {
		case "readInputsNotice":
			if (document.getElementById(elementName).innerHTML == "") {
				document.getElementById(elementName).innerHTML = `
				<p>In order to keep things easy to read, there's certain formats that are done to make things more comprehensive and easy to read.</p>
				<p>→ Any directional inputs are based on your character facing to the right. If you're facing to the left instead, the input would be mirrored.</p>
				<p>→ Each game has its own inputs, which are usually abbreviated as the first letter of their name. For instance, you would use <b>L</b> to refer to Light, <b>M</b> to refer to medium, and <b>H</b> to refer to heavy.</p>
				<p>→ Input motions are represented with motion icons. For example, <img class="inputImage" src="../../img/inputs/input_2.png"> would mean doing the input while holding down, while <img class="inputImage" src="../../img/inputs/input_236.png"> would mean inputting down then looping forward before inputting the move. Simply follow the arrow with your stick.</p>
				<p>→ The input listed is not always the only way to perform a move. For instance, a move performed with <img class="inputImage" src="../../img/inputs/input_5.png"> could be perfromed with <img class="inputImage" src="../../img/inputs/input_4.png"> or <img class="inputImage" src="../../img/inputs/input_6.png"> as well (unless another move already exists for those inputs).</p>
				<p>→ If a move is only performed under certain conditions, that condition is listed in (parentheses). For example, if a move can only be performed in the air, it would be marked with (Air), or if the move only comes out when you're close to your opponent, it would be marked with (Close).</p>
				<p>→ If an input is marked with [<img class="inputImage" src="../../img/inputs/input_2.png"> Hold], that means to hold down that input for a certain amount of time before performing the inputs after.</p>
				<p class="boxBottom">→ Any move that has ⇒ before it and is indented is a follow-up move, meaning it is performed immediately after performing the previous move.</p>
				`;
			} else {
				document.getElementById(elementName).innerHTML = "";
			}
			if (document.getElementById(buttonName).innerHTML == "Expand") {
				document.getElementById(buttonName).innerHTML = "Collapse";
			} else if (document.getElementById(buttonName).innerHTML == "Collapse") {
				document.getElementById(buttonName).innerHTML = "Expand";
			}
			break;
	}
}

function changeModes(mode, type) {
	var noAlt2 = false;
	
	var sectionDefault = document.getElementsByClassName("modeDefault");
	var sectionAlt1 = document.getElementsByClassName("modeAlt1");
	var sectionAlt2 = document.getElementsByClassName("modeAlt2");
	var buttonDefault = document.getElementsByClassName("buttonModeDefault")[0];
	var buttonAlt1 = document.getElementsByClassName("buttonModeAlt1")[0];
	var buttonAlt2 = document.getElementsByClassName("buttonModeAlt2")[0];
	
	if (sectionAlt2.length == 0) {
		noAlt2 = true;
	}
	
	if (mode == "default") {
		for (i = 0; i < sectionDefault.length; i++) {
			sectionDefault[i].style.display = "block";
		}
		for (i = 0; i < sectionAlt1.length; i++) {
			sectionAlt1[i].style.display = "none";
		}
		if (!noAlt2) {
			for (i = 0; i < sectionAlt2.length; i++) {
				sectionAlt2[i].style.display = "none";
			}
		}
		buttonDefault.style.borderBottom = "solid #438CF2 4px";
		buttonAlt1.style.borderBottom = "none";
		if (!noAlt2) {
			buttonAlt2.style.borderBottom = "none";
		}
	} else if (mode == "alt1") {
		for (i = 0; i < sectionDefault.length; i++) {
			sectionDefault[i].style.display = "none";
		}
		for (i = 0; i < sectionAlt1.length; i++) {
			sectionAlt1[i].style.display = "block";
		}
		if (!noAlt2) {
			for (i = 0; i < sectionAlt2.length; i++) {
				sectionAlt2[i].style.display = "none";
			}
		}
		buttonDefault.style.borderBottom = "none";
		buttonAlt1.style.borderBottom = "solid #438CF2 4px";
		if (!noAlt2) {
			buttonAlt2.style.borderBottom = "none";
		}
	} else if (mode == "alt2") {
		for (i = 0; i < sectionDefault.length; i++) {
			sectionDefault[i].style.display = "none";
		}
		for (i = 0; i < sectionAlt1.length; i++) {
			sectionAlt1[i].style.display = "none";
		}
		for (i = 0; i < sectionAlt2.length; i++) {
			sectionAlt2[i].style.display = "block";
		}
		buttonDefault.style.borderBottom = "none";
		buttonAlt1.style.borderBottom = "none";
		buttonAlt2.style.borderBottom = "solid #438CF2 4px";
	}
}

function playAnnouncer(clipPath) {
	var announcer = new Audio(clipPath);
	announcer.volume = 0.1;
	announcer.play();
}

var collapse = document.getElementsByClassName("collapseButton");

for (i = 0; i < collapse.length; i++) {
	collapse[i].addEventListener("click", function() {
		this.classList.toggle("collapseActive");
		var collapseContent = this.nextElementSibling;
		if (collapseContent.style.display == "block") {
			collapseContent.style.display = "none";
		} else {
			collapseContent.style.display = "block";
		}
	});
}

var useNumpadNotation = sessionStorage.getItem('numpad');
console.log(useNumpadNotation);

function setInputType() {
	var inputsVisual = document.getElementsByClassName("moveinput-visual");
	var inputsNumpad = document.getElementsByClassName("moveinput-numpad");
	
	if (useNumpadNotation == null) {
		useNumpadNotation = "false";
	}
	
	for (i = 0; i < inputsVisual.length; i++) {
		if (useNumpadNotation == "true") {
			inputsVisual[i].style.display = "none";
			inputsNumpad[i].style.display = "block";
		} else if (useNumpadNotation = "false") {
			inputsVisual[i].style.display = "block";
			inputsNumpad[i].style.display = "none";
		}
	}
}

setInputType();

$("input[type='button'][value='Toggle numpad notation']").click(function() {
	if (useNumpadNotation == "true") {
		sessionStorage.setItem("numpad", "false");
	} else if (useNumpadNotation == "false") {
		sessionStorage.setItem("numpad", "true");
	}
	useNumpadNotation = sessionStorage.getItem("numpad");
	setInputType();
});
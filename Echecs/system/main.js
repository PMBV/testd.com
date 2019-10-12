system = ["btI", "bc", "bf", "bd", "brI", "bf", "bc", "btI",
		  "bpI", "bpI", "bpI", "bpI", "bpI", "bpI", "bpI", "bpI",
		  "x", "x", "x", "x", "x", "x", "x", "x",
		  "x", "x", "x", "x", "x", "x", "x", "x",
		  "x", "x", "x", "x", "x", "x", "x", "x",
		  "x", "x", "x", "x", "x", "x", "x", "x",
		  "wpI", "wpI", "wpI", "wpI", "wpI", "wpI", "wpI", "wpI",
		  "wtI", "wc", "wf", "wd", "wrI", "wf", "wc", "wtI"]

statute = 0
piece = 0
tour = "w"
finDePartie = false
bAutoplay = true
copyOfSystem = []
excludesPlays = []
profunderMax = 3
testResult = []

initSystem()

function systemPrint() { //rapidly transfer this system graphically
 	for(x=0;x<8;x++) {
 		chaine = [x]
 		for(y=0;y<8;y++) {
 			chaine += " " + system[x*8+y]
 		}
 	}
}

function deplace(whereIs, whereGo) { //really basic, but essentially
	type = system[whereIs]
	system[whereIs] = "x"
	system[whereGo] = type
	actuSystem()
}

function initSystem() {

	table = document.getElementsByTagName('table')
	lineList = table[0].firstElementChild.childNodes

	for(x=0;x<8;x++) {
		lineToComplete = lineList[x*2] 
		for(y=0;y<8;y++) {
			lineToComplete.childNodes[y*2+1].id = x*8+y
			
			img = document.createElement('img')
			if(system[x*8+y] != "x") {
				img.src = "img/" + system[x*8+y][0] + system[x*8+y][1] + ".png"
			}

			else {
				img.src = "img/" + system[x*8+y] + ".png"

			}
			img.onclick = function lol(){
				imgclick(this)
			}
			lineToComplete.childNodes[y*2+1].appendChild(img)
		}
	}	
}

function actuSystem() {


	table = document.getElementsByTagName('table')
	lineList = table[0].firstElementChild.childNodes

	for(x=0;x<8;x++) {
		lineToComplete = lineList[x*2] 
		for(y=0;y<8;y++) {
			lineToComplete.childNodes[y*2+1].id = x*8+y
			
			img = lineToComplete.childNodes[y*2+1].firstChild
			if(system[x*8+y] != "x") {
				img.src = "img/" + system[x*8+y][0] + system[x*8+y][1] + ".png"
			}

			else {
				img.src = "img/" + system[x*8+y] + ".png"

			}			
			img.onclick = function lol(){
				imgclick(this)
			}
		}
	}	
}
colorMemory = ""
function imgclick(x) {
	if(statute == 0) {
		statute = 1
		piece = x
		colorMemory = x.parentNode.style.background
		x.parentNode.style.background = "red"
	}
	else {
		statute = 0
		piece.parentNode.style.background = colorMemory

		if(verify(piece.parentNode.id, x.parentNode.id) == true) {
			whereIs = piece.parentNode.id
			whereGo = x.parentNode.id
			deplace(whereIs, whereGo)
			changeTour()
			excludesPlays = []
			copyOfSystem = system.slice()
			profunder = 0

			autoplayTest(copyOfSystem, "b", 0, 0)
		}
	}
}

function verify(whereIs, whereGo) { //principal topic to verify if play in rules

	if(finDePartie == true) {
		return false
	}
	
	if(tour == system[whereIs][0]) {
		if(system[whereIs][1] == "x") {
			return false
	
		}
		if(system[whereIs][1] == "p") {
			if(pRules(whereIs, whereGo) == true) {
				return true
			}
			else {
				return false
			}
	
		}
		if(system[whereIs][1] == "t") {
			if(tRules(whereIs, whereGo) == true) {
				system[whereIs] = system[whereIs][0] + "t"
				return true
	
			}
			else {
				return false
			}
	
		}
		if(system[whereIs][1] == "c") {
			if(cRules(whereIs, whereGo) == true) {
				return true
	
			}
			else {
				return false
			}	}
		if(system[whereIs][1] == "f") {
			if(fRules(whereIs, whereGo) == true) {
				return true
	
			}
			else {
				return false
			}
		}
		if(system[whereIs][1] == "r") {
			if(rRules(whereIs, whereGo) == true) {
				system[whereIs] = system[whereIs][0] + "r"
				return true
	
			}
	
			else {
				roque(whereIs, whereGo)
				return false
			}
		}
		if(system[whereIs][1] == "d") {
			if(dRules(whereIs, whereGo) == true) {
				return true
	
			}
			else {
				return false
			}
		}
	}
}

function changeTour() {
	if(tour=="w") {
		tour = "b"
		document.getElementById('tour').innerHTML = "Aux noirs de jouer"
		document.getElementById('tour').style.color = "black"

	}

	else {
		tour = "w"
		document.getElementById('tour').innerHTML = "Aux blancs de jouer"
		document.getElementById('tour').style.color = "white"

	}
	wrPresence = false
	brPresence = false

	for(x=0;x<64;x++) {
		if(system[x]=="wr" || system[x]=="wrI") {
			wrPresence = true
		}
		if(system[x]=="br" || system[x]=="brI") {
			brPresence = true
		}
	}

	if(brPresence==false) {
		document.getElementById('tour').innerHTML = "Les blancs ont gagné"
		document.getElementById('tour').style.color = "yellow"

		finDePartie = true
	}

	if(wrPresence==false) {
		document.getElementById('tour').innerHTML = "Les noirs ont gagné"
		document.getElementById('tour').style.color = "yellow"

		finDePartie = true
	}
}

function newGame() {
	tour = "w"
	document.getElementById('tour').innerHTML = "Aux blancs de jouer"
	document.getElementById('tour').style.color = "white"


	system = ["btI", "bc", "bf", "bd", "brI", "bf", "bc", "btI",
		  "bpI", "bpI", "bpI", "bpI", "bpI", "bpI", "bpI", "bpI",
		  "x", "x", "x", "x", "x", "x", "x", "x",
		  "x", "x", "x", "x", "x", "x", "x", "x",
		  "x", "x", "x", "x", "x", "x", "x", "x",
		  "x", "x", "x", "x", "x", "x", "x", "x",
		  "wpI", "wpI", "wpI", "wpI", "wpI", "wpI", "wpI", "wpI",
		  "wtI", "wc", "wf", "wd", "wrI", "wf", "wc", "wtI"]
	actuSystem()
	finDePartie = false
}
function blackifyTable(){
	table = document.getElementsByTagName('table')

	lineList = table[0].firstElementChild.childNodes

	newLineList = []

	for(x=0;x<16;x++) {
		if(x%2 == 0) {
			newLineList[newLineList.length] = lineList[x]
		}
		
	}

	for(x=0;x<128;x++) {
		if(x%2==0) {
			document.getElementsByTagName('th')[x/2].background == "#7289DA"
		}
	}

	for(y=0;y<8;y++) {
		if (y%2==0) {
			for(x=0;x<8;x++) {
				if(x%2==0) {
					newLineList[y].childNodes[x*2+3].style.background = "#2C2F33"
				}

			}
		}

		else {
			for(x=0;x<4;x++) {
				newLineList[y].childNodes[x*4+1].style.background = "#2C2F33"
			}
		}

	}
}
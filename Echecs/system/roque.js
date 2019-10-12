//la fonctionnalité du roque, fonctionnant sur le principe de chasteté mouvementale des rois et tours
function roque(whereIs, whereGo) {
	if(system[whereIs][1] == "r" && system[whereGo][1] == "t") {
		if(system[whereIs].length == 3 && system[whereGo].length == 3) {
			//posistion du roi blanc à la base : 60
			//position du roi noir à la base : 4
			if(system[whereIs][0] == "w" && whereGo == 56) {
				if(system[whereIs-1] == "x" && system[whereIs-2] == "x" && system[whereIs-3] == "x") {
					system[whereIs] = "wr"
					system[whereGo] = "wt"
					deplace(whereIs, whereIs-2)
					deplace(whereGo, parseInt(whereGo)+3)
					changeTour()
					autoplayTest()
				}
			}

			if(system[whereIs][0] == "w" && whereGo == 63) {
				if(system[parseInt(whereIs)+1] == "x" && system[parseInt(whereIs)+2] == "x") {
					system[whereIs] = "wr"
					system[whereGo] = "wt"
					deplace(whereIs, parseInt(whereIs)+2)
					deplace(whereGo, whereGo-2)	
					changeTour()		
					autoplayTest()
				}
			}

			if(system[whereIs][0] == "b" && whereGo == 0) {
				if(system[whereIs-1] == "x" && system[whereIs-2] == "x" && system[whereIs-3] == "x") {
					system[whereIs] = "br"
					system[whereGo] = "bt"
					deplace(whereIs, whereIs-2)
					deplace(whereGo, parseInt(whereGo)+3)
					changeTour()
					autoplayTest()
				}
			}

			if(system[whereIs][0] == "b" && whereGo == 7) {
				if(system[parseInt(whereIs)+1] == "x" && system[parseInt(whereIs)+2] == "x") {
					system[whereIs] = "br"
					system[whereGo] = "bt"
					deplace(whereIs, parseInt(whereIs)+2)
					deplace(whereGo, whereGo-2)	
					changeTour()
					autoplayTest()
				}
			}
		}
	}
}
function cRules(whereIs, whereGo)  {
	if(system[whereIs][0] == "w") {
		if(system[whereGo][0]=="w") {
			return false
		}
	}
	else {
		if(system[whereGo][0]=="b") {
			return false
		}
	}
	if(whereIs%8 != 7 && whereIs%8 != 6 && whereIs%8 != 1 && whereIs%8 != 0) {
		if(whereIs/8 != 7 && whereIs/8 != 6 && whereIs/8 != 1 && whereIs/8 != 0) {

			if(whereIs != parseInt(whereGo)+6 && whereIs != parseInt(whereGo)+10 && whereIs != parseInt(whereGo)+15 && whereIs != parseInt(whereGo)+17 && whereIs != parseInt(whereGo)-6 && whereIs != parseInt(whereGo)-10 && whereIs != parseInt(whereGo)-15 && whereIs != parseInt(whereGo)-17) {
				return false
			}
		}
	}

		///column exceptions

	if(whereIs%8 == 7) {
		if(whereIs != parseInt(whereGo)-6 && whereIs != parseInt(whereGo)-15 && whereIs != parseInt(whereGo)+10 && whereIs != parseInt(whereGo)+17) {
				return false
		}
	}

	if(whereIs%8 == 6) {
		if(whereIs != parseInt(whereGo)+10 && whereIs != parseInt(whereGo)+17 && whereIs != parseInt(whereGo)-15 && whereIs != parseInt(whereGo)-6 && whereIs != parseInt(whereGo)+15 && whereIs != parseInt(whereGo)-17) {
				return false

		}
	}

	if(whereIs%8 == 1) {
		if(whereIs != parseInt(whereGo)-10 && whereIs != parseInt(whereGo)+17 && whereIs != parseInt(whereGo)-15 && whereIs != parseInt(whereGo)+6 && whereIs != parseInt(whereGo)+15 && whereIs != parseInt(whereGo)-17) {
				return false

		}
	}

	if(whereIs%8 == 0) {
		if(whereIs != parseInt(whereGo)+6 && whereIs != parseInt(whereGo)+15 && whereIs != parseInt(whereGo)-10 && whereIs != parseInt(whereGo)-17) {
				return false
		}
	}

		///line exceptions

	if(whereIs/8 == 7) {
		if(whereIs != parseInt(whereGo)+6 && whereIs != parseInt(whereGo)+15 && whereIs != parseInt(whereGo)+10 && whereIs != parseInt(whereGo)+17) {
				return false
		}
	}

	if(whereIs/8 == 6) {
		if(whereIs != parseInt(whereGo)+10 && whereIs != parseInt(whereGo)+17 && whereIs != parseInt(whereGo)+15 && whereIs != parseInt(whereGo)+6 && whereIs != parseInt(whereGo)-6 && whereIs != parseInt(whereGo)-10) {
				return false

		}
	}

	if(whereIs/8 == 1) {
		if(whereIs != parseInt(whereGo)-10 && whereIs != parseInt(whereGo)-17 && whereIs != parseInt(whereGo)-15 && whereIs != parseInt(whereGo)-6 && whereIs != parseInt(whereGo)+6 && whereIs != parseInt(whereGo)-10) {
				return false

		}
	}

	if(whereIs/8 == 0) {
		if(whereIs != parseInt(whereGo)-6 && whereIs != parseInt(whereGo)-15 && whereIs != parseInt(whereGo)-10 && whereIs != parseInt(whereGo)-17) {
				return false
		}
	}

	return true
	
}
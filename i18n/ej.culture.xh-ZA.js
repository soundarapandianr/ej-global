ej.addCulture( "xh-ZA", {
	name: "xh-ZA",
	englishName: "isiXhosa (South Africa)",
	nativeName: "isiXhosa (uMzantsi Afrika)",
	language: "xh",
	numberFormat: {
		percent: {
			pattern: ["-%n","%n"]
		},
		currency: {
			pattern: ["$-n","$ n"],
			symbol: "R"
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["iCawa","uMvulo","uLwesibini","uLwesithathu","uLwesine","uLwesihlanu","uMgqibelo"],
				namesAbbr: ["iCa.","uMv.","uLwesib.","uLwesith.","uLwesin.","uLwesihl.","uMgq."],
				namesShort: ["Ca","Mv","Lb","Lt","Ln","Lh","Mg"]
			},
			months: {
				names: ["uJanuwari","uFebuwari","uMatshi","uAprili","uMeyi","uJuni","uJulayi","uAgasti","uSeptemba","uOktobha","uNovemba","uDisemba",""],
				namesAbbr: ["uJan.","uFeb.","uMat.","uEpr.","uMey.","uJun.","uJul.","uAg.","uSep.","uOkt.","uNov.","uDis.",""]
			},
			AM: ["Ekuseni","ekuseni","EKUSENI"],
			PM: ["Emva Kwemini","emva kwemini","EMVA KWEMINI"],
			patterns: {
				d: "yyyy/MM/dd",
				D: "dd MMMM yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dd MMMM yyyy hh:mm tt",
				F: "dd MMMM yyyy hh:mm:ss tt",
				M: "d MMMM"
			}
		}
	}
});

ej.addCulture( "dsb-DE", {
	name: "dsb-DE",
	englishName: "Lower Sorbian (Germany)",
	nativeName: "dolnoserbšćina (Nimska)",
	language: "dsb",
	numberFormat: {
		pattern: ['-n'],
		",": ".",
		".": ",",
		"NaN": "njedefinowane",
		groupSizes: [3],
		negativeInfinity: "-njeskóńcnje",
		positiveInfinity: "+njeskóńcnje",
		percent: {
			pattern: ['-n%', 'n%'],
			groupSizes: [3],
			",": ".",
			".": ",",
			symbol: '%'
		},
		currency: {
			pattern: ["-n $","n $"],
			groupSizes: [3],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ". ",
			firstDay: 1,
			days: {
				names: ["njeźela","ponjeźele","wałtora","srjoda","stwórtk","pětk","sobota"],
				namesAbbr: ["nje","pon","wał","srj","stw","pět","sob"],
				namesShort: ["n","p","w","s","s","p","s"]
			},
			months: {
				names: ["januar","februar","měrc","apryl","maj","junij","julij","awgust","september","oktober","nowember","december",""],
				namesAbbr: ["jan","feb","měr","apr","maj","jun","jul","awg","sep","okt","now","dec",""]
			},
			monthsGenitive: {
				names: ["januara","februara","měrca","apryla","maja","junija","julija","awgusta","septembra","oktobra","nowembra","decembra",""],
				namesAbbr: ["jan","feb","měr","apr","maj","jun","jul","awg","sep","okt","now","dec",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"po Chr.","start":null,"offset":0}],
			patterns: {
				d: "d. M. yyyy",
				D: "dddd, d. MMMM yyyy",
				t: "HH:mm",
				T: "H:mm:ss",
				f: "dddd, d. MMMM yyyy HH:mm",
				F: "dddd, d. MMMM yyyy H:mm:ss",
				M: "d. MMMM"
			}
		}
	}
});
let table = [
	{ sym:"H", num:"1", Ar:"1,00794", oxs:[+1], ru:"Водород", la:"Hydragenium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"He", num:"2", Ar:"2,0026", oxs:[0], ru:"Гелий", la:"Helium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"Li", num:"3", Ar:"6,941", oxs:[+1], ru:"Литий", la:"Lithium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"Be", num:"4", Ar:"9,0122", oxs:[+2], ru:"Бериллий", la:"Beryllium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"B", num:"5", Ar:"10,811", oxs:[+3], ru:"Бор", la:"Borum", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"C", num:"6", Ar:"12,0107", oxs:[+4], ru:"Углерод", la:"Carboneum", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"N", num:"7", Ar:"14,0067", oxs:[+4], ru:"Азот", la:"Nitrogenium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"O", num:"8", Ar:"15,9994", oxs:[-2], ru:"Кислород", la:"Oxygenium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"F", num:"9", Ar:"18,9984", oxs:[-1], ru:"Фтор", la:"Fluorum", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Ne", num:"10", Ar:"20,1797", oxs:[+1], ru:"Неон", la:"Neon", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Na", num:"11", Ar:"22,1797", oxs:[+1], ru:"Натрий", la:"Natrium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"Mg", num:"12", Ar:"24,305", oxs:[+2], ru:"Магний", la:"Magnesium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"Al", num:"13", Ar:"26,9815", oxs:[+3], ru:"Алюминий", la:"Aluminium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Si", num:"14", Ar:"28,0855", oxs:[+4], ru:"Кремний", la:"Silicium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"P", num:"15", Ar:"30,9738", oxs:[+5], ru:"Фосфор", la:"Phosphorus", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"S", num:"16", Ar:"32,066", oxs:[+6], ru:"Сера", la:"Sulfur", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Cl", num:"17", Ar:"35,45", oxs:[+6], ru:"Хлор", la:"Chlorum", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Ar", num:"18", Ar:"39,948", oxs:[0], ru:"Аргон", la:"Argon", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"K", num:"19", Ar:"39,0983", oxs:[+1], ru:"Калий", la:"Kalium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"Ca", num:"20", Ar:"40,078", oxs:[+2], ru:"Кальций", la:"Calcium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"Sc", num:"21", Ar:"44,9559", oxs:[+3], ru:"Скандий", la:"Scandium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Ti", num:"22", Ar:"47,867", oxs:[+4], ru:"Титан", la:"Titanium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"V", num:"23", Ar:"50,9415", oxs:[+5], ru:"Ванадий", la:"Vanadium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Cr", num:"24", Ar:"51,9961", oxs:[+3], ru:"Хром", la:"Cromium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Mn", num:"25", Ar:"54,938", oxs:[+2,+4], ru:"Марганец", la:"Manganum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Fe", num:"26", Ar:"55,845", oxs:[+2,+3], ru:"Железо", la:"Ferrum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Co", num:"27", Ar:"58,9332", oxs:[+2], ru:"Кобальт", la:"Cobaltum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Ni", num:"28", Ar:"58,6934", oxs:[+2], ru:"Никель", la:"Niccolum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Cu", num:"29", Ar:"63,546", oxs:[+2], ru:"Медь", la:"Cuprum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Zn", num:"30", Ar:"65,38", oxs:[+2], ru:"Цинк", la:"Zincum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Ga", num:"31", Ar:"69,723", oxs:[+3], ru:"Галлий", la:"Gallium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Ge", num:"32", Ar:"72,63", oxs:[+4], ru:"Германий", la:"Germanium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"As", num:"33", Ar:"74,9216", oxs:[+3], ru:"Мышьяк", la:"Arsenicum", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Se", num:"34", Ar:"78,96", oxs:[+4], ru:"Селен", la:"Selenium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Br", num:"35", Ar:"79,904", oxs:[-1], ru:"Бром", la:"Bromum", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Kr", num:"36", Ar:"83,798", oxs:[+2], ru:"Криптон", la:"Krypton", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Rb", num:"37", Ar:"85,4678", oxs:[+1], ru:"Рубидий", la:"Rubidium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"Sr", num:"38", Ar:"87,62", oxs:[+2], ru:"Стронций", la:"Strontium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"Y", num:"39", Ar:"88,9059", oxs:[+3], ru:"Иттрий", la:"Yttrium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Zr", num:"40", Ar:"91,224", oxs:[+4], ru:"Цирконий", la:"Zirconium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Nb", num:"41", Ar:"92,9064", oxs:[+5], ru:"Ниобий", la:"Niobium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Mo", num:"42", Ar:"95,96", oxs:[+6], ru:"Молибден", la:"Molybdaenum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Tc", num:"43", Ar:"97,907", oxs:[+7], ru:"Технеций", la:"Technetium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Ru", num:"44", Ar:"101,07", oxs:[+4], ru:"Рутений", la:"Ruthenium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Rh", num:"45", Ar:"102,9055", oxs:[+3], ru:"Родий", la:"Rhodium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Pd", num:"46", Ar:"106,42", oxs:[+2], ru:"Палладий", la:"Palladium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Ag", num:"47", Ar:"107,8682", oxs:[+1], ru:"Серебро", la:"Argentum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Cd", num:"48", Ar:"112,411", oxs:[+2], ru:"Кадмий", la:"Cadmium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"In", num:"49", Ar:"114,818", oxs:[+3], ru:"Индий", la:"Indium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Sn", num:"50", Ar:"118,71", oxs:[+4], ru:"Олово", la:"Stannum", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Sb", num:"51", Ar:"121,76", oxs:[+3], ru:"Сурьма", la:"Stibium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Te", num:"52", Ar:"127,6", oxs:[+4], ru:"Теллур", la:"Tellurium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"I", num:"53", Ar:"126,9045", oxs:[-1], ru:"Йод", la:"Iodum", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Xe", num:"54", Ar:"131,29", oxs:[+6], ru:"Ксенон", la:"Xenon", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Cs", num:"55", Ar:"132,9055", oxs:[+1], ru:"Цезий", la:"Caesium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"Ba", num:"56", Ar:"137,327", oxs:[+2], ru:"Барий", la:"Barium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"La", num:"57", Ar:"138,9055", oxs:[+3], ru:"Лантан", la:"Lanthanum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Hf", num:"72", Ar:"178,49", oxs:[+4], ru:"Гафний", la:"Hafnium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Ta", num:"73", Ar:"180,9479", oxs:[+5], ru:"Тантал", la:"Tantalum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"W", num:"74", Ar:"183,84", oxs:[+6], ru:"Вольфрам", la:"Wolframium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Re", num:"75", Ar:"186,207", oxs:[+7], ru:"Рений", la:"Rhenium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Os", num:"76", Ar:"190,23", oxs:[+8,+4], ru:"Осмий", la:"Osmium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Ir", num:"77", Ar:"192,217", oxs:[+3,+4], ru:"Иридий", la:"Iridium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Pt", num:"78", Ar:"195,084", oxs:[+2,+4], ru:"Платина", la:"Platinum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Au", num:"79", Ar:"196,966", oxs:[+3], ru:"Золото", la:"Aurum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Hg", num:"80", Ar:"200,59", oxs:[+2], ru:"Ртуть", la:"Hydrargyrum", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Tl", num:"81", Ar:"204,3833", oxs:[+1], ru:"Таллий", la:"Thallium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Pb", num:"82", Ar:"207,2", oxs:[+2], ru:"Свинец", la:"Plumbum", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Bi", num:"83", Ar:"208,9804", oxs:[+3], ru:"Висмут", la:"Bismuthum", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Po", num:"84", Ar:"208,98", oxs:[+4], ru:"Полоний", la:"Polonium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"At", num:"85", Ar:"[210]", oxs:[+4], ru:"Астат", la:"Astatium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Rn", num:"86", Ar:"[222]", oxs:[+2], ru:"Радон", la:"Radon", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Fr", num:"87", Ar:"[223]", oxs:[+1], ru:"Франций", la:"Francium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"Ra", num:"88", Ar:"226,025", oxs:[+2], ru:"Радий", la:"Radium", cls:"s", st: {background: "#fe83b5",color: "#000"}},
	{ sym:"Ac", num:"89", Ar:"227,0278", oxs:[+3], ru:"Актиний", la:"Actinium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Rf", num:"104", Ar:"[261]", oxs:[], ru:"Резерфордий", la:"Rutherfordium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Db", num:"105", Ar:"[262]", oxs:[], ru:"Дубний", la:"Dubnium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Sg", num:"106", Ar:"[263]", oxs:[], ru:"Сиборгий", la:"Seaborgium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Bh", num:"107", Ar:"[267]", oxs:[], ru:"Борий", la:"Bohrium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Hs", num:"108", Ar:"[269]", oxs:[], ru:"Хассий", la:"Hassium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Mt", num:"109", Ar:"[278]", oxs:[], ru:"Мейтнерий", la:"Meitnerium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Ds", num:"110", Ar:"[281]", oxs:[], ru:"Дармштадтий", la:"Darmstadtium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Rg", num:"111", Ar:"[281]", oxs:[], ru:"Рентгений", la:"Roentgenium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Cn", num:"112", Ar:"[262]", oxs:[], ru:"Коперниций", la:"Copernicium", cls:"d", st: {background: "#5ca7e0",color: "#000"}},
	{ sym:"Nh", num:"113", Ar:"[283]", oxs:[], ru:"Нихоний", la:"Nihonium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Fl", num:"114", Ar:"[289]", oxs:[], ru:"Флеровий", la:"Flerovium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Mc", num:"115", Ar:"[289]", oxs:[], ru:"Московий", la:"Moscovium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Lv", num:"116", Ar:"[293]", oxs:[], ru:"Ливерморий", la:"Livermorium", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Ts", num:"117", Ar:"[294]", oxs:[], ru:"Теннессин", la:"Tennessine", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Og", num:"118", Ar:"[294]", oxs:[0], ru:"Оганесон", la:"Oganesson", cls:"p", st: {background: "#ffd737",color: "#000"}},
	{ sym:"Ce", num:"58", Ar:"140,116", oxs:[+3], ru:"Церий", la:"Cerium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Pr", num:"59", Ar:"140,9077", oxs:[+3], ru:"Празеодим", la:"Praseodymium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Nd", num:"60", Ar:"144,24", oxs:[+3], ru:"Неодим", la:"Neodymium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Pm", num:"61", Ar:"[145]", oxs:[+3], ru:"Прометий", la:"Promethium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Sm", num:"62", Ar:"150,36", oxs:[+3], ru:"Самарий", la:"Samarium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Eu", num:"63", Ar:"151,964", oxs:[+3], ru:"Европий", la:"Europium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Gd", num:"64", Ar:"157,25", oxs:[+3], ru:"Гадолиний", la:"Gadolinium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Tb", num:"65", Ar:"158,9253", oxs:[+3], ru:"Тербий", la:"Terbium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Dy", num:"66", Ar:"162,5", oxs:[+3], ru:"Диспрозий", la:"Dysprosium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Ho", num:"67", Ar:"164,9303", oxs:[+3], ru:"Гольмий", la:"Holmium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Er", num:"68", Ar:"167,26", oxs:[+3], ru:"Эрбий", la:"Erbium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Tm", num:"69", Ar:"168,9342", oxs:[+3], ru:"Тулий", la:"Thulium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Yb", num:"70", Ar:"173,045", oxs:[+3], ru:"Иттербий", la:"Ytterbium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Lu", num:"71", Ar:"174,967", oxs:[+3], ru:"Лютеций", la:"Lutetium", cls:"f-top", st: {background: "#90cd8e",color: "#000"}},
	{ sym:"Th", num:"90", Ar:"232,038", oxs:[+4], ru:"Торий", la:"Thorium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"Pa", num:"91", Ar:"231,036", oxs:[+5], ru:"Протактиний", la:"Protactinium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"U", num:"92", Ar:"238,029", oxs:[+6], ru:"Уран", la:"Uranium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"Np", num:"93", Ar:"237,048", oxs:[+5], ru:"Нептуний", la:"Neptunium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"Pu", num:"94", Ar:"[244]", oxs:[+3,+4], ru:"Плутоний", la:"Plutonium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"Am", num:"95", Ar:"[243]", oxs:[+3], ru:"Америций", la:"Americium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"Cm", num:"96", Ar:"[247]", oxs:[+3], ru:"Кюрий", la:"Curium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"Bk", num:"97", Ar:"[247]", oxs:[+3], ru:"Берклий", la:"Berkelium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"Cf", num:"98", Ar:"[251]", oxs:[+3], ru:"Калифорний", la:"Californium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"Es", num:"99", Ar:"[252]", oxs:[+3], ru:"Эйнштейний", la:"Einsteinium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"Fm", num:"100", Ar:"[257]", oxs:[+3], ru:"Фермий", la:"Fermium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"Md", num:"101", Ar:"[258]", oxs:[+3], ru:"Менделевий", la:"Mendelevium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"No", num:"102", Ar:"[259]", oxs:[+2], ru:"Нобелий", la:"Nobelium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}},
	{ sym:"Lr", num:"103", Ar:"[260]", oxs:[+3], ru:"Лоуренсий", la:"Lawrencium", cls:"f-bottom", st: {background: "#78bd62",color: "#000"}, rad: true}
];
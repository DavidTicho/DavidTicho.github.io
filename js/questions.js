// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Símbolo de Azufre",
    answer: "S",
    options: ["As<sub>2</sub>","Se","Az","S"]
  },
    {
    numb: 2,
    question: "Símbolo de Hierro",
    answer: "Fe",
    options: ["Feo","He","Fe","Hi"]
  },
    {
    numb: 3,
    question: "Símbolo de Fosforo",
    answer: "P",
    options: ["F","P","Fo","K"]
  },
    {
    numb: 4,
    question: "Símbolo de Teluro",
    answer: "Te",
    options: ["T","Tu","Te","Tl"]
  },
    {
    numb: 5,
    question: "Símbolo de Oro",
    answer: "Au",
    options: ["Ae","Au","Ou","Ea"]
  },
  {
    numb: 6,
    question: "Símbolo de Cloro",
    answer: "Cl",
    options: ["Cl","Co","Cr","C"]
  },
  {
    numb: 7,
    question: "Símbolo de Magnesio",
    answer: "Mg",
    options: ["Ma","Mc","Mg","Mh"]
  },
  {
    numb: 8,
    question: "Símbolo de Cromo",
    answer: "Cr",
    options: ["C","Co","Cu","Cr"]
  },
  {
    numb: 9,
    question: "Símbolo de Manganeso",
    answer: "Mn",
    options: ["Mg","Ma","Mn","Mo"]
  },
  {
    numb: 10,
    question: "Símbolo de Cobre",
    answer: "Cu",
    options: ["C","Cu","Co","Cb"]
  },
  {
    numb: 11,
    question: "Símbolo de Cobalto",
    answer: "Co",
    options: ["Ca","Co","Cu","Cb"]
  },
  {
    numb: 12,
    question: "Símbolo de Litio",
    answer: "Li",
    options: ["L","Lt","Li","I"]
  },
  {
    numb: 13,
    question: "Símbolo de Sodio",
    answer: "Na",
    options: ["Na","N","Sa","So"]
  },
  {
    numb: 14,
    question: "Símbolo de Potasio",
    answer: "K",
    options: ["Ka","K","Po","Ps"]
  },
  {
    numb: 15,
    question: "Símbolo de Rubidio",
    answer: "Rb",
    options: ["Ri","Rd","Rb","Ru"]
  },
  {
    numb: 16,
    question: "Símbolo de Plata",
    answer: "Ag",
    options: ["At","Ag","Pl","Pt"]
  },
  {
    numb: 17,
    question: "Símbolo de Cesio",
    answer: "Cs",
    options: ["Ce","Cs","Ci","Co"]
  },
  {
    numb: 18,
    question: "Símbolo de Francio",
    answer: "Fr",
    options: ["Fa","Fo","Fr","Fc"]
  },
  {
    numb: 19,
    question: "Nombre de NH<sub>4</sub>",
    answer: "Amonio",
    options: ["Amoniaco","Amonio","Nitrógeno","Hidrógeno"]
  },
  {
    numb: 20,
    question: "Símbolo de Calcio",
    answer: "Ca",
    options: ["Co","Ca","Cc","Cl"]
  },
  {
    numb: 21,
    question: "Símbolo de Zinc",
    answer: "Zn",
    options: ["Z","Za","Zc","Zn"]
  },
  {
    numb: 22,
    question: "Símbolo de Bario",
    answer: "Ba",
    options: ["Ba","Bo","Br","Bc"]
  },
  {
    numb: 23,
    question: "Símbolo de Berilio",
    answer: "Be",
    options: ["Bi","Bo","Br","Be"]
  },
  {
    numb: 24,
    question: "Símbolo de Cadmio",
    answer: "Cd",
    options: ["Ca","Cd","Cm","Co"]
  },
  {
    numb: 25,
    question: "Símbolo de Estroncio",
    answer: "Sr",
    options: ["Es","Er","Sr","Se"]
  },
  {
    numb: 26,
    question: "Símbolo de Radio",
    answer: "Ra",
    options: ["Ra","Rd","Ri","Ro"]
  },
  {
    numb: 27,
    question: "Símbolo de Aluminio",
    answer: "Al",
    options: ["Am","Au","An","Al"]
  },
  {
    numb: 28,
    question: "Símbolo de Escancio",
    answer: "Sc",
    options: ["Es","Ec","So","Sc"]
  },
  {
    numb: 29,
    question: "Símbolo de Galio",
    answer: "Ga",
    options: ["Ga","Gl","Ag","Go"]
  },
  {
    numb: 30,
    question: "Símbolo de Ytrio",
    answer: "Y",
    options: ["Yt","Yr","Y","Yi"]
  },
  {
    numb: 31,
    question: "Símbolo de Indio",
    answer: "In",
    options: ["I","In","Id","Io"]
  },
  {
    numb: 32,
    question: "Símbolo de Lantano",
    answer: "La",
    options: ["La","Ln","Lt","Lo"]
  },
  {
    numb: 33,
    question: "Símbolo de Actinio",
    answer: "Ac",
    options: ["At","Ac","Ct","An"]
  },
  {
    numb: 34,
    question: "Símbolo de Curio",
    answer: "Cm",
    options: ["Cr","Cu","Cm","Cn"]
  },
  {
    numb: 35,
    question: "Símbolo de Mercurio",
    answer: "Hg",
    options: ["Hc","Hg","Me","Mr"]
  },
  {
    numb: 36,
    question: "Símbolo de Talio",
    answer: "Tl",
    options: ["Ta","To","Tl","Ti"]
  },
  {
    numb: 37,
    question: "Símbolo de Niquel",
    answer: "Ni",
    options: ["Nq","Ni","Nl","Nu"]
  },
  {
    numb: 38,
    question: "Símbolo de Samario",
    answer: "Sm",
    options: ["Sa","Sm","Sr","Sc"]
  },
  {
    numb: 39,
    question: "Símbolo de Europio",
    answer: "Eu",
    options: ["Er","Ep","Eu","Ec"]
  },
  {
    numb: 40,
    question: "Símbolo de Yterbio",
    answer: "Yb",
    options: ["Yt","Yr","Yb","Yo"]
  },
  {
    numb: 41,
    question: "Símbolo de Plomo",
    answer: "Pb",
    options: ["Pl","Po","Pm","Pb"]
  },
  {
    numb: 42,
    question: "Símbolo de Germanio",
    answer: "Ge",
    options: ["Ga","Gr","Gm","Ge"]
  },
  {
    numb: 43,
    question: "Símbolo de Estaño",
    answer: "Sn",
    options: ["Sn","St","Es","Et"]
  },
  {
    numb: 44,
    question: "Símbolo de Platino",
    answer: "Pt",
    options: ["Pa","Pl","Pn","Pt"]
  },
  {
    numb: 45,
    question: "Símbolo de Polonio",
    answer: "Po",
    options: ["Pl","Pn","Po","Pc"]
  },
];
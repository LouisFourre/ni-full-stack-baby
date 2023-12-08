const quiz = [{


    q : "Quelle est la capitale de la France ?",
    br : "Paris",
    r1 : "Lyon",
    r2 : "Marseille",
    r3 : "Toulouse",
    desc : "Paris est la capitale de la France",
},
{
    q : "Quelle est la capitale de l'Allemagne ?",
    br : "Berlin",
    r1 : "Munich",
    r2 : "Hambourg",
    r3 : "Cologne",
    desc : "Berlin est la capitale de l'Allemagne",


},
{

    q : "Quelle est la capitale de l'espagne' ?",
    br : "Madrid",
    r1 : "Barcelone",
    r2 : "Seville",
    r3 : "Valence",
    desc : "Madrid est la capitale de l'espagne",

},
{
    q : "Quelle est la capitale de l'Italie ?",
    br : "Rome",
    r1 : "Milan",
    r2 : "Turin",
    r3 : "Naples",
    desc : "Rome est la capitale de l'Italie",
}
];

export default async function handler(req, res) {
    res.status(200).json(
        quiz[Math.floor(Math.random() * (quiz.length-1))]



    );
}   
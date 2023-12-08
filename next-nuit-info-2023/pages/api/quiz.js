const quiz = [
{
    q : "Selon le nouveau rapport du 4 avril 2022, que devront faire les émissions mondiales de gaz à effet de serre à partir de 2025?",
    br : "Baisser",
    r1 : "Augmenter",
    r2 : "Maintenir le même niveau",
    r3 : "Disparaître",
    desc : "Les émissions mondiales de gaz à effet de serre devront baisser à partir de 2025, selon le nouveau rapport du 4 avril 2022.",
},
{

    q :"Quel secteur émet le plus de gaz à effet de serre en France?",
    br : "Les transports",
    r1 : "L'industrie",
    r2 : "L'agriculture",
    r3 : "Les bâtiments",
    desc : "les transports représentent le premier secteur émetteur de gaz à effet de serre en France, avec 26% des émissions.",

},
{
    q :  "Quelle est l'action recommandée par le GIEC pour réduire l'empreinte carbone liée à la mobilité urbaine?",
    br : "Réorganiser les zones urbaines",
    r1 : "Investir massivement",
    r2 : "Développer de nouvelles technologies",
    r3 :  "Éliminer le trafic aérien",
    desc : "Le GIEC recommande une réorganisation des zones urbaines pour réduire la consommation de carburant liée au transport urbain d'environ 25 %.",
},
{
    q : "Quel est le principal gaz à effet de serre?",
    br : "Dioxyde de carbone",
    r1 : "Méthane",
    r2 : "Protoxyde d'azote",
    r3 : "Ozone",
    desc : "Le dioxyde de carbone est le principal gaz à effet de serre.",

},
{
    q : "Quel secteur est responsable à lui seul de 2,9% des émissions anthropiques de CO2?",
    br : "L'aviation",
    r1 : "L'agriculture",
    r2 : "Les transports",
    r3 : "L'industrie",
    desc : "L'aviation est responsable à elle seule de 2,9% des émissions anthropiques de CO2.",
},
{
    q :  "que devrait-on faire pour réduire au moins de moitié les émissions d'ici à 2025?",
    br : "Transformation des modes de vie, développement des technologies, fin des énergies fossiles, modification de l'alimentation, adaptation des transports, coopération internationale",
    r1 : "Augmenter la consommation d'énergies fossiles",
    r2 : "Ignorer les technologies disponibles",
    r3 : "Continuer avec les modes de vie actuels",
    desc : "Pour réduire au moins de moitié les émissions d'ici à 2025, il faut transformer les modes de vie, développer les technologies, mettre fin aux énergies fossiles, modifier l'alimentation, adapter les transports et coopérer internationalement.",

},
{
    q : "Qu'est-ce qui est nécessaire pour atteindre la neutralité carbone en 2050?",
    br : "Sortir des énergies fossiles, réduire la consommation de charbon, de pétrole et de gaz, et ne pas construire de nouvelles infrastructures de production d'énergies fossiles",
    r1 : "Augmenter la consommation d'énergies fossiles",
    r2 : "Continuer avec les énergies fossiles existantes",
    r3 : "Construire de nouvelles infrastructures de production d'énergies fossiles",
    desc : "Pour atteindre la neutralité carbone en 2050, il faut sortir des énergies fossiles, réduire la consommation de charbon, de pétrole et de gaz, et ne pas construire de nouvelles infrastructures de production d'énergies fossiles.",
},
{
    q : "Que recommande le GIEC concernant les investissements financiers pour l'atténuation du changement climatique?",
    br : "Investir massivement et rapidement",
    r1 : "Réduire les investissements",
    r2 : "Investir de manière lente et progressive",
    r3 : "Ne pas investir du tout",
    desc : "Le GIEC recommande d'investir massivement et rapidement pour l'atténuation du changement climatique.",
},
{ 
    q : "Quelles sont les étapes clés pour programmer des écogestes?",
    br : "Faire un état des lieux initial, définir les écogestes du quotidien, automatiser et programmer les écogestes, surveiller la consommation d'énergie et le baromètre écogaz, impliquer les occupants du logement/local",
    r1 : "Ignorer l'état des lieux initial",
    r2 : "Ne pas définir les écogestes du quotidien",
    r3 : "Ne pas surveiller la consommation d'énergie",
    desc : "Les étapes clés pour programmer des écogestes sont : faire un état des lieux initial, définir les écogestes du quotidien, automatiser et programmer les écogestes, surveiller la consommation d'énergie et le baromètre écogaz, impliquer les occupants du logement/local.",

}
];

export default async function handler(req, res) {
    res.status(200).json(
        quiz[Math.floor(Math.random() * (quiz.length-1))]



    );
}   
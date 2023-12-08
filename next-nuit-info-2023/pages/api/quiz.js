const quiz = [
{
    question: "Selon le nouveau rapport du 4 avril 2022, que devront faire les émissions mondiales de gaz à effet de serre à partir de 2025?",
    bonneReponse: "Baisser",
    reponse1: "Augmenter",
    reponse2: "Maintenir le même niveau",
    reponse3: "Disparaître",
    description: "Les émissions mondiales de gaz à effet de serre devront baisser à partir de 2025, selon le nouveau rapport du 4 avril 2022.",
},
{

    question:"Quel secteur émet le plus de gaz à effet de serre en France?",
    bonneReponse: "Les transports",
    reponse1: "L'industrie",
    reponse2: "L'agriculture",
    reponse3: "Les bâtiments",
    description: "les transports représentent le premier secteur émetteur de gaz à effet de serre en France, avec 26% des émissions.",

},
{
    question:  "Quelle est l'action recommandée par le GIEC pour réduire l'empreinte carbone liée à la mobilité urbaine?",
    bonneReponse: "Réorganiser les zones urbaines",
    reponse1: "Investir massivement",
    reponse2: "Développer de nouvelles technologies",
    reponse3:  "Éliminer le trafic aérien",
    description: "Le GIEC recommande une réorganisation des zones urbaines pour réduire la consommation de carburant liée au transport urbain d'environ 25 %.",
},
{
    question: "Quel est le principal gaz à effet de serre?",
    bonneReponse: "Dioxyde de carbone",
    reponse1: "Méthane",
    reponse2: "Protoxyde d'azote",
    reponse3: "Ozone",
    description: "Le dioxyde de carbone est le principal gaz à effet de serre.",

},
{
    question: "Quel secteur est responsable à lui seul de 2,9% des émissions anthropiques de CO2?",
    bonneReponse: "L'aviation",
    reponse1: "L'agriculture",
    reponse2: "Les transports",
    reponse3: "L'industrie",
    description: "L'aviation est responsable à elle seule de 2,9% des émissions anthropiques de CO2.",
},
{
    question:  "que devrait-on faire pour réduire au moins de moitié les émissions d'ici à 2025?",
    bonneReponse: "Transformation des modes de vie, développement des technologies, fin des énergies fossiles, modification de l'alimentation, adaptation des transports, coopération internationale",
    reponse1: "Augmenter la consommation d'énergies fossiles",
    reponse2: "Ignorer les technologies disponibles",
    reponse3: "Continuer avec les modes de vie actuels",
    description: "Pour réduire au moins de moitié les émissions d'ici à 2025, il faut transformer les modes de vie, développer les technologies, mettre fin aux énergies fossiles, modifier l'alimentation, adapter les transports et coopérer internationalement.",

},
{
    question: "Qu'est-ce qui est nécessaire pour atteindre la neutralité carbone en 2050?",
    bonneReponse: "Sortir des énergies fossiles, réduire la consommation de charbon, de pétrole et de gaz, et ne pas construire de nouvelles infrastructures de production d'énergies fossiles",
    reponse1: "Augmenter la consommation d'énergies fossiles",
    reponse2: "Continuer avec les énergies fossiles existantes",
    reponse3: "Construire de nouvelles infrastructures de production d'énergies fossiles",
    description: "Pour atteindre la neutralité carbone en 2050, il faut sortir des énergies fossiles, réduire la consommation de charbon, de pétrole et de gaz, et ne pas construire de nouvelles infrastructures de production d'énergies fossiles.",
},
{
    question: "Que recommande le GIEC concernant les investissements financiers pour l'atténuation du changement climatique?",
    bonneReponse: "Investir massivement et rapidement",
    reponse1: "Réduire les investissements",
    reponse2: "Investir de manière lente et progressive",
    reponse3: "Ne pas investir du tout",
    description: "Le GIEC recommande d'investir massivement et rapidement pour l'atténuation du changement climatique.",
},
{ 
    question: "Quelles sont les étapes clés pour programmer des écogestes?",
    bonneReponse: "Faire un état des lieux initial, définir les écogestes du quotidien, automatiser et programmer les écogestes, surveiller la consommation d'énergie et le baromètre écogaz, impliquer les occupants du logement/local",
    reponse1: "Ignorer l'état des lieux initial",
    reponse2: "Ne pas définir les écogestes du quotidien",
    reponse3: "Ne pas surveiller la consommation d'énergie",
    description: "Les étapes clés pour programmer des écogestes sont : faire un état des lieux initial, définir les écogestes du quotidien, automatiser et programmer les écogestes, surveiller la consommation d'énergie et le baromètre écogaz, impliquer les occupants du logement/local.",

}
];

export default async function handler(req, res) {
    res.status(200).json(
        quiz[Math.floor(Math.random() * (quiz.length-1))]



    );
}   
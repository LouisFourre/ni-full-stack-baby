import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const columns = [
  { id: 'cours', label: 'Cours', minWidth: 250 },
  { id: 'vraiFaux', label: 'Vrai/Faux', minWidth: 100 },
  { id: 'source', label: 'Source', minWidth: 100 },
];

function createData(cours, vraiFaux, source) {
  return { cours, vraiFaux, source };
}

// Liste des anecdotes
const rows = [
  // 1
  createData('La France n\'est pas un pays très touché par le réchauffement climatique par rapport au pays d\'Amérique', 
              'Faux', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 2
  createData('Les pays du Sud sont plus impacté par les effets néfastes du réchauffement.', 
              'Vrai', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 3
  createData('Depuis la période 1850-1900 d’après le dernier rapport du Haut conseil pour le climat. À l’échelle mondiale, ce réchauffement est estimé à +1,1°C', 
              'Vrai', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 4
  createData('Les périodes de canicule sont de plus en plus chaudes, plus fréquentes mais moins longues.', 
              'Faux', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 5
  createData('Les zones urbaines sont particulièrement concernées par le réchauffement climatique, avec un écart qui peut aller jusqu’à +12°C entre les zones rurales et les plus grandes villes.', 
              'Vrai', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 6
  createData('La chaleur peut entraîner de graves conséquences pour la santé : on estime que 35 % des morts liées à la chaleur durant l’été entre 1991 et 2018 sont imputables au changement climatique.', 
              'Vrai', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 7
  createData('Les régions sèches, comme le sud de la France, le seront davantage dans le futur, avec des répercussions importantes sur l’agriculture, la biodiversité, les forêts… Avec un réchauffement de +2°C, plus d’un tiers de la population de cette zone pourrait manquer d’eau.', 
              'Vrai', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 8
  createData('À cause du réchauffement climatique les pertes de récoltes (dans le domaine de l\'agriculture) ont quadruplé en Europe au cours des 60 dernières années et continueront d’augmenter', 
              'Faux', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 9
  createData('Avec ses 5 800 km de côte (en métropole), la France est l’un des pays européens les moins menacés par les inondations côtières', 
              'Faux', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 10
  createData('Du au innondation, le nombre de personnes vivant dans des zones à risque en France est de 900 000 personnes actuellement, et pourrait passer à 1.7 million d’ici la fin du siècle si les émissions sont élevées.', 
              'Vrai', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 11
  createData('Les énergies fossiles sont la solutions pour attténuer le réchauffement climatique.', 
              'Faux', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 12
  createData('Nous pouvons végétaliser les villes pour y limiter l’impact de la chaleur.', 
              'Vrai', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 13
  createData('Les régions d’Outre-mer sont, en France, les plus exposées.', 
              'Vrai', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 14
  createData('Les écosystèmes, particulièrement riches, sont également en grand danger : au-dessus de +3,5°C, les coraux dépériront, avec de graves conséquences sur l’accès à l’alimentation dans certains territoires.', 
              'Faux', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 15
  createData('En plus des risques cités ci-dessus (chaleur, sécheresse, pertes agricoles…), la région Auvergne-Rhône-Alpes est exposée aux risques qui concernent les zones montagneuses, notamment la fonte des glaciers et les conséquences qui en découlent.', 
              'Vrai', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 16
  createData('En revanche, le Centre-Val de Loire est moins affecter par les grosses chaleurs et donc les nappes phréatiques sont remplis.', 
              'Faux', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 17
  createData('L’Île-de-France est la région la plus urbanisée de France : elle est donc particulièrement exposées aux épisodes de chaleurs extrêmes, notamment à cause de l’effet « îlot de chaleur urbain » qui peut entraîner jusqu’à 10 degrés d’écart entre une ville et sa périphérie rurale. Des solutions simples et efficaces sont pourtant à notre portée pour adapter nos villes aux conditions climatiques actuelles et à venir !', 
              'Vrai', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 18
  createData('Si la majorité des feux de forêts sont déclenchés par des humains (de façon accidentelle ou criminelle), le changement climatique accentue très fortement le risque d’incendies : il réunit toutes les conditions propices aux départs de feux, à leur maintien et leur propagation. Résultat : on observe des incendies plus intenses, plus souvent, plus étendus, plus tôt (et plus tard) dans l’année, et dans plus de régions de France. La région Provence-Alpes-Côte d’Azur, à moitié recouverte de forêts, est directement exposée à ce risque qui entraîne de nombreuses répercussions.', 
              'Vrai', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 19
  createData('À Mayotte, la ressource en eau est limitée, notamment à cause de plusieurs facteurs humains : la déforestation (qui perturbe le cycle de l’eau), un réseau de distribution fragile et qui n’a pas été adapté à la forte augmentation de population, des mesures politiques peu ambitieuses et en retard sur leur application… alors quand un déficit de pluie survient, le système craque, privant les habitants du droit fondamental d’accès à l’eau. Problème : avec le changement climatique, les sécheresses se multiplient et ce genre d’épisodes risque de se reproduire de plus en plus régulièrement.', 
              'Vrai', 
              'https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/'),

  // 20
  createData('Si nous n’agissons pas aujourd’hui, il sera trop tard pour limiter le réchauffement de la planète à 0,5°C ', 
              'Faux', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 21
  createData('Selon le nouveau rapport du 4 avril 2022, les émissions mondiales de gaz à effet de serre devront baisser à partir de 2025, sans quoi il sera impossible de limiter le réchauffement de la planète à 0,5°C.', 
              'Faux', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 22
  createData('La mauvaise nouvelle, c’est que les émissions mondiales de gaz à effet de serre (GES) ont continué à augmenter jusqu’en 2019. Celles de la décennie 2010-2019 ont atteint un niveau record dans l’histoire de l’humanité', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 23
  createData('La bonne nouvelle, c’est que les solutions existent. D’après le GIEC, « dans tous les secteurs, nous disposons de solutions pour réduire au moins de moitié les émissions d’ici à 2025 »', 
              'Faux', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 24
  createData('Parmi les mesures à mettre en place, le rapport met en avant la transformation des modes de vie, le développement et l’exploitation des technologies disponibles, la fin des énergies fossiles au profit des renouvelables, la modification de notre alimentation, l’adaptation de nos modes de transports ainsi qu’une forte coopération internationale.', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 25
  createData('Si nous opérons les bons choix en matière de politique, d’infrastructures et de technologies, nous pourrons changer nos modes de vie et nos comportements, avec à la clé une diminution de 40 à 70 % des émissions de gaz à effet de serre d’ici à 2045 ».', 
              'Faux', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 26
  createData('Le rapport classe les stratégies d’atténuation basées sur la demande en trois options : “Éviter – Changer – Améliorer”', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 27
  createData('Outre la réduction des émissions de gaz à effet de serre, l’autre versant de l’atténuation du changement climatique est l’élimination du carbone existant dans l’atmosphère. Ce procédé passe par la plantation d’arbres ou l’utilisation de technologies permettant la capture et le stockage du carbone.', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 28
  createData('Plus nous émettons de GES, moins nous serons dépendants de ces technologies dans le futur, d’où l’importance de concentrer tous nos efforts sur la réduction de nos émissions.', 
              'Faux', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 29
  createData('Les énergies renouvelables offrent une solution concrète et réalisable pour limiter nos émissions de gaz à effet de serre.', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 30
  createData('Il est nécessaire d’atteindre la neutralité carbone en 2050 pour limiter le réchauffement à +1,5°C. Pour cela, le rapport décrit l’urgence à sortir des énergies fossiles : les scénarios qui permettent d’atteindre cet objectif impliquent une réduction de la consommation de charbon de 95%, ainsi que de 60% pour le pétrole et de 45% pour le gaz, en 2050 par rapport à l’année 2019. Enfin, aucune nouvelle infrastructure de production d’énergies fossiles ne doit être construite.', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 31
  createData('Les progrès technologiques réalisés au cours de ces dernières années ne rendent toujours pas possible la décarbonation de l’industrie.', 
              'Faux', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 32
  createData('Décarboner l’industrie est donc désormais possible, à condition de choix politiques permettant une véritable transformation du secteur.', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 33
  createData('Les pratiques agroécologiques (réduction de l’utilisation d’engrais de synthèse, diversification des cultures, meilleure gestion des déjections animales…) permettent de limiter les émissions de gaz à effet de serre, de mieux stocker le CO2 dans les sols et apportent de multiples autres bénéfices : protection de la biodiversité, meilleure qualité de l’eau, de l’air et des sols, sécurité alimentaire…', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 34
  createData('Les forêts et écosystèmes absorbent du carbone, il est donc important de les protéger et de lutter contre la déforestation. Toutefois, cela ne pourra pas compenser la réduction des émissions, qui doit rester la priorité dans tous les secteurs.', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 35
  createData('Le GIEC confirme par ailleurs que le passage à des régimes alimentaires riches en protéines végétales (légumes secs, céréales) et pauvres en viande et en produits laitiers permettent une forte réduction des émissions de GES.', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 36
  createData('Les transports représentent le premier secteur émetteur de gaz à effet de serre en France (26%) et sont responsables d’un quart des émissions mondiales : leur décarbonation est donc un enjeu majeur dans la lutte contre le changement climatique.', 
              'Faux', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 37
  createData('Parmi les actions identifiées par le GIEC dans tous les secteurs pour réduire les émissions de gaz à effet de serre en transformant les comportements individuels, celles qui concernent la mobilité sont celles qui présentent le plus grand potentiel de réduction de l’empreinte carbone.', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 38
  createData('À l’échelle des villes, une réorganisation des zones urbaines permettrait de réduire la consommation de carburant liée au transport urbain d’environ 25 %, notamment grâce à des infrastructures de transport moins dépendantes de la voiture et à un rapprochement entre le domicile et le lieu de vie.', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 39
  createData('Concernant l’aviation, responsable à elle seule de 2,9% des émissions anthropiques de CO2, le GIEC rapporte qu’aucune amélioration en termes d’efficacité énergétique ne permettra de suivre le rythme de la croissance prévue du transport aérien.', 
              'Faux', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 40
  createData('La limitation du trafic resterait donc le moyen le plus efficace pour réduire les émissions du secteur.', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 41
  createData('Pour réaliser toutes ces transformations, le rapport montre que les investissements financiers déployés à l’international sont largement insuffisants : ils devraient être multipliés par un facteur de 3 à 4, si l’on veut limiter le réchauffement à +2°C', 
              'Faux', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 42
  createData('Il est nécessaire d’investir massivement et rapidement pour l’atténuation du changement climatique. Cela représente un défi majeur pour les pays en développement, dont la participation au réchauffement est moindre : le GIEC rapporte que les 10 % des ménages avec les revenus les plus élevés contribuent de 34 % à 45 % aux émissions globales', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 43
  createData('Ayant une plus grande responsabilité dans les émissions de CO2 et une capacité d’action plus grande, les pays développés doivent apporter un soutien financier de plus de 100 milliards de dollars par an aux pays en développement, selon le GIEC.', 
              'Vrai', 
              'https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/'),

  // 44
  createData('Les écogestes, ça se programme : les 5 étapes clés : Faire un état des lieux initial, Définir les écogestes du quotidien, Pour une efficacité à coup sûr des écogestes, les automatiser et les programmer, Surveiller la consommation d’énergie et le baromètre écogaz, Impliquer les occupants du logement/local', 
              'Vrai', 
              'https://presse.ademe.fr/2023/11/sobriete-des-ecogestes-accessibles-a-tous-pour-reduire-sa-consommation-et-sa-facture-de-gaz.html'),

  // 45
  createData('Des offres gaz verts accessibles à tous Produit à partir de déchets agricoles ou de biodéchets des ménages chauffés dans des méthaniseurs, le gaz vert représente dès à présent la consommation annuelle de 2,7 millions de logements neufs chauffés au gaz.', 
              'Vrai', 
              'https://presse.ademe.fr/2023/11/sobriete-des-ecogestes-accessibles-a-tous-pour-reduire-sa-consommation-et-sa-facture-de-gaz.html'),

  // 46
  createData('L\'activité principale du GIEC est la préparation de rapports évaluant l\'état des connaissances sur le changement climatique. Il s\'agit notamment de rapports d\'évaluation, de rapports spéciaux et de rapports méthodologiques.', 
              'Vrai', 
              'https://www.ipcc.ch/'),

  // 47
  createData('C\'est au Canada que se trouve la grande ville la plus polluée au monde : Calgary.', 
              'Faux', 
              'https://www.liligo.fr/magazine-voyage/top-destinations-moins-polluees-monde-163783.html#:~:text=C\'est%20au%20Canada%20que,canadien%20est%20le%20plus%20pur.'),

  // 48
  createData('Selon le rapport du GEIC (2013), le niveau moyen des mers s\'est élevé de 9 cm entre 1901 et 2010. Le taux moyen d\'élévation était d’environ 1,7 mm/an au cours du 20ème siècle. Ce taux est passé à environ 3,2 mm/an entre 1993 et 2010.', 
              'Faux', 
              'https://climat.be/changements-climatiques/changements-observes/oceans#:~:text=Le%20niveau%20des%20mers%20s\'%C3%A9l%C3%A8ve&text=Le%20taux%20moyen%20d\'%C3%A9l%C3%A9vation,an%20entre%201993%20et%202010.'),

  // 49
  createData('Il y a plus de vingt millions de kilomètres cubes de glace sur Terre, et certains scientifiques affirment qu\'il faudrait moins de 2 000 ans pour qu\'elle fonde dans son intégralité.', 
              'Faux', 
              'https://www.nationalgeographic.fr/environnement/voici-quoi-ressemblerait-le-monde-si-la-glace-continentale-venait-fondre#:~:text=Il%20y%20a%20plus%20de,elle%20fonde%20dans%20son%20int%C3%A9gralit%C3%A9.'),

  // 50
  createData('135 000 personnes sont mortes à cause de la pollution dans la ville de Lahore au Pakistan en 2018.', 
              'Vrai', 
              'https://www.youtube.com/watch?v=Sb7GIK9lsiE'),
];

export default function TableauCours() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useTheme();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 900 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: 'bold',
                    backgroundColor: theme.palette.green.dark,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, index) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.id === 'source' ? (
                      // Bouton de redirection vers les sources
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.open(row[column.id], '_blank')}
                      >
                        Voir la source
                      </Button>
                    ) : (
                      row[column.id]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
      </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Anecdotes par page"
      />
    </Paper>
  );
}

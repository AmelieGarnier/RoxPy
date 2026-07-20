// PyRenard — Zones 1 à 13 : La Clairière des Bases + La Forêt des Structures
export const ZONES_A = [
{
id: 1, titre: "Premiers pas", icone: "🌱", region: 0,
lecon: [
["p","Bienvenue dans la Clairière des Bases ! En Python, on affiche du texte avec la fonction print(). Tout ce qui est entre guillemets est une chaîne de caractères."],
["c","print(\"Bonjour !\")\nprint('Les guillemets simples marchent aussi')"],
["p","Les lignes qui commencent par # sont des commentaires : Python les ignore. Elles servent à expliquer ton code."],
["c","# Ceci est un commentaire\nprint(\"Le renard te salue\")  # commentaire en fin de ligne"]
],
ex: [
{t:"Premier glapissement", p:"Utilise print() pour afficher exactement : Bonjour, je suis un renard !",
starter:"# Affiche : Bonjour, je suis un renard !\n",
test:"assert \"Bonjour, je suis un renard !\" in _out, \"Le texte exact n'apparaît pas. Vérifie la ponctuation et les majuscules.\"",
hints:["print() affiche ce que tu mets entre ses parenthèses.","Le texte doit être entre guillemets : print(\"...\").","N'oublie pas la virgule et le point d'exclamation."],
sol:"print(\"Bonjour, je suis un renard !\")"},
{t:"Plusieurs valeurs", p:"print() peut afficher plusieurs valeurs séparées par des virgules. L'option sep change le séparateur. Affiche Renard-roux-rusé en passant les trois mots à print() avec sep=\"-\".",
starter:"# Affiche : Renard-roux-rusé\nprint(\"Renard\", \"roux\", \"rusé\")\n",
test:"assert \"Renard-roux-rusé\" in _out, \"On attend Renard-roux-rusé (avec des tirets). Utilise sep='-'.\"",
hints:["Ajoute un argument sep=\"-\" à la fin de print().","print(\"a\", \"b\", sep=\"-\") affiche a-b.","print(\"Renard\", \"roux\", \"rusé\", sep=\"-\")"],
sol:"print(\"Renard\", \"roux\", \"rusé\", sep=\"-\")"}
],
quiz: [
{q:"Que fait la fonction print() ?", opts:["Elle imprime sur papier","Elle affiche du texte à l'écran","Elle enregistre un fichier"], a:1},
{q:"Comment écrit-on un commentaire en Python ?", opts:["// commentaire","<!-- commentaire -->","# commentaire"], a:2},
{q:"Laquelle de ces lignes est correcte ?", opts:["print \"Salut\"","print(\"Salut\")","print(Salut)"], a:1}
],
boss: {t:"La carte d'identité", p:"Affiche la carte d'identité de ton renard sur 3 lignes exactement :\nNom : Pixel\nEspèce : Renard roux\nNiveau : 1",
starter:"# 3 lignes, 3 print()\n",
test:"assert \"Nom : Pixel\" in _out, \"Il manque la ligne 'Nom : Pixel'.\"\nassert \"Espèce : Renard roux\" in _out, \"Il manque la ligne 'Espèce : Renard roux'.\"\nassert \"Niveau : 1\" in _out, \"Il manque la ligne 'Niveau : 1'.\"",
hints:["Un print() par ligne.","Attention aux espaces autour des deux-points : 'Nom : Pixel'.","print(\"Nom : Pixel\") puis les deux autres lignes."],
sol:"print(\"Nom : Pixel\")\nprint(\"Espèce : Renard roux\")\nprint(\"Niveau : 1\")"}
},
{
id: 2, titre: "Variables", icone: "📦", region: 0,
lecon: [
["p","Une variable est une boîte avec un nom, dans laquelle on range une valeur. On la crée avec le signe = (l'affectation)."],
["c","nom = \"Pixel\"\nage = 3\nprint(nom, age)   # Pixel 3"],
["p","Le nom d'une variable s'écrit en minuscules, sans espaces ni accents, avec des _ pour séparer les mots : vitesse_max, nb_pommes. Une variable peut changer de valeur à tout moment."]
],
ex: [
{t:"Ta première boîte", p:"Crée une variable animal contenant \"renard\" et une variable pattes contenant 4, puis affiche-les avec print(animal, pattes).",
starter:"# Crée animal et pattes, puis affiche-les\n",
test:"assert animal == \"renard\", \"La variable animal doit contenir 'renard'.\"\nassert pattes == 4, \"La variable pattes doit contenir 4 (sans guillemets : c'est un nombre).\"\nassert \"renard\" in _out, \"Pense à afficher les variables avec print().\"",
hints:["animal = \"renard\" crée la variable.","pattes = 4 sans guillemets : c'est un nombre.","Termine par print(animal, pattes)."],
sol:"animal = \"renard\"\npattes = 4\nprint(animal, pattes)"},
{t:"L'échange de terriers", p:"Deux renards échangent leurs terriers ! Échange les valeurs de a et b (a doit finir à 12, b à 5). Astuce Python : on peut échanger en une ligne.",
starter:"a = 5\nb = 12\n# échange les valeurs de a et b\n",
test:"assert a == 12, \"a devrait valoir 12 après l'échange.\"\nassert b == 5, \"b devrait valoir 5 après l'échange.\"",
hints:["Avec une variable temporaire : temp = a, puis a = b, puis b = temp.","Python permet mieux : affectation multiple avec une virgule.","a, b = b, a"],
sol:"a = 5\nb = 12\na, b = b, a"}
],
quiz: [
{q:"Que fait l'instruction x = 10 ?", opts:["Elle compare x à 10","Elle range 10 dans la variable x","Elle affiche 10"], a:1},
{q:"Quel nom de variable est valide ?", opts:["2pommes","nb pommes","nb_pommes"], a:2},
{q:"Après x = 3 puis x = x + 1, que vaut x ?", opts:["3","4","x + 1"], a:1}
],
boss: {t:"La course du renard", p:"Un renard court à 25 km/h pendant 3 heures. Crée les variables vitesse et duree, calcule distance = vitesse * duree, puis affiche : Le renard a parcouru 75 km",
starter:"# vitesse, duree, distance... puis print\n",
test:"assert distance == 75, \"distance doit valoir vitesse * duree = 75.\"\nassert \"75\" in _out and \"km\" in _out, \"Affiche la phrase avec la distance et 'km'.\"",
hints:["vitesse = 25 et duree = 3.","distance = vitesse * duree","print(\"Le renard a parcouru\", distance, \"km\")"],
sol:"vitesse = 25\nduree = 3\ndistance = vitesse * duree\nprint(\"Le renard a parcouru\", distance, \"km\")"}
},
{
id: 3, titre: "Nombres & opérateurs", icone: "🔢", region: 0,
lecon: [
["p","Python connaît les entiers (int) comme 42 et les décimaux (float) comme 3.14. Les opérateurs : + - * / mais aussi // (division entière), % (reste de la division) et ** (puissance)."],
["c","print(7 / 2)    # 3.5\nprint(7 // 2)   # 3 (division entière)\nprint(7 % 2)    # 1 (le reste)\nprint(2 ** 10)  # 1024 (puissance)"],
["p","round(x, n) arrondit x à n décimales. La fonction abs(x) donne la valeur absolue."]
],
ex: [
{t:"Le partage des pommes", p:"9 pommes à partager entre 4 renards. Calcule chacun (combien de pommes entières par renard) et reste (pommes restantes) avec // et %.",
starter:"pommes = 9\nrenards = 4\n# chacun = ..., reste = ...\n",
test:"assert chacun == 2, \"chacun = pommes // renards devrait valoir 2.\"\nassert reste == 1, \"reste = pommes % renards devrait valoir 1.\"",
hints:["// donne le quotient entier de la division.","% donne le reste de la division.","chacun = pommes // renards et reste = pommes % renards"],
sol:"pommes = 9\nrenards = 4\nchacun = pommes // renards\nreste = pommes % renards\nprint(chacun, reste)"},
{t:"Puissance de calcul", p:"Calcule surface, l'aire d'un carré de côté 7 (avec **), et cercle, l'aire d'un disque de rayon 3 avec pi = 3.14159, arrondie à 2 décimales avec round().",
starter:"pi = 3.14159\n# surface = ..., cercle = ...\n",
test:"assert surface == 49, \"surface = 7 ** 2 devrait valoir 49.\"\nassert cercle == 28.27, \"cercle = round(pi * 3 ** 2, 2) devrait valoir 28.27.\"",
hints:["Le carré de 7 s'écrit 7 ** 2.","L'aire d'un disque : pi * rayon ** 2.","cercle = round(pi * 3 ** 2, 2)"],
sol:"pi = 3.14159\nsurface = 7 ** 2\ncercle = round(pi * 3 ** 2, 2)\nprint(surface, cercle)"}
],
quiz: [
{q:"Que vaut 10 % 3 ?", opts:["3","1","3.33"], a:1},
{q:"Que vaut 2 ** 3 ?", opts:["6","8","9"], a:1},
{q:"Quel est le type de 3.0 ?", opts:["int","float","str"], a:1}
],
boss: {t:"L'horloge du terrier", p:"Un renard a dormi 200 minutes. Convertis en heures et minutes : heures = 3, minutes = 20. Puis affiche : 3 h 20 min",
starter:"total = 200\n# heures = ..., minutes = ...\n",
test:"assert heures == 3, \"heures = total // 60 devrait valoir 3.\"\nassert minutes == 20, \"minutes = total % 60 devrait valoir 20.\"\nassert \"3\" in _out and \"20\" in _out, \"Affiche le résultat.\"",
hints:["Une heure = 60 minutes.","heures = total // 60","minutes = total % 60"],
sol:"total = 200\nheures = total // 60\nminutes = total % 60\nprint(heures, \"h\", minutes, \"min\")"}
},
{
id: 4, titre: "Chaînes de caractères", icone: "🔤", region: 0,
lecon: [
["p","Une chaîne (str) est un texte entre guillemets. On peut les additionner (concaténer), les répéter, mesurer leur longueur avec len(), et les transformer avec .upper(), .lower(), .capitalize()."],
["c","cri = \"glap\"\nprint(cri.upper())      # GLAP\nprint(cri * 3)          # glapglapglap\nprint(len(cri))         # 4"],
["p","Les f-strings permettent de glisser des variables dans un texte : on préfixe la chaîne par f et on met les variables entre accolades."],
["c","nom = \"Pixel\"\nage = 3\nprint(f\"{nom} a {age} ans\")   # Pixel a 3 ans"]
],
ex: [
{t:"Le cri du renard", p:"Crée cri = \"glapissement\". Calcule taille (sa longueur avec len) et crie (le cri en majuscules avec .upper()).",
starter:"cri = \"glapissement\"\n# taille = ..., crie = ...\n",
test:"assert taille == 12, \"taille = len(cri) devrait valoir 12.\"\nassert crie == \"GLAPISSEMENT\", \"crie = cri.upper() : tout en majuscules.\"",
hints:["len(cri) donne le nombre de caractères.","Les méthodes s'appellent avec un point : cri.upper().","taille = len(cri) et crie = cri.upper()"],
sol:"cri = \"glapissement\"\ntaille = len(cri)\ncrie = cri.upper()\nprint(taille, crie)"},
{t:"Message magique", p:"Avec les variables données, utilise une f-string pour créer message contenant exactement : Pixel le renard a gagné 50 XP !",
starter:"nom = \"Pixel\"\nxp = 50\n# message = f\"...\"\nprint(message)\n",
test:"assert message == \"Pixel le renard a gagné 50 XP !\", \"message doit être exactement 'Pixel le renard a gagné 50 XP !'. Utilise f-string avec {nom} et {xp}.\"",
hints:["Une f-string commence par f : f\"texte {variable}\".","Insère {nom} et {xp} aux bons endroits.","message = f\"{nom} le renard a gagné {xp} XP !\""],
sol:"nom = \"Pixel\"\nxp = 50\nmessage = f\"{nom} le renard a gagné {xp} XP !\"\nprint(message)"}
],
quiz: [
{q:"Que vaut len(\"renard\") ?", opts:["5","6","7"], a:1},
{q:"Que produit \"ha\" * 3 ?", opts:["hahaha","ha3","une erreur"], a:0},
{q:"Comment insérer une variable x dans une chaîne ?", opts:["\"x vaut {x}\"","f\"x vaut {x}\"","f\"x vaut x\""], a:1}
],
boss: {t:"Le découpage secret", p:"Les chaînes se découpent avec les crochets : mot[0] est la 1re lettre, mot[0:3] les 3 premières, mot[::-1] renverse la chaîne. Avec mot = \"renard\", crée debut (les 3 premières lettres) et envers (le mot à l'envers).",
starter:"mot = \"renard\"\n# debut = ..., envers = ...\n",
test:"assert debut == \"ren\", \"debut = mot[0:3] (ou mot[:3]).\"\nassert envers == \"draner\", \"envers = mot[::-1] renverse la chaîne.\"",
hints:["Le découpage s'écrit mot[début:fin].","mot[:3] prend les indices 0, 1, 2.","envers = mot[::-1]"],
sol:"mot = \"renard\"\ndebut = mot[:3]\nenvers = mot[::-1]\nprint(debut, envers)"}
},
{
id: 5, titre: "input() & f-strings", icone: "⌨️", region: 0,
lecon: [
["p","input() pose une question et récupère la réponse tapée au clavier — toujours sous forme de CHAÎNE ! Pour un nombre, il faut convertir avec int() ou float()."],
["c","nom = input(\"Ton nom ? \")\nage = int(input(\"Ton âge ? \"))   # conversion en nombre\nprint(f\"Salut {nom}, {age} ans !\")"],
["p","Les f-strings savent aussi formater : {x:.2f} arrondit à 2 décimales, et les accolades acceptent des calculs : {prix * 2}."],
["c","prix = 7 / 3\nprint(f\"Prix : {prix:.2f} baies\")   # Prix : 2.33 baies\nprint(f\"Double : {prix * 2:.1f}\")     # Double : 4.7"]
],
ex: [
{t:"La conversion vitale", p:"La variable reponse simule une saisie clavier : \"12\" (une chaîne !). Convertis-la en entier dans nombre, puis calcule double = nombre * 2.",
starter:"reponse = \"12\"   # ce que input() aurait renvoyé\n# nombre = ..., double = ...\n",
test:"assert nombre == 12, \"nombre = int(reponse) convertit la chaîne en entier.\"\nassert double == 24, \"double = nombre * 2 = 24 (et pas '1212' !).\"",
hints:["int(\"12\") donne l'entier 12.","Sans conversion, \"12\" * 2 donnerait \"1212\" !","nombre = int(reponse) puis double = nombre * 2"],
sol:"reponse = \"12\"\nnombre = int(reponse)\ndouble = nombre * 2\nprint(nombre, double)"},
{t:"L'afficheur de prix", p:"Avec une f-string et le format {x:.2f}, crée etiquette contenant exactement : Total : 8.33 baies (à partir de total).",
starter:"total = 25 / 3\n# etiquette = f\"...\"\n",
test:"assert etiquette == \"Total : 8.33 baies\", \"Utilise {total:.2f} dans une f-string pour arrondir l'affichage à 2 décimales.\"",
hints:["Le format s'écrit dans les accolades : {variable:.2f}.",".2f = nombre à virgule avec 2 décimales.","etiquette = f\"Total : {total:.2f} baies\""],
sol:"total = 25 / 3\netiquette = f\"Total : {total:.2f} baies\"\nprint(etiquette)"}
],
quiz: [
{q:"Que renvoie TOUJOURS input() ?", opts:["Un int","Une chaîne (str)","Ça dépend de la saisie"], a:1},
{q:"Comment obtenir un nombre depuis input() ?", opts:["input(int)","int(input())","input().nombre"], a:1},
{q:"Que produit f\"{3.14159:.2f}\" ?", opts:["3.14","3.1415","3,14"], a:0}
],
boss: {t:"La borne d'accueil", p:"La saisie simulée donne nom = \"pixel\" et annee = \"2024\" (chaînes). Construis accueil : PIXEL, membre depuis 2024 (2 ans) — nom en majuscules avec .upper(), durée calculée : 2026 moins l'année convertie en int.",
starter:"nom = \"pixel\"\nannee = \"2024\"\n# accueil = ...\n",
test:"assert accueil == \"PIXEL, membre depuis 2024 (2 ans)\", \"Combine .upper(), int(annee) et une f-string : PIXEL, membre depuis 2024 (2 ans).\"",
hints:["nom.upper() donne PIXEL.","duree = 2026 - int(annee).","accueil = f\"{nom.upper()}, membre depuis {annee} ({duree} ans)\""],
sol:"nom = \"pixel\"\nannee = \"2024\"\nduree = 2026 - int(annee)\naccueil = f\"{nom.upper()}, membre depuis {annee} ({duree} ans)\"\nprint(accueil)"}
},
{
id: 6, titre: "Booléens & comparaisons", icone: "⚖️", region: 0,
lecon: [
["p","Un booléen (bool) vaut True ou False. Les comparaisons en produisent : == (égal), != (différent), <, >, <=, >=."],
["c","print(3 > 2)      # True\nprint(5 == \"5\")   # False (types différents !)"],
["p","On combine des booléens avec and (les deux vrais), or (au moins un vrai) et not (inverse)."],
["c","age = 3\nprint(age > 1 and age < 10)   # True"]
],
ex: [
{t:"Vrai ou faux ?", p:"Sans calculatrice ! Stocke dans r1 le résultat de 7 * 8 == 56, dans r2 le résultat de 10 / 3 > 3.5, et dans r3 le résultat de \"a\" != \"A\".",
starter:"# r1 = ..., r2 = ..., r3 = ...\n",
test:"assert r1 == True, \"7 * 8 vaut bien 56, donc r1 doit être True.\"\nassert r2 == False, \"10 / 3 vaut environ 3.33, ce n'est pas > 3.5.\"\nassert r3 == True, \"Python distingue majuscules et minuscules.\"",
hints:["Écris directement la comparaison : r1 = 7 * 8 == 56.","Python calcule et range True ou False dans la variable.","r2 = 10 / 3 > 3.5 et r3 = \"a\" != \"A\""],
sol:"r1 = 7 * 8 == 56\nr2 = 10 / 3 > 3.5\nr3 = \"a\" != \"A\"\nprint(r1, r2, r3)"},
{t:"Les lois de la forêt", p:"Un renard peut chasser s'il a plus de 2 ans ET plus de 50 d'énergie. Il peut se reposer s'il est au terrier OU s'il fait nuit. Calcule peut_chasser et peut_se_reposer.",
starter:"age = 3\nenergie = 40\nau_terrier = False\nfait_nuit = True\n# peut_chasser = ..., peut_se_reposer = ...\n",
test:"assert peut_chasser == False, \"age > 2 est vrai mais energie > 50 est faux : and donne False.\"\nassert peut_se_reposer == True, \"au_terrier or fait_nuit : un seul vrai suffit.\"",
hints:["Combine deux comparaisons avec and.","peut_chasser = age > 2 and energie > 50","peut_se_reposer = au_terrier or fait_nuit"],
sol:"age = 3\nenergie = 40\nau_terrier = False\nfait_nuit = True\npeut_chasser = age > 2 and energie > 50\npeut_se_reposer = au_terrier or fait_nuit\nprint(peut_chasser, peut_se_reposer)"}
],
quiz: [
{q:"Que vaut not True ?", opts:["True","False","None"], a:1},
{q:"Que vaut (3 > 1) and (2 > 5) ?", opts:["True","False","2"], a:1},
{q:"Quel opérateur teste l'égalité ?", opts:["=","==","==="], a:1}
],
boss: {t:"Le gardien du pont", p:"Le gardien laisse passer un renard si : (il a un badge OU il a plus de 100 XP) ET il n'est pas banni. Calcule peut_passer avec les variables données.",
starter:"a_badge = False\nxp = 150\nbanni = False\n# peut_passer = ...\n",
test:"assert peut_passer == True, \"(a_badge or xp > 100) and not banni → (False or True) and True → True.\"",
hints:["Traduis mot à mot : OU → or, ET → and, n'est pas → not.","Mets des parenthèses autour du or.","peut_passer = (a_badge or xp > 100) and not banni"],
sol:"a_badge = False\nxp = 150\nbanni = False\npeut_passer = (a_badge or xp > 100) and not banni\nprint(peut_passer)"}
},
{
id: 7, titre: "Conditions", icone: "🔀", region: 0,
lecon: [
["p","Avec if, le code ne s'exécute que si la condition est vraie. Le bloc concerné est indenté (décalé de 4 espaces). elif teste une autre condition, else attrape tout le reste."],
["c","xp = 120\nif xp >= 200:\n    print(\"Badge d'or\")\nelif xp >= 100:\n    print(\"Badge d'argent\")\nelse:\n    print(\"Badge de bronze\")"],
["p","Attention : les deux-points à la fin de la ligne if et l'indentation sont obligatoires !"]
],
ex: [
{t:"Pair ou impair ?", p:"Le nombre n est-il pair ? S'il est pair (reste de la division par 2 égal à 0), affiche pair, sinon affiche impair.",
starter:"n = 17\n# if ... else ...\n",
test:"assert \"impair\" in _out, \"17 est impair : le programme doit afficher 'impair'.\"\nassert \"pair\" == _out.strip() or \"impair\" == _out.strip(), \"Affiche seulement 'pair' ou 'impair'.\"",
hints:["Un nombre est pair si n % 2 == 0.","if n % 2 == 0: puis print(\"pair\") indenté.","Ajoute else: et print(\"impair\") indenté."],
sol:"n = 17\nif n % 2 == 0:\n    print(\"pair\")\nelse:\n    print(\"impair\")"},
{t:"La météo du renard", p:"Selon temperature : en dessous de 0 affiche Gelé, de 0 à moins de 20 affiche Frais, à partir de 20 affiche Chaud. Utilise if / elif / else.",
starter:"temperature = 15\n",
test:"assert \"Frais\" in _out, \"Avec 15 degrés, on attend 'Frais'.\"\nassert \"Gelé\" not in _out and \"Chaud\" not in _out, \"Une seule branche doit s'exécuter.\"",
hints:["Trois cas → if, elif, else.","if temperature < 0: ... elif temperature < 20: ...","Le else couvre 20 et plus."],
sol:"temperature = 15\nif temperature < 0:\n    print(\"Gelé\")\nelif temperature < 20:\n    print(\"Frais\")\nelse:\n    print(\"Chaud\")"}
],
quiz: [
{q:"Que manque-t-il : if x > 3\\n    print(x) ?", opts:["Rien","Les deux-points après x > 3","Des parenthèses autour du if"], a:1},
{q:"Combien d'espaces d'indentation par convention ?", opts:["2","4","8"], a:1},
{q:"Quand s'exécute le bloc else ?", opts:["Toujours","Si le if est vrai","Si aucune condition précédente n'est vraie"], a:2},
{q:"elif est l'abréviation de…", opts:["else if","element if","elsif"], a:0}
],
boss: {t:"Le tri des baies", p:"Un renard trie des baies selon leur poids p : moins de 5 → Trop légère, de 5 à 15 inclus → Parfaite, plus de 15 mais 30 max → Grosse, au-delà de 30 → Suspecte. Écris la cascade if/elif/else pour p = 22.",
starter:"p = 22\n",
test:"assert \"Grosse\" in _out, \"22 est entre 16 et 30 : on attend 'Grosse'.\"\nassert _out.count(\"\\n\") <= 1, \"Une seule branche doit s'exécuter (un seul print).\"",
hints:["Ordonne tes conditions du plus petit au plus grand.","if p < 5, elif p <= 15, elif p <= 30, else.","Chaque branche fait un seul print."],
sol:"p = 22\nif p < 5:\n    print(\"Trop légère\")\nelif p <= 15:\n    print(\"Parfaite\")\nelif p <= 30:\n    print(\"Grosse\")\nelse:\n    print(\"Suspecte\")"}
},
{
id: 8, titre: "Listes", icone: "📋", region: 1,
lecon: [
["p","Bienvenue dans la Forêt des Structures ! Une liste rassemble plusieurs valeurs ordonnées entre crochets. On accède aux éléments par leur indice (qui commence à 0 !)."],
["c","proies = [\"souris\", \"lapin\", \"mulot\"]\nprint(proies[0])     # souris\nprint(len(proies))   # 3"],
["p","Les listes sont modifiables : .append(x) ajoute à la fin, .remove(x) enlève, .insert(i, x) insère. sorted(), min(), max(), sum() travaillent sur les listes."],
["c","proies.append(\"grenouille\")\nproies.remove(\"lapin\")\nprint(proies)   # ['souris', 'mulot', 'grenouille']"]
],
ex: [
{t:"Le garde-manger", p:"Crée la liste reserves avec \"baies\", \"souris\", \"pommes\". Ajoute \"champignons\" à la fin avec .append(). Stocke la taille finale dans total.",
starter:"# reserves = [...]\n",
test:"assert reserves == [\"baies\", \"souris\", \"pommes\", \"champignons\"], \"La liste doit contenir les 4 éléments dans l'ordre.\"\nassert total == 4, \"total = len(reserves) après l'ajout.\"",
hints:["Une liste se crée avec des crochets : [a, b, c].","reserves.append(\"champignons\") ajoute à la fin.","total = len(reserves)"],
sol:"reserves = [\"baies\", \"souris\", \"pommes\"]\nreserves.append(\"champignons\")\ntotal = len(reserves)\nprint(reserves, total)"},
{t:"Les statistiques du clan", p:"Voici les XP du clan. Calcule le_max (le plus grand), le_min (le plus petit), la_somme (le total) et classement (la liste triée du plus petit au plus grand avec sorted).",
starter:"xp_clan = [120, 45, 300, 80, 210]\n",
test:"assert le_max == 300 and le_min == 45, \"Utilise max() et min().\"\nassert la_somme == 755, \"sum(xp_clan) devrait donner 755.\"\nassert classement == [45, 80, 120, 210, 300], \"classement = sorted(xp_clan).\"",
hints:["max(liste), min(liste), sum(liste).","sorted(liste) renvoie une NOUVELLE liste triée.","classement = sorted(xp_clan)"],
sol:"xp_clan = [120, 45, 300, 80, 210]\nle_max = max(xp_clan)\nle_min = min(xp_clan)\nla_somme = sum(xp_clan)\nclassement = sorted(xp_clan)\nprint(le_max, le_min, la_somme, classement)"}
],
quiz: [
{q:"Quel est l'indice du PREMIER élément d'une liste ?", opts:["0","1","-1"], a:0},
{q:"Que fait liste.append(x) ?", opts:["Insère x au début","Ajoute x à la fin","Remplace le dernier élément"], a:1},
{q:"Que vaut [1, 2, 3][-1] ?", opts:["1","3","une erreur"], a:1}
],
boss: {t:"L'inventaire parfait", p:"Pars de sac = [\"plume\", \"caillou\", \"baie\", \"caillou\"]. 1) Retire un \"caillou\" avec .remove(). 2) Insère \"carte\" en première position avec .insert(0, ...). 3) Récupère dernier, le dernier élément avec l'indice -1.",
starter:"sac = [\"plume\", \"caillou\", \"baie\", \"caillou\"]\n",
test:"assert sac == [\"carte\", \"plume\", \"baie\", \"caillou\"], \"Après remove('caillou') et insert(0, 'carte'), sac = ['carte', 'plume', 'baie', 'caillou'].\"\nassert dernier == \"caillou\", \"dernier = sac[-1].\"",
hints:[".remove enlève la PREMIÈRE occurrence trouvée.","sac.insert(0, \"carte\") place en tête.","L'indice -1 désigne le dernier élément."],
sol:"sac = [\"plume\", \"caillou\", \"baie\", \"caillou\"]\nsac.remove(\"caillou\")\nsac.insert(0, \"carte\")\ndernier = sac[-1]\nprint(sac, dernier)"}
},
{
id: 9, titre: "Slicing & indices", icone: "🔪", region: 1,
lecon: [
["p","Le slicing (découpage) extrait un morceau d'une liste ou d'une chaîne : liste[début:fin] prend de début à fin-1. On peut omettre les bornes : [:3] depuis le début, [2:] jusqu'à la fin."],
["c","proies = [\"souris\", \"lapin\", \"mulot\", \"grenouille\", \"campagnol\"]\nprint(proies[1:3])    # ['lapin', 'mulot']\nprint(proies[:2])     # ['souris', 'lapin']\nprint(proies[-2:])    # les 2 derniers"],
["p","Le troisième nombre est le PAS : [::2] un élément sur deux, [::-1] à l'envers. Les indices négatifs comptent depuis la fin : -1 est le dernier."]
],
ex: [
{t:"Le partage du butin", p:"Depuis la liste butin, extrais premiers (les 3 premiers éléments) et derniers (les 2 derniers, avec des indices négatifs).",
starter:"butin = [\"baie\", \"pomme\", \"noisette\", \"champignon\", \"gland\", \"mûre\"]\n",
test:"assert premiers == [\"baie\", \"pomme\", \"noisette\"], \"premiers = butin[:3].\"\nassert derniers == [\"gland\", \"mûre\"], \"derniers = butin[-2:] — les indices négatifs partent de la fin.\"",
hints:["[:3] prend les indices 0, 1, 2.","[-2:] part de l'avant-dernier jusqu'au bout.","premiers = butin[:3] et derniers = butin[-2:]"],
sol:"butin = [\"baie\", \"pomme\", \"noisette\", \"champignon\", \"gland\", \"mûre\"]\npremiers = butin[:3]\nderniers = butin[-2:]\nprint(premiers, derniers)"},
{t:"Le pas du renard", p:"Depuis nombres (0 à 9), extrais pairs (un élément sur deux depuis le début, avec le pas [::2]) et inverse (toute la liste à l'envers).",
starter:"nombres = list(range(10))\n",
test:"assert pairs == [0, 2, 4, 6, 8], \"pairs = nombres[::2] — le pas de 2 saute un élément sur deux.\"\nassert inverse == [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], \"inverse = nombres[::-1].\"",
hints:["Le pas s'écrit après le 2e deux-points : [début:fin:pas].","[::2] = tout, de 2 en 2.","inverse = nombres[::-1]"],
sol:"nombres = list(range(10))\npairs = nombres[::2]\ninverse = nombres[::-1]\nprint(pairs, inverse)"}
],
quiz: [
{q:"Que vaut [1, 2, 3, 4][1:3] ?", opts:["[2, 3]","[1, 2, 3]","[2, 3, 4]"], a:0},
{q:"Que vaut \"renard\"[-1] ?", opts:["r","d","une erreur"], a:1},
{q:"Que fait [::-1] ?", opts:["Enlève le dernier élément","Renverse la séquence","Trie à l'envers"], a:1}
],
boss: {t:"Le message coupé en deux", p:"Un message secret est caché : les lettres aux indices PAIRS (0, 2, 4…) forment le vrai message. Extrais message depuis brouille avec un slicing, puis moitie : la PREMIÈRE moitié de message (utilise len(message) // 2).",
starter:"brouille = \"lxez zrzeznzazrzdz zvzozizt\"\n# message = ..., moitie = ...\n",
test:"assert message == \"le renard voit\", \"message = brouille[::2] garde une lettre sur deux.\"\nassert moitie == \"le rena\", \"moitie = message[:len(message) // 2].\"",
hints:["Une lettre sur deux depuis l'indice 0 : [::2].","La moitié : len(message) // 2 donne l'indice de coupe.","moitie = message[:len(message) // 2]"],
sol:"brouille = \"lxez zrzeznzazrzdz zvzozizt\"\nmessage = brouille[::2]\nmoitie = message[:len(message) // 2]\nprint(message, moitie)"}
},
{
id: 10, titre: "Boucle for", icone: "🔁", region: 1,
lecon: [
["p","La boucle for répète un bloc de code pour chaque élément d'une séquence. range(n) génère les nombres de 0 à n-1, range(a, b) de a à b-1."],
["c","for i in range(3):\n    print(\"Tour\", i)   # Tour 0, Tour 1, Tour 2"],
["p","On peut parcourir directement une liste ou une chaîne. Un motif très courant : l'accumulateur, une variable qu'on fait grandir à chaque tour."],
["c","total = 0\nfor n in [10, 20, 30]:\n    total = total + n\nprint(total)   # 60"]
],
ex: [
{t:"L'écho de la forêt", p:"Affiche Glap ! exactement 5 fois (une par ligne) avec une boucle for et range.",
starter:"# for ... in range(...):\n",
test:"assert _out.count(\"Glap !\") == 5, \"On attend exactement 5 lignes 'Glap !'.\"",
hints:["range(5) donne 5 tours de boucle.","for i in range(5):","Le print(\"Glap !\") doit être indenté dans la boucle."],
sol:"for i in range(5):\n    print(\"Glap !\")"},
{t:"La grande addition", p:"Avec une boucle for et un accumulateur, calcule total, la somme des nombres de 1 à 100.",
starter:"total = 0\n# for ...\n",
test:"assert total == 5050, \"La somme de 1 à 100 vaut 5050. Vérifie range(1, 101).\"",
hints:["range(1, 101) va de 1 à 100 inclus.","À chaque tour : total = total + n (ou total += n).","for n in range(1, 101): total += n"],
sol:"total = 0\nfor n in range(1, 101):\n    total += n\nprint(total)"}
],
quiz: [
{q:"Que génère range(3) ?", opts:["1, 2, 3","0, 1, 2","0, 1, 2, 3"], a:1},
{q:"Combien de fois s'exécute le bloc de for x in \"chat\": ?", opts:["1","4","une erreur"], a:1},
{q:"Que fait total += n ?", opts:["total = total + n","total = n","Compare total et n"], a:0}
],
boss: {t:"Glap-Boum ! (le FizzBuzz du renard)", p:"Pour chaque nombre de 1 à 15 : si divisible par 3 ET 5, affiche GlapBoum ; sinon si divisible par 3, affiche Glap ; sinon si divisible par 5, affiche Boum ; sinon affiche le nombre.",
starter:"for n in range(1, 16):\n    # à toi de jouer\n    pass\n",
test:"lignes = [l for l in _out.strip().split(\"\\n\")]\nassert len(lignes) == 15, \"On attend 15 lignes (une par nombre de 1 à 15).\"\nassert lignes[2] == \"Glap\", \"3 est divisible par 3 → Glap.\"\nassert lignes[4] == \"Boum\", \"5 est divisible par 5 → Boum.\"\nassert lignes[14] == \"GlapBoum\", \"15 est divisible par 3 et 5 → GlapBoum.\"\nassert lignes[0] == \"1\", \"1 n'est divisible ni par 3 ni par 5 → afficher 1.\"",
hints:["Teste d'ABORD la double divisibilité (3 et 5), sinon elle ne sera jamais atteinte.","n % 3 == 0 and n % 5 == 0 → GlapBoum.","N'oublie pas le else final : print(n)."],
sol:"for n in range(1, 16):\n    if n % 3 == 0 and n % 5 == 0:\n        print(\"GlapBoum\")\n    elif n % 3 == 0:\n        print(\"Glap\")\n    elif n % 5 == 0:\n        print(\"Boum\")\n    else:\n        print(n)"}
},
{
id: 11, titre: "enumerate & zip", icone: "🤝", region: 1,
lecon: [
["p","Deux compagnons de boucle indispensables. enumerate(liste) fournit (indice, valeur) à chaque tour — fini les compteurs manuels !"],
["c","for i, proie in enumerate([\"souris\", \"lapin\"]):\n    print(i, proie)   # 0 souris / 1 lapin"],
["p","zip(a, b) parcourt deux listes EN PARALLÈLE, par paires. Il s'arrête à la plus courte. list(zip(a, b)) donne la liste des paires."],
["c","noms = [\"Pixel\", \"Roxy\"]\nxp = [120, 95]\nfor nom, points in zip(noms, xp):\n    print(f\"{nom} : {points} XP\")"]
],
ex: [
{t:"Le podium numéroté", p:"Avec enumerate et son option start=1, affiche une ligne par renard au format 1. Pixel (numérotation qui commence à 1).",
starter:"podium = [\"Pixel\", \"Roxy\", \"Nox\"]\n# for ... in enumerate(podium, start=1):\n",
test:"assert \"1. Pixel\" in _out, \"Format attendu : '1. Pixel' — enumerate(podium, start=1).\"\nassert \"2. Roxy\" in _out and \"3. Nox\" in _out, \"Une ligne par renard, numérotée à partir de 1.\"",
hints:["enumerate(podium, start=1) commence à 1 au lieu de 0.","for rang, nom in enumerate(podium, start=1):","print(f\"{rang}. {nom}\")"],
sol:"podium = [\"Pixel\", \"Roxy\", \"Nox\"]\nfor rang, nom in enumerate(podium, start=1):\n    print(f\"{rang}. {nom}\")"},
{t:"L'appariement parfait", p:"Avec zip, construis le dict fiches qui associe chaque nom à son score (utilise dict(zip(...)) ou une boucle).",
starter:"noms = [\"Pixel\", \"Roxy\", \"Nox\"]\nscores = [88, 95, 72]\n# fiches = ...\n",
test:"assert fiches == {\"Pixel\": 88, \"Roxy\": 95, \"Nox\": 72}, \"fiches = dict(zip(noms, scores)).\"",
hints:["zip(noms, scores) forme les paires (nom, score).","dict(paires) transforme des paires en dictionnaire.","fiches = dict(zip(noms, scores))"],
sol:"noms = [\"Pixel\", \"Roxy\", \"Nox\"]\nscores = [88, 95, 72]\nfiches = dict(zip(noms, scores))\nprint(fiches)"}
],
quiz: [
{q:"Que donne enumerate([\"a\", \"b\"]) à chaque tour ?", opts:["la valeur seule","(indice, valeur)","l'indice seul"], a:1},
{q:"zip([1, 2, 3], [\"a\", \"b\"]) produit combien de paires ?", opts:["3","2","une erreur"], a:1},
{q:"Comment numéroter à partir de 1 avec enumerate ?", opts:["enumerate(l) + 1","enumerate(l, start=1)","enumerate(l, 0)"], a:1}
],
boss: {t:"Le rapport de patrouille", p:"Trois listes parallèles décrivent la patrouille. Avec zip sur les trois listes, construis alertes : la liste des chaînes zone : nb renards pour les zones où nb > 2 ET meteo vaut \"clair\". Attendu : [\"nord : 4 renards\", \"est : 5 renards\"].",
starter:"zones = [\"nord\", \"sud\", \"est\", \"ouest\"]\nvus = [4, 1, 5, 3]\nmeteo = [\"clair\", \"clair\", \"clair\", \"brume\"]\n# alertes = [...]\n",
test:"assert alertes == [\"nord : 4 renards\", \"est : 5 renards\"], \"zip(zones, vus, meteo) + filtre nb > 2 and m == 'clair' — l'ouest est dans la brume !\"",
hints:["zip accepte 3 listes : for z, nb, m in zip(zones, vus, meteo):","Filtre : if nb > 2 and m == \"clair\".","alertes = [f\"{z} : {nb} renards\" for z, nb, m in zip(zones, vus, meteo) if nb > 2 and m == \"clair\"]"],
sol:"zones = [\"nord\", \"sud\", \"est\", \"ouest\"]\nvus = [4, 1, 5, 3]\nmeteo = [\"clair\", \"clair\", \"clair\", \"brume\"]\nalertes = [f\"{z} : {nb} renards\" for z, nb, m in zip(zones, vus, meteo) if nb > 2 and m == \"clair\"]\nprint(alertes)"}
},
{
id: 12, titre: "Boucle while", icone: "⏳", region: 1,
lecon: [
["p","while répète TANT QUE la condition est vraie. À utiliser quand on ne connaît pas d'avance le nombre de tours. Attention à bien faire évoluer la condition, sinon boucle infinie !"],
["c","energie = 3\nwhile energie > 0:\n    print(\"Le renard court...\")\n    energie -= 1\nprint(\"Épuisé !\")"],
["p","break sort immédiatement de la boucle ; continue saute directement au tour suivant."]
],
ex: [
{t:"Le compte à rebours", p:"Avec une boucle while, affiche les nombres de 5 à 1 (un par ligne), puis Décollage ! après la boucle.",
starter:"n = 5\n# while ...\n",
test:"lignes = _out.strip().split(\"\\n\")\nassert lignes[:5] == [\"5\", \"4\", \"3\", \"2\", \"1\"], \"On attend 5, 4, 3, 2, 1 (une par ligne).\"\nassert \"Décollage !\" in _out, \"N'oublie pas 'Décollage !' après la boucle.\"",
hints:["Condition : while n > 0:","Dans la boucle : print(n) puis n -= 1.","Le print('Décollage !') est APRÈS la boucle (non indenté)."],
sol:"n = 5\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Décollage !\")"},
{t:"La croissance du champignon", p:"Un champignon magique mesure 1 cm et double chaque nuit. Avec un while, compte en combien de nuits il dépasse 100 cm. Résultat dans nuits.",
starter:"taille = 1\nnuits = 0\n# while ...\n",
test:"assert nuits == 7, \"1→2→4→8→16→32→64→128 : il faut 7 nuits pour dépasser 100.\"\nassert taille == 128, \"À la fin, taille devrait valoir 128.\"",
hints:["Tant que taille <= 100, on continue.","Dans la boucle : taille *= 2 et nuits += 1.","while taille <= 100:"],
sol:"taille = 1\nnuits = 0\nwhile taille <= 100:\n    taille *= 2\n    nuits += 1\nprint(nuits, taille)"}
],
quiz: [
{q:"Quand utiliser while plutôt que for ?", opts:["Quand on connaît le nombre de tours","Quand le nombre de tours dépend d'une condition","Jamais, for suffit toujours"], a:1},
{q:"Que fait break ?", opts:["Met la boucle en pause","Sort immédiatement de la boucle","Recommence la boucle à zéro"], a:1},
{q:"Que se passe-t-il avec while True: sans break ?", opts:["Une erreur de syntaxe","La boucle ne s'exécute pas","Une boucle infinie"], a:2}
],
boss: {t:"La suite de Collatz", p:"Règle : si n est pair, on le divise par 2 ; sinon on calcule n * 3 + 1. On répète jusqu'à atteindre 1. En partant de n = 6, compte le nombre d'étapes dans etapes. (6→3→10→5→16→8→4→2→1 : 8 étapes.)",
starter:"n = 6\netapes = 0\n# while n != 1: ...\n",
test:"assert etapes == 8, \"Depuis 6, il faut exactement 8 étapes pour atteindre 1.\"\nassert n == 1, \"À la fin, n doit valoir 1.\"",
hints:["Boucle : while n != 1:.","Dans la boucle : if n % 2 == 0: n = n // 2, else : n = n * 3 + 1.","Incrémente etapes à chaque tour."],
sol:"n = 6\netapes = 0\nwhile n != 1:\n    if n % 2 == 0:\n        n = n // 2\n    else:\n        n = n * 3 + 1\n    etapes += 1\nprint(etapes)"}
},
{
id: 13, titre: "Tuples & sets", icone: "🎯", region: 1,
lecon: [
["p","Un tuple est une liste NON modifiable, entre parenthèses : position = (4, 7). On peut le déballer en plusieurs variables d'un coup : x, y = position."],
["c","position = (4, 7)\nx, y = position\nprint(x)   # 4"],
["p","Un set (ensemble) est une collection SANS doublons et sans ordre, entre accolades. Idéal pour dédupliquer : set(liste). Opérations : | (union), & (intersection)."],
["c","vus = {\"lapin\", \"souris\", \"lapin\"}\nprint(vus)          # {'lapin', 'souris'} — le doublon a disparu\nprint(\"souris\" in vus)   # True"]
],
ex: [
{t:"Les coordonnées du trésor", p:"Le trésor est en tresor = (12, 34). Déballe le tuple dans x et y en une seule ligne, puis calcule somme = x + y.",
starter:"tresor = (12, 34)\n# x, y = ...\n",
test:"assert x == 12 and y == 34, \"Déballe avec : x, y = tresor.\"\nassert somme == 46, \"somme = x + y = 46.\"",
hints:["Le déballage : x, y = tresor.","Python répartit chaque valeur du tuple dans chaque variable.","somme = x + y"],
sol:"tresor = (12, 34)\nx, y = tresor\nsomme = x + y\nprint(x, y, somme)"},
{t:"Le comptage des espèces", p:"Le renard a croisé ces animaux (avec doublons). Crée especes, le set des espèces distinctes, et nb, leur nombre.",
starter:"croises = [\"lapin\", \"souris\", \"lapin\", \"mulot\", \"souris\", \"lapin\"]\n",
test:"assert especes == {\"lapin\", \"souris\", \"mulot\"}, \"especes = set(croises) supprime les doublons.\"\nassert nb == 3, \"nb = len(especes) = 3 espèces distinctes.\"",
hints:["set(liste) convertit en ensemble sans doublons.","especes = set(croises)","nb = len(especes)"],
sol:"croises = [\"lapin\", \"souris\", \"lapin\", \"mulot\", \"souris\", \"lapin\"]\nespeces = set(croises)\nnb = len(especes)\nprint(especes, nb)"}
],
quiz: [
{q:"Quelle est la grande différence entre tuple et liste ?", opts:["Le tuple est plus rapide à trier","Le tuple ne peut pas être modifié","Le tuple n'a pas d'indices"], a:1},
{q:"Que vaut len({1, 2, 2, 3, 3, 3}) ?", opts:["6","3","1"], a:1},
{q:"Que fait a & b sur deux sets ?", opts:["L'union","L'intersection","La différence"], a:1}
],
boss: {t:"Les territoires communs", p:"Deux clans marquent leur territoire. Calcule communs (les clairières marquées par LES DEUX clans, avec &) et toutes (l'ensemble de toutes les clairières marquées, avec |).",
starter:"clan_roux = {\"nord\", \"est\", \"rivière\", \"colline\"}\nclan_gris = {\"sud\", \"rivière\", \"colline\", \"marais\"}\n",
test:"assert communs == {\"rivière\", \"colline\"}, \"communs = clan_roux & clan_gris.\"\nassert toutes == {\"nord\", \"est\", \"sud\", \"rivière\", \"colline\", \"marais\"}, \"toutes = clan_roux | clan_gris.\"",
hints:["& garde ce qui est dans les deux ensembles.","| rassemble tout sans doublons.","communs = clan_roux & clan_gris ; toutes = clan_roux | clan_gris"],
sol:"clan_roux = {\"nord\", \"est\", \"rivière\", \"colline\"}\nclan_gris = {\"sud\", \"rivière\", \"colline\", \"marais\"}\ncommuns = clan_roux & clan_gris\ntoutes = clan_roux | clan_gris\nprint(communs, toutes)"}
}
];

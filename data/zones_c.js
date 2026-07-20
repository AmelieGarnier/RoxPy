// PyRenard — Zones 25 à 35 : Montagne des Objets (fin) + Sommet Légendaire
export const ZONES_C = [
{
id: 25, titre: "Fichiers", icone: "📄", region: 3,
lecon: [
["p","Python lit et écrit des fichiers avec open(). Le bloc with referme automatiquement le fichier. Modes : \"w\" écrire (écrase), \"a\" ajouter, \"r\" lire."],
["c","with open(\"journal.txt\", \"w\") as f:\n    f.write(\"Jour 1 : j'ai trouvé des baies\\n\")\n\nwith open(\"journal.txt\", \"r\") as f:\n    contenu = f.read()"],
["p",".read() lit tout, .readlines() renvoie la liste des lignes. Ici, les fichiers sont créés dans un espace virtuel du navigateur — parfait pour s'entraîner sans risque !"]
],
ex: [
{t:"Le premier journal", p:"Écris Le renard est passé ici dans le fichier trace.txt (mode \"w\"), puis rouvre-le en lecture et stocke son contenu dans contenu.",
starter:"# écris, puis relis trace.txt\n",
test:"assert contenu == \"Le renard est passé ici\", \"Le contenu relu doit être exactement 'Le renard est passé ici'.\"",
hints:["with open(\"trace.txt\", \"w\") as f: puis f.write(...).","Rouvre avec le mode \"r\".","contenu = f.read()"],
sol:"with open(\"trace.txt\", \"w\") as f:\n    f.write(\"Le renard est passé ici\")\n\nwith open(\"trace.txt\", \"r\") as f:\n    contenu = f.read()\nprint(contenu)"},
{t:"Le journal qui grandit", p:"Écris Jour 1 (avec \\n) dans journal.txt en mode \"w\", puis AJOUTE Jour 2 (avec \\n) en mode \"a\". Relis le fichier et compte les lignes dans nb_lignes avec .readlines().",
starter:"# mode w, puis mode a, puis relis\n",
test:"assert nb_lignes == 2, \"Le fichier doit contenir 2 lignes : utilise le mode 'a' pour ajouter sans écraser.\"",
hints:["Le mode \"a\" (append) ajoute à la fin sans effacer.","Chaque write se termine par \\n pour passer à la ligne.","lignes = f.readlines() puis nb_lignes = len(lignes)"],
sol:"with open(\"journal.txt\", \"w\") as f:\n    f.write(\"Jour 1\\n\")\nwith open(\"journal.txt\", \"a\") as f:\n    f.write(\"Jour 2\\n\")\nwith open(\"journal.txt\", \"r\") as f:\n    nb_lignes = len(f.readlines())\nprint(nb_lignes)"}
],
quiz: [
{q:"Quel mode ÉCRASE le fichier existant ?", opts:["\"r\"","\"w\"","\"a\""], a:1},
{q:"Quel est l'avantage de with open(...) ?", opts:["C'est plus rapide","Le fichier est refermé automatiquement","Ça chiffre le fichier"], a:1},
{q:"Que renvoie f.readlines() ?", opts:["Tout le texte d'un bloc","La liste des lignes","La première ligne"], a:1}
],
boss: {t:"L'archiviste de la forêt", p:"Écris dans observations.txt les 4 lignes données (une par ligne). Puis relis le fichier et construis renards : la liste des lignes qui contiennent \"renard\", sans le \\n final (utilise .strip()).",
starter:"lignes = [\"renard roux vu au nord\", \"hibou endormi\", \"renard argenté au sommet\", \"lapin pressé\"]\n# écris le fichier, puis filtre\n",
test:"assert renards == [\"renard roux vu au nord\", \"renard argenté au sommet\"], \"Filtre les lignes contenant 'renard' et enlève les retours à la ligne avec .strip().\"",
hints:["Écris avec une boucle : f.write(l + \"\\n\").","Relis avec .readlines().","renards = [l.strip() for l in f.readlines() if \"renard\" in l]"],
sol:"lignes = [\"renard roux vu au nord\", \"hibou endormi\", \"renard argenté au sommet\", \"lapin pressé\"]\nwith open(\"observations.txt\", \"w\") as f:\n    for l in lignes:\n        f.write(l + \"\\n\")\nwith open(\"observations.txt\", \"r\") as f:\n    renards = [l.strip() for l in f.readlines() if \"renard\" in l]\nprint(renards)"}
},
{
id: 26, titre: "JSON", icone: "🗂️", region: 3,
lecon: [
["p","JSON est LE format d'échange de données du web. Le module json convertit : json.dumps(objet) → chaîne JSON, json.loads(chaine) → objet Python."],
["c","import json\ndonnees = {\"nom\": \"Pixel\", \"niveau\": 3}\ntexte = json.dumps(donnees)      # '{\"nom\": \"Pixel\", \"niveau\": 3}'\nretour = json.loads(texte)        # de nouveau un dict"],
["p","Un dict Python devient un objet JSON, une liste devient un tableau, None devient null. Les clés JSON sont toujours des chaînes."]
],
ex: [
{t:"L'encodeur de messages", p:"Convertis le dict profil en chaîne JSON dans texte avec json.dumps, puis vérifie le type : stocke type(texte).__name__ dans le_type.",
starter:"import json\nprofil = {\"nom\": \"Pixel\", \"badges\": 5}\n",
test:"import json as _j\nassert _j.loads(texte) == {\"nom\": \"Pixel\", \"badges\": 5}, \"texte = json.dumps(profil).\"\nassert le_type == \"str\", \"json.dumps renvoie une chaîne (str).\"",
hints:["texte = json.dumps(profil)","type(x).__name__ donne le nom du type.","le_type = type(texte).__name__"],
sol:"import json\nprofil = {\"nom\": \"Pixel\", \"badges\": 5}\ntexte = json.dumps(profil)\nle_type = type(texte).__name__\nprint(texte, le_type)"},
{t:"Le décodeur du serveur", p:"Le « serveur » a envoyé la chaîne reponse. Décode-la avec json.loads dans donnees, puis extrais premiere, le nom de la première quête de la liste.",
starter:"import json\nreponse = '{\"joueur\": \"Pixel\", \"quetes\": [\"baies\", \"rivière\", \"sommet\"]}'\n",
test:"assert donnees[\"joueur\"] == \"Pixel\", \"donnees = json.loads(reponse).\"\nassert premiere == \"baies\", \"premiere = donnees[\\\"quetes\\\"][0].\"",
hints:["json.loads transforme la chaîne en dict.","Les quêtes sont dans donnees[\"quetes\"].","premiere = donnees[\"quetes\"][0]"],
sol:"import json\nreponse = '{\"joueur\": \"Pixel\", \"quetes\": [\"baies\", \"rivière\", \"sommet\"]}'\ndonnees = json.loads(reponse)\npremiere = donnees[\"quetes\"][0]\nprint(donnees, premiere)"}
],
quiz: [
{q:"json.dumps transforme…", opts:["JSON → Python","Python → chaîne JSON","un fichier → un dict"], a:1},
{q:"Que devient None en JSON ?", opts:["none","null","undefined"], a:1},
{q:"Quel type Python correspond à un tableau JSON ?", opts:["tuple","list","set"], a:1}
],
boss: {t:"La sauvegarde du jeu", p:"1) Décode la sauvegarde JSON. 2) Ajoute 50 à l'XP et ajoute \"json\" à la liste des badges. 3) Ré-encode le tout dans nouvelle_sauvegarde avec json.dumps.",
starter:"import json\nsauvegarde = '{\"nom\": \"Pixel\", \"xp\": 120, \"badges\": [\"listes\", \"boucles\"]}'\n",
test:"import json as _j\nd = _j.loads(nouvelle_sauvegarde)\nassert d[\"xp\"] == 170, \"L'XP doit passer de 120 à 170.\"\nassert d[\"badges\"] == [\"listes\", \"boucles\", \"json\"], \"Ajoute 'json' à la fin des badges.\"\nassert d[\"nom\"] == \"Pixel\", \"Le nom ne change pas.\"",
hints:["donnees = json.loads(sauvegarde)","donnees[\"xp\"] += 50 et donnees[\"badges\"].append(\"json\")","nouvelle_sauvegarde = json.dumps(donnees)"],
sol:"import json\nsauvegarde = '{\"nom\": \"Pixel\", \"xp\": 120, \"badges\": [\"listes\", \"boucles\"]}'\ndonnees = json.loads(sauvegarde)\ndonnees[\"xp\"] += 50\ndonnees[\"badges\"].append(\"json\")\nnouvelle_sauvegarde = json.dumps(donnees)\nprint(nouvelle_sauvegarde)"}
},
{
id: 27, titre: "Dates & heures", icone: "🕐", region: 3,
lecon: [
["p","Le module datetime manipule les dates. date(2026, 7, 7) crée une date ; les objets date ont .year, .month, .day et .weekday() (0 = lundi)."],
["c","from datetime import date, timedelta\nnoel = date(2026, 12, 25)\nprint(noel.year)             # 2026\ndans_10_jours = noel + timedelta(days=10)"],
["p","timedelta représente une durée : on peut l'ajouter à une date, et soustraire deux dates donne un timedelta (.days). .strftime(\"%d/%m/%Y\") formate en texte."]
],
ex: [
{t:"L'anniversaire du renard", p:"Pixel est né le 15 mars 2024. Crée naissance avec date(), puis extrais annee, mois et jour depuis l'objet.",
starter:"from datetime import date\n# naissance = ...\n",
test:"from datetime import date as _d\nassert naissance == _d(2024, 3, 15), \"naissance = date(2024, 3, 15).\"\nassert annee == 2024 and mois == 3 and jour == 15, \"Utilise .year, .month et .day.\"",
hints:["date(annee, mois, jour) — dans cet ordre.","naissance = date(2024, 3, 15)","annee = naissance.year, etc."],
sol:"from datetime import date\nnaissance = date(2024, 3, 15)\nannee = naissance.year\nmois = naissance.month\njour = naissance.day\nprint(naissance, annee, mois, jour)"},
{t:"Le voyage dans le temps", p:"Depuis le 1er juillet 2026, ajoute 45 jours avec timedelta pour obtenir arrivee. Formate-la dans texte au format JJ/MM/AAAA avec .strftime(\"%d/%m/%Y\").",
starter:"from datetime import date, timedelta\ndepart = date(2026, 7, 1)\n",
test:"from datetime import date as _d\nassert arrivee == _d(2026, 8, 15), \"arrivee = depart + timedelta(days=45).\"\nassert texte == \"15/08/2026\", \"texte = arrivee.strftime(\\\"%d/%m/%Y\\\").\"",
hints:["timedelta(days=45) est une durée de 45 jours.","On additionne une date et un timedelta.","%d = jour, %m = mois, %Y = année sur 4 chiffres."],
sol:"from datetime import date, timedelta\ndepart = date(2026, 7, 1)\narrivee = depart + timedelta(days=45)\ntexte = arrivee.strftime(\"%d/%m/%Y\")\nprint(texte)"}
],
quiz: [
{q:"Que renvoie la soustraction de deux dates ?", opts:["Un int","Un timedelta","Une erreur"], a:1},
{q:"Dans strftime, %Y représente…", opts:["L'année sur 4 chiffres","Le mois","Le jour de la semaine"], a:0},
{q:"Que vaut date(2026, 1, 1).weekday() si le 1er janvier 2026 est un jeudi ?", opts:["4","3","1"], a:1}
],
boss: {t:"Le compte à rebours de l'hibernation", p:"L'hibernation commence le 21 décembre 2026. Nous sommes le 7 juillet 2026. Calcule jours_restants (nombre de jours entre les deux) et semaines (nombre de semaines entières avec //).",
starter:"from datetime import date\naujourdhui = date(2026, 7, 7)\nhibernation = date(2026, 12, 21)\n",
test:"assert jours_restants == 167, \"jours_restants = (hibernation - aujourdhui).days = 167.\"\nassert semaines == 23, \"semaines = jours_restants // 7 = 23.\"",
hints:["La différence de deux dates : hibernation - aujourdhui.","Le résultat a un attribut .days.","semaines = jours_restants // 7"],
sol:"from datetime import date\naujourdhui = date(2026, 7, 7)\nhibernation = date(2026, 12, 21)\njours_restants = (hibernation - aujourdhui).days\nsemaines = jours_restants // 7\nprint(jours_restants, semaines)"}
},
{
id: 28, titre: "Math & random", icone: "🎲", region: 3,
lecon: [
["p","Deux modules puissants : math (sqrt, floor, ceil, pi, factorial…) et random (randint, choice, shuffle, sample…). Rappel : random.seed(n) fixe le hasard pour le rendre reproductible."],
["c","import random\nrandom.seed(7)\nequipe = random.sample([\"Pixel\", \"Roxy\", \"Nox\", \"Fenn\"], 2)\nprint(equipe)   # 2 renards tirés au sort"],
["p","math.factorial(5) = 120, math.gcd(a, b) = plus grand diviseur commun. Ces outils t'éviteront de réinventer la roue !"]
],
ex: [
{t:"Les maths express", p:"Avec math, calcule fact (factorielle de 6), pgcd (le PGCD de 48 et 36) et racine (sqrt de 2 arrondie à 3 décimales).",
starter:"import math\n",
test:"assert fact == 720, \"math.factorial(6) = 720.\"\nassert pgcd == 12, \"math.gcd(48, 36) = 12.\"\nassert racine == 1.414, \"round(math.sqrt(2), 3) = 1.414.\"",
hints:["math.factorial(6)","math.gcd(48, 36)","racine = round(math.sqrt(2), 3)"],
sol:"import math\nfact = math.factorial(6)\npgcd = math.gcd(48, 36)\nracine = round(math.sqrt(2), 3)\nprint(fact, pgcd, racine)"},
{t:"Le tirage de la tombola", p:"Fixe random.seed(10), puis tire gagnants : 3 renards distincts de participants avec random.sample.",
starter:"import random\nparticipants = [\"Pixel\", \"Roxy\", \"Nox\", \"Fenn\", \"Vulpa\", \"Rusty\"]\n# seed puis sample\n",
test:"import random as _r\n_r.seed(10)\nassert gagnants == _r.sample([\"Pixel\", \"Roxy\", \"Nox\", \"Fenn\", \"Vulpa\", \"Rusty\"], 3), \"Fixe seed(10) PUIS gagnants = random.sample(participants, 3).\"",
hints:["random.sample(liste, k) tire k éléments distincts.","La graine doit être fixée AVANT le tirage.","gagnants = random.sample(participants, 3)"],
sol:"import random\nparticipants = [\"Pixel\", \"Roxy\", \"Nox\", \"Fenn\", \"Vulpa\", \"Rusty\"]\nrandom.seed(10)\ngagnants = random.sample(participants, 3)\nprint(gagnants)"}
],
quiz: [
{q:"random.randint(1, 6) peut renvoyer…", opts:["0 à 6","1 à 6 inclus","1 à 5"], a:1},
{q:"Quelle différence entre choice et sample ?", opts:["Aucune","choice tire 1 élément, sample en tire k distincts","sample trie la liste"], a:1},
{q:"Que vaut math.floor(-2.5) ?", opts:["-2","-3","2"], a:1}
],
boss: {t:"Le casino de la forêt", p:"Fixe random.seed(42) puis simule 100 lancers de dé (randint 1 à 6). Compte dans sixes le nombre de 6 obtenus, et calcule moyenne, la moyenne des lancers arrondie à 2 décimales.",
starter:"import random\nrandom.seed(42)\n# 100 lancers...\n",
test:"import random as _r\n_r.seed(42)\n_lancers = [_r.randint(1, 6) for _ in range(100)]\nassert sixes == _lancers.count(6), \"Compte les 6 parmi 100 lancers (seed 42).\"\nassert moyenne == round(sum(_lancers) / 100, 2), \"moyenne = round(somme / 100, 2).\"",
hints:["Stocke les lancers : lancers = [random.randint(1, 6) for _ in range(100)].","sixes = lancers.count(6)","moyenne = round(sum(lancers) / len(lancers), 2)"],
sol:"import random\nrandom.seed(42)\nlancers = [random.randint(1, 6) for _ in range(100)]\nsixes = lancers.count(6)\nmoyenne = round(sum(lancers) / len(lancers), 2)\nprint(sixes, moyenne)"}
},
{
id: 29, titre: "Expressions régulières", icone: "🔍", region: 4,
lecon: [
["p","Bienvenue au Sommet Légendaire ! Les regex (module re) cherchent des MOTIFS dans du texte. re.findall(motif, texte) renvoie toutes les correspondances."],
["c","import re\ntexte = \"Pixel a 3 ans et 150 XP\"\nnombres = re.findall(r\"\\d+\", texte)\nprint(nombres)   # ['3', '150']"],
["p","Motifs de base : \\d chiffre, \\w lettre/chiffre, . n'importe quoi, + une ou plusieurs fois, * zéro ou plus, ^ début, $ fin. re.sub(motif, remplacement, texte) remplace."]
],
ex: [
{t:"Le chasseur de nombres", p:"Avec re.findall et le motif \\d+, extrais tous les nombres du texte dans nombres (des chaînes), puis convertis-les en entiers dans entiers.",
starter:"import re\ntexte = \"Le renard a trouvé 12 baies, 5 pommes et 42 noisettes\"\n",
test:"assert nombres == [\"12\", \"5\", \"42\"], \"nombres = re.findall(r\\\"\\\\d+\\\", texte).\"\nassert entiers == [12, 5, 42], \"entiers = [int(n) for n in nombres].\"",
hints:["Le motif r\"\\d+\" attrape des suites de chiffres.","findall renvoie des chaînes.","entiers = [int(n) for n in nombres]"],
sol:"import re\ntexte = \"Le renard a trouvé 12 baies, 5 pommes et 42 noisettes\"\nnombres = re.findall(r\"\\d+\", texte)\nentiers = [int(n) for n in nombres]\nprint(nombres, entiers)"},
{t:"Le censeur de la forêt", p:"Avec re.sub, remplace tous les nombres du texte par *** dans censure.",
starter:"import re\ntexte = \"Code secret : 4521, PIN : 88\"\n# censure = ...\n",
test:"assert censure == \"Code secret : ***, PIN : ***\", \"censure = re.sub(r\\\"\\\\d+\\\", \\\"***\\\", texte).\"",
hints:["re.sub(motif, remplacement, texte).","Le motif est le même : r\"\\d+\".","censure = re.sub(r\"\\d+\", \"***\", texte)"],
sol:"import re\ntexte = \"Code secret : 4521, PIN : 88\"\ncensure = re.sub(r\"\\d+\", \"***\", texte)\nprint(censure)"}
],
quiz: [
{q:"Que matche \\d+ ?", opts:["Une lettre","Une suite de chiffres","Un espace"], a:1},
{q:"Que fait re.findall ?", opts:["Renvoie la première correspondance","Renvoie toutes les correspondances","Remplace les correspondances"], a:1},
{q:"Pourquoi écrire r\"\\d+\" avec un r ?", opts:["Pour dire regex","Pour que Python n'interprète pas les \\","C'est décoratif"], a:1}
],
boss: {t:"Le videur d'adresses", p:"Définis email_valide(adresse) avec re.match et un motif : des lettres/chiffres/points (\\w et .), un @, des lettres/chiffres, un point, 2 lettres ou plus.",
starter:"import re\ndef email_valide(adresse):\n    pass\n",
test:"assert email_valide(\"pixel@foret.fr\") == True, \"pixel@foret.fr est valide.\"\nassert email_valide(\"roxy.renard@bois.com\") == True, \"Les points avant le @ sont permis.\"\nassert email_valide(\"pas-un-email\") == False, \"Sans @, c'est invalide.\"\nassert email_valide(\"a@b\") == False, \"Il manque le domaine (.fr, .com...).\"",
hints:["re.match(motif, adresse) teste depuis le début de la chaîne.","re.match renvoie None si ça ne matche pas : convertis avec bool(...).","return bool(re.match(r\"^[\\w.]+@\\w+\\.[a-z]{2,}$\", adresse))"],
sol:"import re\ndef email_valide(adresse):\n    return bool(re.match(r\"^[\\w.]+@\\w+\\.[a-z]{2,}$\", adresse))\nprint(email_valide(\"pixel@foret.fr\"))"}
},
{
id: 30, titre: "Manipulation de données", icone: "📊", region: 4,
lecon: [
["p","Le quotidien du code : des listes de dictionnaires (comme des lignes de tableur). On les filtre avec des compréhensions, on les trie avec sorted(key=...), on les agrège avec sum()."],
["c","releves = [\n    {\"zone\": \"nord\", \"baies\": 12},\n    {\"zone\": \"sud\", \"baies\": 30},\n]\ngros = [r for r in releves if r[\"baies\"] > 20]\ntotal = sum(r[\"baies\"] for r in releves)"],
["p","Ce sont exactement les gestes que tu retrouveras plus tard avec pandas — mais en Python pur."]
],
ex: [
{t:"Le recensement", p:"Avec les relevés donnés : calcule total_baies (somme des baies), et zones_riches (liste des NOMS de zones avec plus de 15 baies, dans l'ordre).",
starter:"releves = [\n    {\"zone\": \"nord\", \"baies\": 12},\n    {\"zone\": \"sud\", \"baies\": 30},\n    {\"zone\": \"est\", \"baies\": 8},\n    {\"zone\": \"ouest\", \"baies\": 22},\n]\n",
test:"assert total_baies == 72, \"total_baies = sum(r[\\\"baies\\\"] for r in releves) = 72.\"\nassert zones_riches == [\"sud\", \"ouest\"], \"zones_riches = [r[\\\"zone\\\"] for r in releves if r[\\\"baies\\\"] > 15].\"",
hints:["sum accepte une expression génératrice : sum(r[\"baies\"] for r in releves).","Filtre puis extrais le nom dans une même compréhension.","zones_riches = [r[\"zone\"] for r in releves if r[\"baies\"] > 15]"],
sol:"releves = [\n    {\"zone\": \"nord\", \"baies\": 12},\n    {\"zone\": \"sud\", \"baies\": 30},\n    {\"zone\": \"est\", \"baies\": 8},\n    {\"zone\": \"ouest\", \"baies\": 22},\n]\ntotal_baies = sum(r[\"baies\"] for r in releves)\nzones_riches = [r[\"zone\"] for r in releves if r[\"baies\"] > 15]\nprint(total_baies, zones_riches)"},
{t:"Le tri des explorateurs", p:"Trie les explorateurs par XP décroissant dans classement (sorted + key), puis calcule moyenne_xp arrondie à 1 décimale.",
starter:"explorateurs = [\n    {\"nom\": \"Pixel\", \"xp\": 340},\n    {\"nom\": \"Roxy\", \"xp\": 520},\n    {\"nom\": \"Nox\", \"xp\": 150},\n]\n",
test:"assert [e[\"nom\"] for e in classement] == [\"Roxy\", \"Pixel\", \"Nox\"], \"Trie avec key=lambda e: e[\\\"xp\\\"] et reverse=True.\"\nassert moyenne_xp == 336.7, \"moyenne_xp = round(somme / 3, 1) = 336.7.\"",
hints:["classement = sorted(explorateurs, key=lambda e: e[\"xp\"], reverse=True)","La moyenne : somme des xp divisée par le nombre d'explorateurs.","moyenne_xp = round(sum(e[\"xp\"] for e in explorateurs) / len(explorateurs), 1)"],
sol:"explorateurs = [\n    {\"nom\": \"Pixel\", \"xp\": 340},\n    {\"nom\": \"Roxy\", \"xp\": 520},\n    {\"nom\": \"Nox\", \"xp\": 150},\n]\nclassement = sorted(explorateurs, key=lambda e: e[\"xp\"], reverse=True)\nmoyenne_xp = round(sum(e[\"xp\"] for e in explorateurs) / len(explorateurs), 1)\nprint(classement, moyenne_xp)"}
],
quiz: [
{q:"Comment accéder au nom dans {\"nom\": \"Pixel\", \"xp\": 3} ?", opts:["d.nom","d[\"nom\"]","d(nom)"], a:1},
{q:"sum(r[\"x\"] for r in liste) est…", opts:["une erreur de syntaxe","une expression génératrice","une boucle while"], a:1},
{q:"Pour trier des dicts par une clé, on utilise…", opts:["liste.sort_by(\"cle\")","sorted(liste, key=lambda d: d[\"cle\"])","sorted(liste[\"cle\"])"], a:1}
],
boss: {t:"Le rapport de la saison", p:"Groupe les captures par espèce : construis le dict par_espece où chaque espèce est associée au TOTAL de ses captures. Ex : {\"souris\": 19, ...}",
starter:"captures = [\n    {\"espece\": \"souris\", \"nombre\": 12},\n    {\"espece\": \"lapin\", \"nombre\": 3},\n    {\"espece\": \"souris\", \"nombre\": 7},\n    {\"espece\": \"mulot\", \"nombre\": 5},\n    {\"espece\": \"lapin\", \"nombre\": 2},\n]\npar_espece = {}\n",
test:"assert par_espece == {\"souris\": 19, \"lapin\": 5, \"mulot\": 5}, \"Additionne les captures par espèce avec .get(espece, 0).\"",
hints:["Parcours les captures avec une boucle for.","Le motif d'agrégation : d[k] = d.get(k, 0) + valeur.","par_espece[c[\"espece\"]] = par_espece.get(c[\"espece\"], 0) + c[\"nombre\"]"],
sol:"captures = [\n    {\"espece\": \"souris\", \"nombre\": 12},\n    {\"espece\": \"lapin\", \"nombre\": 3},\n    {\"espece\": \"souris\", \"nombre\": 7},\n    {\"espece\": \"mulot\", \"nombre\": 5},\n    {\"espece\": \"lapin\", \"nombre\": 2},\n]\npar_espece = {}\nfor c in captures:\n    par_espece[c[\"espece\"]] = par_espece.get(c[\"espece\"], 0) + c[\"nombre\"]\nprint(par_espece)"}
},
{
id: 31, titre: "Algorithmes classiques", icone: "🧠", region: 4,
lecon: [
["p","Un algorithme est une recette de résolution. Les grands classiques : la recherche linéaire (regarder chaque élément), la recherche binaire (couper en deux une liste triée — bien plus rapide), les tris."],
["c","def recherche(liste, cible):\n    for i, x in enumerate(liste):\n        if x == cible:\n            return i\n    return -1"],
["p","enumerate(liste) donne (indice, valeur) à chaque tour — très pratique. La recherche binaire ne fait que ~10 comparaisons pour 1000 éléments !"]
],
ex: [
{t:"Le pisteur", p:"Définis trouver(liste, cible) qui renvoie l'INDICE de la première occurrence de cible, ou -1 si absente. Utilise enumerate.",
starter:"def trouver(liste, cible):\n    pass\n",
test:"assert trouver([\"a\", \"b\", \"c\"], \"b\") == 1, \"'b' est à l'indice 1.\"\nassert trouver([5, 3, 5], 5) == 0, \"La PREMIÈRE occurrence : indice 0.\"\nassert trouver([1, 2], 9) == -1, \"Absent → -1.\"",
hints:["for i, x in enumerate(liste):","Si x == cible : return i immédiatement.","Après la boucle : return -1."],
sol:"def trouver(liste, cible):\n    for i, x in enumerate(liste):\n        if x == cible:\n            return i\n    return -1\nprint(trouver([\"a\", \"b\", \"c\"], \"b\"))"},
{t:"La recherche binaire", p:"Complète recherche_binaire(liste, cible) sur une liste TRIÉE : renvoie True si cible est présente. À chaque tour, compare avec l'élément du milieu et élimine une moitié.",
starter:"def recherche_binaire(liste, cible):\n    gauche = 0\n    droite = len(liste) - 1\n    while gauche <= droite:\n        milieu = (gauche + droite) // 2\n        # compare liste[milieu] à cible...\n        pass\n    return False\n",
test:"assert recherche_binaire([1, 3, 5, 7, 9, 11], 7) == True, \"7 est dans la liste.\"\nassert recherche_binaire([1, 3, 5, 7, 9, 11], 4) == False, \"4 n'y est pas.\"\nassert recherche_binaire(list(range(0, 1000, 2)), 500) == True, \"Ça doit marcher sur 500 éléments.\"",
hints:["Si liste[milieu] == cible : return True.","Si liste[milieu] < cible : gauche = milieu + 1 (la moitié gauche est éliminée).","Sinon : droite = milieu - 1."],
sol:"def recherche_binaire(liste, cible):\n    gauche = 0\n    droite = len(liste) - 1\n    while gauche <= droite:\n        milieu = (gauche + droite) // 2\n        if liste[milieu] == cible:\n            return True\n        elif liste[milieu] < cible:\n            gauche = milieu + 1\n        else:\n            droite = milieu - 1\n    return False\nprint(recherche_binaire([1, 3, 5, 7, 9, 11], 7))"}
],
quiz: [
{q:"La recherche binaire exige une liste…", opts:["de nombres uniquement","triée","sans doublons"], a:1},
{q:"Que renvoie enumerate([\"a\", \"b\"]) à chaque tour ?", opts:["la valeur seule","(indice, valeur)","l'indice seul"], a:1},
{q:"Pour 1024 éléments, la recherche binaire fait environ…", opts:["10 comparaisons","512 comparaisons","1024 comparaisons"], a:0}
],
boss: {t:"Le maître des anagrammes", p:"Définis sont_anagrammes(a, b) : True si les deux mots contiennent exactement les mêmes lettres (ignore majuscules et espaces). Ex : \"chien\" et \"niche\" → True.",
starter:"def sont_anagrammes(a, b):\n    pass\n",
test:"assert sont_anagrammes(\"chien\", \"niche\") == True, \"'chien' et 'niche' sont des anagrammes.\"\nassert sont_anagrammes(\"renard\", \"canard\") == False, \"Pas les mêmes lettres.\"\nassert sont_anagrammes(\"Le renard\", \"lard nree\") == True, \"Ignore les espaces et les majuscules.\"",
hints:["Nettoie : x.replace(\" \", \"\").lower().","sorted(\"abc\") renvoie la liste triée des lettres.","return sorted(na) == sorted(nb) après nettoyage."],
sol:"def sont_anagrammes(a, b):\n    na = a.replace(\" \", \"\").lower()\n    nb = b.replace(\" \", \"\").lower()\n    return sorted(na) == sorted(nb)\nprint(sont_anagrammes(\"chien\", \"niche\"))"}
},
{
id: 32, titre: "Récursivité", icone: "🪞", region: 4,
lecon: [
["p","Une fonction récursive s'appelle ELLE-MÊME sur un problème plus petit. Deux ingrédients obligatoires : le cas de base (où l'on s'arrête) et l'appel récursif (qui rapproche du cas de base)."],
["c","def compte_a_rebours(n):\n    if n == 0:              # cas de base\n        print(\"Boum !\")\n    else:\n        print(n)\n        compte_a_rebours(n - 1)   # appel récursif"],
["p","Sans cas de base, la fonction s'appelle à l'infini → RecursionError ! La récursivité brille sur les problèmes « emboîtés » : factorielle, arborescences, labyrinthes."]
],
ex: [
{t:"La factorielle du renard", p:"Définis factorielle(n) en récursif : cas de base n <= 1 → renvoie 1 ; sinon renvoie n * factorielle(n - 1).",
starter:"def factorielle(n):\n    # cas de base, puis appel récursif\n    pass\n",
test:"assert factorielle(1) == 1, \"Cas de base : factorielle(1) = 1.\"\nassert factorielle(5) == 120, \"5 * 4 * 3 * 2 * 1 = 120.\"\nassert factorielle(0) == 1, \"Par convention, factorielle(0) = 1 (cas de base n <= 1).\"",
hints:["if n <= 1: return 1 — c'est le cas de base.","Sinon : return n * factorielle(n - 1).","Chaque appel réduit n de 1, jusqu'au cas de base."],
sol:"def factorielle(n):\n    if n <= 1:\n        return 1\n    return n * factorielle(n - 1)\nprint(factorielle(5))"},
{t:"La somme en cascade", p:"Définis somme_liste(liste) en récursif : liste vide → 0 (cas de base) ; sinon le premier élément + somme_liste du reste (liste[1:]).",
starter:"def somme_liste(liste):\n    pass\n",
test:"assert somme_liste([]) == 0, \"Cas de base : la liste vide vaut 0.\"\nassert somme_liste([5]) == 5, \"Un seul élément : 5 + somme([]) = 5.\"\nassert somme_liste([1, 2, 3, 4]) == 10, \"1 + somme([2, 3, 4]) = 10, de proche en proche.\"",
hints:["if liste == []: return 0 (ou if not liste:).","Le reste de la liste : liste[1:].","return liste[0] + somme_liste(liste[1:])"],
sol:"def somme_liste(liste):\n    if not liste:\n        return 0\n    return liste[0] + somme_liste(liste[1:])\nprint(somme_liste([1, 2, 3, 4]))"}
],
quiz: [
{q:"Que se passe-t-il sans cas de base ?", opts:["La fonction renvoie None","RecursionError : appels infinis","Python ajoute un cas de base"], a:1},
{q:"Une fonction récursive…", opts:["s'appelle elle-même","appelle sa parente","boucle avec while"], a:0},
{q:"Le cas de base sert à…", opts:["accélérer la fonction","arrêter les appels","initialiser les variables"], a:1}
],
boss: {t:"L'écho de la montagne", p:"Définis compter_chiffres(n) en récursif : le nombre de chiffres d'un entier positif. Cas de base : n < 10 → 1 chiffre. Sinon : 1 + compter_chiffres(n // 10). Ex : 4821 → 4.",
starter:"def compter_chiffres(n):\n    pass\n",
test:"assert compter_chiffres(7) == 1, \"7 a 1 chiffre (cas de base n < 10).\"\nassert compter_chiffres(42) == 2, \"42 → 1 + compter_chiffres(4) = 2.\"\nassert compter_chiffres(4821) == 4, \"4821 a 4 chiffres.\"\nassert compter_chiffres(1000000) == 7, \"1000000 a 7 chiffres.\"",
hints:["n // 10 enlève le dernier chiffre : 4821 → 482.","if n < 10: return 1.","return 1 + compter_chiffres(n // 10)"],
sol:"def compter_chiffres(n):\n    if n < 10:\n        return 1\n    return 1 + compter_chiffres(n // 10)\nprint(compter_chiffres(4821))"}
},
{
id: 33, titre: "Générateurs", icone: "🌀", region: 4,
lecon: [
["p","Un générateur produit ses valeurs UNE PAR UNE, à la demande, avec yield au lieu de return. Il ne calcule rien tant qu'on ne lui demande pas — parfait pour les grandes séquences."],
["c","def compteur(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\nfor x in compteur(3):\n    print(x)   # 1, 2, 3"],
["p","next(gen) demande la valeur suivante. list(gen) épuise le générateur dans une liste. Une fois épuisé, il est vide !"]
],
ex: [
{t:"La fontaine à carrés", p:"Définis le générateur carres(n) qui produit (yield) les carrés de 1² à n². Stocke list(carres(5)) dans resultat.",
starter:"def carres(n):\n    pass\n\n# resultat = ...\n",
test:"assert resultat == [1, 4, 9, 16, 25], \"list(carres(5)) doit donner [1, 4, 9, 16, 25].\"\nimport types\nassert isinstance(carres(3), types.GeneratorType), \"Utilise yield, pas return : la fonction doit être un générateur.\"",
hints:["for i in range(1, n + 1): puis yield i ** 2.","yield produit une valeur SANS quitter la fonction.","resultat = list(carres(5))"],
sol:"def carres(n):\n    for i in range(1, n + 1):\n        yield i ** 2\n\nresultat = list(carres(5))\nprint(resultat)"},
{t:"Le robinet de valeurs", p:"Le générateur mots() est donné. Tire les DEUX premières valeurs avec next() dans premier et deuxieme.",
starter:"def mots():\n    yield \"renard\"\n    yield \"forêt\"\n    yield \"sommet\"\n\ngen = mots()\n# premier = ..., deuxieme = ...\n",
test:"assert premier == \"renard\", \"premier = next(gen).\"\nassert deuxieme == \"forêt\", \"Chaque next() donne la valeur suivante.\"",
hints:["next(gen) donne la prochaine valeur.","Appelle next(gen) deux fois, dans l'ordre.","premier = next(gen) puis deuxieme = next(gen)"],
sol:"def mots():\n    yield \"renard\"\n    yield \"forêt\"\n    yield \"sommet\"\n\ngen = mots()\npremier = next(gen)\ndeuxieme = next(gen)\nprint(premier, deuxieme)"}
],
quiz: [
{q:"Quel mot-clé transforme une fonction en générateur ?", opts:["return","yield","async"], a:1},
{q:"Que fait next() sur un générateur épuisé ?", opts:["Renvoie None","Recommence du début","Lève StopIteration"], a:2},
{q:"Le grand avantage des générateurs :", opts:["Ils trient automatiquement","Ils ne calculent que ce qui est demandé","Ils sont plus jolis"], a:1}
],
boss: {t:"La spirale de Fibonacci", p:"Définis le générateur fibonacci() (infini !) qui produit 0, 1, 1, 2, 3, 5, 8… (chaque terme = somme des deux précédents). Puis construis dix_premiers en tirant 10 valeurs (boucle + next, ou zip avec range).",
starter:"def fibonacci():\n    a, b = 0, 1\n    # boucle infinie avec yield\n    pass\n\n# dix_premiers = [...]\n",
test:"assert dix_premiers == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], \"Les 10 premiers termes de Fibonacci.\"",
hints:["while True: yield a puis a, b = b, a + b.","Pour en tirer 10 : gen = fibonacci() puis [next(gen) for _ in range(10)].","L'affectation double a, b = b, a + b fait tout d'un coup."],
sol:"def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\ngen = fibonacci()\ndix_premiers = [next(gen) for _ in range(10)]\nprint(dix_premiers)"}
},
{
id: 34, titre: "Projet : le pendu", icone: "🎮", region: 4,
lecon: [
["p","Avant-dernière étape : un vrai mini-projet ! Tu vas construire la logique complète d'un jeu du pendu, morceau par morceau. C'est exactement comme ça qu'on décompose un vrai programme : petites fonctions testables."],
["c","# Le plan du jeu :\n# afficher(mot, trouvees)  → \"p _ t h o _\"\n# gagne(mot, trouvees)     → True/False\n# jouer(mot, essais)       → déroule la partie"],
["p","Chaque exercice de cette zone construit une pièce. Le boss les assemble !"]
],
ex: [
{t:"L'affichage masqué", p:"Définis afficher(mot, trouvees) : renvoie le mot où chaque lettre absente du set trouvees est remplacée par _, les lettres séparées par des espaces. Ex : afficher(\"python\", {\"p\", \"o\"}) → \"p _ _ _ o _\"",
starter:"def afficher(mot, trouvees):\n    pass\n",
test:"assert afficher(\"python\", {\"p\", \"o\"}) == \"p _ _ _ o _\", \"Remplace les lettres non trouvées par _.\"\nassert afficher(\"as\", {\"a\", \"s\"}) == \"a s\", \"Toutes trouvées : le mot complet espacé.\"\nassert afficher(\"oh\", set()) == \"_ _\", \"Rien trouvé : que des _.\"",
hints:["Pour chaque lettre : elle-même si elle est dans trouvees, sinon \"_\".","Compréhension : [l if l in trouvees else \"_\" for l in mot].","Recolle avec \" \".join(...)."],
sol:"def afficher(mot, trouvees):\n    return \" \".join([l if l in trouvees else \"_\" for l in mot])\nprint(afficher(\"python\", {\"p\", \"o\"}))"},
{t:"Le juge de partie", p:"Définis gagne(mot, trouvees) : True si TOUTES les lettres du mot sont dans trouvees.",
starter:"def gagne(mot, trouvees):\n    pass\n",
test:"assert gagne(\"python\", {\"p\", \"y\", \"t\", \"h\", \"o\", \"n\"}) == True, \"Toutes les lettres sont trouvées.\"\nassert gagne(\"python\", {\"p\", \"y\"}) == False, \"Il manque des lettres.\"\nassert gagne(\"aa\", {\"a\"}) == True, \"Les doublons ne comptent qu'une fois.\"",
hints:["set(mot) donne l'ensemble des lettres du mot.","a <= b teste si a est inclus dans b.","return set(mot) <= trouvees"],
sol:"def gagne(mot, trouvees):\n    return set(mot) <= trouvees\nprint(gagne(\"python\", {\"p\", \"y\", \"t\", \"h\", \"o\", \"n\"}))"}
],
quiz: [
{q:"Pourquoi découper un jeu en petites fonctions ?", opts:["C'est plus joli","Chaque pièce est testable et réutilisable","Python l'exige"], a:1},
{q:"Que teste set(\"abc\") <= {\"a\",\"b\",\"c\",\"d\"} ?", opts:["L'égalité","L'inclusion (True ici)","La taille"], a:1},
{q:"Dans un set, les lettres en double…", opts:["comptent double","ne comptent qu'une fois","provoquent une erreur"], a:1}
],
boss: {t:"La partie complète", p:"Assemble le jeu ! Définis jouer(mot, propositions) : parcourt les lettres proposées ; chaque lettre du mot rejoint trouvees, chaque lettre absente coûte 1 vie (6 vies au départ). Renvoie \"gagné\" dès que le mot est complet, \"perdu\" si les vies tombent à 0, \"en cours\" sinon.",
starter:"def jouer(mot, propositions):\n    trouvees = set()\n    vies = 6\n    for lettre in propositions:\n        # à toi !\n        pass\n    return \"en cours\"\n",
test:"assert jouer(\"chat\", [\"c\", \"h\", \"a\", \"t\"]) == \"gagné\", \"Toutes les lettres trouvées → gagné.\"\nassert jouer(\"chat\", [\"x\", \"y\", \"z\", \"w\", \"q\", \"m\"]) == \"perdu\", \"6 erreurs → perdu.\"\nassert jouer(\"chat\", [\"c\", \"x\", \"h\"]) == \"en cours\", \"Partie non finie → en cours.\"\nassert jouer(\"chat\", [\"c\", \"h\", \"a\", \"x\", \"t\"]) == \"gagné\", \"Une erreur en route n'empêche pas de gagner.\"",
hints:["Si lettre in mot : trouvees.add(lettre), sinon vies -= 1.","Après chaque lettre : si set(mot) <= trouvees, return \"gagné\".","Si vies == 0 : return \"perdu\". Le return \"en cours\" final gère le reste."],
sol:"def jouer(mot, propositions):\n    trouvees = set()\n    vies = 6\n    for lettre in propositions:\n        if lettre in mot:\n            trouvees.add(lettre)\n            if set(mot) <= trouvees:\n                return \"gagné\"\n        else:\n            vies -= 1\n            if vies == 0:\n                return \"perdu\"\n    return \"en cours\"\nprint(jouer(\"chat\", [\"c\", \"h\", \"a\", \"t\"]))"}
},
{
id: 35, titre: "Le Grand Examen", icone: "👑", region: 4,
lecon: [
["p","Te voilà au sommet, renard. Cette dernière zone mélange TOUT : chaînes, boucles, dicts, fonctions, compréhensions. Pas de nouvelle notion — juste toi, ton terminal, et la légende qui t'attend."],
["c","# Souviens-toi :\n# - découpe le problème\n# - teste au fur et à mesure\n# - les erreurs sont des indices, pas des échecs"],
["p","Réussis le boss final pour devenir le Renard Argenté. Bonne chance. 🦊"]
],
ex: [
{t:"L'analyseur de texte", p:"Définis analyser(texte) qui renvoie un dict avec : \"mots\" (nombre de mots), \"lettres\" (nombre de caractères sans les espaces) et \"plus_long\" (le mot le plus long — utilise max avec key=len).",
starter:"def analyser(texte):\n    pass\n",
test:"r = analyser(\"le renard traverse la montagne\")\nassert r[\"mots\"] == 5, \"5 mots dans la phrase.\"\nassert r[\"lettres\"] == 26, \"26 caractères sans les espaces.\"\nassert r[\"plus_long\"] == \"traverse\", \"max(mots, key=len) donne le plus long.\"",
hints:["mots = texte.split(\" \").","lettres = len(texte.replace(\" \", \"\")).","plus_long = max(mots, key=len)"],
sol:"def analyser(texte):\n    mots = texte.split(\" \")\n    return {\n        \"mots\": len(mots),\n        \"lettres\": len(texte.replace(\" \", \"\")),\n        \"plus_long\": max(mots, key=len),\n    }\nprint(analyser(\"le renard traverse la montagne\"))"},
{t:"Le comptage légendaire", p:"Définis compter_lettres(texte) qui renvoie le dict {lettre: occurrences} pour chaque lettre (ignore les espaces, tout en minuscules). Ex : \"Glap glap\" → {\"g\": 2, \"l\": 2, \"a\": 2, \"p\": 2}",
starter:"def compter_lettres(texte):\n    pass\n",
test:"assert compter_lettres(\"Glap glap\") == {\"g\": 2, \"l\": 2, \"a\": 2, \"p\": 2}, \"Compte chaque lettre, sans espaces, en minuscules.\"\nassert compter_lettres(\"aA a\") == {\"a\": 3}, \"Majuscules et minuscules comptent ensemble.\"",
hints:["Nettoie : texte.replace(\" \", \"\").lower().","Le motif d'agrégation : d[l] = d.get(l, 0) + 1.","Boucle sur chaque caractère de la chaîne nettoyée."],
sol:"def compter_lettres(texte):\n    d = {}\n    for l in texte.replace(\" \", \"\").lower():\n        d[l] = d.get(l, 0) + 1\n    return d\nprint(compter_lettres(\"Glap glap\"))"}
],
quiz: [
{q:"d.get(k, 0) renvoie…", opts:["toujours 0","d[k] si k existe, sinon 0","une erreur si k absent"], a:1},
{q:"max([\"a\", \"bbb\", \"cc\"], key=len) vaut…", opts:["\"a\"","\"bbb\"","\"cc\""], a:1},
{q:"Quelle est LA bonne habitude face à un bug ?", opts:["Tout réécrire","Lire le message d'erreur et tester petit bout par petit bout","Ajouter des try partout"], a:1}
],
boss: {t:"⚔️ Le Chiffre de César", p:"L'épreuve finale ! Définis chiffrer(texte, decalage) : décale chaque lettre minuscule de decalage positions dans l'alphabet (en rebouclant après z — utilise le modulo 26). Les espaces restent intacts. Ex : chiffrer(\"renard\", 3) → \"uhqdug\".",
starter:"def chiffrer(texte, decalage):\n    resultat = \"\"\n    for c in texte:\n        # si c est un espace : le garder tel quel\n        # sinon : décaler avec ord/chr et % 26\n        pass\n    return resultat\n",
test:"assert chiffrer(\"renard\", 3) == \"uhqdug\", \"Chaque lettre avance de 3 : r→u, e→h...\"\nassert chiffrer(\"xyz\", 3) == \"abc\", \"Après z, on reboucle sur a (modulo 26 !).\"\nassert chiffrer(\"le renard code\", 1) == \"mf sfobse dpef\", \"Les espaces ne bougent pas.\"\nassert chiffrer(\"abc\", 0) == \"abc\", \"Décalage 0 : texte inchangé.\"",
hints:["Position dans l'alphabet : ord(c) - ord(\"a\") (0 à 25).","Nouvelle position : (position + decalage) % 26, puis chr(nouvelle + ord(\"a\")).","if c == \" \": resultat += c, else : la formule."],
sol:"def chiffrer(texte, decalage):\n    resultat = \"\"\n    for c in texte:\n        if c == \" \":\n            resultat += c\n        else:\n            position = ord(c) - ord(\"a\")\n            nouvelle = (position + decalage) % 26\n            resultat += chr(nouvelle + ord(\"a\"))\n    return resultat\nprint(chiffrer(\"renard\", 3))"}
}
];

// Test de placement — 12 questions, de facile à difficile.
// score → zone de départ (déblocage jusqu'à cette zone)
export const PLACEMENT = [
{q:"Que fait print(\"Salut\") ?", opts:["Affiche Salut","Crée une variable Salut","Rien"], a:0},
{q:"Après x = 5 puis x = x + 2, que vaut x ?", opts:["5","7","x + 2"], a:1},
{q:"Que vaut 7 % 2 ?", opts:["3.5","1","3"], a:1},
{q:"Que vaut len(\"chat\") ?", opts:["3","4","5"], a:1},
{q:"Que vaut (3 > 1) and (1 > 3) ?", opts:["True","False","None"], a:1},
{q:"Que vaut [10, 20, 30][1] ?", opts:["10","20","30"], a:1},
{q:"Que génère range(4) ?", opts:["1,2,3,4","0,1,2,3","0,1,2,3,4"], a:1},
{q:"Comment accéder à la valeur de la clé \"a\" dans un dict d ?", opts:["d.a","d[\"a\"]","d(a)"], a:1},
{q:"Que produit [n * 2 for n in [1, 2]] ?", opts:["[2, 4]","[1, 2, 1, 2]","une erreur"], a:0},
{q:"Que renvoie une fonction sans return ?", opts:["0","None","\"\""], a:1},
{q:"Dans une classe, que désigne self ?", opts:["La classe","L'objet en cours","Le module"], a:1},
{q:"Quel mot-clé crée un générateur ?", opts:["return","yield","gen"], a:1}
];

// score (0-12) → dernière zone débloquée
export function zoneDepart(score) {
  if (score <= 2) return 1;
  if (score <= 4) return 5;
  if (score <= 6) return 8;
  if (score <= 8) return 14;
  if (score <= 10) return 20;
  if (score === 11) return 25;
  return 29;
}

export const REGIONS = [
  { nom: "La Clairière des Bases", icone: "🌿" },
  { nom: "La Forêt des Structures", icone: "🌲" },
  { nom: "Les Collines des Fonctions", icone: "⛰️" },
  { nom: "La Montagne des Objets", icone: "🏔️" },
  { nom: "Le Sommet Légendaire", icone: "✨" }
];

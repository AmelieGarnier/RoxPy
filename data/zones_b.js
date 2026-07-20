// PyRenard — Zones 14 à 24 : Forêt des Structures (fin) + Collines des Fonctions + Montagne des Objets
export const ZONES_B = [
{
id: 14, titre: "Dictionnaires", icone: "📖", region: 1,
lecon: [
["p","Un dictionnaire (dict) associe des clés à des valeurs, entre accolades. On accède à une valeur par sa clé, on ajoute ou modifie avec dico[cle] = valeur."],
["c","renard = {\"nom\": \"Pixel\", \"age\": 3}\nprint(renard[\"nom\"])    # Pixel\nrenard[\"xp\"] = 120       # nouvelle clé"],
["p",".get(cle, defaut) évite l'erreur si la clé n'existe pas. On parcourt un dict avec .items() : for cle, valeur in dico.items()."]
],
ex: [
{t:"La fiche du renard", p:"Crée le dict fiche avec les clés \"nom\" (valeur \"Pixel\") et \"niveau\" (valeur 3). Ajoute ensuite la clé \"badge\" avec la valeur \"bronze\". Stocke dans nom la valeur de la clé \"nom\".",
starter:"# fiche = {...}\n",
test:"assert fiche == {\"nom\": \"Pixel\", \"niveau\": 3, \"badge\": \"bronze\"}, \"fiche doit contenir nom, niveau et badge.\"\nassert nom == \"Pixel\", \"nom = fiche[\\\"nom\\\"].\"",
hints:["Syntaxe : {\"cle\": valeur, \"cle2\": valeur2}.","Ajout après coup : fiche[\"badge\"] = \"bronze\".","nom = fiche[\"nom\"]"],
sol:"fiche = {\"nom\": \"Pixel\", \"niveau\": 3}\nfiche[\"badge\"] = \"bronze\"\nnom = fiche[\"nom\"]\nprint(fiche, nom)"},
{t:"La récolte comptée", p:"Parcours le dict recolte avec .items() et affiche une ligne par fruit au format fruit : quantité (ex. baies : 12). Puis calcule total, la somme des quantités.",
starter:"recolte = {\"baies\": 12, \"pommes\": 5, \"noisettes\": 20}\n",
test:"assert \"baies : 12\" in _out, \"Chaque ligne doit avoir le format 'fruit : quantité'.\"\nassert \"noisettes : 20\" in _out, \"Il manque des lignes de la récolte.\"\nassert total == 37, \"total = sum(recolte.values()) = 37.\"",
hints:["for fruit, qte in recolte.items():","print(f\"{fruit} : {qte}\") dans la boucle.","total = sum(recolte.values())"],
sol:"recolte = {\"baies\": 12, \"pommes\": 5, \"noisettes\": 20}\nfor fruit, qte in recolte.items():\n    print(f\"{fruit} : {qte}\")\ntotal = sum(recolte.values())\nprint(total)"}
],
quiz: [
{q:"Comment accéder à la valeur de la clé \"age\" ?", opts:["dico.age","dico[\"age\"]","dico(age)"], a:1},
{q:"Que renvoie dico.get(\"absent\", 0) si la clé n'existe pas ?", opts:["Une erreur","None","0"], a:2},
{q:"Que donne .items() ?", opts:["Les clés seulement","Les valeurs seulement","Les paires clé-valeur"], a:2}
],
boss: {t:"La boutique du terrier", p:"Chaque article a un prix et une quantité. Calcule valeur_totale, la valeur totale du stock (prix × quantité pour chaque article, additionnés). Résultat attendu : 3*10 + 7*4 + 2*25 = 108.",
starter:"boutique = {\n    \"potion\": {\"prix\": 3, \"stock\": 10},\n    \"carte\": {\"prix\": 7, \"stock\": 4},\n    \"amulette\": {\"prix\": 2, \"stock\": 25},\n}\nvaleur_totale = 0\n",
test:"assert valeur_totale == 108, \"Additionne prix * stock pour chaque article : 30 + 28 + 50 = 108.\"",
hints:["Parcours avec for nom, infos in boutique.items():","infos est un dict : infos[\"prix\"] et infos[\"stock\"].","valeur_totale += infos[\"prix\"] * infos[\"stock\"]"],
sol:"boutique = {\n    \"potion\": {\"prix\": 3, \"stock\": 10},\n    \"carte\": {\"prix\": 7, \"stock\": 4},\n    \"amulette\": {\"prix\": 2, \"stock\": 25},\n}\nvaleur_totale = 0\nfor nom, infos in boutique.items():\n    valeur_totale += infos[\"prix\"] * infos[\"stock\"]\nprint(valeur_totale)"}
},
{
id: 15, titre: "Compréhensions", icone: "✨", region: 1,
lecon: [
["p","La compréhension de liste crée une liste en une ligne élégante : [expression for element in sequence]. On peut filtrer avec un if à la fin."],
["c","carres = [n ** 2 for n in range(5)]\nprint(carres)   # [0, 1, 4, 9, 16]\npairs = [n for n in range(10) if n % 2 == 0]\nprint(pairs)    # [0, 2, 4, 6, 8]"],
["p","Ça marche aussi pour les dictionnaires : {cle: valeur for ...} et les sets."]
],
ex: [
{t:"L'usine à doubles", p:"Avec une compréhension de liste, crée doubles : chaque nombre de la liste nombres multiplié par 2.",
starter:"nombres = [3, 7, 1, 9]\n# doubles = [... for ...]\n",
test:"assert doubles == [6, 14, 2, 18], \"doubles = [n * 2 for n in nombres].\"",
hints:["Le modèle : [expression for n in nombres].","L'expression ici est n * 2.","doubles = [n * 2 for n in nombres]"],
sol:"nombres = [3, 7, 1, 9]\ndoubles = [n * 2 for n in nombres]\nprint(doubles)"},
{t:"Le filtre à champignons", p:"Garde uniquement les champignons comestibles : ceux dont le nom NE commence PAS par \"faux_\". Utilise une compréhension avec if et .startswith().",
starter:"champignons = [\"cèpe\", \"faux_cèpe\", \"girolle\", \"faux_mousseron\", \"morille\"]\n# comestibles = [...]\n",
test:"assert comestibles == [\"cèpe\", \"girolle\", \"morille\"], \"Filtre avec : if not c.startswith(\\\"faux_\\\").\"",
hints:["Le filtre s'écrit à la fin : [c for c in champignons if ...].","c.startswith(\"faux_\") renvoie True si le nom commence par faux_.","comestibles = [c for c in champignons if not c.startswith(\"faux_\")]"],
sol:"champignons = [\"cèpe\", \"faux_cèpe\", \"girolle\", \"faux_mousseron\", \"morille\"]\ncomestibles = [c for c in champignons if not c.startswith(\"faux_\")]\nprint(comestibles)"}
],
quiz: [
{q:"Que produit [n + 1 for n in [1, 2, 3]] ?", opts:["[1, 2, 3, 1]","[2, 3, 4]","[1, 2, 3]"], a:1},
{q:"Où se place le if de filtrage ?", opts:["Avant le for","Après le for","Avant l'expression"], a:1},
{q:"Que produit {n: n * n for n in [2, 3]} ?", opts:["[4, 9]","{2: 4, 3: 9}","{4, 9}"], a:1}
],
boss: {t:"Le dico des longueurs", p:"Avec une compréhension de DICTIONNAIRE, crée longueurs : chaque mot de la liste associé à sa longueur. Ex. \"renard\" → 6.",
starter:"mots = [\"renard\", \"forêt\", \"python\", \"as\"]\n# longueurs = {...}\n",
test:"assert longueurs == {\"renard\": 6, \"forêt\": 5, \"python\": 6, \"as\": 2}, \"longueurs = {m: len(m) for m in mots}.\"",
hints:["Modèle : {cle: valeur for element in sequence}.","La clé est le mot, la valeur est len(mot).","longueurs = {m: len(m) for m in mots}"],
sol:"mots = [\"renard\", \"forêt\", \"python\", \"as\"]\nlongueurs = {m: len(m) for m in mots}\nprint(longueurs)"}
},
{
id: 16, titre: "Fonctions", icone: "🧩", region: 2,
lecon: [
["p","Bienvenue dans les Collines des Fonctions ! Une fonction est un bloc de code réutilisable. On la définit avec def, elle peut recevoir des paramètres et renvoyer un résultat avec return."],
["c","def saluer(nom):\n    return f\"Salut {nom} !\"\n\nmessage = saluer(\"Pixel\")\nprint(message)   # Salut Pixel !"],
["p","return renvoie une valeur ET termine la fonction. Sans return, une fonction renvoie None. print affiche, return renvoie : ne les confonds pas !"]
],
ex: [
{t:"La politesse du renard", p:"Définis la fonction presenter(nom) qui RENVOIE (return) la chaîne : Je m'appelle {nom} et je code en Python.",
starter:"def presenter(nom):\n    # return ...\n    pass\n",
test:"assert presenter(\"Pixel\") == \"Je m'appelle Pixel et je code en Python\", \"presenter('Pixel') doit renvoyer la phrase exacte.\"\nassert presenter(\"Roxy\") == \"Je m'appelle Roxy et je code en Python\", \"La fonction doit marcher pour n'importe quel nom.\"",
hints:["Utilise une f-string avec {nom}.","return f\"Je m'appelle {nom} et je code en Python\"","Enlève le pass une fois ton return écrit."],
sol:"def presenter(nom):\n    return f\"Je m'appelle {nom} et je code en Python\"\nprint(presenter(\"Pixel\"))"},
{t:"Le géomètre", p:"Définis aire_rectangle(largeur, hauteur) qui renvoie l'aire, puis perimetre(largeur, hauteur) qui renvoie le périmètre.",
starter:"def aire_rectangle(largeur, hauteur):\n    pass\n\ndef perimetre(largeur, hauteur):\n    pass\n",
test:"assert aire_rectangle(4, 5) == 20, \"aire_rectangle(4, 5) doit renvoyer 20.\"\nassert aire_rectangle(3, 7) == 21, \"aire = largeur * hauteur.\"\nassert perimetre(4, 5) == 18, \"perimetre(4, 5) doit renvoyer 18.\"\nassert perimetre(2, 3) == 10, \"perimetre = 2 * (largeur + hauteur).\"",
hints:["L'aire : largeur * hauteur.","Le périmètre : 2 * (largeur + hauteur).","Remplace chaque pass par un return."],
sol:"def aire_rectangle(largeur, hauteur):\n    return largeur * hauteur\n\ndef perimetre(largeur, hauteur):\n    return 2 * (largeur + hauteur)\n\nprint(aire_rectangle(4, 5), perimetre(4, 5))"}
],
quiz: [
{q:"Quel mot-clé définit une fonction ?", opts:["function","def","fn"], a:1},
{q:"Que renvoie une fonction sans return ?", opts:["0","\"\"","None"], a:2},
{q:"Quelle est la différence entre print et return ?", opts:["Aucune","print affiche, return renvoie une valeur au programme","return affiche plus vite"], a:1}
],
boss: {t:"Le détecteur de nombres premiers", p:"Définis est_premier(n) qui renvoie True si n est premier (divisible uniquement par 1 et lui-même), False sinon. Les nombres inférieurs à 2 ne sont pas premiers.",
starter:"def est_premier(n):\n    if n < 2:\n        return False\n    # teste les diviseurs de 2 à n-1\n    pass\n",
test:"assert est_premier(2) == True and est_premier(7) == True and est_premier(13) == True, \"2, 7 et 13 sont premiers.\"\nassert est_premier(1) == False and est_premier(9) == False and est_premier(15) == False, \"1, 9 et 15 ne sont pas premiers.\"",
hints:["Parcours d in range(2, n) et teste n % d == 0.","Si un diviseur est trouvé : return False immédiatement.","Après la boucle (aucun diviseur trouvé) : return True."],
sol:"def est_premier(n):\n    if n < 2:\n        return False\n    for d in range(2, n):\n        if n % d == 0:\n            return False\n    return True\n\nprint(est_premier(13))"}
},
{
id: 17, titre: "Portée des variables", icone: "🔭", region: 2,
lecon: [
["p","Une variable créée DANS une fonction est locale : elle n'existe que le temps de l'appel. Une variable créée au niveau du programme est globale : les fonctions peuvent la LIRE, mais pas la modifier directement."],
["c","cri = \"Glap\"          # globale\n\ndef saluer():\n    echo = cri * 2      # lire une globale : OK\n    return echo\n\nprint(saluer())   # GlapGlap\n# print(echo)     # ERREUR : echo n'existe plus ici !"],
["p","La bonne pratique : plutôt que de modifier une globale, une fonction reçoit des paramètres et RENVOIE un résultat. C'est ce qui rend le code prévisible et testable."]
],
ex: [
{t:"La frontière invisible", p:"Définis doubler(n) qui crée une variable locale resultat = n * 2 et la renvoie. Puis appelle-la : valeur = doubler(21).",
starter:"def doubler(n):\n    # resultat = ..., puis return\n    pass\n\n# valeur = ...\n",
test:"assert valeur == 42, \"valeur = doubler(21) = 42.\"\nassert doubler(5) == 10, \"La fonction doit marcher pour tout n.\"\ntry:\n    resultat\n    assert False, \"resultat ne doit PAS exister hors de la fonction : c'est une variable locale !\"\nexcept NameError:\n    pass",
hints:["resultat n'existe que dans la fonction.","return resultat renvoie sa valeur au programme.","valeur = doubler(21) récupère le résultat."],
sol:"def doubler(n):\n    resultat = n * 2\n    return resultat\n\nvaleur = doubler(21)\nprint(valeur)"},
{t:"Le compteur bien élevé", p:"Plutôt qu'une globale modifiée, fais circuler la valeur : définis ajouter_baie(total) qui renvoie total + 1. Enchaîne 3 appels en réutilisant le résultat : stock = ajouter_baie(ajouter_baie(ajouter_baie(0))).",
starter:"def ajouter_baie(total):\n    pass\n\n# stock = ... (3 appels enchaînés)\n",
test:"assert ajouter_baie(0) == 1, \"ajouter_baie(0) doit renvoyer 1.\"\nassert stock == 3, \"3 appels enchaînés depuis 0 : stock = 3.\"",
hints:["return total + 1 — pas de variable globale.","Chaque appel renvoie le nouveau total.","stock = ajouter_baie(ajouter_baie(ajouter_baie(0)))"],
sol:"def ajouter_baie(total):\n    return total + 1\n\nstock = ajouter_baie(ajouter_baie(ajouter_baie(0)))\nprint(stock)"}
],
quiz: [
{q:"Une variable créée dans une fonction est visible…", opts:["partout","seulement dans la fonction","dans le module suivant"], a:1},
{q:"Une fonction peut-elle LIRE une variable globale ?", opts:["Oui","Non","Seulement avec import"], a:0},
{q:"La bonne pratique pour qu'une fonction communique un résultat :", opts:["modifier une globale","print","return"], a:2}
],
boss: {t:"Le terrier à étages", p:"La fonction niveau_suivant(xp) doit renvoyer xp + bonus où bonus est une CONSTANTE globale (25). Définis bonus = 25, la fonction (qui LIT la globale sans la modifier), puis xp_final en l'appelant sur 100.",
starter:"# bonus = ... (globale)\n\ndef niveau_suivant(xp):\n    pass\n\n# xp_final = ...\n",
test:"assert bonus == 25, \"bonus doit valoir 25 au niveau global.\"\nassert niveau_suivant(100) == 125, \"La fonction LIT la globale bonus : xp + bonus.\"\nassert xp_final == 125, \"xp_final = niveau_suivant(100).\"",
hints:["Une fonction peut lire bonus sans le déclarer.","return xp + bonus","xp_final = niveau_suivant(100)"],
sol:"bonus = 25\n\ndef niveau_suivant(xp):\n    return xp + bonus\n\nxp_final = niveau_suivant(100)\nprint(xp_final)"}
},
{
id: 18, titre: "Arguments avancés", icone: "🎒", region: 2,
lecon: [
["p","Un paramètre peut avoir une valeur par défaut : def saluer(nom, cri=\"Glap\"). On peut aussi nommer les arguments à l'appel : saluer(cri=\"Wouf\", nom=\"Rex\")."],
["c","def saluer(nom, cri=\"Glap\"):\n    return f\"{cri}, {nom} !\"\n\nprint(saluer(\"Pixel\"))            # Glap, Pixel !\nprint(saluer(\"Pixel\", \"Youpi\"))   # Youpi, Pixel !"],
["p","*args ramasse un nombre illimité d'arguments dans un tuple ; **kwargs les ramasse nommés dans un dict."],
["c","def total(*args):\n    return sum(args)\nprint(total(1, 2, 3, 4))   # 10"]
],
ex: [
{t:"Le cri par défaut", p:"Définis crier(mot, fois=3) qui renvoie le mot répété fois fois, séparé par des espaces (utilise \" \".join ou la multiplication + strip).",
starter:"def crier(mot, fois=3):\n    pass\n",
test:"assert crier(\"Glap\") == \"Glap Glap Glap\", \"Sans 2e argument, fois vaut 3 par défaut.\"\nassert crier(\"Ouaf\", 2) == \"Ouaf Ouaf\", \"crier('Ouaf', 2) → 'Ouaf Ouaf'.\"",
hints:["[mot] * fois crée une liste de répétitions.","\" \".join(liste) colle avec des espaces.","return \" \".join([mot] * fois)"],
sol:"def crier(mot, fois=3):\n    return \" \".join([mot] * fois)\nprint(crier(\"Glap\"))"},
{t:"Le grand total", p:"Définis banquet(*plats) qui accepte autant de plats que l'on veut (des nombres de baies) et renvoie leur somme. banquet() sans argument doit renvoyer 0.",
starter:"def banquet(*plats):\n    pass\n",
test:"assert banquet(3, 5, 2) == 10, \"banquet(3, 5, 2) doit renvoyer 10.\"\nassert banquet() == 0, \"Sans argument, la somme est 0.\"\nassert banquet(7) == 7, \"banquet(7) doit renvoyer 7.\"",
hints:["*plats regroupe tous les arguments dans un tuple.","sum() fonctionne sur un tuple.","return sum(plats)"],
sol:"def banquet(*plats):\n    return sum(plats)\nprint(banquet(3, 5, 2))"}
],
quiz: [
{q:"def f(x, y=2) : quel appel est INVALIDE ?", opts:["f(1)","f(1, 3)","f()"], a:2},
{q:"Dans def f(*args), args est…", opts:["une liste","un tuple","un dict"], a:1},
{q:"**kwargs regroupe…", opts:["les arguments nommés dans un dict","tous les arguments dans une liste","les valeurs par défaut"], a:0}
],
boss: {t:"La fiche souple", p:"Définis fiche(nom, **infos) qui renvoie une chaîne commençant par nom, suivie de chaque paire clé=valeur triée par clé, le tout séparé par des virgules. Ex : fiche(\"Pixel\", age=3, xp=50) → \"Pixel, age=3, xp=50\".",
starter:"def fiche(nom, **infos):\n    pass\n",
test:"assert fiche(\"Pixel\", age=3, xp=50) == \"Pixel, age=3, xp=50\", \"Format : 'Pixel, age=3, xp=50' (clés triées).\"\nassert fiche(\"Roxy\") == \"Roxy\", \"Sans info supplémentaire, juste le nom.\"\nassert fiche(\"Nox\", zone=2) == \"Nox, zone=2\", \"fiche('Nox', zone=2) → 'Nox, zone=2'.\"",
hints:["sorted(infos.items()) trie les paires par clé.","Construis les morceaux f\"{k}={v}\" dans une liste.","return \", \".join([nom] + [f\"{k}={v}\" for k, v in sorted(infos.items())])"],
sol:"def fiche(nom, **infos):\n    morceaux = [nom] + [f\"{k}={v}\" for k, v in sorted(infos.items())]\n    return \", \".join(morceaux)\nprint(fiche(\"Pixel\", age=3, xp=50))"}
},
{
id: 19, titre: "Lambda, map & filter", icone: "⚡", region: 2,
lecon: [
["p","Une lambda est une mini-fonction anonyme en une ligne : lambda x: x * 2. Pratique quand une fonction est trop courte pour mériter un def."],
["c","double = lambda x: x * 2\nprint(double(5))   # 10"],
["p","map(f, liste) applique f à chaque élément ; filter(f, liste) garde ceux pour lesquels f renvoie True. On convertit le résultat avec list(). sorted(liste, key=f) trie selon f."],
["c","nums = [1, 2, 3, 4]\nprint(list(map(lambda x: x * 10, nums)))      # [10, 20, 30, 40]\nprint(list(filter(lambda x: x % 2 == 0, nums)))  # [2, 4]"]
],
ex: [
{t:"La machine à tripler", p:"Avec map et une lambda, crée triples : chaque nombre de nums multiplié par 3. N'oublie pas list() autour.",
starter:"nums = [2, 5, 8]\n# triples = list(map(...))\n",
test:"assert triples == [6, 15, 24], \"triples = list(map(lambda x: x * 3, nums)).\"",
hints:["map(fonction, liste) applique la fonction à chaque élément.","La lambda : lambda x: x * 3.","triples = list(map(lambda x: x * 3, nums))"],
sol:"nums = [2, 5, 8]\ntriples = list(map(lambda x: x * 3, nums))\nprint(triples)"},
{t:"Le videur de la fête", p:"Avec filter et une lambda, crée admis : seulement les renards dont l'âge est supérieur ou égal à 2. Puis avec sorted et key, crée tries : les âges triés du plus grand au plus petit (reverse=True).",
starter:"ages = [1, 4, 2, 7, 0, 3]\n# admis = ..., tries = ...\n",
test:"assert admis == [4, 2, 7, 3], \"admis = list(filter(lambda a: a >= 2, ages)).\"\nassert tries == [7, 4, 3, 2, 1, 0], \"tries = sorted(ages, reverse=True).\"",
hints:["filter garde les éléments dont la lambda renvoie True.","admis = list(filter(lambda a: a >= 2, ages))","tries = sorted(ages, reverse=True)"],
sol:"ages = [1, 4, 2, 7, 0, 3]\nadmis = list(filter(lambda a: a >= 2, ages))\ntries = sorted(ages, reverse=True)\nprint(admis, tries)"}
],
quiz: [
{q:"Que vaut (lambda x: x + 1)(4) ?", opts:["4","5","une erreur"], a:1},
{q:"Que fait filter(f, liste) ?", opts:["Applique f à chaque élément","Garde les éléments où f renvoie True","Trie la liste selon f"], a:1},
{q:"À quoi sert key dans sorted ?", opts:["À chiffrer la liste","À indiquer selon quoi trier","À enlever les doublons"], a:1}
],
boss: {t:"Le classement du tournoi", p:"Chaque tuple est (nom, score). Crée classement : la liste triée par score DÉCROISSANT (sorted + key=lambda + reverse=True), puis podium : les noms des 3 premiers (compréhension + découpage [:3]).",
starter:"resultats = [(\"Pixel\", 88), (\"Roxy\", 95), (\"Nox\", 72), (\"Fenn\", 91)]\n",
test:"assert classement == [(\"Roxy\", 95), (\"Fenn\", 91), (\"Pixel\", 88), (\"Nox\", 72)], \"Trie par score décroissant avec key=lambda r: r[1] et reverse=True.\"\nassert podium == [\"Roxy\", \"Fenn\", \"Pixel\"], \"podium = [r[0] for r in classement[:3]].\"",
hints:["key=lambda r: r[1] trie selon le score.","reverse=True pour l'ordre décroissant.","podium = [r[0] for r in classement[:3]]"],
sol:"resultats = [(\"Pixel\", 88), (\"Roxy\", 95), (\"Nox\", 72), (\"Fenn\", 91)]\nclassement = sorted(resultats, key=lambda r: r[1], reverse=True)\npodium = [r[0] for r in classement[:3]]\nprint(classement, podium)"}
},
{
id: 20, titre: "Modules & imports", icone: "📚", region: 2,
lecon: [
["p","Un module est une boîte à outils de fonctions prêtes à l'emploi. On l'importe avec import, puis on utilise module.fonction(). On peut aussi importer une fonction précise : from math import sqrt."],
["c","import math\nprint(math.sqrt(16))   # 4.0\nprint(math.pi)          # 3.141592653589793"],
["p","Le module random tire au hasard : random.randint(a, b), random.choice(liste). Pour des tirages reproductibles (et testables !), on fixe la graine avec random.seed(n)."]
],
ex: [
{t:"La boîte à maths", p:"Importe math, puis calcule racine (racine carrée de 144), plafond (math.ceil de 4.2) et plancher (math.floor de 4.8).",
starter:"import math\n",
test:"assert racine == 12.0, \"racine = math.sqrt(144).\"\nassert plafond == 5, \"math.ceil(4.2) arrondit au-dessus : 5.\"\nassert plancher == 4, \"math.floor(4.8) arrondit en dessous : 4.\"",
hints:["math.sqrt(x) donne la racine carrée.","ceil = plafond (au-dessus), floor = plancher (en dessous).","racine = math.sqrt(144)"],
sol:"import math\nracine = math.sqrt(144)\nplafond = math.ceil(4.2)\nplancher = math.floor(4.8)\nprint(racine, plafond, plancher)"},
{t:"Le dé du destin", p:"Importe random, fixe la graine avec random.seed(42), puis tire de (un entier entre 1 et 6 avec randint) et proie (un élément de proies avec choice).",
starter:"import random\nproies = [\"souris\", \"lapin\", \"mulot\"]\n# random.seed(42) puis tire de et proie\n",
test:"import random as _r\n_r.seed(42)\nassert de == _r.randint(1, 6), \"Fixe la graine PUIS tire : de = random.randint(1, 6).\"\nassert proie == _r.choice([\"souris\", \"lapin\", \"mulot\"]), \"proie = random.choice(proies), après le randint.\"",
hints:["random.seed(42) rend le hasard reproductible.","de = random.randint(1, 6) (bornes incluses).","proie = random.choice(proies)"],
sol:"import random\nproies = [\"souris\", \"lapin\", \"mulot\"]\nrandom.seed(42)\nde = random.randint(1, 6)\nproie = random.choice(proies)\nprint(de, proie)"}
],
quiz: [
{q:"Après import math, comment appeler sqrt ?", opts:["sqrt(9)","math.sqrt(9)","math->sqrt(9)"], a:1},
{q:"Que permet from math import pi ?", opts:["D'écrire pi directement","D'importer tout le module","De renommer math"], a:0},
{q:"À quoi sert random.seed(42) ?", opts:["À tirer le nombre 42","À rendre les tirages reproductibles","À accélérer le hasard"], a:1}
],
boss: {t:"La traversée de la rivière", p:"Un renard saute d'une rive à l'autre : la rivière fait 13 m de large et 8 m de courant l'emporte sur le côté. Avec from math import sqrt, calcule distance, la longueur réelle du saut (théorème de Pythagore : racine de 13² + 8²), arrondie à 2 décimales.",
starter:"from math import sqrt\n# distance = ...\n",
test:"assert distance == 15.26, \"distance = round(sqrt(13 ** 2 + 8 ** 2), 2) = 15.26.\"",
hints:["Pythagore : hypoténuse = sqrt(a² + b²).","Les carrés s'écrivent 13 ** 2 et 8 ** 2.","distance = round(sqrt(13 ** 2 + 8 ** 2), 2)"],
sol:"from math import sqrt\ndistance = round(sqrt(13 ** 2 + 8 ** 2), 2)\nprint(distance)"}
},
{
id: 21, titre: "Gestion des erreurs", icone: "🛡️", region: 2,
lecon: [
["p","Quand Python rencontre un problème, il lève une exception et le programme s'arrête… sauf si on l'attrape avec try/except !"],
["c","try:\n    resultat = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Division par zéro impossible !\")"],
["p","Erreurs courantes : ZeroDivisionError, ValueError (conversion impossible), KeyError (clé absente), TypeError (types incompatibles). On peut lever soi-même une erreur avec raise."]
],
ex: [
{t:"Le bouclier anti-crash", p:"Le code donné plante. Entoure la division d'un try/except ZeroDivisionError qui affiche Impossible de diviser par zéro à la place du crash.",
starter:"a = 10\nb = 0\n# protège cette ligne :\nresultat = a / b\nprint(resultat)\n",
test:"assert \"Impossible de diviser par zéro\" in _out, \"Le message doit s'afficher au lieu du crash.\"",
hints:["Mets le code risqué dans le bloc try:, indenté.","Ajoute except ZeroDivisionError: en dessous.","Dans le except : print(\"Impossible de diviser par zéro\")."],
sol:"a = 10\nb = 0\ntry:\n    resultat = a / b\n    print(resultat)\nexcept ZeroDivisionError:\n    print(\"Impossible de diviser par zéro\")"},
{t:"Le convertisseur prudent", p:"Définis vers_entier(texte) qui renvoie int(texte), ou -1 si la conversion échoue (attrape ValueError).",
starter:"def vers_entier(texte):\n    pass\n",
test:"assert vers_entier(\"42\") == 42, \"vers_entier('42') doit renvoyer 42.\"\nassert vers_entier(\"abc\") == -1, \"En cas d'échec (ValueError), renvoyer -1.\"\nassert vers_entier(\"7\") == 7, \"vers_entier('7') doit renvoyer 7.\"",
hints:["try: return int(texte).","except ValueError: return -1.","Les deux blocs sont dans la fonction."],
sol:"def vers_entier(texte):\n    try:\n        return int(texte)\n    except ValueError:\n        return -1\nprint(vers_entier(\"42\"), vers_entier(\"abc\"))"}
],
quiz: [
{q:"Que lève int(\"bonjour\") ?", opts:["TypeError","ValueError","KeyError"], a:1},
{q:"Quand s'exécute le bloc except ?", opts:["Toujours","Si le try lève l'erreur correspondante","Avant le try"], a:1},
{q:"Que fait raise ValueError(\"oups\") ?", opts:["Attrape une erreur","Lève volontairement une erreur","Ignore les erreurs"], a:1}
],
boss: {t:"La potion de division", p:"Définis division_securisee(a, b) : renvoie a / b normalement, None si b vaut zéro (ZeroDivisionError), et None aussi si les types sont incompatibles (TypeError). Aucune erreur ne doit s'échapper !",
starter:"def division_securisee(a, b):\n    pass\n",
test:"assert division_securisee(10, 2) == 5.0, \"division_securisee(10, 2) doit renvoyer 5.0.\"\nassert division_securisee(3, 0) is None, \"Division par zéro → None.\"\nassert division_securisee(\"dix\", 2) is None, \"Types incompatibles → None.\"",
hints:["Un except peut attraper plusieurs erreurs : except (ZeroDivisionError, TypeError):.","try: return a / b.","Dans le except : return None."],
sol:"def division_securisee(a, b):\n    try:\n        return a / b\n    except (ZeroDivisionError, TypeError):\n        return None\nprint(division_securisee(10, 2))"}
},
{
id: 22, titre: "Chaînes avancées", icone: "🪄", region: 2,
lecon: [
["p","Boîte à outils du texte : .split(sep) découpe une chaîne en liste, sep.join(liste) recolle, .replace(a, b) remplace, .strip() enlève les espaces aux extrémités, .count(x) compte."],
["c","phrase = \"le renard saute le ruisseau\"\nmots = phrase.split(\" \")     # ['le', 'renard', ...]\nprint(\"-\".join(mots))         # le-renard-saute-le-ruisseau\nprint(phrase.count(\"le\"))     # 2"],
["p","Autres méthodes utiles : .startswith(), .endswith(), .find() (indice ou -1), .title() (Majuscule À Chaque Mot)."]
],
ex: [
{t:"Le découpeur de phrases", p:"Découpe la phrase en mots dans mots, compte-les dans nb_mots, puis recolle-les avec des _ dans slug.",
starter:"phrase = \"le renard code en python\"\n",
test:"assert mots == [\"le\", \"renard\", \"code\", \"en\", \"python\"], \"mots = phrase.split(\\\" \\\").\"\nassert nb_mots == 5, \"nb_mots = len(mots).\"\nassert slug == \"le_renard_code_en_python\", \"slug = \\\"_\\\".join(mots).\"",
hints:["phrase.split(\" \") découpe sur les espaces.","len(mots) compte les mots.","\"_\".join(mots) recolle avec des underscores."],
sol:"phrase = \"le renard code en python\"\nmots = phrase.split(\" \")\nnb_mots = len(mots)\nslug = \"_\".join(mots)\nprint(mots, nb_mots, slug)"},
{t:"Le nettoyeur de données", p:"Nettoie la saisie : enlève les espaces autour avec .strip(), remplace les « ; » par des virgules avec .replace(), et mets le résultat en minuscules dans propre.",
starter:"saisie = \"   Baies;Pommes;NOISETTES  \"\n# propre = ...\n",
test:"assert propre == \"baies,pommes,noisettes\", \"Enchaîne .strip(), .replace(';', ','), .lower().\"",
hints:["Les méthodes s'enchaînent : x.strip().replace(...).lower().","replace(\";\", \",\") change chaque ; en virgule.","propre = saisie.strip().replace(\";\", \",\").lower()"],
sol:"saisie = \"   Baies;Pommes;NOISETTES  \"\npropre = saisie.strip().replace(\";\", \",\").lower()\nprint(propre)"}
],
quiz: [
{q:"Que renvoie \"a,b,c\".split(\",\") ?", opts:["\"abc\"","[\"a\", \"b\", \"c\"]","(\"a\", \"b\", \"c\")"], a:1},
{q:"Comment coller [\"a\", \"b\"] avec des tirets ?", opts:["[\"a\", \"b\"].join(\"-\")","\"-\".join([\"a\", \"b\"])","join(\"-\", [\"a\", \"b\"])"], a:1},
{q:"Que renvoie \"  chat  \".strip() ?", opts:["\"chat\"","\"  chat\"","\"c h a t\""], a:0}
],
boss: {t:"Le détecteur de palindromes", p:"Définis est_palindrome(texte) : renvoie True si le texte se lit pareil dans les deux sens, en IGNORANT les espaces et les majuscules. Ex : \"Engage le jeu que je le gagne\" → True.",
starter:"def est_palindrome(texte):\n    # nettoie puis compare avec [::-1]\n    pass\n",
test:"assert est_palindrome(\"kayak\") == True, \"'kayak' est un palindrome.\"\nassert est_palindrome(\"renard\") == False, \"'renard' n'en est pas un.\"\nassert est_palindrome(\"Esope reste ici et se repose\") == True, \"Ignore espaces et majuscules !\"",
hints:["Nettoie : t = texte.replace(\" \", \"\").lower().","Un palindrome vérifie t == t[::-1].","return t == t[::-1]"],
sol:"def est_palindrome(texte):\n    t = texte.replace(\" \", \"\").lower()\n    return t == t[::-1]\nprint(est_palindrome(\"kayak\"))"}
},
{
id: 23, titre: "POO : classes", icone: "🏗️", region: 3,
lecon: [
["p","Bienvenue dans la Montagne des Objets ! Une classe est un plan de fabrication d'objets. __init__ est le constructeur : il initialise les attributs de chaque objet créé. self désigne l'objet lui-même."],
["c","class Renard:\n    def __init__(self, nom):\n        self.nom = nom\n        self.xp = 0\n\npixel = Renard(\"Pixel\")\nprint(pixel.nom)   # Pixel"],
["p","Une méthode est une fonction définie dans la classe : elle reçoit toujours self en premier paramètre et peut lire ou modifier les attributs."]
],
ex: [
{t:"La naissance d'un renard", p:"Crée la classe Renard : le constructeur reçoit nom et couleur et les stocke dans self.nom et self.couleur. Crée ensuite pixel = Renard(\"Pixel\", \"roux\").",
starter:"class Renard:\n    def __init__(self, nom, couleur):\n        pass\n\n# pixel = ...\n",
test:"assert pixel.nom == \"Pixel\", \"pixel.nom doit valoir 'Pixel'.\"\nassert pixel.couleur == \"roux\", \"pixel.couleur doit valoir 'roux'.\"\nautre = Renard(\"Nox\", \"gris\")\nassert autre.nom == \"Nox\", \"La classe doit marcher pour d'autres renards.\"",
hints:["Dans __init__ : self.nom = nom.","Fais pareil pour couleur.","pixel = Renard(\"Pixel\", \"roux\") crée l'objet."],
sol:"class Renard:\n    def __init__(self, nom, couleur):\n        self.nom = nom\n        self.couleur = couleur\n\npixel = Renard(\"Pixel\", \"roux\")\nprint(pixel.nom, pixel.couleur)"},
{t:"Le glapissement de l'objet", p:"Ajoute à la classe Renard une méthode glapir() qui renvoie {nom} dit : Glap ! Ex : pixel.glapir() → \"Pixel dit : Glap !\"",
starter:"class Renard:\n    def __init__(self, nom):\n        self.nom = nom\n\n    def glapir(self):\n        pass\n\npixel = Renard(\"Pixel\")\n",
test:"assert pixel.glapir() == \"Pixel dit : Glap !\", \"pixel.glapir() doit renvoyer 'Pixel dit : Glap !'.\"\nassert Renard(\"Roxy\").glapir() == \"Roxy dit : Glap !\", \"La méthode doit utiliser self.nom.\"",
hints:["La méthode utilise self.nom pour connaître le nom.","Utilise une f-string.","return f\"{self.nom} dit : Glap !\""],
sol:"class Renard:\n    def __init__(self, nom):\n        self.nom = nom\n\n    def glapir(self):\n        return f\"{self.nom} dit : Glap !\"\n\npixel = Renard(\"Pixel\")\nprint(pixel.glapir())"}
],
quiz: [
{q:"Que fait __init__ ?", opts:["Il détruit l'objet","Il initialise l'objet à sa création","Il importe la classe"], a:1},
{q:"Que représente self ?", opts:["La classe elle-même","L'objet en cours","Le module courant"], a:1},
{q:"Comment créer un objet de la classe Chat ?", opts:["new Chat()","Chat()","create Chat"], a:1}
],
boss: {t:"Le renard qui gagne des niveaux", p:"Classe Renard : attributs nom, xp (0 au départ) et niveau (1 au départ). Méthode gagner_xp(points) : ajoute les points à self.xp, et tant que self.xp >= 100, retire 100 XP et augmente self.niveau de 1.",
starter:"class Renard:\n    def __init__(self, nom):\n        self.nom = nom\n        self.xp = 0\n        self.niveau = 1\n\n    def gagner_xp(self, points):\n        pass\n\npixel = Renard(\"Pixel\")\npixel.gagner_xp(250)\n",
test:"assert pixel.niveau == 3, \"250 XP = 2 niveaux gagnés (niveau 3).\"\nassert pixel.xp == 50, \"Il doit rester 50 XP après les 2 passages de niveau.\"\nr2 = Renard(\"Nox\")\nr2.gagner_xp(80)\nassert r2.niveau == 1 and r2.xp == 80, \"80 XP : pas encore de niveau gagné.\"",
hints:["Commence par self.xp += points.","Puis une boucle : while self.xp >= 100:.","Dans la boucle : self.xp -= 100 et self.niveau += 1."],
sol:"class Renard:\n    def __init__(self, nom):\n        self.nom = nom\n        self.xp = 0\n        self.niveau = 1\n\n    def gagner_xp(self, points):\n        self.xp += points\n        while self.xp >= 100:\n            self.xp -= 100\n            self.niveau += 1\n\npixel = Renard(\"Pixel\")\npixel.gagner_xp(250)\nprint(pixel.niveau, pixel.xp)"}
},
{
id: 24, titre: "POO : héritage", icone: "🧬", region: 3,
lecon: [
["p","L'héritage permet à une classe enfant de récupérer les attributs et méthodes d'une classe parente : class RenardArgente(Renard). L'enfant peut redéfinir (surcharger) une méthode ou en ajouter."],
["c","class Animal:\n    def crier(self):\n        return \"...\"\n\nclass Renard(Animal):\n    def crier(self):\n        return \"Glap !\"   # surcharge"],
["p","super() appelle la version parente : super().__init__(...) dans le constructeur enfant évite de tout réécrire."]
],
ex: [
{t:"La famille des animaux", p:"La classe Animal est donnée. Crée Renard qui HÉRITE d'Animal et surcharge crier() pour renvoyer Glap !. Crée renard = Renard().",
starter:"class Animal:\n    def crier(self):\n        return \"...\"\n\n# class Renard(Animal): ...\n",
test:"assert issubclass(Renard, Animal), \"Renard doit hériter d'Animal : class Renard(Animal).\"\nassert renard.crier() == \"Glap !\", \"La méthode crier() surchargée doit renvoyer 'Glap !'.\"\nassert Animal().crier() == \"...\", \"Ne modifie pas la classe Animal.\"",
hints:["L'héritage se déclare entre parenthèses : class Renard(Animal):.","Redéfinis crier dans Renard.","renard = Renard()"],
sol:"class Animal:\n    def crier(self):\n        return \"...\"\n\nclass Renard(Animal):\n    def crier(self):\n        return \"Glap !\"\n\nrenard = Renard()\nprint(renard.crier())"},
{t:"L'appel aux ancêtres", p:"Complète RenardArgente : son constructeur reçoit nom, appelle super().__init__(nom), puis ajoute self.pelage = \"argenté\".",
starter:"class Renard:\n    def __init__(self, nom):\n        self.nom = nom\n        self.pelage = \"roux\"\n\nclass RenardArgente(Renard):\n    def __init__(self, nom):\n        pass\n\nlegende = RenardArgente(\"Pixel\")\n",
test:"assert legende.nom == \"Pixel\", \"super().__init__(nom) doit initialiser le nom.\"\nassert legende.pelage == \"argenté\", \"Après l'appel à super(), redéfinis self.pelage = 'argenté'.\"",
hints:["Première ligne du constructeur enfant : super().__init__(nom).","Ensuite : self.pelage = \"argenté\".","L'ordre compte : super() d'abord, sinon pelage sera écrasé... ou pas initialisé."],
sol:"class Renard:\n    def __init__(self, nom):\n        self.nom = nom\n        self.pelage = \"roux\"\n\nclass RenardArgente(Renard):\n    def __init__(self, nom):\n        super().__init__(nom)\n        self.pelage = \"argenté\"\n\nlegende = RenardArgente(\"Pixel\")\nprint(legende.nom, legende.pelage)"}
],
quiz: [
{q:"Comment déclarer que B hérite de A ?", opts:["class B extends A:","class B(A):","class B inherits A:"], a:1},
{q:"Que fait super() ?", opts:["Accède à la classe parente","Crée un super-objet","Rend la classe plus rapide"], a:0},
{q:"Surcharger une méthode signifie…", opts:["L'appeler plusieurs fois","La redéfinir dans la classe enfant","La supprimer"], a:1}
],
boss: {t:"Le chœur de la forêt", p:"Crée trois classes héritant d'Animal : Renard (crier → Glap), Loup (→ Aouuu) et Hibou (→ Hou). Puis construis choeur : la liste des cris de [Renard(), Loup(), Hibou()] obtenue avec une boucle ou une compréhension (c'est le polymorphisme !).",
starter:"class Animal:\n    def crier(self):\n        return \"...\"\n\n# tes trois classes ici\n\n# choeur = [...]\n",
test:"assert choeur == [\"Glap\", \"Aouuu\", \"Hou\"], \"choeur = [a.crier() for a in [Renard(), Loup(), Hibou()]].\"\nassert issubclass(Renard, Animal) and issubclass(Loup, Animal) and issubclass(Hibou, Animal), \"Les trois classes doivent hériter d'Animal.\"",
hints:["Trois petites classes de 2 lignes chacune.","Chacune surcharge crier() avec son propre son.","choeur = [a.crier() for a in [Renard(), Loup(), Hibou()]]"],
sol:"class Animal:\n    def crier(self):\n        return \"...\"\n\nclass Renard(Animal):\n    def crier(self):\n        return \"Glap\"\n\nclass Loup(Animal):\n    def crier(self):\n        return \"Aouuu\"\n\nclass Hibou(Animal):\n    def crier(self):\n        return \"Hou\"\n\nchoeur = [a.crier() for a in [Renard(), Loup(), Hibou()]]\nprint(choeur)"}
}
];

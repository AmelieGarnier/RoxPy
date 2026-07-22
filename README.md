# 🦊 RoxPy — Apprends Python en t'amusant

**RoxPy** est un jeu d'aventure gratuit pour apprendre **Python** directement dans ton navigateur, sans rien installer.

Tu incarnes un renardeau curieux qui part explorer un monde magique. À chaque zone terminée, tu gagnes des badges, de l'expérience… et ton renard grandit : **Renardeau → Renard → Renard argenté** ✨


## 🎬 Bande-annonce

<!-- ══════════════════════════════════════════════════════════════
     COMMENT AFFICHER LA VIDÉO ICI (lecteur intégré GitHub) :
     1. Sur github.com, ouvre ce README puis clique sur ✏️ (Edit).
     2. Fais glisser le fichier RoxPy_trailer_v5.mp4 directement dans
        la zone de texte, À L'EMPLACEMENT de la ligne ci-dessous.
     3. GitHub téléverse la vidéo et insère tout seul un lien de la forme
        https://github.com/user-attachments/assets/xxxxxxxx
        → il s'affichera automatiquement comme un lecteur vidéo.
     4. Supprime la ligne "_(Bande-annonce à venir…)_" ci-dessous.
     ⚠️ Ne colle PAS un chemin local (assets/RoxPy_trailer_v5.mp4) :
        GitHub n'affiche un lecteur que pour les vidéos téléversées ainsi.
        Taille max : 100 Mo.
     ══════════════════════════════════════════════════════════════ -->

_(Bande-annonce à venir — glisse la vidéo ici, voir le commentaire ci-dessus.)_

## ▶️ Jouer maintenant

👉 **[Lancer RoxPy](https://ameliegarnier.github.io/RoxPy/RoxPy.dc.html)**

## 🎮 Comment jouer

1. Ouvre le jeu dans ton navigateur.
2. Au premier lancement, choisis ton point de départ :
   - **🌱 Je débute** — tu commences à la zone 1 ;
   - **🎓 J'ai des bases** — un petit test de 12 questions estime ton niveau et débloque directement les bonnes zones.
3. Déplace ton renard sur la carte, entre dans une zone et suis les 3 étapes : **leçon → exercices de code → quiz**. Certaines zones cachent un boss ou un coffre !

Le code Python s'exécute **réellement** dans le navigateur : tu écris, tu testes, tu vois le résultat.

## 🗺️ Le monde

**35 zones** réparties en 5 régions, du tout premier `print()` jusqu'au Grand Examen final :

- ✨ **Forêt enchantée** (1-7) — variables, chaînes, `input()` & f-strings, booléens, conditions
- 🏔️ **Montagne enneigée** (8-15) — listes, slicing, boucles, `enumerate` & `zip`, tuples
- 🌙 **Temple lunaire** (16-22) — dictionnaires, compréhensions, fonctions, portée, lambda, modules, erreurs
- 🏘️ **Village forestier** (23-28) — programmation orientée objet, fichiers, JSON, dates
- 🔮 **Sanctuaire RoxPy** (29-35) — regex, algorithmes, récursivité, générateurs, projet final

Trois façons d'explorer :
- 🗺️ **La carte du jeu** — déplace ton renard librement (flèches ou clic)
- 🌍 **La carte du monde** — vue d'ensemble des 35 zones
- 🌄 **Le monde vivant** — balade panoramique dans les décors, région par région

## 💾 Ta progression

Ta progression (badges, zones débloquées, évolution du renard) est **sauvegardée automatiquement** dans ton navigateur. Tu peux fermer l'onglet ou éteindre l'ordinateur : tout est là au retour.

⚠️ La sauvegarde est liée à ton navigateur et ton appareil. Elle est effacée si tu supprimes les données de navigation.

## 🛡️ Anti-triche & sécurité

- **Sauvegarde signée** : la progression stockée dans le navigateur est accompagnée d'une signature d'intégrité. Toute modification manuelle (via la console ou les outils de développement) invalide la sauvegarde, qui repart de zéro.
- **Console verrouillée en production** : les points d'entrée du moteur d'édition sont désactivés quand le jeu tourne en ligne, et un avertissement anti self-XSS s'affiche dans la console.
- **Aucune donnée exécutée** : ce que tape un joueur (nom du renard, code Python des exercices) n'est jamais interprété comme du code de la page — pas de vecteur XSS entre joueurs.
- RoxPy est un jeu 100 % local, sans compte ni classement en ligne : tricher n'affecte que soi.

## 🔄 Recommencer à zéro

Tu peux réinitialiser ta progression **à tout moment** :

1. Ouvre le **🎒 Sac** (bouton en haut de l'écran de jeu).
2. Clique sur **« Recommencer à zéro »**.
3. Confirme : badges, niveaux et évolution sont effacés, et tu repars de la zone 1.

## 🚀 Jouer en local

Télécharge le projet (bouton **Code → Download ZIP**), décompresse-le et ouvre `index.html` dans ton navigateur. C'est tout !

---

Fait avec 🧡 pour tous les renardeaux qui veulent apprendre Python.

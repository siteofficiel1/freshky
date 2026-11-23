FRESHKY — SITE OFFICIEL (GITHUB PAGES)
========================================

VERSION : 23 novembre 2026

SITE : vitrine statique responsive en français / arabe
- Logo officiel Freshky "Pleasure & Health"
- 3 produits : kéfir de lait Nature, Mangue et Miel (photos fournies)
- Aucun prix affiché ; aucun prix fictif ; aucun panier ou paiement
- Accueil : histoire + mission fournies par la startup
- Contacts : freshkystartup@gmail.com et 0540 21 70 92

CONTENU DU ZIP
--------------
index.html       : site principal
styles.css       : styles responsive ordinateur/téléphone
script.js        : traduction FR/AR et menu mobile
assets/          : 3 photos de produits + logo Freshky original et version web
.nojekyll        : fichier requis pour empêcher le traitement Jekyll
README_INSTALLATION.txt : ce guide

IMPORTANT : LE NOM DU DEPOT CONTROLE L'ADRESSE DU SITE
-----------------------------------------------------
Pour obtenir : https://siteofficiel1.github.io/freshky/#produits
Vous devez RENOMMER le dépôt GitHub "LAIT-DZ" en "freshky".
Changer le contenu du ZIP ne peut pas changer le morceau /LAIT-DZ/ de l'adresse.

ÉTAPES SUR GITHUB
-----------------
1. Ouvrez https://github.com/siteofficiel1/LAIT-DZ
2. Dans le dépôt, ouvrez Settings > General.
3. Dans « Repository name », remplacez LAIT-DZ par freshky,
   puis validez "Rename".
4. Retournez dans l'onglet Code du dépôt désormais nommé freshky.
5. Décompressez CE ZIP sur votre PC.
6. Si vous préférez conserver l'ancien contenu pour archive : téléchargez
   une sauvegarde de l'ancien dépôt avant remplacement.
7. Dans GitHub, supprimez de la RACINE les vieux fichiers incompatibles
   (par exemple les anciens READMEs de LAIT-DZ) si nécessaire.
8. Cliquez Add file > Upload files, puis ENVOYEZ À LA RACINE :
     index.html, styles.css, script.js, .nojekyll, README_INSTALLATION.txt
   ainsi que LE DOSSIER assets/ AVEC SES 5 IMAGES.
   Important : téléverser le ZIP en tant que fichier ne publie pas le site.
   Téléverser les fichiers extraits, pas le ZIP lui-même.
   Note : pour téléverser un dossier entier, vous pouvez le déposer par
   glisser-déposer dans la zone "Upload files" de GitHub (sur ordinateur).
9. Cliquez "Commit changes".
10. Settings > Pages : vérifiez "Deploy from a branch", branche "main",
    dossier "/ (root)". Enregistrez si nécessaire.
11. Ouvrez https://siteofficiel1.github.io/freshky/
    ou directement la section produits :
    https://siteofficiel1.github.io/freshky/#produits

Si vous ne renommez pas le dépôt, le site Freshky sera visible sous
https://siteofficiel1.github.io/LAIT-DZ/ mais l'URL gardera LAIT-DZ.

TECHNIQUE
---------
Aucune installation, compilation, base de données, API ou hébergement payant
requis. Les boutons d'information ouvrent l'application e-mail du visiteur,
et le téléphone ouvre l'appel sur les appareils compatibles.
Pas de module d'achat, de collecte de données ni de prix.
Les photos sont locales : pas de dépendance à un site externe pour les images.
Le chargement des polices Google est facultatif : si indisponible, les
polices système sont utilisées.

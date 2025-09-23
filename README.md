<div align="center">
    <img src="assets/cyrex.png" alt="Cyrex Studio Logo" width="140">
</div>

<h1 align="center">Cyrex Studio</h1>

<div align="center">
    <p>Portfolio interactif présentant nos expertises, projets et technologies.</p>
    <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/HTML/html3.svg">
    <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/CSS/css3.svg">
    <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/Javascript/javascript3.svg">
</div>

<br>

## Table des matières

- [Comment utiliser Cyrex Studio](#comment-utiliser-cyrex-studio)
- [Fonctionnalités](#fonctionnalités)
- [Démo](#démo)
- [Structure du projet](#structure-du-projet)
- [Contributeurs](#contributeurs)

# Comment utiliser Cyrex Studio

Pour visualiser le site, suivez ces étapes :

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/LoupesDEV/Cyrex-Studio.git
   ```

2. **Lancer un serveur local** (facultatif, mais recommandé)

   * Avec **VSCode** : clic droit sur `index.html` → **Open with Live Server**.
   * Avec **Python** :

     ```bash
     python3 -m http.server 8000
     ```

3. **Accéder au site**

   Ouvrez [http://localhost:8000](http://localhost:8000) dans votre navigateur.

> 💡 *Le projet fonctionne directement en ouvrant `index.html` dans votre navigateur, sans installation supplémentaire.*

# Fonctionnalités

* **Page d’accueil immersive** 🎨 : Hero avec logo animé et CTA.
* **Expertises** 🛠️ : Présentation des services (Sécurité, Web, Logiciel, Consulting).
* **À propos** 👤 : Infos sur Cyrex Studio, compétences, outils et technologies.
* **Projets** 🚀 : Présentation interactive de BitsDefender, Keyscapes et StreamIt.
* **FAQ interactive** ❓ : Questions/réponses avec ouverture/fermeture animée.
* **Responsive** 📱💻 : Optimisé pour ordinateurs, tablettes et mobiles.
* **Back-to-top button** ⬆️ : Retour rapide en haut de page.

# Démo

Une démo en ligne est disponible :
👉 [https://www.cyrex.fr/](https://www.cyrex.fr/)

# Structure du projet

```
CyrexStudio/
├── index.html        # Page principale
├── style.css         # Styles et thèmes Liquid Glass
├── script.js         # Logique interactive (FAQ, animations, back-to-top)
├── assets/           # Médias (logos, images, icônes, projets)
│   ├── cyrex.png
│   ├── shields/      # Icônes des compétences et outils
│   └── projects/     # Images des projets
└── README.md         # Documentation du projet
```

# Contributeurs

Merci aux personnes et ressources ayant contribué au projet:

- [LoupesDEV](https://github.com/LoupesDEV) — Développement principal, conception et maintenance.

Vous souhaitez contribuer ? Consultez le [guide de contribution](CONTRIBUTING.md) ou ouvrez une *issue* pour proposer
des améliorations.

<p align="center">
    <img alt="Footer" src="https://i.imgur.com/fnZRNIn.png">
    <br><br>
    <img src="https://ziadoua.github.io/m3-Markdown-Badges/badges/LicenceGPLv3/licencegplv33.svg">
</p>
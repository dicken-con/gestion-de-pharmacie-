# 💊 PharmaLink

> *Application web de gestion de pharmacie *

---

## 👥 Équipe

| Nom | Rôle | GitHub | Participation |
|---|---|---|---|
| [N'GOMA MABIALA RICKEN JAIBESS ] | Chef de Projet | dicken-con| Création du dépôt, architecture initiale, dossier types, dossier assets, validation finale et merge vers `main` |
| [OUSMANE FALL] | QA  | fallousmanenoreyni-debug| Revue des Pull Requests, tests fonctionnels, vérification responsive , dossier context, dossier data |
| [AICHA DIAKHATE] | Développeur 1 |  samsoudinegadji-rgb| dossier pages, dossier hooks|
| [SAMGOULE GADJI] | Développeur  2 | aicha-coder| dossier composants , dossier layouts  |

---

## 🌿 Branches

| Branche | Rôle |
|---|---|
| `main` | Branche de production — contient uniquement le code final validé, celle qui sera déployée sur Vercel |
| `dev` | Branche de développement — tout le travail d'équipe se fait ici |

> ⚠️ La branche `main` reste quasiment vide pendant tout le développement. Elle ne reçoit du contenu qu'à la toute fin, via une fusion depuis `dev`.

---

## 🔀 Création du dépôt (par le Chef de Projet)

1. Sur GitHub, cliquer sur le bouton **"+"** (en haut à droite) puis **New repository**.
2. **Repository name** : `pharmalink`
3. **Public/Private** : Public (obligatoire pour l'examen).
4. Cocher **Add a README file**.
5. Cliquer sur **Create repository**.

## 🔀 Configuration du dépôt

1. Aller dans l'onglet **Settings** du dépôt.
2. Creer la branche dev 
3. Dans **settings**, définir **`dev`** comme branche par défaut .
4. Branch name pattern : mets main ou dev.
5. Coche Require a pull request before merging.
6. Coche Require approvals.
7. Dans Required approvals before merging, mets 2 ou 1.
8. (Optionnel mais recommandé) Coche Dismiss stale pull request approvals when new commits are pushed.
9Clique sur Create ou Save changes.

## 🔀 Ajout des collaborateurs

1. Toujours dans **Settings**, cliquer sur **Collaborators** (menu de gauche, section *Access*).
2. Cliquer sur le bouton vert **Add people**.
3. Saisir le nom d'utilisateur ou l'e-mail de chaque personne, un par un :
   - Les 2 développeurs front → droits **Write**
   - La personne QA →  (peut examiner et commenter les Pull Requests) 
4. Chaque personne reçoit une invitation à accepter avant d'avoir accès au dépôt.
5.fork le repo (  toujours decocher le bouton copier seulement....)
---

## 🛠️ Installation du projet (déjà fait par le Chef de Projet)

Voici l'historique exact des commandes utilisées pour monter le projet, dans l'ordre. Ne pas les relancer — cette section sert de référence/documentation.

```bash
# 1. Création du projet React
cd desktop
git clone https://github.com/ton-pseudo/gestion-de-pharmacie-.git
npx create-react-app pharmalinks
cd pharmalinks

# 2. Ajout de TypeScript (version compatible avec react-scripts 5)
npm install typescript@4.9.5 --save --legacy-peer-deps

# 3. Types React
npm install @types/react@19 @types/react-dom@19 --save --legacy-peer-deps

# 4. Navigation
npm install react-router-dom --save --legacy-peer-deps

# 5. Tailwind CSS (version 3, compatible Create React App)
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

# 6. Types Node (utilitaire)
npm install @types/node --save

# 7. Graphiques du Dashboard
npm install recharts

# 8. Icônes
npm install lucide-react
```

### Fichiers supprimés de l'architecture  par défaut de Create React App

```
src/App.js            → remplacé par src/App.tsx
src/index.js          → remplacé par src/index.tsx
src/App.test.js
src/App.css
src/logo.svg
src/setupTests.js
src/reportWebVitals.js
```

### Fichiers de configuration créés

```
.gitignore
tailwind.config.js
postcss.config.js
src/react-app-env.d.ts
src/custom.d.ts
```

### Architecture du projet créée

```
pharmalinks/
├── public/
│   
├── src/
│   ├── assets/(logo-green.svg, logo-white.svg, pharma-pattern-bg.png)=> RICKEN
│   ├── composants/(Navbar, StatCard, Modal, MedicamentForm, EmployeForm, ProtectedRoute)=> GADJI
│   ├── context/(AuthContext, ThemeContext)=> OUSMANE
│   ├── data/(medicaments.ts, employes.ts)=> OUSMANE 
│   ├── hooks/(useAuth, useTheme)=> AICHA
│   ├── layouts/(MainLayout)=> GADJI
│   ├── pages/(Login, Dashboard, Medicaments, Employes, Profil, Contact, Parametres)=> AICHA
│   ├── types/(index.ts)=> RICKEN
│   ├── App.tsx
│   └──custom.d.ts
│   └── react-app-env.d.ts
│   ├── index.tsx
│   └── index.css
└──.gitignore=>
├── tailwind.config.js=>
├── postcss.config.js=>   RICKEN
├── tsconfig.json=>
└── package.json=>
└── pakage-lock.json=>
└── README.md
```

---

## 🔀 Workflow Git (pour les développeurs et le QA)

### 1. Cloner le dépôt

```bash
cd desktop
git clone https://github.com/ton-pseudo/gestion-de-pharmacie-.git
cd gestion-de-pharmacie-
cd pharmalinks
```

### 2. Installer les dépendances (obligatoire après le clone)

```bash
npm install --legacy-peer-deps
```

### 3. Configurer son identité Git (une seule fois par machine)

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@exemple.com"
```

### 4. Créer sa branche personnelle depuis `dev`

```bash
git checkout dev
git pull origin dev
git checkout -b feature/votre-nom
```

### 5. Travailler, puis envoyer son travail

```bash
code .
# Après avoir modifié ou créé des fichiers dans src/...
git add .
git commit -m "Description claire du travail effectué"
git push origin feature/votre-nom
```

> ⚠️ Chaque collaborateur doit faire **au minimum 2 commits** sur sa branche.

### 6. Ouvrir une Pull Request

1. Sur GitHub, cliquer sur le bandeau jaune **"Compare & pull request"** qui apparaît automatiquement.
2. Remplir la Pull Request :
   - **Titre** : ex. `Ajout du  Médicaments`
   - **Description** : courte explication de ce qui a été fait
   - Vérifier que c'est bien : `base: dev` ← `compare: feature/votre-nom`
3. Cliquer sur **Create pull request**.

✅ La Pull Request est envoyée, le QA et le Chef de Projet reçoivent une notification 

---

## 🔍 Côté QA

1. Recevoir la notification ( GitHub ).
2. Aller dans l'onglet **Pull Requests**.
3. Tester la fonctionnalité ( vérifier visuellement et fonctionnellement).
4. Choisir une action :

| Action | Signification |
|---|---|
| ✅ **Approve** | Travail validé, prêt à être fusionné |
| 💬 **Request changes** | Demande de correction avant validation |
| ❌ **Close pull request** | Travail refusé |

## 🔀 Côté Chef de Projet

Une fois la Pull Request approuvée par le QA :

1. Aller dans l'onglet **Pull Requests**.
2. Cliquer sur **Merge pull request** → le travail est intégré dans `dev`.

---

## ✅ Règles importantes

- ⚠️ **Ne jamais travailler directement sur `main`**, toujours sur `dev` ou sur sa branche `feature/votre-nom`.
- ✅ Chaque collaborateur travaille sur **sa propre branche**, créée depuis `dev`.
- ✅ Toute contribution passe par une **Pull Request vers `dev`**.
- ✅ Le QA teste et approuve avant que le Chef de Projet ne merge.
- ✅ La branche `main` ne reçoit du contenu qu'à la **fin du projet**.
- ⚠️ **Au minimum 2 commits par collaborateur.**

---

## 🚀 Phases du projet

### 🔵 Phase 1 — Préparation
- [✔] Définir le sujet (gestion de pharmacie) et les pages
- [✔] Choisir la charte graphique (vert pharmacie, Tailwind CSS)
- [✔] Créer le projet React + TypeScript + Tailwind
- [✔] Mettre en place l'architecture des dossiers

### 🟡 Phase 2 — Fondations techniques
- [✔] Configuration React Router (navigation multi-pages)
- [✔] Context API (authentification, thème)
- [✔] Hooks personnalisés (`useAuth`, `useTheme`)
- [✔] Page de connexion avec mot de passe protégé

### 🟠 Phase 3 — Fonctionnalités métier
- [✔] Dashboard avec statistiques et graphiques (Recharts)
- [✔] CRUD Médicaments (ajouter, modifier, supprimer, rechercher)
- [✔] CRUD Employés (ajouter, modifier, supprimer, rechercher)
- [✔] Pages Profil, Contact, Paramètres

### 🟢 Phase 4 — Finalisation
- [✔] Vérification responsive complète (mobile / tablette / desktop)
- [✔] Tests croisés entre membres de l'équipe
- [ ] Déploiement sur **Vercel**
- [ ] Préparation de la soutenance avec le porwerpoint et la presentation

---

## 🔁 Fusion finale `dev` → `main`

Quand tout le contenu de `dev` est testé, validé et complet :

1. Le Chef de Projet ouvre une **Pull Request** : `dev → main`.
2. Le QA fait une dernière vérification globale.
3. Le Chef de Projet merge → **tout le contenu de `dev` arrive dans `main`** ✅.
4. Le projet est déployé sur **Vercel** 🌐 depuis la branche `main`.

---

## 📝 Mot du Chef de Projet au professeur

Ce projet a été organisé et supervisé par N'GOMA MABIALA RICKEN JAIBESS , en tant que Chef de Projet, avec OUSMANE FALL  au poste de QA.

Chaque membre de l'équipe a reçu une partie du travail clairement définie selon son rôle. L'avancement de chaque collaborateur a été suivi via les Pull Requests, testé par le QA, et validé avant intégration dans le projet.

> *Projet développé avec rigueur et esprit d'équipe — PharmaLink 💊*
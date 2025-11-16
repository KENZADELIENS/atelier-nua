# 🎨 ATELIER NUA - Galerie de Haute Couture

Site web de la galerie d'art Atelier Nua spécialisée dans la haute couture.

---

## 🚀 DÉPLOIEMENT SUR GITHUB PAGES (GRATUIT)

### ✅ ÉTAPE 1 : Installer Node.js

1. Allez sur **[nodejs.org](https://nodejs.org)**
2. Téléchargez la version **LTS** (recommandée)
3. Installez avec les paramètres par défaut

---

### ✅ ÉTAPE 2 : Créer un repository GitHub

1. Allez sur **[github.com](https://github.com)**
2. Connectez-vous (ou créez un compte gratuit)
3. Cliquez sur le **"+" en haut à droite** → **"New repository"**
4. Nom du repository : **`atelier-nua`**
5. Description : "Galerie d'art haute couture"
6. Cochez **"Public"**
7. **NE PAS** cocher "Initialize with README"
8. Cliquez sur **"Create repository"**

---

### ✅ ÉTAPE 3 : Ouvrir un terminal dans votre dossier de projet

**Windows :**
- Ouvrez votre dossier de projet
- Dans la barre d'adresse, tapez `cmd` et appuyez sur Entrée
- OU : Shift + Clic droit dans le dossier → "Ouvrir PowerShell ici"

**Mac :**
- Clic droit dans le dossier → Services → "Nouveau terminal au dossier"
- OU : Ouvrez Terminal, tapez `cd ` et glissez le dossier dedans

---

### ✅ ÉTAPE 4 : Exécuter ces commandes

**Copiez et collez ces commandes UNE PAR UNE dans votre terminal :**

```bash
# 1. Installer les dépendances
npm install
```

Attendez que ça termine (peut prendre 2-3 minutes)...

```bash
# 2. Initialiser Git
git init
```

```bash
# 3. Ajouter tous les fichiers
git add .
```

```bash
# 4. Créer le premier commit
git commit -m "Initial commit - Atelier Nua"
```

```bash
# 5. Renommer la branche en main
git branch -M main
```

```bash
# 6. Connecter à GitHub (REMPLACEZ VOTRE-USERNAME par votre nom d'utilisateur GitHub !)
git remote add origin https://github.com/VOTRE-USERNAME/atelier-nua.git
```

⚠️ **IMPORTANT** : Remplacez `VOTRE-USERNAME` par votre vrai nom d'utilisateur GitHub !

Exemple : si votre nom d'utilisateur est "marie123", la commande devient :
```bash
git remote add origin https://github.com/marie123/atelier-nua.git
```

```bash
# 7. Pousser vers GitHub
git push -u origin main
```

Si on vous demande vos identifiants GitHub, entrez-les.

```bash
# 8. DÉPLOYER ! 🚀
npm run deploy
```

Attendez 2-3 minutes...

---

### ✅ ÉTAPE 5 : Activer GitHub Pages

1. Sur GitHub, allez dans votre repository **atelier-nua**
2. Cliquez sur **"Settings"** (en haut)
3. Dans le menu de gauche, cliquez sur **"Pages"**
4. Sous **"Branch"**, sélectionnez **`gh-pages`** dans le menu déroulant
5. Cliquez sur **"Save"**
6. Attendez 2-3 minutes

---

### 🎉 VOTRE SITE EST EN LIGNE !

Votre site sera accessible à l'adresse :
```
https://VOTRE-USERNAME.github.io/atelier-nua/
```

Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub.

**TOUT LE MONDE DANS LE MONDE peut maintenant accéder à votre site ! 🌍**

---

## 🔄 METTRE À JOUR VOTRE SITE

Si vous modifiez votre site plus tard :

```bash
# 1. Sauvegarder les changements
git add .
git commit -m "Description de vos changements"
git push

# 2. Redéployer
npm run deploy
```

---

## ❓ PROBLÈMES COURANTS

### "npm: command not found"
→ Vous devez installer Node.js depuis [nodejs.org](https://nodejs.org)

### "git: command not found"
→ Installez Git depuis [git-scm.com](https://git-scm.com)

### Le site ne s'affiche pas
→ Attendez 5 minutes après le déploiement
→ Videz le cache de votre navigateur (Ctrl+Shift+R)

### Images ne se chargent pas
→ Vérifiez que vous utilisez bien les imports `figma:asset/...` 
→ Ou utilisez ImageWithFallback pour les images publiques

---

## 📞 SUPPORT

Si vous avez des questions, consultez :
- [Documentation GitHub Pages](https://pages.github.com)
- [Documentation Vite](https://vitejs.dev)

---

**Félicitations ! Votre galerie Atelier Nua est maintenant accessible au monde entier ! 🎊**

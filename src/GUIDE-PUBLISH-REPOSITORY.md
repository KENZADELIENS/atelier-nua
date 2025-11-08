# 🚀 COMMENT FAIRE "PUBLISH REPOSITORY" (GUIDE VISUEL)

## 📋 AVANT DE COMMENCER

Vous avez besoin de :
- ✅ Un compte GitHub (créé sur https://github.com)
- ✅ Votre projet téléchargé sur votre Mac
- ✅ GitHub Desktop installé

---

## 📥 ÉTAPE 1 : TÉLÉCHARGER GITHUB DESKTOP

1. Allez sur **https://desktop.github.com**
2. Cliquez sur **"Download for macOS"**
3. Ouvrez le fichier téléchargé (`.dmg`)
4. Glissez l'icône **GitHub Desktop** dans le dossier **Applications**
5. Ouvrez **GitHub Desktop** depuis Applications

✅ **GitHub Desktop est installé !**

---

## 🔐 ÉTAPE 2 : SE CONNECTER À GITHUB

1. Dans GitHub Desktop, vous verrez un écran de bienvenue
2. Cliquez sur **"Sign in to GitHub.com"**
3. Une page web s'ouvre
4. Connectez-vous avec votre compte GitHub
5. Cliquez sur **"Authorize desktop"**
6. Retournez dans GitHub Desktop

✅ **Vous êtes connecté !**

---

## 📂 ÉTAPE 3 : AJOUTER VOTRE PROJET

### **SI VOUS AVEZ TÉLÉCHARGÉ VOTRE PROJET DEPUIS FIGMA MAKE :**

1. Dans GitHub Desktop, cliquez sur **"File"** (en haut à gauche)
2. Cliquez sur **"Add Local Repository..."**
3. Une fenêtre s'ouvre
4. Cliquez sur **"Choose..."**
5. **Trouvez et sélectionnez** votre dossier `atelier-nua` (là où sont tous vos fichiers)
6. Cliquez sur **"Ouvrir"**
7. Cliquez sur **"Add Repository"**

### **SI ÇA DIT "This directory does not appear to be a Git repository" :**

**C'est normal !** Faites ceci :

1. Cliquez sur **"create a repository"** (le lien bleu dans le message d'erreur)
2. Une fenêtre s'ouvre avec des options
3. **Laissez tout par défaut**
4. Décochez **"Keep this code private"** si coché
5. Cliquez sur **"Create Repository"**

✅ **Votre projet est ajouté !**

---

## 🚀 ÉTAPE 4 : PUBLISH REPOSITORY (LA PARTIE IMPORTANTE !)

Maintenant, vous allez voir votre projet dans GitHub Desktop :

1. **En haut à gauche**, vous verrez le nom de votre dépôt : **`atelier-nua`**

2. **Au milieu**, vous verrez tous vos fichiers listés (App.tsx, package.json, etc.)

3. **EN BAS À GAUCHE**, vous verrez deux champs :
   - **Summary (required)** → Tapez : `Initial commit - Atelier Nua`
   - **Description** → Laissez vide

4. Cliquez sur le bouton bleu **"Commit to main"** (en bas à gauche)

5. ⚡ **MAINTENANT LA PARTIE MAGIQUE :**
   
   En haut, vous verrez un gros bouton bleu qui dit :
   
   **"Publish repository"** 📤
   
   Cliquez dessus !

6. Une fenêtre s'ouvre avec ces options :

   ```
   Name: atelier-nua
   Description: (laissez vide)
   ☐ Keep this code private  ← DÉCOCHEZ CETTE CASE !
   Organization: None
   ```

7. **IMPORTANT :** Assurez-vous que **"Keep this code private"** est **DÉCOCHÉ** ✅
   (Le site doit être Public pour GitHub Pages gratuit)

8. Cliquez sur **"Publish repository"**

9. ⏳ **Attendez 5-10 secondes...**

10. ✅ **TERMINÉ !** Le bouton disparaît et vous voyez maintenant **"Fetch origin"** ou **"Push origin"**

---

## 🎉 VOTRE CODE EST SUR GITHUB !

Vous pouvez vérifier en allant sur :

```
https://github.com/VOTRE-USERNAME/atelier-nua
```

(Remplacez `VOTRE-USERNAME` par votre vrai nom d'utilisateur GitHub)

Vous devriez voir tous vos fichiers ! 🎊

---

## 🌐 ÉTAPE 5 : ACTIVER GITHUB PAGES

**MAINTENANT, on active le site public :**

1. Allez sur **https://github.com/VOTRE-USERNAME/atelier-nua**

2. Cliquez sur **"Settings"** (onglet en haut, à droite)

3. Dans le menu de gauche, **scrollez vers le bas**

4. Cliquez sur **"Pages"**

5. Sous **"Build and deployment"** :
   - **Source** : Cliquez sur le menu déroulant
   - Sélectionnez **"GitHub Actions"**

6. La page se recharge automatiquement

7. Vous verrez un message : 
   ```
   Your site is ready to be published at https://VOTRE-USERNAME.github.io/atelier-nua/
   ```

8. **Retournez à la page principale** de votre dépôt (cliquez sur "Code" en haut)

9. Cliquez sur l'onglet **"Actions"** (en haut)

10. Vous verrez un workflow qui s'exécute :
    - 🟠 **Point orange** = En cours (attendez 2-3 minutes)
    - ✅ **Coche verte** = Terminé !

11. Une fois la coche verte apparue, allez sur :
    ```
    https://VOTRE-USERNAME.github.io/atelier-nua/
    ```

12. 🎉 **VOTRE SITE EST EN LIGNE ! ACCESSIBLE AU MONDE ENTIER ! 🌍**

---

## 🔄 POUR LES FUTURES MODIFICATIONS

Chaque fois que vous modifiez votre code :

1. Dans GitHub Desktop, vous verrez les fichiers modifiés à gauche
2. Écrivez un message dans "Summary" (ex: "Ajout de nouvelles images")
3. Cliquez sur **"Commit to main"**
4. Cliquez sur **"Push origin"** (en haut)
5. Attendez 2-3 minutes
6. ✅ Votre site se met à jour automatiquement !

---

## ❓ PROBLÈMES COURANTS

### **"Je ne trouve pas le bouton Publish repository"**
- Vérifiez que vous êtes bien connecté à GitHub (en haut à droite de GitHub Desktop)
- Assurez-vous d'avoir fait le "Commit to main" avant

### **"Le bouton est grisé"**
- Faites d'abord un "Commit to main" (en bas à gauche)

### **"Keep this code private est coché et je ne peux pas le décocher"**
- C'est peut-être parce que vous avez un compte gratuit
- Créez le dépôt manuellement sur GitHub.com en Public
- Puis dans GitHub Desktop : Repository → Repository Settings → Remote → Change URL

### **"Ça dit 'authentication failed'"**
- Allez dans GitHub Desktop → Preferences → Accounts
- Déconnectez-vous et reconnectez-vous

---

## 📊 RÉCAPITULATIF VISUEL

```
1. Télécharger GitHub Desktop
   ↓
2. Se connecter à GitHub
   ↓
3. Add Local Repository (votre dossier atelier-nua)
   ↓
4. Écrire "Initial commit" dans Summary
   ↓
5. Cliquer "Commit to main"
   ↓
6. Cliquer "Publish repository" 🎯
   ↓
7. Décocher "Keep this code private"
   ↓
8. Cliquer "Publish repository" (confirmer)
   ↓
9. Aller sur GitHub.com → Settings → Pages
   ↓
10. Source → GitHub Actions
   ↓
11. ✅ SITE EN LIGNE !
```

---

## 🎯 C'EST TOUT !

Une fois ces étapes complétées, votre site **Atelier Nua** sera accessible à tout le monde sur Internet ! 🚀

**Votre URL sera :**
```
https://VOTRE-USERNAME.github.io/atelier-nua/
```

**Félicitations ! 🎉🎨✨**

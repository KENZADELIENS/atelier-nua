
  # ATELIER NUA

Site de la galerie ATELIER NUA.

## Démarrage rapide

1. Installation des dépendances :
```bash
npm ci
```

2. Démarrer le serveur de développement :
```bash
npm run dev
```

3. Construire pour la production :
```bash
npm run build
```

## Déploiement automatique (GitHub Pages)

Le site se déploie automatiquement sur **GitHub Pages** à chaque push sur la branche `main`.

### URL publique
```
https://KENZADELIENS.github.io/atelier-nua/
```
Remplacez `KENZADELIENS` si votre nom d'utilisateur GitHub est différent.

### Pré-requis côté GitHub (à faire une seule fois)
1. Créez le dépôt public `atelier-nua` si ce n'est pas déjà fait.
2. Allez dans Settings → Pages → Source = GitHub Actions (si pas déjà actif).

### Ce que fait le workflow
1. Installe les dépendances (`npm ci`)
2. Construit le site (`npm run build`) → génère `dist/`
3. Publie le contenu sur GitHub Pages.

### Vérifier le déploiement
1. Onglet **Actions** : dernier workflow vert ✅
2. Onglet **Settings → Pages** : l'URL s'affiche
3. Tester l'URL publique en navigation privée (cache propre)

### Mise à jour du site
```
git add .
git commit -m "Update contenu"
git push origin main
```
Attendre ~2 minutes que l'action termine.

### Si l'URL renvoie 404
- Vérifier que le workflow est bien dans `.github/workflows/deploy.yml`
- Confirmer que la branche est `main`
- Regarder les logs de l'action (étape "Build site")

### Pour un déploiement manuel alternatif
Le script `npm run deploy` (dans `src/package.json`) pousse sur une branche `gh-pages`. Utilisez-le uniquement si vous préférez ne pas employer GitHub Actions.

---


## Sécurité

### Mesures de sécurité implémentées

- Content Security Policy (CSP) pour protéger contre les injections XSS
- Audit automatique des dépendances via GitHub Actions
- Mises à jour de sécurité automatiques via Dependabot
- Versions des dépendances fixées pour des builds reproductibles
- TypeScript pour la vérification statique du code

### Mises à jour de sécurité

Les mises à jour de sécurité sont gérées automatiquement :
1. Dependabot crée des PRs hebdomadaires pour les mises à jour de sécurité
2. Les GitHub Actions vérifient automatiquement les vulnérabilités
3. L'audit npm est exécuté à chaque build

### Vérification manuelle

Pour vérifier la sécurité localement :

```bash
# Installer les dépendances
npm ci

# Vérifier les vulnérabilités
npm audit

# Lancer les tests TypeScript
npm run build
```
  
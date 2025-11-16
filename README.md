
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
  
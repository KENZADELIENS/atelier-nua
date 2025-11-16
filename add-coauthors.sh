#!/bin/bash

# Script pour ajouter des co-auteurs aux commits
# Usage: Modifie ce fichier avec les vrais noms et emails de tes collaborateurs

echo "Ce script te montre comment créditer tes collaborateurs dans les commits"
echo ""
echo "OPTION 1: Pour le prochain commit, utilise:"
echo ""
echo "git commit -m 'Ton message de commit' -m 'Co-authored-by: Nom Personne2 <email2@example.com>' -m 'Co-authored-by: Nom Personne3 <email3@example.com>'"
echo ""
echo "OPTION 2: Configure un template de commit:"
echo ""
echo "# Crée un fichier .gitmessage dans ton projet"
cat > .gitmessage << 'EOF'


Co-authored-by: Nom Personne2 <email2@example.com>
Co-authored-by: Nom Personne3 <email3@example.com>
Co-authored-by: Nom Personne4 <email4@example.com>
EOF

echo "Template créé dans .gitmessage"
echo ""
echo "Pour l'utiliser automatiquement:"
echo "git config commit.template .gitmessage"

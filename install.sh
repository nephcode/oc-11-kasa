#!/bin/bash

# Installer Bun (si non installé)
if ! command -v bun &> /dev/null
then
    echo "Installation de Bun..."
    curl -fsSL https://bun.sh/install | bash
    # Charger Bun dans le terminal actuel
    source ~/.bashrc
fi

# Créer un nouveau projet Vite
echo "Création du projet Vite..."
bun create vite my-react-app --template react
cd my-react-app

# Installer les dépendances React, React Router, PropTypes, et Sass
echo "Installation des dépendances..."
bun add react react-dom react-router-dom prop-types sass

# Initialiser un dépôt Git
echo "Initialisation du dépôt Git..."
git init
git add .
git commit -m "Initial commit"

echo "Installation terminée avec succès !"

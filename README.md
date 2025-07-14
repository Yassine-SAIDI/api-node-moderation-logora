# Projet de Test Node avec API de Modération Logora

Ce projet est une démonstration d'utilisation de Node.js pour interagir avec l'API de modération Logora, permettant d'évaluer la qualité du contenu textuel et de prédire la nécessité de modération.

## Fonctionnalités

- **Modération Automatique :** Permet de modérer automatiquement les contenus textuels en identifiant les contenus potentiellement inappropriés ou haineux.
- **Évaluation de la Qualité :** Calcule un score de qualité pour le contenu textuel basé sur divers critères fournis par l'API de modération Logora.

## Technologies Utilisées

- **Node.js** (runtime)
- **Express.js** (serveur HTTP)
- **Axios** (client HTTP)
- **Jest** (tests automatisés)

## Utilisation

Le serveur devrait démarrer et écouter sur le port spécifié dans le fichier server.js, généralement le port 3000.

### Modération de Contenu
Envoyez une requête GET à /api/moderation/predict avec les paramètres text (le contenu à modérer) et language (le code de langue du contenu).

### Évaluation de la Qualité
Envoyez une requête GET à /api/moderation/score avec les mêmes paramètres pour obtenir un score de qualité du contenu.

## Tests
Pour exécuter les tests automatisés, utilisez la commande suivante : npm test

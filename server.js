const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Utilisation de bodyParser pour parser automatiquement les corps de requêtes JSON
app.use(bodyParser.json());

// Route pour obtenir une prédiction de modération basée sur le texte et la langue
app.get('/api/moderation/predict', async (req, res) => {
    try {
        // Extraction de text et language des paramètres de requête, avec "fr-FR" comme langue par défaut
        const { text, language } = req.query;
        // Appel à l'API de modération externe avec axios
        const response = await axios.get('https://moderation.logora.fr/predict', {
            params: {
                text: text,
                language: language || 'fr-FR'
            }
        });
        // Réponse avec la prédiction obtenue de l'API externe
        res.json({ prediction: response.data.prediction ? response.data.prediction["0"] : undefined });
    } catch (error) {
        // Gestion des erreurs en cas d'échec de la requête à l'API externe
        console.error(error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).send("Error calling the moderation API");
    }
});

// Route pour obtenir un score de qualité du contenu basé sur le texte et la langue
app.get('/api/moderation/score', async (req, res) => {
    try {
        // Extraction de text et language des paramètres de requête, avec "fr-FR" comme langue par défaut
        const { text, language } = req.query;
        // Appel à l'API de modération externe pour obtenir un score de qualité
        const response = await axios.get('https://moderation.logora.fr/score', {
            params: {
                text: text,
                language: language || 'fr-FR'
            }
        });
        // Réponse avec le score de qualité obtenu de l'API externe
        res.json({ score: response.data.score });
    } catch (error) {
        // Gestion des erreurs en cas d'échec de la requête à l'API externe
        console.error(error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).send("Error calling the moderation API");
    }
});

// Démarrage du serveur sur le port spécifié
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Exportation de l'application pour permettre les tests
module.exports = app;

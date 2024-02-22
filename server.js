const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Route GET /api/moderation/predict
app.get('/api/moderation/predict', async (req, res) => {
    try {
        const { text, language } = req.query;
        const response = await axios.get('https://moderation.logora.fr/predict', {
            params: {
                text: text,
                language: language || 'fr-FR'
            }
        });
       
        res.json({ prediction: response.data.prediction ? response.data.prediction["0"] : undefined });
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).send("Error calling the moderation API");
    }
});

// Route GET /api/moderation/score
app.get('/api/moderation/score', async (req, res) => {
    try {
        const { text, language } = req.query;
        const response = await axios.get('https://moderation.logora.fr/score', {
            params: {
                text: text,
                language: language || 'fr-FR'
            }
        });
        
        res.json({ score: response.data.score });
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).send("Error calling the moderation API");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;

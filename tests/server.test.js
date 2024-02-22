const request = require('supertest');
const app = require('../server'); // Import de l'app Express pour les tests

// Groupe de tests pour l'endpoint /api/moderation/predict
describe('GET /api/moderation/predict', () => {
    // Teste si l'endpoint répond avec un JSON contenant une prédiction
    it('responds with json containing a prediction', async () => {
        // Envoie une requête GET à l'endpoint avec des paramètres de requête spécifiés
        const response = await request(app)
            .get('/api/moderation/predict')
            .query({ text: 'example text', language: 'fr-FR' }) // Utilisation de .query pour ajouter des paramètres GET à la requête
            .expect('Content-Type', /json/) // S'attend à ce que le Content-Type de la réponse soit du JSON
            .expect(200); // S'attend à ce que le code de statut de la réponse soit 200
        // Vérifie que le corps de la réponse contient la propriété 'prediction'
        expect(response.body).toHaveProperty('prediction'); 
    });
});

// Groupe de tests pour l'endpoint /api/moderation/score
describe('GET /api/moderation/score', () => {
    // Teste si l'endpoint répond avec un JSON contenant un score
    it('responds with json containing a score', async () => {
        // Envoie une requête GET à l'endpoint avec des paramètres de requête spécifiés
        const response = await request(app)
            .get('/api/moderation/score')
            .query({ text: 'example text', language: 'fr-FR' }) // Utilisation de .query pour ajouter des paramètres GET à la requête
            .expect('Content-Type', /json/) // S'attend à ce que le Content-Type de la réponse soit du JSON
            .expect(200); // S'attend à ce que le code de statut de la réponse soit 200
        // Vérifie que le corps de la réponse contient la propriété 'score'
        expect(response.body).toHaveProperty('score'); 
    });
});

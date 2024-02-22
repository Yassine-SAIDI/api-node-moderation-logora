const request = require('supertest');
const app = require('../server'); 

// Test pour /api/moderation/predict utilisant GET
describe('GET /api/moderation/predict', () => {
    it('responds with json containing a prediction', async () => {
        const response = await request(app)
            .get('/api/moderation/predict')
            .query({ text: 'example text', language: 'fr-FR' }) // Utilisez .query pour les paramètres GET
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body).toHaveProperty('prediction'); 
    });
});

// Test pour /api/moderation/score utilisant GET
describe('GET /api/moderation/score', () => {
    it('responds with json containing a score', async () => {
        const response = await request(app)
            .get('/api/moderation/score')
            .query({ text: 'example text', language: 'fr-FR' }) // Utilisez .query pour les paramètres GET
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body).toHaveProperty('score'); 
    });
});

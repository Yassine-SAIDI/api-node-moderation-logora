# 🧪 API - Modération de contenu avec Node.js et Logora

Ce projet est une démonstration d'utilisation de **Node.js** pour interagir avec l'API de modération **Logora**, permettant d'analyser et d'évaluer la qualité de contenus textuels.

---

## 🎯 Fonctionnalités

- **Modération automatique** : identifie les contenus potentiellement inappropriés ou haineux.
- **Évaluation de la qualité** : retourne un score qualitatif pour un texte donné.

---

## 🛠️ Technologies utilisées

- Node.js (runtime)
- Express.js (serveur HTTP)
- Axios (requêtes HTTP)
- Jest (tests unitaires)

---

## 🚀 Utilisation

```bash
npm install
npm run start
```

Le serveur démarre sur `http://localhost:3000`

---

### 🔐 Modération de contenu

```http
GET /api/moderation/predict?text=Votre+texte&language=fr
```

### 📊 Évaluation de la qualité

```http
GET /api/moderation/score?text=Votre+texte&language=fr
```

---

## ✅ Lancer les tests

```bash
npm test
```

// server.js
require('dotenv').config(); // .env dosyasından API anahtarını yükler
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', async (req, res) => {
    try {
        const response = await axios.post('https://api.web3forms.com/submit', {
            access_key: process.env.WEB3FORMS_API_KEY, // API anahtarı burada sunucuda kullanılır
            ...req.body, // Form verisi
        });

        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Form submission failed", error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

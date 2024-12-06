require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Health check endpoint
app.get('/', (req, res) => {
    res.send('Azure OCR API is running!');
});

// OCR Endpoint
app.post('/ocr', async (req, res) => {
    const { imageUrl } = req.body;

    if (!imageUrl) {
        return res.status(400).json({ error: 'Image URL is required' });
    }

    try {
        const response = await axios.post(
            `${process.env.AZURE_ENDPOINT}vision/v3.2/ocr`,
            { url: imageUrl },
            {
                headers: {
                    'Ocp-Apim-Subscription-Key': process.env.AZURE_API_KEY,
                    'Content-Type': 'application/json',
                }
            }
        );

        const result = response.data;


        if (!result.regions || result.regions.length === 0) {
            return res.status(404).json({ message: 'No text detected in the image' });
        }


        res.json({ text: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to process image' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

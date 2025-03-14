import axios from 'axios';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Only POST requests allowed" });
    }

    const { query } = req.body;  // Get query from POST request

    if (!query) {
        return res.status(400).json({ error: "Query is required" });
    }

    try {
        const apiUrl = `https://api.diioffc.web.id/api/ai/openai?query=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl);  // Changed from POST to GET

        return res.status(200).json(response.data);
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        return res.status(500).json({ error: "Failed to fetch data" });
    }
}

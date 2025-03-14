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
        const response = await axios.post(`https://api.diioffc.web.id/api/tools/cekcuaca?query=${encodeURIComponent(query)}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}

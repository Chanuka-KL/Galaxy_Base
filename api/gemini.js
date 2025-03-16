export default async function handler(req, res) {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const response = await fetch(`https://api.diioffc.web.id/api/ai/gemini?query=${encodeURIComponent(query)}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from external API' });
    }
}

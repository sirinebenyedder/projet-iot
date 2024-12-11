import { addTemperature } from "../lib/action";





export async function POST(req) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    try {
          // Vérifier le type du contenu de la requête
    const contentType = req.headers.get('Content-Type');
    if (!contentType || contentType !== 'application/json') {
      return new Response(JSON.stringify({ error: 'Content-Type doit être application/json' }), { status: 400 });
    }
        console.log('Requête reçue:', req.body);
        const body = await req.json(); // Récupérer les données envoyées
        const response = await addTemperature(body); // Ajouter à la DB
        return new Response(JSON.stringify(response), { status: 200 });
    } catch (err) {
        console.error("Error in POST /data:", err);
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
        });
    }
}
 
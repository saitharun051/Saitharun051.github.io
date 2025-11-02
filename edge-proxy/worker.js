export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      })
    }

    if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405 })

    try {
      const { system, question } = await request.json()
      
      if (!env.GEMINI_API_KEY) {
        return new Response(JSON.stringify({ answer: 'Error: Missing GEMINI_API_KEY' }), { 
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        })
      }

      const body = {
        contents: [
          {
            role: 'user',
            parts: [
              { text: system + '\n\n' + question }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 400
        }
      }

      const res = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      if (!res.ok) {
        const t = await res.text()
        return new Response(JSON.stringify({ answer: `API Error: ${res.status} - ${t}` }), { 
          status: res.status,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        })
      }

      const data = await res.json()
      const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini'
      
      return new Response(JSON.stringify({ answer }), {
        headers: { 
          'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': '*'
        }
      })
    } catch (error) {
      return new Response(JSON.stringify({ answer: `Error: ${error.message}` }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      })
    }
  }
}

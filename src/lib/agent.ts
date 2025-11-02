export async function askAgent(question) {
  const endpoint = import.meta.env.VITE_AGENT_PROXY
  if (!endpoint) throw new Error('Missing VITE_AGENT_PROXY env var')

  console.log('Calling agent at:', endpoint)

  const payload = {
    system: `You are an intelligent research assistant for Sai Tharun Reddy Mulka's PhD portfolio. You have comprehensive knowledge about his research, education, projects, publications, and expertise. 

Your capabilities:
- Answer detailed questions about his research projects, work, education, and background
- Provide context and explanations about technical topics related to his research areas
- Connect concepts and explain how different projects relate to each other
- Discuss research methodologies, tools, and technologies he uses
- Elaborate on publications and their significance
- Share insights about his research focus areas

When answering:
1. First use the provided knowledge base to answer accurately
2. If the question requires broader context, you can incorporate relevant general knowledge
3. Always maintain accuracy and never fabricate specific details about his work
4. Be comprehensive, clear, and professional
5. Cite the knowledge provided when available

Research focus areas: Hardware Security, Agentic AI, Vision-Language Models, Distributed Systems, Cyber-Physical Systems

Always be helpful and thorough in your responses.`,
    question,
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    console.log('Response status:', res.status)

    if (!res.ok) {
      const errorText = await res.text()
      console.error('Error response:', errorText)
      throw new Error('Agent error: ' + res.status + ' - ' + errorText)
    }
    
    const data = await res.json()
    console.log('Agent response:', data)
    return data.answer
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

import kv from '@vercel/kv'

export async function POST (request: Request) {
  const { name, email, message } = await request.json()

  if (name == null || email == null || message == null) {
    return new Response('Por favor, ingrese todos los datos')
  }

  const uuid = crypto.randomUUID() // Genera una id unica
  const timestramp = Date.now()

  try {
    await kv.set(`contact-${uuid}`, { name, email, message, timestramp })
    return new Response('Mensaje de Contacto Guardado', { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response('Error interno', { status: 500 })
  }
}

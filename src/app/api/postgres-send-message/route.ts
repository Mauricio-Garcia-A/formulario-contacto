import { db } from '@vercel/postgres'

export async function POST (request: Request) {
  let client
  try {
    client = await db.connect()
  } catch (error) {
    console.error(error)
    return new Response('Error interno', { status: 500 })
  }

  const { name, email, message } = await request.json()

  if (name == null || email == null || message == null) {
    return new Response('Por favor, ingrese todos los datos')
  }

  try {
    await client.sql`INSERT INTO messages (name, email, message) VALUES (${name}, ${email}, ${message})`
    return new Response('Mensaje de Contacto Guardado', { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response('Error interno', { status: 500 })
  }
}

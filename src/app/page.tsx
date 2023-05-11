
import { Form } from '@/components/Form'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={`${inter.className} flex min-h-screen flex-col items-center justify-start p-24 bg-zinc-800`}>
      <h1 className='text-4xl font-bold tracking-tight text-center mb-4 text-white'>Formulario de Contacto</h1>
      <Form />
    </main>
  )
}

'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { toast } from 'sonner'
import confetti from 'canvas-confetti'
import { KVViewContacts } from './KVViewContacts'

export const Form = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    // const email = formData.get('email')
    const { email, name, message } = Object.fromEntries(formData.entries())

    // Llamar a la API (KV)
    fetch('/api/kv-send-message', {
      method: 'POST',
      body: JSON.stringify({ email, name, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      toast.success('Mensaje enviado con exito')
      form.reset()
      void confetti()

      // es un poco hack, pero funciona! --- No es lo mas correcto para actualizar el contador, pero funciona
      const $view = document.querySelector('#count-views')
      if ($view != null) $view.innerHTML = `${Number($view.textContent) + 1}`
    }).catch(() => {
      toast.error('Hubo un error al enviar el mensaje')
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='space-y-8 p-8 border rounded border-white/10 max-w-xl m-auto min-w-[400px]'>
        <Input
          type='email'
          id='email'
          label='Tu email'
          name='email'
          placeholder='ejemplo@dominio.com'
        />

        <Input
          type='text'
          id='name'
          label='Tu nombre'
          name='name'
          placeholder='Carlos Perez'
        />

        <Input
          type='text'
          id='message'
          label='Tu mensaje'
          name='message'
          placeholder='Mensaje que se quiere enviar'
        />
        <Button> Enviar Mensaje</Button>
      </form>
      <KVViewContacts />
    </>
  )
}

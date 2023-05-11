'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

export const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    // const email = formData.get('email')
    const { email, name, message } = Object.fromEntries(formData.entries())
  }

  return (
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
        type='message'
        id='message'
        label='Tu mensaje'
        name='text'
        placeholder='Mensaje que se quiere enviar'
      />
      <Button> Enviar Mensaje</Button>
    </form>
  )
}

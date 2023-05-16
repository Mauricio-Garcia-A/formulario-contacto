import { kv } from '@vercel/kv'

export const KVViewContacts = async () => {
  const keys = await kv.keys('contact-*')
  return (
    <small className=' text-white'>
      <span id='count-views'>{keys.length}</span> contactos registrados
    </small>
  )
}

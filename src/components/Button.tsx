export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type='submit'
      className='px-5 py-3 text-sm text-white font-medium text-center border border-white rounded-full w-full'
    >{children}
    </button>
  )
}

export const Input = (
  { id, name, label, type, placeholder, ...props }:
  { id: string, name: string, label: string, type: string, placeholder: string }
) => {
  return (
    <fieldset>
      <label className='block mb-2 text-sm font-medium text-gray-300' htmlFor={id}>{label}</label>
      <input
        className='border text-sm rounded-lg block w-full p-2.5 border-grey-600 placeholder-grey-400 text-white bg-zinc-700'
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </fieldset>
  )
}

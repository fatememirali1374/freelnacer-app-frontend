

function RadioInput({ label, watch, value, register, name, id, validationSchema }) {
  return (
    <div className=" flex items-center gap-x-2 text-secondary-600">

      <input className=" cursor-pointer w-4 h-4 accent-primary-800" type="radio" name={name} id={id} value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioInput


function RadioInput({label, value, onChange, name, id,checked}) {
  return (
    <div className=" flex items-center gap-x-2 text-secondary-600">
    <input className=" cursor-pointer w-4 h-4 accent-primary-800" type="radio" name={name} id={id} value={value}
    onChange={onChange} 
    checked={checked} />
    <label htmlFor={id}>{label}</label>
</div>
  )
}

export default RadioInput
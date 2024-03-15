
function Select({value,options,onChange}) {
  return (
    <select className=" textField__input py-2 text-xs bg-secondary-0" value={value} onChange={onChange}>
        {options.map((item)=>(
            <option key={item.value} value={item.value}>{item.label}</option>
        ))}
    </select>
  )
}

export default Select
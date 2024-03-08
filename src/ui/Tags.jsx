import { TagsInput } from "react-tag-input-component"


function Tags({name, value,onChange, label }) {
  return (
    <div>
    <label className=" mb-2 block text-secondary-700" > {label}</label>
    <TagsInput value={value} onChange={onChange} name={name} />
  </div>
  )
}

export default Tags

import TextField from "../../ui/TextField"

import Loading from "../../ui/Loading"
import { useForm } from "react-hook-form"
import useCreateProposal from "./useCreateProposal"

function CreateProposal({ onClose, projectId  }) {
  
 const {createProposal,isCreating}= useCreateProposal()
 
  const { register,
    formState: { errors }, handleSubmit ,reset} = useForm()

     const onSubmit= (data)=>{
      createProposal({ ...data, projectId }, {
        onSuccess: () => {
          onClose();
          reset()
        }
      })
    
    
     }

  return (
    <div>
      <form className=" space-y-8" onSubmit={handleSubmit(onSubmit)} >
        
        <TextField
          label="توضیحات پروژه"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "طول توضیحات کمتر از حد مجاز است"
            }
          }}
          errors={errors} />
        <TextField
          label="قیمت "
          name="price"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "قیمت ضروری است",
          }}
          errors={errors} />
         <TextField
          label="مدت زمان "
          name="duration"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
          errors={errors} />
        <button type="submit" className=" btn btn--primary w-full ">
          {isCreating ? (<Loading width="60" height="24" />) :
            (" تایید ")}</button>      </form>
    </div>
  )
}

export default CreateProposal
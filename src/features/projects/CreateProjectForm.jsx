import { useForm } from "react-hook-form"
import TextField from "../../ui/TextField"

function CreateProjectForm() {
const {register,
formState:{errors}, handleSubmit}= useForm()
const onSubmit=(data)=>{
  console.log(data);
}

  return (
    <div>
      <form className=" space-y-8" onSubmit={handleSubmit(onSubmit)} >
        <TextField
        label="عنوان پروژه"
        name="title" 
        register={register}
        required
        validationSchema={{
          required:"عنوان ضروری است",
          minLength:{
            value:10,
            message:"طول عنوان کمتر از حد مجاز است"
          }
        }}
        errors={errors} />
         <TextField
        label="توضیحات پروژه"
        name="descaription" 
        register={register}
        required
        validationSchema={{
          required:"توضیحات ضروری است",
          minLength:{
            value:50,
            message:"طول توضیحات کمتر از حد مجاز است"
          }
        }}
        errors={errors} />
         <TextField
        label="بودجه پروژه"
        name="budget"
        type="number" 
        register={register}
        required
        validationSchema={{
          required:"بودجه ضروری است",
        }}
        errors={errors} />
        <button type="submit" className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  )
}

export default CreateProjectForm
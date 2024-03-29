import { useForm } from "react-hook-form"
import TextField from "../../ui/TextField"
import RHFSelect from "../../ui/RHFSelect";
import { useState } from "react";
import Tags from "../../ui/Tags";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading"
import useEditProject from "./useEditProject";
function CreateProjectForm({ onClose, projectToEdit = {} }) {
  
  const { _id: editId } = projectToEdit
  const isEditSession = Boolean(editId)
  const { title, description, budget, category, deadline, tags: prevTags } = projectToEdit;

  let editValues = {}
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id || ""

    }
  }

  const { register,
    formState: { errors }, handleSubmit, reset } = useForm({ defaultValues: editValues })
  const { categories } = useCategories()
  const [tags, setTags] = useState(prevTags || [])
  const [date, setDate] = useState(new Date(deadline || ""))
  const { createProject, isCreating } = useCreateProject()
  const { editProject, isEditing } = useEditProject()
  const onSubmit = (data) => {
    const newProject = {
      ...data, tags,
      deadline: new Date(date).toISOString()
    }
    if (isEditSession) {
      editProject({ newProject, id: editId }, {
        onSuccess: () => {
          onClose();
          reset()
        }
      })

    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset()
        }
      })
    }

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
            required: "عنوان ضروری است",
            minLength: {
              value: 10,
              message: "طول عنوان کمتر از حد مجاز است"
            }
          }}
          errors={errors} />
        <TextField
          label="توضیحات پروژه"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 50,
              message: "طول توضیحات کمتر از حد مجاز است"
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
            required: "بودجه ضروری است",
          }}
          errors={errors} />
        <RHFSelect
          label="دسته بندی"
          name="category"
          register={register}
          required
          options={
            categories
          } />
        <Tags label="تگ ها " value={tags} onChange={setTags} name="tags" />
        <DatePickerField label="ددلاین" date={date} setDate={setDate} />
        <button type="submit" className=" btn btn--primary w-full ">
          {isCreating ||isEditing ? (<Loading width="60" height="24" />) :
            (" تایید ")}</button>      </form>
    </div>
  )
}

export default CreateProjectForm
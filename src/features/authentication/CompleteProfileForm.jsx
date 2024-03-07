
import TextField from "../../ui/TextField"
import { useMutation } from "@tanstack/react-query"
import { completeProfile } from "../../services/authService"
import toast from "react-hot-toast"
import Loading from "../../ui/Loading"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import RadioInputGroup from "../../ui/RadioInputGroup"


function CompleteProfileForm() {
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [role, setRole] = useState("")
    const { handleSubmit, register, watch, formState:{errors} } = useForm()
console.log(errors);
    const navigate = useNavigate();
    const { mutateAsync, isPending } = useMutation({
        mutationFn: completeProfile,
    })
    const onSubmit = async (data) => {

        try {
            const { user, message } = await mutateAsync(data)
            toast.success(message);
            if (user.status !== 2) {
                navigate("/");
                toast("پروفایل شما در انتظار تایید است", { icon: '👏' })
                return;
            }
            if (user.role === "OWNER") return navigate("/owner")
            if (user.role === "FREELANCER") return navigate("/freelancer")

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div className=" w-full sm:max-w-sm">
            <form className=" space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="نام و نام خانوادگی"
                    name="name"
                    register={register}
                    required
                    validationSchema={{
                        required: "نام و نام خانوادگی ضروری است",
                    }}
                    errors={errors}
                />
                <TextField
                    label="ایمیل"
                    name="email"
                    register={register}
                    required
                    validationSchema={{
                        required: "ایمیل ضروری است",
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                            message: 'ایمیل نامعتبر است.',
                          },
                    }}
                    errors={errors}
                />
                <RadioInputGroup
                    errors={errors}
                    register={register}
                    watch={watch}
                    configs={{
                        name: "role",
                        validationSchema: {
                            required: "انتخاب نقش ضروری است",
                        },
                         options: [
                            {
                                label: "کارفرما",
                                value: "OWNER"
                            },
                            {
                                label: "فریلنسر",
                                value: "FREELANCER"
                            }
                        ]
                    }}
                />
                <button type="submit" className=" btn btn--primary w-full ">
                    {isPending ? (<Loading width="60" height="24" />) :
                        (" تایید ")}</button>

            </form>
        </div>
    )
}

export default CompleteProfileForm
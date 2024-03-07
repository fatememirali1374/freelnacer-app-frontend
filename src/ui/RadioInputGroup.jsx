import RadioInput from "./RadioInput"


function RadioInputGroup({ register, watch, errors, configs }) {
    const { name, validationSchema = {}, options } = configs
    console.log(errors);
    return (
        <div>
            <div className="flex flex-wrap items-center justify-around">
                {options.map((option) => (
                    <RadioInput
                        key={option.value}
                        label={option.label}
                        value={option.value}
                        id={option.value}
                        register={register}
                        name={name}
                        watch={watch}
                        validationSchema={validationSchema}
                        errors={errors}
                    />
                ))}


            </div>

            {errors && errors[name] && (
                <span className=" text-error block text-sm mt-2">
                    {errors[name]?.message}
                </span>)}

        </div>
    )
}

export default RadioInputGroup
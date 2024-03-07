
import TextField from "../../ui/TextField"
import Loading from "../../ui/Loading"


function SendOTPForm({register, onSubmit, isSendingOtp }) {
    
   
    return (
        <div>
            <form className=" space-y-8" onSubmit={onSubmit}>
                <div>
                    <TextField name="phoneNumber"
                        label=" شماره موبایل"
                        register={register}
                    />
                </div>
                
                    <button type="submit" className=" btn btn--primary w-full ">
                        {isSendingOtp ? (<Loading width="60" height="24"/>) :
                         (" ارسال کد تایید ")}</button>
                 </form>
        </div>
    )
}

export default SendOTPForm
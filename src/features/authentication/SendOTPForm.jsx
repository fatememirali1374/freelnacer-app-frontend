
import TextField from "../../ui/TextField"
import Loading from "../../ui/Loading"


function SendOTPForm({onChange, phoneNumber, onSubmit, isSendingOtp }) {
    
   
    return (
        <div>
            <form className=" space-y-8" onSubmit={onSubmit}>
                <div>
                    <TextField name="phoneNumber"
                        value={phoneNumber}
                        label=" شماره موبایل"
                        onChange={onChange}
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
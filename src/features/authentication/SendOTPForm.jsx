import { useState } from "react"
import TextField from "../../ui/TextField"


function SendOTPForm() {
    const [phoneNumber, setPhoneNumber] = useState("")
    return (
        <div>
            <form className=" space-y-8">
                <div>
                    <TextField name="phoneNumber" 
                    value={phoneNumber}
                    label=" شماره موبایل"
                    onChange={(e)=>setPhoneNumber(e.target.value)} 
                     />
                </div>
                <button className=" btn btn--primary w-full ">ارسال کد تایید</button>
            </form>
        </div>
    )
}

export default SendOTPForm
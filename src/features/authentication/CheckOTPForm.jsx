import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import OTPInput from "react-otp-input"
import { checkOtp } from "../../services/authService"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { HiArrowRight } from "react-icons/hi"
import{CiEdit} from "react-icons/ci"
import Loading from "../../ui/Loading"


function CheckOTPForm({ phoneNumber, onBack, onResendOtp,setTime ,time, otpResponse }) {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("")
    
    const { mutateAsync ,isPending} = useMutation({
        mutationFn: checkOtp,
    })
    const checkOtpHandler = async (e) => {
        e.preventDefault();
        try {
            const { user, message } = await mutateAsync({ phoneNumber, otp })
            toast.success(message);
           
            if(!user.isActive) return navigate("/complete-profile")
            if(user.status !==2){
                navigate("/");
                toast("پروفایل شما در انتظار تایید است",{  icon: '👏'})
            }
                if (user.role === "OWNER") return navigate("/owner")
                if (user.role === "FREELANCER") return navigate("/freelancer")
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
        return () => {
            if (timer) clearInterval(timer)
        }
    }, [time])

    return (
        <div>
            <button onClick={onBack}> <HiArrowRight className=" w-6 h-6 mb-1 text-secondary-400 hover:text-secondary-500" /></button>
            <form className=" space-y-10 " onSubmit={checkOtpHandler}>
                <p className=" font-bold text-secondary-800">  لطفا کد تایید را وارد کنید</p>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input type="number"{...props} />}
                    containerStyle=" flex flex-row-reverse gap-x-2 justify-center"
                    inputStyle={{ width: "2.5rem", padding: "0.5rem 0.2rem", border: "1px solid rgb(var(--color-primary-300))", borderRadius: "0.5rem" }}
                />
                  <button type="submit" className=" btn btn--primary w-full ">
                        {isPending ? (<Loading width="60" height="24"/>) :
                         (" تایید ")}</button>
                         </form>

            <div className=" mt-4 font-normal">
                {otpResponse &&<p className=" flex items-center px-1"><span className="text-secondary-600">{otpResponse?.message}</span> <button onClick={onBack}><CiEdit className=" w-6 h-6 text-primary-700 hover:text-primary-900"/></button></p> }
            </div>
            <div className=" mt-4 flex justify-end" >
                {(time > 0) ? <p className=" text-secondary-400">{time} ثانیه تا ارسال مجدد کد </p> :
                    <button onClick={onResendOtp} className="text-primary-600 hover:text-primary-800">ارسال مجدد کد تایید</button>}
            </div>
        </div>
    )
}

export default CheckOTPForm
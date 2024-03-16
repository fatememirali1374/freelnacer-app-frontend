import { useEffect, useState } from "react"
import CheckOTPForm from "./CheckOTPForm"
import SendOTPForm from "./SendOTPForm"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { getOtp } from "../../services/authService"
import { useForm } from "react-hook-form"
import useUser from "./useUser"
import { useNavigate } from "react-router-dom"
const RESEND_TIME = 90

function AuthContiner() {
  const navigate= useNavigate()
  const [step, setStep] = useState(1)
  // const [phoneNumber, setPhoneNumber] = useState("")
  const { handleSubmit, register, getValues } = useForm()
  const [time, setTime] = useState(RESEND_TIME)

  
  const{user}= useUser()
 useEffect(()=>{
  if(user) navigate("/", {replace:true})
 },[user, navigate])
 
  const { isPending: isSendingOtp, mutateAsync, data: otpResponse } = useMutation({
    mutationFn: getOtp,
  })


  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data)
      toast.success(message);
      setStep(2)
      setTime(RESEND_TIME)
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOTPForm isSendingOtp={isSendingOtp}
          onSubmit={handleSubmit(sendOtpHandler)}
          register={register}
        // onSubmit={sendOtpHandler} 
        // phoneNumber={phoneNumber}
        //   onChange={(e) => setPhoneNumber(e.target.value)} 
        />;
      case 2:
        return <CheckOTPForm time={time}
          setTime={setTime}
          phoneNumber={getValues("phoneNumber")}
          onBack={() => setStep(s => s - 1)}
          onResendOtp={sendOtpHandler}
          otpResponse={otpResponse}
        />;
      default:
        return null
    }
  }
  return (
    <div className=" w-full sm:max-w-sm">
      {renderStep()}
    </div>
  )
}

export default AuthContiner
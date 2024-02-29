import { useState } from "react"
import CheckOTPForm from "./CheckOTPForm"
import SendOTPForm from "./SendOTPForm"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { getOtp } from "../../services/authService"

const RESEND_TIME = 90

function AuthContiner() {
  const [step, setStep] = useState(1)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [time, setTime] = useState(RESEND_TIME)
  const { isPending: isSendingOtp, mutateAsync, data: otpResponse } = useMutation({
    mutationFn: getOtp,
  })


  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber })
      toast.success(data.message);
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
        onSubmit={sendOtpHandler} 
        phoneNumber={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)} />;
      case 2:
        return <CheckOTPForm time={time} 
        setTime={setTime} 
        phoneNumber={phoneNumber} 
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
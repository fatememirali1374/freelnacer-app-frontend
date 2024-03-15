import { useForm } from "react-hook-form"
import RHFSelect from "../../ui/RHFSelect"
import { useQueryClient } from "@tanstack/react-query";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading"

const options = [
    {
        label: "رد شده",
        value: 0
    },
    {
        label: "در انتظار تایید",
        value: 1
    },
    {
        label: "تایید شده",
        value: 2
    }
]

function ChangeProposalStatus({ proposalId, onClose }) {
    const {id:projectId }= useParams()
    const { register, handleSubmit } = useForm()
    const{changeProposalStatus,isUpdating}=useChangeProposalStatus()
    const queryClient = useQueryClient();
    
    const onSubmit = (data) => {
       changeProposalStatus({proposalId, projectId, ...data},
        {
            onSuccess:()=>{
                onClose();
                queryClient.invalidateQueries({
                    queryKey: ["project",projectId]
                })
            }
        })
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4" >
                <RHFSelect
                    label="تغییر وضعیت درخواست"
                    name="status"
                    register={register}
                    required
                    options={
                        options
                    } />
                <div className="flex justify-between gap-x-24 items-center">
                    <button className="btn btn--danger py-3 flex-1"
                    onClick={onClose}
                    >
                        لغو
                    </button>
                    <button
                        className="btn btn--primary flex-1"
                    >
                        {isUpdating ? (<Loading width="60" height="24" />) :
            (" تایید ")}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ChangeProposalStatus
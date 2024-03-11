
import { HiOutlineLogout } from "react-icons/hi";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading"
function Logout() {
    const {isPending,logout}=useLogout()
    const handleClike=()=>{
        logout()
    }
  return isPending?(
    <Loading/>
  ):(
    <button onClick={handleClike}>
        <HiOutlineLogout className=" w-5 h-5 text-secondary-500 hover:text-error"/>
    </button>
  )
  
}

export default Logout
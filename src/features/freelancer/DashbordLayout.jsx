import DashbordHeader from "../../ui/DashbordHeader"
import Loading from "../../ui/Loading"
import useProposals from "../proposals/useProposals"

import Stats from "./Stats"

function DashbordLayout() {
    const {isLoading, proposals}=useProposals()
    
    if(isLoading) return <Loading/>
  return (
    <div>
        <DashbordHeader/>
        <Stats proposals={proposals}/>
    </div>
  )
}

export default DashbordLayout
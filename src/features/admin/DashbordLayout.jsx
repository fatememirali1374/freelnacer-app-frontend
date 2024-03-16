import useProjects from "../../hooks/useProjects"
import useUsers from "../../hooks/useUsers"
import DashbordHeader from "../../ui/DashbordHeader"
import Loading from "../../ui/Loading"
import useProposals from "../proposals/useProposals"

import Stats from "./Stats"

function DashbordLayout() {
    const {isLoading:isLoading1, proposals}=useProposals()
    const {isLoading:isLoading2,projects}= useProjects()
    const {isLoading:isLoading3,users}= useUsers()
    if(isLoading1|| isLoading2 ||isLoading3) return <Loading/>
  return (
    <div>
        <DashbordHeader/>
        <Stats proposals={proposals.length} users={users.length} projects={projects.length}/>
    </div>
  )
}

export default DashbordLayout
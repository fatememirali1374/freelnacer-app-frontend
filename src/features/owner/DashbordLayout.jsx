import Loading from "../../ui/Loading"
import useOwnerProjects from "../projects/useOwnerProjects"
import DashbordHeader from "./DashbordHeader"
import Stats from "./Stats"

function DashbordLayout() {
    const {isLoading, projects}=useOwnerProjects()
    if(isLoading) return <Loading/>
  return (
    <div>
        <DashbordHeader/>
        <Stats projects={projects}/>
    </div>
  )
}

export default DashbordLayout
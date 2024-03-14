import DashbordHeader from "../../ui/DashbordHeader";
import Loading from "../../ui/Loading"
import useOwnerProjects from "../projects/useOwnerProjects"

import Stats from "./Stats"

function DashbordLayout() {
    const {isLoading, projects}=useOwnerProjects()
    console.log(projects);
    if(isLoading) return <Loading/>
  return (
    <div>
        <DashbordHeader/>
        <Stats projects={projects}/>
    </div>
  )
}

export default DashbordLayout
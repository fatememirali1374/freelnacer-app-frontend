import { useState } from "react"
import ProjectTable from "../features/projects/ProjectTable"
import Modal from "../ui/Modal"
import CreateProjectForm from "../features/projects/CreateProjectForm"


function Projects() {
  const [isAddOpen,setIsAddOpen]= useState(false)
  return (
    <div>
      <div className=" flex items-center justify-between mb-8">
        <h1 className=" font-bold">پروژه های شما</h1>
        <button onClick={()=>setIsAddOpen(true)} className=" btn btn--primary">+اضافه کردن پروژه</button>
        <Modal title="اضافه کردن پروژه جدید" open={isAddOpen} onClose={() => setIsAddOpen(false)}>
          <CreateProjectForm/>
                        </Modal>
      </div>
        <ProjectTable/>
    </div>
  )
}

export default Projects

import CreateProjectForm from './CreateProjectForm'
import Modal from '../../ui/Modal'
import { useState } from 'react'

function ProjectsHeader() {
  const [isAddOpen, setIsAddOpen] = useState(false)
  return (
    <div className=" flex items-center justify-between mb-8">
      <h1 className=" font-black text-secondary-700 text-xl ">پروژه های شما</h1>
      <button onClick={() => setIsAddOpen(true)} className=" btn btn--primary">+اضافه کردن پروژه</button>
      <Modal title="اضافه کردن پروژه جدید" open={isAddOpen} onClose={() => setIsAddOpen(false)}>
        <CreateProjectForm onClose={() => setIsAddOpen(false)} />
      </Modal>
    </div>
  )
}

export default ProjectsHeader
import { HiArrowRight } from "react-icons/hi"
import useMoveBack from "../../hooks/useMoveBack"

function ProjectHeader({ project }) {
  const moveBack= useMoveBack()
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={moveBack} >
        <HiArrowRight className=" w-6 h-6 mb-1 text-secondary-400 hover:text-secondary-500" />
      </button>
      <h1 className="font-bold text-secondary-800">لیست درخواست های {project.title}</h1>
    </div>
  )
}

export default ProjectHeader
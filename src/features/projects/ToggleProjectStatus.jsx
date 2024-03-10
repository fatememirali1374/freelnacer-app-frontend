
import useToggleProjectStatuse from './useToggleProjectStatus'
import Loading from '../../ui/Loading'
import Toggle from '../../ui/Toggle'

function ToggleProjectStatus({ project }) {
  const {status}=project
  const enabled= status === "OPEN" ? true : false
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatuse()
  const toggleHandler = () => {
    const newStatus = project.status === "OPEN" ? "CLOSED" : "OPEN"
    toggleProjectStatus({
      data: { status: newStatus },
      id: project._id
    })
  }
  return (
    <div className=' w-[5rem]'>
      {isUpdating ? (<Loading height={20} width={50} />) : (
       <Toggle label={project.status === "OPEN" ? "باز" : "بسته"} enabled={enabled} onChange={toggleHandler} />
      )
      }
    </div>
  )
}

export default ToggleProjectStatus





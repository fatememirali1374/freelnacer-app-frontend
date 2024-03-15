
import Table from '../../../ui/Table'
import truncateText from '../../../utils/truncateText'
import { toPersianNumbersWithComma } from '../../../utils/toPersianNumbers'
import toLocalDateShort from '../../../utils/toLocalDateShort'
import {MdAssignmentAdd} from "react-icons/md"
import { useState } from 'react'
import Modal from '../../../ui/Modal'
import CreateProposal from '../../proposals/CreateProposal'

function ProjectRow({ project, index }) {
 const {title, status, budget,deadline}= project
const [open, setOpen]= useState(false)
    return (

        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateText(title,20)}</td>
            <td>{toPersianNumbersWithComma(budget)}</td>
            <td>{toLocalDateShort(deadline)}</td>
          
            <td>
                {status === "OPEN" ?
                (<span className="badge badge--success">باز</span>) :
                (<span className="badge badge--danger">بسته</span>)}
                         
                </td>

          
            <td>
       <button onClick={()=>setOpen(true)}>
        <MdAssignmentAdd className=' w-5 h-5 text-primary-900'/>
       </button>
       <Modal open= {open} onClose={()=>setOpen(false)} title={`درخواست انجام پروژه ${title}`}>
<CreateProposal onClose={()=>setOpen(false)} projectId={project._id}/>
       </Modal>
            </td>
          
        </Table.Row>
    )
}

export default ProjectRow
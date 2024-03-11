import { useState } from "react"
import Modal from "../../ui/Modal"
import Table from "../../ui/Table"
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers"
import truncateText from "../../utils/truncateText"
import ChangeProposalStatus from "./ChangeProposalStatus"


const statusStyle = [
    {
        label: "رد شده",
        className: "badge--danger"
    },
    {
        label: "در انتظار تایید",
        className: "badge--secondary"
    },
    {
        label: "تایید شده",
        className: "badge--success"
    }
]

function ProposalRow({ proposal, index }) {
 
    const { description, duration, user, price, status } = proposal;
    const [open, setOpen]= useState(false)
    return (

        <Table.Row>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{truncateText(description, 30)}</td>
            <td>  {toPersianNumbers(duration)} روز</td>
            <td>{toPersianNumbersWithComma(price)}</td>

            <td>
                <span className={`badge ${statusStyle[status].className}`}>
                    {statusStyle[status].label}
                </span>
            </td>
            <td>
                <button onClick={()=>setOpen(true)} className="btn">تغییر وضعیت</button>
              <Modal title="تغییر وضعیت" open={open} onClose={() => setOpen(false)}>
                <ChangeProposalStatus proposalId={proposal._id} onClose={() => setOpen(false)}/>
                </Modal> 
            </td>

        </Table.Row>
    )
}

export default ProposalRow
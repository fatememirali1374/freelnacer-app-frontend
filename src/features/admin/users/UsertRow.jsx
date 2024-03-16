
import Table from '../../../ui/Table'
import Modal from '../../../ui/Modal'
import { toPersianNumbers } from '../../../utils/toPersianNumbers'
import { useState } from 'react'
import ChangeUserStatus from './ChangeUserStatus'

const persianRole={
    ADMIN:"ادمین",
OWNER:"کارفرما",
FREELANCER:"فریلنسر"

}

const userStatus = [
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

function UserRow({ user, index }) {
    const [open, setOpen]= useState(false)
const{status}=user
    return (

        <Table.Row>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user?.email || "-"}</td>
            <td>{toPersianNumbers(user.phoneNumber)}</td>
            <td>{persianRole[user.role]}</td>
            <td>   <span className={` badge ${userStatus[status].className}`}>
                {userStatus[status].label}</span>      
            </td>
            <td>
                <button onClick={()=>setOpen(true)} className="btn">تغییر وضعیت</button>
              <Modal title=" تغییر وضعیت کاربر" open={open} onClose={() => setOpen(false)}>
                <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)}/>
                </Modal> 
            </td>
            
        </Table.Row>
    )
}

export default UserRow

import Modal from '../../ui/Modal'
import { useState } from 'react'

function ProposalsHeader() {
    const [isAddOpen,setIsAddOpen]= useState(false)
  return (
    <div className=" flex items-center justify-between mb-8">
        <h1 className=" font-bold text-secondary-700 text-xl mb-8">پروپزال های شما</h1>
        <button onClick={()=>setIsAddOpen(true)} className=" btn btn--primary">+اضافه کردن پروپزال</button>
        <Modal title="اضافه کردن پروپزال جدید" open={isAddOpen} onClose={() => setIsAddOpen(false)}>
                        </Modal>
      </div>
  )
}

export default ProposalsHeader
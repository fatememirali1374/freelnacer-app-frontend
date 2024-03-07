
function ConfirmDelete({resourceName,onClose,disabled,onConfirm}) {
  return (
    <div >
        <h2 className=" font-bold text-base mb-8">  آیا از حذف {resourceName} اطمینان دارید؟
</h2>
<div className="flex justify-between gap-x-24 items-center">
    <button
    onClick={onClose}
    disabled={disabled}
     className="btn btn--primary flex-1" >
لغو
    </button>
    <button 
    onClick={onConfirm}
    disabled={disabled} 
    className="btn btn--danger py-3 flex-1">
        تایید
    </button>
</div>
    </div>
  )
}

export default ConfirmDelete
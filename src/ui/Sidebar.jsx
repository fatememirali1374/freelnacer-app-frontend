


function Sidebar({ children }) {
  return (
    <div className=" bg-secondary-0 row-start-1 row-span-2 border-l border-secondary-300">
      <ul className="flex flex-col gap-y-4">
        {children}
       
      </ul>
    </div>
  )
}

export default Sidebar;


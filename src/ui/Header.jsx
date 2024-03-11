import UserAvatar from "../features/authentication/UserAvatar"
import HeaderMenu from "./HeaderMenu"


function Header() {


  return (
    <div className=" bg-secondary-0 py-4 px-8 border-b border-secondary-300 ">
      <div className="container xl:max-w-screen-lg flex items-center justify-end gap-x-8" >
        <UserAvatar  />
        <HeaderMenu />

      </div>
    </div>
  )
}

export default Header
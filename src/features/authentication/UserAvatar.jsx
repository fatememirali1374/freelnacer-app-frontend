import useUser from "./useUser"


function UserAvatar() {
  const {user, isLoading}=useUser()
  console.log(user);
  return (
    <div className={`flex items-center gap-x-2 text-secondary-600 ${isLoading?" blur-sm opacity-50":""}`}>
      <img className=" w-7 h-7 rounded-full object-cover object-center" src={user?.avatarUrl||"/public/user.jpg"} alt="user-account" />
        <h1>{user?.name}</h1>
    </div>
  )
}

export default UserAvatar
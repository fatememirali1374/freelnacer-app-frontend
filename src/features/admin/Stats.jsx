import { HiCollection, HiOutlineViewGrid, HiUserGroup } from "react-icons/hi";
import Stat from "../../ui/Stat";
import {toPersianNumbers} from "../../utils/toPersianNumbers"
function Stats({ proposals, projects, users }) {

   
    return (
        <div className=" grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <Stat title="کاربران" value={toPersianNumbers(users)} icon={<HiUserGroup className=" w-20 h-20" />} color="yellow" />

            <Stat title=" درخواست ها" value={toPersianNumbers(proposals)} icon={<HiCollection className=" w-20 h-20" />} color="primary" />
            <Stat title="پروژه ها" value={toPersianNumbers(projects)} icon={<HiOutlineViewGrid className=" w-20 h-20" />} color="green" />

        </div>
    )
}

export default Stats
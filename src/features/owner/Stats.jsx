import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";
import Stat from "./Stat";

function Stats({ projects }) {
    const numOfProjects = projects.length;
    const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
    const numOfProposals = projects.reduce(
        (acc, curr) => curr.proposals.length + acc, 0
    )
    return (
        <div className=" grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <Stat title="تعداد پروژه ها" value={numOfProjects} icon={<HiOutlineViewGrid className=" w-20 h-20" />}  color="primary"/>
            <Stat title="تعداد پروژه های واگذار شده" value={numOfAcceptedProjects} icon={<HiCurrencyDollar className=" w-20 h-20" />}  color="green" />
            <Stat title="تعداد درخواست ها" value={numOfProposals} icon={<HiCollection className=" w-20 h-20"  />} color="yellow" />

        </div>
    )
}

export default Stats
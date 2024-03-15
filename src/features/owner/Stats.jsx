import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ projects }) {
    const numOfProjects = projects.length;
    const numOfAcceptedProjects = projects.filter((p) => p.status === "CLOSED").length;
    const numOfProposals = projects.reduce(
        (acc, curr) => curr.proposals.length + acc, 0
    )
    return (
        <div className=" grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <Stat title=" پروژه ها" value={numOfProjects} icon={<HiOutlineViewGrid className=" w-20 h-20" />}  color="primary"/>
            <Stat title=" پروژه های واگذار شده" value={numOfAcceptedProjects} icon={<HiCurrencyDollar className=" w-20 h-20" />}  color="green" />
            <Stat title=" درخواست ها" value={numOfProposals} icon={<HiCollection className=" w-20 h-20"  />} color="yellow" />

        </div>
    )
}

export default Stats